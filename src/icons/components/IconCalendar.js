import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconCalendar = ({ size, ...props }) => {
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
        fillRule="evenodd"
        d="M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v12.161c0 .33-.267.598-.597.598H4.597A.597.597 0 0 1 4 18.354V6.194zm1.193.597v10.967h13.613V6.79H5.194z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v3.722c0 .33-.267.597-.597.597H4.597A.597.597 0 0 1 4 9.915V6.193zm1.193.597v2.527h13.613V6.79H5.194z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.783 4c.33 0 .597.267.597.597v2.527a.597.597 0 1 1-1.194 0V4.597c0-.33.267-.597.597-.597zm8.499 0c.33 0 .597.267.597.597v2.527a.597.597 0 1 1-1.194 0V4.597c0-.33.267-.597.597-.597z"
        clipRule="evenodd"
      />
    </svg>
  )
}

IconCalendar.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconCalendar
