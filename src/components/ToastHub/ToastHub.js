import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { animated, Transition } from 'react-spring'
import RootPortal from '../RootPortal/RootPortal'
import { useViewport } from '../../providers/Viewport/Viewport'
import { stylingProps } from '../../utils'
import { useTheme } from '../../theme'
import { MEDIUM_RADIUS, springs, textStyle, GU } from '../../style'

let id = 0

const move = pixel => `translate3d(0,${pixel}px,0)`

export const ToastContext = React.createContext(() => {
  throw new Error(
    "For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!"
  )
})

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

  state = { items: [], leaving: [], preLeaving: [] }

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
      return { items: [...state.items, { key: id++, msg }], preLeaving: [] }
    })
  }

  remove = item => {
    this.setState(state => ({
      items: state.items.filter(i => i.key !== item.key),
      leaving: state.leaving.includes(item)
        ? state.leaving
        : [item, ...state.leaving],
    }))
  }

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

    // Add to the pre-leaving list, to know when there are no more toasts
    // displayed even though they are still finishing their leaving transition.
    this.setState(state => ({
      preLeaving: [...state.preLeaving, item],
    }))

    // Then fade out
    await next({ to: { opacity: 0 } })

    // Then shrink, the last "true" informs Keyframes that is is the last frame
    await next({ to: { height: 0 } }, true)

    this.setState(state => ({
      leaving: state.leaving.filter(i => i.key !== item.key),
      preLeaving: state.preLeaving.filter(i => i.key !== item.key),
    }))
  }

  render() {
    const { children, showIndicator, position, top, shift } = this.props
    const { items, leaving, preLeaving } = this.state

    const renderList = items.length > 0 || leaving.length > 0
    const itemsVisible =
      leaving.length === preLeaving.length && leaving.length > 0
        ? false
        : renderList

    return (
      <React.Fragment>
        <ToastContext.Provider
          value={{
            itemsVisible,
            add: this.add,
          }}
        >
          {children}
        </ToastContext.Provider>
        {renderList && (
          <RootPortal>
            <ToastList
              config={this.config}
              items={items}
              leave={this.leave}
              position={position}
              remove={this.remove}
              showIndicator={showIndicator}
              top={top}
              {...stylingProps(this)}
              shift={shift}
            />
          </RootPortal>
        )}
      </React.Fragment>
    )
  }
}

// ToastList is separated from ToastHubProvider so we can skip its rendering
const ToastList = React.memo(function ToastList({
  config,
  items,
  leave,
  position,
  remove,
  showIndicator,
  top,
  shift,
  ...props
}) {
  const theme = useTheme()
  const { below } = useViewport()
  const spacing = below('medium') ? 2 * GU : 3 * GU
  return (
    <div
      css={`
        position: fixed;
        z-index: 1000;
        top: ${top ? `${spacing}px` : 'unset'};
        bottom: ${top ? 'unset' : `${spacing}px`};
        left: ${spacing + (shift || 0)}px;
        right: ${spacing + (shift || 0)}px;
        display: flex;
        margin: 0 auto;
        flex-direction: ${top ? 'column-reverse' : 'column'};
        pointer-events: none;
        align-items: ${(() => {
          if (below('medium')) return 'center'
          if (position === 'left') return 'flex-start'
          if (position === 'right') return 'flex-end'
          return 'center'
        })()};
      `}
      {...props}
    >
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
            <animated.div
              style={props}
              css={`
                box-sizing: border-box;
                position: relative;
                width: ${below('medium') ? '100%' : '42ch'};
              `}
            >
              <div
                css={`
                  display: flex;
                  align-items: center;
                  overflow: hidden;
                  height: ${6 * GU}px;
                  margin-top: ${top ? '0' : `${1.25 * GU}px`};
                  margin-bottom: ${top ? `${1.25 * GU}px` : '0'};
                  padding: 0 ${2.5 * GU}px;
                  ${textStyle('body3')};
                  color: ${theme.floatingContent};
                  background: ${theme.floating.alpha(0.95)};
                  border-radius: ${MEDIUM_RADIUS}px;
                `}
              >
                {showIndicator && (
                  <animated.div
                    style={{ right: life }}
                    css={`
                      position: absolute;
                      bottom: ${top ? `${1.25 * GU}px` : '0'};
                      left: 0;
                      width: auto;
                      height: 5px;
                      background-image: linear-gradient(
                        130deg,
                        #00b4e6,
                        #00f0e0
                      );
                    `}
                  />
                )}
                <p>{item.msg}</p>
              </div>
            </animated.div>
          )
        /* eslint-enable react/prop-types */
        }
      </Transition>
    </div>
  )
})

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

const useToast = () => useContext(ToastContext).add
const Toast = props => props.children(useToast())

export default ToastHubProvider
export { Toast, useToast }
