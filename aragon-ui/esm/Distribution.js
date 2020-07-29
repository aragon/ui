import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
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
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "Distribution___StyledDiv",
  componentId: "r4l1i4-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledH = _styled("h1").withConfig({
  displayName: "Distribution___StyledH",
  componentId: "r4l1i4-1"
})(["", ""], function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Distribution___StyledDiv2",
  componentId: "r4l1i4-2"
})(["display:flex;width:100%;overflow:hidden;margin:0 0 ", "px;border-radius:3px;div{height:6px;}"], function (p) {
  return p._css3;
});

var _StyledUl = _styled("ul").withConfig({
  displayName: "Distribution___StyledUl",
  componentId: "r4l1i4-3"
})(["margin-top:", "px;"], function (p) {
  return p._css4;
});

var _StyledLi = _styled("li").withConfig({
  displayName: "Distribution___StyledLi",
  componentId: "r4l1i4-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;list-style:none;"]);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "Distribution___StyledDiv3",
  componentId: "r4l1i4-5"
})(["display:flex;align-items:center;flex-shrink:1;flex-grow:1;"]);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "Distribution___StyledDiv4",
  componentId: "r4l1i4-6"
})(["width:0;flex-shrink:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);

var _StyledDiv5 = _styled("div").withConfig({
  displayName: "Distribution___StyledDiv5",
  componentId: "r4l1i4-7"
})(["padding-left:", "px;flex-shrink:0;"], function (p) {
  return p._css5;
});

function Distribution(_ref) {
  var colors = _ref.colors,
      showLegend = _ref.showLegend,
      heading = _ref.heading,
      itemTitle = _ref.itemTitle,
      LegendItem = _ref.renderLegendItem,
      FullLegendItem = _ref.renderFullLegendItem,
      items = _ref.items;
  var theme = useTheme();

  if (!colors) {
    colors = [theme.blue, theme.red, theme.brown, theme.yellow, theme.purple, theme.green];
  }

  var total = items.reduce(function (total, _ref2) {
    var percentage = _ref2.percentage;
    return total + percentage;
  }, 0); // Sort by percentage

  items = items.sort(function (a, b) {
    return b.percentage - a.percentage;
  });
  return /*#__PURE__*/React.createElement("section", null, heading && /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: 1 * GU
  }, typeof heading === 'string' ? /*#__PURE__*/React.createElement(_StyledH, {
    _css2: textStyle('body2')
  }, heading) : heading), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css3: 1 * GU
  }, items.map(function (_ref3, index) {
    var item = _ref3.item,
        percentage = _ref3.percentage;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      title: itemTitle({
        item: item,
        percentage: percentage,
        index: index
      }),
      style: {
        width: "".concat(percentage / total * 100, "%"),
        background: colors[index % colors.length]
      }
    });
  })), showLegend && /*#__PURE__*/React.createElement(_StyledUl, {
    _css4: 3 * GU
  }, items.map(function (_ref4, index) {
    var item = _ref4.item,
        percentage = _ref4.percentage;
    var color = colors[index % colors.length];
    return /*#__PURE__*/React.createElement(_StyledLi, {
      key: index
    }, FullLegendItem ? /*#__PURE__*/React.createElement(FullLegendItem, {
      bullet: /*#__PURE__*/React.createElement(Bullet, {
        color: color
      }),
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_StyledDiv3, null, /*#__PURE__*/React.createElement(Bullet, {
      color: color
    }), /*#__PURE__*/React.createElement(_StyledDiv4, null, /*#__PURE__*/React.createElement(LegendItem, {
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }))), /*#__PURE__*/React.createElement(_StyledDiv5, {
      _css5: 1 * GU
    }, /*#__PURE__*/React.createElement("strong", null, percentage, "%"))));
  })));
}

Distribution.propTypes = {
  colors: PropTypes.array,
  heading: PropTypes.node,
  itemTitle: PropTypes.func,
  renderLegendItem: PropTypes.func,
  renderFullLegendItem: PropTypes.func,
  showLegend: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.any.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
};
Distribution.defaultProps = {
  heading: null,
  itemTitle: function itemTitle(_ref5) {
    var item = _ref5.item,
        percentage = _ref5.percentage,
        index = _ref5.index;
    return "".concat(typeof item === 'string' ? item : "Item ".concat(index + 1), ": ").concat(percentage, "%");
  },
  renderLegendItem: function renderLegendItem(_ref6) {
    var item = _ref6.item,
        percentage = _ref6.percentage,
        index = _ref6.index;
    return typeof item === 'string' ? item : "Item ".concat(index + 1);
  },
  showLegend: true
};
/* eslint-disable react/prop-types */

var _StyledDiv6 = _styled("div").withConfig({
  displayName: "Distribution___StyledDiv6",
  componentId: "r4l1i4-8"
})(["width:", "px;height:", "px;margin-right:", "px;border-radius:50%;flex-shrink:0;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Bullet(_ref7) {
  var color = _ref7.color;
  return /*#__PURE__*/React.createElement(_StyledDiv6, {
    style: {
      background: color
    },
    _css6: 1 * GU,
    _css7: 1 * GU,
    _css8: 1 * GU
  });
}

export default Distribution;
//# sourceMappingURL=Distribution.js.map
