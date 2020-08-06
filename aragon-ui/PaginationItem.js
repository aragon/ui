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
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
  displayName: "PaginationItem___StyledButtonBase",
  componentId: "kftpwz-0"
})(["width:", "px;height:", "px;color:", ";border-radius:", "px;&:active{background:", ";}", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, constants.RADIUS, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "PaginationItem___StyledSpan",
  componentId: "kftpwz-1"
})(["position:relative;top:1px;"]);

function PaginationItem(_ref) {
  var touchMode = _ref.touchMode,
      selected = _ref.selected,
      index = _ref.index,
      onChange = _ref.onChange;
  var theme = Theme.useTheme();
  var handleClick = React.useCallback(function () {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(_StyledButtonBase, {
    onClick: handleClick,
    focusRingRadius: constants.RADIUS,
    disabled: selected,
    _css: (touchMode ? 4 : 3) * constants.GU,
    _css2: (touchMode ? 4 : 3) * constants.GU,
    _css3: theme.surfaceContent,
    _css4: theme.surfacePressed,
    _css5: selected && _styled.css(["&&{background:", ";color:", ";}"], theme.accent, theme.accentContent)
  }, /*#__PURE__*/React__default.createElement(_StyledSpan, null, index + 1)));
}

PaginationItem.propTypes = {
  index: index.propTypes.number.isRequired,
  onChange: index.propTypes.func.isRequired,
  selected: index.propTypes.bool.isRequired,
  touchMode: index.propTypes.bool.isRequired
};

exports.PaginationItem = PaginationItem;
//# sourceMappingURL=PaginationItem.js.map
