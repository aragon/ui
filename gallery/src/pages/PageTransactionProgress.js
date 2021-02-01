import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Root, TransactionProgress, Button } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/TransactionProgress/README.md'

function PageTransactionProgress({ title }) {
  const [hide, setHide] = useState(true)
  const [opener, setOpener] = useState(null)

  const handleOpenerRef = useCallback(node => {
    setOpener(node)
  }, [])

  return (
    <Page title={title} readme={readme}>
      <Page.Demo>
        <Root.Provider>
          <Container>
            <Wrapper>
              <div ref={handleOpenerRef}>
                <Button ref={handleOpenerRef} onClick={() => setHide(false)}>
                  Show component
                </Button>
              </div>
              <div>
                <TransactionProgress
                  transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
                  progress={0.3}
                  visible={!hide}
                  endTime={new Date(Date.now() + 100000)}
                  onClose={() => setHide(true)}
                  top={'0px'}
                  left={'opx'}
                  opener={opener}
                  slow
                />
              </div>
            </Wrapper>
          </Container>
        </Root.Provider>
      </Page.Demo>
    </Page>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`

export default PageTransactionProgress
