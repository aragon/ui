import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconTarget = ({ size, ...props }) => {
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
        d="M17.657 6.343A7.947 7.947 0 0 0 12 4a7.948 7.948 0 0 0-5.657 2.343A7.948 7.948 0 0 0 4 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0 0 12 20a7.948 7.948 0 0 0 5.657-2.343A7.948 7.948 0 0 0 20 12a7.948 7.948 0 0 0-2.343-5.657zM12 18.707A6.715 6.715 0 0 1 5.293 12 6.715 6.715 0 0 1 12 5.293 6.715 6.715 0 0 1 18.707 12 6.715 6.715 0 0 1 12 18.707z"
      />
      <path
        fill="currentColor"
        d="M12 6.942A5.064 5.064 0 0 0 6.941 12c0 2.79 2.27 5.059 5.059 5.059 2.79 0 5.059-2.27 5.059-5.059 0-2.79-2.27-5.058-5.059-5.058zm0 8.824A3.77 3.77 0 0 1 8.234 12 3.77 3.77 0 0 1 12 8.234 3.77 3.77 0 0 1 15.766 12 3.77 3.77 0 0 1 12 15.766z"
      />
      <path
        fill="currentColor"
        d="M12 9.883A2.12 2.12 0 0 0 9.883 12 2.12 2.12 0 0 0 12 14.117 2.12 2.12 0 0 0 14.117 12 2.12 2.12 0 0 0 12 9.883zm0 2.941a.825.825 0 0 1 0-1.648.825.825 0 0 1 0 1.648z"
      />
    </svg>
  )
}

IconTarget.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconTarget
