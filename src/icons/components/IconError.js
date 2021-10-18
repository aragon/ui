import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconError({ size, ...props }) {
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
        d="M10.685 20a.74.74 0 01-.261-.047c-.318-.116-.503-.427-.441-.74l1.163-5.9H8.048a.722.722 0 01-.633-.357.63.63 0 01.046-.69l5.934-7.98a.746.746 0 01.856-.237c.31.118.49.42.434.728L13.743 10h2.876c.26 0 .5.133.626.347a.63.63 0 01-.024.68l-5.934 8.666a.729.729 0 01-.602.307z"
      />
    </svg>
  )
}

IconError.propTypes = IconPropTypes
export default IconError
