import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import regenerator from '../../../node_modules/@babel/runtime/regenerator/index.js';
import asyncToGenerator from '../../../node_modules/@babel/runtime/helpers/asyncToGenerator.js';
import toConsumableArray from '../../../node_modules/@babel/runtime/helpers/toConsumableArray.js';
import classCallCheck from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import assertThisInitialized from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import inherits from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React, { useContext } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { stylingProps } from '../../utils/components.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { springs } from '../../style/springs.js';
import { textStyle } from '../../style/text-styles.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var id = 0;

var move = function move(pixel) {
  return "translate3d(0,".concat(pixel, "px,0)");
};

var ToastContext = /*#__PURE__*/React.createContext(function () {
  throw new Error("For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!");
});

var ToastHubProvider = /*#__PURE__*/function (_React$PureComponent) {
  inherits(ToastHubProvider, _React$PureComponent);

  var _super = _createSuper(ToastHubProvider);

  function ToastHubProvider() {
    var _this;

    classCallCheck(this, ToastHubProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      items: [],
      leaving: [],
      preLeaving: []
    });

    defineProperty(assertThisInitialized(_this), "cancelMap", new WeakMap());

    defineProperty(assertThisInitialized(_this), "add", function (msg) {
      var threshold = _this.props.threshold;

      _this.setState(function (state) {
        // This calls cancel on all leaving animations that stack up too much
        if (threshold !== Infinity) {
          state.leaving.slice(threshold - 1).forEach(function (item) {
            return _this.cancel(item, true);
          });
        }

        return {
          items: [].concat(toConsumableArray(state.items), [{
            key: id++,
            msg: msg
          }]),
          preLeaving: []
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "remove", function (item) {
      _this.setState(function (state) {
        return {
          items: state.items.filter(function (i) {
            return i.key !== item.key;
          }),
          leaving: state.leaving.includes(item) ? state.leaving : [item].concat(toConsumableArray(state.leaving))
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "config", function (item, state) {
      var config = springs.lazy; // Return custom configs on leave (includes the life-line duration)

      return state === 'leave' ? [{
        duration: _this.props.timeout
      }, config, config] : config;
    });

    defineProperty(assertThisInitialized(_this), "cancel", function (item) {
      var secondPass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_this.cancelMap.has(item)) {
        var fn = _this.cancelMap.get(item);

        fn(); // There are 3 passes: lifeline, opacity->0, height->0

        if (secondPass) fn();
      }
    });

    defineProperty(assertThisInitialized(_this), "leave", function (item) {
      return /*#__PURE__*/function () {
        var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(next, cancel) {
          return regenerator.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Save cancel so that it can be used interactively
                  _this.cancelMap.set(item, cancel); // Lifeline first


                  _context.next = 3;
                  return next({
                    to: {
                      life: '0%'
                    }
                  });

                case 3:
                  // Add to the pre-leaving list, to know when there are no more toasts
                  // displayed even though they are still finishing their leaving transition.
                  _this.setState(function (state) {
                    return {
                      preLeaving: [].concat(toConsumableArray(state.preLeaving), [item])
                    };
                  }); // Then fade out


                  _context.next = 6;
                  return next({
                    to: {
                      opacity: 0
                    }
                  });

                case 6:
                  _context.next = 8;
                  return next({
                    to: {
                      height: 0
                    }
                  }, true);

                case 8:
                  _this.setState(function (state) {
                    return {
                      leaving: state.leaving.filter(function (i) {
                        return i.key !== item.key;
                      }),
                      preLeaving: state.preLeaving.filter(function (i) {
                        return i.key !== item.key;
                      })
                    };
                  });

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }();
    });

    return _this;
  }

  createClass(ToastHubProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          showIndicator = _this$props.showIndicator,
          position = _this$props.position,
          top = _this$props.top,
          shift = _this$props.shift;
      var _this$state = this.state,
          items = _this$state.items,
          leaving = _this$state.leaving,
          preLeaving = _this$state.preLeaving;
      var renderList = items.length > 0 || leaving.length > 0;
      var itemsVisible = leaving.length === preLeaving.length && leaving.length > 0 ? false : renderList;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToastContext.Provider, {
        value: {
          itemsVisible: itemsVisible,
          add: this.add
        }
      }, children), renderList && /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(ToastList, _extends_1({
        config: this.config,
        items: items,
        leave: this.leave,
        position: position,
        remove: this.remove,
        showIndicator: showIndicator,
        top: top
      }, stylingProps(this), {
        shift: shift
      }))));
    }
  }]);

  return ToastHubProvider;
}(React.PureComponent); // ToastList is separated from ToastHubProvider so we can skip its rendering


defineProperty(ToastHubProvider, "propTypes", {
  children: propTypes.node,
  position: propTypes.PropTypes.oneOf(['left', 'center', 'right']),
  shift: propTypes.number,
  showIndicator: propTypes.bool,
  threshold: propTypes.number,
  timeout: propTypes.number,
  top: propTypes.bool
});

defineProperty(ToastHubProvider, "defaultProps", {
  position: 'right',
  showIndicator: false,
  threshold: Infinity,
  timeout: 4000,
  top: false
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "ToastHub___StyledDiv",
  componentId: "sc-1y0i8xl-0"
})(["position:fixed;z-index:1000;top:", ";bottom:", ";left:", "px;right:", "px;display:flex;margin:0 auto;flex-direction:", ";pointer-events:none;align-items:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "ToastHub___StyledAnimatedDiv",
  componentId: "sc-1y0i8xl-1"
})(["box-sizing:border-box;position:relative;width:", ";"], function (p) {
  return p._css7;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "ToastHub___StyledDiv2",
  componentId: "sc-1y0i8xl-2"
})(["display:flex;align-items:center;overflow:hidden;height:", "px;margin-top:", ";margin-bottom:", ";padding:0 ", "px;", ";color:", ";background:", ";border-radius:", "px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
}, RADIUS);

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "ToastHub___StyledAnimatedDiv2",
  componentId: "sc-1y0i8xl-3"
})(["position:absolute;bottom:", ";left:0;width:auto;height:5px;background-image:linear-gradient( 130deg,#00b4e6,#00f0e0 );"], function (p) {
  return p._css15;
});

