import React from 'react'
import styled from 'styled-components'
import {theme} from '@aragon/ui'

const StyledMenuItem = styled.li`
  position: relative;
  margin: 10px 0;
  list-style: none;
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  &:before {
    display: ${({ active }) => (active ? 'block' : 'none')};
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    left: -10px;
    top: calc(50% - 2px);
    border-radius: 2px;
    background: ${theme.accent};
  }
  a {
    text-decoration: none;
  }
  a:active {
    color: var(--grey500);
  }
`

class MenuItem extends React.Component {
  handleClick = event => {
    event.preventDefault()
    this.props.onOpen(this.props.page.path)
  }
  render() {
    const { active, page = {}, onOpen } = this.props
    return (
      <StyledMenuItem active={active}>
        <a href={page.path} onClick={this.handleClick}>
          {page.name}
        </a>
      </StyledMenuItem>
    )
  }
}

export default MenuItem
