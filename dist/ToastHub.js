'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var RootPortal = require('./RootPortal.js');
var Viewport = require('./Viewport-b495052b.js');
var components = require('./components.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
var springs = require('./springs.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Root-6628d0a4.js');
require('./isObject-f0a96713.js');
require('./breakpoints.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

let id = 0;

const move = pixel => `translate3d(0,${pixel}px,0)`;

const ToastContext = /*#__PURE__*/React__default["default"].createContext(() => {
  throw new Error("For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!");
});

class ToastHubProvider extends React__default["default"].PureComponent {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "state", {
      items: [],
      leaving: [],
      preLeaving: []
    });

    defineProperty._defineProperty(this, "cancelMap", new WeakMap());

    defineProperty._defineProperty(this, "add", msg => {
      const threshold = this.props.threshold;
      this.setState(state => {
        // This calls cancel on all leaving animations that stack up too much
        if (threshold !== Infinity) {
          state.leaving.slice(threshold - 1).forEach(item => this.cancel(item, true));
        }

        return {
          items: [...state.items, {
            key: id++,
            msg
          }],
          preLeaving: []
        };
      });
    });

    defineProperty._defineProperty(this, "remove", item => {
      this.setState(state => ({
        items: state.items.filter(i => i.key !== item.key),
        leaving: state.leaving.includes(item) ? state.leaving : [item, ...state.leaving]
      }));
    });

    defineProperty._defineProperty(this, "config", (item, state) => {
      const config = springs.springs.lazy; // Return custom configs on leave (includes the life-line duration)

      return state === 'leave' ? [{
        duration: this.props.timeout
      }, config, config] : config;
    });

    defineProperty._defineProperty(this, "cancel", (item, secondPass = false) => {
      if (this.cancelMap.has(item)) {
        const fn = this.cancelMap.get(item);
        fn(); // There are 3 passes: lifeline, opacity->0, height->0

        if (secondPass) fn();
      }
    });

    defineProperty._defineProperty(this, "leave", item => async (next, cancel) => {
      // Save cancel so that it can be used interactively
      this.cancelMap.set(item, cancel); // Lifeline first

      await next({
        to: {
          life: '0%'
        }
      }); // Add to the pre-leaving list, to know when there are no more toasts
      // displayed even though they are still finishing their leaving transition.

      this.setState(state => ({
        preLeaving: [...state.preLeaving, item]
      })); // Then fade out

      await next({
        to: {
          opacity: 0
        }
      }); // Then shrink, the last "true" informs Keyframes that is is the last frame

      await next({
        to: {
          height: 0
        }
      }, true);
      this.setState(state => ({
        leaving: state.leaving.filter(i => i.key !== item.key),
        preLeaving: state.preLeaving.filter(i => i.key !== item.key)
      }));
    });
  }

  render() {
    const {
      children,
      showIndicator,
      position,
      top,
      shift
    } = this.props;
    const {
      items,
      leaving,
      preLeaving
    } = this.state;
    const renderList = items.length > 0 || leaving.length > 0;
    const itemsVisible = leaving.length === preLeaving.length && leaving.length > 0 ? false : renderList;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(ToastContext.Provider, {
      value: {
        itemsVisible,
        add: this.add
      }
    }, children), renderList && /*#__PURE__*/React__default["default"].createElement(RootPortal["default"], null, /*#__PURE__*/React__default["default"].createElement(ToastList, _extends._extends({
      config: this.config,
      items: items,
      leave: this.leave,
      position: position,
      remove: this.remove,
      showIndicator: showIndicator,
      top: top
    }, components.stylingProps(this), {
      shift: shift
    }))));
  }

} // ToastList is separated from ToastHubProvider so we can skip its rendering


defineProperty._defineProperty(ToastHubProvider, "propTypes", {
  children: index.PropTypes.node,
  position: index.PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
  shift: index.PropTypes.number,
  showIndicator: index.PropTypes.bool,
  threshold: index.PropTypes.number,
  timeout: index.PropTypes.number,
  top: index.PropTypes.bool
});

