'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var web = require('./web-46d746d6.js');
var index = require('./index-c33eeeef.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var springs = require('./springs.js');
var textStyles = require('./text-styles.js');
var IconDown = require('./IconDown.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutPropertiesLoose-1af20ad0.js');
require('react-dom');
require('./defineProperty-3cad0327.js');
require('./FocusVisible.js');
require('./getPrototypeOf-55c9e80c.js');
require('./keycodes.js');
require('./css.js');
require('./environment.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./toConsumableArray-cc0d28a9.js');
require('./font.js');
require('./IconPropTypes-b9997416.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// In / out example: [0, 0.25, 0.5, 0.75, 1] => [0, 0.5, 1, 0.5, 0]

function interpolateToggleElevation(value, fn) {
  return value.interpolate(function (v) {
    return fn(1 - Math.abs(v * 2 - 1));
  });
}

var _StyledSection = _styled__default['default']("section").withConfig({
  displayName: "Details___StyledSection",
  componentId: "b3f99g-0"
})(["", ""], function (p) {
  return p._css;
});

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "Details___StyledButtonBase",
  componentId: "b3f99g-1"
})(["position:relative;width:100%;&:active{background:", ";}"], function (p) {
  return p._css2;
});

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Details___StyledDiv",
  componentId: "b3f99g-2"
})(["position:absolute;left:", "px;right:", "px;bottom:0;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "Details___StyledDiv2",
  componentId: "b3f99g-3"
})(["height:1px;box-shadow:0 1px 1px rgba(0,0,0,0.1);"]);

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "Details___StyledH",
  componentId: "b3f99g-4"
})(["display:flex;justify-content:flex-start;align-items:center;height:", "px;margin-left:", "px;color:", ";", " font-weight:400;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "Details___StyledDiv3",
  componentId: "b3f99g-5"
})(["margin-top:2px;"]);

var _StyledDiv4 = _styled__default['default']("div").withConfig({
  displayName: "Details___StyledDiv4",
  componentId: "b3f99g-6"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledDiv5 = _styled__default['default']("div").withConfig({
  displayName: "Details___StyledDiv5",
  componentId: "b3f99g-7"
})(["overflow:hidden"]);

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "Details___StyledAnimatedDiv",
  componentId: "b3f99g-8"
})(["display:flex;flex-direction:column;justify-content:flex-end;"]);

var _StyledDiv6 = _styled__default['default']("div").withConfig({
  displayName: "Details___StyledDiv6",
  componentId: "b3f99g-9"
})(["", ""], function (p) {
  return p._css9;
});

