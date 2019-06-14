import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconView = ({ size, ...props }) => {
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
        <path d="M20.923 11.675c-.033-.066-.816-1.617-2.282-3.18-.87-.93-1.805-1.672-2.776-2.208-1.24-.684-2.54-1.03-3.865-1.03-1.325 0-2.626.346-3.865 1.03-.971.536-1.905 1.278-2.776 2.207-1.466 1.564-2.25 3.116-2.282 3.18a.727.727 0 0 0 0 .651c.032.066.816 1.617 2.282 3.18.87.93 1.805 1.672 2.776 2.208 1.24.684 2.54 1.03 3.865 1.03 1.325 0 2.625-.346 3.865-1.03.971-.536 1.905-1.278 2.776-2.207 1.466-1.564 2.25-3.116 2.282-3.18a.728.728 0 0 0 0-.651zM12 17.29c-1.964 0-3.833-.926-5.555-2.752A14.138 14.138 0 0 1 4.557 12C5.249 10.802 7.916 6.71 12 6.71c1.964 0 3.833.926 5.554 2.752A14.137 14.137 0 0 1 19.444 12c-.694 1.198-3.36 5.29-7.444 5.29z" />
        <path d="M12 9.017A2.987 2.987 0 0 0 9.017 12 2.987 2.987 0 0 0 12 14.983 2.987 2.987 0 0 0 14.983 12 2.987 2.987 0 0 0 12 9.017zm0 4.512A1.53 1.53 0 0 1 10.471 12c0-.843.686-1.53 1.53-1.53a1.53 1.53 0 0 1 0 3.058z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h18v18H0z" transform="translate(3 3)" />
        </clipPath>
      </defs>
    </svg>
  )
}

IconView.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconView
