import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconRotateLeft({ size, ...props }) {
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
        d="M9.166 9.955H5.539V6.328a.623.623 0 0 0-1.245 0v4.249c0 .344.279.623.623.623h4.249a.622.622 0 1 0 0-1.245z"
      />
      <path
        fill="currentColor"
        d="M19.305 9.675a6.95 6.95 0 0 0-3.577-3.985 6.95 6.95 0 0 0-5.347-.289 7.04 7.04 0 0 0-2.611 1.64l-3.28 3.082a.623.623 0 0 0 .853.908l3.286-3.088a5.787 5.787 0 0 1 2.166-1.367 5.758 5.758 0 0 1 7.335 3.513 5.758 5.758 0 0 1-3.513 7.335 5.758 5.758 0 0 1-7.336-3.513.622.622 0 1 0-1.174.414 6.95 6.95 0 0 0 3.577 3.985 6.968 6.968 0 0 0 5.347.289 6.95 6.95 0 0 0 3.985-3.577 6.95 6.95 0 0 0 .289-5.347z"
      />
    </svg>
  )
}

IconRotateLeft.propTypes = IconPropTypes
export default IconRotateLeft
