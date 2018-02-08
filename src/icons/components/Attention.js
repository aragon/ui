import React from "react"

const Attention = props => (
  <svg width={14} height={14} viewBox="0 0 14 14" {...props}>
    <g fill="none" fillRule="evenodd">
      <rect fill="#DAEAEF" width={14} height={14} rx={7} />
      <path
        d="M6.155 8.547h1.298V3.3H6.155v5.247zM6.045 11h1.529V9.537H6.045V11z"
        fill="#6D777B"
        opacity={0.7}
      />
    </g>
  </svg>
)

export default Attention
