import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import LinkBase from '../LinkBase/LinkBase'
import { useTheme } from '../../theme'

const KEYCODE_ENTER = 13

function Link({ onClick, href, ...props }) {
  const theme = useTheme()

  const handleKeyDown = useCallback(
    event => {
      if (event.keyCode === KEYCODE_ENTER && onClick) {
        onClick()
      }
    },
    [onClick]
  )

  return (
    <LinkBase
      href={href}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...props}
      css={`
        color: ${theme.link};
        text-decoration: none;
        font-size: inherit;
        cursor: pointer;
      `}
    />
  )
}

Link.propTypes = {
  ...LinkBase.propTypes,
  href: PropTypes.string,
  onClick: PropTypes.func,
}

export default Link
