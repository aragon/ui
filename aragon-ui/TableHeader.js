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
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
var textStyles = require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

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
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["title", "align"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledTh, _extends$1._extends({}, props, {
    _css: align === 'left' ? 2.5 * constants.GU + 1 : 0,
    _css2: align === 'right' ? 2.5 * constants.GU + 1 : 0,
    _css3: align,
    _css4: theme.contentSecondary,
    _css5: textStyles.textStyle('label2'),
    _css6: 4 * constants.GU
  }), title);
}

TableHeader.propTypes = {
  title: index.PropTypes.string,
  align: index.PropTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

exports.default = TableHeader;
//# sourceMappingURL=TableHeader.js.map
