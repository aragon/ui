import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import Radio from '../Input/Radio.js';
import { useTheme } from '../../theme/Theme2.js';
import { unselectable } from '../../utils/css.js';
import { GU } from '../../style/constants.js';

var _StyledLabel = _styled("label").withConfig({
  displayName: "RadioListItem___StyledLabel",
  componentId: "sc-1utxw89-0"
})(["display:flex;", ";& + &{margin-top:", "px;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledRadio = _styled(Radio).withConfig({
  displayName: "RadioListItem___StyledRadio",
  componentId: "sc-1utxw89-1"
})(["flex-shrink:0;"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "RadioListItem___StyledDiv",
  componentId: "sc-1utxw89-2"
})(["flex-grow:1;margin-left:12px;padding:12px 12px;border-radius:3px;transition:border 100ms ease-in-out;cursor:pointer;border:1px ", " solid;&:hover{border-color:", ";}"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "RadioListItem___StyledDiv2",
  componentId: "sc-1utxw89-3"
})(["margin-top:", "px;"], function (p) {
  return p._css5;
});

var RadioListItem = /*#__PURE__*/React.memo(function RadioListItem(_ref) {
  var description = _ref.description,
      index = _ref.index,
      title = _ref.title;
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledLabel, {
    _css: unselectable(),
    _css2: 1 * GU
  }, /*#__PURE__*/React.createElement(_StyledRadio, {
    id: index
  }), /*#__PURE__*/React.createElement(_StyledDiv, {
    _css3: theme.border,
    _css4: theme.accent.alpha(0.35)
  }, /*#__PURE__*/React.createElement("strong", null, title), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css5: 0.5 * GU
  }, description)));
});
RadioListItem.propTypes = {
  description: propTypes.node.isRequired,
  index: propTypes.number.isRequired,
  title: propTypes.node.isRequired
};

export default RadioListItem;
//# sourceMappingURL=RadioListItem.js.map
