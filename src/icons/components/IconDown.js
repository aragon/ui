import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconDown({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_1:77)">
        <path
          fill="currentColor"
          d="M12 17c-.44 0-.86-.193-1.147-.52l-6.54-7.435V9.04a1.242 1.242 0 01.153-1.74 1.228 1.228 0 011.7.107l5.72 6.501a.176.176 0 00.24.013l.02-.02 5.72-6.501a1.227 1.227 0 011.74-.073c.487.44.534 1.186.114 1.693l-6.539 7.427c-.286.326-.706.52-1.153.52L12 17z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1:77">
          <path fill="#fff" d="M0 0h16v16H0z" transform="rotate(90 8 12)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconDown.propTypes = IconPropTypes
export default IconDown
