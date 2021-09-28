'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Distribution({
  colors,
  showLegend,
  heading,
  itemTitle,
  renderLegendItem: LegendItem,
  renderFullLegendItem: FullLegendItem,
  items
}) {
  const theme = Theme.useTheme();

  if (!colors) {
    colors = [theme.blue, theme.red, theme.brown, theme.yellow, theme.purple, theme.green];
  }

  const total = items.reduce((total, {
    percentage
  }) => total + percentage, 0); // Sort by percentage

  items = items.sort((a, b) => b.percentage - a.percentage);
  return /*#__PURE__*/React__default["default"].createElement("section", null, heading && /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
    $_css: 1 * constants.GU
  }, typeof heading === 'string' ? /*#__PURE__*/React__default["default"].createElement(_StyledH, {
    $_css2: textStyles.textStyle('body2')
  }, heading) : heading), /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css3: 1 * constants.GU
  }, items.map(({
    item,
    percentage
  }, index) => /*#__PURE__*/React__default["default"].createElement("div", {
    key: index,
    title: itemTitle({
      item,
      percentage,
      index
    }),
    style: {
      width: `${percentage / total * 100}%`,
      background: colors[index % colors.length]
    }
  }))), showLegend && /*#__PURE__*/React__default["default"].createElement(_StyledUl, {
    $_css4: 3 * constants.GU
  }, items.map(({
    item,
    percentage
  }, index) => {
    const color = colors[index % colors.length];
    return /*#__PURE__*/React__default["default"].createElement(_StyledLi, {
      key: index
    }, FullLegendItem ? /*#__PURE__*/React__default["default"].createElement(FullLegendItem, {
      bullet: /*#__PURE__*/React__default["default"].createElement(Bullet, {
        color: color
      }),
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, null, /*#__PURE__*/React__default["default"].createElement(Bullet, {
      color: color
    }), /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, null, /*#__PURE__*/React__default["default"].createElement(LegendItem, {
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }))), /*#__PURE__*/React__default["default"].createElement(_StyledDiv5, {
      $_css5: 1 * constants.GU
    }, /*#__PURE__*/React__default["default"].createElement("strong", null, percentage, "%"))));
  })));
}

Distribution.propTypes = {
  colors: index.PropTypes.array,
  heading: index.PropTypes.node,
  itemTitle: index.PropTypes.func,
  renderLegendItem: index.PropTypes.func,
  renderFullLegendItem: index.PropTypes.func,
  showLegend: index.PropTypes.bool,
  items: index.PropTypes.arrayOf(index.PropTypes.shape({
    item: index.PropTypes.any.isRequired,
    percentage: index.PropTypes.number.isRequired
  })).isRequired
};
Distribution.defaultProps = {
  heading: null,
  itemTitle: ({
    item,
    percentage,
    index
  }) => {
    return `${typeof item === 'string' ? item : `Item ${index + 1}`}: ${percentage}%`;
  },
  renderLegendItem: ({
    item,
    percentage,
    index
  }) => {
    return typeof item === 'string' ? item : `Item ${index + 1}`;
  },
  showLegend: true
};
/* eslint-disable react/prop-types */

function Bullet({
  color
}) {
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv6, {
    style: {
      background: color
    },
    $_css6: 1 * constants.GU,
    $_css7: 1 * constants.GU,
    $_css8: 1 * constants.GU
  });
}

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "Distribution___StyledDiv",
  componentId: "sc-r4l1i4-0"
})(["margin-bottom:", "px;"], p => p.$_css);

var _StyledH = _styled__default["default"]("h1").withConfig({
  displayName: "Distribution___StyledH",
  componentId: "sc-r4l1i4-1"
})(["", ""], p => p.$_css2);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "Distribution___StyledDiv2",
  componentId: "sc-r4l1i4-2"
})(["display:flex;width:100%;overflow:hidden;margin:0 0 ", "px;border-radius:3px;div{height:6px;}"], p => p.$_css3);

var _StyledUl = _styled__default["default"]("ul").withConfig({
  displayName: "Distribution___StyledUl",
  componentId: "sc-r4l1i4-3"
})(["margin-top:", "px;"], p => p.$_css4);

var _StyledLi = _styled__default["default"]("li").withConfig({
  displayName: "Distribution___StyledLi",
  componentId: "sc-r4l1i4-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;list-style:none;"]);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "Distribution___StyledDiv3",
  componentId: "sc-r4l1i4-5"
})(["display:flex;align-items:center;flex-shrink:1;flex-grow:1;"]);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "Distribution___StyledDiv4",
  componentId: "sc-r4l1i4-6"
})(["width:0;flex-shrink:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);

var _StyledDiv5 = _styled__default["default"]("div").withConfig({
  displayName: "Distribution___StyledDiv5",
  componentId: "sc-r4l1i4-7"
})(["padding-left:", "px;flex-shrink:0;"], p => p.$_css5);

var _StyledDiv6 = _styled__default["default"]("div").withConfig({
  displayName: "Distribution___StyledDiv6",
  componentId: "sc-r4l1i4-8"
})(["width:", "px;height:", "px;margin-right:", "px;border-radius:50%;flex-shrink:0;"], p => p.$_css6, p => p.$_css7, p => p.$_css8);

exports["default"] = Distribution;
//# sourceMappingURL=Distribution.js.map
