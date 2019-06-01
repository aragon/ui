import React from 'react'
import PropTypes from 'prop-types'
import SafeLink from '../Link/SafeLink'
import { GU } from '../../utils/styles'
import { useTheme } from '../../theme/Theme'
import ButtonBase from './ButtonBase'

function Button({ children, icon, label, mode, size }) {
  const theme = useTheme()
  return (
    <ButtonBase
      focusRingSpacing={0.5 * GU}
      focusRingRadius={4}
      css={`
        display: inline-flex;
        align-items: center;
        background: ${mode === 'strong'
          ? `
              linear-gradient(
              130deg,
              ${theme.accentGradientStart},
              ${theme.accentGradientEnd}
            )`
          : theme.surface};
        color: ${mode === 'strong' ? theme.accentText : theme.surfaceText};
        min-width: ${16 * GU}px;
        height: ${(size === 'small' ? 4 : 5) * GU}px;
        padding: 0 ${3 * GU}px;
        font-size: 16px;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
        border: 0.5px solid
          ${mode === 'normal' ? theme.surfaceBorder : 'transparent'};
        transition-property: transform, box-shadow;
        transition-duration: 50ms;
        transition-timing-function: ease-in-out;

        &:active {
          transform: translateY(1px);
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.125);
        }
      `}
    >
      {children || (
        <React.Fragment>
          {icon && (
            <span
              css={`
                position: relative;
                top: -1px;
                display: flex;
              `}
            >
              {icon}
            </span>
          )}
          {icon && label && (
            <span
              css={`
                width: ${GU / 4}px;
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
  mode: PropTypes.oneOf(['normal', 'strong', 'secondary']),
  size: PropTypes.oneOf(['normal', 'small']),
}

Button.defaultProps = {
  mode: 'normal',
  size: 'big',
}

Button.Anchor = React.forwardRef((props, ref) => (
  <Button ref={ref} as={SafeLink} {...props} />
))

export default Button
