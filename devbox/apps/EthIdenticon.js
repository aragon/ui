import React from 'react'
import styled from 'styled-components'
import { EthIdenticon, blockExplorerUrl } from '@aragon/ui'

const ADDRESS_START = '0x2c9341a52c'
const ADDRESS_END = '134137b936'

const createAddress = () => {
  let count = 10
  return () => {
    let addr = ADDRESS_START
    let i = 4
    while (i--) {
      addr += String(++count).padStart(5, '0')
    }
    return addr + ADDRESS_END
  }
}

class App extends React.Component {
  render() {
    const address = createAddress()
    return (
      <Main>
        <Wrapper>
          {[...Array(9)].map((_, i) => (
            <Group key={i}>
              {[...Array(4 + 5 - i)].map((_, j) => {
                const addr = address()
                const scale = 1 + i / 2
                return (
                  <IconLink
                    key={i + '' + j}
                    style={{
                      margin: `${2 + scale / 1.5}px ${2 + scale / 1.5}px`,
                    }}
                    href={blockExplorerUrl('address', addr)}
                    title={addr}
                  >
                    <EthIdenticon
                      address={addr}
                      scale={scale}
                      radius={1 + scale}
                    />
                  </IconLink>
                )
              })}
            </Group>
          ))}
        </Wrapper>
      </Main>
    )
  }
}

const IconLink = styled.a.attrs({ rel: 'noopener external', target: '_blank' })`
  position: relative;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`

export default App
