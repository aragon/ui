import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import { createGlobalStyle } from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import { DEFAULT_FONT_FAMILY, MONOSPACE_FONT_FAMILY } from './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import './getDisplayName-d5fc7707.js';
import { P as PublicUrl } from './index-edfeada6.js';
import { _ as _taggedTemplateLiteral } from './taggedTemplateLiteral-37fd5203.js';

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var overpassMonoLightWoff2 = "3dd21d4f0d28fecb.woff2";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  // @font-face declarations\n  ", "\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html {\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    height: 0;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    ", ";\n  }\n  html, body {\n    overflow: hidden;\n  }\n  body, ul, p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button, select, input, textarea, h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a, button, select, input, textarea {\n    color: inherit;\n  }\n  strong, b {\n    font-weight: 600;\n  }\n  ::selection {\n    background: ", ";\n    color: ", ";\n  }\n"]);

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

var BaseStyles = React.memo(function BaseStyles(props) {
  var theme = useTheme();
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
