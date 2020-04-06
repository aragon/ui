import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { IconDown } from '../../icons'
import ButtonBase from '../ButtonBase/ButtonBase'

function interpolateToggleElevation(value, fn) {
  return value.interpolate(v => fn(1 - Math.abs(v * 2 - 1)))
}

function Details({ children, label, ...props }) {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const animate = useRef(false)

  const contentRef = useRef(null)
  const contentHeight = useRef(0)

  const handleToggle = useCallback(() => {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight
    }
    setOpen(opened => !opened)
  }, [])

  useEffect(() => {
    animate.current = true
  }, [])

  return (
    <Spring
      config={springs.smooth}
      from={{ openProgress: 0 }}
      to={{ openProgress: Number(open) }}
      immediate={!animate}
      native
    >
      {({ openProgress }) => (
        <div
          css={`
            margin-top: ${1 * GU}px;
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
                height: ${3 * GU}px;
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
                height: openProgress.interpolate(
                  v => `${v * contentHeight.current}px`
                ),
              }}
            >
              <div ref={contentRef}>{children}</div>
            </animated.div>
          </div>
        </div>
      )}
    </Spring>
  )
}

Details.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
}

export default Details
