import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconLeft({ size, ...props }) {
  const sizeValue = useIconSize(size)
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
        d="M15.777 18.392a.737.737 0 0 0 0-1.054L9.834 11.5l5.943-5.838a.737.737 0 0 0 0-1.055.77.77 0 0 0-1.074 0l-6.48 6.365a.737.737 0 0 0 0 1.055l6.48 6.365a.77.77 0 0 0 1.074 0z"
      />
    </svg>
  )
}

IconLeft.propTypes = IconPropTypes
export default IconLeft
