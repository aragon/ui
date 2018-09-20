import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { PublicUrl } from '../../providers/PublicUrl'
import Text from '../Text/Text'
import { prefixUrl } from '../../utils/url'
import { springs, unselectable } from '../../utils/styles'

import close from './assets/close.svg'

const PANEL_WIDTH = 450
const CONTENT_PADDING = 30
const PANEL_EXTRA_PADDING = PANEL_WIDTH * 0.2
const PANEL_OUTER_WIDTH = PANEL_WIDTH + PANEL_EXTRA_PADDING
const PANEL_INNER_WIDTH = PANEL_WIDTH - CONTENT_PADDING * 2

class SidePanel extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.handleEscape, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscape, false)
  }
  handleClose = () => {
    if (!this.props.blocking) {
      this.props.onClose()
    }
  }
  handleEscape = event => {
    if (event.keyCode === 27 && this.props.opened) {
      this.handleClose()
    }
  }
  handleTransitionRest = () => {
    this.props.onTransitionEnd(this.props.opened)
  }
  renderIn = ({ progress }) => {
    const { children, title, opened, blocking } = this.props

    // When hiding the panel, add 40px more for the shadow
    const panelRight = opened ? -PANEL_EXTRA_PADDING : -PANEL_OUTER_WIDTH - 40

    return (
      <Main opened={opened}>
        <Overlay
          style={{
            opacity: progress,
            pointerEvents: opened ? 'auto' : 'none',
          }}
          onClick={this.handleClose}
        />
        <Panel
          style={{
            right: `${panelRight}px`,
            transform: progress.interpolate(
              t => `translate3d(${(Number(opened) - t) * (PANEL_WIDTH + 40)}px, 0, 0)`
            ),
          }}
        >
          <PanelHeader>
            <h1>
              <Text size="xxlarge">{title}</Text>
            </h1>
            {!blocking && (
              <PanelCloseButton type="button" onClick={this.handleClose}>
                <PublicUrl>
                  {publicUrl => (
                    <img src={prefixUrl(close, publicUrl)} alt="Close" />
                  )}
                </PublicUrl>
              </PanelCloseButton>
            )}
          </PanelHeader>
          <PanelScrollView>
            <PanelContent>{children}</PanelContent>
          </PanelScrollView>
        </Panel>
      </Main>
    )
  }
  render() {
    const { opened } = this.props
    return (
      <Spring
        config={springs.lazy}
        to={{ progress: Number(opened) }}
        onRest={this.handleTransitionRest}
        native
      >
        {this.renderIn}
      </Spring>
    )
  }
}

SidePanel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  opened: PropTypes.bool,
  blocking: PropTypes.bool,
  onClose: PropTypes.func,
  onTransitionEnd: PropTypes.func,
}

SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: () => {},
  onTransitionEnd: () => {},
}

const Main = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${({ opened }) => (opened ? 'auto' : 'none')};
`

const Overlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(68, 81, 89, 0.65);
`

const Panel = styled(animated.aside)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: ${PANEL_WIDTH + PANEL_EXTRA_PADDING}px;
  height: 100vh;
  padding-right: ${PANEL_EXTRA_PADDING}px;
  background: white;
  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);
`

const PanelHeader = styled.header`
  position: relative;
  padding-top: 15px;
  padding-left: ${CONTENT_PADDING}px;
  padding-right: 20px;
  padding-bottom: 15px;
  ${unselectable()};
  flex-shrink: 0;
`

const PanelScrollView = styled.div`
  overflow-y: auto;
  height: 100%;
`

const PanelContent = styled.div`
  padding-right: ${CONTENT_PADDING}px;
  padding-left: ${CONTENT_PADDING}px;
  padding-bottom: ${CONTENT_PADDING}px;
`

const PanelCloseButton = styled.button`
  ${PanelHeader} & {
    position: absolute;
    padding: 20px;
    top: 0;
    right: 0;
    cursor: pointer;
    background: none;
    border: 0;
    outline: 0;
    &::-moz-focus-inner {
      border: 0;
    }
  }
`

SidePanel.PANEL_WIDTH = PANEL_WIDTH
SidePanel.PANEL_OUTER_WIDTH = PANEL_OUTER_WIDTH
SidePanel.PANEL_EXTRA_PADDING = PANEL_EXTRA_PADDING
SidePanel.PANEL_INNER_WIDTH = PANEL_INNER_WIDTH
SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING

// legacy
SidePanel.PANEL_OVERFLOW = PANEL_EXTRA_PADDING
SidePanel.PANEL_HIDE_RIGHT = -PANEL_OUTER_WIDTH

export default SidePanel
