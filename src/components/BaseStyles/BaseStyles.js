import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { PublicUrl } from '../../providers/PublicUrl'
// import { INTER_FONT_FAMILY, BAIJAMJUREE_FONT_FAMILY } from '../../utils'
import { DEFAULT_FONT_FAMILY, MONOSPACE_FONT_FAMILY } from '../../utils'
import { textStyle } from '../../style'
import { useTheme } from '../../theme'

import overpassLightWoff2 from './assets/overpass/overpass-light.woff2'
import overpassRegularWoff2 from './assets/overpass/overpass-regular.woff2'
import overpassSemiBoldWoff2 from './assets/overpass/overpass-semibold.woff2'
import overpassMonoLightWoff2 from './assets/overpass-mono/overpass-mono-light.woff2'
// import baiJamjureeLightWoff2 from './assets/bai_jamjuree/BaiJamjuree-Light.woff2'
// import baiJamjureeRegularWoff2 from './assets/bai_jamjuree/BaiJamjuree-Regular.woff2'
// import baiJamjureeSemiBoldWoff2 from './assets/bai_jamjuree/BaiJamjuree-SemiBold.woff2'
// import baiJamjureeBoldWoff2 from './assets/bai_jamjuree/BaiJamjuree-Bold.woff2'
// import interLightWoff2 from './assets/inter/Inter-Light.woff2'
// import interRegularWoff2 from './assets/inter/Inter-Regular.woff2'
// import interSemiBoldWoff2 from './assets/inter/Inter-SemiBold.woff2'
// import interBoldWoff2 from './assets/inter/Inter-Bold.woff2'

// const INTER_FONTS = {
//   '400': { url: interLightWoff2, format: 'woff2' },
//   '600': { url: interRegularWoff2, format: 'woff2' },
//   '800': { url: interSemiBoldWoff2, format: 'woff2' },
//   '900': { url: interBoldWoff2, format: 'woff2' },
// }

// const BAI_JAMJUREE_FONTS = {
//   '400': { url: baiJamjureeLightWoff2, format: 'woff2' },
//   '600': { url: baiJamjureeRegularWoff2, format: 'woff2' },
//   '800': { url: baiJamjureeSemiBoldWoff2, format: 'woff2' },
//   '900': { url: baiJamjureeBoldWoff2, format: 'woff2' },
// }

const DEFAULT_FONTS = {
  '400': { url: overpassLightWoff2, format: 'woff2' },
  '600': { url: overpassRegularWoff2, format: 'woff2' },
  '800': { url: overpassSemiBoldWoff2, format: 'woff2' },
}

const MONOSPACE_FONTS = {
  '400': { url: overpassMonoLightWoff2, format: 'woff2' },
}

function fontSrc(publicUrl, { url, format }) {
  console.log(`url(${publicUrl + url}) format('${format}')`)
  return `url(${publicUrl + url}) format('${format}')`
}

