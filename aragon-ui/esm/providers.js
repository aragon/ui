import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _defineProperty } from './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import 'styled-components';
import { _ as _inherits, a as _createClass, b as _classCallCheck, e as _assertThisInitialized, c as _getPrototypeOf, d as _possibleConstructorReturn } from './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import { d as dayjs } from './dayjs.min-e57fb69a.js';
import { difference } from './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import './isObject-3c6ec07e.js';
export { V as Viewport, u as useViewport } from './Viewport-cc7debfb.js';
import { g as getDisplayName } from './getDisplayName-d5fc7707.js';
export { P as PublicUrl } from './index-edfeada6.js';
export { R as Root, u as useRoot } from './index-f754c2df.js';
export { observe } from './observe.js';
export { R as Redraw } from './index-f0d64c59.js';

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
// adjusts the re-render timer to be one second, minute, or hour based on the
// fromDate prop.
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var EVERY_SECOND = 1000;
var EVERY_MINUTE = EVERY_SECOND * 60;
var EVERY_HOUR = EVERY_MINUTE * 60;

var getRedrawTime = function getRedrawTime(fromDate) {
  var _difference = difference(new Date(), fromDate),
      days = _difference.days,
      hours = _difference.hours,
      minutes = _difference.minutes;

  return hours || days ? EVERY_HOUR : minutes > 1 ? EVERY_MINUTE : EVERY_SECOND;
};

var RedrawFromDate = /*#__PURE__*/function (_React$Component) {
  _inherits(RedrawFromDate, _React$Component);

  var _super = _createSuper(RedrawFromDate);

  function RedrawFromDate() {
    var _this;

    _classCallCheck(this, RedrawFromDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    _defineProperty(_assertThisInitialized(_this), "clearInterval", function () {
      _this.interval && clearInterval(_this.interval);
    });

    _defineProperty(_assertThisInitialized(_this), "restartDrawInterval", function (redrawTime) {
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

  _createClass(RedrawFromDate, [{
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
      } else if (!dayjs(fromDate).isSame(this.props.fromDate)) {
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
}(React.Component);

_defineProperty(RedrawFromDate, "propTypes", {
  children: PropTypes.func.isRequired,
  fromDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React.createElement(RedrawFromDate, {
      fromDate: props.fromDate
    }, function () {
      return /*#__PURE__*/React.createElement(Component, props);
    });
  };

  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate
  };
  HOC.displayName = "RedrawFromDate(".concat(getDisplayName(Component), ")");
  return HOC;
};

RedrawFromDate.hocWrap = hocWrap;

export { RedrawFromDate };
//# sourceMappingURL=providers.js.map
