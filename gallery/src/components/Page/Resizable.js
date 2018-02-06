import React from 'react'
import styled from 'styled-components'
import { unselectable, theme } from '@aragon/ui'

const ResizableContainer = styled.div`
  display: flex;
`
const ResizableContent = styled.div`
  overflow: hidden;
  position: relative;
  padding: 0;
  border: 1px solid
    ${({ active }) =>
      active ? theme.contentBorderActive : theme.contentBorder};
  border-radius: 3px 0 0 3px;
`

const Resizer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  color: ${theme.textTertiary};
  background: ${theme.contentBackground};
  border: 1px solid
    ${({ active }) =>
      active ? theme.contentBorderActive : theme.contentBorder};
  border-left: 0;
  border-radius: 0 3px 3px 0;
  cursor: col-resize;
  ${unselectable()};
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

class Resizable extends React.Component {
  static defaultProps = {
    minWidth: 0,
    maxWidth: Number.MAX_VALUE,
  }

  constructor(props) {
    super(props)
    this.state = {
      contentWidth: props.width,
      dragging: false,
    }
  }

  componentDidMount() {
    this.parentNode = this.containerNode.parentNode
  }

  componentWillReceiveProps({ width = this.state.contentWidth }) {
    this.setState({
      contentWidth: width,
    })
  }

  handleOnMouseDown = e => {
    window.addEventListener('mousemove', this.handleOnMouseMove, false)
    window.addEventListener('mouseup', this.handleOnMouseUp, false)
    this.setState({ dragging: true })
  }

  handleOnMouseMove = e => {
    const { minWidth, maxWidth } = this.props
    const { contentWidth } = this.state
    const updatedWidth = e.clientX - this.containerNode.offsetLeft - 45 / 2
    const updatedWidthWithResizerHandle =
      updatedWidth + this.resizerNode.offsetWidth

    if (
      contentWidth !== updatedWidth &&
      updatedWidthWithResizerHandle <= this.parentNode.offsetWidth &&
      updatedWidth >= minWidth &&
      updatedWidth <= maxWidth
    ) {
      this.setState({ contentWidth: updatedWidth })
    }
  }

  handleOnMouseUp = e => {
    window.removeEventListener('mousemove', this.handleOnMouseMove, false)
    window.removeEventListener('mouseup', this.handleOnMouseUp, false)
    this.setState({ dragging: false })
  }

  render() {
    const { contentWidth, dragging } = this.state
    return (
      <ResizableContainer innerRef={node => (this.containerNode = node)}>
        <ResizableContent
          active={dragging}
          style={{ width: contentWidth == null ? '100%' : `${contentWidth}px` }}
        >
          {this.props.children}
          {dragging && <Overlay />}
        </ResizableContent>
        <Resizer
          active={dragging}
          onMouseDown={this.handleOnMouseDown}
          innerRef={node => (this.resizerNode = node)}
        >
          ||
        </Resizer>
      </ResizableContainer>
    )
  }
}

export default Resizable
