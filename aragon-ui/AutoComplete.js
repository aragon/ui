'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
var _styled = require('styled-components');
var _styled__default = _interopDefault(_styled);
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
var css = require('./css.js');
var miscellaneous = require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
var keycodes = require('./keycodes.js');
require('./constants.js');
require('./breakpoints.js');
var springs = require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
var Theme = require('./Theme.js');
var _extends$1 = require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./Viewport-abbde113.js');
require('./Layout.js');
require('./FocusVisible.js');
var ButtonBase = require('./ButtonBase.js');
require('./IconPropTypes-dd9d2cb1.js');
require('./IconCross.js');
require('./IconSearch.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
var web = require('./web-d0294535.js');
require('./Button.js');
require('./ButtonIcon.js');
require('./TextInput.js');
var useArrowKeysFocus = require('./useArrowKeysFocus.js');
var useClickOutside = require('./useClickOutside.js');
var useFocusLeave = require('./useFocusLeave.js');
require('./useImageExists.js');
var useKeyDown = require('./useKeyDown.js');
var SearchInput = require('./SearchInput.js');

var _StyledDiv = _styled__default("div").withConfig({
  displayName: "AutoComplete___StyledDiv",
  componentId: "bpnxyo-0"
})(["position:relative"]);

function AutoComplete(_ref) {
  var forwardedRef = _ref.forwardedRef,
      _ref$itemButtonStyles = _ref.itemButtonStyles,
      itemButtonStyles = _ref$itemButtonStyles === void 0 ? '' : _ref$itemButtonStyles,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? miscellaneous.noop : _ref$onSelect,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? miscellaneous.noop : _ref$onChange,
      placeholder = _ref.placeholder,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? miscellaneous.identity : _ref$renderItem,
      required = _ref.required,
      value = _ref.value,
      wide = _ref.wide;
  var ref = forwardedRef;
  var uniqueItems = new Set(items);

  var _useState = React.useState(true),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var wrapRef = React.useRef();
  var refs = React.useRef([]);
  var handleClose = React.useCallback(function () {
    return setOpened(false);
  }, []);
  var handleFocus = React.useCallback(function () {
    return setOpened(true);
  }, []);
  var handleSelect = React.useCallback(function (item) {
    onSelect(item);
    setOpened(false);
  }, [onSelect]);
  var handleInputChange = React.useCallback(function () {
    setOpened(true);
    onChange.apply(void 0, arguments);
  }, [onChange]);

  var _useFocusLeave = useFocusLeave.useFocusLeave(handleClose, wrapRef),
      handleFocusLeave = _useFocusLeave.handleFocusLeave;

  var _useArrowKeysFocus = useArrowKeysFocus.useArrowKeysFocus(refs),
      highlightedIndex = _useArrowKeysFocus.highlightedIndex,
      setHighlightedIndex = _useArrowKeysFocus.setHighlightedIndex;

  useClickOutside.useClickOutside(handleClose, wrapRef);
  useKeyDown.useKeyDown(keycodes.KEY_ESC, handleClose);
  React.useEffect(function () {
    setHighlightedIndex(-1);
  }, [opened, items, value, setHighlightedIndex]);
  return /*#__PURE__*/React__default.createElement(_StyledDiv, {
    ref: wrapRef,
    onBlur: handleFocusLeave
  }, /*#__PURE__*/React__default.createElement(SearchInput.default, {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleInputChange,
    onFocus: handleFocus,
    value: value
  }), /*#__PURE__*/React__default.createElement(web.Transition, {
    config: springs.springs.swift,
    items: opened && items.length > 0,
    from: {
      scale: 0.98,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: 1,
      opacity: 0
    },
    native: true
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var scale = _ref2.scale,
          opacity = _ref2.opacity;
      return /*#__PURE__*/React__default.createElement(Items, {
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (t) {
            return "scale3d(".concat(t, ",").concat(t, ",1)");
          })
        }
      }, Array.from(uniqueItems).map(function (item, index) {
        return /*#__PURE__*/React__default.createElement(Item, {
          key: item.key || item,
          ref: function ref(node) {
            return refs.current[index] = node;
          },
          index: index,
          item: item,
          itemButtonStyles: itemButtonStyles,
          onHighlight: setHighlightedIndex,
          onSelect: handleSelect,
          selected: index === highlightedIndex
        }, renderItem(item, value));
      }));
    };
  }
  /* eslint-enable react/prop-types */
  ));
}

AutoComplete.propTypes = {
  forwardedRef: index.propTypes.object,
  itemButtonStyles: index.propTypes.string,
  items: index.propTypes.array.isRequired,
  onSelect: index.propTypes.func.isRequired,
  onChange: index.propTypes.func.isRequired,
  placeholder: index.propTypes.string,
  renderItem: index.propTypes.func,
  required: index.propTypes.bool,
  value: index.propTypes.string,
  wide: index.propTypes.bool
};
/* eslint-disable react/prop-types */

var _StyledLi = _styled__default("li").withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "bpnxyo-1"
})(["overflow:hidden;cursor:pointer;", ";"], function (p) {
  return p._css;
});

var _StyledButtonBase = _styled__default(ButtonBase.default).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "bpnxyo-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var Item = /*#__PURE__*/React__default.forwardRef(function Item(_ref3, ref) {
  var children = _ref3.children,
      index = _ref3.index,
      item = _ref3.item,
      itemButtonStyles = _ref3.itemButtonStyles,
      onHighlight = _ref3.onHighlight,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected;
  var theme = Theme.useTheme();
  var handleClick = React.useCallback(function (event) {
    event.preventDefault();
    onSelect(item);
  }, [item, onSelect]);
  var handleFocusOrMouseOver = React.useCallback(function () {
    onHighlight(index);
  }, [index, onHighlight]);
  return /*#__PURE__*/React__default.createElement(_StyledLi, {
    role: "option",
    _css: css.unselectable()
  }, /*#__PURE__*/React__default.createElement(_StyledButtonBase, {
    ref: ref,
    onClick: handleClick,
    onFocus: handleFocusOrMouseOver,
    onMouseOver: handleFocusOrMouseOver,
    _css2: selected ? "\n                outline: 2px solid ".concat(theme.accent, ";\n                background: ").concat(theme.surfaceHighlight, ";\n                border-left: 3px solid ").concat(theme.accent, ";\n              ") : '',
    _css3: itemButtonStyles
  }, children));
});
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */

var _StyledAnimatedUl = _styled__default(web.extendedAnimated.ul).withConfig({
  displayName: "AutoComplete___StyledAnimatedUl",
  componentId: "bpnxyo-3"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& > li:first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& > li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var Items = function Items(props) {
  var theme = Theme.useTheme();
  return /*#__PURE__*/React__default.createElement(_StyledAnimatedUl, _extends$1._extends_1({
    role: "listbox"
  }, props, {
    _css4: theme.surfaceContent,
    _css5: theme.surface,
    _css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


var AutoCompleteMemo = /*#__PURE__*/React__default.memo(AutoComplete);
var AutoComplete$1 = /*#__PURE__*/React__default.forwardRef(function (props, ref) {
  return /*#__PURE__*/React__default.createElement(AutoCompleteMemo, _extends$1._extends_1({}, props, {
    forwardedRef: ref
  }));
});

exports.default = AutoComplete$1;
//# sourceMappingURL=AutoComplete.js.map
