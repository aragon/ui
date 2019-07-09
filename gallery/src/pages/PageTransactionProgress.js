import React from 'react'
import styled from 'styled-components'
import { Popover, Root, TransactionProgress, Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/TransactionProgress/README.md'

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
          <Root.Provider>
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
                        hide: false,
                      })
                    }
                  >
                    Show component
                  </Button>
                </div>
                <div>
                  <TransactionProgress
                    transactionHashUrl="https://etherscan.io/tx/0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060"
                    progress={0.3}
                    visible={!hide}
                    endTime={new Date(Date.now() + 100000)}
                    handleClose={() => this.setState({ hide: true })}
                    top={top}
                    left={left}
                    openerRef={this.openerRef}
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
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`

export default PageTransactionProgress
