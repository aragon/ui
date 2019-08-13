import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconMail({ size, ...props }) {
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
        d="M17.406 6H6.594a1.948 1.948 0 0 0-1.945 1.945v8.11c0 1.072.872 1.945 1.945 1.945h10.812a1.948 1.948 0 0 0 1.946-1.945v-8.11A1.948 1.948 0 0 0 17.406 6zm.758 10.055c0 .417-.34.757-.758.757H6.594a.758.758 0 0 1-.758-.757v-8.11c0-.417.34-.757.758-.757h10.812c.418 0 .758.34.758.757v8.11z"
      />
      <path
        fill="currentColor"
        d="M19.245 7.605a.594.594 0 0 0-.827-.146L12 11.95 5.584 7.459a.594.594 0 1 0-.681.973l6.757 4.73a.593.593 0 0 0 .681 0l6.758-4.73a.594.594 0 0 0 .146-.827z"
      />
    </svg>
  )
}

IconMail.propTypes = IconPropTypes
export default IconMail
