/* @flow */
import type { Node } from 'react'
import React from 'react'
import styled from 'styled-components'
import { BaseStyles, theme } from '../..'
import logo from './assets/logo-background.svg'

// AragonApp provides everything needed to start an Aragon App.

const StyledAragonApp = styled.main`
  min-height: 100vh;
  background-color: ${theme.mainBackground};
  background-image: ${({ backgroundLogo }) =>
    backgroundLogo ? `url(${logo})` : 'none'};
  background-position: 50% 50%;
  background-repeat: no-repeat;
`

type Props = {
  className: string,
  backgroundLogo: boolean,
  children: Node,
}

class AragonApp extends React.Component<Props> {
  static defaultProps = {
    backgroundLogo: false,
  }
  static Styled = StyledAragonApp
  render() {
    const { children, backgroundLogo, className } = this.props
    return (
      <StyledAragonApp {...{ backgroundLogo, className }}>
        <BaseStyles />
        {children}
      </StyledAragonApp>
    )
  }
}

export default AragonApp
