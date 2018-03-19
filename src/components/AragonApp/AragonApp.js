import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { BaseStyles, theme } from '../..'
import { styledPublicUrl as asset } from '../../public-url'
import logo from './assets/logo-background.svg'

const StyledAragonApp = styled.main`
  min-width: 320px;
  min-height: 100vh;
  background-color: ${theme.mainBackground};
  background-image: ${({ backgroundLogo }) =>
    backgroundLogo ? css`url(${asset(logo)})` : 'none'};
  background-position: 50% 50%;
  background-repeat: no-repeat;
`

class AragonApp extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    backgroundLogo: PropTypes.bool,
    publicUrl: PropTypes.string,
    children: PropTypes.node,
    supportLegacyAgents: PropTypes.bool,
  }
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
    const {
      children,
      backgroundLogo,
      className,
      publicUrl,
      supportLegacyAgents,
    } = this.props
    const styledProps = { backgroundLogo, className, publicUrl }
    return (
      <StyledAragonApp {...styledProps}>
        <BaseStyles publicUrl={publicUrl} legacyFonts={supportLegacyAgents} />
        {children}
      </StyledAragonApp>
    )
  }
}

export default AragonApp
