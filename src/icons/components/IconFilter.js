import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconFilter({ size, ...props }) {
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
        d="M19.94 5.36a.648.648 0 0 0-.586-.36H4.646c-.251 0-.48.14-.586.36-.106.22-.07.48.093.665l5.73 6.529v4.406a.62.62 0 0 0 .357.557l2.942 1.417a.667.667 0 0 0 .629-.027.618.618 0 0 0 .306-.53v-5.823l5.73-6.53a.605.605 0 0 0 .093-.663zm-6.963 6.564a.61.61 0 0 0-.153.402v5.044l-1.648-.795v-4.249a.61.61 0 0 0-.153-.402L6.039 6.246h11.922l-4.984 5.678z"
      />
    </svg>
  )
}

IconFilter.propTypes = IconPropTypes
export default IconFilter
