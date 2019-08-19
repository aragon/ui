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
        d="M16.25 19.254a.829.829 0 0 0 0-1.187L9.563 11.5l6.687-6.567a.829.829 0 0 0 0-1.187.865.865 0 0 0-1.209 0l-7.29 7.16a.829.829 0 0 0 0 1.187l7.29 7.161a.865.865 0 0 0 1.209 0z"
      />
    </svg>
  )
}

IconLeft.propTypes = IconPropTypes
export default IconLeft
