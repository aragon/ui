import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconArrowLeft({ size, ...props }) {
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
        stroke="currentColor"
        strokeWidth={0.2}
        d="M18.434 11.434H5.566a.566.566 0 0 0 0 1.132h12.869a.565.565 0 1 0 0-1.132z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M6.366 12l4.426-4.426a.565.565 0 1 0-.8-.8L5.166 11.6a.566.566 0 0 0 0 .8l4.826 4.826a.564.564 0 0 0 .8 0 .565.565 0 0 0 0-.8L6.366 12z"
      />
    </svg>
  )
}

IconArrowLeft.propTypes = IconPropTypes
export default IconArrowLeft
