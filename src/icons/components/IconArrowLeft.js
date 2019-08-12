import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconArrowLeft({ size, ...props }) {
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
        d="M19.354 11.354H4.646a.646.646 0 0 0 0 1.292h14.708a.646.646 0 1 0 0-1.292z"
      />
      <path
        fill="currentColor"
        d="M5.56 12l5.059-5.058a.646.646 0 0 0-.914-.914L4.19 11.543a.646.646 0 0 0 0 .914l5.515 5.515a.644.644 0 0 0 .914 0 .646.646 0 0 0 0-.914L5.561 12z"
      />
    </svg>
  )
}

IconArrowLeft.propTypes = IconPropTypes
export default IconArrowLeft
