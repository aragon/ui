import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconLeft({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_1:80)">
        <path
          fill="currentColor"
          d="M7 12a1.533 1.533 0 01.52-1.153l7.435-6.54a1.231 1.231 0 011.626 1.848l-6.502 5.72a.167.167 0 000 .25l6.502 5.72a1.233 1.233 0 11-1.626 1.848l-7.432-6.538A1.54 1.54 0 017 12z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1:80">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconLeft.propTypes = IconPropTypes
export default IconLeft
