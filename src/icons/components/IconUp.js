import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconUp({ size, ...props }) {
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
        d="M5.215 15.219a.725.725 0 001.039 0L12 9.367l5.747 5.851a.725.725 0 001.038 0 .757.757 0 000-1.057l-6.266-6.38a.725.725 0 00-1.038 0l-6.266 6.38a.757.757 0 000 1.058z"
      />
    </svg>
  )
}

IconUp.propTypes = IconPropTypes
export default IconUp