function Details(_ref) {
  var children = _ref.children,
      label = _ref.label,
      onToggle = _ref.onToggle,
      openedProp = _ref.opened,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children", "label", "onToggle", "opened"]);

  var theme = Theme.useTheme();

  var _useInside = index.o('Box'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 1),
      insideBox = _useInside2[0];

  var _useInside3 = index.o('SidePanel'),
      _useInside4 = slicedToArray.slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  var contentRef = React.useRef(null);
  var contentHeight = React.useRef(0); // Details supports two modes: managed (internal state),
  // or controlled (external state).

  var _useState = React.useState(false),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      openedManaged = _useState2[0],
      setOpenedManaged = _useState2[1];

  var opened = openedProp === undefined ? openedManaged : openedProp;
  var updateHeight = React.useCallback(function () {
    if (contentRef.current) {
      contentHeight.current = contentRef.current.clientHeight;
    }
  }, []);
  var handleContentRef = React.useCallback(function (element) {
    contentRef.current = element;
    updateHeight();
  }, [updateHeight]);
  var handleToggle = React.useCallback(function () {
    var newOpened = !opened; // Managed state

    if (openedProp === undefined) {
      setOpenedManaged(newOpened);
    } // Useful to notify even in managed mode


    if (onToggle) {
      onToggle(newOpened);
    }
  }, [onToggle, opened, openedProp]); // Animate after the initial render

  var animate = React.useRef(false);
  React.useEffect(function () {
    animate.current = true;
  }, []); // Use height: 'auto' when opened

  var _useState3 = React.useState(false),
      _useState4 = slicedToArray.slicedToArray(_useState3, 2),
      forceHeight = _useState4[0],
      setForceHeight = _useState4[1];

  var handleStart = React.useCallback(function () {
    return setForceHeight(true);
  }, []);
  var handleRest = React.useCallback(function () {
    // Note: we need to use the opened from the previous
    // render cycle here, which is why we don’t use a callback.
    setForceHeight(!opened);
  }, [opened]); // Update the height

  React.useEffect(updateHeight, [opened, updateHeight]);
  var spacingCss = React.useMemo(function () {
    if (insideSidePanel) {
      return {
        section: "\n          margin: ".concat(2 * constants.GU, "px ").concat(-3 * constants.GU, "px 0;\n          padding-bottom: ").concat(3 * constants.GU, "px;\n        "),
        content: "\n          padding: ".concat(2 * constants.GU, "px ").concat(3 * constants.GU, "px 0;\n        ")
      };
    }

    if (insideBox) {
      return {
        section: "\n          margin: 0 ".concat(-3 * constants.GU, "px;\n        "),
        content: "\n          padding: ".concat(1 * constants.GU, "px ").concat(3 * constants.GU, "px 0;\n        ")
      };
    }

    return {
      section: "\n        margin: 0;\n        padding-bottom: ".concat(3 * constants.GU, "px;\n      "),
      content: "\n        padding: 0;\n      "
    };
  }, [insideSidePanel, insideBox]);
  return /*#__PURE__*/React__default['default'].createElement(web.Spring, {
    config: springs.springs.smooth,
    from: {
      openProgress: 0
    },
    to: {
      openProgress: Number(opened)
    },
    immediate: !animate,
    onRest: handleRest,
    onStart: handleStart,
    native: true
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return /*#__PURE__*/React__default['default'].createElement(_StyledSection, _extends._extends_1({}, props, {
      _css: spacingCss.section
    }), /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
      onClick: handleToggle,
      _css2: theme.surfacePressed
    }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
      _css3: 3 * constants.GU,
      _css4: 3 * constants.GU
    }, /*#__PURE__*/React__default['default'].createElement(web.extendedAnimated.div, {
      style: {
        transform: interpolateToggleElevation(openProgress, function (v) {
          return "scale3d(".concat(v, ", 1, 1)");
        }),
        opacity: interpolateToggleElevation(openProgress, function (v) {
          return v;
        })
      }
    }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, null))), /*#__PURE__*/React__default['default'].createElement(_StyledH, _extends._extends_1({}, props, {
      _css5: 5 * constants.GU,
      _css6: 3 * constants.GU,
      _css7: theme.surfaceContentSecondary,
      _css8: textStyles.textStyle('label2')
    }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, null, label), /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(web.extendedAnimated.div, {
      style: {
        marginLeft: "".concat(1 * constants.GU, "px"),
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat((1 - v) * 180, "deg)");
        }),
        transformOrigin: '50% calc(50% - 0.5px)'
      }
    }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv4, null, /*#__PURE__*/React__default['default'].createElement(IconDown['default'], {
      size: "tiny"
    })))))), /*#__PURE__*/React__default['default'].createElement(_StyledDiv5, null, /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
      style: {
        opacity: openProgress,
        height: forceHeight ? openProgress.interpolate(function (v) {
          return "".concat(v * contentHeight.current, "px");
        }) : 'auto'
      }
    }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv6, {
      ref: handleContentRef,
      _css9: spacingCss.content
    }, /*#__PURE__*/React__default['default'].createElement("div", null, children)))));
  });
}

Details.propTypes = {
  children: index$1.propTypes.node.isRequired,
  label: index$1.propTypes.string.isRequired,
  onToggle: index$1.propTypes.func,
  opened: index$1.propTypes.bool
};

exports.default = Details;
//# sourceMappingURL=Details.js.map
