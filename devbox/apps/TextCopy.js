import React from 'react'
import styled from 'styled-components'
import { EthIdenticon, TextCopy, GU } from '@aragon/ui'

const ADDRESS = '0x2c9341a52cfa3f2c2554ca1803134137b9366b3c'
const HEIGHT = 5 * GU
const IDENTICON_SIZE = 6 * GU

function App() {
  return (
    <div
      css={`
        padding: 100px;
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
          adornment={<EthIdenticon address={ADDRESS} />}
          value="With adornment"
        />
      </div>
      <div>
        <TextCopy
          adornment={<EthIdenticon address={ADDRESS} />}
          value="With adornment and shadow"
          showShadow
        />
      </div>
      <div>
        <TextCopy
          adornment={<EthIdenticon address={ADDRESS} />}
          value="With 250px width"
          showShadow
          width={'250px'}
          title={'some Title'}
        />
      </div>
      <div>
        <TextCopy value="sub title only" showShadow subtitle="sun title ..." />
      </div>
      <div>
        <TextCopy
          value="both title and sub title ..."
          showShadow
          title={'some Title'}
          subtitle={
            <p>
              Enter number of tokens to be minted (
              <span style={{ fontWeight: 600 }}>IMPORTANT</span>: they will be
              sent to the current{' '}
              <span style={{ fontWeight: 600 }}>connected wallet address</span>
              ).
            </p>
          }
        />
      </div>
    </div>
  )
}

export default App
