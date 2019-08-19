import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { textStyle, GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import { warn, warnOnce, useInside } from '../../utils'
import { Link } from '../Link'
import { useLayout } from '../Layout/Layout'
import { ButtonBase } from './ButtonBase'
import { Inside } from '../../utils/inside'

function buttonStyles(theme, { mode, disabled }) {
  if (disabled) {
    return {
      background: theme.disabled,
      color: theme.disabledContent,
      iconColor: theme.disabledContent,
      border: '0',
    }
  }
  if (mode === 'strong') {
    return {
      background: `
        linear-gradient(
          130deg,
          ${theme.accentStart},
          ${theme.accentEnd}
        )
      `,
      color: theme.accentContent,
      iconColor: theme.accentContent,
      border: '0',
    }
  }

  if (mode === 'positive') {
    return {
      background: theme.positive,
      color: theme.positiveContent,
      iconColor: theme.positiveContent,
      border: '0',
    }
  }

  if (mode === 'negative') {
    return {
      background: theme.negative,
      color: theme.negativeContent,
      iconColor: theme.negativeContent,
      border: '0',
    }
  }

  return {
    background: theme.surfaceInteractive,
    color: theme.surfaceContent,
    iconColor: theme.surfaceIcon,
    border: `1px solid ${theme.border}`,
  }
}

function Button({
  children,
  disabled,
  display,
  icon,
  iconOnly,
  innerRef,
  label,
  mode,
  size,
  wide,
  ...props
}) {
  // backward compatibility and deprecated props
  if (iconOnly) {
    warnOnce('Button: "iconOnly" is deprecated, please use "display".')
    display = 'icon'
  }
  if (mode === 'outline' || mode === 'secondary') {
    warnOnce(`Button: the mode "${mode}" is deprecated, please use "normal".`)
    mode = 'normal'
  }
  if (size === 'mini') {
    warnOnce(`Button: the size "mini" is deprecated, please use "small".`)
    size = 'small'
  }
  if (size === 'normal') {
    warnOnce(`Button: the size "normal" is deprecated, please use "medium".`)
    size = 'medium'
  }

  // prop warnings
  if (display === 'icon' && !icon) {
    warn('Button: the display "icon" was used without providing an icon.')
  }
  if (!children && !label) {
    warn('Button: please provide a label.')
  }

  const theme = useTheme()
  const { layoutName } = useLayout()

  const [insideEmptyStateCard] = useInside('EmptyStateCard')
  const [insideHeaderSecondary] = useInside('Header:secondary')

  // Always wide + strong when used as an empty state card action
  if (insideEmptyStateCard) {
    mode = 'strong'
    wide = true
  }

  // Alternate between icon and label automatically when used in Header
  if (insideHeaderSecondary && display === 'auto' && icon && label) {
    display = layoutName === 'small' ? 'icon' : 'label'
  }

  // Otherwise, display both
  if (display === 'auto') {
    display = 'all'
  }

  const displayIcon = icon && (display === 'all' || display === 'icon')
  const displayLabel = label && (display === 'all' || display === 'label')
  const displayIconOnly = displayIcon && !displayLabel

  // Styles
  const { background, color, iconColor, border } = useMemo(
    () => buttonStyles(theme, { mode, disabled }),
    [mode, theme, disabled]
  )

  const width = wide ? '100%' : 'auto'
  const height = size === 'small' ? `${4 * GU}px` : `${5 * GU}px`
  const padding = size === 'small' ? `0 ${1.5 * GU}px` : `0 ${3 * GU}px`
  const minWidth = size === 'small' ? `${14 * GU}px` : `${16 * GU}px`

  // Use the label as a title when only the icon is displayed
  if (displayIconOnly) {
    props.title = label || ''
  }

  return (
    <ButtonBase
      ref={innerRef}
      focusRingSpacing={border === '0' ? 0 : 1}
      focusRingRadius={RADIUS}
      disabled={disabled}
      css={`
        display: ${wide ? 'flex' : 'inline-flex'};
        align-items: center;
        justify-content: center;
        background: ${background};
        color: ${color};
        ${textStyle('body2')};
        white-space: nowrap;
        width: ${displayIconOnly ? height : width};
        height: ${height};
        padding: ${displayIconOnly ? 0 : padding};
        min-width: ${displayIconOnly ? 0 : minWidth};
        border: ${border};
        box-shadow: ${disabled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)'};
        transition-property: transform, box-shadow;
        transition-duration: 50ms;
        transition-timing-function: ease-in-out;
        &:active {
          transform: ${disabled ? 'none' : 'translateY(1px)'};
          box-shadow: ${disabled ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.125)'};
        }
      `}
      {...props}
    >
      <Inside name="Button">
        {children || (
          <React.Fragment>
            {displayIcon && (
              <span
                css={`
                  position: relative;
                  top: -1px;
                  display: flex;
                  color: ${iconColor};
                  margin-right: ${displayLabel ? 1 * GU : 0}px;
                `}
              >
                <Inside name="Button:icon">{icon}</Inside>
              </span>
            )}
            <Inside name="Button:label">{displayLabel && label}</Inside>
          </React.Fragment>
        )}
      </Inside>
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  display: PropTypes.oneOf(['auto', 'all', 'icon', 'label']),
  icon: PropTypes.node,
  innerRef: PropTypes.any,
  label: PropTypes.string,
  mode: PropTypes.oneOf([
    'normal',
    'strong',
    'positive',
    'negative',

    // deprecated
    'outline',
    'secondary',
    'text',
  ]),
  size: PropTypes.oneOf([
    'large',
    'medium',
    'small',

    // deprecated
    'normal',
    'mini',
  ]),
  wide: PropTypes.bool,

  // deprecated
  iconOnly: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
  display: 'auto',
  mode: 'normal',
  size: 'medium',
  wide: false,
}

const ButtonWithRef = React.forwardRef((props, ref) => (
  <Button innerRef={ref} {...props} />
))

ButtonWithRef.Anchor = React.forwardRef((props, ref) => {
  warnOnce(
    'Button.Anchor',
    'Button.Anchor is deprecated: please use Button with a href prop instead.'
  )
  return <ButtonWithRef ref={ref} as={Link} {...props} />
})

export { ButtonWithRef as Button }
export default ButtonWithRef
