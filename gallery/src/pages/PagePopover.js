import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Popover, Root } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Popover/README.md'

function PagePopover({ title }) {
  const [hide, setHide] = useState(false)
  const [opener, setOpener] = useState(null)

  const handleOpenerRef = useCallback(node => {
    setOpener(node)
  }, [])

  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <Root.Provider>
          <Container>
            <Wrapper>
              <div>
                <Button
                  ref={handleOpenerRef}
                  onClick={() => setHide(true)}
                  mode="strong"
                >
                  Show component
                </Button>
              </div>
              <div>
                <div>
                  <Popover
                    opener={opener}
                    gutter="20px"
                    visible={hide}
                    onClose={() => setHide(false)}
                  >
                    <Box>Popover</Box>
                  </Popover>
                </div>
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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
`

PagePopover.propTypes = {
  title: PropTypes.string,
}

PagePopover.defaultProps = {
  title: '',
}

export default PagePopover
