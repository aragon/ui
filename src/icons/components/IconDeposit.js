import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconDeposit({ size, ...props }) {
  const sizeValue = useIconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_1:68)">
        <path d="M19.111 15.292a.808.808 0 00-.808.808v1.237a1.047 1.047 0 01-1.047 1.047H6.744a1.048 1.048 0 01-1.047-1.047V16.1a.808.808 0 10-1.616 0v1.237a2.667 2.667 0 002.663 2.666h10.512a2.667 2.667 0 002.667-2.666V16.1a.809.809 0 00-.812-.808z" />
        <path d="M12 4a1.293 1.293 0 00-1.293 1.293v6.044a.166.166 0 01-.166.166H8.768a.647.647 0 00-.488 1.071l3.232 3.717a.645.645 0 00.976 0l3.232-3.717a.646.646 0 00-.488-1.07h-1.773a.166.166 0 01-.166-.167V5.293A1.292 1.292 0 0012 4z" />
      </g>
      <defs>
        <clipPath id="clip0_1:68">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconDeposit.propTypes = IconPropTypes
export default IconDeposit
