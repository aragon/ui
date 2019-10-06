import React, { useState } from 'react'
import styled from 'styled-components'
import {
	EthIdenticon,  
	IconBlank, 
	SearchCopy, 
	TextCopy
} from '@aragon/ui'


const ADDRESS = '0x2c9341a52cfa3f2c2554ca1803134137b9366b3c'

const GU = 8
const HEIGHT = 5 * GU

function App() {
  const [searchTerm, setSearchTerm] = useState('')
	const address = ADDRESS;

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
      <TextCopy
        value="Copy me!"
        adornment={<IconBlank />}
        adornmentPosition="end"
      />
      <TextCopy
        value="With an icon"
        adornment={<IconBlank />}
        adornmentPosition="end"
				icon={
          <EthIdenticon
            address={address}
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
      />
    </div>
  )
}

export default App
