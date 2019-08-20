import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconAlignCenter({ size, ...props }) {
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
        d="M18.068 9.534H5.698a.699.699 0 0 0 0 1.398h12.37a.699.699 0 0 0 0-1.398zM19.602 6H3.7a.699.699 0 0 0 0 1.398h15.903a.699.699 0 1 0 0-1.398zm0 7.068H3.7a.699.699 0 0 0 0 1.398h15.903a.699.699 0 1 0 0-1.398zm-1.534 3.534H5.698a.699.699 0 0 0 0 1.398h12.37a.699.699 0 0 0 0-1.398z"
      />
    </svg>
  )
}

IconAlignCenter.propTypes = IconPropTypes
export default IconAlignCenter
