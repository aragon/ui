import React from 'react'
import { createPortal } from 'react-dom'
import { theme } from '@aragon/ui'
import styled, {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as styledSecrets,
} from 'styled-components'

const { StyleSheet } = styledSecrets

const StyledFrame = styled.iframe`
  display: block;
  width: 100%;
  border: 0;
`

class Frame extends React.Component {
  state = {
    root: null,
    iframeHeight: 0,
    styles: '',
  }

  componentDidUpdate() {
    // throttle setState calls to update the height
    clearTimeout(this.updateTimeout)
    this.updateTimeout = setTimeout(() => {
      this.updateHeight()
      this.updateStyles()
    }, 1000 / 60)
  }

  updateHeight() {
    const { height } = this.props
    const { iframeHeight } = this.state
    if (height > -1) {
      if (height !== iframeHeight) {
        this.setState({ iframeHeight: height })
      }
      return
    }

    const { body } = this.node.contentDocument
    if (!body) {
      return
    }

    const updatedHeight = body.offsetHeight
    if (iframeHeight !== updatedHeight) {
      this.setState({
        iframeHeight: updatedHeight,
      })
    }
  }

  updateStyles() {
    this.setState({
      styles: StyleSheet.instance.toHTML(),
    })
  }

  handleLoad = event => {
    if (this.state.root) {
      return
    }
    const { documentElement: root, body, head } = this.node.contentDocument

    body.remove()
    head.remove()
    this.setState({ root })
    this.forceUpdate()
  }

  render() {
    const { root, styles, iframeHeight } = this.state
    const { children, opaque, ...rest } = this.props

    return (
      <StyledFrame
        {...rest}
        innerRef={node => (this.node = node)}
        srcDoc=""
        onLoad={this.handleLoad}
        style={{ height: `${iframeHeight}px` }}
      >
        {root &&
          createPortal(
            <body
              style={{
                background: opaque ? theme.contentBackground : 'none',
                overflow: 'hidden',
                borderRadius: '3px 0 0 3px',
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: styles }} />
              {children}
            </body>,
            root
          )}
      </StyledFrame>
    )
  }
}

Frame.defaultProps = {
  height: -1,
}

export default Frame
