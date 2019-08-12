import React from 'react'
import PropTypes from 'prop-types'

const SAFE_REL = 'noopener noreferrer'

function Link({ children, external, unsafe, ...props }) {
  const passedProps = { ...props }

  if (external) {
    passedProps._target = 'blank'
  }

  if (unsafe) {
    passedProps.rel = passedProps.rel.replace(SAFE_REL, '')
  }

  return <a {...passedProps}>{children}</a>
}

Link.propTypes = {
  children: PropTypes.node,
  external: PropTypes.bool,
  rel: PropTypes.string,
  unsafe: PropTypes.bool,
}

Link.defaultProps = {
  external: false,
  rel: SAFE_REL,
  unsafe: false,
}

export default Link
