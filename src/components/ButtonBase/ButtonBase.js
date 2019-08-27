import React from 'react'
import PropTypes from 'prop-types'
import FocusVisible from '../FocusVisible/FocusVisible'
import { useTheme } from '../../theme'
import { RADIUS, textStyle } from '../../style'
import { warnOnce } from '../../utils'

const ANCHOR_EXTERNAL_PROPS = { rel: 'noopener noreferrer', target: '_blank' }

function ButtonBase({
  disabled,
  external,
  focusRingRadius,
  focusRingSpacing,
  focusVisible,
  href,
  innerRef,
  onClick,
  showFocusRing,
  ...props
}) {
  const theme = useTheme()

  // `external` defaults to `true` if `href` is present, `false` otherwise.
  if (external === undefined) {
    external = Boolean(href)
  }

  // element-specific props
  const elementProps = href
    ? // <a href>
      {
        as: 'a',
        href: disabled ? undefined : href,
        ...(external ? ANCHOR_EXTERNAL_PROPS : {}),
      }
    : // <button>
      { as: 'button', type: 'button', disabled }

  return (
    <button
      ref={innerRef}
      onClick={disabled ? undefined : onClick}
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

const LinkBase = React.forwardRef((props, ref) => {
  warnOnce(
    'LinkBase',
    'LinkBase is deprecated: please use ButtonBase with a href prop instead.'
  )
  return <ButtonBase ref={ref} {...props} />
})

export { LinkBase }
export default ButtonBaseWithFocus
