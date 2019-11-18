import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconHash = ({ size, ...props }) => {
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
        d="M18.537 8.902H5.463a.646.646 0 0 0 0 1.293h13.074a.646.646 0 0 0 0-1.293zm0 4.903H5.463a.646.646 0 1 0 0 1.293h13.074a.646.646 0 0 0 0-1.293z"
      />
      <path
        fill="currentColor"
        d="M10.437 4.004a.646.646 0 0 0-.714.571L8.09 19.283a.646.646 0 1 0 1.285.142l1.634-14.707a.646.646 0 0 0-.57-.714zm4.903 0a.646.646 0 0 0-.714.571l-1.634 14.707a.646.646 0 0 0 1.285.143L15.91 4.718a.646.646 0 0 0-.571-.714z"
      />
    </svg>
  )
}

IconHash.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconHash
