import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconMaximize({ size, ...props }) {
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
        stroke="currentColor"
        strokeWidth={0.2}
        d="M18.434 5h-4.29a.566.566 0 000 1.131h3.725v3.724a.566.566 0 001.13 0v-4.29A.566.566 0 0018.435 5zM9.855 17.869H6.131v-3.724a.566.566 0 00-1.131 0v4.29c0 .312.253.565.565.565h4.29a.565.565 0 100-1.131z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M18.834 5.166a.566.566 0 00-.8 0L13.03 10.17a.566.566 0 00.8.8l5.004-5.004a.566.566 0 000-.8zM10.97 13.03a.565.565 0 00-.8 0l-5.004 5.005a.566.566 0 00.8.8l5.004-5.005a.565.565 0 000-.8z"
      />
    </svg>
  )
}

IconMaximize.propTypes = IconPropTypes
export default IconMaximize
