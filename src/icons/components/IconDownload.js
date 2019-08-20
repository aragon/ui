import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconDownload({ size, ...props }) {
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
        d="M18.618 15.03a.646.646 0 0 0-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 0 1-.824-.824v-2.206a.646.646 0 0 0-1.293 0v2.206A2.12 2.12 0 0 0 6.853 20h10.295a2.12 2.12 0 0 0 2.117-2.117v-2.206a.646.646 0 0 0-.647-.646z"
      />
      <path
        fill="currentColor"
        d="M15.399 11.543a.646.646 0 0 0-.914 0L12 14.027l-2.484-2.484a.646.646 0 0 0-.914.914l2.941 2.941a.646.646 0 0 0 .914 0l2.941-2.941a.646.646 0 0 0 0-.914z"
      />
      <path
        fill="currentColor"
        d="M12 4a.646.646 0 0 0-.646.646v10.296a.646.646 0 0 0 1.292 0V4.646A.646.646 0 0 0 12 4z"
      />
    </svg>
  )
}

IconDownload.propTypes = IconPropTypes
export default IconDownload
