import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'
import { ButtonIcon } from '../Button/ButtonIcon'
import { IconClose } from '../../icons'
import { useViewport } from '../../providers/Viewport/Viewport'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { Inside, unselectable, KEY_ESC } from '../../utils'
import RootPortal from '../RootPortal/RootPortal'

const CONTENT_PADDING = 3 * GU

// The closing position of the panel, on the right side of the viewport.
// It takes into consideration the shadow of the panel.
const CLOSING_POSITION = 5 * GU

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

  const close = useCallback(() => {
    if (!blocking) {
      onClose()
    }
  }, [blocking, onClose])

  const handleEscape = useCallback(
    event => {
      if (event.keyCode === KEY_ESC && opened) {
        close()
      }
    },
    [opened, close]
  )

  const [status, setStatus] = useState(opened ? 'opened' : 'closed')
  const [readyToFocus, setReadyToFocus] = useState(false)

  const handleTransitionRest = useCallback(() => {
    onTransitionEnd(opened)
    setStatus(opened ? 'opened' : 'closed')
  }, [opened, onTransitionEnd])

  const handleTransitionStart = useCallback(() => {
    setStatus(opened ? 'opening' : 'closing')
  }, [opened])

  const handleTransitionFrame = useCallback(
    (item, _, { progress }) => {
      if (progress > 0.5 && !readyToFocus) {
        setReadyToFocus(true)
      } else if (progress < 0.5 && readyToFocus) {
        setReadyToFocus(false)
      }
    },
    [readyToFocus]
  )

  const handleTransitionDestroyed = useCallback(() => {
    setReadyToFocus(false)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [handleEscape])

  const Children = typeof children === 'function' ? children : null

  return (
    <RootPortal>
      <Inside name="SidePanel">
        <Transition
          items={opened}
          config={{ ...springs.lazy, precision: 0.001 }}
          from={{ progress: 0 }}
          enter={{ progress: Number(opened) }}
          leave={{ progress: 0 }}
          onRest={handleTransitionRest}
          onStart={handleTransitionStart}
          onFrame={handleTransitionFrame}
          onDestroyed={handleTransitionDestroyed}
          unique
          native
        >
          {opened =>
            opened &&
            (({ progress }) => (
              <div
                css={`
                  position: absolute;
                  z-index: 1;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  pointer-events: ${status !== 'closing' ? 'auto' : 'none'};
                  overflow: hidden;
                `}
              >
                <animated.div
                  onClick={close}
                  style={{
                    opacity: progress,
                    pointerEvents: status !== 'closing' ? 'auto' : 'none',
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
                            calc(
                              ${100 * (1 - v)}% +
                              ${CLOSING_POSITION * (1 - v)}px
                            ), 0, 0
                          )
                        `
                    ),
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
                        color: ${theme.surfaceContent};
                        ${textStyle('body1')};
                      `}
                    >
                      {title}
                    </h1>
                    {!blocking && (
                      <ButtonIcon
                        label="Close"
                        onClick={close}
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
                      {Children ? (
                        <Children status={status} readyToFocus={readyToFocus} />
                      ) : (
                        children
                      )}
                    </div>
                  </div>
                </Panel>
              </div>
            ))
          }
        </Transition>
      </Inside>
    </RootPortal>
  )
}

SidePanel.propTypes = {
  blocking: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
  onTransitionEnd: PropTypes.func,
  title: PropTypes.node.isRequired,
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
        width: 100%;
        height: 100%;
        background: ${theme.surface};
        box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
        ${!compact ? 'max-width: 450px;' : ''}
      `}
      {...props}
    />
  )
})

Panel.propTypes = {
  compact: PropTypes.bool,
}

// Used for spacing in SidePanelSplit and SidePanelSeparator
SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING

export default SidePanel
