'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
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
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
var index$1 = require('./index-ecc57c9f.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');

var _StyledLi = _styled__default("li").withConfig({
  displayName: "Tab___StyledLi",
  componentId: "sc-1cgzd3b-0"
})(["list-style:none"]);

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
  displayName: "Tab___StyledButtonBase",
  componentId: "sc-1cgzd3b-1"
})(["", ";border-radius:0;transition:background 50ms ease-in-out;&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "Tab___StyledSpan",
  componentId: "sc-1cgzd3b-2"
})(["display:flex;position:relative;align-items:center;height:", "px;padding:0 ", "px;white-space:nowrap;color:", ";"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan2 = _styled__default("span").withConfig({
  displayName: "Tab___StyledSpan2",
  componentId: "sc-1cgzd3b-3"
})(["position:absolute;left:0;right:0;bottom:0;background:", ";height:2px;opacity:", ";transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:ease-in-out;transform:scale3d(1,", ",1);transform-origin:0 100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Tab(_ref) {
  var index = _ref.index,
      item = _ref.item,
      selected = _ref.selected,
      onChange = _ref.onChange;
  var theme = Theme.useTheme();

  var _useInside = index$1.o('SidePanel'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 1),
      insideSidePanel = _useInside2[0];

  var handleClick = React.useCallback(function () {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React__default.createElement(_StyledLi, null, /*#__PURE__*/React__default.createElement(_StyledButtonBase, {
    focusRingRadius: constants.RADIUS,
    onClick: handleClick,
    _css: textStyles.textStyle('body2'),
    _css2: theme.surfacePressed
  }, /*#__PURE__*/React__default.createElement(_StyledSpan, {
    _css3: 8 * constants.GU - (insideSidePanel ? 1 : 2),
    _css4: 3 * constants.GU,
    _css5: selected ? theme.surfaceContent : theme.surfaceContentSecondary
  }, item, /*#__PURE__*/React__default.createElement(_StyledSpan2, {
    _css6: theme.selected,
    _css7: Number(selected),
    _css8: Number(selected)
  }))));
}

Tab.propTypes = {
  index: index.PropTypes.number.isRequired,
  item: index.PropTypes.node.isRequired,
  onChange: index.PropTypes.func.isRequired,
  selected: index.PropTypes.bool.isRequired
};

exports.default = Tab;
//# sourceMappingURL=Tab.js.map
