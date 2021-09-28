'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var index$1 = require('./index-70e12149.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

let fieldId = 1;

function Field({
  children,
  label,
  required,
  ...props
}) {
  const theme = Theme.useTheme();
  const isRequired = required || React__default["default"].Children.toArray(children).some(({
    props
  }) => props && props.required);
  const id = React.useMemo(() => typeof children === 'function' ? `Field_${fieldId++}` : null, [children]);
  const labelProps = id === null ? {} : {
    htmlFor: id
  };
  return /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Field"
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: 3 * constants.GU
  }), /*#__PURE__*/React__default["default"].createElement("label", labelProps, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css2: 2 * constants.GU,
    $_css3: 0.5 * constants.GU,
    $_css4: theme.surfaceContentSecondary,
    $_css5: textStyles.textStyle('label2')
  }, /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Field:label"
  }, label, isRequired && /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
    title: "Required",
    $_css6: theme.accent
  }, '\u00a0*'))), /*#__PURE__*/React__default["default"].createElement(index$1.i, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id
  }) : children))));
}

Field.propTypes = {
  children: index.PropTypes.oneOfType([index.PropTypes.node, index.PropTypes.func]),
  label: index.PropTypes.node,
  required: index.PropTypes.bool
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Field___StyledDiv",
  componentId: "sc-uqte4v-0"
})(["margin-bottom:", "px;"], p => p.$_css);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Field___StyledDiv2",
  componentId: "sc-uqte4v-1"
})(["display:flex;align-items:center;height:", "px;margin-bottom:", "px;color:", ";white-space:nowrap;", ";", ";"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, css.unselectable);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Field___StyledSpan",
  componentId: "sc-uqte4v-2"
})(["color:", ";"], p => p.$_css6);

exports["default"] = Field;
//# sourceMappingURL=Field.js.map
