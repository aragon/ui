import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, Transition } from 'react-spring'
import { stylingProps } from '../../utils'
import { useTheme } from '../../theme'
import { springs, textStyle, GU, RADIUS } from '../../style'
import Text from '../Text/Text'

let id = 0

const move = pixel => `translate3d(0,${pixel}px,0)`

const ToastContext = React.createContext(() => {
  throw new Error(
    "For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!"
  )
})

const useToast = () => useContext(ToastContext)

const { Provider, Consumer: Toast } = ToastContext

class ToastHubProvider extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    position: PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
    shift: PropTypes.number,
    showIndicator: PropTypes.bool,
    threshold: PropTypes.number,
    timeout: PropTypes.number,
    top: PropTypes.bool,
  }

  static defaultProps = {
    position: 'right',
    showIndicator: false,
    threshold: Infinity,
    timeout: 4000,
    top: false,
  }

  state = { items: [], leaving: [] }
  cancelMap = new WeakMap()
  add = msg => {
    const threshold = this.props.threshold
    this.setState(state => {
      // This calls cancel on all leaving animations that stack up too much
      if (threshold !== Infinity) {
        state.leaving
          .slice(threshold - 1)
          .forEach(item => this.cancel(item, true))
      }
      return { items: [...state.items, { key: id++, msg }] }
    })
  }
  remove = item =>
    this.setState(state => ({
      items: state.items.filter(i => i.key !== item.key),
      leaving: [item, ...state.leaving],
    }))
  config = (item, state) => {
    const config = springs.lazy
    // Return custom configs on leave (includes the life-line duration)
    return state === 'leave'
      ? [{ duration: this.props.timeout }, config, config]
      : config
  }
  cancel = (item, secondPass = false) => {
    if (this.cancelMap.has(item)) {
      const fn = this.cancelMap.get(item)
      fn()
      // There are 3 passes: lifeline, opacity->0, height->0
      if (secondPass) fn()
    }
  }
  leave = item => async (next, cancel) => {
    // Save cancel so that it can be used interactively
    this.cancelMap.set(item, cancel)
    // Lifeline first
    await next({ to: { life: '0%' } })
    // Then fade out
    await next({ to: { opacity: 0 } })
    // Then shrink, the last "true" informs Keyframes that is is the last frame
    await next({ to: { height: 0 } }, true)
    this.setState(state => ({
      leaving: state.leaving.filter(i => i.key !== item.key),
    }))
  }
  render() {
    const { children, showIndicator, position, top, shift } = this.props
    const { items, leaving } = this.state
    const showList = items.length > 0 || leaving.length > 0
    return (
      <React.Fragment>
        <Provider value={this.add}>{children}</Provider>
        {showList && (
          <ToastList
            config={this.config}
            items={this.state.items}
            leave={this.leave}
            position={position}
            remove={this.remove}
            showIndicator={showIndicator}
            top={top}
            {...stylingProps(this)}
            shift={shift}
          />
        )}
      </React.Fragment>
    )
  }
}

// ToastList is separated from ToastHubProvider so we can skip its rendering
const ToastList = React.memo(
  ({
    config,
    items,
    leave,
    position,
    remove,
    showIndicator,
    top,
    shift,
    ...props
  }) => {
    const theme = useTheme()

    return (
      <Container position={position} top={top} shift={shift} {...props}>
        <Transition
          native
          items={items}
          keys={item => item.key}
          from={{ opacity: 0, height: 0, life: '100%', transform: move(30) }}
          enter={{ opacity: 1, height: 'auto', transform: move(0) }}
          leave={leave}
          onRest={remove}
          config={config}
        >
          {item =>
            /* eslint-disable react/prop-types */
            ({ life, ...props }) => (
              <Message style={props}>
                <Content top={top} theme={theme}>
                  {showIndicator && <Life top={top} style={{ right: life }} />}
                  <Text.Paragraph>{item.msg}</Text.Paragraph>
                </Content>
              </Message>
            )
          /* eslint-enable react/prop-types */
          }
        </Transition>
      </Container>
    )
  }
)

ToastList.propTypes = {
  config: PropTypes.func,
  items: PropTypes.array,
  leave: PropTypes.func,
  position: PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
  remove: PropTypes.func,
  shift: PropTypes.number,
  showIndicator: PropTypes.bool,
  top: PropTypes.bool,
}

const Container = styled.div`
  position: fixed;
  z-index: 1000;
  top: ${props => (props.top ? `${3 * GU}px` : 'unset')};
  bottom: ${props => (props.top ? 'unset' : `${3 * GU}px`)};
  margin: 0 auto;
  left: ${({ shift }) => `calc(${3 * GU}px + ${shift ? `${shift}px` : '0px'})`};
  right: ${({ shift }) =>
    `calc(${3 * GU}px + ${shift ? `${shift}px` : '0px'})`};
  display: flex;
  flex-direction: ${props => (props.top ? 'column-reverse' : 'column')};
  pointer-events: none;
  align-items: center;
  @media (min-width: 700px) {
    align-items: ${props => {
      switch (props.position) {
        case 'left':
          return 'flex-start'
        case 'right':
          return 'flex-end'
        default:
          return 'center'
      }
    }};
  }
`

const Message = styled(animated.div)`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  @media (min-width: 700px) {
    width: 42ch;
  }
`

const Content = styled.div`
  ${textStyle('body3')}
  color: ${({ theme }) => theme.surface};
  background: rgba(48, 64, 79, 0.8);
  margin-top: ${props => (props.top ? '0' : `${1.25 * GU}px`)};
  margin-bottom: ${props => (props.top ? `${1.25 * GU}px` : '0')};
  padding: ${2 * GU}px ${2.5 * GU}px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  border-radius: ${RADIUS}px;
  overflow: hidden;
`

const Life = styled(animated.div)`
  position: absolute;
  bottom: ${props => (props.top ? `${1.25 * GU}px` : '0')};
  left: 0px;
  width: auto;
  background-image: linear-gradient(130deg, #00b4e6, #00f0e0);
  height: 5px;
`

export { ToastHubProvider as ToastHub, Toast, useToast }
