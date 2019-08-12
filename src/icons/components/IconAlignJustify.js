import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconAlignJustify({ size, ...props }) {
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
        d="M20.273 9.434H3.727a.727.727 0 0 0 0 1.455h16.546a.727.727 0 0 0 0-1.455zm0-3.676H3.727a.727.727 0 0 0 0 1.454h16.546a.727.727 0 1 0 0-1.454zm0 7.353H3.727a.727.727 0 1 0 0 1.454h16.546a.727.727 0 1 0 0-1.454zm0 3.677H3.727a.727.727 0 1 0 0 1.454h16.546a.727.727 0 1 0 0-1.454z"
      />
    </svg>
  )
}

IconAlignJustify.propTypes = IconPropTypes
export default IconAlignJustify
