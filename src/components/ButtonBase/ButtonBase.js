import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import FocusVisible from '../FocusVisible/FocusVisible'
import { useTheme } from '../../theme'
import { RADIUS, textStyle } from '../../style'
import { warnOnce, KEY_ENTER } from '../../utils'

function ButtonBase({
  disabled,
  element,
  external,
  focusRingRadius,
  focusRingSpacing,
  focusVisible,
  href,
  innerRef,
  onClick,
  onKeyDown,
  showFocusRing,
  ...props
}) {
  const theme = useTheme()

  // `external` defaults to `true` if `href` is present, `false` otherwise.
  if (external === undefined) {
    external = Boolean(href)
  }

  if (!element) {
    element = href ? 'a' : 'button'
  }

  const elementProps = { as: element }

  // <button> (handle key events)
  if (element === 'button') {
    elementProps.type = 'button'
    elementProps.disabled = disabled
  }

  // <a href=""> (handle key events)
  if (element === 'a' && href && !disabled) {
    elementProps.href = href
    elementProps.rel = 'noopener noreferrer'
    elementProps.target = '_blank'
  }

  // <a> or <div> (doesn’t handle key events)
  if ((element === 'a' && !href) || element === 'div') {
    elementProps.role = 'button'
    elementProps.tabIndex = '0'
  }

  const handleKeyDown = useCallback(
    event => {
      // Only applies to cases where the enter key is not handled already
      if (
        ((element === 'a' && !href) || element === 'div') &&
        event.keyCode === KEY_ENTER &&
        onClick
      ) {
        onClick()
      }

      // Pass the event up
      if (onKeyDown) {
        onKeyDown(event)
      }
    },
    [onClick, element]
  )

  return (
    <button
      ref={innerRef}
      onClick={disabled ? undefined : onClick}
      onKeyDown={disabled ? undefined : handleKeyDown}
      {...elementProps}
      {...props}
      css={`
        position: relative;
        display: inline-block;
        padding: 0;
        white-space: nowrap;
        ${textStyle('body3')};
        user-select: text;
        text-decoration: none;
        background: none;
        border-radius: ${RADIUS}px;
        border: 0;
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
  external: PropTypes.bool,
  focusRingRadius: PropTypes.number,
  focusRingSpacing: PropTypes.number,
  focusVisible: PropTypes.bool,
  href: PropTypes.string,
  innerRef: PropTypes.any,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  showFocusRing: PropTypes.bool,
  element: PropTypes.oneOf(['button', 'div', 'a']),
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

const LinkBase = React.forwardRef((props, ref) => {
  warnOnce(
    'LinkBase',
    'LinkBase is deprecated: please use ButtonBase with a href prop instead.'
  )
  return <ButtonBase ref={ref} {...props} />
})

export { LinkBase }
export default ButtonBaseWithFocus
