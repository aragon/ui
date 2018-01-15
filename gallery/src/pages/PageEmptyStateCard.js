import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/Card/EmptyStateCard.md'
import { EmptyStateCard, Text , IconHome} from '@aragon/ui'
import logo from '../'
const Container = styled.div`
  display: flex;
  max-width: 800px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  & > div {
    margin-left: 20px;
  }
  & > div:first-child {
    margin: 0;
  }
`

const DemoHeader = styled.h4`
  margin-bottom: 10px;
`

const TextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const PageEmptyStateCard = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <div>
          <EmptyStateCard actionText="Create a new post!" text="You seem to not have any content on your wall." icon={() => <IconHome color="blue" />} />
        </div>
      </Container>
    </Page.Demo>
  </Page>
)

export default PageEmptyStateCard
