import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { PaginationItem } from './PaginationItem.js';
import { PaginationSeparator } from './PaginationSeparator.js';
import { noop } from '../../utils/miscellaneous.js';
import { GU } from '../../style/constants.js';

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

const Pagination = /*#__PURE__*/React.memo(function Pagination({
  pages,
  selected,
  onChange,
  touchMode,
  ...props
}) {
  const items = paginationItems(pages, selected);
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: 2 * GU,
    $_css2: 1 * GU
  }), items.map((pageIndex, i) => pageIndex === -1 ? /*#__PURE__*/React.createElement(PaginationSeparator, {
    key: `separator-${i}`
  }) : /*#__PURE__*/React.createElement(PaginationItem, {
    key: pageIndex,
    index: pageIndex,
    selected: selected === pageIndex,
    onChange: onChange,
    touchMode: touchMode
  })));
});
Pagination.propTypes = {
  onChange: PropTypes.func,
  pages: PropTypes.number,
  selected: PropTypes.number,
  touchMode: PropTypes.bool
};
Pagination.defaultProps = {
  onChange: noop,
  pages: 0,
  selected: 0,
  touchMode: false
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Pagination___StyledDiv",
  componentId: "sc-10i2kzw-0"
})(["display:flex;align-items:center;justify-content:center;padding:", "px 0;& > div + div{margin-left:", "px;}"], p => p.$_css, p => p.$_css2);

export { Pagination as default };
//# sourceMappingURL=Pagination.js.map
