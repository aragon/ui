import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconMove({ size, ...props }) {
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
        d="M7.31 13.75L5.56 12l1.75-1.75a.646.646 0 1 0-.914-.913l-2.207 2.206a.646.646 0 0 0 0 .914l2.207 2.206a.644.644 0 0 0 .914 0 .646.646 0 0 0 0-.914zm7.353-7.355L12.457 4.19a.646.646 0 0 0-.914 0L9.337 6.395a.646.646 0 1 0 .914.914l1.75-1.749 1.748 1.75a.644.644 0 0 0 .914 0 .646.646 0 0 0 0-.915zm0 10.295a.646.646 0 0 0-.914 0L12 18.44l-1.749-1.75a.646.646 0 1 0-.914.915l2.206 2.206a.645.645 0 0 0 .914 0l2.206-2.206a.646.646 0 0 0 0-.914zm5.147-5.147l-2.205-2.206a.646.646 0 1 0-.914.914L18.44 12l-1.75 1.75a.646.646 0 0 0 .915.913l2.206-2.206a.646.646 0 0 0 0-.914z"
      />
      <path
        fill="currentColor"
        d="M19.354 11.354H4.646a.646.646 0 0 0 0 1.292h14.708a.646.646 0 1 0 0-1.292z"
      />
      <path
        fill="currentColor"
        d="M12 4a.646.646 0 0 0-.646.646v14.708a.646.646 0 1 0 1.292 0V4.646A.646.646 0 0 0 12 4z"
      />
    </svg>
  )
}

IconMove.propTypes = IconPropTypes
export default IconMove
