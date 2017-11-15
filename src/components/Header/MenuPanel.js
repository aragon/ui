/* @flow */
import React from 'react'
import styled from 'styled-components'
import { Motion, spring } from 'react-motion'
import { spring as springConf } from '../../shared-styles'
import theme from '../../theme'

import close from './assets/close.svg'
import menu from './assets/menu.svg'

const Container = styled.div`
  min-height: 60px;
`

const PanelStyles = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 70px;
  line-height: 2;
  font-size: 17px;
  background: ${theme.accent};
  a {
    color: white;
    text-decoration: none;
  }
`

const PanelContent = styled.div`
  padding: 0 60px 30px 30px;
`

const Toggle = styled.a.attrs({ role: 'button' })`
  position: absolute;
  right: 15px;
  z-index: 2;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const renderLinkDefault = ({ url, children }) => <a href={url}>{children}</a>

class Panel extends React.Component {
  state = {
    opened: false,
  }
  toggle = () => {
    this.setState({ opened: !this.state.opened })
  }
  handleItemClick = () => {
    this.setState({ opened: false })
  }
  render() {
    const { items, renderLink = renderLinkDefault } = this.props
    const { opened } = this.state
    return (
      <Motion
        style={{
          openProgress: spring(Number(opened), springConf('normal')),
        }}
      >
        {({ openProgress }) => (
          <Container>
            <Toggle onClick={this.toggle}>
              <img src={opened ? close : menu} alt="" />
            </Toggle>
            <PanelStyles
              style={{
                opacity: openProgress,
                transform: `translateY(-${(1 - openProgress) * 10}px)`,
              }}
            >
              <PanelContent>
                {items.map(([url, label, active]) => (
                  <div key={url} onClick={this.handleItemClick}>
                    {renderLink({
                      url,
                      children: label,
                    })}
                  </div>
                ))}
              </PanelContent>
            </PanelStyles>
          </Container>
        )}
      </Motion>
    )
  }
}

export default Panel
