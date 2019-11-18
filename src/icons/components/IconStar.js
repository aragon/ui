import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconStar = ({ size, ...props }) => {
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
        d="M19.968 10.066a.656.656 0 0 0-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0 0 12 4a.644.644 0 0 0-.58.377L9.299 8.88l-4.745.726a.655.655 0 0 0-.521.461.7.7 0 0 0 .163.694l3.434 3.502-.81 4.947a.692.692 0 0 0 .257.662.622.622 0 0 0 .68.051L12 17.585l4.244 2.337a.622.622 0 0 0 .68-.051.692.692 0 0 0 .258-.662l-.81-4.947 3.433-3.502a.7.7 0 0 0 .163-.694zm-4.742 3.474a.697.697 0 0 0-.186.6l.646 3.946-3.385-1.864a.622.622 0 0 0-.602 0l-3.385 1.864.646-3.946a.697.697 0 0 0-.186-.6l-2.74-2.793 3.787-.58a.65.65 0 0 0 .486-.37L12 6.206l1.693 3.59a.65.65 0 0 0 .486.371l3.786.58-2.74 2.793z"
      />
    </svg>
  )
}

IconStar.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconStar
