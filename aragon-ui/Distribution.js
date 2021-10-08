'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./defineProperty-3cad0327.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Distribution___StyledDiv",
  componentId: "r4l1i4-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "Distribution___StyledH",
  componentId: "r4l1i4-1"
})(["", ""], function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "Distribution___StyledDiv2",
  componentId: "r4l1i4-2"
})(["display:flex;width:100%;overflow:hidden;margin:0 0 ", "px;border-radius:3px;div{height:6px;}"], function (p) {
  return p._css3;
});

var _StyledUl = _styled__default['default']("ul").withConfig({
  displayName: "Distribution___StyledUl",
  componentId: "r4l1i4-3"
})(["margin-top:", "px;"], function (p) {
  return p._css4;
});

var _StyledLi = _styled__default['default']("li").withConfig({
  displayName: "Distribution___StyledLi",
  componentId: "r4l1i4-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;list-style:none;"]);

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "Distribution___StyledDiv3",
  componentId: "r4l1i4-5"
})(["display:flex;align-items:center;flex-shrink:1;flex-grow:1;"]);

var _StyledDiv4 = _styled__default['default']("div").withConfig({
  displayName: "Distribution___StyledDiv4",
  componentId: "r4l1i4-6"
})(["width:0;flex-shrink:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);

var _StyledDiv5 = _styled__default['default']("div").withConfig({
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
  var theme = Theme.useTheme();

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
  return /*#__PURE__*/React__default['default'].createElement("section", null, heading && /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css: 1 * constants.GU
  }, typeof heading === 'string' ? /*#__PURE__*/React__default['default'].createElement(_StyledH, {
    _css2: textStyles.textStyle('body2')
  }, heading) : heading), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css3: 1 * constants.GU
  }, items.map(function (_ref3, index) {
    var item = _ref3.item,
        percentage = _ref3.percentage;
    return /*#__PURE__*/React__default['default'].createElement("div", {
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
  })), showLegend && /*#__PURE__*/React__default['default'].createElement(_StyledUl, {
    _css4: 3 * constants.GU
  }, items.map(function (_ref4, index) {
    var item = _ref4.item,
        percentage = _ref4.percentage;
    var color = colors[index % colors.length];
    return /*#__PURE__*/React__default['default'].createElement(_StyledLi, {
      key: index
    }, FullLegendItem ? /*#__PURE__*/React__default['default'].createElement(FullLegendItem, {
      bullet: /*#__PURE__*/React__default['default'].createElement(Bullet, {
        color: color
      }),
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }) : /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, null, /*#__PURE__*/React__default['default'].createElement(Bullet, {
      color: color
    }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv4, null, /*#__PURE__*/React__default['default'].createElement(LegendItem, {
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }))), /*#__PURE__*/React__default['default'].createElement(_StyledDiv5, {
      _css5: 1 * constants.GU
    }, /*#__PURE__*/React__default['default'].createElement("strong", null, percentage, "%"))));
  })));
}

Distribution.propTypes = {
  colors: index.propTypes.array,
  heading: index.propTypes.node,
  itemTitle: index.propTypes.func,
  renderLegendItem: index.propTypes.func,
  renderFullLegendItem: index.propTypes.func,
  showLegend: index.propTypes.bool,
  items: index.propTypes.arrayOf(index.propTypes.shape({
    item: index.propTypes.any.isRequired,
    percentage: index.propTypes.number.isRequired
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
    var item = _ref6.item;
        _ref6.percentage;
        var index = _ref6.index;
    return typeof item === 'string' ? item : "Item ".concat(index + 1);
  },
  showLegend: true
};
/* eslint-disable react/prop-types */

var _StyledDiv6 = _styled__default['default']("div").withConfig({
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
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv6, {
    style: {
      background: color
    },
    _css6: 1 * constants.GU,
    _css7: 1 * constants.GU,
    _css8: 1 * constants.GU
  });
}

exports.default = Distribution;
//# sourceMappingURL=Distribution.js.map
