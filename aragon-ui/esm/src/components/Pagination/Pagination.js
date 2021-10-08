import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import toConsumableArray from '../../../node_modules/@babel/runtime/helpers/toConsumableArray.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { PaginationItem } from './PaginationItem.js';
import { PaginationSeparator } from './PaginationSeparator.js';
import { noop } from '../../utils/miscellaneous.js';
import { GU } from '../../style/constants.js';

function paginationItems(pages, selected) {
  var all = toConsumableArray(Array(pages)).map(function (_, i) {
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

  items.push.apply(items, toConsumableArray(all.slice(prev, next + 1))); // Display three items, even if the first / last one is selected

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

var _StyledDiv = _styled("div").withConfig({
  displayName: "Pagination___StyledDiv",
  componentId: "sc-10i2kzw-0"
})(["display:flex;align-items:center;justify-content:center;padding:", "px 0;& > div + div{margin-left:", "px;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var Pagination = /*#__PURE__*/React.memo(function Pagination(_ref) {
  var pages = _ref.pages,
      selected = _ref.selected,
      onChange = _ref.onChange,
      touchMode = _ref.touchMode,
      props = objectWithoutProperties(_ref, ["pages", "selected", "onChange", "touchMode"]);

  var items = paginationItems(pages, selected);
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: 2 * GU,
    _css2: 1 * GU
  }), items.map(function (pageIndex, i) {
    return pageIndex === -1 ? /*#__PURE__*/React.createElement(PaginationSeparator, {
      key: "separator-".concat(i)
    }) : /*#__PURE__*/React.createElement(PaginationItem, {
      key: pageIndex,
      index: pageIndex,
      selected: selected === pageIndex,
      onChange: onChange,
      touchMode: touchMode
    });
  }));
});
Pagination.propTypes = {
  onChange: propTypes.func,
  pages: propTypes.number,
  selected: propTypes.number,
  touchMode: propTypes.bool
};
Pagination.defaultProps = {
  onChange: noop,
  pages: 0,
  selected: 0,
  touchMode: false
};

export default Pagination;
//# sourceMappingURL=Pagination.js.map
