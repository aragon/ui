'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-316e1def.js');
var ButtonIcon = require('./ButtonIcon.js');
var Info = require('./Info.js');
var Link = require('./Link.js');
var Popover = require('./Popover.js');
var ProgressBar = require('./ProgressBar.js');
var Timer = require('./Timer.js');
var Theme = require('./Theme.js');
var IconCross = require('./IconCross.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var miscellaneous = require('./miscellaneous.js');
require('./defineProperty-3cad0327.js');
require('./index-37353731.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./Button.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./getPrototypeOf-55c9e80c.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./environment.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./web-46d746d6.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-07f851a6.js');
require('./springs.js');
require('./components.js');
require('./dayjs.min-ac79806e.js');
require('./date.js');
require('./IconClock.js');
require('./IconPropTypes-b9997416.js');
require('./Redraw-ec0ae004.js');
require('./getDisplayName-7f913e84.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledSection = _styled__default['default']("section").withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "vvbhu5-0"
})(["padding:", "px;"], function (p) {
  return p._css;
});

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "vvbhu5-1"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "vvbhu5-2"
})(["font-weight:600"]);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "vvbhu5-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "vvbhu5-4"
})(["", ";color:", ";"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledProgressBar = _styled__default['default'](ProgressBar['default']).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "vvbhu5-5"
})(["color:", ";"], function (p) {
  return p._css8;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "vvbhu5-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "vvbhu5-7"
})(["margin-right:", "px;"], function (p) {
  return p._css11;
});

var _StyledLink = _styled__default['default'](Link['default']).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "vvbhu5-8"
})(["text-decoration:none"]);

var TransactionProgress = /*#__PURE__*/React__default['default'].memo(function TransactionProgress(_ref) {
  var visible = _ref.visible,
      slow = _ref.slow,
      progress = _ref.progress,
      endTime = _ref.endTime,
      transactionHashUrl = _ref.transactionHashUrl,
      onClose = _ref.onClose,
      opener = _ref.opener;
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(Popover['default'], {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React__default['default'].createElement(_StyledSection, {
    _css: 2 * constants.GU
  }, /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    _css2: 1 * constants.GU,
    _css3: 1 * constants.GU
  }, /*#__PURE__*/React__default['default'].createElement(IconCross['default'], null)), /*#__PURE__*/React__default['default'].createElement(_StyledH, null, "Pending transaction"), /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css4: 2 * constants.GU,
    _css5: 1 * constants.GU
  }, /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    _css6: textStyles.textStyle('label2'),
    _css7: theme.contentSecondary
  }, "Estimated time:"), /*#__PURE__*/React__default['default'].createElement(Timer['default'], {
    format: "ms",
    end: endTime
  })), /*#__PURE__*/React__default['default'].createElement(_StyledProgressBar, {
    value: progress,
    _css8: theme.accent
  }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css9: slow ? 'space-between' : 'end',
    _css10: 2 * constants.GU
  }, slow && /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css11: 2 * constants.GU
  }, /*#__PURE__*/React__default['default'].createElement(Info['default'].Alert, null, "Slow transaction. Retry with more gas")), /*#__PURE__*/React__default['default'].createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Explorer"))));
});
TransactionProgress.propTypes = {
  endTime: proptypes.ExtendedPropTypes.instanceOf(Date),
  onClose: proptypes.ExtendedPropTypes.func,
  opener: proptypes.ExtendedPropTypes._element,
  progress: proptypes.ExtendedPropTypes.number,
  slow: proptypes.ExtendedPropTypes.bool,
  transactionHashUrl: proptypes.ExtendedPropTypes.string,
  visible: proptypes.ExtendedPropTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: miscellaneous.noop,
  visible: false
};

exports.default = TransactionProgress;
//# sourceMappingURL=TransactionProgress.js.map
