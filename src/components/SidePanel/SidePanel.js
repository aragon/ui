import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { Spring, animated } from 'react-spring'
import { IconClose } from '../../icons'
import Text from '../Text/Text'
import { springs, breakpoint } from '../../style'
import { unselectable } from '../../utils'

const CONTENT_PADDING = 30

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
            transform: progress.interpolate(
              v =>
                `translate3d(calc(${100 * (1 - v)}% + ${36 * (1 - v)}px), 0, 0)`
            ),
            opacity: progress.interpolate(v => (v > 0 ? 1 : 0)),
          }}
        >
          <PanelHeader>
            <h1>
              <Text size="xxlarge">{title}</Text>
            </h1>
            {!blocking && (
              <PanelCloseButton type="button" onClick={this.handleClose}>
                <IconClose />
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
        from={{ progress: 0 }}
        to={{ progress: !!opened }}
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

const maxWidth = css`
  max-width: ${({ maxwidth = 450 }) => maxwidth}px;
`

const Panel = styled(animated.aside)`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 36px rgba(0, 0, 0, 0.2);

  ${breakpoint('medium', maxWidth)}
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
  display: flex;
  flex-direction: column;
`

const PanelContent = styled.div`
  min-height: 0;
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
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

// Used for spacing in SidePanelSplit and SidePanelSeparator
SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING

export default SidePanel
