import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconPlus = ({ size, ...props }) => {
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
        d="M12 4a.646.646 0 00-.646.646v14.708a.646.646 0 101.292 0V4.646A.646.646 0 0012 4z"
      />
      <path
        fill="currentColor"
        d="M19.354 11.354H4.646a.646.646 0 000 1.292h14.708a.646.646 0 100-1.292z"
      />
    </svg>
  )
}

IconPlus.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconPlus
