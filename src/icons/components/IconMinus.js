import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconMinus({ size, ...props }) {
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
        d="M19.354 11.354H4.646a.646.646 0 0 0 0 1.292h14.708a.646.646 0 1 0 0-1.292z"
      />
    </svg>
  )
}

IconMinus.propTypes = IconPropTypes
export default IconMinus
