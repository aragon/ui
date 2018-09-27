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

const fontFamily = {
  Light: [
    { url: overpassLightWoff2, format: 'woff2' },
    { url: overpassLightWoff, format: 'woff', legacy: true },
  ],
  Regular: [
    { url: overpassRegularWoff2, format: 'woff2' },
    { url: overpassRegularWoff, format: 'woff', legacy: true },
  ],
  SemiBold: [
    { url: overpassSemiBoldWoff2, format: 'woff2' },
    { url: overpassSemiBoldWoff, format: 'woff', legacy: true },
  ],
}

const fontSrc = (sources, { publicUrl, enableLegacyFonts }) =>
  sources
    .filter(({ legacy }) => !legacy || (legacy && enableLegacyFonts))
    .map(({ url, format }) => `url(${publicUrl + url}) format('${format}')`)
    .join(', ')

const BaseStyles = createGlobalStyle`
  @font-face {
    font-family: 'overpass';
    src: ${props => fontSrc(fontFamily['Light'], props)};
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: ${props => fontSrc(fontFamily['Regular'], props)};
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: ${props => fontSrc(fontFamily['SemiBold'], props)};
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

BaseStyles.propTypes = {
  publicUrl: PropTypes.string,
  enableLegacyFonts: PropTypes.bool,
}

BaseStyles.defaultProps = {
  publicUrl: '/',
  enableLegacyFonts: false,
}

export default PublicUrl.hocWrap(BaseStyles)
