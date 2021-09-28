import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React, { useContext } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Transition, animated as extendedAnimated } from '../../../node_modules/react-spring/web.js';
import RootPortal from '../RootPortal/RootPortal.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { stylingProps } from '../../utils/components.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU, RADIUS } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { springs } from '../../style/springs.js';

let id = 0;

const move = pixel => `translate3d(0,${pixel}px,0)`;

const ToastContext = /*#__PURE__*/React.createContext(() => {
  throw new Error("For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!");
});

class ToastHubProvider extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      items: [],
      leaving: [],
      preLeaving: []
    });

    _defineProperty(this, "cancelMap", new WeakMap());

    _defineProperty(this, "add", msg => {
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

    _defineProperty(this, "remove", item => {
      this.setState(state => ({
        items: state.items.filter(i => i.key !== item.key),
        leaving: state.leaving.includes(item) ? state.leaving : [item, ...state.leaving]
      }));
    });

    _defineProperty(this, "config", (item, state) => {
      const config = springs.lazy; // Return custom configs on leave (includes the life-line duration)

      return state === 'leave' ? [{
        duration: this.props.timeout
      }, config, config] : config;
    });

    _defineProperty(this, "cancel", (item, secondPass = false) => {
      if (this.cancelMap.has(item)) {
        const fn = this.cancelMap.get(item);
        fn(); // There are 3 passes: lifeline, opacity->0, height->0

        if (secondPass) fn();
      }
    });

    _defineProperty(this, "leave", item => async (next, cancel) => {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ToastContext.Provider, {
      value: {
        itemsVisible,
        add: this.add
      }
    }, children), renderList && /*#__PURE__*/React.createElement(RootPortal, null, /*#__PURE__*/React.createElement(ToastList, _extends({
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

} // ToastList is separated from ToastHubProvider so we can skip its rendering


_defineProperty(ToastHubProvider, "propTypes", {
  children: PropTypes.node,
  position: PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
  shift: PropTypes.number,
  showIndicator: PropTypes.bool,
  threshold: PropTypes.number,
  timeout: PropTypes.number,
  top: PropTypes.bool
});

_defineProperty(ToastHubProvider, "defaultProps", {
  position: 'right',
  showIndicator: false,
  threshold: Infinity,
  timeout: 4000,
  top: false
});

const ToastList = /*#__PURE__*/React.memo(function ToastList({
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
  const theme = useTheme();
  const {
    below
  } = useViewport();
  const spacing = below('medium') ? 2 * GU : 3 * GU;
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
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
  }), /*#__PURE__*/React.createElement(Transition, {
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
  }) => /*#__PURE__*/React.createElement(_StyledAnimatedDiv, {
    style: props,
    $_css7: below('medium') ? '100%' : '42ch'
  }, /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css8: 6 * GU,
    $_css9: top ? '0' : `${1.25 * GU}px`,
    $_css10: top ? `${1.25 * GU}px` : '0',
    $_css11: 2.5 * GU,
    $_css12: textStyle('body3'),
    $_css13: theme.floatingContent,
    $_css14: theme.floating.alpha(0.95)
  }, showIndicator && /*#__PURE__*/React.createElement(_StyledAnimatedDiv2, {
    style: {
      right: life
    },
    $_css15: top ? `${1.25 * GU}px` : '0'
  }), /*#__PURE__*/React.createElement("p", null, item.msg)))
  /* eslint-enable react/prop-types */
  ));
});
ToastList.propTypes = {
  config: PropTypes.func,
  items: PropTypes.array,
  leave: PropTypes.func,
  position: PropTypes.PropTypes.oneOf(['left', 'center', 'right']),
  remove: PropTypes.func,
  shift: PropTypes.number,
  showIndicator: PropTypes.bool,
  top: PropTypes.bool
};

const useToast = () => useContext(ToastContext).add;

const Toast = props => props.children(useToast());

var _StyledDiv = _styled("div").withConfig({
  displayName: "ToastHub___StyledDiv",
  componentId: "sc-1y0i8xl-0"
})(["position:fixed;z-index:1000;top:", ";bottom:", ";left:", "px;right:", "px;display:flex;margin:0 auto;flex-direction:", ";pointer-events:none;align-items:", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6);

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "ToastHub___StyledAnimatedDiv",
  componentId: "sc-1y0i8xl-1"
})(["box-sizing:border-box;position:relative;width:", ";"], p => p.$_css7);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "ToastHub___StyledDiv2",
  componentId: "sc-1y0i8xl-2"
})(["display:flex;align-items:center;overflow:hidden;height:", "px;margin-top:", ";margin-bottom:", ";padding:0 ", "px;", ";color:", ";background:", ";border-radius:", "px;"], p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12, p => p.$_css13, p => p.$_css14, RADIUS);

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "ToastHub___StyledAnimatedDiv2",
  componentId: "sc-1y0i8xl-3"
})(["position:absolute;bottom:", ";left:0;width:auto;height:5px;background-image:linear-gradient( 130deg,#00b4e6,#00f0e0 );"], p => p.$_css15);

export { Toast, ToastContext, ToastHubProvider as default, useToast };
//# sourceMappingURL=ToastHub.js.map
