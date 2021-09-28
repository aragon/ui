'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var PaginationItem = require('./PaginationItem.js');
var PaginationSeparator = require('./PaginationSeparator.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./keycodes.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./IconEllipsis.js');
require('./IconPropTypes-435c57cb.js');
require('./index-70e12149.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function paginationItems(pages, selected) {
  const all = [...Array(pages)].map((_, i) => i);

  if (all.length < 6) {
    return all;
  }

  const first = 0;
  const last = all.length - 1;
  const prev = Math.min(all.length, Math.max(0, selected - 1));
  const next = Math.min(all.length, Math.max(0, selected + 1));
  const items = []; // Selected item + previous + next

  items.push(...all.slice(prev, next + 1)); // Display three items, even if the first / last one is selected

  if (selected === last) {
    items.unshift(last - 2);
  }

  if (selected === first) {
    items.push(first + 2);
  } // Ellipsises


  if (prev > first + 1) {
    items.unshift(-1);
  }

  if (next < last - 1) {
    items.push(-1);
  } // Always display the first & last items


  if (prev >= first + 1) {
    items.unshift(all[0]);
  }

  if (next <= last - 1) {
    items.push(all[all.length - 1]);
  }

  return items;
}

const Pagination = /*#__PURE__*/React__default["default"].memo(function Pagination({
  pages,
  selected,
  onChange,
  touchMode,
  ...props
}) {
  const items = paginationItems(pages, selected);
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: 2 * constants.GU,
    $_css2: 1 * constants.GU
  }), items.map((pageIndex, i) => pageIndex === -1 ? /*#__PURE__*/React__default["default"].createElement(PaginationSeparator.PaginationSeparator, {
    key: `separator-${i}`
  }) : /*#__PURE__*/React__default["default"].createElement(PaginationItem.PaginationItem, {
    key: pageIndex,
    index: pageIndex,
    selected: selected === pageIndex,
    onChange: onChange,
    touchMode: touchMode
  })));
});
Pagination.propTypes = {
  onChange: index.PropTypes.func,
  pages: index.PropTypes.number,
  selected: index.PropTypes.number,
  touchMode: index.PropTypes.bool
};
Pagination.defaultProps = {
  onChange: miscellaneous.noop,
  pages: 0,
  selected: 0,
  touchMode: false
};

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Pagination___StyledDiv",
  componentId: "sc-10i2kzw-0"
})(["display:flex;align-items:center;justify-content:center;padding:", "px 0;& > div + div{margin-left:", "px;}"], p => p.$_css, p => p.$_css2);

exports["default"] = Pagination;
//# sourceMappingURL=Pagination.js.map
