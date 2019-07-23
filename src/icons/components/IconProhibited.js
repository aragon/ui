import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconProhibited = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
      />
      <path
        fill="currentColor"
        d="M17.656 16.742L7.258 6.344a.646.646 0 10-.914.914l10.398 10.398a.645.645 0 00.914 0 .647.647 0 000-.914z"
      />
    </svg>
  )
}

IconProhibited.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconProhibited
