import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconSettingsFilled({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#clip0)">
        <path
          fill="currentColor"
          d="M15 6.333h-1.247a6.2 6.2 0 00-.513-1.226l.873-.88V4.22a1.014 1.014 0 000-1.42l-.006-.007-.947-.946v-.001a1.002 1.002 0 00-1.42 0l-.88.873c-.393-.22-.8-.386-1.227-.513V.959c0-.553-.453-1-1-1H7.3a1 1 0 00-1 1V2.2a5.82 5.82 0 00-1.227.506l-.88-.88a1.002 1.002 0 00-1.42 0l-.946.94A1 1 0 001.82 4.18l.873.873a5.77 5.77 0 00-.513 1.22H.933c-.553 0-1 .446-1 1v1.333c0 .546.447 1 1 1h1.24v-.001c.12.42.294.833.507 1.22l-.88.873a.994.994 0 000 1.414l.94.94a1.032 1.032 0 001.413 0l.874-.88c.386.213.8.38 1.226.506v1.24c0 .547.447 1 1 1h1.334c.546 0 1-.453 1-1v-1.24c.42-.127.833-.3 1.22-.513l.873.873c.387.387 1.02.387 1.413 0l.94-.947a1.014 1.014 0 000-1.42l-.88-.88c.213-.394.38-.807.507-1.227h1.24v-.001c.546 0 1-.453 1-1 0-.007-.007-.007-.007-.007V7.222c0-.553-.453-1-1-1l.107.111zm-7 5A3.33 3.33 0 014.667 8 3.326 3.326 0 018 4.667 3.33 3.33 0 0111.333 8 3.343 3.343 0 018 11.333z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="currentColor" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconSettingsFilled.propTypes = IconPropTypes
export default IconSettingsFilled