import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconZoomIn({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path d="M15.73 6.84A6.244 6.244 0 0 0 11.284 5a6.244 6.244 0 0 0-4.444 1.84A6.244 6.244 0 0 0 5 11.286c0 1.679.654 3.257 1.84 4.444a6.244 6.244 0 0 0 4.445 1.841 6.244 6.244 0 0 0 4.444-1.84 6.244 6.244 0 0 0 1.841-4.445 6.244 6.244 0 0 0-1.84-4.444zm-4.445 9.6a5.16 5.16 0 0 1-5.154-5.155 5.16 5.16 0 0 1 5.154-5.154 5.16 5.16 0 0 1 5.154 5.154 5.16 5.16 0 0 1-5.154 5.154z" />
        <path d="M18.834 18.035l-3.11-3.11a.566.566 0 0 0-.8.8l3.11 3.11a.564.564 0 0 0 .8 0 .566.566 0 0 0 0-.8zM11.285 8.575a.566.566 0 0 0-.565.565v4.29a.566.566 0 0 0 1.13 0V9.14a.566.566 0 0 0-.565-.565z" />
        <path d="M13.43 10.72H9.14a.566.566 0 0 0 0 1.13h4.29a.565.565 0 1 0 0-1.13z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h14v14H0z" transform="translate(5 5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconZoomIn.propTypes = IconPropTypes
export default IconZoomIn
