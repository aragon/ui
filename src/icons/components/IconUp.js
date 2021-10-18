import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconUp({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_1:88)">
        <path
          fill="currentColor"
          d="M12 7c.44 0 .86.193 1.147.52l6.54 7.435v.005c.434.527.367 1.3-.153 1.74a1.228 1.228 0 01-1.7-.107l-5.72-6.501a.176.176 0 00-.24-.013l-.02.02-5.72 6.501a1.227 1.227 0 01-1.74.073 1.227 1.227 0 01-.114-1.693l6.539-7.427c.286-.326.706-.52 1.153-.52L12 7z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1:88">
          <path fill="#fff" d="M0 0h16v16H0z" transform="rotate(-90 12 8)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconUp.propTypes = IconPropTypes
export default IconUp
