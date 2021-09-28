'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-19b0c963.js');
var Timer = require('./Timer.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./defineProperty-fdbd3c46.js');
require('styled-components');
require('./isObject-f0a96713.js');
require('./dayjs.min-cee6ef8e.js');
require('./date.js');
require('./Redraw-ed2990f7.js');
require('./getDisplayName-7f913e84.js');
require('./IconClock.js');
require('./IconPropTypes-435c57cb.js');
require('./index-70e12149.js');
require('./constants.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class Countdown extends React__default["default"].Component {
  deprecationWarning() {
    environment.warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
  }

  render() {
    this.deprecationWarning();
    const {
      end,
      removeDaysAndHours
    } = this.props;
    const format = removeDaysAndHours ? 'ms' : 'dhms';
    return /*#__PURE__*/React__default["default"].createElement(Timer["default"], {
      end: end,
      format: format
    });
  }

}

Countdown.propTypes = {
  end: index.PropTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: index.PropTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

exports["default"] = Countdown;
//# sourceMappingURL=Countdown.js.map
