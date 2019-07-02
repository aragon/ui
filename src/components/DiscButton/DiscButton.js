import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { useTheme } from '../../theme'
import { ButtonBase } from '../Button/ButtonBase'

function DiscButton({ children, description, size, ...props }) {
  const theme = useTheme()
  return (
    <ButtonBase
      focusRingSpacing={4}
      focusRingRadius={size}
      title={description}
      css={`
        width: ${size}px;
        height: ${size}px;
        background: ${theme.help};
        color: ${theme.helpContent};
        border-radius: 50%;

        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
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
      {children}
    </ButtonBase>
  )
}

DiscButton.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  size: PropTypes.number,
}

DiscButton.defaultProps = {
  size: 5 * GU,
}

export { DiscButton }
