import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconCross = ({ size, ...props }) => {
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
        d="M19.81 4.19a.646.646 0 0 0-.913 0L4.189 18.896a.646.646 0 1 0 .914.914L19.811 5.104a.646.646 0 0 0 0-.915z"
      />
      <path
        fill="currentColor"
        d="M19.81 18.897L5.104 4.189a.646.646 0 1 0-.914.914l14.708 14.708a.644.644 0 0 0 .914 0 .647.647 0 0 0 0-.914z"
      />
    </svg>
  )
}

IconCross.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconCross
