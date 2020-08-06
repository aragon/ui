import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { warnOnce } from '../../utils/environment.js';
import Timer$1 from '../Timer/Timer.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Countdown = /*#__PURE__*/function (_React$Component) {
  inherits$1(Countdown, _React$Component);

  var _super = _createSuper(Countdown);

  function Countdown() {
    classCallCheck$1(this, Countdown);

    return _super.apply(this, arguments);
  }

  createClass$1(Countdown, [{
    key: "deprecationWarning",
    value: function deprecationWarning() {
      warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
    }
  }, {
    key: "render",
    value: function render() {
      this.deprecationWarning();
      var _this$props = this.props,
          end = _this$props.end,
          removeDaysAndHours = _this$props.removeDaysAndHours;
      var format = removeDaysAndHours ? 'ms' : 'dhms';
      return /*#__PURE__*/React$1.createElement(Timer$1, {
        end: end,
        format: format
      });
    }
  }]);

  return Countdown;
}(React$1.Component);

Countdown.propTypes = {
  end: propTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: propTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

export default Countdown;
//# sourceMappingURL=Countdown.js.map
