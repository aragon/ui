import React from 'react'
import { Layout, useLayout } from '@tecommons/ui'

function App() {
  const { layoutName, layoutWidth } = useLayout()
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-size: 20px;
        border: 2px solid #000;
        border-top: 0;
        border-bottom: 0;
      `}
    >
      Layout: {layoutName} ({layoutWidth}px)
    </div>
  )
}

export default App
