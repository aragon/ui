/* @flow */
import React from 'react'
import styled, { css } from 'styled-components'
import { LayoutGrid, colors, font, themeDark, breakpoint, grid } from '../..'

import logo from './assets/logo.svg'
import iconTwitter from './assets/twitter.svg'
import iconMedium from './assets/medium.svg'
import iconSlack from './assets/slack.svg'
import iconMail from './assets/mail.svg'

const medium = css => breakpoint('medium', css)
const large = css => breakpoint('large', css)

const StyledFooter = styled.footer`
  padding: 60px 20px 10px;
  font-size: 15px;
  color: grey;
  background: ${colors.Rain['Shark']};

  ${({ compact }) => {
    if (!compact) return ''
    return `
      padding-top: 30px;
      padding-bottom: 30px;
      .icon {
        padding-left: 25px;
      }
    `
  }};

  .main {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }

  .logo {
    margin-bottom: 60px;
  }
  .menus {
    display: flex;
  }
  .menu-1 {
    margin-right: 35px;
  }
  .social-links {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  .social-links li {
    display: flex;
  }
  .icon {
    overflow: hidden;
    text-indent: -9999px;
    padding-left: 30px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  li {
    list-style: none;
    line-height: 2;
  }
  a {
    text-decoration: none;
  }
  strong a {
    color: ${themeDark.accent};
    font-weight: 400;
  }
  .icon.twitter {
    background-image: url(${iconTwitter});
  }
  .icon.medium {
    background-image: url(${iconMedium});
  }
  .icon.slack {
    background-image: url(${iconSlack});
  }
  .icon.mail {
    background-image: url(${iconMail});
  }
  .copyright {
    margin: 35px 0 0;
    text-align: center;
    color: ${themeDark.textTertiary};
    ${font({ size: 'xsmall' })};
  }

  ${medium(`
    .all-links {
      display: flex;
      justify-content: space-between;
    }
    .social-links {
      display: block;
      margin-top: 0;
      margin-left: 120px;
    }
    .social-links li {
      display: block;
    }
    .icon {
      overflow: visible;
      text-indent: 0;
      background-position: 0 50%;
    }
  `)};

  ${large(`
    padding-top: 90px;
    .main {
      flex-direction: row;
      max-width: ${grid(12, 11)}px;
    }
    .logo {
      width: ${grid(3, 3)}px;
      flex-shrink: 0;
    }
    .menus {
      display: flex;
      width: ${grid(6, 6)}px;
    }
    .menu-1 {
      width: ${grid(2, 2)}px;
      margin-right: 0;
    }
    .menu-2 {
      width: ${grid(4, 4)}px;
    }
    .social-links {
      width: ${grid(3)}px;
      margin-left: 0;
    }
    li {
      margin: 0 0 10px;
      line-height: 1.5;
    }
    .copyright {
      margin: 70px 0 0;
    }
  `)};
`

type Props = {
  compact: boolean,
}

const DefaultProps = {
  compact: false,
}

const Footer = ({ compact }: Props) => (
  <StyledFooter compact={compact}>
    <div className="main">
      <div className="logo">
        <img src={logo} width="158" height="50" alt="Aragon" />
      </div>
      <div className="all-links">
        {!compact && (
          <div className="menus">
            <nav className="menu-1">
              <ul>
                <li>
                  <a href="">Core</a>
                </li>
                <li>
                  <a href="">Foundation</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">FAQs</a>
                </li>
              </ul>
            </nav>
            <nav className="menu-2">
              <ul>
                <li>
                  <a href="">Wiki</a>
                </li>
                <li>
                  <a href="">Join us</a>
                </li>
                <li>
                  <a href="">Press kit</a>
                </li>
                <li>
                  <strong>
                    <a href="">Download</a>
                  </strong>
                </li>
              </ul>
            </nav>
          </div>
        )}
        <ul className="social-links">
          <li>
            <a href="" className="icon twitter">
              Twitter
            </a>
          </li>
          <li>
            <a href="" className="icon medium">
              Medium
            </a>
          </li>
          <li>
            <a href="" className="icon slack">
              Slack
            </a>
          </li>
          <li>
            <a href="" className="icon mail">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p className="copyright">© Copyright 2017 Aragon One.</p>
  </StyledFooter>
)

Footer.defaultProps = DefaultProps

export default Footer
