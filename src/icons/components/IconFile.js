import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconFile({ size, ...props }) {
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
        d="M18.34 9.337l-5.148-5.148A.646.646 0 0 0 12.735 4H7.588A2.12 2.12 0 0 0 5.47 6.117v11.766A2.12 2.12 0 0 0 7.588 20h8.824a2.12 2.12 0 0 0 2.117-2.117v-8.09a.646.646 0 0 0-.19-.456zm-1.103 8.546c0 .454-.37.824-.825.824H7.588a.825.825 0 0 1-.825-.824V6.117c0-.455.37-.824.825-.824h4.88l4.768 4.769v7.82z"
      />
      <path
        fill="currentColor"
        d="M17.883 9.148h-4.501V4.646a.646.646 0 0 0-1.293 0v5.148c0 .357.29.646.646.646h5.148a.646.646 0 1 0 0-1.292z"
      />
    </svg>
  )
}

IconFile.propTypes = IconPropTypes
export default IconFile