defineProperty._defineProperty(ToastHubProvider, "defaultProps", {
  position: 'right',
  showIndicator: false,
  threshold: Infinity,
  timeout: 4000,
  top: false
});

const ToastList = /*#__PURE__*/React__default["default"].memo(function ToastList({
  config,
  items,
  leave,
  position,
  remove,
  showIndicator,
  top,
  shift,
  ...props
}) {
  const theme = Theme.useTheme();
  const {
    below
  } = Viewport.useViewport();
  const spacing = below('medium') ? 2 * constants.GU : 3 * constants.GU;
  return /*#__PURE__*/React__default["default"].createElement(_StyledDiv, _extends._extends({}, props, {
    $_css: top ? `${spacing}px` : 'unset',
    $_css2: top ? 'unset' : `${spacing}px`,
    $_css3: spacing + (shift || 0),
    $_css4: spacing + (shift || 0),
    $_css5: top ? 'column-reverse' : 'column',
    $_css6: (() => {
      if (below('medium')) return 'center';
      if (position === 'left') return 'flex-start';
      if (position === 'right') return 'flex-end';
      return 'center';
    })()
  }), /*#__PURE__*/React__default["default"].createElement(web.Transition, {
    native: true,
    items: items,
    keys: item => item.key,
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
  }, item =>
  /* eslint-disable react/prop-types */
  ({
    life,
    ...props
  }) => /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv, {
    style: props,
    $_css7: below('medium') ? '100%' : '42ch'
  }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, {
    $_css8: 6 * constants.GU,
    $_css9: top ? '0' : `${1.25 * constants.GU}px`,
    $_css10: top ? `${1.25 * constants.GU}px` : '0',
    $_css11: 2.5 * constants.GU,
    $_css12: textStyles.textStyle('body3'),
    $_css13: theme.floatingContent,
    $_css14: theme.floating.alpha(0.95)
  }, showIndicator && /*#__PURE__*/React__default["default"].createElement(_StyledAnimatedDiv2, {
    style: {
      right: life
    },
    $_css15: top ? `${1.25 * constants.GU}px` : '0'
  }), /*#__PURE__*/React__default["default"].createElement("p", null, item.msg)))
  /* eslint-enable react/prop-types */
  ));
});
ToastList.propTypes = {
  config: index.PropTypes.func,
  items: index.PropTypes.array,
  leave: index.PropTypes.func,
  position: index.PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
  remove: index.PropTypes.func,
  shift: index.PropTypes.number,
  showIndicator: index.PropTypes.bool,
  top: index.PropTypes.bool
};

const useToast = () => React.useContext(ToastContext).add;

const Toast = props => props.children(useToast());

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "ToastHub___StyledDiv",
  componentId: "sc-1y0i8xl-0"
})(["position:fixed;z-index:1000;top:", ";bottom:", ";left:", "px;right:", "px;display:flex;margin:0 auto;flex-direction:", ";pointer-events:none;align-items:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

var _StyledAnimatedDiv = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "ToastHub___StyledAnimatedDiv",
  componentId: "sc-1y0i8xl-1"
})(["box-sizing:border-box;position:relative;width:", ";"], p => p.$_css7);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "ToastHub___StyledDiv2",
  componentId: "sc-1y0i8xl-2"
})(["display:flex;align-items:center;overflow:hidden;height:", "px;margin-top:", ";margin-bottom:", ";padding:0 ", "px;", ";color:", ";background:", ";border-radius:", "px;"], p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12, p => p.$_css13, p => p.$_css14, constants.RADIUS);

var _StyledAnimatedDiv2 = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "ToastHub___StyledAnimatedDiv2",
  componentId: "sc-1y0i8xl-3"
})(["position:absolute;bottom:", ";left:0;width:auto;height:5px;background-image:linear-gradient( 130deg,#00b4e6,#00f0e0 );"], p => p.$_css15);

exports.Toast = Toast;
exports.ToastContext = ToastContext;
exports["default"] = ToastHubProvider;
exports.useToast = useToast;
//# sourceMappingURL=ToastHub.js.map
