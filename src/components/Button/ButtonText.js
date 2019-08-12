import React from 'react'
import PropTypes from 'prop-types'
import { ButtonBase } from './ButtonBase'
import { GU } from '../../style'
import { useTheme } from '../../theme'

function ButtonText({ horizontalPadding, ...props }) {
  const theme = useTheme()

  const leftPadding =
    Number(horizontalPadding === 'left' || horizontalPadding === 'normal') * GU

  const rightPadding =
    Number(horizontalPadding === 'right' || horizontalPadding === 'normal') * GU

  return (
    <ButtonBase
      {...props}
      css={`
        padding: ${1 * GU}px ${leftPadding}px ${1 * GU}px ${rightPadding}px;
        color: ${theme.link};
        text-decoration: none;
        font-size: inherit;
      `}
    />
  )
}

ButtonText.propTypes = {
  ...ButtonBase.propTypes,
  horizontalPadding: PropTypes.oneOf(['both', 'left', 'right', 'none']),
}

export default ButtonText
