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
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.378 15.683l-.65-.376a.376.376 0 01-.146-.497 6.262 6.262 0 00-.169-5.935 6.263 6.263 0 00-5.057-3.115.376.376 0 01-.357-.375v-.751c0-.216.181-.386.397-.375a7.766 7.766 0 016.316 3.865 7.766 7.766 0 01.188 7.4.376.376 0 01-.522.157v.002z"
      />
    </svg>
  )
}

IconSpinner.propTypes = IconPropTypes
export default IconSpinner
