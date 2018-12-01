import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { theme } from '../../theme'
import { PublicUrl } from '../../providers/PublicUrl'

import overpassLightWoff from './assets/overpass/overpass-light.woff'
import overpassLightWoff2 from './assets/overpass/overpass-light.woff2'
import overpassRegularWoff from './assets/overpass/overpass-regular.woff'
import overpassRegularWoff2 from './assets/overpass/overpass-regular.woff2'
import overpassSemiBoldWoff from './assets/overpass/overpass-semibold.woff'
import overpassSemiBoldWoff2 from './assets/overpass/overpass-semibold.woff2'


const DEFAULT_FONT_FAMILY = 'overpass'

const DEFAULT_FONTS = {
  '400': [
    { url: overpassLightWoff2, format: 'woff2' },
    { url: overpassLightWoff, format: 'woff', legacy: true },
  ],
  '600': [
    { url: overpassRegularWoff2, format: 'woff2' },
    { url: overpassRegularWoff, format: 'woff', legacy: true },
  ],
  '800': [
    { url: overpassSemiBoldWoff2, format: 'woff2' },
    { url: overpassSemiBoldWoff, format: 'woff', legacy: true },
  ],
}

class BaseStyles extends React.PureComponent {
  static propTypes = {
    publicUrl: PropTypes.string,
    enableLegacyFonts: PropTypes.bool,
    fontFamily: PropTypes.string,
  }
  static defaultProps = {
    publicUrl: '/',
    enableLegacyFonts: false,
    fontFamily: `${DEFAULT_FONT_FAMILY}, sans-serif`,
  }
  fontSrc(sources, { publicUrl, enableLegacyFonts }) {
    return sources
      .filter(({ legacy }) => !legacy || (legacy && enableLegacyFonts))
      .map(({ url, format }) => `url(${publicUrl + url}) format('${format}')`)
      .join(', ')
  }
  fontFaceDeclarations() {
    const { props } = this
    // No need to declare the font faces if the font family has changed.
    if (props.fontFamily !== BaseStyles.defaultProps.fontFamily) {
      return ''
    }
    return `
      @font-face {
        font-family: ${DEFAULT_FONT_FAMILY};
        src: ${this.fontSrc(DEFAULT_FONTS['400'], props)};
        font-weight: 400;
        font-style: normal;
      }
      @font-face {
        font-family: ${DEFAULT_FONT_FAMILY};
        src: ${this.fontSrc(DEFAULT_FONTS['600'], props)};
        font-weight: 600;
        font-style: normal;
      }
      @font-face {
        font-family: ${DEFAULT_FONT_FAMILY};
        src: ${this.fontSrc(DEFAULT_FONTS['800'], props)};
        font-weight: 800;
        font-style: normal;
      }
    `
  }
  render() {
    return (
      <GlobalStyle {...this.props} fontFaces={this.fontFaceDeclarations()} />
    )
  }
}

const GlobalStyle = createGlobalStyle`
  ${props => (props.fontFaces ? props.fontFaces : '')}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    font-family: ${props => props.fontFamily};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.textPrimary};
    background: ${theme.mainBackground};
  }
  body,
  ul,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  button,
  select,
  input,
  textarea,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  a,
  button,
  select,
  input,
  textarea {
    color: inherit;
  }
  strong,
  b {
    font-weight: 600;
  }
`

export default PublicUrl.hocWrap(BaseStyles)
