import React from 'react'
import PropTypes from 'prop-types'
import ButtonBase from '../ButtonBase/ButtonBase'
import { useInside } from '../../utils'
import { useTheme } from '../../theme'
import { RADIUS } from '../../style'

function Link({ onClick, href, external, ...props }) {
  const theme = useTheme()

  // `external` defaults to `true` if `href` is present, `false` otherwise.
  if (external === undefined) {
    external = Boolean(href)
  }

  const [insideHelp] = useInside('Help')

  return (
    <ButtonBase
      href={href}
      onClick={onClick}
      external={external}
      focusRingSpacing={[6, 2]}
      focusRingRadius={RADIUS}
      {...props}
      css={`
        color: ${insideHelp ? theme.help : theme.link};
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
