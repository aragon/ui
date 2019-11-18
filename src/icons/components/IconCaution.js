import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconCaution = ({ size, ...props }) => {
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
        d="M20.807 16.488a.27.27 0 0 0-.006-.01L14.005 5.132l-.002-.004a2.326 2.326 0 0 0-1.446-1.06 2.326 2.326 0 0 0-1.771.272c-.32.195-.593.467-.788.788l-.002.004L3.2 16.478a2.326 2.326 0 0 0-.24 1.787c.162.604.55 1.109 1.09 1.422A2.347 2.347 0 0 0 5.205 20h13.6a2.344 2.344 0 0 0 2.002-3.512zm-2.015 2.039H5.21a.87.87 0 0 1-.741-1.298L11.26 5.891a.871.871 0 0 1 .948-.391.862.862 0 0 1 .535.39l6.791 11.339a.87.87 0 0 1-.74 1.298z"
      />
      <path
        fill="currentColor"
        d="M12 8.898a.737.737 0 0 0-.736.736v3.21a.737.737 0 1 0 1.473 0v-3.21a.737.737 0 0 0-.736-.736zm.521 6.635a.741.741 0 0 0-.52-.216.742.742 0 0 0-.522.216.743.743 0 0 0-.215.52c0 .195.078.384.215.522a.742.742 0 0 0 .521.216.742.742 0 0 0 .521-.216.741.741 0 0 0 .216-.521.742.742 0 0 0-.216-.521z"
      />
    </svg>
  )
}

IconCaution.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconCaution
