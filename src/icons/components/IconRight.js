import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconRight({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_1:91)">
        <path
          fill="currentColor"
          d="M17 12c0 .44-.193.86-.52 1.147l-7.435 6.54H9.04c-.527.434-1.3.367-1.74-.153a1.228 1.228 0 01.107-1.7l6.501-5.72a.176.176 0 00.013-.24l-.02-.02L7.4 6.135a1.227 1.227 0 01-.073-1.74A1.227 1.227 0 019.02 4.28l7.427 6.539c.326.286.52.706.52 1.153L17 12z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1:91">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconRight.propTypes = IconPropTypes
export default IconRight
