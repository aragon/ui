import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconSquare = ({ size, ...props }) => {
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
        d="M17.72 4H6.28A2.283 2.283 0 0 0 4 6.28v11.44A2.283 2.283 0 0 0 6.28 20h11.44A2.283 2.283 0 0 0 20 17.72V6.28A2.283 2.283 0 0 0 17.72 4zm.987 13.72a.989.989 0 0 1-.987.987H6.28a.989.989 0 0 1-.987-.987V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
      />
    </svg>
  )
}

IconSquare.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconSquare
