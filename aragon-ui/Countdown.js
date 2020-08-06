'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
require('styled-components');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./dayjs.min-ac79806e.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./constants.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./_baseGetTag-42b4dd3e.js');
require('./IconPropTypes-dd9d2cb1.js');
require('./IconClock.js');
require('./getDisplayName-7f913e84.js');
require('./Redraw-595f0d61.js');
var Timer = require('./Timer.js');

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
      return /*#__PURE__*/React__default.createElement(Timer.default, {
        end: end,
        format: format
      });
    }
  }]);

  return Countdown;
}(React__default.Component);

Countdown.propTypes = {
  end: index.propTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: index.propTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

exports.default = Countdown;
//# sourceMappingURL=Countdown.js.map
