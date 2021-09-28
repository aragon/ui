'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-2243b0d5.js');
var ButtonIcon = require('./ButtonIcon.js');
var Info = require('./Info.js');
var Link = require('./Link.js');
var Popover = require('./Popover.js');
var ProgressBar = require('./ProgressBar.js');
var Timer = require('./Timer.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./index-19b0c963.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./Button.js');
require('./index-70e12149.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-6628d0a4.js');
require('./components.js');
require('./springs.js');
require('./dayjs.min-cee6ef8e.js');
require('./date.js');
require('./Redraw-ed2990f7.js');
require('./getDisplayName-7f913e84.js');
require('./IconClock.js');
require('./IconPropTypes-435c57cb.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TransactionProgress = /*#__PURE__*/React__default["default"].memo(function TransactionProgress({
  visible,
  slow,
  progress,
  endTime,
  transactionHashUrl,
  onClose,
  opener
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Popover["default"], {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSection, {
    $_css: 2 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    $_css2: 1 * constants.GU,
    $_css3: 1 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(IconCross["default"], null)), /*#__PURE__*/React__default["default"].createElement(_StyledH, null, "Pending transaction"), /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css4: 2 * constants.GU,
    $_css5: 1 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    $_css6: textStyles.textStyle('label2'),
    $_css7: theme.contentSecondary
  }, "Estimated time:"), /*#__PURE__*/React__default["default"].createElement(Timer["default"], {
    format: "ms",
    end: endTime
  })), /*#__PURE__*/React__default["default"].createElement(_StyledProgressBar, {
    value: progress,
    $_css8: theme.accent
  }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css9: slow ? 'space-between' : 'end',
    $_css10: 2 * constants.GU
  }, slow && /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
    $_css11: 2 * constants.GU
  }, /*#__PURE__*/React__default["default"].createElement(Info["default"].Alert, null, "Slow transaction. Retry with more gas")), /*#__PURE__*/React__default["default"].createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Etherscan"))));
});
TransactionProgress.propTypes = {
  endTime: proptypes.PropTypes.instanceOf(Date),
  onClose: proptypes.PropTypes.func,
  opener: proptypes.PropTypes._element,
  progress: proptypes.PropTypes.number,
  slow: proptypes.PropTypes.bool,
  transactionHashUrl: proptypes.PropTypes.string,
  visible: proptypes.PropTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: miscellaneous.noop,
  visible: false
};

var _StyledSection = _styled__default["default"]("section").withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "sc-vvbhu5-0"
})(["padding:", "px;"], p => p.$_css);

var _StyledButtonIcon = _styled__default["default"](ButtonIcon["default"]).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "sc-vvbhu5-1"
})(["position:absolute;top:", "px;right:", "px;"], p => p.$_css2, p => p.$_css3);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "sc-vvbhu5-2"
})(["font-weight:600"]);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "sc-vvbhu5-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], p => p.$_css4, p => p.$_css5);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "sc-vvbhu5-4"
})(["", ";color:", ";"], p => p.$_css6, p => p.$_css7);

var _StyledProgressBar = _styled__default["default"](ProgressBar["default"]).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "sc-vvbhu5-5"
})(["color:", ";"], p => p.$_css8);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "sc-vvbhu5-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], p => p.$_css9, p => p.$_css10);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "sc-vvbhu5-7"
})(["margin-right:", "px;"], p => p.$_css11);

var _StyledLink = _styled__default["default"](Link["default"]).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "sc-vvbhu5-8"
})(["text-decoration:none"]);

exports["default"] = TransactionProgress;
//# sourceMappingURL=TransactionProgress.js.map
