'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-19b0c963.js');
var _DataView = require('./DataView.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./Box.js');
require('./extends-5150c1f4.js');
require('./index-70e12149.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./Layout.js');
require('./Viewport-b495052b.js');
require('./defineProperty-fdbd3c46.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./Pagination.js');
require('./PaginationItem.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./PaginationSeparator.js');
require('./IconEllipsis.js');
require('./IconPropTypes-435c57cb.js');
require('./TableView.js');
require('./web-17920307.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Checkbox.js');
require('./springs.js');
require('./ToggleButton.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./IconUp.js');
require('./IconDown.js');
require('./OpenedSurfaceBorder.js');
require('./ListView.js');
require('./EmptyState.js');
require('./LoadingRing.js');
require('./Link.js');
require('./PublicUrl-dfca81a5.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Accordion = /*#__PURE__*/React__default["default"].memo(function Accordion({
  items,
  className,
  style,
  mode
}) {
  const fields = React.useMemo(() => [null], []);
  const renderEntry = React.useCallback(([row]) => [row], []);
  const renderEntryExpansion = React.useCallback(([_, expansion]) => /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, expansion), []);
  return /*#__PURE__*/React__default["default"].createElement(_DataView["default"], {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style,
    mode: mode
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: index.PropTypes.string,
  items: index.PropTypes.arrayOf(index.PropTypes.arrayOf(index.PropTypes.node)).isRequired,
  style: index.PropTypes.object,
  mode: index.PropTypes.oneOf(['adaptive', 'table', 'list'])
};

exports["default"] = Accordion;
//# sourceMappingURL=Accordion.js.map
