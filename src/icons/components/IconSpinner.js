import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconSpinner({ size, ...props }) {
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
        d="M14.379 11.683l-.651-.376a.376.376 0 01-.146-.497 6.262 6.262 0 00-.169-5.935A6.263 6.263 0 008.356 1.76a.376.376 0 01-.357-.375V.634c0-.216.181-.386.397-.375a7.766 7.766 0 016.316 3.865 7.767 7.767 0 01.188 7.4.376.376 0 01-.522.157v.002z"
      />
    </svg>
  )
}

IconSpinner.propTypes = IconPropTypes
export default IconSpinner
