import React from 'react'
import { Layout, useLayout } from '@aragon/ui'

function App() {
  const { name, width } = useLayout()
  return (
    <div
      css={`
        width: 100vw;
        height: 100vh;
        background: #789;
      `}
    >
      <Layout>
        <div
          css={`
            height: 100%;
            width: 100%;
            border: 2px solid #FFF;
            color: #fff;
            font-size: 30px;
            padding: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          Layout: {name} ({width}px)
        </div>
      </Layout>
    </div>
  )
}

export default App
