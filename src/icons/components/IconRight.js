import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconRight({ size, ...props }) {
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
        d="M7.75 3.746a.829.829 0 000 1.187l6.687 6.567-6.687 6.567a.829.829 0 000 1.187.865.865 0 001.209 0l7.29-7.16a.829.829 0 000-1.187L8.96 3.746a.866.866 0 00-1.209 0z"
      />
    </svg>
  )
}

IconRight.propTypes = IconPropTypes
export default IconRight