function fontFaceDeclarations({ fontFamily, publicUrl }) {
  // No need to declare the font faces if the font family has changed.
  if (fontFamily !== BaseStyles.defaultProps.fontFamily) {
    return ''
  }
  return `
    @font-face {
      font-family: ${DEFAULT_FONT_FAMILY};
      src: ${fontSrc(publicUrl, DEFAULT_FONTS['400'])};
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: ${DEFAULT_FONT_FAMILY};
      src: ${fontSrc(publicUrl, DEFAULT_FONTS['600'])};
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: ${DEFAULT_FONT_FAMILY};
      src: ${fontSrc(publicUrl, DEFAULT_FONTS['800'])};
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: ${MONOSPACE_FONT_FAMILY};
      src: ${fontSrc(publicUrl, MONOSPACE_FONTS['400'])};
      font-weight: 400;
      font-style: normal;
    }
  `
  // return `
  //   @font-face {
  //     font-family: ${INTER_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, INTER_FONTS['400'])};
  //     font-weight: 400;
  //     font-style: normal;
  //   }
  //   @font-face {
  //     font-family: ${INTER_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, INTER_FONTS['600'])};
  //     font-weight: 600;
  //     font-style: normal;
  //   }
  //   @font-face {
  //     font-family: ${INTER_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, INTER_FONTS['800'])};
  //     font-weight: 800;
  //     font-style: normal;
  //   }
  //   @font-face {
  //     font-family: ${INTER_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, INTER_FONTS['900'])};
  //     font-weight: 900;
  //     font-style: normal;
  //   }
  //   @font-face {
  //     font-family: ${BAIJAMJUREE_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, BAI_JAMJUREE_FONTS['400'])};
  //     font-weight: 400;
  //     font-style: normal;
  //   }
  //   @font-face {
  //     font-family: ${BAIJAMJUREE_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, BAI_JAMJUREE_FONTS['600'])};
  //     font-weight: 600;
  //     font-style: normal;
  //   }
  //   @font-face {
  //     font-family: ${BAIJAMJUREE_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, BAI_JAMJUREE_FONTS['800'])};
  //     font-weight: 800;
  //     font-style: normal;
  //   @font-face {
  //     font-family: ${BAIJAMJUREE_FONT_FAMILY};
  //     src: ${fontSrc(publicUrl, BAI_JAMJUREE_FONTS['900'])};
  //     font-weight: 900;
  //     font-style: normal;
  // `
}

const BaseStyles = React.memo(function BaseStyles(props) {
  const theme = useTheme()
  return (
    <GlobalStyle
      {...props}
      theme={theme}
      fontFaces={fontFaceDeclarations(props)}
      textStyleCss={textStyle('body2')}
    />
  )
})

BaseStyles.propTypes = {
  publicUrl: PropTypes.string,
  fontFamily: PropTypes.string,
  componentsFontFamily: PropTypes.string,
}

BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: `${DEFAULT_FONT_FAMILY}, sans-serif`,
  // fontFamily: `${INTER_FONT_FAMILY}, sans-serif`,
  // componentsFontFamily: `${BAIJAMJUREE_FONT_FAMILY}, sans-serif`,
}

const GlobalStyle = createGlobalStyle`
  // @font-face declarations
  ${p => (p.fontFaces ? p.fontFaces : '')}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    -webkit-overflow-scrolling: touch;
  }
  body {
    height: 0;
    min-height: 100vh;
    color: ${p => p.theme.content};
    background: ${p => p.theme.background};
    font-family: ${p => p.fontFamily};
    ${p => p.textStyleCss};
  }
  html, body {
    overflow: hidden;
  }
  body, ul, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  button, select, input, textarea, h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
  a, button, select, input, textarea {
    color: inherit;
  }
  strong, b {
    font-weight: 600;
  }
  ::selection {
    background: ${p => p.theme.selected};
    color: ${p => p.theme.selectedContent};
  }
`
// const GlobalStyle = createGlobalStyle`

//   // @font-face declarations
//   ${p => (p.fontFaces ? p.fontFaces : '')}
//   *, *:before, *:after {
//     box-sizing: border-box;
//   }
//   html {
//     -webkit-overflow-scrolling: touch;
//   }
//   body {
//     height: 0;
//     min-height: 100vh;
//     color: ${p => p.theme.content};
//     background: ${p => p.theme.background};
//     font-family: ${p => p.fontFamily};
//     ${p => p.textStyleCss};
//   }
//   html, body {
//     overflow: hidden;
//   }
//   body, ul, p, h1, h2, h3, h4, h5, h6 {
//     margin: 0;
//     padding: 0;
//   }
//   button, select, input, textarea, h1, h2, h3, h4, h5, h6 {
//     font-size: inherit;
//     font-family: inherit;
//     font-weight: inherit;
//     line-height: inherit;
//   }
//   a, button, select, input, textarea {
//     color: inherit;
//   }
//   strong, b {
//     font-weight: 600;
//   }
//   ::selection {
//     background: ${p => p.theme.selected};
//     color: ${p => p.theme.selectedContent};
//   }
// `

export default PublicUrl.hocWrap(BaseStyles)
