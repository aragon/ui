import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import { theme, spring as springConf, unselectable } from '@aragon/ui'

const BAR_HEIGHT = 6
const HANDLE_SIZE = 24
const PADDING = 5
const MIN_WIDTH = HANDLE_SIZE * 10
const HEIGHT = Math.max(HANDLE_SIZE, BAR_HEIGHT) + PADDING * 2

const SPRING = { stiffness: 380, damping: 28, precision: 0.001 }

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
    this.stopDrag()
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
  updateValueFromClientX(clientX) {
    const { rect } = this.state
    const x = Math.min(rect.width, Math.max(0, clientX - rect.x))
    this.props.onUpdate(x / rect.width)
  }
  startDrag() {
    this.stopDrag()
    this.updateRect()
    document.addEventListener('mouseup', this.handleMouseUp)
    document.addEventListener('mousemove', this.handleMouseMove)
  }
  stopDrag() {
    document.removeEventListener('mouseup', this.handleMouseUp)
    document.removeEventListener('mousemove', this.handleMouseMove)
  }
  handleMouseDown = e => {
    this.updateValueFromClientX(e.clientX)
    this.setState({ pressed: true, animate: true })
    this.startDrag()
  }
  handleMouseUp = e => {
    this.setState({ pressed: false, animate: true })
    this.stopDrag()
  }
  handleMouseMove = e => {
    if (!this.state.pressed) {
      return
    }
    this.setState({ animate: false })
    this.updateValueFromClientX(e.clientX)
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
            <Area onMouseDown={this.handleMouseDown} innerRef={this.handleRef}>
              <Bars>
                <BaseBar />
                <ActiveBar
                  pressed={pressed}
                  style={{
                    transform: `scaleX(${value}`,
                    transformOrigin: '0 0',
                  }}
                />
              </Bars>
              <Handle
                pressed={pressed}
                style={{
                  transform: `
                  translate(
                    ${value * (rect ? rect.width : 0)}px,
                    calc(-50% + ${pressProgress * 2}px)
                  )
                `,
                  boxShadow: `
                  0 4px 8px 0 rgba(0, 0, 0, ${0.13 * (1 - pressProgress)})
                `,
                }}
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
  background: #1dd9d5;
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
  background: ${({ pressed }) => (pressed ? '#fcfcfc' : '#ffffff')};
`

export default Slider
