import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconAlignLeft({ size, ...props }) {
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
        d="M16.418 9.534H4.048a.699.699 0 0 0 0 1.398h12.37a.699.699 0 1 0 0-1.398zM19.952 6H4.048a.699.699 0 0 0 0 1.398h15.904a.699.699 0 0 0 0-1.398zm0 7.068H4.048a.699.699 0 0 0 0 1.398h15.904a.699.699 0 0 0 0-1.398zm-3.534 3.534H4.048a.699.699 0 0 0 0 1.398h12.37a.699.699 0 1 0 0-1.398z"
      />
    </svg>
  )
}

IconAlignLeft.propTypes = IconPropTypes
export default IconAlignLeft
