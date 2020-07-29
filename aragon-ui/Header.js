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
var index$1 = require('./index-ecc57c9f.js');
require('./isObject-ec755c87.js');
require('./Viewport-15101437.js');
var Layout = require('./Layout.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv",
  componentId: "euryjq-0"
})(["padding:", "px 0;background:", ";margin-bottom:", "px;box-shadow:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv2",
  componentId: "euryjq-1"
})(["display:flex;align-items:center;justify-content:space-between;height:", "px;padding:0 ", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv3 = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv3",
  componentId: "euryjq-2"
})(["display:flex;min-width:0;flex-shrink:1;flex-grow:1;margin-right:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv4 = _styled__default("div").withConfig({
  displayName: "Header___StyledDiv4",
  componentId: "euryjq-3"
})(["flex-shrink:0;"]);

function Header(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      children = _ref.children,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["primary", "secondary", "children"]);

  var theme = Theme.useTheme();

  var _useLayout = Layout.useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Header"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({}, props, {
    _css: fullWidth ? 0 : 3 * constants.GU,
    _css2: fullWidth ? theme.surface : 'none',
    _css3: fullWidth ? 2 * constants.GU : 0,
    _css4: fullWidth ? '0px 2px 3px rgba(0, 0, 0, 0.05)' : 'none'
  }), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css5: fullWidth ? 8 * constants.GU : 5 * constants.GU,
    _css6: fullWidth && !children ? 2 * constants.GU : 0
  }, children || /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Header:primary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv3, {
    _css7: secondary ? 2 * constants.GU : 0
  }, typeof primary === 'string' && primary ? /*#__PURE__*/React__default.createElement(Header.Title, null, primary) : primary)), /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Header:secondary"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv4, null, secondary))))));
}

Header.propTypes = {
  primary: index.PropTypes.node,
  secondary: index.PropTypes.node,
  children: index.PropTypes.node
};

var _StyledH = _styled__default("h1").withConfig({
  displayName: "Header___StyledH",
  componentId: "euryjq-4"
})(["color:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

Header.Title = function HeaderTitle(_ref2) {
  var children = _ref2.children,
      props = objectWithoutProperties._objectWithoutProperties(_ref2, ["children"]);

  var theme = Theme.useTheme();

  var _useLayout2 = Layout.useLayout(),
      layoutName = _useLayout2.layoutName;

  var fullWidth = layoutName === 'small';
  return /*#__PURE__*/React__default.createElement(_StyledH, _extends$1._extends({}, props, {
    _css8: theme.content,
    _css9: textStyles.textStyle(fullWidth ? 'title3' : 'title2')
  }), children);
};

Header.Title.propTypes = {
  children: index.PropTypes.node
};

exports.default = Header;
//# sourceMappingURL=Header.js.map
