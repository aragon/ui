import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconLabel({ size, ...props }) {
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
        fillRule="evenodd"
        d="M20.835 10.825c.487.664.487 1.69 0 2.35l-3.08 4.202a2.6 2.6 0 0 1-.921.754 2.623 2.623 0 0 1-1.153.299H4.446A1.649 1.649 0 0 1 2.8 16.784V7.216c0-.907.739-1.646 1.646-1.646h11.235c.38 0 .787.115 1.15.3.364.184.698.445.923.752l3.08 4.203zm-4.203-3.378l3.078 4.199c.057.08.095.21.095.355a.623.623 0 0 1-.097.355l-3.081 4.202v.001a1.223 1.223 0 0 1-.427.33 1.257 1.257 0 0 1-.522.148H4.446a.252.252 0 0 1-.25-.25v-9.57c0-.137.114-.25.25-.25h11.235c.14 0 .332.053.52.149.189.095.346.218.43.33z"
        clipRule="evenodd"
      />
    </svg>
  )
}

IconLabel.propTypes = IconPropTypes
export default IconLabel
