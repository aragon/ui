import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import theme from '../../theme'
import { spring as springConf, unselectable } from '../../utils'

const BAR_HEIGHT = 6
const HANDLE_SIZE = 24
const PADDING = 5
const MIN_WIDTH = HANDLE_SIZE * 10
const HEIGHT = Math.max(HANDLE_SIZE, BAR_HEIGHT) + PADDING * 2

const SPRING = { stiffness: 400, damping: 28, precision: 0.01 }

class Slider extends React.Component {
  static defaultProps = {
    value: 0,
    onUpdate: () => {},
  }
  state = {
    pressed: false,
    animate: true,
  }
  componentWillUnmount() {
    this.dragStop()
  }
  handleRef = element => {
    this._mainElement = element
    this.updateRect()
  }
  updateRect() {
    if (this._mainElement) {
      const rect = this._mainElement.getBoundingClientRect()
      this.setState({ rect })
    }
  }
  clientXFromEvent(event) {
    return (event.touches ? event.touches.item(0) : event).clientX
  }
  updateValueFromClientX(clientX) {
    const { rect } = this.state
    const x = Math.min(rect.width, Math.max(0, clientX - rect.x))
    this.props.onUpdate(x / rect.width)
  }
  dragStart = event => {
    this.dragStop()
    this.updateRect()
    this.updateValueFromClientX(this.clientXFromEvent(event))
    this.setState({ pressed: true, animate: true })
    document.addEventListener('mouseup', this.dragStop)
    document.addEventListener('touchend', this.dragStop)
    document.addEventListener('mousemove', this.dragMove)
    document.addEventListener('touchmove', this.dragMove)
  }
  dragStop = () => {
    this.setState({ pressed: false, animate: true })
    document.removeEventListener('mouseup', this.dragStop)
    document.removeEventListener('touchend', this.dragStop)
    document.removeEventListener('mousemove', this.dragMove)
    document.removeEventListener('touchmove', this.dragMove)
  }
  dragMove = event => {
    if (!this.state.pressed) {
      return
    }
    this.setState({ animate: false })
    this.updateValueFromClientX(this.clientXFromEvent(event))
  }
  getHandleStyles(value, pressProgress) {
    const { rect } = this.state
    const x = value * (rect ? rect.width : 0)
    const y = pressProgress // 1px down when pressed
    const shadowOpacity = 0.13 * (1 - pressProgress)
    return {
      transform: `translate(${x}px, calc(-50% + ${y}px))`,
      boxShadow: ` 0 4px 8px 0 rgba(0, 0, 0, ${shadowOpacity})`,
      background: `hsl(0, 0%, ${100}%)`,
    }
  }
  getActiveBarStyles(value, pressProgress) {
    const saturationDiff = 1 + 0.2 * pressProgress
    return {
      transform: `scaleX(${value}`,
      background: `hsl(179, ${76 * saturationDiff}%, 48%)`,
    }
  }
  render() {
    const { pressed, rect, animate } = this.state
    const value = Math.max(0, Math.min(1, this.props.value))
    return (
      <Motion
        defaultStyles={{ pressProgress: 0, value: 0 }}
        style={{
          value: animate ? spring(value, SPRING) : value,
          pressProgress: spring(Number(pressed), SPRING),
        }}
      >
        {({ value, pressProgress }) => (
          <Main>
            <Area
              innerRef={this.handleRef}
              onMouseDown={this.dragStart}
              onTouchStart={this.dragStart}
            >
              <Bars>
                <BaseBar />
                <ActiveBar
                  pressed={pressed}
                  style={this.getActiveBarStyles(value, pressProgress)}
                />
              </Bars>
              <Handle
                pressed={pressed}
                style={this.getHandleStyles(value, pressProgress)}
              />
            </Area>
          </Main>
        )}
      </Motion>
    )
  }
}

const Main = styled.div`
  min-width: ${MIN_WIDTH}px;
  padding: 0 ${HANDLE_SIZE / 2 + PADDING}px;
  ${unselectable};
`

const Area = styled.div`
  position: relative;
  height: ${HEIGHT}px;
  cursor: pointer;
`

const Bars = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  overflow: hidden;
  border-radius: 2px;
  height: ${BAR_HEIGHT}px;
`

const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const BaseBar = Bar.extend`
  background: #edf3f6;
`

const ActiveBar = Bar.extend`
  transform-origin: 0 0;
`

const Handle = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${-HANDLE_SIZE / 2}px;
  width: ${HANDLE_SIZE}px;
  height: ${HANDLE_SIZE}px;
  border: 0.5px solid #dcecf5;
  border-radius: 50%;
`

export default Slider
