import React$1 from 'react';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import ExtendedPropTypes from '../../proptypes.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "TableCell___StyledDiv",
  componentId: "sc-110j155-0"
})(["display:flex;align-items:center;justify-content:", ";"], function (p) {
  return p._css;
});

function ContentContainerDefault(_ref) {
  var align = _ref.align,
      props = objectWithoutProperties$1(_ref, ["align"]);

  return /*#__PURE__*/React$1.createElement(_StyledDiv, _extends_1({}, props, {
    _css: align === 'right' ? 'flex-end' : 'space-between'
  }));
}

ContentContainerDefault.propTypes = {
  align: ExtendedPropTypes.string
};

var _StyledTd = _styled$1("td").withConfig({
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
      props = objectWithoutProperties$1(_ref2, ["children", "contentContainer", "align"]);

  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledTd, _extends_1({}, props, {
    _css2: 2.5 * GU,
    _css3: theme.surface,
    _css4: align
  }), /*#__PURE__*/React$1.createElement(Container, {
    align: align
  }, children));
}

TableCell.propTypes = {
  align: ExtendedPropTypes.string,
  contentContainer: ExtendedPropTypes._component,
  children: ExtendedPropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: ContentContainerDefault
}; // Compatibility (not sure this is used at all?)

export default TableCell;
export { ContentContainerDefault as StyledTableCellContent };
//# sourceMappingURL=TableCell.js.map
