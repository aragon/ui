import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconPrint({ size, ...props }) {
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
        d="M16.412 4H7.588a.646.646 0 0 0-.646.646v5.148a.646.646 0 0 0 1.292 0V5.293h7.532v4.5a.646.646 0 1 0 1.293 0V4.647A.646.646 0 0 0 16.412 4z"
      />
      <path
        fill="currentColor"
        d="M17.883 9.148H6.117A2.12 2.12 0 0 0 4 11.265v3.676a2.12 2.12 0 0 0 2.117 2.117h1.47a.646.646 0 1 0 0-1.292h-1.47a.825.825 0 0 1-.824-.825v-3.676c0-.455.37-.825.824-.825h11.766c.454 0 .824.37.824.825v3.676c0 .455-.37.825-.824.825h-1.47a.646.646 0 1 0 0 1.292h1.47A2.12 2.12 0 0 0 20 14.941v-3.676a2.12 2.12 0 0 0-2.117-2.117z"
      />
      <path
        fill="currentColor"
        d="M16.412 12.824H7.588a.646.646 0 0 0-.646.647v5.883c0 .357.289.646.646.646h8.824c.357 0 .647-.29.647-.646V13.47a.646.646 0 0 0-.647-.647zm-.646 5.883H8.234v-4.59h7.532v4.59z"
      />
    </svg>
  )
}

IconPrint.propTypes = IconPropTypes
export default IconPrint
