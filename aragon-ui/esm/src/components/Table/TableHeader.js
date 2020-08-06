import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';

var _StyledTh = _styled$1("th").withConfig({
  displayName: "TableHeader___StyledTh",
  componentId: "sc-1qxm8cp-0"
})(["padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";white-space:nowrap;color:", ";", ";line-height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function TableHeader(_ref) {
  var title = _ref.title,
      align = _ref.align,
      props = objectWithoutProperties$1(_ref, ["title", "align"]);

  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledTh, _extends_1({}, props, {
    _css: align === 'left' ? 2.5 * GU + 1 : 0,
    _css2: align === 'right' ? 2.5 * GU + 1 : 0,
    _css3: align,
    _css4: theme.contentSecondary,
    _css5: textStyle('label2'),
    _css6: 4 * GU
  }), title);
}

TableHeader.propTypes = {
  title: propTypes.string,
  align: propTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

export default TableHeader;
//# sourceMappingURL=TableHeader.js.map
