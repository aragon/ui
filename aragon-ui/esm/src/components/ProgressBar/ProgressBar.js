import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled, { keyframes } from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import { useSpring, interpolate as interpolate$1, animated as extendedAnimated } from '../../../node_modules/react-spring/hooks.js';
import { warnOnce } from '../../utils/environment.js';
import { useTheme } from '../../theme/Theme2.js';
import { springs } from '../../style/springs.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var RADIUS = 2;
var BAR_HEIGHT = 6;
var INDETERMINATE_WIDTH = 1 / 4;
var INDETERMINATE_DURATION = 1600;
var indeterminateAnim = keyframes(["0%{transform:translate3d(calc(-100% - 1px),0,0);}70%,100%{transform:translate3d(calc(", "% + 1px),0,0);}"], 100 / INDETERMINATE_WIDTH);

var _StyledDiv = _styled("div").withConfig({
  displayName: "ProgressBar___StyledDiv",
  componentId: "sc-1gly9sn-0"
})(["width:100%;height:", "px;background:", ";border-radius:", "px;overflow:hidden;"], BAR_HEIGHT, function (p) {
  return p._css;
}, RADIUS);

var ProgressBar = /*#__PURE__*/React.memo(function (_ref) {
  var animate = _ref.animate,
      color = _ref.color,
      progress = _ref.progress,
      value = _ref.value;

  // Support `progress` for a while but warn if being used.
  if (value === -1 && typeof progress === 'number') {
    value = progress;
    warnOnce('ProgressBar:progress', 'The `progress` prop of ProgressBar is deprecated: please use `value` instead.');
  } // The indeterminate state can be triggered either by not setting the value
  // (to mimic the <progress> element in HTML), or by setting the -1 value (for
  // convenience in React).


  var indeterminate = value === -1;
  var theme = useTheme();
  var currentColor = color === undefined ? theme.accent : color;
  var transition = useSpring({
    config: _objectSpread(_objectSpread({}, springs.smooth), {}, {
      precision: 0.001
    }),
    from: {
      scale: 0,
      x: 0
    },
    to: {
      scale: value,
      x: 0
    },
    immediate: !animate
  });
  return /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: theme.surfaceUnder
  }, /*#__PURE__*/React.createElement(Bar, {
    style: {
      width: "".concat((indeterminate ? INDETERMINATE_WIDTH : 1) * 100, "%"),
      background: currentColor,
      borderRadius: "".concat(indeterminate ? RADIUS : 0, "px"),
      animationName: "".concat(indeterminate ? indeterminateAnim.name : 'none'),
      transform: interpolate$1([transition.x, transition.scale], function (x, s) {
        return "translate3d(".concat(x * 100, "%, 0, 0) scale3d(").concat(s, ", 1, 1)");
      })
    }
  }));
});
var Bar = _styled(extendedAnimated.div).withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "sc-1gly9sn-1"
})(["width:100%;height:", "px;transform-origin:0 0;animation:", " ", "ms ease-in-out infinite;animation-name:none;"], BAR_HEIGHT, indeterminateAnim, INDETERMINATE_DURATION);
ProgressBar.defaultProps = {
  animate: true,
  value: -1
};
ProgressBar.propTypes = {
  animate: ExtendedPropTypes.bool,
  color: ExtendedPropTypes.string,
  progress: ExtendedPropTypes._0to1,
  value: ExtendedPropTypes.oneOfType([ExtendedPropTypes._0to1, ExtendedPropTypes.oneOf([-1])])
};

export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map
