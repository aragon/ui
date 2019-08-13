import React from 'react'
import iconSize from '../icon-size'
import IconPropTypes from '../IconPropTypes'

function IconHome({ size, ...props }) {
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
        d="M11.665 4.01h0a.567.567 0 01.67 0l8.533 6.247h0a.568.568 0 01-.671.916h0L12 5.17l-8.197 6.002s0 0 0 0a.565.565 0 01-.793-.123.568.568 0 01.122-.793l.055.074-.055-.074 8.533-6.247z"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
        d="M10.694 19.623a.567.567 0 01-.565.522H5.452a.568.568 0 01-.567-.567v-7.912a.568.568 0 011.135 0v7.344h3.541v-3.964A2.441 2.441 0 0112 12.608a2.441 2.441 0 012.439 2.438v3.964h3.541v-7.344a.568.568 0 011.135 0v7.912a.568.568 0 01-.567.567H13.87a.568.568 0 01-.566-.522m-2.61 0a.439.439 0 00.002-.045v-4.531c0-.719.585-1.304 1.303-1.304.719 0 1.303.585 1.303 1.303v4.532l.002.045m-2.61 0v-.002l-.1-.007.1.01v-.001zm2.61 0v.002l.1-.01-.1.007v.001z"
      />
    </svg>
  )
}

IconHome.propTypes = IconPropTypes
export default IconHome
