import React from 'react'

function Center({ children, ...props }) {
  return (
    <div
      css={`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: grid;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export { Center }
