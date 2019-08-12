import React from 'react'
import PropTypes from 'prop-types'

function Link({ children, external, ...props }) {
  const passedProps = { ...props }

  if (external) {
    passedProps._target = 'blank'
  }

  return <a {...passedProps}>{children}</a>
}

Link.propTypes = {
  children: PropTypes.node,
  external: PropTypes.bool,
  rel: PropTypes.string,
}

Link.defaultProps = {
  external: false,
  rel: 'noopener noreferrer',
}

export default Link
