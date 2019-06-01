import React from 'react'

const IconAttention = ({ bg, color, ...props }) => (
  <svg width={22} height={22} fill="none" viewBox="0 0 22 22" {...props}>
    <path fill={bg || '#DAEAEF'} d="M18 11a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" />
    <path
      fill={color || '#6D777B'}
      fillRule="evenodd"
      d="M10.155 12.547h1.298V7.3h-1.298v5.247zM10.045 15h1.529v-1.463h-1.529V15z"
      clipRule="evenodd"
    />
  </svg>
)

export default IconAttention
