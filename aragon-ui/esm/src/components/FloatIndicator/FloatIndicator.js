import React$1, { useContext } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { RADIUS, GU } from '../../style/constants.js';
import { springs as springs$1 } from '../../style/springs.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import RootPortal$1 from '../RootPortal/RootPortal.js';
import { ToastContext } from '../ToastHub/ToastHub.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-1mhu8xn-0"
})(["position:absolute;z-index:1;bottom:", "px;display:flex;justify-content:flex-end;width:100%;padding:0 ", "px 0 ", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledAnimatedDiv = _styled$1(extendedAnimated.div).withConfig({
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

var FloatIndicator = /*#__PURE__*/React$1.memo(function FloatIndicator(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      shift = _ref.shift,
      props = objectWithoutProperties$1(_ref, ["children", "visible", "shift"]);

  var theme = useTheme();

  var _useViewport = useViewport(),
      below = _useViewport.below;

  var _useContext = useContext(ToastContext),
      toastItemsVisible = _useContext.itemsVisible;

  var wide = below('medium');
  var horizontalSpacing = wide ? 2 * GU : 3 * GU;
  var horizontalSpacingEnd = horizontalSpacing + (shift || 0);
  return /*#__PURE__*/React$1.createElement(RootPortal$1, null, /*#__PURE__*/React$1.createElement(Transition, {
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
    config: springs$1.smooth
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var progress = _ref2.progress;
      return /*#__PURE__*/React$1.createElement(_StyledDiv, {
        _css: wide ? 2 * GU : 3 * GU,
        _css2: horizontalSpacingEnd,
        _css3: horizontalSpacing
      }, /*#__PURE__*/React$1.createElement(_StyledAnimatedDiv, _extends_1({
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
      }), /*#__PURE__*/React$1.createElement(i, {
        name: "FloatIndicator"
      }, children)));
    };
  }
  /* eslint-enable react/prop-types */
  ));
});
FloatIndicator.propTypes = {
  children: propTypes.node.isRequired,
  shift: propTypes.number,
  visible: propTypes.bool
};
FloatIndicator.defaultProps = {
  shift: 0,
  visible: true
};

export default FloatIndicator;
//# sourceMappingURL=FloatIndicator.js.map
