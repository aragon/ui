'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
var font = require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
require('./getDisplayName-7ab6d318.js');
var index$2 = require('./index-bc84a358.js');
var taggedTemplateLiteral = require('./taggedTemplateLiteral-227ed122.js');

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var overpassMonoLightWoff2 = "3dd21d4f0d28fecb.woff2";

function _templateObject() {
  var data = taggedTemplateLiteral._taggedTemplateLiteral(["\n\n  // @font-face declarations\n  ", "\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html {\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    height: 0;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    ", ";\n  }\n  html, body {\n    overflow: hidden;\n  }\n  body, ul, p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button, select, input, textarea, h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a, button, select, input, textarea {\n    color: inherit;\n  }\n  strong, b {\n    font-weight: 600;\n  }\n  ::selection {\n    background: ", ";\n    color: ", ";\n  }\n"]);

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

var BaseStyles = React__default.memo(function BaseStyles(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(GlobalStyle, _extends$1._extends({}, props, {
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
var BaseStyles$1 = index$2.PublicUrl.hocWrap(BaseStyles);

exports.default = BaseStyles$1;
//# sourceMappingURL=BaseStyles.js.map
