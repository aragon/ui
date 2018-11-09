import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, Transition } from 'react-spring'
import { springs } from '../../utils/styles/spring'
import Text from '../Text/Text'

let id = 0
const { Provider, Consumer: Toast } = React.createContext(() => {
  throw "For Toast to work it needs to be part of a MessageHub's tree, which has to be delcared at an upper level!"
})

class MessageHub extends React.PureComponent {
  static propTypes = {
    config: PropTypes.object,
    timeout: PropTypes.number,
    showIndicator: PropTypes.bool,
    threshold: PropTypes.number,
    position: PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
    top: PropTypes.bool,
  }

  static defaultProps = {
    config: springs.lazy,
    timeout: 4000,
    showIndicator: false,
    threshold: Infinity,
    position: 'right',
    top: false,
  }

  state = { items: [], leaving: [] }
  cancelMap = new WeakMap()
  add = msg => {
    const threshold = this.props.threshold
    this.setState(state => {
      // This calls cancel on all leaving animations that stack up too much
      if (threshold !== Infinity)
        state.leaving
          .slice(threshold - 1)
          .forEach(item => this.cancel(item, true))
      return { items: [...state.items, { key: id++, msg }] }
    })
  }
  remove = item =>
    this.setState(state => ({
      items: state.items.filter(i => i.key !== item.key),
      leaving: [item, ...state.leaving],
    }))
  config = (item, state) => {
    const config = this.props.config
    // If the state-machine flags a leave return three configs, the first being duration based
    // This will impact the leave function, which will cause three animations
    // For everything else return a default config
    return state === 'leave'
      ? [{ duration: this.props.timeout }, config, config]
      : config
  }
  cancel = (item, secondPass = false) => {
    if (this.cancelMap.has(item)) {
      const fn = this.cancelMap.get(item)
      fn()
      // There are 3 passes in leave, the lifeline and opacity->height
      // Calling cancel twice brings us to height->0
      if (secondPass) fn()
    }
  }
  leave = item => async (next, cancel) => {
    // Save cancel so that it can be used interactively
    this.cancelMap.set(item, cancel)
    // Suck the life out of it first, it's duration based & affects the indicator
    await next({ to: { life: 0 } })
    // Then fade out
    await next({ to: { opacity: 0 } })
    // Then shrink down, the last "true" informs Keyframes that is is the last frame
    // This is the only way for it to know when to call "onRest" on scripted animations
    await next({ to: { height: 0 } }, true)
    this.setState(state => ({
      leaving: state.leaving.filter(i => i.key !== item.key),
    }))
  }
  render() {
    const { children, showIndicator, position, top } = this.props
    return (
      <React.Fragment>
        <Provider value={this.add} children={children} />
        <Container position={position} top={top}>
          <Transition
            native
            items={this.state.items}
            keys={item => item.key}
            from={{ opacity: 0, height: 0, life: 1, transform: 'translate3d(0,30px,0)' }}
            enter={{ opacity: 1, height: 'auto', transform: 'translate3d(0,0px,0)' }}
            leave={this.leave}
            onRest={this.remove}
            config={this.config}
          >
            {item => ({ life, ...props }) => (
              <Message style={props}>
                <Content top={top}>
                  {showIndicator && (
                    <Life
                      top={top}
                      style={{ right: life.interpolate(l => `${l * 100}%`) }}
                    />
                  )}
                  <Text.Paragraph>{item.msg}</Text.Paragraph>
                </Content>
              </Message>
            )}
          </Transition>
        </Container>
      </React.Fragment>
    )
  }
}

const Container = styled('div')`
  position: fixed;
  z-index: 1000;
  top: ${props => (props.top ? '30px' : 'unset')};
  bottom: ${props => (props.top ? 'unset' : '30px')};
  margin: 0 auto;
  left: 30px;
  right: 30px;
  display: flex;
  flex-direction: ${props => (props.top ? 'column-reverse' : 'column')};
  pointer-events: none;
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
  @media (max-width: 700px) {
    align-items: center;
  }
`

const Message = styled(animated.div)`
  box-sizing: border-box;
  position: relative;
  width: 42ch;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const Content = styled('div')`
  color: white;
  background: #445159;
  opacity: 0.9;
  margin-top: ${props => (props.top ? '0' : '10px')};
  margin-bottom: ${props => (props.top ? '10px' : '0')};
  padding: 12px 22px;
  font-size: 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  border-radius: 3px;
  overflow: hidden;
`

const Life = styled(animated.div)`
  position: absolute;
  bottom: ${props => (props.top ? '10px' : '0')};
  left: 0px;
  width: auto;
  background-image: linear-gradient(130deg, #00b4e6, #00f0e0);
  height: 5px;
`

export { MessageHub, Toast }
