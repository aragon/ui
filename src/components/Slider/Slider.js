import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { springs } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'

const BAR_HEIGHT = 6
const HANDLE_SIZE = 24
const HANDLE_SHADOW_MARGIN = 15
const PADDING = 5
const MIN_WIDTH = HANDLE_SIZE * 10
const HEIGHT = Math.max(HANDLE_SIZE, BAR_HEIGHT) + PADDING * 2

// The check on window.DOMRect is needed for the JSDOM environment, which has
// window but not window.DOMRect. JSDOM is used by default in Jest.
const DEFAULT_RECT =
  typeof window === 'undefined' || typeof window.DOMRect !== 'function'
    ? { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 }
    : new window.DOMRect()

class Slider extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    onUpdate: PropTypes.func,
    theme: PropTypes.object,
  }
  static defaultProps = {
    value: 0,
    onUpdate: () => {},
  }
  state = {
    pressed: false,
  }
  componentWillUnmount() {
    this.dragStop()
  }
  handleRef = element => {
    this._mainElement = element
    this._document = element && element.ownerDocument
  }
  getRect = () => {
    const now = Date.now()

    // Cache the rect if the last poll was less than a second ago
    if (this._lastRect && now - this._lastRectTime < 1000) {
      return this._lastRect
    }

    this._lastRectTime = now
    this._lastRect = this._mainElement
      ? this._mainElement.getBoundingClientRect()
      : DEFAULT_RECT

    return this._lastRect
  }
  clientXFromEvent(event) {
    return (event.touches ? event.touches.item(0) : event).clientX
  }
  updateValueFromClientX(clientX) {
    const rect = this.getRect()
    const x = Math.min(rect.width, Math.max(0, clientX - rect.x))
    this.props.onUpdate(x / rect.width)
  }
  dragStart = event => {
    this.dragStop()
    const clientX = this.clientXFromEvent(event)
    this.setState({ pressed: true }, () => {
      this.updateValueFromClientX(clientX)
    })
    this._document.addEventListener('mouseup', this.dragStop)
    this._document.addEventListener('touchend', this.dragStop)
    this._document.addEventListener('mousemove', this.dragMove)
    this._document.addEventListener('touchmove', this.dragMove)
  }
  dragStop = () => {
    this.setState({ pressed: false })
    this._document.removeEventListener('mouseup', this.dragStop)
    this._document.removeEventListener('touchend', this.dragStop)
    this._document.removeEventListener('mousemove', this.dragMove)
    this._document.removeEventListener('touchmove', this.dragMove)
  }
  dragMove = event => {
    if (!this.state.pressed) {
      return
    }

    this.updateValueFromClientX(this.clientXFromEvent(event))
  }
  getHandleStyles(pressProgress) {
    return {
      transform: pressProgress.interpolate(
        t => `translate3d(0, calc(${t * 0.5}px - 50%), 0)`
      ),
      boxShadow: pressProgress.interpolate(
        t => `0 1px 3px rgba(0, 0, 0, ${0.1 - 0.02 * t})`
      ),
      background: pressProgress.interpolate(
        t => `hsl(0, 0%, ${100 * (1 - t * 0.01)}%)`
      ),
    }
  }
  getHandlePositionStyles(value) {
    return {
      transform: value.interpolate(
        t => `translate3d(calc(${t * 100}% + ${HANDLE_SHADOW_MARGIN}px), 0, 0)`
      ),
    }
  }
  getActiveBarStyles(value, pressProgress) {
    return {
      transform: value.interpolate(t => `scaleX(${t}) translateZ(0)`),
    }
  }
  render() {
    const { pressed } = this.state
    const { onUpdate, value, theme, ...props } = this.props
    return (
      <Spring
        native
        config={springs.swift}
        to={{
          pressProgress: Number(pressed),
          value: Math.max(0, Math.min(1, value)),
        }}
      >
        {({ value, pressProgress }) => (
          <div
            css={`
              min-width: ${MIN_WIDTH}px;
              padding: 0 ${HANDLE_SIZE / 2 + PADDING}px;
              ${unselectable};
            `}
            {...props}
          >
            <div
              ref={this.handleRef}
              onMouseDown={this.dragStart}
              onTouchStart={this.dragStart}
              css={`
                position: relative;
                height: ${HEIGHT}px;
                cursor: pointer;
              `}
            >
              <Bars>
                <Bar
                  css={`
                    background: ${theme.surfaceUnder};
                  `}
                />
                <Bar
                  style={this.getActiveBarStyles(value, pressProgress)}
                  css={`
                    transform-origin: 0 0;
                    background: ${theme.selected};
                  `}
                />
              </Bars>

              <HandleClip>
                <HandlePosition
                  style={this.getHandlePositionStyles(value, pressProgress)}
                >
                  <animated.div
                    style={this.getHandleStyles(pressProgress)}
                    onMouseDown={this.dragStart}
                    onTouchStart={this.dragStart}
                    css={`
                      position: absolute;
                      top: 50%;
                      left: 0;
                      width: ${HANDLE_SIZE}px;
                      height: ${HANDLE_SIZE}px;
                      border: 1px solid ${theme.border};
                      border-radius: 50%;
                      cursor: pointer;
                    `}
                  />
                </HandlePosition>
              </HandleClip>
            </div>
          </div>
        )}
      </Spring>
    )
  }
}

const Bars = styled(animated.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  border-radius: 2px;
  height: ${BAR_HEIGHT}px;
`

const Bar = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const HandleClip = styled.div`
  overflow: hidden;
  width: calc(100% + ${HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2}px);
  height: calc(100% + ${HANDLE_SHADOW_MARGIN * 2}px);
  transform-origin: 50% 50%;
  transform: translate(
    -${HANDLE_SIZE / 2 + HANDLE_SHADOW_MARGIN}px,
    -${HANDLE_SHADOW_MARGIN}px
  );
`

const HandlePosition = styled(animated.div)`
  width: calc(100% - ${HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2}px);
  height: 100%;
  transform-origin: 50% 50%;
`

export default props => {
  const theme = useTheme()
  return <Slider theme={theme} {...props} />
}
