import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconCopy({ size, ...props }) {
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
        stroke="currentColor"
        strokeWidth={0.1}
        opacity="0.3" 
        d="M5.96592 13.2954C4.36842 13.2954 3.06819 11.9952 3.06819 10.3977V3.40906H1.875C0.840683 3.40906 0 4.24974 0 5.28406V14.4886C0 15.5229 0.840683 16.3636 1.875 16.3636H10.3977C11.4321 16.3636 12.2727 15.5229 12.2727 14.4886V13.2954H5.96592Z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.1}
        d="M14.9999 1.875C14.9999 0.839319 14.1606 0 13.1249 0H5.96582C4.93014 0 4.09082 0.839319 4.09082 1.875V10.3977C4.09082 11.4334 4.93014 12.2727 5.96582 12.2727H13.1249C14.1606 12.2727 14.9999 11.4334 14.9999 10.3977V1.875Z"
      />
    </svg>
  )
}

IconCopy.propTypes = IconPropTypes
export default IconCopy
