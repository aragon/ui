import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import EscapeOutside from '../EscapeOutside/EscapeOutside.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { useTheme } from '../../theme/Theme2.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import IconCross from '../../icons/components/IconCross.js';
import { springs } from '../../style/springs.js';
import { cssPx } from '../../utils/css.js';
import { RADIUS, GU } from '../../style/constants.js';
import { noop } from '../../utils/miscellaneous.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SPACE_AROUND = 4 * GU;

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv",
  componentId: "sc-1ofisn3-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;background:", ";"], function (p) {
  return p._css;
});

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv2",
  componentId: "sc-1ofisn3-1"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;display:grid;align-items:center;justify-content:center;overflow:auto;"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "Modal___StyledDiv",
  componentId: "sc-1ofisn3-2"
})(["padding:", "px 0;"], SPACE_AROUND);

var _StyledEscapeOutside = _styled(EscapeOutside).withConfig({
  displayName: "Modal___StyledEscapeOutside",
  componentId: "sc-1ofisn3-3"
})(["position:relative;overflow:hidden;min-width:", "px;background:", ";box-shadow:0 10px 28px rgba(0,0,0,0.15);"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "Modal___StyledButtonIcon",
  componentId: "sc-1ofisn3-4"
})(["position:absolute;z-index:2;top:", "px;right:", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Modal___StyledDiv2",
  componentId: "sc-1ofisn3-5"
})(["position:relative;z-index:1;"]);

function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      onClosed = _ref.onClosed,
      padding = _ref.padding,
      visible = _ref.visible,
      width = _ref.width,
      closeButton = _ref.closeButton,
      props = objectWithoutProperties(_ref, ["children", "onClose", "onClosed", "padding", "visible", "width", "closeButton"]);

  var theme = useTheme();
  var viewport = useViewport();
  return /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(Transition, {
    native: true,
    items: visible,
    from: {
      opacity: 0,
      scale: 0.98
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    leave: {
      opacity: 0,
      scale: 0.98
    },
    config: _objectSpread(_objectSpread({}, springs.smooth), {}, {
      precision: 0.001
    }),
    onDestroyed: function onDestroyed(destroyed) {
      destroyed && onClosed();
    }
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var opacity = _ref2.opacity,
          scale = _ref2.scale;
      return /*#__PURE__*/React.createElement(_StyledAnimatedDiv, _extends_1({
        style: {
          opacity: opacity
        }
      }, props, {
        _css: theme.overlay.alpha(0.9)
      }), /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, {
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          transform: scale.interpolate(function (v) {
            return "scale3d(".concat(v, ", ").concat(v, ", 1)");
          })
        }
      }, /*#__PURE__*/React.createElement(_StyledDiv, null, /*#__PURE__*/React.createElement(_StyledEscapeOutside, {
        role: "alertdialog",
        useCapture: true,
        background: theme.surface,
        onEscapeOutside: onClose,
        style: {
          width: cssPx(typeof width === 'function' ? width(viewport) : width),
          borderRadius: "".concat(RADIUS, "px")
        },
        _css2: 360 - SPACE_AROUND * 2,
        _css3: theme.surface
      }, closeButton && /*#__PURE__*/React.createElement(_StyledButtonIcon, {
        label: "Close",
        onClick: onClose,
        _css4: 2 * GU,
        _css5: 2 * GU
      }, /*#__PURE__*/React.createElement(IconCross, null)), /*#__PURE__*/React.createElement(_StyledDiv2, {
        style: {
          padding: cssPx(typeof padding === 'function' ? padding(viewport) : padding)
        }
      }, children)))));
    };
  }
  /* eslint-enable react/prop-types */
  ));
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
  closeButton: propTypes.bool,
  onClose: propTypes.func,
  onClosed: propTypes.func,
  padding: propTypes.oneOfType([propTypes.func, propTypes.number, propTypes.string]),
  visible: propTypes.bool.isRequired,
  width: propTypes.oneOfType([propTypes.func, propTypes.number, propTypes.string])
};
Modal.defaultProps = {
  closeButton: true,
  onClose: noop,
  onClosed: noop,
  padding: 3 * GU,
  width: function width(viewport) {
    return Math.min(viewport.width - SPACE_AROUND * 2, 600);
  }
};

export default Modal;
//# sourceMappingURL=Modal.js.map
