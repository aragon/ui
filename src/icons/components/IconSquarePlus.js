import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconSquarePlus({ size, ...props }) {
  const sizeValue = iconSize(size)
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
        d="M17.72 4H6.28A2.283 2.283 0 0 0 4 6.28v11.44A2.283 2.283 0 0 0 6.28 20h11.44A2.283 2.283 0 0 0 20 17.72V6.28A2.283 2.283 0 0 0 17.72 4zm.987 13.72a.99.99 0 0 1-.988.987H6.28a.989.989 0 0 1-.987-.988V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
      />
      <path
        fill="currentColor"
        d="M12 8.085a.646.646 0 0 0-.646.647v6.536a.646.646 0 1 0 1.292 0V8.732A.646.646 0 0 0 12 8.085z"
      />
      <path
        fill="currentColor"
        d="M15.268 11.354H8.732a.646.646 0 1 0 0 1.292h6.536a.646.646 0 1 0 0-1.292z"
      />
    </svg>
  )
}

IconSquarePlus.propTypes = IconPropTypes
export default IconSquarePlus
