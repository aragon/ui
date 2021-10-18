import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconFinance({ size, ...props }) {
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
        d="M17.083 16.333c-1.386 0-2.5-1.12-2.5-2.5 0-1.386 1.114-2.5 2.5-2.5h1.5c.087 0 .167-.08.167-.166V9.5c0-.927-.747-1.667-1.667-1.667H5.75c-.927 0-1.667.74-1.667 1.667v8.667c0 .92.74 1.666 1.667 1.666h11.333c.92 0 1.667-.746 1.667-1.666V16.5a.17.17 0 00-.167-.167h-1.5z"
      />
      <path
        fill="currentColor"
        d="M19.083 12.333h-2c-.833 0-1.5.667-1.5 1.5 0 .827.667 1.5 1.5 1.5h2c.48-.086.834-.513.834-1v-1c0-.493-.354-.92-.834-1zM17.208 4.78a.811.811 0 00-.987-.593h-.02L7.62 6.493a.158.158 0 00-.12.2c.013.067.08.12.153.12l9.84.014c.087 0 .16-.074.167-.167 0-.02-.007-.033-.007-.047l-.445-1.833z"
      />
    </svg>
  )
}

IconFinance.propTypes = IconPropTypes
export default IconFinance
