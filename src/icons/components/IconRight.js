import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconRight = ({ size, ...props }) => {
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
        d="M7.75 3.746a.829.829 0 0 0 0 1.187l6.687 6.567-6.687 6.567a.829.829 0 0 0 0 1.187.865.865 0 0 0 1.209 0l7.29-7.16a.829.829 0 0 0 0-1.187L8.96 3.746a.866.866 0 0 0-1.209 0z"
      />
    </svg>
  )
}

IconRight.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconRight
