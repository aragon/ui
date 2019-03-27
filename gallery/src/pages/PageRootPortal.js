import React, { useState } from 'react'
import styled from 'styled-components'
import { RootPortal, Button } from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/RootPortal/README.md'

const PageRootPortal = ({ title }) => {
  const [inside, setInside] = useState(false)

  const content = (
    <div
      css={`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: hsla(0, 100%, 100%, 0.8);
      `}
    >
      <div css="margin-bottom: 20px">
        This gets rendered {inside ? 'through' : 'outside'} the portal.
      </div>
      <Button
        mode="secondary"
        size="compact"
        onClick={() => setInside(v => !v)}
      >
        Render {inside ? 'without RootPortal' : 'through RootPortal'}
      </Button>
    </div>
  )

  return (
    <Page title={title} readme={readme}>
      <Page.Demo>
        <Container css="padding: 0">
          <div
            css={`
              position: relative;
              height: 200px;
              width: 100%;
            `}
          >
            {inside ? <RootPortal>{content}</RootPortal> : content}
          </div>
        </Container>
      </Page.Demo>
    </Page>
  )
}

export default PageRootPortal
