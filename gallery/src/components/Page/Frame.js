import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import StyleSheet from 'styled-components/lib/models/StyleSheet';

const StyledFrame = styled.iframe`
  border: none;
  width: 100%;
  height: ${props => `${props.height}px;`}
`

const StyleTag = (props) => (
  <style>{props.el.innerHTML}</style>
)

class Frame extends React.Component {
  state = { iframeHead: null, iframeBody: null, iframeHeight: null }
  componentDidMount() {
    this.node.contentDocument.body.style.background = 'none';
    this.node.contentDocument.lastChild.style.overflow = 'hidden';  
    this.setState({
      iframeHead: this.node.contentDocument.head,
      iframeBody: this.node.contentDocument.body,
    })
  }

  componentDidUpdate() {
    const updatedHeight = this.state.iframeBody.offsetHeight;
    if (this.state.iframeHeight !== updatedHeight) {
      this.setState({ iframeHeight: updatedHeight })
    }
  }

  render() {
    const { children, styles, ...rest } = this.props
    const { iframeHead, iframeBody, iframeHeight } = this.state
    const styleTags = StyleSheet.instance.tags.map((tag, index) => <StyleTag el={tag.el} key={index} />)
    return (
      <StyledFrame {...rest} innerRef={node => (this.node = node)} height={iframeHeight}>
        {iframeHead && ReactDOM.createPortal(styleTags, iframeHead)}
        {iframeBody && ReactDOM.createPortal(children, iframeBody)}
      </StyledFrame>
    )
  }
}

export default Frame