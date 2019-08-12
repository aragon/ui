import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconZoomIn({ size, ...props }) {
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
        <path d="M16.262 6.104A7.136 7.136 0 0011.182 4a7.136 7.136 0 00-5.078 2.104A7.136 7.136 0 004 11.183c0 1.919.747 3.722 2.104 5.079a7.136 7.136 0 005.079 2.104 7.136 7.136 0 005.079-2.104 7.136 7.136 0 002.104-5.08 7.136 7.136 0 00-2.104-5.078zm-5.08 10.97a5.897 5.897 0 01-5.89-5.891 5.897 5.897 0 015.89-5.89 5.897 5.897 0 015.891 5.89 5.897 5.897 0 01-5.89 5.89z" />
        <path d="M19.81 18.897l-3.553-3.555a.646.646 0 10-.915.914l3.555 3.555a.644.644 0 00.914 0 .646.646 0 000-.914zM11.183 8.085a.646.646 0 00-.646.647v4.902a.646.646 0 001.292 0V8.732a.646.646 0 00-.646-.647z" />
        <path d="M13.634 10.537H8.732a.646.646 0 000 1.292h4.902a.646.646 0 100-1.292z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconZoomIn.propTypes = IconPropTypes
export default IconZoomIn
