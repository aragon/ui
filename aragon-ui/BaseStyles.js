'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var React = require('react');
var index = require('./index-37353731.js');
var _styled = require('styled-components');
var PublicUrl = require('./PublicUrl-a6067988.js');
var Theme = require('./Theme.js');
var font = require('./font.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./getPrototypeOf-55c9e80c.js');
require('./defineProperty-3cad0327.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var overpassMonoLightWoff2 = "3dd21d4f0d28fecb.woff2";

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

  return "\n    @font-face {\n      font-family: ".concat(font.DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['600']), ";\n      font-weight: 600;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['800']), ";\n      font-weight: 800;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(font.MONOSPACE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, MONOSPACE_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n  ");
}

var BaseStyles = /*#__PURE__*/React__default['default'].memo(function BaseStyles(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(GlobalStyle, _extends._extends_1({}, props, {
    theme: theme,
    fontFaces: fontFaceDeclarations(props),
    textStyleCss: textStyles.textStyle('body2')
  }));
});
BaseStyles.propTypes = {
  publicUrl: index.propTypes.string,
  fontFamily: index.propTypes.string
};
BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: "".concat(font.DEFAULT_FONT_FAMILY, ", sans-serif")
};
var GlobalStyle = _styled.createGlobalStyle(_templateObject(), function (p) {
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
var BaseStyles$1 = PublicUrl.PublicUrl.hocWrap(BaseStyles);

exports.default = BaseStyles$1;
//# sourceMappingURL=BaseStyles.js.map
