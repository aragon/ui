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
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
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
  index: index.PropTypes.number.isRequired,
  onChange: index.PropTypes.func.isRequired,
  selected: index.PropTypes.bool.isRequired,
  touchMode: index.PropTypes.bool.isRequired
};

exports.PaginationItem = PaginationItem;
//# sourceMappingURL=PaginationItem.js.map
