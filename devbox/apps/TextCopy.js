import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import {
  EthIdenticon,
  IconBlank,
  SearchCopy,
  TextCopy,
  GU,
} from '@tecommons/ui'

const ADDRESS = '0x2c9341a52cfa3f2c2554ca1803134137b9366b3c'
const HEIGHT = 5 * GU
const IDENTICON_SIZE = 6 * GU

function App() {
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}
    >
      <div
        css={`
          display: grid;
          grid-gap: 20px;
        `}
      >
        <div>
          <TextCopy value="Copy me!" />
        </div>
        <div>
          <TextCopy value="Focused on mount" autofocus />
        </div>
        <div>
          <TextCopy
            adornment={
              <EthIdenticon
                address={ADDRESS}
                scale={2}
                css={`
                  transform: scale(${(HEIGHT - 2) / IDENTICON_SIZE});
                  transform-origin: 0 0;
                `}
              />
            }
            value="With adornment"
          />
        </div>
      </div>
    </div>
  )
}

export default App
