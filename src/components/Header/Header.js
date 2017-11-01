import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Button from '../Button/Button'
import Text from '../Text/Text'

import logo from './assets/logo.svg'
import logoCompact from './assets/logo-compact.svg'

const StyledHeader = styled.div`
  padding: 0 12px;
  background: ${theme.contentBackground};

  .in {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    min-height: 70px;
    max-width: 1140px;
    margin: 0 auto;
  }
  .in > div {
    display: flex;
    align-items: center;
    &:first-child {
      align-items: stretch;
    }
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .title {
    display: flex;
    align-items: center;
    margin-left: 40px;
  }
  .nav {
    display: flex;
    align-items: stretch;
    list-style: none;
    margin-left: 45px;
  }
  .nav ul {
    display: flex;
    align-items: stretch;
  }
  .button {
    margin-left: 10px;
    &:first-child {
      margin: 0;
    }
  }

  ${({ withTitle }) => {
    if (!withTitle) return ''
    return `
      .logo {
        padding-right: 40px;
        border-right: 1px solid #e8e8e8;
        padding-top: 6px;
        padding-bottom: 8px;
      }
      .logo img:first-child {
        margin-right: 10px;
      }
    `
  }}
`

const Logo = ({ compact }) => (
  <a href="/" className="logo">
    <img
      alt="Aragon"
      src={compact ? logoCompact : logo}
      height={compact ? 36 : 51}
    />
  </a>
)

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

const MenuItem = ({ url, label, active }) => (
  <StyledMenuItem active={active}>
    <a href={url}>{label}</a>
  </StyledMenuItem>
)

const Header = ({ title, menuItems = [] }) => (
  <StyledHeader withTitle={Boolean(title)}>
    <div className="in">
      <div>
        <Logo compact={Boolean(title)} />
        {title && (
          <div className="title">
            <Text heading={1} size='xlarge'>{title}</Text>
          </div>
        )}
        {menuItems.length > 0 && (
          <nav className="nav">
            <ul>
              {menuItems.map((item, i) => (
                <MenuItem
                  key={i}
                  url={item[0]}
                  label={item[1]}
                  active={item[2]}
                />
              ))}
            </ul>
          </nav>
        )}
      </div>
      {!title && (
        <div>
          <div className="button">
            <Button mode="outline">Try web version</Button>
          </div>
          <div className="button">
            <Button mode="strong">Download Aragon</Button>
          </div>
        </div>
      )}
    </div>
  </StyledHeader>
)

export { StyledHeader }
export default Header
