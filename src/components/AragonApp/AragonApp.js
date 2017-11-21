/* @flow */
import type { Node } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { BaseStyles, theme } from '../..'
import getPublicUrl, { styledPublicUrl as asset } from '../../public-url'
import logo from './assets/logo-background.svg'

// AragonApp provides everything needed to start an Aragon App.

const StyledAragonApp = styled.main`
  min-width: 320px;
  min-height: 100vh;
  background-color: ${theme.mainBackground};
  background-image: ${({ backgroundLogo }) =>
    backgroundLogo ? css`url(${asset(logo)})` : 'none'};
  background-position: 50% 50%;
  background-repeat: no-repeat;
`

type Props = {
  className: string,
  backgroundLogo: boolean,
  publicUrl: string,
  children: Node,
}

class AragonApp extends React.Component<Props> {
  static defaultProps = {
    backgroundLogo: false,
  }
  static childContextTypes = {
    publicUrl: PropTypes.string,
  }
  static Styled = StyledAragonApp

  getChildContext() {
    return { publicUrl: this.props.publicUrl }
  }

  render() {
    const { children, backgroundLogo, className, publicUrl } = this.props
    const styledProps = { backgroundLogo, className, publicUrl }
    return (
      <StyledAragonApp {...styledProps}>
        <BaseStyles />
        {children}
      </StyledAragonApp>
    )
  }
}

export default AragonApp
