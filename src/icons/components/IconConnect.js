import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconConnect({ size, ...props }) {
  const sizeValue = iconSize(size)
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
        d="M19.204 10.255a.646.646 0 0 0-.585-.372h-5.887l.645-5.156a.646.646 0 0 0-1.138-.494l-7.354 8.825a.646.646 0 0 0 .496 1.06h5.887l-.645 5.156a.647.647 0 0 0 1.138.494l7.354-8.825a.647.647 0 0 0 .09-.688zm-7.025 6.992l.462-3.695a.646.646 0 0 0-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 0 0 .641.726h5.239l-5.06 6.071z"
      />
    </svg>
  )
}

IconConnect.propTypes = IconPropTypes
export default IconConnect
