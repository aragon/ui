import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconSquarePlus = ({ size, ...props }) => {
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
        d="M17.72 4H6.28A2.283 2.283 0 004 6.28v11.44A2.283 2.283 0 006.28 20h11.44A2.283 2.283 0 0020 17.72V6.28A2.283 2.283 0 0017.72 4zm.987 13.72a.99.99 0 01-.988.987H6.28a.989.989 0 01-.987-.988V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
      />
      <path
        fill="currentColor"
        d="M12 8.085a.646.646 0 00-.646.647v6.536a.646.646 0 101.292 0V8.732A.646.646 0 0012 8.085z"
      />
      <path
        fill="currentColor"
        d="M15.268 11.354H8.732a.646.646 0 100 1.292h6.536a.646.646 0 100-1.292z"
      />
    </svg>
  )
}

IconSquarePlus.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconSquarePlus
