import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconEllipsis({ size, ...props }) {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx={6} cy={12} r={1} fill="currentColor" />
      <circle cx={12} cy={12} r={1} fill="currentColor" />
      <circle cx={18} cy={12} r={1} fill="currentColor" />
    </svg>
  )
}

IconEllipsis.propTypes = IconPropTypes
export default IconEllipsis
