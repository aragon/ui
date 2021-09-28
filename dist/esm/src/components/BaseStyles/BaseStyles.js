import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { createGlobalStyle } from 'styled-components';
import overpassLightWoff2 from './assets/overpass/overpass-light.woff2.js';
import overpassRegularWoff2 from './assets/overpass/overpass-regular.woff2.js';
import overpassSemiBoldWoff2 from './assets/overpass/overpass-semibold.woff2.js';
import overpassMonoLightWoff2 from './assets/overpass-mono/overpass-mono-light.woff2.js';
import { DEFAULT_FONT_FAMILY, MONOSPACE_FONT_FAMILY } from '../../utils/font.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { useTheme } from '../../theme/Theme2.js';
import { textStyle } from '../../style/text-styles.js';

const DEFAULT_FONTS = {
  '400': {
    url: overpassLightWoff2,
    format: 'woff2'
  },
  '600': {
    url: overpassRegularWoff2,
    format: 'woff2'
  },
  '800': {
    url: overpassSemiBoldWoff2,
    format: 'woff2'
  }
};
const MONOSPACE_FONTS = {
  '400': {
    url: overpassMonoLightWoff2,
    format: 'woff2'
  }
};

function fontSrc(publicUrl, {
  url,
  format
}) {
  return `url(${publicUrl + url}) format('${format}')`;
}

function fontFaceDeclarations({
  fontFamily,
  publicUrl
}) {
  // No need to declare the font faces if the font family has changed.
  if (fontFamily !== BaseStyles.defaultProps.fontFamily) {
    return '';
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
  `;
}

const BaseStyles = /*#__PURE__*/React.memo(function BaseStyles(props) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(GlobalStyle, _extends({}, props, {
    theme: theme,
    fontFaces: fontFaceDeclarations(props),
    textStyleCss: textStyle('body2')
  }));
});
BaseStyles.propTypes = {
  publicUrl: PropTypes.string,
  fontFamily: PropTypes.string
};
BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: `${DEFAULT_FONT_FAMILY}, sans-serif`
};
const GlobalStyle = createGlobalStyle(["", " *,*:before,*:after{box-sizing:border-box;}html{-webkit-overflow-scrolling:touch;}body{height:0;min-height:100vh;color:", ";background:", ";font-family:", ";", ";}html,body{overflow:hidden;}body,ul,p,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}button,select,input,textarea,h1,h2,h3,h4,h5,h6{font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}a,button,select,input,textarea{color:inherit;}strong,b{font-weight:600;}::selection{background:", ";color:", ";}"], p => p.fontFaces ? p.fontFaces : '', p => p.theme.content, p => p.theme.background, p => p.fontFamily, p => p.textStyleCss, p => p.theme.selected, p => p.theme.selectedContent);
var BaseStyles$1 = PublicUrl.hocWrap(BaseStyles);

export { BaseStyles$1 as default };
//# sourceMappingURL=BaseStyles.js.map
