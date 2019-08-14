import React from 'react'
import PropTypes from 'prop-types'
import FocusVisible from '../FocusVisible/FocusVisible'
import { Link } from '../Link'
import { useTheme } from '../../theme'
import { RADIUS, textStyle } from '../../style'
import { unselectable } from '../../utils'

function ButtonBase({
  disabled,
  focusRingRadius,
  focusRingSpacing,
  focusVisible,
  href,
  innerRef,
  showFocusRing,
  ...props
}) {
  const theme = useTheme()

  const asProps = href
    ? { as: Link, href }
    : { as: 'button', disabled, type: 'button' }

  return (
    <button
      ref={innerRef}
      {...asProps}
      {...props}
      css={`
        position: relative;
        display: inline-block;
        padding: 0;
        white-space: nowrap;
        ${textStyle('body3')};
        ${unselectable};

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
  href: PropTypes.string,
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
