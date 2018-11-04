import React from 'react'
import styled from 'styled-components'
import { Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Popover/README.md'
import Popover from 'ui-src/components/Popover/Popover'
import RootProvider from 'ui-src/components/RootProvider/RootProvider'

class PagePopover extends React.Component {
  state = {
    hide: true,
  }
  render() {
    const { title } = this.props
    const { hide } = this.state
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
                    onClick={() => {
                      this.setState({
                        hide: !hide,
                      })
                    }}
                  >
                    Show component
                  </Button>
                </div>
                <div>
                  <div>
                    {!hide && (
                      <Popover
                        placement="top-start"
                        gutter="20px"
                        openerRef={this.openerRef}
                        handleClose={() => this.setState({ hide: true })}
                      >
                        <Box />
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

const Box = styled.div`
  width: 200px;
  height: 100px;
  background-color: red;
`

export default PagePopover
