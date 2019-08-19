import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconArrowRight({ size, ...props }) {
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
        d="M4.646 12.646h14.708a.646.646 0 0 0 0-1.292H4.646a.646.646 0 0 0 0 1.292z"
      />
      <path
        fill="currentColor"
        d="M18.44 12l-5.059 5.058a.646.646 0 1 0 .914.914l5.515-5.515a.646.646 0 0 0 0-.914l-5.515-5.515a.644.644 0 0 0-.914 0 .646.646 0 0 0 0 .914L18.439 12z"
      />
    </svg>
  )
}

IconArrowRight.propTypes = IconPropTypes
export default IconArrowRight
