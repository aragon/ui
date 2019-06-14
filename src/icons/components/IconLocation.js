import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconLocation = ({ size, ...props }) => {
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
        d="M16.711 5.952A6.62 6.62 0 0 0 12 4a6.62 6.62 0 0 0-4.711 1.952 6.62 6.62 0 0 0-1.952 4.711c0 1.177.343 2.402 1.019 3.642.526.963 1.255 1.94 2.166 2.903a20.25 20.25 0 0 0 3.12 2.683.645.645 0 0 0 .716 0 20.261 20.261 0 0 0 3.12-2.683c.911-.963 1.64-1.94 2.166-2.903.676-1.24 1.019-2.465 1.019-3.642a6.62 6.62 0 0 0-1.952-4.711zM12 18.559c-1.255-.93-5.37-4.255-5.37-7.896A5.376 5.376 0 0 1 12 5.293a5.376 5.376 0 0 1 5.37 5.37c0 3.642-4.115 6.967-5.37 7.896z"
      />
      <path
        fill="currentColor"
        d="M12 8.011a2.655 2.655 0 0 0-2.652 2.652A2.655 2.655 0 0 0 12 13.315a2.655 2.655 0 0 0 2.652-2.652A2.655 2.655 0 0 0 12 8.01zm0 4.011a1.36 1.36 0 0 1 0-2.718c.75 0 1.36.61 1.36 1.359 0 .75-.61 1.36-1.36 1.36z"
      />
    </svg>
  )
}

IconLocation.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconLocation
