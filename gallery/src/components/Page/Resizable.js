import React from 'react'
import styled from 'styled-components'

const StyledResizer = styled.div`
  background-color: #ffff;
  box-shadow: 0 1.2rem 3.6rem rgba(0, 0, 0, 0.2);
  width: 45px;
  cursor: w-resize;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const ResizableContent = styled.div.attrs({
  style: props => ({ width: props.width }),
})`
  background-color: #f2f2f2;
  padding: 16px;
`

const ResizableContainer = styled.div`
  display: flex;
`

class Resizable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minWidth: props.minWidth || 0,
      contentProps: {
        width: '100%',
      },
    }
  }

  componentDidMount() {
    this.parentNode = this.containerNode.parentNode
  }

  componentWillReceiveProps({ width }) {
    const { contentProps } = this.state
    this.setState({
      contentProps: { ...contentProps, width: width },
    })
  }

  handleOnMouseDown = e => {
    window.addEventListener('mousemove', this.handleOnMouseMove, false)
    window.addEventListener('mouseup', this.handleOnMouseUp, false)
  }

  handleOnMouseMove = e => {
    const { minWidth, contentProps } = this.state
    const updatedWidth = e.clientX - this.containerNode.offsetLeft
    const updatedWidthWithResizerHandle =
      updatedWidth + this.resizerNode.offsetWidth

    if (
      contentProps.width !== updatedWidth &&
      updatedWidthWithResizerHandle <= this.parentNode.offsetWidth &&
      updatedWidth >= minWidth
    ) {
      this.setState({
        contentProps: { ...contentProps, width: updatedWidth },
      })
    }
  }

  handleOnMouseUp = e => {
    window.removeEventListener('mousemove', this.handleOnMouseMove, false)
    window.removeEventListener('mouseup', this.handleOnMouseUp, false)
  }

  render() {
    const { contentProps } = this.state
    return (
      <ResizableContainer innerRef={node => (this.containerNode = node)}>
        <ResizableContent
          {...contentProps}
        >
          {this.props.children}
        </ResizableContent>
        <StyledResizer
          onMouseDown={this.handleOnMouseDown}
          innerRef={node => (this.resizerNode = node)}
        >
          ||
        </StyledResizer>
      </ResizableContainer>
    )
  }
}

export default Resizable
