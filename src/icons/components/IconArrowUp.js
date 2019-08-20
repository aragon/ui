import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconArrowUp({ size, ...props }) {
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
        d="M12.566 18.434V5.566a.566.566 0 0 0-1.132 0v12.869a.566.566 0 1 0 1.132 0z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M12 6.366l4.426 4.426a.566.566 0 0 0 .8-.8L12.4 5.166a.566.566 0 0 0-.8 0L6.774 9.992a.564.564 0 0 0 0 .8c.221.22.58.22.8 0L12 6.366z"
      />
    </svg>
  )
}

IconArrowUp.propTypes = IconPropTypes
export default IconArrowUp
