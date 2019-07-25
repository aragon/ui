import React from 'react'
import PropTypes from 'prop-types'
import SafeLink from '../Link/SafeLink'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import { ButtonBase } from './ButtonBase'

const Button = React.forwardRef(
  ({ children, icon, label, mode, size, ...props }, ref) => {
    const theme = useTheme()

    // backward compatibility
    if (mode === 'outline') mode = 'normal'
    if (mode === 'secondary') mode = 'normal'
    if (size === 'mini') size = 'small'

    return (
      <ButtonBase
        ref={ref}
        focusRingSpacing={0.5 * GU}
        focusRingRadius={RADIUS}
        css={`
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
)

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  label: PropTypes.string,

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
}

Button.Anchor = React.forwardRef((props, ref) => (
  <Button ref={ref} as={SafeLink} {...props} />
))

export { Button }
export default Button
