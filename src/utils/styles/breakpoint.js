import React from 'react'
import PropTypes from 'prop-types'
import Media from 'react-media'
import { css } from 'styled-components'

// These breakpoints values represent minimum screen sizes.
// Small screen sizes should be targetted by default (mobile first).
const BREAKPOINTS = {
  medium: 768,
  large: 1170,
}

const BreakPointName = PropTypes.oneOf([...Object.keys(BREAKPOINTS), ''])

// CSS breakpoints
export const breakpoint = (name, styles) => css`
  @media (min-width: ${BREAKPOINTS[name]}px) {
    ${styles};
  }
`

// Rendering breakpoints
export const BreakPoint = ({ from, to, children, ...props }) => {
  const names = ['medium', 'large']
  const query = {}
  if (from && names.includes(from)) {
    query.minWidth = BREAKPOINTS[from]
  }
  if (to && names.includes(to)) {
    query.maxWidth = BREAKPOINTS[to] - 1
  }
  return (
    <Media query={query} defaultMatches={false} {...props}>
      {ok => (ok ? children : null)}
    </Media>
  )
}

BreakPoint.propTypes = {
  from: BreakPointName,
  to: BreakPointName,
  children: PropTypes.node,
}

BreakPoint.defaultProps = {
  to: '',
  from: '',
}
