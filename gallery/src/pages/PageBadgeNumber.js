import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/BadgeNumber/README.md'
import { BadgeNumber } from '@aragon/ui'
import Container from '../components/Page/DemoContainer'

const PageBadgeNumber = ({ title }) => (
  <Page title={title} readme={readme}>
    <Page.Demo>
      <Container>
        <BadgesRow>
          <div>
            <BadgeNumber
              css={`
                margin: '3.5rem';
              `}
              number={5}
            />
          </div>
          <div>
            <BadgeNumber
              number={5}
              small={true}
              color={'white'}
              background={'blue'}
            />
          </div>
          <div>
            <BadgeNumber
              number={5}
              small={false}
              color={'white'}
              background={'blue'}
            />
          </div>
          <div>
            <BadgeNumber
              number={5}
              small={false}
              color={'blue'}
              background={'white'}
            />
          </div>
        </BadgesRow>
      </Container>
    </Page.Demo>
  </Page>
)

const BadgesRow = styled.div`
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
`

export default PageBadgeNumber
