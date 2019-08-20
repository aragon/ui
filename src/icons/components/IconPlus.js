import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconPlus({ size, ...props }) {
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
        strokeWidth={0.3}
        d="M12 5a.566.566 0 0 0-.566.566v12.869a.566.566 0 0 0 1.132 0V5.565A.566.566 0 0 0 12 5z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.3}
        d="M18.434 11.434H5.566a.566.566 0 0 0 0 1.132h12.869a.565.565 0 1 0 0-1.132z"
      />
    </svg>
  )
}

IconPlus.propTypes = IconPropTypes
export default IconPlus
