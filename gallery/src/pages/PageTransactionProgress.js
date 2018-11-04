import React from 'react'
import styled from 'styled-components'
import { TransactionProgress, Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/TransactionProgress/README.md'
import Popover from 'ui-src/components/Popover/Popover'
import RootProvider from 'ui-src/components/RootProvider/RootProvider'

class PageTransactionProgress extends React.Component {
  state = {
    top: '0px',
    left: '0px',
    hide: true,
  }
  render() {
    const { title } = this.props
    const { top, left, hide } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo>
          <RootProvider>
            <Container>
              <Wrapper>
                <div
                  ref={ref => {
                    this.openerRef = ref
                  }}
                >
                  <Button
                    onClick={e =>
                      this.setState({
                        top: e.clientY + 'px',
                        left: e.clientX + 'px',
                        hide: !hide,
                      })
                    }
                  >
                    Show component
                  </Button>
                </div>
                <div>
                  <div>
                    {!hide && (
                      <Popover
                        top={top}
                        left={left}
                        zIndex={100}
                        openerRef={this.openerRef}
                        handleClose={() => this.setState({ hide: true })}
                      >
                        <TransactionProgress
                          transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
                          progress={0.3}
                          endTime={new Date(Date.now() + 100000)}
                          handleClose={() => this.setState({ hide: true })}
                          slow
                        />
                      </Popover>
                    )}
                  </div>
                </div>
              </Wrapper>
            </Container>
          </RootProvider>
        </Page.Demo>
      </Page>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`

export default PageTransactionProgress
