import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCopyFilled({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_2:132)">
        <path
          d="M10.5 17a2.837 2.837 0 01-2.833-2.833V7.333H6.5a1.835 1.835 0 00-1.833 1.834v9c0 1.01.822 1.833 1.833 1.833h8.333a1.835 1.835 0 001.834-1.833V17H10.5z"
          opacity={0.3}
        />
        <path d="M19.333 5.833C19.333 4.821 18.513 4 17.5 4h-7c-1.013 0-1.833.82-1.833 1.833v8.334c0 1.012.82 1.833 1.833 1.833h7c1.013 0 1.833-.82 1.833-1.833V5.833z" />
      </g>
      <defs>
        <clipPath id="clip0_2:132">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconCopyFilled.propTypes = IconPropTypes
export default IconCopyFilled
