import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconDashedSquare({ size, ...props }) {
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
        d="M8.732 4H6.28A2.283 2.283 0 004 6.28v2.452a.646.646 0 001.293 0V6.28c0-.544.443-.987.987-.987h2.452a.646.646 0 000-1.293zm8.988 0h-2.452a.646.646 0 000 1.293h2.452a.99.99 0 01.988.987v2.452a.646.646 0 101.292 0V6.28A2.283 2.283 0 0017.72 4zm1.634 10.622a.646.646 0 00-.646.646v2.451a.989.989 0 01-.988.988h-2.452a.646.646 0 100 1.293h2.452A2.283 2.283 0 0020 17.72v-2.452a.646.646 0 00-.646-.646zM8.732 18.707H6.28a.989.989 0 01-.987-.988v-2.45a.646.646 0 10-1.293 0v2.45A2.283 2.283 0 006.28 20h2.452a.646.646 0 100-1.292z"
      />
    </svg>
  )
}

IconDashedSquare.propTypes = IconPropTypes
export default IconDashedSquare
