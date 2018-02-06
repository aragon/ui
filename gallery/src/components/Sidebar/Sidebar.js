import React from 'react'
import styled from 'styled-components'
import { Text, theme } from '@aragon/ui'
import MenuItem from './MenuItem'

class Sidebar extends React.PureComponent {
  handleHomeClick = event => {
    event.preventDefault()
    this.props.onOpen(this.props.root)
  }
  render() {
    const { title, root, pages, activePage, groups, onOpen } = this.props
    return (
      <Main>
        <StyledSidebar>
          <Title>
            <a href={root} onClick={this.handleHomeClick}>
              {title}
            </a>
          </Title>
          <nav>
            <ul>
              {groups.map(({ name, pages }) => (
                <li key={name}>
                  <GroupName>
                    <Text smallcaps color={theme.textSecondary}>
                      {name}
                    </Text>
                  </GroupName>
                  <ul>
                    {pages
                      .map((page, i) => (
                        <MenuItem
                          key={page.path}
                          active={page === activePage}
                          path={page.path}
                          name={page.name}
                          onOpen={onOpen}
                        />
                      ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </StyledSidebar>
      </Main>
    )
  }
}

const Main = styled.div`
  width: 200px;
  flex-shrink: 0;
`

const StyledSidebar = styled.section`
  overflow-y: auto;
  height: 100vh;
  padding: 40px;
  li {
    list-style: none;
  }
`

const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`

const GroupName = styled.h2`
  margin-top: 30px;
`

export default Sidebar
