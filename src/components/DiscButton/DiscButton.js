import React from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '../Button/ButtonBase'
import { GU } from '../../utils'
import { useTheme } from '../../theme'

function DiscButton({ children, description, size }) {
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

export default DiscButton
