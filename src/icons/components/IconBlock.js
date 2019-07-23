import React from 'react'
import PropTypes from 'prop-types'
import iconSize from '../icon-size'

const IconBlock = ({ size, ...props }) => {
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
        d="M18.807 6.589L12.96 3.666l-.002-.001a2.165 2.165 0 00-1.918 0L5.195 6.589A2.141 2.141 0 004 8.516v6.955a2.141 2.141 0 001.186 1.936l5.847 2.924a2.154 2.154 0 001.927 0l5.845-2.923A2.141 2.141 0 0020 15.481V8.515a2.14 2.14 0 00-1.193-1.926zm-.19 8.892a.767.767 0 01-.429.69l-5.847 2.923a.774.774 0 01-.69 0l-5.845-2.922a.766.766 0 01-.423-.694V8.516c0-.294.164-.558.429-.69l5.845-2.923a.771.771 0 01.685 0l5.847 2.924c.264.13.428.395.428.689v6.964z"
      />
      <path
        fill="currentColor"
        d="M19.693 7.418a.692.692 0 00-.928-.31L12 10.492 5.235 7.108a.692.692 0 00-.619 1.237l7.075 3.538a.692.692 0 00.618 0l7.075-3.538a.691.691 0 00.31-.927z"
      />
      <path
        fill="currentColor"
        d="M12 10.573a.691.691 0 00-.691.691v8.595a.691.691 0 101.383 0v-8.595a.692.692 0 00-.692-.691z"
      />
    </svg>
  )
}

IconBlock.propTypes = {
  size: PropTypes.oneOf(['medium', 'small', 'tiny']),
}
export default IconBlock
