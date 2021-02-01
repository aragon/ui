import React from 'react'
import { Box, Distribution } from '@tecommons/ui'

import Page from 'comps/Page/Page'
import Container from '../components/Page/DemoContainer'
import readme from 'ui-src/components/Distribution/README.md'

const PageAddressField = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo opaque>
      <Container
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <Box css="width: 240px">
          <Distribution
            heading="Fruit shares"
            items={[
              { item: 'Bananas', percentage: 37 },
              { item: 'Apples', percentage: 22 },
              { item: 'Cherries', percentage: 15 },
              { item: 'Oranges', percentage: 12 },
              { item: 'Grapefruits', percentage: 12 },
              { item: 'Rest', percentage: 2 },
            ]}
          />
        </Box>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageAddressField
