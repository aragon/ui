import React from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '../ButtonBase/ButtonBase'
import { GU } from '../../style'
import { useTheme } from '../../theme'

function ButtonText({ horizontalPadding, ...props }) {
  const theme = useTheme()

  const leftPadding =
    Number(horizontalPadding === 'left' || horizontalPadding === 'both') * GU

  const rightPadding =
    Number(horizontalPadding === 'right' || horizontalPadding === 'both') * GU

  return (
    <ButtonBase
      {...props}
      css={`
        padding: ${1 * GU}px ${rightPadding}px ${1 * GU}px ${leftPadding}px;
        color: ${theme.link};
        font-size: inherit;
      `}
    />
  )
}

ButtonText.propTypes = {
  ...ButtonBase.propTypes,
  horizontalPadding: PropTypes.oneOf(['both', 'left', 'right', 'none']),
}

ButtonText.defaultProps = {
  horizontalPadding: 'both',
}

export default ButtonText
