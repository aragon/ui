import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import { theme } from '../../theme'
import { PublicUrl } from '../../providers/PublicUrl'

import overpassLightWoff from './assets/overpass/overpass-light.woff'
import overpassLightWoff2 from './assets/overpass/overpass-light.woff2'
import overpassRegularWoff from './assets/overpass/overpass-regular.woff'
import overpassRegularWoff2 from './assets/overpass/overpass-regular.woff2'
import overpassSemiBoldWoff from './assets/overpass/overpass-semibold.woff'
import overpassSemiBoldWoff2 from './assets/overpass/overpass-semibold.woff2'

class BaseStyles extends React.Component {
  static propTypes = {
    publicUrl: PropTypes.string,
    enableLegacyFonts: PropTypes.bool,
  }
  static defaultProps = {
    publicUrl: '/',
    enableLegacyFonts: false,
  }
  componentWillMount() {
    const { publicUrl, enableLegacyFonts } = this.props
    injectStyles(url => publicUrl + url, enableLegacyFonts)
  }
  render() {
    return null
  }
}

const fontSrc = sources =>
  sources
    .filter(({ enable }) => enable)
    .map(({ url, format }) => `url(${url}) format('${format}')`)
    .join(', ')

const injectStyles = (asset, legacyFonts) => injectGlobal`
  @font-face {
    font-family: 'overpass';
    src: ${fontSrc([
      { url: asset(overpassLightWoff2), format: 'woff2', enable: true },
      { url: asset(overpassLightWoff), format: 'woff', enable: legacyFonts },
    ])};
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: ${fontSrc([
      { url: asset(overpassRegularWoff2), format: 'woff2', enable: true },
      { url: asset(overpassRegularWoff), format: 'woff', enable: legacyFonts },
    ])};
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: ${fontSrc([
      { url: asset(overpassSemiBoldWoff2), format: 'woff2', enable: true },
      { url: asset(overpassSemiBoldWoff), format: 'woff', enable: legacyFonts },
    ])};
    font-weight: 800;
    font-style: normal;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
  }
  body {
    font-family: overpass, sans-serif;
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
