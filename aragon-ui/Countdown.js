'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var React = require('react');
var index = require('./index-37353731.js');
var Timer = require('./Timer.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-023d783e.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('styled-components');
require('./_baseGetTag-6ec23aaa.js');
require('./dayjs.min-ac79806e.js');
require('./date.js');
require('./slicedToArray-a8a77f0e.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconClock.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./IconPropTypes-b9997416.js');
require('./index-c33eeeef.js');
require('./constants.js');
require('./Redraw-ec0ae004.js');
require('./getDisplayName-7f913e84.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Countdown = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf.inherits(Countdown, _React$Component);

  var _super = _createSuper(Countdown);

  function Countdown() {
    getPrototypeOf.classCallCheck(this, Countdown);

    return _super.apply(this, arguments);
  }

  getPrototypeOf.createClass(Countdown, [{
    key: "deprecationWarning",
    value: function deprecationWarning() {
      environment.warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
    }
  }, {
    key: "render",
    value: function render() {
      this.deprecationWarning();
      var _this$props = this.props,
          end = _this$props.end,
          removeDaysAndHours = _this$props.removeDaysAndHours;
      var format = removeDaysAndHours ? 'ms' : 'dhms';
      return /*#__PURE__*/React__default['default'].createElement(Timer['default'], {
        end: end,
        format: format
      });
    }
  }]);

  return Countdown;
}(React__default['default'].Component);

Countdown.propTypes = {
  end: index.propTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: index.propTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

exports.default = Countdown;
//# sourceMappingURL=Countdown.js.map
