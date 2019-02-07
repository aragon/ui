import React from 'react'
import styled from 'styled-components'
import { Button, EmptyStateCard, Text, theme, IconBlank } from '@aragon/ui'

class App extends React.Component {
  render() {
    const text = 'You seem to not have any content on your wall.'
    const icon = <IconBlank width={40} height={40} />
    const button = (
      <Button mode="secondary" style={{ width: '150px' }}>
        Custom button
      </Button>
    )
    return (
      <Main>
        <Items>
          <Item>
            <EmptyStateCard />
          </Item>
          <Item>
            <EmptyStateCard text={text} icon={icon} action={button} />
          </Item>
          <Item>
            <EmptyStateCard
              text={text}
              icon={() => icon}
              actionText="Click me"
              actionButton={Button}
            />
          </Item>
          <Item>
            <EmptyStateCard icon={() => icon} actionText="Click me" />
          </Item>
          <Item>
            <EmptyStateCard icon={() => icon} />
          </Item>
        </Items>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 0;
`

const Item = styled.div`
  margin-left: 40px;
  margin-top: 40px;
`

export default App
