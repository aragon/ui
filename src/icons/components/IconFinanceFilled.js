import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconFinanceFilled({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.083 12.333c-1.386 0-2.5-1.12-2.5-2.5 0-1.386 1.114-2.5 2.5-2.5h1.5c.087 0 .167-.08.167-.166V5.5c0-.927-.747-1.667-1.667-1.667H1.75c-.927 0-1.667.74-1.667 1.667v8.667c0 .92.74 1.666 1.667 1.666h11.333c.92 0 1.667-.746 1.667-1.666V12.5a.17.17 0 00-.167-.167h-1.5z"
      />
      <path
        fill="currentColor"
        d="M15.083 8.333h-2c-.833 0-1.5.667-1.5 1.5 0 .827.667 1.5 1.5 1.5h2a1.02 1.02 0 00.834-1v-1c0-.493-.354-.92-.834-1zM13.208.78a.811.811 0 00-.987-.593h-.02L3.62 2.493a.158.158 0 00-.12.2c.013.067.08.12.153.12l9.84.014c.087 0 .16-.074.167-.167 0-.02-.007-.033-.007-.047L13.208.78z"
      />
    </svg>
  )
}

IconFinanceFilled.propTypes = IconPropTypes
export default IconFinanceFilled