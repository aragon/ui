import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1 from 'react';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import toConsumableArray$1 from '../../../node_modules/@babel/runtime/helpers/toConsumableArray.js';
import _styled$1 from 'styled-components';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import assertThisInitialized$1 from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { stylingProps } from '../../utils/components.js';
import { noop } from '../../utils/miscellaneous.js';
import { warn } from '../../utils/environment.js';
import { KEY_ESC } from '../../utils/keycodes.js';
import { RADIUS, GU } from '../../style/constants.js';
import { springs as springs$1 } from '../../style/springs.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { useRoot } from '../../providers/Root/Root.js';
import RootPortal$1 from '../RootPortal/RootPortal.js';
import ExtendedPropTypes from '../../proptypes.js';
import Popper from '../../../node_modules/popper.js/dist/esm/popper.js';

var _ref3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _StyledAnimatedDiv = _styled$1(extendedAnimated.div).withConfig({
  displayName: "Popover___StyledAnimatedDiv",
  componentId: "sc-1hohxqp-0"
})(["position:absolute;top:0;left:0;"]);

var _StyledAnimatedDiv2 = _styled$1(extendedAnimated.div).withConfig({
  displayName: "Popover___StyledAnimatedDiv2",
  componentId: "sc-1hohxqp-1"
})(["background:", ";border:1px solid ", ";border-radius:", "px;filter:drop-shadow(0 4px 4px rgba(0,0,0,0.15));&:focus{outline:0;}overflow-y:auto;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, RADIUS);

var PopoverBase = /*#__PURE__*/function (_React$Component) {
  inherits$1(PopoverBase, _React$Component);

  var _super = _createSuper(PopoverBase);

  function PopoverBase() {
    var _this;

    classCallCheck$1(this, PopoverBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "_cardElement", /*#__PURE__*/React$1.createRef());

    defineProperty$1(assertThisInitialized$1(_this), "_popperElement", /*#__PURE__*/React$1.createRef());

    defineProperty$1(assertThisInitialized$1(_this), "_document", null);

    defineProperty$1(assertThisInitialized$1(_this), "_popper", null);

    defineProperty$1(assertThisInitialized$1(_this), "handleEscape", function (_ref) {
      var keyCode = _ref.keyCode;

      if (keyCode === KEY_ESC) {
        // On escape, we always move the focus back to the opener.
        _this.props.opener.focus();

        _this.attemptClose();
      }
    });

    defineProperty$1(assertThisInitialized$1(_this), "handleBlur", function (event) {
      var _this$props = _this.props,
          closeOnOpenerFocus = _this$props.closeOnOpenerFocus,
          opener = _this$props.opener;
      var focusedElement = event.relatedTarget; // Do not close if:
      // - The blur event is emitted from an element inside of the popover.
      // - The focused target is the opener and closeOnOpenerFocus is true.

      if (_this._cardElement.current && _this._cardElement.current.contains(focusedElement) || closeOnOpenerFocus && opener && opener.contains(focusedElement)) {
        if (closeOnOpenerFocus && (opener.tagName === 'BUTTON' || opener.tagName === 'INPUT')) {
          warn('Popover: using "closeOnOpenerFocus" with a <button> or <input> may lead to bugs due ' + 'to cross-environment focus event handling. ' + 'See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus ' + 'for more information.');
        }

        return;
      } // Probably a click outside, that doesn’t focus anything else: move the
      // focus back to the opener.


      if (!focusedElement) {
        opener.focus();
      }

      _this.attemptClose();
    });

    return _this;
  }

  createClass$1(PopoverBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._document = this._popperElement.current.ownerDocument;

      this._document.addEventListener('keydown', this.handleEscape);

      this.focus();
      this.initPopper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyPopper();

      this._document.removeEventListener('keydown', this.handleEscape);

      delete this._document;
      delete this._popper;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
          placement = _this$props2.placement,
          children = _this$props2.children,
          opener = _this$props2.opener;

      if (prevProps.placement !== placement || prevProps.children !== children || prevProps.opener !== opener) {
        this.destroyPopper();
        this.initPopper();
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this._cardElement.current) {
        this._cardElement.current.focus();
      }
    }
  }, {
    key: "getPopperSettings",
    value: function getPopperSettings() {
      var _this$props3 = this.props,
          placement = _this$props3.placement,
          rootBoundary = _this$props3.rootBoundary;
      var settings = {
        placement: placement,
        modifiers: {
          preventOverflow: {
            enabled: true,
            padding: 10,
            boundariesElement: rootBoundary || 'window'
          }
        },
        positionFixed: false
      };

      if (placement !== 'center') {
        return settings;
      }

      return _objectSpread(_objectSpread({}, settings), {}, {
        placement: 'top-start',
        modifiers: _objectSpread(_objectSpread({}, settings.modifiers), {}, {
          arrow: {
            enabled: false
          },
          flip: {
            enabled: false
          },
          offset: {
            enabled: true,
            offset: '50% - 50%p, -50%p - 50%'
          }
        })
      });
    }
  }, {
    key: "initPopper",
    value: function initPopper() {
      var opener = this.props.opener;

      if (!this._popper) {
        this._popper = new Popper(opener, this._popperElement.current, this.getPopperSettings());
      }
    }
  }, {
    key: "destroyPopper",
    value: function destroyPopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    }
  }, {
    key: "attemptClose",
    value: function attemptClose() {
      var accepted = this.props.onClose(); // If closing the popover is not accepted, we need to focus it again so
      // that it can react to onBlur events.

      if (accepted === false) {
        this.focus();
      }
    }
  }, {
    key: "boundaryDimensions",
    value: function boundaryDimensions() {
      var rootBoundary = this.props.rootBoundary;
      var hasWindow = typeof window !== 'undefined';
      return rootBoundary ? [rootBoundary.clientWidth, rootBoundary.clientHeight] : [hasWindow ? window.innerWidth : 0, hasWindow ? window.innerHeight : 0];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          theme = _this$props4.theme,
          transitionStyles = _this$props4.transitionStyles,
          zIndex = _this$props4.zIndex;
      var scale = transitionStyles.scale,
          opacity = transitionStyles.opacity;

      var _this$boundaryDimensi = this.boundaryDimensions(),
          _this$boundaryDimensi2 = slicedToArray$1(_this$boundaryDimensi, 2),
          maxWidth = _this$boundaryDimensi2[0],
          maxHeight = _this$boundaryDimensi2[1];

      return /*#__PURE__*/React$1.createElement(_StyledAnimatedDiv, {
        ref: this._popperElement,
        style: {
          zIndex: zIndex
        }
      }, /*#__PURE__*/React$1.createElement(_StyledAnimatedDiv2, _extends_1({
        tabIndex: "0",
        onBlur: this.handleBlur,
        ref: this._cardElement,
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (v) {
            return "scale3d(".concat(v, ", ").concat(v, ", 1)");
          }),
          maxHeight: "".concat(maxHeight - 2 * GU, "px"),
          maxWidth: "".concat(maxWidth - 2 * GU, "px")
        }
      }, stylingProps(this), {
        _css: theme.surface,
        _css2: theme.border
      }), children));
    }
  }]);

  return PopoverBase;
}(React$1.Component);

