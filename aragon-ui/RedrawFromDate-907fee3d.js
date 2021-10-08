'use strict';

var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var React = require('react');
var index = require('./index-37353731.js');
var getDisplayName = require('./getDisplayName-7f913e84.js');
var dayjs_min = require('./dayjs.min-ac79806e.js');
var date = require('./date.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

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
  getPrototypeOf.inherits(RedrawFromDate, _React$Component);

  var _super = _createSuper(RedrawFromDate);

  function RedrawFromDate() {
    var _this;

    getPrototypeOf.classCallCheck(this, RedrawFromDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "clearInterval", function () {
      _this.interval && clearInterval(_this.interval);
    });

    defineProperty.defineProperty(getPrototypeOf.assertThisInitialized(_this), "restartDrawInterval", function (redrawTime) {
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

  getPrototypeOf.createClass(RedrawFromDate, [{
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
      } else if (!dayjs_min.dayjs_min(fromDate).isSame(this.props.fromDate)) {
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
}(React__default['default'].Component);

defineProperty.defineProperty(RedrawFromDate, "propTypes", {
  children: index.propTypes.func.isRequired,
  fromDate: index.propTypes.oneOfType([index.propTypes.string, index.propTypes.number, index.propTypes.instanceOf(Date)]).isRequired
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React__default['default'].createElement(RedrawFromDate, {
      fromDate: props.fromDate
    }, function () {
      return /*#__PURE__*/React__default['default'].createElement(Component, props);
    });
  };

  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate
  };
  HOC.displayName = "RedrawFromDate(".concat(getDisplayName.getDisplayName(Component), ")");
  return HOC;
};

RedrawFromDate.hocWrap = hocWrap;

exports.RedrawFromDate = RedrawFromDate;
//# sourceMappingURL=RedrawFromDate-907fee3d.js.map
