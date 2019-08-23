import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { ButtonIcon } from '../Button/ButtonIcon'
import { IconClose } from '../../icons'
import { useViewport } from '../../providers/Viewport/Viewport'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { Inside, unselectable, KEY_ESC } from '../../utils'
import RootPortal from '../RootPortal/RootPortal'

const CONTENT_PADDING = 3 * GU

function SidePanel({
  blocking,
  children,
  opened,
  onClose,
  onTransitionEnd,
  title,
}) {
  const theme = useTheme()
  const { below } = useViewport()
  const compact = below('medium')

  const handleClose = useCallback(() => {
    if (!blocking) {
      onClose()
    }
  }, [blocking, onClose])

  const handleEscape = useCallback(
    event => {
      if (event.keyCode === KEY_ESC && opened) {
        handleClose()
      }
    },
    [opened, handleClose]
  )

  const handleTransitionRest = useCallback(() => {
    onTransitionEnd(opened)
  }, [opened, onTransitionEnd])

  useEffect(() => {
    document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape])

  return (
    <RootPortal>
      <Inside name="SidePanel">
        <Spring
          config={springs.lazy}
          from={{ progress: 0 }}
          to={{ progress: !!opened }}
          onRest={handleTransitionRest}
          native
        >
          {({ progress }) => (
            <div
              css={`
                position: fixed;
                z-index: 3;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                pointer-events: ${opened ? 'auto' : 'none'};
              `}
            >
              <animated.div
                onClick={handleClose}
                style={{
                  opacity: progress,
                  pointerEvents: opened ? 'auto' : 'none',
                }}
                css={`
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: ${theme.overlay.alpha(0.9)};
                `}
              />
              <Panel
                compact={compact}
                style={{
                  transform: progress.interpolate(
                    v =>
                      `
                        translate3d(
                          calc(${100 * (1 - v)}% + ${36 * (1 - v)}px), 0, 0
                        )
                      `
                  ),
                  opacity: progress.interpolate(v => Number(v > 0)),
                }}
              >
                <header
                  css={`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    flex-shrink: 0;
                    position: relative;
                    height: ${8 * GU}px;
                    padding-left: ${CONTENT_PADDING}px;
                    border-bottom: 1px solid ${theme.border};
                    ${unselectable()};
                  `}
                >
                  <h1
                    css={`
                      ${textStyle('body1')}
                      color: ${theme.surfaceContent};
                    `}
                  >
                    {title}
                  </h1>
                  {!blocking && (
                    <ButtonIcon
                      label="Close"
                      onClick={handleClose}
                      css={`
                        position: absolute;
                        ${!compact
                          ? `
                              top: ${2 * GU}px;
                              right: ${2 * GU}px;
                            `
                          : `
                              top: 0;
                              right: 0;
                              height: ${8 * GU}px;
                              width: ${8 * GU}px;
                            `}
                      `}
                    >
                      <IconClose color={theme.surfaceIcon} />
                    </ButtonIcon>
                  )}
                </header>
                <div
                  css={`
                    overflow-y: auto;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                  `}
                >
                  <div
                    css={`
                      min-height: 0;
                      flex-grow: 1;
                      flex-shrink: 0;
                      display: flex;
                      flex-direction: column;
                      width: 100%;
                      padding-right: ${CONTENT_PADDING}px;
                      padding-left: ${CONTENT_PADDING}px;
                      padding-bottom: ${CONTENT_PADDING}px;
                    `}
                  >
                    {children}
                  </div>
                </div>
              </Panel>
            </div>
          )}
        </Spring>
      </Inside>
    </RootPortal>
  )
}

SidePanel.propTypes = {
  blocking: PropTypes.bool,
  children: PropTypes.node,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  title: PropTypes.string.isRequired,
}

SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: () => {},
  onTransitionEnd: () => {},
}

const Panel = React.memo(function Panel({ compact, ...props }) {
  const theme = useTheme()
  return (
    <animated.aside
      css={`
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background: ${theme.surface};
        box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
        ${!compact ? 'max-width: 450px;' : ''}
      `}
      {...props}
    />
  )
})

// Used for spacing in SidePanelSplit and SidePanelSeparator
SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING

export default SidePanel
