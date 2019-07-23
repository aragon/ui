import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconWrite = ({ size, ...props }) => {
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
        d="M18.518 5.479a5.029 5.029 0 00-3.58-1.483A5.029 5.029 0 0011.36 5.48l-4.964 4.964a.647.647 0 00-.189.457v6.25c0 .358.29.648.647.648h6.25a.647.647 0 00.459-.19l4.955-4.971A5.028 5.028 0 0020 9.057a5.028 5.028 0 00-1.482-3.578zm-.915 6.243v.001l-4.768 4.781H7.5v-5.336l4.775-4.775A3.743 3.743 0 0114.94 5.29c1.006 0 1.952.391 2.664 1.103a3.744 3.744 0 011.104 2.665 3.744 3.744 0 01-1.104 2.664z"
      />
      <path
        fill="currentColor"
        d="M15.4 8.604a.647.647 0 00-.915 0L4.189 18.9a.647.647 0 00.915.914L15.399 9.52a.647.647 0 000-.915z"
      />
      <path
        fill="currentColor"
        d="M15.678 13.563H9.794a.647.647 0 000 1.293h5.884a.647.647 0 100-1.293z"
      />
    </svg>
  )
}

IconWrite.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconWrite
