import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import StyleSheet from 'styled-components/lib/models/StyleSheet';

const StyledFrame = styled.iframe`
  border: none;
  resize: horizontal;
  overflow: auto;
  width: 100%;
  max-width: 100%;
  height: ${({ height }) => `${height}px`}
`

class Frame extends Component {
  state = { styles: StyleSheet.instance.toHTML() }
  componentDidMount() {
    this.node.contentDocument.body.style.background = 'none'
    this.setState({
      iframeHead: this.node.contentDocument.head,
      iframeBody: this.node.contentDocument.body
    })
    const updatedStyles = StyleSheet.instance.toHTML();

    if (this.state.styles !== updatedStyles) {
      this.setState({ styles: updatedStyles });
    }
  }

  componentDidUpdate() {
    const updatedStyles = StyleSheet.instance.toHTML();
    const updatedHeight = this.state.iframeBody.offsetHeight;

    if (this.state.styles !== updatedStyles) {
      this.setState({ styles: updatedStyles });
    }
    if (this.state.iframeHeight !== updatedHeight) {
      this.setState({ iframeHeight: updatedHeight })
    }
  }

  render() {
    const { children, ...rest } = this.props
    const { styles, iframeHead, iframeBody, iframeHeight } = this.state
    return (
      <StyledFrame {...rest} innerRef={node => (this.node = node)} height={iframeHeight}>
        {iframeHead && ReactDOM.createPortal(<div dangerouslySetInnerHTML={{ __html: styles }} />, iframeHead)}
        {iframeBody && ReactDOM.createPortal(children, iframeBody)}
      </StyledFrame>
    )
  }
}

export default Frame