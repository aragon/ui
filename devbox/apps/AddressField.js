import React from 'react'
import styled from 'styled-components'
import { AddressField, tokenIconUrl } from '@tecommons/ui'

function App() {
  console.log('ABC', tokenIconUrl('0x0000000000000000000000000000000000000000'))
  return (
    <div
      css={`
        display: grid;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}
    >
      <div
        css={`
          display: grid;
          grid-gap: 24px;
        `}
      >
        <div>
          <AddressField address="0x2c9341a52cfa3f2c2554ca1803134137b9366b3c" />
        </div>
        <div>
          <AddressField
            address="0x0000000000000000000000000000000000000000"
            icon={
              <img
                width="30"
                height="30"
                src={tokenIconUrl('0x0000000000000000000000000000000000000000')}
                alt=""
              />
            }
          />
        </div>
      </div>
    </div>
  )
}

export default App
