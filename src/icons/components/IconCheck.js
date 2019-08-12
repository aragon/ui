import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCheck({ size, ...props }) {
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
        d="M19.81 6.2a.624.624 0 0 0-.913 0L9.242 16.357l-4.139-4.355a.624.624 0 0 0-.914 0 .705.705 0 0 0 0 .961L8.785 17.8a.623.623 0 0 0 .914-.001L19.811 7.162a.705.705 0 0 0 0-.962z"
      />
    </svg>
  )
}

IconCheck.propTypes = IconPropTypes
export default IconCheck
