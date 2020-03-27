import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import ButtonBase from '../ButtonBase/ButtonBase'
import { IconDown } from '../../icons'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'

const interpolateToggleElevation = (value, fn = v => v) =>
  value.interpolate(v => fn(1 - Math.abs(v * 2 - 1)))

function Toggle({ children, itemBaseHeight, label, ...props }) {
  const [open, setOpen] = useState(false)
  const [showAnimation, setShowAnimation] = useState(false)

  const handleToggle = useCallback(() => {
    setOpen(opened => !opened)
    setShowAnimation(true)
  }, [])

  return (
    <Spring
      config={springs.smooth}
      from={{ openProgress: 0 }}
      to={{ openProgress: Number(open) }}
      immediate={!showAnimation}
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
          <ToggleButton onClick={handleToggle}>
            <ToggleButtonShadow
              style={{
                transform: interpolateToggleElevation(
                  openProgress,
                  v => `scale3d(${v}, 1, 1)`
                ),
                opacity: interpolateToggleElevation(openProgress),
              }}
            />
            <Heading
              label={label}
              css={`
                height: ${5 * GU}px;
              `}
            >
              <ToggleButtonArrow
                style={{
                  marginLeft: `${1 * GU}px`,
                  transform: openProgress.interpolate(
                    v => `rotate(${(1 - v) * 180}deg)`
                  ),
                  transformOrigin: '50% calc(50% - 0.5px)',
                }}
              />
            </Heading>
          </ToggleButton>
          <div css="overflow: hidden">
            <animated.div>
              css=
              {`
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              `}
              style=
              {{
                opacity: openProgress,
                height: openProgress.interpolate(
                  v => v * children.length * itemBaseHeight
                ),
              }}
              >{children}
            </animated.div>
          </div>
        </div>
      )}
    </Spring>
  )
}

Toggle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemBaseHeight: PropTypes.number,
  label: PropTypes.string.isRequired,
}

Toggle.defaultProps = {
  itemBaseHeight: 5 * GU,
  label: '',
}

function ToggleButton(props) {
  const theme = useTheme()
  return (
    <ButtonBase
      css={`
        position: relative;
        width: 100%;
        &:active {
          background: ${theme.surfacePressed};
        }
      `}
      {...props}
    />
  )
}

function Heading({ label, children, ...props }) {
  const theme = useTheme()
  return (
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
      {children && <div>{children}</div>}
    </h1>
  )
}

Heading.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
}

const ToggleButtonArrow = props => (
  <animated.div {...props}>
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
)

const ToggleButtonShadow = props => (
  <div
    css={`
      position: absolute;
      left: ${3 * GU}px;
      right: ${3 * GU}px;
      bottom: 0;
    `}
  >
    <animated.div {...props}>
      <div
        css={`
          height: 1px;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        `}
      />
    </animated.div>
  </div>
)

export default Toggle
