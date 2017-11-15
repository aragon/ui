/* @flow */
import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import Button from '../Button/Button'
import Text from '../Text/Text'
import MenuItem from './MenuItem'
import Logo from './Logo'

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
  .logo,
  .logo a {
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
  }};
`

type Props = {
  title: string,
  menuItems: Array<[string, string, boolean]>,
  renderMenuItemLink: mixed,
}

const DefaultProps = {
  menuItems: [],
}

const Header = ({ title, menuItems, renderMenuItemLink }: Props) => (
  <StyledHeader withTitle={Boolean(title)}>
    <div className="in">
      <div>
        <Logo compact={Boolean(title)} renderLink={renderMenuItemLink} />
        {title && (
          <div className="title">
            <Text heading="1" size="xlarge">
              {title}
            </Text>
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
                  renderLink={renderMenuItemLink}
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

Header.defaultProps = DefaultProps

export { StyledHeader }
export default Header
