import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconArrowUp({ size, ...props }) {
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
        d="M12.646 19.354V4.646a.646.646 0 1 0-1.292 0v14.708a.646.646 0 1 0 1.292 0z"
      />
      <path
        fill="currentColor"
        d="M12 5.56l5.058 5.059a.646.646 0 0 0 .914-.914L12.457 4.19a.646.646 0 0 0-.914 0L6.028 9.705a.644.644 0 0 0 0 .914.646.646 0 0 0 .914 0L12 5.561z"
      />
    </svg>
  )
}

IconArrowUp.propTypes = IconPropTypes
export default IconArrowUp
