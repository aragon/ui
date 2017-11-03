/* @flow */
import React from 'react'
import styled from 'styled-components'
import { colors, theme } from '../..'

import logo from './assets/logo.svg'
import iconTwitter from './assets/twitter.svg'
import iconMedium from './assets/medium.svg'
import iconSlack from './assets/slack.svg'
import iconMail from './assets/mail.svg'

const StyledFooter = styled.footer`
  padding: 90px 20px 110px;
  font-size: 15px;
  color: grey;
  background: ${colors.Rain['Shark']};

  ${({ compact }) => {
    if (!compact) return ''
    return `
      padding-top: 30px;
      padding-bottom: 30px;

      .part-2 {
        display: flex;
        align-items: center;
      }
      .part-2 li {
        margin-bottom: 0;
        margin-left: 20px;
      }
      .icon {
        padding-left: 25px;
      }
    `
  }};

  li {
    margin: 0 0 10px;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  strong a {
    color: ${theme.accent};
    font-weight: 400;
  }
  .main {
    display: flex;
    justify-content: space-between;
  }
  .part-1 {
    display: flex;
    justify-content: space-between;
    width: 50%;
  }
  .icon {
    padding-left: 30px;
    background-repeat: no-repeat;
    background-position: 0 50%;
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
`

type Props = {
  compact: boolean,
}

const Footer = ({ compact }: Props) => (
  <StyledFooter compact={compact}>
    <div className="main">
      <div className="part-1">
        <img src={logo} width="158" height="50" alt="Aragon" />
        {!compact && (
          <ul>
            <li>
              <a href="">Core</a>
            </li>
            <li>
              <a href="">Network</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
          </ul>
        )}
        {!compact && (
          <ul>
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
        )}
      </div>
      <ul className="part-2">
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
  </StyledFooter>
)

Footer.defaultProps = {
  compact: false,
}

export default Footer
