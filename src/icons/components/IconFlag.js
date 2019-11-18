import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconFlag = ({ size, ...props }) => {
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
        d="M18.572 4.88a.67.67 0 0 0-.755.157c-.006.006-.707.613-2.663.613-1.05 0-1.947-.376-2.897-.773C11.227 4.446 10.162 4 8.847 4c-2.578 0-3.543.931-3.644 1.037A.743.743 0 0 0 5 5.55v9.9c0 .301.164.588.433.694a.645.645 0 0 0 .743-.173c.082-.068.808-.621 2.67-.621 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 2.578 0 3.543-.931 3.644-1.037A.742.742 0 0 0 19 15.45v-9.9a.726.726 0 0 0-.428-.67zm-.958 10.186c-.337.185-1.091.484-2.46.484-1.05 0-1.947-.376-2.897-.773-1.03-.431-2.095-.877-3.41-.877-1.09 0-1.891.166-2.461.366V5.934c.337-.185 1.091-.484 2.46-.484 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 1.09 0 1.891-.166 2.461-.366v8.332z"
      />
      <path
        fill="currentColor"
        d="M5.693 14.095a.693.693 0 0 0-.693.693v5.519a.693.693 0 1 0 1.386 0v-5.519a.693.693 0 0 0-.693-.693z"
      />
    </svg>
  )
}

IconFlag.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconFlag
