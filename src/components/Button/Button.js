import React from 'react'
import PropTypes from 'prop-types'
import SafeLink from '../Link/SafeLink'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import { ButtonBase } from './ButtonBase'

function Button({
  children,
  icon,
  innerRef,
  label,
  mode,
  size,
  wide,
  ...props
}) {
  const theme = useTheme()

  // backward compatibility
  if (mode === 'outline') mode = 'normal'
  if (mode === 'secondary') mode = 'normal'
  if (size === 'mini') size = 'small'

  return (
    <ButtonBase
      ref={innerRef}
      focusRingSpacing={0.5 * GU}
      focusRingRadius={RADIUS}
      css={`
        display: ${wide ? 'flex' : 'inline-flex'};
        align-items: center;
        justify-content: center;
        width: ${wide ? '100%' : 'auto'};
        background: ${mode === 'strong'
          ? `linear-gradient(
              130deg,
              ${theme.accentStart},
              ${theme.accentEnd}
            )`
          : theme.surfaceInteractive};
        color: ${mode === 'strong'
          ? theme.accentContent
          : theme.surfaceContent};
        min-width: ${16 * GU}px;
        height: ${(size === 'small' ? 4 : 5) * GU}px;
        padding: 0 ${3 * GU}px;
        font-size: 16px;
        white-space: nowrap;
        border: 1px solid ${mode === 'normal' ? theme.border : 'transparent'};
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        transition-property: transform, box-shadow;
        transition-duration: 50ms;
        transition-timing-function: ease-in-out;

        &:active {
          transform: translateY(1px);
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.125);
        }
      `}
      {...props}
    >
      {children || (
        <React.Fragment>
          {icon && (
            <span
              css={`
                position: relative;
                top: -1px;
                display: flex;
                color: ${theme.surfaceIcon};
              `}
            >
              {icon}
            </span>
          )}
          {icon && label && (
            <span
              css={`
                width: ${1 * GU}px;
              `}
            />
          )}
          {label}
        </React.Fragment>
      )}
    </ButtonBase>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string,
  wide: PropTypes.bool,

  mode: PropTypes.oneOf([
    'normal',
    'strong',
    'text',

    // backward compatibility
    'outline',
    'secondary',
  ]),
  size: PropTypes.oneOf([
    'large',
    'normal',
    'small',

    // backward compatibility
    'mini',
  ]),
}

Button.defaultProps = {
  mode: 'normal',
  size: 'large',
  wide: false,
}

const ButtonWithRef = React.forwardRef((props, ref) => (
  <Button innerRef={ref} {...props} />
))

ButtonWithRef.Anchor = React.forwardRef((props, ref) => (
  <ButtonWithRef ref={ref} as={SafeLink} {...props} />
))

export { ButtonWithRef as Button }
export default ButtonWithRef
