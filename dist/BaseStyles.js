'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var index = require('./index-19b0c963.js');
var _styled = require('styled-components');
var font = require('./font.js');
var PublicUrl = require('./PublicUrl-dfca81a5.js');
var Theme = require('./Theme.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./environment.js');
require('./miscellaneous.js');
require('./defineProperty-fdbd3c46.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var overpassMonoLightWoff2 = "3dd21d4f0d28fecb.woff2";

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
      font-family: ${font.DEFAULT_FONT_FAMILY};
      src: ${fontSrc(publicUrl, DEFAULT_FONTS['400'])};
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: ${font.DEFAULT_FONT_FAMILY};
      src: ${fontSrc(publicUrl, DEFAULT_FONTS['600'])};
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: ${font.DEFAULT_FONT_FAMILY};
      src: ${fontSrc(publicUrl, DEFAULT_FONTS['800'])};
      font-weight: 800;
      font-style: normal;
    }
    @font-face {
      font-family: ${font.MONOSPACE_FONT_FAMILY};
      src: ${fontSrc(publicUrl, MONOSPACE_FONTS['400'])};
      font-weight: 400;
      font-style: normal;
    }
  `;
}

const BaseStyles = /*#__PURE__*/React__default["default"].memo(function BaseStyles(props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(GlobalStyle, _extends._extends({}, props, {
    theme: theme,
    fontFaces: fontFaceDeclarations(props),
    textStyleCss: textStyles.textStyle('body2')
  }));
});
BaseStyles.propTypes = {
  publicUrl: index.PropTypes.string,
  fontFamily: index.PropTypes.string
};
BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: `${font.DEFAULT_FONT_FAMILY}, sans-serif`
};
const GlobalStyle = _styled.createGlobalStyle(["", " *,*:before,*:after{box-sizing:border-box;}html{-webkit-overflow-scrolling:touch;}body{height:0;min-height:100vh;color:", ";background:", ";font-family:", ";", ";}html,body{overflow:hidden;}body,ul,p,h1,h2,h3,h4,h5,h6{margin:0;padding:0;}button,select,input,textarea,h1,h2,h3,h4,h5,h6{font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}a,button,select,input,textarea{color:inherit;}strong,b{font-weight:600;}::selection{background:", ";color:", ";}"], p => p.fontFaces ? p.fontFaces : '', p => p.theme.content, p => p.theme.background, p => p.fontFamily, p => p.textStyleCss, p => p.theme.selected, p => p.theme.selectedContent);
var BaseStyles$1 = PublicUrl.PublicUrl.hocWrap(BaseStyles);

exports["default"] = BaseStyles$1;
//# sourceMappingURL=BaseStyles.js.map