defineProperty$1(PopoverBase, "propTypes", {
  children: ExtendedPropTypes.node,
  closeOnOpenerFocus: ExtendedPropTypes.bool,
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  placement: ExtendedPropTypes.oneOf( // "center" is a value that doesn’t exist in Popper, but we are using it
  // to define custom Popper settings (see getPopperSettings() below).
  (_ref3 = ['center']).concat.apply(_ref3, toConsumableArray$1(['auto', 'top', 'right', 'bottom', 'left'].map(function (position) {
    return [position, "".concat(position, "-start"), "".concat(position, "-end")];
  })))),
  rootBoundary: ExtendedPropTypes._element,
  theme: ExtendedPropTypes.object,
  transitionStyles: ExtendedPropTypes.object,
  zIndex: ExtendedPropTypes.number
});

defineProperty$1(PopoverBase, "defaultProps", {
  closeOnOpenerFocus: false,
  opener: null,
  placement: 'center',
  onClose: noop,
  zIndex: 999
});

function Popover(_ref2) {
  var scaleEffect = _ref2.scaleEffect,
      visible = _ref2.visible,
      props = objectWithoutProperties$1(_ref2, ["scaleEffect", "visible"]);

  var theme = useTheme();
  var root = useRoot();
  return /*#__PURE__*/React$1.createElement(RootPortal$1, null, /*#__PURE__*/React$1.createElement(Transition, {
    items: visible,
    config: springs$1.swift,
    from: {
      scale: scaleEffect ? 0.9 : 1,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: scaleEffect ? 0.9 : 1,
      opacity: 0
    },
    native: true
  }, function (visible) {
    return visible && function (transitionStyles) {
      return /*#__PURE__*/React$1.createElement(PopoverBase, _extends_1({}, props, {
        rootBoundary: root,
        theme: theme,
        transitionStyles: transitionStyles
      }));
    };
  }));
}

Popover.propTypes = _objectSpread(_objectSpread({}, PopoverBase.propTypes), {}, {
  scaleEffect: ExtendedPropTypes.bool,
  visible: ExtendedPropTypes.bool
});
Popover.defaultProps = _objectSpread(_objectSpread({}, PopoverBase.defaultProps), {}, {
  scaleEffect: true,
  visible: true
});

export default Popover;
//# sourceMappingURL=Popover.js.map
