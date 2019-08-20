import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCheck({ size, ...props }) {
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
        stroke="currentColor"
        strokeWidth={0.5}
        d="M18.834 7.166a.565.565 0 0 0-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 0 0-.8 0 .568.568 0 0 0 0 .802l4.022 4.03a.563.563 0 0 0 .8 0l8.847-8.866a.568.568 0 0 0 0-.802z"
      />
    </svg>
  )
}

IconCheck.propTypes = IconPropTypes
export default IconCheck
