import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  a {
    text-decoration: none;
  }
`

const StyledSidebar = styled.section`padding: 40px;`

class Sidebar extends React.PureComponent {
  handleHomeClick = event => {
    event.preventDefault()
    this.props.onOpen(this.props.pages[0].path)
  }
  render() {
    const { activePage, pages, onOpen } = this.props
    return (
      <StyledSidebar>
        {pages[0] && (
          <Title>
            <a href={pages[0].path} onClick={this.handleHomeClick}>
              {pages[0].name}
            </a>
          </Title>
        )}
        <nav>
          <ul>
            {pages
              .slice(1)
              .map((page, i) => (
                <MenuItem
                  key={page.path}
                  active={page === activePage}
                  page={page}
                  onOpen={onOpen}
                />
              ))}
          </ul>
        </nav>
      </StyledSidebar>
    )
  }
}

export default Sidebar
