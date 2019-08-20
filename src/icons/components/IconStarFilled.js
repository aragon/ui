import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconStarFilled({ size, ...props }) {
  const sizeValue = useIconSize(size)
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
        d="M19.968 10.066a.656.656 0 0 0-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0 0 12 4a.644.644 0 0 0-.58.377L9.299 8.88l-4.745.726a.655.655 0 0 0-.521.461.7.7 0 0 0 .163.694l3.434 3.502-.81 4.947a.692.692 0 0 0 .257.662.622.622 0 0 0 .68.051L12 17.585l4.244 2.337a.622.622 0 0 0 .68-.051.692.692 0 0 0 .258-.662l-.81-4.947 3.433-3.502a.7.7 0 0 0 .163-.694z"
      />
    </svg>
  )
}

IconStarFilled.propTypes = IconPropTypes
export default IconStarFilled
