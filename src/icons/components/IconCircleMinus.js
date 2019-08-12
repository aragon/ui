import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCircleMinus({ size, ...props }) {
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
        d="M17.657 6.343A7.947 7.947 0 0 0 12 4a7.948 7.948 0 0 0-5.657 2.343A7.948 7.948 0 0 0 4 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0 0 12 20a7.948 7.948 0 0 0 5.657-2.343A7.948 7.948 0 0 0 20 12a7.948 7.948 0 0 0-2.343-5.657zM12 18.707A6.715 6.715 0 0 1 5.293 12 6.715 6.715 0 0 1 12 5.293 6.715 6.715 0 0 1 18.707 12 6.715 6.715 0 0 1 12 18.707z"
      />
      <path
        fill="currentColor"
        d="M14.941 11.354H9.06a.646.646 0 1 0 0 1.292h5.883a.646.646 0 1 0 0-1.292z"
      />
    </svg>
  )
}

IconCircleMinus.propTypes = IconPropTypes
export default IconCircleMinus
