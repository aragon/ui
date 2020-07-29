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
var environment = require('./environment.js');
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
require('./FocusVisible.js');
require('./ButtonBase.js');
require('./getDisplayName-7ab6d318.js');
var index$2 = require('./index-bc84a358.js');
var Card = require('./Card.js');

var illustrationDefault = "48526b4ed811c6ff.png";

var _StyledCard = _styled__default(Card.default).withConfig({
  displayName: "EmptyStateCard___StyledCard",
  componentId: "ov2yly-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:", "px 1fr auto;height:", "px;padding:", "px;text-align:center;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv",
  componentId: "ov2yly-1"
})(["display:flex;justify-content:center;overflow:hidden;"]);

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv2",
  componentId: "ov2yly-2"
})(["color:", ";", ";"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var EmptyStateCard = React__default.memo(function EmptyStateCard(_ref) {
  var action = _ref.action,
      icon = _ref.icon,
      illustration = _ref.illustration,
      text = _ref.text,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["action", "icon", "illustration", "text"]);

  var theme = Theme.useTheme();
  var publicUrl = index$2.usePublicUrl();

  if (icon !== undefined) {
    environment.warnOnce('EmptyStateCard:icon', 'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.');

    if (illustration === undefined) {
      illustration = icon;
    }
  } // default illustration


  if (!illustration) {
    illustration = /*#__PURE__*/React__default.createElement("img", {
      src: publicUrl + illustrationDefault,
      alt: "",
      height: 20 * constants.GU
    });
  }

  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "EmptyStateCard"
  }, /*#__PURE__*/React__default.createElement(_StyledCard, _extends$1._extends({}, props, {
    _css: 20 * constants.GU,
    _css2: 42 * constants.GU,
    _css3: 2 * constants.GU
  }), /*#__PURE__*/React__default.createElement(_StyledDiv, null, illustration), /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css4: theme.surfaceContent,
    _css5: textStyles.textStyle('title4')
  }, text), /*#__PURE__*/React__default.createElement("div", null, action)));
});
EmptyStateCard.propTypes = {
  action: index.PropTypes.node,
  illustration: index.PropTypes.node,
  text: index.PropTypes.node.isRequired,
  // deprecated
  icon: index.PropTypes.node
};

exports.default = EmptyStateCard;
//# sourceMappingURL=EmptyStateCard.js.map
