import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { EthIdenticon, IconBlank, SearchCopy, TextCopy } from '@aragon/ui'

const ADDRESS = '0x2c9341a52cfa3f2c2554ca1803134137b9366b3c'

const GU = 8
const HEIGHT = 5 * GU

function App() {
  return (
    <div
      css={`
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100vh;
        align-items: center;
        justify-content: center;
      `}
    >
      <TextCopy value="Copy me!" />
      <TextCopy value="Focused on mount" autofocus />
      <TextCopy
        adornment={
          <EthIdenticon
            address={ADDRESS}
            scale={2}
            css={`
              transform: scale(calc(${HEIGHT} / 48));
              transform-origin: 0 0;
              position: absolute;
              left: 0;
              top: 0;
            `}
          />
        }
        value="With an icon"
      />
    </div>
  )
}

export default App
