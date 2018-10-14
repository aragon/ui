import React from 'react'
import styled from 'styled-components'
import { Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Popover/README.md'
import Popover from 'ui-src/components/Popover/Popover'

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
          <Popover.Container>
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
                  <div>
                    {!hide && (
                      <Popover
                        openerRef={this.openerRef}
                        placement="top-start"
                        gutter="20px"
                      >
                        <Box />
                      </Popover>
                    )}
                  </div>
                </div>
              </Wrapper>
            </Container>
          </Popover.Container>
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
