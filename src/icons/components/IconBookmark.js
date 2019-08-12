import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconBookmark({ size, ...props }) {
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
        d="M16.085 4h-8.17a2.283 2.283 0 0 0-2.28 2.28v13.074a.646.646 0 0 0 1.021.526L12 16.063l5.344 3.817a.646.646 0 0 0 1.022-.526V6.28A2.283 2.283 0 0 0 16.086 4zm.988 14.098l-4.697-3.356a.646.646 0 0 0-.752 0l-4.697 3.356V6.28c0-.544.443-.987.988-.987h8.17c.545 0 .988.443.988.987v11.818z"
      />
    </svg>
  )
}

IconBookmark.propTypes = IconPropTypes
export default IconBookmark
