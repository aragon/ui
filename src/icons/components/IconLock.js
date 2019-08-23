import React from 'react'
import useIconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconLock({ size, ...props }) {
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
        d="M17.669 10.48H6.332A2.334 2.334 0 004 12.812v5.668a2.334 2.334 0 002.332 2.332h11.337A2.334 2.334 0 0020 18.48v-5.668a2.334 2.334 0 00-2.331-2.332zm.907 8c0 .5-.407.908-.907.908H6.332a.909.909 0 01-.908-.908v-5.668c0-.5.407-.908.908-.908h11.337c.5 0 .907.407.907.908v5.668z"
      />
      <path
        fill="currentColor"
        d="M12 3a4.328 4.328 0 00-4.323 4.323v2.942a.646.646 0 001.293 0V7.323c0-1.67 1.359-3.03 3.03-3.03 1.671 0 3.03 1.36 3.03 3.03v2.942a.646.646 0 101.293 0V7.323A4.328 4.328 0 0012 3z"
      />
    </svg>
  )
}

IconLock.propTypes = IconPropTypes
export default IconLock
