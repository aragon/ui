/* @flow */
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const StyledMenuItem = styled.li`
  display: flex;
  align-items: stretch;
  white-space: nowrap;
  a {
    display: flex;
    align-items: center;
    padding: 0 15px;
    text-decoration: none;
    font-size: 15px;
    color: ${({ active }) => (active ? theme.accent : theme.textSecondary)};
  }
`

type Props = {
  url: string,
  label: string,
  active: boolean,
}

const MenuItem = ({ url, label, active }: Props) => (
  <StyledMenuItem active={active}>
    <a href={url}>{label}</a>
  </StyledMenuItem>
)

MenuItem.defaultProps = {
  active: false,
}

export default MenuItem
