import React from 'react'
import { injectGlobal } from 'styled-components'
import theme from '../../theme'

import overpassLightWoff from './assets/overpass/overpass-light.woff'
import overpassLightWoff2 from './assets/overpass/overpass-light.woff2'
import overpassRegularWoff from './assets/overpass/overpass-regular.woff'
import overpassRegularWoff2 from './assets/overpass/overpass-regular.woff2'
import overpassSemiBoldWoff from './assets/overpass/overpass-semibold.woff'
import overpassSemiBoldWoff2 from './assets/overpass/overpass-semibold.woff2'

const injectStyles = () => injectGlobal`
  @font-face {
    font-family: 'overpass';
    src: url(${overpassLightWoff2}) format('woff2'),
         url(${overpassLightWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: url(${overpassRegularWoff2}) format('woff2'),
         url(${overpassRegularWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'overpass';
    src: url(${overpassSemiBoldWoff2}) format('woff2'),
         url(${overpassSemiBoldWoff}) format('woff');
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
    font-size: 14px;
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
  input {
    color: inherit;
  }
  strong,
  b {
    font-weight: 600;
  }
`

class BaseStyles extends React.Component {
  componentWillMount() {
    injectStyles()
  }
  render() {
    return null
  }
}

export default BaseStyles
