import React from 'react'
import styled from 'styled-components'
import {
  Card,
  Text,
  IconAdd,
  IconBlank,
  IconCheck,
  IconCross,
  IconFundraising,
  IconGroups,
  IconHome,
  IconIdentity,
  IconNotifications,
  IconPermissions,
  IconSettings,
  IconShare,
  IconTime,
  IconWallet,
} from '@aragon/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'

const icons = Object.entries({
  IconAdd,
  IconBlank,
  IconCheck,
  IconCross,
  IconFundraising,
  IconGroups,
  IconHome,
  IconIdentity,
  IconNotifications,
  IconPermissions,
  IconSettings,
  IconShare,
  IconTime,
  IconWallet,
}).reduce(
  (icons, [name, Icon]) => [
    ...icons,
    {
      name: `<${name} />`,
      shortName: name.replace(/^Icon/, '').toLowerCase(),
      Icon: Icon,
    },
  ],
  []
)

const PageIcons = ({ title }) => (
  <Page title={title}>
    <Main>
      {icons.map(({ shortName, Icon }) => (
        <IconCard key={shortName} width="140px" height="140px">
          <IconWrap>
            <Icon />
          </IconWrap>
          <Text size="small">{shortName}</Text>
        </IconCard>
      ))}
    </Main>
  </Page>
)

const Main = styled.div`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  width: 100%;
  margin-left: -20px;
`

const IconCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  padding: 10px;
`

const IconWrap = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  align-items: center;
  justify-content: center;
`

export default PageIcons
