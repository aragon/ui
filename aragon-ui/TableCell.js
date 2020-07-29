'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var proptypes = require('./proptypes-5b34673d.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "TableCell___StyledDiv",
  componentId: "sc-110j155-0"
})(["display:flex;align-items:center;justify-content:", ";"], function (p) {
  return p._css;
});

function ContentContainerDefault(_ref) {
  var align = _ref.align,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["align"]);

  return /*#__PURE__*/React__default.createElement(_StyledDiv, _extends$1._extends({}, props, {
    _css: align === 'right' ? 'flex-end' : 'space-between'
  }));
}

ContentContainerDefault.propTypes = {
  align: proptypes.PropTypes.string
};

var _StyledTd = _styled__default("td").withConfig({
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
      props = objectWithoutProperties._objectWithoutProperties(_ref2, ["children", "contentContainer", "align"]);

  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledTd, _extends$1._extends({}, props, {
    _css2: 2.5 * constants.GU,
    _css3: theme.surface,
    _css4: align
  }), /*#__PURE__*/React__default.createElement(Container, {
    align: align
  }, children));
}

TableCell.propTypes = {
  align: proptypes.PropTypes.string,
  contentContainer: proptypes.PropTypes._component,
  children: proptypes.PropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: ContentContainerDefault
}; // Compatibility (not sure this is used at all?)

exports.StyledTableCellContent = ContentContainerDefault;
exports.default = TableCell;
//# sourceMappingURL=TableCell.js.map
