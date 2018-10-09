import React from 'react'
import styled from 'styled-components'
import { TransactionProgress, Button } from '@aragon/ui'
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
          {!hide && (
            <TransactionProgress
              slow="true"
              top={top}
              left={left}
              handleClose={() => this.setState({ hide: true })}
            />
          )}
          <Container>
            <Wrapper>
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
            </Wrapper>
          </Container>
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
