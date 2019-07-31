import React from 'react'
import PropTypes from 'prop-types'
import { GU } from '../../style'
import { Button } from './Button'
import { ButtonBase } from './ButtonBase'

function ButtonIcon({ label, children, mode, ...props }) {
  if (mode === 'button') {
    return (
      <Button
        title={label}
        css={`
          width: ${5 * GU}px;
          height: ${5 * GU}px;
          min-width: 0;
          padding: 0;
        `}
        {...props}
      >
        {children}
      </Button>
    )
  }

  return (
    <ButtonBase
      title={label}
      css={`
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: ${4 * GU}px;
        height: ${4 * GU}px;
        &:active {
          background: rgba(220, 234, 239, 0.3);
        }
      `}
      {...props}
    >
      {children}
    </ButtonBase>
  )
}

ButtonIcon.propTypes = {
  mode: PropTypes.oneOf(['flat', 'button']),
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

ButtonIcon.defaultProps = {
  mode: 'flat',
}

export { ButtonIcon }
export default ButtonIcon
