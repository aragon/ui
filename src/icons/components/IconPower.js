import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconPower({ size, ...props }) {
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
        d="M17.658 7.155a.712.712 0 0 0-1.007 1.007 6.533 6.533 0 0 1 1.925 4.65 6.533 6.533 0 0 1-1.927 4.65A6.555 6.555 0 0 1 12 19.384a6.557 6.557 0 0 1-4.65-1.924 6.584 6.584 0 0 1 0-9.298.712.712 0 1 0-1.008-1.007A7.948 7.948 0 0 0 4 12.811a7.95 7.95 0 0 0 2.342 5.656A7.948 7.948 0 0 0 12 20.81a7.948 7.948 0 0 0 5.656-2.342A7.947 7.947 0 0 0 20 12.812a7.948 7.948 0 0 0-2.342-5.657z"
      />
      <path
        fill="currentColor"
        d="M12.004 3.189a.712.712 0 0 0-.712.712v8.098a.712.712 0 0 0 1.424 0V3.9a.712.712 0 0 0-.712-.712z"
      />
    </svg>
  )
}

IconPower.propTypes = IconPropTypes
export default IconPower
