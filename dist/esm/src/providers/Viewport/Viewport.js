import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import throttle from '../../../node_modules/lodash/throttle.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';

const NO_DOM_WINDOW_SIZE = {
  width: 0,
  height: 0
};
const WINDOW_SIZE_BASE = {
  breakpoints: BREAKPOINTS,
  ...getCurrentWindowSize()
};
const ViewportContext = /*#__PURE__*/React.createContext(WINDOW_SIZE_BASE);

function getCurrentWindowSize() {
  return typeof window === 'undefined' ? NO_DOM_WINDOW_SIZE : {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

class ViewportProvider extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      windowSize: this.getWindowSize()
    });

    _defineProperty(this, "updateWindowSize", () => {
      this.setState({
        windowSize: this.getWindowSize()
      });
    });

    _defineProperty(this, "within", (min, max) => {
      const {
        width
      } = this.state.windowSize; // Accept "" or -1 indifferently

      if (min === '') min = -1;
      if (max === '') max = -1; // Convert breakpoints into numbers

      if (typeof min === 'string') min = BREAKPOINTS[min];
      if (typeof max === 'string') max = BREAKPOINTS[max];

      if (typeof min !== 'number') {
        throw new Error(`Viewport: invalid minimum value (${min}).`);
      }

      if (typeof max !== 'number') {
        throw new Error(`Viewport: invalid maximum value (${max}).`);
      }

      return (min === -1 || width >= min) && (max === -1 || width < max);
    });

    _defineProperty(this, "above", value => this.within(value, -1));

    _defineProperty(this, "below", value => this.within(-1, value));
  }

  componentDidMount() {
    this.resizeStart();
  }

  componentWillUnmount() {
    this.resizeStop();
  }

  componentDidUpdate(prevProps) {
    const {
      throttle
    } = this.props;

    if (prevProps.throttle !== throttle) {
      this.resizeStop();
      this.resizeStart();
    }
  }

  resizeStart() {
    this._handleResize = throttle(this.updateWindowSize, this.props.throttle);
    this.updateWindowSize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this._handleResize);
    }
  }

  resizeStop() {
    if (!this._handleResize) {
      return;
    }

    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this._handleResize);
    }

    this._handleResize.cancel();

    delete this._handleResize;
  }

  getWindowSize() {
    return { ...WINDOW_SIZE_BASE,
      ...getCurrentWindowSize()
    };
  } // Check if the current width is between two points.
  // Accepts a breakpoint string ('small', 'large') or numbers (width in pixels).
  // `min` is inclusive and `max` is exclusive.


  render() {
    const {
      windowSize
    } = this.state;
    const {
      children
    } = this.props;
    const {
      within,
      above,
      below
    } = this;
    return /*#__PURE__*/React.createElement(ViewportContext.Provider, {
      value: { ...windowSize,
        within,
        above,
        below
      }
    }, children);
  }

} // React emits a warning message if `Provider` is attached to `Consumer`, this
// is only to prevent it.


_defineProperty(ViewportProvider, "propTypes", {
  children: PropTypes.node,
  throttle: PropTypes.number
});

_defineProperty(ViewportProvider, "defaultProps", {
  throttle: 100
});

const Viewport = props => /*#__PURE__*/React.createElement(ViewportContext.Consumer, props);

Viewport.Provider = ViewportProvider;
const useViewport = () => React.useContext(ViewportContext);

export { Viewport, Viewport as default, useViewport };
//# sourceMappingURL=Viewport.js.map
