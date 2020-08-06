import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import assertThisInitialized$1 from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import getDisplayName$1 from '../../../node_modules/react-display-name/lib/getDisplayName.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var Redraw = /*#__PURE__*/function (_React$PureComponent) {
  inherits$1(Redraw, _React$PureComponent);

  var _super = _createSuper(Redraw);

  function Redraw() {
    var _this;

    classCallCheck$1(this, Redraw);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1(assertThisInitialized$1(_this), "state", {
      lastDraw: -1
    });

    defineProperty$1(assertThisInitialized$1(_this), "draw", function () {
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

  createClass$1(Redraw, [{
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
}(React$1.PureComponent);

defineProperty$1(Redraw, "propTypes", {
  interval: propTypes.number,
  children: propTypes.func.isRequired
});

defineProperty$1(Redraw, "defaultProps", {
  interval: 1000
});

var hocWrap = function hocWrap(Component, interval) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React$1.createElement(Redraw, {
      interval: interval
    }, function () {
      return /*#__PURE__*/React$1.createElement(Component, props);
    });
  };

  HOC.displayName = "Redraw(".concat(getDisplayName$1(Component), ")");
  return HOC;
};

Redraw.hocWrap = hocWrap;

export default Redraw;
export { Redraw, hocWrap };
//# sourceMappingURL=Redraw.js.map
