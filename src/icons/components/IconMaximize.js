import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconMaximize({ size, ...props }) {
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
        d="M19.354 4H14.45a.646.646 0 100 1.293h4.256v4.256a.646.646 0 101.293 0V4.646A.646.646 0 0019.354 4zM9.549 18.707H5.293v-4.256a.646.646 0 00-1.293 0v4.903c0 .357.29.646.646.646H9.55a.646.646 0 100-1.293z"
      />
      <path
        fill="currentColor"
        d="M19.81 4.19a.646.646 0 00-.913 0l-5.72 5.719a.647.647 0 00.914.914l5.72-5.72a.646.646 0 000-.914zm-8.987 8.987a.646.646 0 00-.914 0l-5.72 5.72a.646.646 0 10.914.914l5.72-5.72a.646.646 0 000-.914z"
      />
    </svg>
  )
}

IconMaximize.propTypes = IconPropTypes
export default IconMaximize
