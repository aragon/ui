'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var RadioGroup = require('./RadioGroup.js');
var RadioListItem = require('./RadioListItem.js');
var constants = require('./constants.js');
var miscellaneous = require('./miscellaneous.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./defineProperty-fdbd3c46.js');
require('./components.js');
require('./Radio.js');
require('./Checkbox.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./FocusVisible.js');
require('./springs.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function RadioList({
  description,
  items,
  onChange,
  selected,
  title,
  ...props
}) {
  return /*#__PURE__*/React__default["default"].createElement("div", props, title && /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css: 0.5 * constants.GU
  }, title), description && /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css2: 2.5 * constants.GU
  }, description), /*#__PURE__*/React__default["default"].createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map(({
    description,
    title
  }, i) => /*#__PURE__*/React__default["default"].createElement(RadioListItem["default"], {
    key: i,
    description: description,
    index: i,
    title: title
  }))));
}

RadioList.propTypes = {
  description: index.PropTypes.node,
  items: index.PropTypes.arrayOf(index.PropTypes.shape({
    description: index.PropTypes.node.isRequired,
    title: index.PropTypes.node.isRequired
  })),
  onChange: index.PropTypes.func,
  selected: ({
    items,
    selected
  }, _, componentName) => {
    if (!Number.isInteger(selected) || selected >= items.length) {
      throw new Error(`Invalid prop \`selected\` supplied to \`${componentName}\`. ` + '`selected` must be an integer less than the length of `items`. ' + `Given ${selected} instead.`);
    }
  },
  title: index.PropTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: miscellaneous.noop,
  selected: 0
};

var _StyledH = _styled__default["default"]("h2").withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-1hkg1b7-0"
})(["margin-bottom:", "px;font-weight:600;"], p => p.$_css);

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-1hkg1b7-1"
})(["margin-bottom:", "px;"], p => p.$_css2);

var _StyledRadioGroup = _styled__default["default"](RadioGroup["default"]).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-1hkg1b7-2"
})(["display:flex;flex-direction:column;"]);

exports["default"] = RadioList;
//# sourceMappingURL=RadioList.js.map
