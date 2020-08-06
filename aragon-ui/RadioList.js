'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./components.js');
require('./css.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
var constants = require('./constants.js');
require('./springs.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./FocusVisible.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./web-d0294535.js');
require('./Checkbox.js');
var RadioGroup = require('./RadioGroup.js');
require('./Radio.js');
var RadioListItem = require('./RadioListItem.js');

var _StyledH = _styled__default("h2").withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-1hkg1b7-0"
})(["margin-bottom:", "px;font-weight:600;"], function (p) {
  return p._css;
});

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-1hkg1b7-1"
})(["margin-bottom:", "px;"], function (p) {
  return p._css2;
});

var _StyledRadioGroup = _styled__default(RadioGroup.default).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-1hkg1b7-2"
})(["display:flex;flex-direction:column;"]);

function RadioList(_ref) {
  var description = _ref.description,
      items = _ref.items,
      onChange = _ref.onChange,
      selected = _ref.selected,
      title = _ref.title,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["description", "items", "onChange", "selected", "title"]);

  return /*#__PURE__*/React__default.createElement("div", props, title && /*#__PURE__*/React__default.createElement(_StyledH, {
    _css: 0.5 * constants.GU
  }, title), description && /*#__PURE__*/React__default.createElement(_StyledDiv, {
    _css2: 2.5 * constants.GU
  }, description), /*#__PURE__*/React__default.createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map(function (_ref2, i) {
    var description = _ref2.description,
        title = _ref2.title;
    return /*#__PURE__*/React__default.createElement(RadioListItem.default, {
      key: i,
      description: description,
      index: i,
      title: title
    });
  })));
}

RadioList.propTypes = {
  description: index.propTypes.node,
  items: index.propTypes.arrayOf(index.propTypes.shape({
    description: index.propTypes.node.isRequired,
    title: index.propTypes.node.isRequired
  })),
  onChange: index.propTypes.func,
  selected: function selected(_ref3, _, componentName) {
    var items = _ref3.items,
        _selected = _ref3.selected;

    if (!Number.isInteger(_selected) || _selected >= items.length) {
      throw new Error("Invalid prop `selected` supplied to `".concat(componentName, "`. ") + '`selected` must be an integer less than the length of `items`. ' + "Given ".concat(_selected, " instead."));
    }
  },
  title: index.propTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: miscellaneous.noop,
  selected: 0
};

exports.default = RadioList;
//# sourceMappingURL=RadioList.js.map
