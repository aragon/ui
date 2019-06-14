import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconZoomIn = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path d="M16.262 6.104A7.136 7.136 0 0 0 11.182 4a7.136 7.136 0 0 0-5.078 2.104A7.136 7.136 0 0 0 4 11.183c0 1.919.747 3.722 2.104 5.079a7.136 7.136 0 0 0 5.079 2.104 7.136 7.136 0 0 0 5.079-2.104 7.136 7.136 0 0 0 2.104-5.08 7.136 7.136 0 0 0-2.104-5.078zm-5.08 10.97a5.897 5.897 0 0 1-5.89-5.891 5.897 5.897 0 0 1 5.89-5.89 5.897 5.897 0 0 1 5.891 5.89 5.897 5.897 0 0 1-5.89 5.89z" />
        <path d="M19.81 18.897l-3.553-3.555a.646.646 0 1 0-.915.914l3.555 3.555a.644.644 0 0 0 .914 0 .646.646 0 0 0 0-.914zM11.183 8.085a.646.646 0 0 0-.646.647v4.902a.646.646 0 0 0 1.292 0V8.732a.646.646 0 0 0-.646-.647z" />
        <path d="M13.634 10.537H8.732a.646.646 0 0 0 0 1.292h4.902a.646.646 0 1 0 0-1.292z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconZoomIn.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconZoomIn
