import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconRotateRight = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0)">
        <path d="M19.354 5.47a.646.646 0 0 0-.646.646v3.766h-3.766a.646.646 0 0 0 0 1.292h4.412c.357 0 .646-.29.646-.646V6.116a.646.646 0 0 0-.646-.646z" />
        <path d="M19.797 10.057l-3.398-3.2a7.31 7.31 0 0 0-2.711-1.706 7.217 7.217 0 0 0-5.552.295A7.217 7.217 0 0 0 4.419 9.58a7.217 7.217 0 0 0 .295 5.552 7.216 7.216 0 0 0 4.134 3.717 7.27 7.27 0 0 0 2.425.419c1.07 0 2.134-.24 3.127-.714a7.217 7.217 0 0 0 3.717-4.134.646.646 0 0 0-1.218-.43 5.933 5.933 0 0 1-3.056 3.398 5.933 5.933 0 0 1-4.564.243 5.933 5.933 0 0 1-3.4-3.056 5.932 5.932 0 0 1-.242-4.564 5.933 5.933 0 0 1 3.056-3.4 5.933 5.933 0 0 1 4.564-.242 6.009 6.009 0 0 1 2.249 1.423l3.404 3.206a.646.646 0 1 0 .887-.94z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h16v16H0z" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconRotateRight.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconRotateRight
