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
import './css.js';
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
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import { i } from './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import './Viewport-cc7debfb.js';
import { useLayout } from './Layout.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-19nz0vo-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-19nz0vo-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Split___StyledDiv3",
  componentId: "sc-19nz0vo-2"
})(["display:", ";padding-bottom:", "px;width:100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

function Split(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      invert = _ref.invert;

  var _useLayout = useLayout(),
      layout = _useLayout.name;

  var oneColumn = layout === 'small' || layout === 'medium';
  var inverted = !oneColumn && invert === 'horizontal' || oneColumn && invert === 'vertical';
  var primaryContent = /*#__PURE__*/React.createElement(i, {
    name: "Split:primary"
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: !oneColumn && inverted ? 2 * GU : 0,
    _css2: oneColumn && inverted ? 2 * GU : 0
  }, primary));
  var secondaryContent = /*#__PURE__*/React.createElement(i, {
    name: "Split:secondary"
  }, /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css3: oneColumn ? '100%' : "".concat(33 * GU, "px"),
    _css4: !oneColumn && !inverted ? 2 * GU : 0,
    _css5: oneColumn && !inverted ? 2 * GU : 0
  }, secondary));
  return /*#__PURE__*/React.createElement(i, {
    name: "Split"
  }, /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css6: oneColumn ? 'block' : 'flex',
    _css7: 3 * GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: PropTypes.node,
  secondary: PropTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

export default Split;
export { Split };
//# sourceMappingURL=Split.js.map
