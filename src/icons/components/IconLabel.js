import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconLabel = ({ size, ...props }) => {
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
        stroke="currentColor"
        strokeWidth={0.2}
        d="M16.707 16.618h0l3.081-4.203-3.08 4.203zm0 0c-.094.13-.265.261-.462.36m.462-.36l-.462.36m0 0c-.197.1-.406.16-.567.16m.567-.16l-.567.16m0 0H4.446m11.232 0H4.446m0 0a.352.352 0 0 1-.35-.35m.35.35l-.35-.35m0 0V7.215m0 9.571v-9.57m0 0c0-.193.158-.35.35-.35m-.35.35l.35-.35m0 0h11.235m-11.235 0h11.235m0 0c.162 0 .37.06.566.16m-.566-.16l.566.16m0 0c.196.099.368.23.465.36m-.465-.36l.465.36m0 0s0 0 0 0m0 0h0m0 0l3.08 4.2v.001a.726.726 0 0 1 .113.414.72.72 0 0 1-.117.413l-3.076-5.028zm.961-.706h0a2.524 2.524 0 0 0-.887-.723 2.513 2.513 0 0 0-1.105-.288H4.446c-.852 0-1.546.694-1.546 1.546v9.568c0 .852.694 1.546 1.546 1.546h11.235c.362 0 .755-.11 1.108-.288.352-.18.672-.431.884-.724 0 0 0 0 0 0l3.08-4.202h.001c.461-.625.461-1.603 0-2.232l-.08.059.08-.06-3.08-4.202z"
      />
    </svg>
  )
}

IconLabel.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconLabel
