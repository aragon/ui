import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconExternal = ({ size, ...props }) => {
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
        d="M16.902 12.17a.646.646 0 0 0-.646.647v4.903a.989.989 0 0 1-.988.987H6.28a.989.989 0 0 1-.987-.987V8.732c0-.545.443-.988.987-.988h4.903a.646.646 0 1 0 0-1.293H6.28A2.283 2.283 0 0 0 4 8.731v8.989A2.283 2.283 0 0 0 6.28 20h8.988a2.283 2.283 0 0 0 2.28-2.28v-4.903a.646.646 0 0 0-.645-.646zM19.354 4H14.45a.646.646 0 1 0 0 1.293h4.256v4.256a.646.646 0 0 0 1.293 0V4.646A.646.646 0 0 0 19.354 4z"
      />
      <path
        fill="currentColor"
        d="M19.81 4.19a.646.646 0 0 0-.913 0l-8.988 8.988a.646.646 0 0 0 .914.914l8.988-8.988a.646.646 0 0 0 0-.914z"
      />
    </svg>
  )
}

IconExternal.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconExternal
