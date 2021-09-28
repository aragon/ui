import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import Timer from '../Timer/Timer.js';
import { warnOnce } from '../../utils/environment.js';

class Countdown extends React.Component {
  deprecationWarning() {
    warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
  }

  render() {
    this.deprecationWarning();
    const {
      end,
      removeDaysAndHours
    } = this.props;
    const format = removeDaysAndHours ? 'ms' : 'dhms';
    return /*#__PURE__*/React.createElement(Timer, {
      end: end,
      format: format
    });
  }

}

Countdown.propTypes = {
  end: PropTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: PropTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

export { Countdown as default };
//# sourceMappingURL=Countdown.js.map
