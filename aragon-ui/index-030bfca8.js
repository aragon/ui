'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
var getDisplayName = require('./getDisplayName-7ab6d318.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var Redraw = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf._inherits(Redraw, _React$PureComponent);

  var _super = _createSuper(Redraw);

  function Redraw() {
    var _this;

    getPrototypeOf._classCallCheck(this, Redraw);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "state", {
      lastDraw: -1
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "draw", function () {
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

  getPrototypeOf._createClass(Redraw, [{
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
}(React__default.PureComponent);

defineProperty$1._defineProperty(Redraw, "propTypes", {
  interval: index.PropTypes.number,
  children: index.PropTypes.func.isRequired
});

defineProperty$1._defineProperty(Redraw, "defaultProps", {
  interval: 1000
});

var hocWrap = function hocWrap(Component, interval) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React__default.createElement(Redraw, {
      interval: interval
    }, function () {
      return /*#__PURE__*/React__default.createElement(Component, props);
    });
  };

  HOC.displayName = "Redraw(".concat(getDisplayName.getDisplayName(Component), ")");
  return HOC;
};

Redraw.hocWrap = hocWrap;

exports.Redraw = Redraw;
//# sourceMappingURL=index-030bfca8.js.map
