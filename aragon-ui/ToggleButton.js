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
require('./css.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./keycodes.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
var IconDown = require('./IconDown.js');
var IconUp = require('./IconUp.js');
require('./Button.js');
var ButtonIcon = require('./ButtonIcon.js');

var _StyledButtonIcon = _styled__default(ButtonIcon.default).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1fkpeh6-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], function (p) {
  return p._css;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1fkpeh6-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1fkpeh6-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function ToggleButton(_ref) {
  var onClick = _ref.onClick,
      opened = _ref.opened;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: constants.RADIUS,
    onClick: onClick,
    _css: theme.surfaceContentSecondary
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css2: opened ? 1 : 0,
    _css3: opened ? 1 : 0
  }, /*#__PURE__*/React__default.createElement(IconUp.default, {
    size: "small"
  })), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css4: opened ? -1 : 0,
    _css5: opened ? -1 : 0
  }, /*#__PURE__*/React__default.createElement(IconDown.default, {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: index.propTypes.func.isRequired,
  opened: index.propTypes.bool.isRequired
};

exports.ToggleButton = ToggleButton;
//# sourceMappingURL=ToggleButton.js.map
