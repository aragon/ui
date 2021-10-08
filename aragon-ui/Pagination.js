'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var toConsumableArray = require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var PaginationItem = require('./PaginationItem.js');
var PaginationSeparator = require('./PaginationSeparator.js');
var miscellaneous = require('./miscellaneous.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./ButtonBase.js');
require('./slicedToArray-a8a77f0e.js');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
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
require('./IconPropTypes-b9997416.js');
require('./index-c33eeeef.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function paginationItems(pages, selected) {
  var all = toConsumableArray.toConsumableArray(Array(pages)).map(function (_, i) {
    return i;
  });

  if (all.length < 6) {
    return all;
  }

  var first = 0;
  var last = all.length - 1;
  var prev = Math.min(all.length, Math.max(0, selected - 1));
  var next = Math.min(all.length, Math.max(0, selected + 1));
  var items = []; // Selected item + previous + next

  items.push.apply(items, toConsumableArray.toConsumableArray(all.slice(prev, next + 1))); // Display three items, even if the first / last one is selected

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

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Pagination___StyledDiv",
  componentId: "sc-10i2kzw-0"
})(["display:flex;align-items:center;justify-content:center;padding:", "px 0;& > div + div{margin-left:", "px;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var Pagination = /*#__PURE__*/React__default['default'].memo(function Pagination(_ref) {
  var pages = _ref.pages,
      selected = _ref.selected,
      onChange = _ref.onChange,
      touchMode = _ref.touchMode,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["pages", "selected", "onChange", "touchMode"]);

  var items = paginationItems(pages, selected);
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends_1({}, props, {
    _css: 2 * constants.GU,
    _css2: 1 * constants.GU
  }), items.map(function (pageIndex, i) {
    return pageIndex === -1 ? /*#__PURE__*/React__default['default'].createElement(PaginationSeparator.PaginationSeparator, {
      key: "separator-".concat(i)
    }) : /*#__PURE__*/React__default['default'].createElement(PaginationItem.PaginationItem, {
      key: pageIndex,
      index: pageIndex,
      selected: selected === pageIndex,
      onChange: onChange,
      touchMode: touchMode
    });
  }));
});
Pagination.propTypes = {
  onChange: index.propTypes.func,
  pages: index.propTypes.number,
  selected: index.propTypes.number,
  touchMode: index.propTypes.bool
};
Pagination.defaultProps = {
  onChange: miscellaneous.noop,
  pages: 0,
  selected: 0,
  touchMode: false
};

exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map
