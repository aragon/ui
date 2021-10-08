'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

var fieldId = 1;

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Field___StyledDiv",
  componentId: "uqte4v-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
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

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "Field___StyledSpan",
  componentId: "uqte4v-2"
})(["color:", ";"], function (p) {
  return p._css6;
});

function Field(_ref) {
  var children = _ref.children,
      label = _ref.label,
      required = _ref.required,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "label", "required"]);

  var theme = Theme.useTheme();
  var isRequired = required || React__default['default'].Children.toArray(children).some(function (_ref2) {
    var props = _ref2.props;
    return props && props.required;
  });
  var id = React.useMemo(function () {
    return typeof children === 'function' ? "Field_".concat(fieldId++) : null;
  }, [children]);
  var labelProps = id === null ? {} : {
    htmlFor: id
  };
  return /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "Field"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 3 * constants.GU
  }), /*#__PURE__*/React__default['default'].createElement("label", labelProps, /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css2: 2 * constants.GU,
    _css3: 0.5 * constants.GU,
    _css4: theme.surfaceContentSecondary,
    _css5: textStyles.textStyle('label2')
  }, /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "Field:label"
  }, label, isRequired && /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    title: "Required",
    _css6: theme.accent
  }, "\xA0*"))), /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id: id
  }) : children))));
}

Field.propTypes = {
  children: index$1.propTypes.oneOfType([index$1.propTypes.node, index$1.propTypes.func]),
  label: index$1.propTypes.node,
  required: index$1.propTypes.bool
};

exports.default = Field;
//# sourceMappingURL=Field.js.map
