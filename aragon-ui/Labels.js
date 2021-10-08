'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var consts = require('./consts.js');
var ButtonBase = require('./ButtonBase.js');
var IconCalendar = require('./IconCalendar.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./IconPropTypes-b9997416.js');
require('./index-c33eeeef.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Labels___StyledDiv",
  componentId: "sc-1is9uv6-0"
})(["position:relative;width:", "px;display:flex;justify-content:space-between;align-items:center;padding:7px 6px;border:", "px solid ", ";border-radius:", "px;background:", ";overflow:hidden;cursor:pointer;&:active{border-color:", ";}&:focus{outline:none;}"], function (p) {
  return p._css;
}, consts.INPUT_BORDER, function (p) {
  return p._css2;
}, constants.RADIUS, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "Labels___StyledDiv2",
  componentId: "sc-1is9uv6-1"
})(["display:flex;flex:1;justify-content:space-around;align-items:center;"]);

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "Labels___StyledDiv3",
  componentId: "sc-1is9uv6-2"
})(["color:", ";text-align:center;", ""], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv4 = _styled__default['default']("div").withConfig({
  displayName: "Labels___StyledDiv4",
  componentId: "sc-1is9uv6-3"
})(["color:", ";font-size:13px;"], function (p) {
  return p._css7;
});

var _StyledDiv5 = _styled__default['default']("div").withConfig({
  displayName: "Labels___StyledDiv5",
  componentId: "sc-1is9uv6-4"
})(["color:", ";text-align:center;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledDiv6 = _styled__default['default']("div").withConfig({
  displayName: "Labels___StyledDiv6",
  componentId: "sc-1is9uv6-5"
})(["display:flex;padding:0 4px 0 10px;"]);

var _StyledIconCalendar = _styled__default['default'](IconCalendar['default']).withConfig({
  displayName: "Labels___StyledIconCalendar",
  componentId: "sc-1is9uv6-6"
})(["color:", ";"], function (p) {
  return p._css10;
});

var Labels = /*#__PURE__*/React.forwardRef(function Labels(_ref, ref) {
  var enabled = _ref.enabled,
      startText = _ref.startText,
      endText = _ref.endText,
      hasSetDates = _ref.hasSetDates,
      onClick = _ref.onClick,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["enabled", "startText", "endText", "hasSetDates", "onClick"]);

  var theme = Theme.useTheme();
  var hasNoStart = startText === consts.START_DATE;
  var hasNoEnd = endText === consts.END_DATE;
  return /*#__PURE__*/React__default['default'].createElement(ButtonBase['default'], {
    focusRingRadius: constants.RADIUS,
    ref: ref,
    onClick: onClick
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 27.5 * constants.GU,
    _css2: hasSetDates ? theme.accent : theme.border,
    _css3: theme.surface,
    _css4: theme.controlBorderPressed
  }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, null, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css5: hasNoStart ? theme.hint : 'inherit',
    _css6: textStyles.textStyle(hasNoStart ? 'body2' : 'body3')
  }, startText), /*#__PURE__*/React__default['default'].createElement(_StyledDiv4, {
    _css7: theme.hint.alpha(0.3)
  }, "|"), /*#__PURE__*/React__default['default'].createElement(_StyledDiv5, {
    _css8: hasNoEnd ? theme.hint : 'inherit',
    _css9: textStyles.textStyle(hasNoEnd ? 'body2' : 'body3')
  }, endText)), /*#__PURE__*/React__default['default'].createElement(_StyledDiv6, null, /*#__PURE__*/React__default['default'].createElement(_StyledIconCalendar, {
    _css10: enabled ? theme.accent : theme.surfaceIcon
  }))));
});
Labels.propTypes = {
  enabled: index.propTypes.bool,
  hasSetDates: index.propTypes.bool,
  onClick: index.propTypes.func,
  startText: index.propTypes.string.isRequired,
  endText: index.propTypes.string.isRequired
};

exports.default = Labels;
//# sourceMappingURL=Labels.js.map
