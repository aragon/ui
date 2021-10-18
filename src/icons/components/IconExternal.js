import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconExternal({ size, ...props }) {
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
        d="M19.197 11.2a.8.8 0 00-.8.8v6.4H5.6V5.601h6.399a.8.8 0 000-1.6h-7.2a.8.8 0 00-.799.8v14.4a.8.8 0 00.8.799h14.397a.8.8 0 00.8-.8V12a.8.8 0 00-.8-.8z"
      />
      <path
        fill="currentColor"
        d="M19.502 4.065c-.266-.11-.111-.041-4.304-.064a.8.8 0 100 1.6h2.068l-5.832 5.833a.8.8 0 101.13 1.132l5.833-5.833v2.068a.8.8 0 001.6 0c-.02-4.214.049-4.04-.061-4.304a.8.8 0 00-.434-.432z"
      />
    </svg>
  )
}

IconExternal.propTypes = IconPropTypes
export default IconExternal
