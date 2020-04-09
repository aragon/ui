import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { useInside } from 'use-inside'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { IconDown } from '../../icons'
import ButtonBase from '../ButtonBase/ButtonBase'

// Interpolate the elevation of the toggle from which the drawer slides down.
// In / out example: [0, 0.25, 0.5, 0.75, 1] => [0, 0.5, 1, 0.5, 0]
function interpolateToggleElevation(value, fn) {
  return value.interpolate(v => fn(1 - Math.abs(v * 2 - 1)))
}

function Details({ children, label, onToggle, opened: openedProp, ...props }) {
  const theme = useTheme()
  const [insideSidePanel] = useInside('SidePanel')

  const contentRef = useRef(null)
  const contentHeight = useRef(0)

  // Details supports two modes: managed (internal state),
  // or controlled (external state).
  const [openedManaged, setOpenedManaged] = useState(false)
  const opened = openedProp === undefined ? openedManaged : openedProp

  const updateHeight = useCallback(() => {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight
    }
  }, [])

  const handleContentRef = useCallback(
    element => {
      contentRef.current = element
      updateHeight()
    },
    [updateHeight]
  )

  const handleToggle = useCallback(() => {
    const newOpened = !opened

    // Managed state
    if (openedProp === undefined) {
      setOpenedManaged(newOpened)
    }

    // Useful to notify even in managed mode
    if (onToggle) {
      onToggle(newOpened)
    }
  }, [onToggle, opened, openedProp])

  // Animate after the initial render
  const animate = useRef(false)
  useEffect(() => {
    animate.current = true
  }, [])

  // Use height: 'auto' when opened
  const [forceHeight, setForceHeight] = useState(false)
  const handleRest = useCallback(() => setForceHeight(opened => !opened), [])
  const handleStart = useCallback(() => setForceHeight(true), [])

  // Update the height
  useEffect(updateHeight, [opened, updateHeight])

  return (
    <Spring
      config={springs.smooth}
      from={{ openProgress: 0 }}
      to={{ openProgress: Number(opened) }}
      immediate={!animate}
      onRest={handleRest}
      onStart={handleStart}
      native
    >
      {({ openProgress }) => (
        <section
          css={`
            margin: ${insideSidePanel ? `${2 * GU}px ${-3 * GU}px 0` : '0'};
            padding-bottom: ${3 * GU}px;
          `}
          {...props}
        >
          <ButtonBase
            onClick={handleToggle}
            css={`
              position: relative;
              width: 100%;
              &:active {
                background: ${theme.surfacePressed};
              }
            `}
          >
            <div
              css={`
                position: absolute;
                left: ${3 * GU}px;
                right: ${3 * GU}px;
                bottom: 0;
              `}
            >
              <animated.div
                style={{
                  transform: interpolateToggleElevation(
                    openProgress,
                    v => `scale3d(${v}, 1, 1)`
                  ),
                  opacity: interpolateToggleElevation(openProgress, v => v),
                }}
              >
                <div
                  css={`
                    height: 1px;
                    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
                  `}
                />
              </animated.div>
            </div>

            <h1
              css={`
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: ${5 * GU}px;
                margin-left: ${3 * GU}px;
                color: ${theme.surfaceContentSecondary};
                ${textStyle('label2')}
                font-weight: 400;
              `}
              {...props}
            >
              <div
                css={`
                  margin-top: 2px;
                `}
              >
                {label}
              </div>
              <div>
                <animated.div
                  style={{
                    marginLeft: `${1 * GU}px`,
                    transform: openProgress.interpolate(
                      v => `rotate(${(1 - v) * 180}deg)`
                    ),
                    transformOrigin: '50% calc(50% - 0.5px)',
                  }}
                >
                  <div
                    css={`
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    `}
                  >
                    <IconDown size="tiny" />
                  </div>
                </animated.div>
              </div>
            </h1>
          </ButtonBase>
          <div css="overflow: hidden">
            <animated.div
              css={`
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              `}
              style={{
                opacity: openProgress,
                height: forceHeight
                  ? openProgress.interpolate(
                      v => `${v * contentHeight.current}px`
                    )
                  : 'auto',
              }}
            >
              <div
                ref={handleContentRef}
                css={`
                  padding: ${insideSidePanel
                    ? `${2 * GU}px ${3 * GU}px 0`
                    : '0'};
                `}
              >
                <div>{children}</div>
              </div>
            </animated.div>
          </div>
        </section>
      )}
    </Spring>
  )
}

Details.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  opened: PropTypes.bool,
}

export default Details
