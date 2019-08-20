import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconAddUser({ size, ...props }) {
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
        d="M15.644 14.614c-1.382-.77-3.21-1.194-5.148-1.194-1.938 0-3.766.424-5.148 1.194C3.834 15.457 3 16.627 3 17.908v.752a.727.727 0 1 0 1.454 0v-.752c0-.72.584-1.457 1.601-2.023 1.17-.652 2.747-1.01 4.44-1.01 1.695 0 3.272.358 4.442 1.01 1.017.566 1.6 1.304 1.6 2.023v.752a.727.727 0 1 0 1.455 0v-.752c0-1.281-.834-2.45-2.348-3.294zM14.223 7.55a3.71 3.71 0 0 0-1.054-2.093 3.733 3.733 0 0 0-3.19-1.054 3.74 3.74 0 0 0-3.146 4.243 3.711 3.711 0 0 0 1.47 2.453 3.707 3.707 0 0 0 2.773.694 3.74 3.74 0 0 0 3.147-4.243zm-3.36 2.805a2.266 2.266 0 0 1-1.694-.424 2.266 2.266 0 0 1-.897-1.498 2.284 2.284 0 0 1 2.59-2.591 2.268 2.268 0 0 1 1.923 1.922 2.284 2.284 0 0 1-1.922 2.59zm7.154-2.199a.727.727 0 0 0-.727.727v4.512a.727.727 0 1 0 1.454 0V8.883a.727.727 0 0 0-.727-.727z"
      />
      <path
        fill="currentColor"
        d="M20.273 10.412H15.76a.727.727 0 1 0 0 1.454h4.513a.727.727 0 0 0 0-1.454z"
      />
    </svg>
  )
}

IconAddUser.propTypes = IconPropTypes
export default IconAddUser
