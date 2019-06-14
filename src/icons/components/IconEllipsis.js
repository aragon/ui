import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconEllipsis = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
      <circle cx={6} cy={12} r={1} fill="currentColor" />
      <circle cx={12} cy={12} r={1} fill="currentColor" />
      <circle cx={18} cy={12} r={1} fill="currentColor" />
    </svg>
  )
}

IconEllipsis.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconEllipsis
