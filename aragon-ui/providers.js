'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
require('styled-components');
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
var dayjs_min = require('./dayjs.min-e07657bf.js');
var date = require('./date.js');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./isObject-ec755c87.js');
var Viewport = require('./Viewport-15101437.js');
var getDisplayName = require('./getDisplayName-7ab6d318.js');
var index$2 = require('./index-bc84a358.js');
var index$1$1 = require('./index-0db71dc1.js');
var observe = require('./observe.js');
var index$1 = require('./index-030bfca8.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
// adjusts the re-render timer to be one second, minute, or hour based on the
// fromDate prop.
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var EVERY_SECOND = 1000;
var EVERY_MINUTE = EVERY_SECOND * 60;
var EVERY_HOUR = EVERY_MINUTE * 60;

var getRedrawTime = function getRedrawTime(fromDate) {
  var _difference = date.difference(new Date(), fromDate),
      days = _difference.days,
      hours = _difference.hours,
      minutes = _difference.minutes;

  return hours || days ? EVERY_HOUR : minutes > 1 ? EVERY_MINUTE : EVERY_SECOND;
};

var RedrawFromDate = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf._inherits(RedrawFromDate, _React$Component);

  var _super = _createSuper(RedrawFromDate);

  function RedrawFromDate() {
    var _this;

    getPrototypeOf._classCallCheck(this, RedrawFromDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "clearInterval", function () {
      _this.interval && clearInterval(_this.interval);
    });

    defineProperty$1._defineProperty(getPrototypeOf._assertThisInitialized(_this), "restartDrawInterval", function (redrawTime) {
      _this.clearInterval();

      _this.interval = setInterval(function () {
        _this.setState({
          lastDraw: Date.now()
        });

        var newRedrawTime = getRedrawTime(_this.props.fromDate);

        if (newRedrawTime !== redrawTime) {
          _this.restartDrawInterval(newRedrawTime);
        }
      }, redrawTime);
    });

    return _this;
  }

  getPrototypeOf._createClass(RedrawFromDate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fromDate = this.props.fromDate;

      if (fromDate) {
        this.restartDrawInterval(getRedrawTime(fromDate));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var fromDate = _ref.fromDate;

      if (!fromDate && this.props.fromDate) {
        this.clearInterval();
      } else if (!dayjs_min.dayjs(fromDate).isSame(this.props.fromDate)) {
        this.restartDrawInterval(getRedrawTime(this.props.fromDate));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearInterval();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children();
    }
  }]);

  return RedrawFromDate;
}(React__default.Component);

defineProperty$1._defineProperty(RedrawFromDate, "propTypes", {
  children: index.PropTypes.func.isRequired,
  fromDate: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number, index.PropTypes.instanceOf(Date)]).isRequired
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React__default.createElement(RedrawFromDate, {
      fromDate: props.fromDate
    }, function () {
      return /*#__PURE__*/React__default.createElement(Component, props);
    });
  };

  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate
  };
  HOC.displayName = "RedrawFromDate(".concat(getDisplayName.getDisplayName(Component), ")");
  return HOC;
};

RedrawFromDate.hocWrap = hocWrap;

exports.Viewport = Viewport.Viewport;
exports.useViewport = Viewport.useViewport;
exports.PublicUrl = index$2.PublicUrl;
exports.Root = index$1$1.Root;
exports.useRoot = index$1$1.useRoot;
exports.observe = observe.observe;
exports.Redraw = index$1.Redraw;
exports.RedrawFromDate = RedrawFromDate;
//# sourceMappingURL=providers.js.map
