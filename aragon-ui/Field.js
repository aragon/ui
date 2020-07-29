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
var css = require('./css.js');
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

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

var fieldId = 1;

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "Field___StyledDiv",
  componentId: "uqte4v-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2 = _styled__default("div").withConfig({
  displayName: "Field___StyledDiv2",
  componentId: "uqte4v-1"
})(["display:flex;align-items:center;height:", "px;margin-bottom:", "px;color:", ";white-space:nowrap;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, css.unselectable);

var _StyledSpan = _styled__default("span").withConfig({
  displayName: "Field___StyledSpan",
  componentId: "uqte4v-2"
})(["color:", ";"], function (p) {
  return p._css6;
});

function Field(_ref) {
  var children = _ref.children,
      label = _ref.label,
      required = _ref.required,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children", "label", "required"]);

  var theme = Theme.useTheme();
  var isRequired = required || React__default.Children.toArray(children).some(function (_ref2) {
    var props = _ref2.props;
    return props && props.required;
  });
  var id = React.useMemo(function () {
    return typeof children === 'function' ? "Field_".concat(fieldId++) : null;
  }, [children]);
  var labelProps = id === null ? {} : {
    htmlFor: id
  };
  return /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Field"
  }, /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({}, props, {
    _css: 3 * constants.GU
  }), /*#__PURE__*/React__default.createElement("label", labelProps, /*#__PURE__*/React__default.createElement(_StyledDiv2, {
    _css2: 2 * constants.GU,
    _css3: 0.5 * constants.GU,
    _css4: theme.surfaceContentSecondary,
    _css5: textStyles.textStyle('label2')
  }, /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Field:label"
  }, label, isRequired && /*#__PURE__*/React__default.createElement(_StyledSpan, {
    title: "Required",
    _css6: theme.accent
  }, "\xA0*"))), /*#__PURE__*/React__default.createElement(index$1.i, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id: id
  }) : children))));
}

Field.propTypes = {
  children: index.PropTypes.oneOfType([index.PropTypes.node, index.PropTypes.func]),
  label: index.PropTypes.node,
  required: index.PropTypes.bool
};

exports.default = Field;
//# sourceMappingURL=Field.js.map
