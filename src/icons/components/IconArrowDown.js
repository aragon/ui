import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconArrowDown = ({ size, ...props }) => {
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
        d="M11.354 4.646v14.708a.646.646 0 1 0 1.292 0V4.646a.646.646 0 0 0-1.292 0z"
      />
      <path
        fill="currentColor"
        d="M12 18.44l-5.058-5.06a.646.646 0 0 0-.914.914l5.515 5.515a.646.646 0 0 0 .914 0l5.515-5.515a.644.644 0 0 0 0-.914.646.646 0 0 0-.914 0L12 18.44z"
      />
    </svg>
  )
}

IconArrowDown.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconArrowDown
