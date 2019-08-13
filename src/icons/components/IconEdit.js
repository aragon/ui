import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconEdit({ size, ...props }) {
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
        d="M17.883 13.31a.646.646 0 0 0-.646.646v3.927c0 .455-.37.825-.825.825H6.117a.825.825 0 0 1-.824-.825V7.588c0-.455.37-.825.824-.825h3.927a.646.646 0 1 0 0-1.292H6.117A2.12 2.12 0 0 0 4 7.588v10.295A2.12 2.12 0 0 0 6.117 20h10.295a2.12 2.12 0 0 0 2.117-2.117v-3.927a.646.646 0 0 0-.646-.646z"
      />
      <path
        fill="currentColor"
        d="M19.81 7.13l-2.94-2.94a.646.646 0 0 0-.915 0l-7.354 7.353a.646.646 0 0 0-.189.457v2.942c0 .357.29.646.646.646H12a.646.646 0 0 0 .457-.19l7.354-7.353a.646.646 0 0 0 0-.914zm-8.078 7.165H9.705v-2.027l6.707-6.708 2.028 2.028-6.708 6.707z"
      />
    </svg>
  )
}

IconEdit.propTypes = IconPropTypes
export default IconEdit
