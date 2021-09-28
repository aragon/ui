import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import getDisplayName from '../../../node_modules/react-display-name/lib/getDisplayName.js';

// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

class Redraw extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      lastDraw: -1
    });

    _defineProperty(this, "draw", () => {
      this.raf = requestAnimationFrame(this.draw);
      const {
        interval
      } = this.props;
      const {
        lastDraw
      } = this.state;
      const now = Date.now();
      const delta = now - lastDraw;

      if (lastDraw === -1 || delta > interval) {
        this.setState({
          lastDraw: Math.round(now / interval) * interval
        });
      }
    });
  }

  componentDidMount() {
    this.raf = null;
    this.draw();
  }

  componentWillUnmount() {
    this.raf && cancelAnimationFrame(this.raf);
  }

  render() {
    return this.props.children();
  }

}

_defineProperty(Redraw, "propTypes", {
  interval: PropTypes.number,
  children: PropTypes.func.isRequired
});

_defineProperty(Redraw, "defaultProps", {
  interval: 1000
});

const hocWrap = (Component, interval) => {
  const HOC = props => /*#__PURE__*/React.createElement(Redraw, {
    interval: interval
  }, () => /*#__PURE__*/React.createElement(Component, props));

  HOC.displayName = `Redraw(${getDisplayName(Component)})`;
  return HOC;
};

Redraw.hocWrap = hocWrap;

export { Redraw, Redraw as default, hocWrap };
//# sourceMappingURL=Redraw.js.map
