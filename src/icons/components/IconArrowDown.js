import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconArrowDown({ size, ...props }) {
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
        d="M11.434 5.566v12.869a.566.566 0 0 0 1.132 0V5.565a.566.566 0 1 0-1.132 0z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M12 17.634L7.574 13.21a.565.565 0 1 0-.8.8l4.826 4.825a.566.566 0 0 0 .8 0l4.826-4.826a.563.563 0 0 0 0-.8.566.566 0 0 0-.8 0L12 17.634z"
      />
    </svg>
  )
}

IconArrowDown.propTypes = IconPropTypes
export default IconArrowDown
