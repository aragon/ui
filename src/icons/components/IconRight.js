import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconRight({ size, ...props }) {
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
        d="M8.222 4.607a.737.737 0 000 1.055l5.944 5.838-5.944 5.838a.737.737 0 000 1.054.77.77 0 001.075 0l6.48-6.365a.737.737 0 000-1.054l-6.48-6.366a.77.77 0 00-1.075 0z"
      />
    </svg>
  )
}

IconRight.propTypes = IconPropTypes
export default IconRight
