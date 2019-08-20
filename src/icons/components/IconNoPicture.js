import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconNoPicture({ size, ...props }) {
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
        d="M19.81 18.897L5.105 4.189a.646.646 0 1 0-.914.914l14.707 14.708a.644.644 0 0 0 .914 0 .646.646 0 0 0 0-.914z"
      />
      <path
        fill="currentColor"
        d="M18.017 17.37H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.381.31-.69.69-.69H7.99a.646.646 0 0 0 0-1.293H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034a.646.646 0 1 0 0-1.293zm0-10.027h-2.329l-1.145-1.718a.646.646 0 0 0-.537-.288H9.994a.646.646 0 0 0 0 1.293h3.666l1.145 1.717c.12.18.321.288.537.288h2.675c.38 0 .69.31.69.69v6.245a.646.646 0 1 0 1.293 0V9.326c0-1.094-.89-1.983-1.983-1.983z"
      />
      <path
        fill="currentColor"
        d="M14.558 13.66a.646.646 0 0 0-.899.168 2.03 2.03 0 0 1-2.818.528 2.03 2.03 0 0 1 0-3.347.646.646 0 0 0-.73-1.067 3.324 3.324 0 0 0 0 5.48 3.32 3.32 0 0 0 4.615-.865.646.646 0 0 0-.168-.898z"
      />
    </svg>
  )
}

IconNoPicture.propTypes = IconPropTypes
export default IconNoPicture
