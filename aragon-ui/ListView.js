'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-3cad0327.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var Checkbox = require('./Checkbox.js');
var ToggleButton = require('./ToggleButton.js');
var OpenedSurfaceBorder = require('./OpenedSurfaceBorder.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var springs = require('./springs.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./getPrototypeOf-55c9e80c.js');
require('./FocusVisible.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-71f7efe6.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./keycodes.js');
require('./font.js');
require('./IconUp.js');
require('./IconPropTypes-b9997416.js');
require('./IconDown.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "ListView___StyledDiv",
  componentId: "sc-1wnrej-0"
})(["position:relative;padding:0;padding-right:", "px;padding-left:", "px;border-bottom:", "px solid ", ";transition:background 150ms ease-in-out;background:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "ListView___StyledDiv2",
  componentId: "sc-1wnrej-1"
})(["position:absolute;top:", "px;left:0;display:flex;justify-content:center;width:", "px;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "ListView___StyledDiv3",
  componentId: "sc-1wnrej-2"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledDiv4 = _styled__default['default']("div").withConfig({
  displayName: "ListView___StyledDiv4",
  componentId: "sc-1wnrej-3"
})(["display:flex;flex-direction:column;padding-bottom:", "px;"], function (p) {
  return p._css10;
});

var _StyledDiv5 = _styled__default['default']("div").withConfig({
  displayName: "ListView___StyledDiv5",
  componentId: "sc-1wnrej-4"
})(["display:flex;align-items:center;margin:", "px 0 ", "px;color:", ";", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function ListView(_ref) {
  _ref.allSelected;
      var entries = _ref.entries,
      fields = _ref.fields,
      hasAnyExpansion = _ref.hasAnyExpansion,
      onSelect = _ref.onSelect;
      _ref.onSelectAll;
      _ref.renderSelectionCount;
      var selectable = _ref.selectable,
      rowHeight = _ref.rowHeight;
  var theme = Theme.useTheme();

  var _useState = React.useState(-1),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var toggleEntry = React.useCallback(function (index) {
    setOpened(function (opened) {
      return opened === index ? -1 : index;
    });
  }, []);
  var sideSpace = selectable || hasAnyExpansion;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, entries.map(function (entry, index) {
    var hasExpansion = entry.expansion.content.length > 0;
    return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
      key: index,
      _css: 3 * constants.GU,
      _css2: (sideSpace ? 6.5 : 3) * constants.GU,
      _css3: Number(index !== entries.length - 1),
      _css4: theme.border,
      _css5: entry.selected ? theme.surfaceSelected : 'none'
    }, /*#__PURE__*/React__default['default'].createElement(OpenedSurfaceBorder.OpenedSurfaceBorder, {
      opened: entry.index === opened
    }), sideSpace && /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
      _css6: 1.5 * constants.GU,
      _css7: 6.5 * constants.GU
    }, selectable && /*#__PURE__*/React__default['default'].createElement(Select, {
      index: entry.index,
      selected: entry.selected,
      onSelect: onSelect
    }), !selectable && hasExpansion && /*#__PURE__*/React__default['default'].createElement(ToggleButton.ToggleButton, {
      opened: entry.index === opened,
      onClick: function onClick() {
        return toggleEntry(entry.index);
      }
    })), entry.actions && /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
      _css8: 2 * constants.GU,
      _css9: 3 * constants.GU
    }, entry.actions), /*#__PURE__*/React__default['default'].createElement("div", null, entry.entryNodes.map(function (content, index) {
      return [// field content
      content, // field label
      fields[index].label, // priority number
      fields[index].priority && fields[index].priority || 0];
    }) // sort by priority
    .sort(function (a, b) {
      return b[2] - a[2];
    }).map(function (_ref2, index, entryNodes) {
      var _ref3 = slicedToArray.slicedToArray(_ref2, 2),
          content = _ref3[0],
          label = _ref3[1];

      return /*#__PURE__*/React__default['default'].createElement(_StyledDiv4, {
        key: index,
        _css10: index === entryNodes.length - 1 ? 2 * constants.GU : 0
      }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv5, {
        _css11: 2 * constants.GU,
        _css12: 1 * constants.GU,
        _css13: theme.surfaceContentSecondary,
        _css14: textStyles.textStyle('label2')
      }, label), /*#__PURE__*/React__default['default'].createElement("div", null, content));
    })), hasExpansion && /*#__PURE__*/React__default['default'].createElement(EntryExpansion, {
      expansion: entry.expansion,
      opened: opened === entry.index,
      rowHeight: rowHeight
    }));
  }));
}

ListView.propTypes = {
  allSelected: index.propTypes.oneOf([-1, 0, 1]).isRequired,
  entries: index.propTypes.array.isRequired,
  fields: index.propTypes.array.isRequired,
  hasAnyExpansion: index.propTypes.bool.isRequired,
  onSelect: index.propTypes.func.isRequired,
  onSelectAll: index.propTypes.func.isRequired,
  renderSelectionCount: index.propTypes.func.isRequired,
  rowHeight: index.propTypes.number.isRequired,
  selectable: index.propTypes.bool.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "ListView___StyledAnimatedDiv",
  componentId: "sc-1wnrej-5"
})(["overflow:hidden;background:", ";margin-left:", "px;margin-right:", "px;padding-left:", "px;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
});

var _StyledDiv6 = _styled__default['default']("div").withConfig({
  displayName: "ListView___StyledDiv6",
  componentId: "sc-1wnrej-6"
})(["display:flex;align-items:center;height:", ";padding-right:", "px;"], function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
});

function EntryExpansion(_ref4) {
  var expansion = _ref4.expansion,
      opened = _ref4.opened,
      rowHeight = _ref4.rowHeight;
  var theme = Theme.useTheme(); // Handles the height of the expansion in free layout mode

  var _useState3 = React.useState(0),
      _useState4 = slicedToArray.slicedToArray(_useState3, 2),
      freeLayoutContentHeight = _useState4[0],
      setFreeLayoutContentHeight = _useState4[1];

  var handleFreeLayoutContentRef = React.useCallback(function (element) {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  var height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return /*#__PURE__*/React__default['default'].createElement(web.Transition, {
    native: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height: height
    },
    update: {
      height: height
    },
    leave: {
      height: 0
    },
    config: _objectSpread(_objectSpread({}, springs.springs.smooth), {}, {
      precision: 0.1
    })
  }, function (show) {
    return show && function (_ref5) {
      var height = _ref5.height;
      return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
        style: {
          height: height.interpolate(function (v) {
            return "".concat(v, "px");
          })
        },
        _css15: theme.surfaceUnder,
        _css16: -6.5 * constants.GU,
        _css17: -3 * constants.GU,
        _css18: 6.5 * constants.GU
      }, expansion.content.map(function (child, i) {
        return /*#__PURE__*/React__default['default'].createElement(_StyledDiv6, {
          key: i,
          ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
          _css19: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css20: 3 * constants.GU
        }, child);
      }));
    };
  });
}

function Select(_ref6) {
  var index = _ref6.index,
      selected = _ref6.selected,
      onSelect = _ref6.onSelect;
  var change = React.useCallback(function (check) {
    onSelect(index, check);
  }, [index, onSelect]);
  return /*#__PURE__*/React__default['default'].createElement(Checkbox['default'], {
    onChange: change,
    checked: selected
  });
}

exports.ListView = ListView;
//# sourceMappingURL=ListView.js.map
