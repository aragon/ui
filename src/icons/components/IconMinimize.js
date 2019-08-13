import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconMinimize({ size, ...props }) {
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
        d="M10.366 12.988H5.463a.646.646 0 000 1.293H9.72v4.256a.646.646 0 001.293 0v-4.903a.646.646 0 00-.646-.646zm8.171-3.268H14.28V5.463a.646.646 0 00-1.293 0v4.903c0 .357.29.646.646.646h4.903a.646.646 0 100-1.292z"
      />
      <path
        fill="currentColor"
        d="M19.81 4.19a.646.646 0 00-.913 0l-5.72 5.719a.646.646 0 10.914.914l5.72-5.72a.646.646 0 000-.914zm-8.987 8.987a.646.646 0 00-.914 0l-5.72 5.72a.646.646 0 00.914.914l5.72-5.72a.646.646 0 000-.914z"
      />
    </svg>
  )
}

IconMinimize.propTypes = IconPropTypes
export default IconMinimize
