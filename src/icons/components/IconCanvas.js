import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCanvas({ size, ...props }) {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path d="M17.72 4H6.28A2.283 2.283 0 0 0 4 6.28v11.44A2.283 2.283 0 0 0 6.28 20h11.44A2.283 2.283 0 0 0 20 17.72V6.28A2.283 2.283 0 0 0 17.72 4zm.987 13.72a.989.989 0 0 1-.987.987H6.28a.989.989 0 0 1-.987-.987V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z" />
        <path d="M19.354 8.902H4.646a.646.646 0 0 0 0 1.293h14.708a.646.646 0 1 0 0-1.293z" />
        <path d="M9.549 8.902a.646.646 0 0 0-.646.647v9.805a.646.646 0 1 0 1.292 0V9.549a.646.646 0 0 0-.646-.647z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconCanvas.propTypes = IconPropTypes
export default IconCanvas
