import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { springs as springs$1 } from '../../style/springs.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { animated as extendedAnimated, Spring } from '../../../node_modules/react-spring/web.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledAnimatedDiv = _styled$1(extendedAnimated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-19tx70h-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], function (p) {
  return p._css;
});

function OpenedSurfaceBorder(_ref) {
  var opened = _ref.opened,
      props = objectWithoutProperties$1(_ref, ["opened"]);

  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: _objectSpread({}, springs$1.smooth)
  }, function (_ref2) {
    var width = _ref2.width;
    return /*#__PURE__*/React$1.createElement(_StyledAnimatedDiv, _extends_1({
      style: {
        transform: width.interpolate(function (v) {
          return "scale3d(".concat(v, ", 1, 1)");
        })
      }
    }, props, {
      _css: theme.surfaceOpened
    }));
  });
}

OpenedSurfaceBorder.propTypes = {
  opened: propTypes.bool
};

export { OpenedSurfaceBorder };
//# sourceMappingURL=OpenedSurfaceBorder.js.map
