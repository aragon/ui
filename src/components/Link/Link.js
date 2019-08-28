import React from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '../ButtonBase/ButtonBase'
import { useTheme } from '../../theme'

function Link({ onClick, href, external, ...props }) {
  const theme = useTheme()

  // `external` defaults to `true` if `href` is present, `false` otherwise.
  if (external === undefined) {
    external = Boolean(href)
  }

  return (
    <ButtonBase
      href={href}
      onClick={onClick}
      external={external}
      focusRingSpacing={6}
      {...props}
      css={`
        color: ${theme.link};
        text-decoration: ${external ? 'underline' : 'none'};
        font-size: inherit;
      `}
    />
  )
}

Link.propTypes = {
  ...ButtonBase.propTypes,
  href: PropTypes.string,
  onClick: PropTypes.func,
  external: PropTypes.bool,
}

export default Link
