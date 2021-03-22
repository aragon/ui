import React from 'react'
import { createPortal } from 'react-dom'
import { theme } from '@tecommons/ui'
import styled, {
  __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS as styledSecrets,
} from 'styled-components'

const { StyleSheet } = styledSecrets

class Frame extends React.Component {
  static defaultProps = {
    height: -1,
  }

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

  componentWillUnmount() {
    clearTimeout(this.updateTimeout)
  }

  updateHeight() {
    if (!this.node) return

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
    if (!this.node) return

    this.setState({
      styles: StyleSheet.instance.toHTML(),
    })
  }

  handleLoad = event => {
    if (this.state.root || !this.node) {
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
      <iframe
        {...rest}
        ref={node => (this.node = node)}
        onLoad={this.handleLoad}
        srcDoc=""
        style={{ height: `${iframeHeight}px` }}
        css={`
          display: block;
          width: 100%;
          border: 0;
        `}
      >
        {root &&
          createPortal(
            <body
              style={{
                background: opaque ? theme.contentBackground : 'none',
                overflow: 'hidden',
                height: 'auto',
                minHeight: '100vh',
                borderRadius: '3px 0 0 3px',
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: styles }} />
              {children}
            </body>,
            root
          )}
      </iframe>
    )
  }
}

export default Frame
