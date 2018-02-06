import React from 'react'
import styled from 'styled-components'
import { theme } from '@aragon/ui'

const StyledMenuItem = styled.li`
  position: relative;
  margin: 10px 0;
  list-style: none;
  font-size: 18px;
  line-height: 24px;
  font-weight: ${({ active }) => (active ? '600' : '400')};
  &:before {
    display: ${({ active }) => (active ? 'block' : 'none')};
    content: 'I';
    position: absolute;
    left: -10px;
    color: ${theme.accent};
  }
  a {
    text-decoration: none;
  }
  a:active {
    color: ${theme.textSecondary};
  }
`

class MenuItem extends React.Component {
  handleClick = event => {
    event.preventDefault()
    this.props.onOpen(this.props.path)
  }
  render() {
    const { active, path, name, onOpen } = this.props
    return (
      <StyledMenuItem active={active}>
        <a href={path} onClick={this.handleClick}>
          {name}
        </a>
      </StyledMenuItem>
    )
  }
}

export default MenuItem
