import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import './index-097535f1.js';
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
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import { P as PropTypes } from './proptypes-c8a77d05.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "TableCell___StyledDiv",
  componentId: "sc-110j155-0"
})(["display:flex;align-items:center;justify-content:", ";"], function (p) {
  return p._css;
});

function ContentContainerDefault(_ref) {
  var align = _ref.align,
      props = _objectWithoutProperties(_ref, ["align"]);

  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    _css: align === 'right' ? 'flex-end' : 'space-between'
  }));
}

ContentContainerDefault.propTypes = {
  align: PropTypes.string
};

var _StyledTd = _styled("td").withConfig({
  displayName: "TableCell___StyledTd",
  componentId: "sc-110j155-1"
})(["padding:", "px;background:", ";text-align:", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

function TableCell(_ref2) {
  var children = _ref2.children,
      Container = _ref2.contentContainer,
      align = _ref2.align,
      props = _objectWithoutProperties(_ref2, ["children", "contentContainer", "align"]);

  var theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledTd, _extends({}, props, {
    _css2: 2.5 * GU,
    _css3: theme.surface,
    _css4: align
  }), /*#__PURE__*/React.createElement(Container, {
    align: align
  }, children));
}

TableCell.propTypes = {
  align: PropTypes.string,
  contentContainer: PropTypes._component,
  children: PropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: ContentContainerDefault
}; // Compatibility (not sure this is used at all?)

export default TableCell;
export { ContentContainerDefault as StyledTableCellContent };
//# sourceMappingURL=TableCell.js.map
