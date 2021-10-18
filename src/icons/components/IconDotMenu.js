import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconDotMenu({ size, ...props }) {
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
        d="M12 8.333A2.167 2.167 0 1012 4a2.167 2.167 0 000 4.333zM12 14.167a2.167 2.167 0 100-4.334 2.167 2.167 0 000 4.334zM12 20a2.167 2.167 0 100-4.333A2.167 2.167 0 0012 20z"
      />
    </svg>
  )
}

IconDotMenu.propTypes = IconPropTypes
export default IconDotMenu
