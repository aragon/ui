import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconWarning = ({ size, ...props }) => {
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
        d="M6.343 17.657A7.948 7.948 0 0 0 12 20a7.948 7.948 0 0 0 5.657-2.343A7.947 7.947 0 0 0 20 12a7.948 7.948 0 0 0-2.343-5.657A7.947 7.947 0 0 0 12 4a7.948 7.948 0 0 0-5.657 2.343A7.948 7.948 0 0 0 4 12c0 2.137.832 4.146 2.343 5.657zM12 5.293A6.715 6.715 0 0 1 18.707 12 6.715 6.715 0 0 1 12 18.707 6.715 6.715 0 0 1 5.293 12 6.715 6.715 0 0 1 12 5.293z"
      />
      <path
        fill="currentColor"
        d="M12 12.646c.357 0 .646-.29.646-.646V9.058a.646.646 0 1 0-1.292 0V12c0 .357.29.646.646.646zm-.457 2.753c.12.12.287.189.457.189a.651.651 0 0 0 .646-.646.651.651 0 0 0-.189-.458.65.65 0 0 0-.457-.189.65.65 0 0 0-.457.19.65.65 0 0 0-.19.456c0 .17.07.337.19.457z"
      />
    </svg>
  )
}

IconWarning.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconWarning
