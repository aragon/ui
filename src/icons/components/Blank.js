import React from "react"

const Blank = props => (
  <svg width={22} height={22} viewBox="0 0 22 22" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h22v22H0z" />
      <path
        d="M17.655 2H5.345A.357.357 0 0 0 5 2.345v16.559c0 .181.163.345.345.345h9.768c.09 0 .2-.037.254-.11l2.542-2.85a.345.345 0 0 0 .091-.236V2.345A.357.357 0 0 0 17.655 2zM5.69 2.69h11.62v12.637h-2.25a.69.69 0 0 0-.69.69v2.542H5.69V2.689zm9.369 15.742v-2.433h2.16l-2.16 2.433z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default Blank
