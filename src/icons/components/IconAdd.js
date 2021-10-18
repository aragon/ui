import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconAdd({ size, ...props }) {
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
        d="M4 12c0 .547.447 1 1 1h5.833a.17.17 0 01.167.167V19c0 .547.447 1 1 1 .547 0 1-.453 1-1v-5.833c0-.094.073-.167.167-.167H19c.547 0 1-.453 1-1 0-.553-.453-1-1-1h-5.833a.17.17 0 01-.167-.167V5c0-.553-.453-1-1-1-.553 0-1 .447-1 1v5.833c0 .087-.08.167-.167.167H5c-.553 0-1 .447-1 1z"
      />
    </svg>
  )
}

IconAdd.propTypes = IconPropTypes
export default IconAdd
