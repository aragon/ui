import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconCopy = ({ size, ...props }) => {
  const sizeValue = iconSize(size)
  return (
    <svg
      width={sizeValue}
      height={sizeValue}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="#fff" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.1}
        d="M6.063 21.05h9.375a2.114 2.114 0 0 0 2.112-2.113v-.375a.613.613 0 0 0-1.225 0v.375c0 .49-.398.888-.887.888H6.063a.889.889 0 0 1-.888-.888V8.812c0-.489.398-.887.888-.887h.374a.613.613 0 0 0 0-1.225h-.374A2.114 2.114 0 0 0 3.95 8.812v10.125c0 1.166.947 2.113 2.113 2.113z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.1}
        d="M10.563 16.55h7.874a2.114 2.114 0 0 0 2.113-2.113V5.063a2.114 2.114 0 0 0-2.113-2.113h-7.875A2.114 2.114 0 0 0 8.45 5.063v9.375c0 1.165.947 2.112 2.113 2.112zM9.675 5.063c0-.49.398-.888.887-.888h7.876c.489 0 .887.398.887.888v9.375a.888.888 0 0 1-.887.887h-7.875a.889.889 0 0 1-.888-.887V5.063z"
      />
    </svg>
  )
}

IconCopy.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconCopy
