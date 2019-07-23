import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconChat = ({ size, ...props }) => {
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
        d="M19.999 11.147a7.565 7.565 0 00-2.207-4.939A7.565 7.565 0 0012.817 4h-.426a7.527 7.527 0 00-3.376.804 7.586 7.586 0 00-4.198 6.786 7.534 7.534 0 00.686 3.15l-1.47 4.41a.646.646 0 00.818.817l4.408-1.47c.979.45 2.055.686 3.13.686h.02a7.586 7.586 0 006.786-4.195A7.528 7.528 0 0020 11.59v-.408l-.001-.036zm-1.292.444v.002a6.234 6.234 0 01-.667 2.814 6.265 6.265 0 01-5.633 3.483h-.016a6.23 6.23 0 01-2.796-.666.647.647 0 00-.496-.036l-3.43 1.144L6.811 14.9a.647.647 0 00-.036-.496 6.23 6.23 0 01-.666-2.813 6.262 6.262 0 013.485-5.633 6.231 6.231 0 012.813-.666h.39a6.276 6.276 0 015.91 5.908v.39z"
      />
    </svg>
  )
}

IconChat.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconChat
