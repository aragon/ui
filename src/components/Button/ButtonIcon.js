import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'

const ButtonIcon = React.memo(function ButtonIcon({
  label,
  children,
  ...props
}) {
  return (
    <ButtonBase
      title={label}
      css={`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        &:active {
          background: rgba(220, 234, 239, 0.3);
        }
      `}
      {...props}
    >
      {children}
    </ButtonBase>
  )
})

ButtonIcon.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export { ButtonIcon }
export default ButtonIcon
