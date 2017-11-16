import React from 'react'
import { grid } from '../..'

const LayoutGrid = () => (
  <div
    style={{
      position: 'fixed',
      zIndex: '999',
      left: '0',
      right: '0',
      top: '0',
      bottom: '0',
      width: grid(12) + 'px',
      margin: '0 auto',
      display: 'flex',
    }}
  >
    {[...Array(12)].map((v, i, arr) => (
      <div
        key={i}
        style={{ width: grid(1, i < arr.length - 1 ? 1 : 0) + 'px' }}
      >
        <div
          style={{
            width: grid(1) + 'px',
            height: '100%',
            background: 'rgba(184, 184, 184, 0.5)',
          }}
        />
      </div>
    ))}
  </div>
)

export default LayoutGrid
