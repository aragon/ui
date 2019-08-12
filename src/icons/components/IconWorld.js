import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconWorld({ size, ...props }) {
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
        d="M17.657 6.343A7.947 7.947 0 0 0 12 4a7.948 7.948 0 0 0-5.657 2.343A7.948 7.948 0 0 0 4 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0 0 12 20a7.948 7.948 0 0 0 5.657-2.343A7.948 7.948 0 0 0 20 12a7.948 7.948 0 0 0-2.343-5.657zM12 18.707A6.715 6.715 0 0 1 5.293 12 6.715 6.715 0 0 1 12 5.293 6.715 6.715 0 0 1 18.707 12 6.715 6.715 0 0 1 12 18.707z"
      />
      <path
        fill="currentColor"
        d="M19.354 11.354H4.646a.646.646 0 1 0 0 1.292h14.708a.646.646 0 1 0 0-1.292z"
      />
      <path
        fill="currentColor"
        d="M12.477 4.21a.646.646 0 0 0-.954 0 11.893 11.893 0 0 0-3.11 7.804 11.893 11.893 0 0 0 3.11 7.776.646.646 0 0 0 .954 0 11.893 11.893 0 0 0 3.11-7.803 11.894 11.894 0 0 0-3.11-7.777zM12 18.358A10.6 10.6 0 0 1 9.705 12c.051-2.32.86-4.55 2.295-6.358A10.601 10.601 0 0 1 14.295 12 10.6 10.6 0 0 1 12 18.358z"
      />
    </svg>
  )
}

IconWorld.propTypes = IconPropTypes
export default IconWorld
