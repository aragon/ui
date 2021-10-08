import taggedTemplateLiteral from '../../../node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { createGlobalStyle } from 'styled-components';
import overpassLightWoff2 from './assets/overpass/overpass-light.woff2.js';
import overpassRegularWoff2 from './assets/overpass/overpass-regular.woff2.js';
import overpassSemiBoldWoff2 from './assets/overpass/overpass-semibold.woff2.js';
import overpassMonoLightWoff2 from './assets/overpass-mono/overpass-mono-light.woff2.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { useTheme } from '../../theme/Theme2.js';
import { DEFAULT_FONT_FAMILY, MONOSPACE_FONT_FAMILY } from '../../utils/font.js';
import { textStyle } from '../../style/text-styles.js';

function _templateObject() {
  var data = taggedTemplateLiteral(["\n\n  // @font-face declarations\n  ", "\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html {\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    height: 0;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    ", ";\n  }\n  html, body {\n    overflow: hidden;\n  }\n  body, ul, p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button, select, input, textarea, h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a, button, select, input, textarea {\n    color: inherit;\n  }\n  strong, b {\n    font-weight: 600;\n  }\n  ::selection {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var DEFAULT_FONTS = {
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
var MONOSPACE_FONTS = {
  '400': {
    url: overpassMonoLightWoff2,
    format: 'woff2'
  }
};

function fontSrc(publicUrl, _ref) {
  var url = _ref.url,
      format = _ref.format;
  return "url(".concat(publicUrl + url, ") format('").concat(format, "')");
}

function fontFaceDeclarations(_ref2) {
  var fontFamily = _ref2.fontFamily,
      publicUrl = _ref2.publicUrl;

  // No need to declare the font faces if the font family has changed.
  if (fontFamily !== BaseStyles.defaultProps.fontFamily) {
    return '';
  }

  return "\n    @font-face {\n      font-family: ".concat(DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['600']), ";\n      font-weight: 600;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['800']), ";\n      font-weight: 800;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(MONOSPACE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, MONOSPACE_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n  ");
}

var BaseStyles = /*#__PURE__*/React.memo(function BaseStyles(props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(GlobalStyle, _extends_1({}, props, {
    theme: theme,
    fontFaces: fontFaceDeclarations(props),
    textStyleCss: textStyle('body2')
  }));
});
BaseStyles.propTypes = {
  publicUrl: propTypes.string,
  fontFamily: propTypes.string
};
BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: "".concat(DEFAULT_FONT_FAMILY, ", sans-serif")
};
var GlobalStyle = createGlobalStyle(_templateObject(), function (p) {
  return p.fontFaces ? p.fontFaces : '';
}, function (p) {
  return p.theme.content;
}, function (p) {
  return p.theme.background;
}, function (p) {
  return p.fontFamily;
}, function (p) {
  return p.textStyleCss;
}, function (p) {
  return p.theme.selected;
}, function (p) {
  return p.theme.selectedContent;
});
var BaseStyles$1 = PublicUrl.hocWrap(BaseStyles);

export default BaseStyles$1;
//# sourceMappingURL=BaseStyles.js.map
