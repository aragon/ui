import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconDown = ({ size, ...props }) => {
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
        d="M19.754 8.25a.829.829 0 0 0-1.187 0L12 14.937 5.433 8.25a.829.829 0 0 0-1.187 0 .865.865 0 0 0 0 1.209l7.16 7.29a.829.829 0 0 0 1.187 0l7.161-7.29a.865.865 0 0 0 0-1.209z"
      />
    </svg>
  )
}

IconDown.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconDown
