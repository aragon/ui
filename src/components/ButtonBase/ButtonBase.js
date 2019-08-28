import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import FocusVisible from '../FocusVisible/FocusVisible'
import { useTheme } from '../../theme'
import { RADIUS, textStyle } from '../../style'
import { warnOnce, KEY_ENTER, unselectable } from '../../utils'

function getElementProps({ element, href, disabled }) {
  // <button> (handles key events)
  if (element === 'button') {
    return [
      'button',
      {
        type: 'button',
        disabled,
      },
    ]
  }

  // <a href=""> (handles key events)
  if (element === 'a' && href) {
    return [
      'anchor',
      disabled
        ? {}
        : {
            href: href,
            rel: 'noopener noreferrer',
            target: '_blank',
          },
    ]
  }

  // <a> or <div> (doesn’t handle key events)
  return [
    'basic',
    {
      role: 'button',
      tabIndex: disabled ? '-1' : '0',
    },
  ]
}

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

  if (typeof focusRingSpacing === 'number') {
    focusRingSpacing = [focusRingSpacing, focusRingSpacing]
  }

  if (!element) {
    element = href ? 'a' : 'button'
  }

  const [elementType, elementProps] = getElementProps({
    element,
    href,
    disabled,
  })

  const handleKeyDown = useCallback(
    event => {
      // Only applies to cases where the enter key is not handled already
      if (elementType === 'basic' && event.keyCode === KEY_ENTER && onClick) {
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
      as={element}
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
        text-decoration: none;
        text-align: center;
        background: none;
        border-radius: ${RADIUS}px;
        border: 0;
        outline: 0;
        cursor: ${disabled ? 'default' : 'pointer'};
        ${elementType === 'basic' ? unselectable : ''};

        &::-moz-focus-inner {
          border: 0;
        }

        &:focus:after {
          content: '';
          display: ${focusVisible && showFocusRing ? 'block' : 'none'};
          position: absolute;
          top: ${-focusRingSpacing[1]}px;
          left: ${-focusRingSpacing[0]}px;
          right: ${-focusRingSpacing[0]}px;
          bottom: ${-focusRingSpacing[1]}px;
          border-radius: ${focusRingRadius}px;
          border: 2px solid ${theme.focus};
        }
      `}
    />
  )
}

ButtonBase.propTypes = {
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  focusRingRadius: PropTypes.number,
  focusRingSpacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
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
