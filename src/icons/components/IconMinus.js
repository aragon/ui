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
        stroke="currentColor"
        strokeWidth={0.3}
        d="M18.434 11.354H5.566c-.313 0-.566.29-.566.646 0 .357.253.646.566.646h12.869c.312 0 .565-.289.565-.646 0-.357-.253-.646-.566-.646z"
      />
    </svg>
  )
}

IconMinus.propTypes = IconPropTypes
export default IconMinus
