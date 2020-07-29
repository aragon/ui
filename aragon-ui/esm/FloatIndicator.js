import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useContext } from 'react';
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
import { RADIUS, GU } from './constants.js';
import './breakpoints.js';
import { springs } from './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';
import { i } from './index-422d37c0.js';
import './isObject-3c6ec07e.js';
import { u as useViewport } from './Viewport-cc7debfb.js';
import './objectWithoutPropertiesLoose-9606ad13.js';
import 'react-dom';
import { e as extendedAnimated, T as Transition } from './web-a351a0a1.js';
import { ToastContext } from './ToastHub.js';
import './index-f754c2df.js';
import RootPortal from './RootPortal.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-1mhu8xn-0"
})(["position:absolute;z-index:1;bottom:", "px;display:flex;justify-content:flex-end;width:100%;padding:0 ", "px 0 ", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "FloatIndicator___StyledAnimatedDiv",
  componentId: "sc-1mhu8xn-1"
})(["flex-grow:", ";display:flex;align-items:center;height:", "px;padding:", "px ", "px;", ";white-space:nowrap;color:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:default;justify-content:center;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, RADIUS);

var FloatIndicator = React.memo(function FloatIndicator(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      shift = _ref.shift,
      props = _objectWithoutProperties(_ref, ["children", "visible", "shift"]);

  var theme = useTheme();

  var _useViewport = useViewport(),
      below = _useViewport.below;

  var _useContext = useContext(ToastContext),
      toastItemsVisible = _useContext.itemsVisible;

  var wide = below('medium');
  var horizontalSpacing = wide ? 2 * GU : 3 * GU;
  var horizontalSpacingEnd = horizontalSpacing + (shift || 0);
  return /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(Transition, {
    native: true,
    items: toastItemsVisible ? false : visible,
    from: {
      progress: 0
    },
    enter: {
      progress: 1
    },
    leave: {
      progress: 0
    },
    config: springs.smooth
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var progress = _ref2.progress;
      return /*#__PURE__*/React.createElement(_StyledDiv, {
        _css: wide ? 2 * GU : 3 * GU,
        _css2: horizontalSpacingEnd,
        _css3: horizontalSpacing
      }, /*#__PURE__*/React.createElement(_StyledAnimatedDiv, _extends({
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          opacity: progress,
          transform: progress.interpolate(function (v) {
            return "translate3d(0, calc(10px * ".concat(1 - v, "), 0)");
          })
        }
      }, props, {
        _css4: Number(wide),
        _css5: 6 * GU,
        _css6: 1 * GU,
        _css7: 2 * GU,
        _css8: textStyle('body3'),
        _css9: theme.floatingContent,
        _css10: theme.floating,
        _css11: theme.border
      }), /*#__PURE__*/React.createElement(i, {
        name: "FloatIndicator"
      }, children)));
    };
  }
  /* eslint-enable react/prop-types */
  ));
});
FloatIndicator.propTypes = {
  children: PropTypes.node.isRequired,
  shift: PropTypes.number,
  visible: PropTypes.bool
};
FloatIndicator.defaultProps = {
  shift: 0,
  visible: true
};

export default FloatIndicator;
//# sourceMappingURL=FloatIndicator.js.map
