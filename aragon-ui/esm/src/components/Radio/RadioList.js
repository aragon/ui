import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import RadioGroup from './RadioGroup.js';
import RadioListItem from './RadioListItem.js';
import { GU } from '../../style/constants.js';
import { noop } from '../../utils/miscellaneous.js';

var _StyledH = _styled("h2").withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-1hkg1b7-0"
})(["margin-bottom:", "px;font-weight:600;"], function (p) {
  return p._css;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-1hkg1b7-1"
})(["margin-bottom:", "px;"], function (p) {
  return p._css2;
});

var _StyledRadioGroup = _styled(RadioGroup).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-1hkg1b7-2"
})(["display:flex;flex-direction:column;"]);

function RadioList(_ref) {
  var description = _ref.description,
      items = _ref.items,
      onChange = _ref.onChange,
      selected = _ref.selected,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ["description", "items", "onChange", "selected", "title"]);

  return /*#__PURE__*/React.createElement("div", props, title && /*#__PURE__*/React.createElement(_StyledH, {
    _css: 0.5 * GU
  }, title), description && /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: 2.5 * GU
  }, description), /*#__PURE__*/React.createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map(function (_ref2, i) {
    var description = _ref2.description,
        title = _ref2.title;
    return /*#__PURE__*/React.createElement(RadioListItem, {
      key: i,
      description: description,
      index: i,
      title: title
    });
  })));
}

RadioList.propTypes = {
  description: propTypes.node,
  items: propTypes.arrayOf(propTypes.shape({
    description: propTypes.node.isRequired,
    title: propTypes.node.isRequired
  })),
  onChange: propTypes.func,
  selected: function selected(_ref3, _, componentName) {
    var items = _ref3.items,
        _selected = _ref3.selected;

    if (!Number.isInteger(_selected) || _selected >= items.length) {
      throw new Error("Invalid prop `selected` supplied to `".concat(componentName, "`. ") + '`selected` must be an integer less than the length of `items`. ' + "Given ".concat(_selected, " instead."));
    }
  },
  title: propTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: noop,
  selected: 0
};

export default RadioList;
//# sourceMappingURL=RadioList.js.map
