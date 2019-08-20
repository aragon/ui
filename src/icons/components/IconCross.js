import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCross({ size, ...props }) {
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
        d="M17.858 6.142a.485.485 0 0 0-.685 0L6.142 17.172a.485.485 0 1 0 .686.686l11.03-11.03a.485.485 0 0 0 0-.686z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.5}
        d="M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 1 0-.685.685l11.03 11.031a.483.483 0 0 0 .686 0 .485.485 0 0 0 0-.685z"
      />
    </svg>
  )
}

IconCross.propTypes = IconPropTypes
export default IconCross
