import React, { useState } from 'react'
import styled from 'styled-components'
import { RootPortal, Button } from '@tecommons/ui'
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
      <div
        css={`
          padding: 20px;
          margin-bottom: 20px;
          border: 2px solid hsla(20, 40%, 80%, 0.8);
          border-radius: 4px;
        `}
      >
        This component is rendered {inside ? 'through' : 'without'} RootPortal.
      </div>
      <Button mode="secondary" size="small" onClick={() => setInside(v => !v)}>
        Render {inside ? 'without' : 'through'} RootPortal
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
