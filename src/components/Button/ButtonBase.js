import React from 'react'
import PropTypes from 'prop-types'
import FocusVisible from '../FocusVisible/FocusVisible'
import { useTheme } from '../../theme'
import { RADIUS } from '../../style'
import { unselectable, font } from '../../utils'

function ButtonBase({
  disabled,
  focusRingRadius,
  focusRingSpacing,
  focusVisible,
  innerRef,
  showFocusRing,
  ...props
}) {
  const theme = useTheme()
  return (
    <button
      type="button"
      ref={innerRef}
      disabled={disabled}
      {...props}
      css={`
        position: relative;
        display: inline-block;
        padding: 0;
        white-space: nowrap;
        ${font({ size: 'small', weight: 'normal' })};
        ${unselectable};
        color: ${theme.textSecondary};

        background: none;
        border: 0;
        border-radius: ${RADIUS}px;
        outline: 0;

        cursor: ${disabled ? 'default' : 'pointer'};

        &::-moz-focus-inner {
          border: 0;
        }

        &:focus:after {
          content: '';
          position: absolute;
          top: ${-focusRingSpacing}px;
          left: ${-focusRingSpacing}px;
          right: ${-focusRingSpacing}px;
          bottom: ${-focusRingSpacing}px;
          border-radius: ${focusRingRadius}px;
          border: ${focusVisible && showFocusRing
            ? `2px solid ${theme.focus}`
            : '0'};
        }
      `}
    />
  )
}

ButtonBase.propTypes = {
  disabled: PropTypes.bool,
  focusRingRadius: PropTypes.number,
  focusRingSpacing: PropTypes.number,
  focusVisible: PropTypes.bool,
  innerRef: PropTypes.any,
  showFocusRing: PropTypes.bool,
}
ButtonBase.defaultProps = {
  disabled: false,
  focusRingRadius: 0,
  focusRingSpacing: 0,
  showFocusRing: true,
}

const ButtonBaseWithFocus = React.forwardRef((props, ref) => (
  <FocusVisible>
    {({ focusVisible, onFocus }) => (
      <ButtonBase
        innerRef={ref}
        onFocus={onFocus}
        focusVisible={focusVisible}
        {...props}
      />
    )}
  </FocusVisible>
))

export { ButtonBaseWithFocus as ButtonBase }
export default ButtonBaseWithFocus
