import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { ButtonBase } from '..'
import { IconDown } from '../../icons'
import { GU, springs, textStyle } from '../../style'
import { useTheme } from '../../theme'

const { div: AnimDiv } = animated

const interpolateToggleElevation = (value, fn = v => v) =>
  value.interpolate(v => fn(1 - Math.abs(v * 2 - 1)))

const openedState = {
  key: 'APPS_OPENED_STATE',
  isOpen: function() {
    return localStorage.getItem(this.key) === '1'
  },
  set: function(opened) {
    localStorage.setItem(this.key, opened ? '1' : '0')
  },
}

function ToggleComponents({ children, itemBaseHeight, label, ...props }) {
  const [open, setOpen] = useState(openedState.isOpen())
  const [showAnimation, setShowAnimation] = useState(false)

  const handleToggle = useCallback(() => {
    setOpen(opened => {
      const newOpenedState = !opened
      openedState.set(newOpenedState)
      return newOpenedState
    })
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
          <AppsToggle onClick={handleToggle}>
            <AppsToggleShadow
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
              <AppsToggleArrow
                style={{
                  marginLeft: `${1 * GU}px`,
                  transform: openProgress.interpolate(
                    v => `rotate(${(1 - v) * 180}deg)`
                  ),
                  transformOrigin: '50% calc(50% - 0.5px)',
                }}
              />
            </Heading>
          </AppsToggle>
          <div css="overflow: hidden">
            <AnimDiv
              css={`
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              `}
              style={{
                opacity: openProgress,
                height: openProgress.interpolate(
                  v => v * children.length * itemBaseHeight
                ),
              }}
            >
              {children}
            </AnimDiv>
          </div>
        </div>
      )}
    </Spring>
  )
}

ToggleComponents.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  itemBaseHeight: PropTypes.number,
  label: PropTypes.string.isRequired,
}

ToggleComponents.defaultProps = {
  itemBaseHeight: 5 * GU,
  label: '',
}

function AppsToggle(props) {
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

const AppsToggleArrow = props => (
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

const AppsToggleShadow = props => (
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

export default ToggleComponents
