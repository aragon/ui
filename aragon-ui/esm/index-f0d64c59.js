import React from 'react';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import { g as getDisplayName } from './getDisplayName-d5fc7707.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var Redraw = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Redraw, _React$PureComponent);

  var _super = _createSuper(Redraw);

  function Redraw() {
    var _this;

    _classCallCheck(this, Redraw);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      lastDraw: -1
    });

    _defineProperty(_assertThisInitialized(_this), "draw", function () {
      _this.raf = requestAnimationFrame(_this.draw);
      var interval = _this.props.interval;
      var lastDraw = _this.state.lastDraw;
      var now = Date.now();
      var delta = now - lastDraw;

      if (lastDraw === -1 || delta > interval) {
        _this.setState({
          lastDraw: Math.round(now / interval) * interval
        });
      }
    });

    return _this;
  }

  _createClass(Redraw, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.raf = null;
      this.draw();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.raf && cancelAnimationFrame(this.raf);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children();
    }
  }]);

  return Redraw;
}(React.PureComponent);

_defineProperty(Redraw, "propTypes", {
  interval: PropTypes.number,
  children: PropTypes.func.isRequired
});

_defineProperty(Redraw, "defaultProps", {
  interval: 1000
});

var hocWrap = function hocWrap(Component, interval) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React.createElement(Redraw, {
      interval: interval
    }, function () {
      return /*#__PURE__*/React.createElement(Component, props);
    });
  };

  HOC.displayName = "Redraw(".concat(getDisplayName(Component), ")");
  return HOC;
};

Redraw.hocWrap = hocWrap;

export { Redraw as R };
//# sourceMappingURL=index-f0d64c59.js.map
