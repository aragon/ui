import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconImage({ size, ...props }) {
  const sizeValue = useIconSize(size)
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
        <path d="M9.14 7.268c-1.032 0-1.872.84-1.872 1.872s.84 1.872 1.872 1.872 1.872-.84 1.872-1.872-.84-1.872-1.872-1.872zm0 2.452a.58.58 0 1 1 .002-1.16.58.58 0 0 1-.002 1.16zm10.67 4.274L15.726 9.91a.646.646 0 0 0-.914 0l-8.988 8.988a.646.646 0 0 0 .915.914l8.53-8.531 3.629 3.628a.646.646 0 1 0 .914-.914z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconImage.propTypes = IconPropTypes
export default IconImage
