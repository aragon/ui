import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'

import { useTheme } from '../../theme'
import { noop } from '../../utils'
import { springs, GU } from '../../style'
import FocusVisible from '../FocusVisible/FocusVisible'

const BORDER = 1
const WRAPPER_WIDTH = 5 * GU
const BALL_WIDTH = GU * 2.25

function Switch({ checked, disabled, onChange }) {
  const theme = useTheme()
  const [isFocused, setIsFocused] = useState(false)

  const colors = {
    checkedBackground: disabled ? theme.controlDisabled : theme.selected,
    unCheckedBackground: disabled ? theme.controlDisabled : theme.surfaceUnder,
  }

  const handleChange = disabled ? noop : () => onChange(!checked)

  return (
    <FocusVisible>
      {({ focusVisible, onFocus }) => (
        <span
          onClick={handleChange}
          css={`
            position: relative;
            display: inline-block;
            width: ${WRAPPER_WIDTH}px;
            height: ${BALL_WIDTH}px;
            border: ${BORDER}px solid ${theme.border};
            border-radius: ${BALL_WIDTH}px;
            background-color: ${checked
              ? colors.checkedBackground
              : colors.unCheckedBackground};
            transition: border-color 100ms, background-color 100ms;
            cursor: ${disabled ? 'default' : 'pointer'};

            ${disabled
              ? ''
              : `&:active {
              border-color: ${theme.controlBorderPressed};
            }`}

            ${isFocused && focusVisible
              ? `
                &:after {
                  content: '';
                  position: absolute;
                  left: ${-BORDER * 2}px;
                  top: ${-BORDER * 2}px;
                  width: ${WRAPPER_WIDTH + BORDER * 2}px;
                  height: ${BALL_WIDTH + BORDER * 2}px;
                  border-radius: ${BALL_WIDTH}px;
                  border: 2px solid ${theme.focus};
                }
              `
              : ''};
          `}
        >
          <input
            type="checkbox"
            onFocus={() => {
              setIsFocused(true)
              onFocus()
            }}
            onBlur={() => setIsFocused(false)}
            css={`
              opacity: 0;
              pointer-events: none;
            `}
            checked={checked}
            disabled={disabled}
            onChange={handleChange}
          />
          <Spring
            to={{
              progress: checked ? WRAPPER_WIDTH - BALL_WIDTH + BORDER : BORDER,
            }}
            config={springs.smooth}
            native
          >
            {({ progress }) => (
              <animated.span
                style={{
                  left: progress.interpolate(v => `${v}px`),
                }}
                css={`
                  position: absolute;
                  z-index: 1;
                  top: ${BORDER}px;
                  width: ${BALL_WIDTH - BORDER * 4}px;
                  height: ${BALL_WIDTH - BORDER * 4}px;
                  border-radius: ${BALL_WIDTH - BORDER * 4}px;
                  background-color: ${checked ? theme.surface : theme.surface};
                  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
                  transition: box-shadow 200ms;
                `}
              />
            )}
          </Spring>
        </span>
      )}
    </FocusVisible>
  )
}

Switch.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: noop,
}

export { Switch }
export default Switch
