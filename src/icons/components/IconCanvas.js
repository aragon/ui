import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCanvas({ size, ...props }) {
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
        <path d="M17.005 5H6.995C5.895 5 5 5.895 5 6.995v10.01C5 18.105 5.895 19 6.995 19h10.01c1.1 0 1.995-.895 1.995-1.995V6.995C19 5.895 18.105 5 17.005 5zm.864 12.005a.865.865 0 0 1-.864.864H6.995a.865.865 0 0 1-.864-.864V6.995c0-.476.388-.864.864-.864h10.01c.476 0 .864.388.864.864v10.01z" />
        <path d="M18.434 9.29H5.566a.566.566 0 0 0 0 1.13h12.869a.566.566 0 0 0 0-1.13z" />
        <path d="M9.855 9.29a.566.566 0 0 0-.565.565v8.58a.566.566 0 0 0 1.13 0v-8.58a.566.566 0 0 0-.565-.565z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h14v14H0z" transform="translate(5 5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconCanvas.propTypes = IconPropTypes
export default IconCanvas