var ToastList = /*#__PURE__*/React.memo(function ToastList(_ref2) {
  var config = _ref2.config,
      items = _ref2.items,
      leave = _ref2.leave,
      position = _ref2.position,
      remove = _ref2.remove,
      showIndicator = _ref2.showIndicator,
      top = _ref2.top,
      shift = _ref2.shift,
      props = objectWithoutProperties(_ref2, ["config", "items", "leave", "position", "remove", "showIndicator", "top", "shift"]);

  var theme = useTheme();

  var _useViewport = useViewport(),
      below = _useViewport.below;

  var spacing = below('medium') ? 2 * GU : 3 * GU;
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: top ? "".concat(spacing, "px") : 'unset',
    _css2: top ? 'unset' : "".concat(spacing, "px"),
    _css3: spacing + (shift || 0),
    _css4: spacing + (shift || 0),
    _css5: top ? 'column-reverse' : 'column',
    _css6: function () {
      if (below('medium')) return 'center';
      if (position === 'left') return 'flex-start';
      if (position === 'right') return 'flex-end';
      return 'center';
    }()
  }), /*#__PURE__*/React.createElement(Transition, {
    native: true,
    items: items,
    keys: function keys(item) {
      return item.key;
    },
    from: {
      opacity: 0,
      height: 0,
      life: '100%',
      transform: move(30)
    },
    enter: {
      opacity: 1,
      height: 'auto',
      transform: move(0)
    },
    leave: leave,
    onRest: remove,
    config: config
  }, function (item) {
    return (
      /* eslint-disable react/prop-types */
      function (_ref3) {
        var life = _ref3.life,
            props = objectWithoutProperties(_ref3, ["life"]);

        return /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
          style: props,
          _css7: below('medium') ? '100%' : '42ch'
        }, /*#__PURE__*/React.createElement(_StyledDiv2, {
          _css8: 6 * GU,
          _css9: top ? '0' : "".concat(1.25 * GU, "px"),
          _css10: top ? "".concat(1.25 * GU, "px") : '0',
          _css11: 2.5 * GU,
          _css12: textStyle('body3'),
          _css13: theme.floatingContent,
          _css14: theme.floating.alpha(0.95)
        }, showIndicator && /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, {
          style: {
            right: life
          },
          _css15: top ? "".concat(1.25 * GU, "px") : '0'
        }), /*#__PURE__*/React.createElement("p", null, item.msg)));
      }
    );
  }
  /* eslint-enable react/prop-types */
  ));
});
ToastList.propTypes = {
  config: propTypes.func,
  items: propTypes.array,
  leave: propTypes.func,
  position: propTypes.PropTypes.oneOf(['left', 'center', 'right']),
  remove: propTypes.func,
  shift: propTypes.number,
  showIndicator: propTypes.bool,
  top: propTypes.bool
};

var useToast = function useToast() {
  return useContext(ToastContext).add;
};

var Toast = function Toast(props) {
  return props.children(useToast());
};

export default ToastHubProvider;
export { Toast, ToastContext, useToast };
//# sourceMappingURL=ToastHub.js.map
