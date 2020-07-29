import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './FocusVisible.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import './web-a351a0a1.js';
import './Checkbox.js';
import './RadioGroup.js';
import Radio from './Radio.js';

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

var RadioListItem = React.memo(function RadioListItem(_ref) {
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
  description: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.node.isRequired
};

export default RadioListItem;
//# sourceMappingURL=RadioListItem.js.map
