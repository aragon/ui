'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');

var _StyledTh = _styled__default("th").withConfig({
  displayName: "TableHeader___StyledTh",
  componentId: "sc-1qxm8cp-0"
})(["padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";white-space:nowrap;color:", ";", ";line-height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function TableHeader(_ref) {
  var title = _ref.title,
      align = _ref.align,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["title", "align"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledTh, _extends$1._extends_1({}, props, {
    _css: align === 'left' ? 2.5 * constants.GU + 1 : 0,
    _css2: align === 'right' ? 2.5 * constants.GU + 1 : 0,
    _css3: align,
    _css4: theme.contentSecondary,
    _css5: textStyles.textStyle('label2'),
    _css6: 4 * constants.GU
  }), title);
}

TableHeader.propTypes = {
  title: index.propTypes.string,
  align: index.propTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

exports.default = TableHeader;
//# sourceMappingURL=TableHeader.js.map
