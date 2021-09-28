import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import getDisplayName from '../../../node_modules/react-display-name/lib/getDisplayName.js';
import dayjs from '../../../node_modules/dayjs/dayjs.min.js';
import { difference } from '../../utils/date.js';

// adjusts the re-render timer to be one second, minute, or hour based on the
// fromDate prop.
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

const EVERY_SECOND = 1000;
const EVERY_MINUTE = EVERY_SECOND * 60;
const EVERY_HOUR = EVERY_MINUTE * 60;

const getRedrawTime = fromDate => {
  const {
    days,
    hours,
    minutes
  } = difference(new Date(), fromDate);
  return hours || days ? EVERY_HOUR : minutes > 1 ? EVERY_MINUTE : EVERY_SECOND;
};

class RedrawFromDate extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    _defineProperty(this, "clearInterval", () => {
      this.interval && clearInterval(this.interval);
    });

    _defineProperty(this, "restartDrawInterval", redrawTime => {
      this.clearInterval();
      this.interval = setInterval(() => {
        this.setState({
          lastDraw: Date.now()
        });
        const newRedrawTime = getRedrawTime(this.props.fromDate);

        if (newRedrawTime !== redrawTime) {
          this.restartDrawInterval(newRedrawTime);
        }
      }, redrawTime);
    });
  }

  componentDidMount() {
    const {
      fromDate
    } = this.props;

    if (fromDate) {
      this.restartDrawInterval(getRedrawTime(fromDate));
    }
  }

  componentWillReceiveProps({
    fromDate
  }) {
    if (!fromDate && this.props.fromDate) {
      this.clearInterval();
    } else if (!dayjs(fromDate).isSame(this.props.fromDate)) {
      this.restartDrawInterval(getRedrawTime(this.props.fromDate));
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  render() {
    return this.props.children();
  }

}

_defineProperty(RedrawFromDate, "propTypes", {
  children: PropTypes.func.isRequired,
  fromDate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired
});

const hocWrap = Component => {
  const HOC = props => /*#__PURE__*/React.createElement(RedrawFromDate, {
    fromDate: props.fromDate
  }, () => /*#__PURE__*/React.createElement(Component, props));

  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate
  };
  HOC.displayName = `RedrawFromDate(${getDisplayName(Component)})`;
  return HOC;
};

RedrawFromDate.hocWrap = hocWrap;

export { RedrawFromDate, RedrawFromDate as default, hocWrap };
//# sourceMappingURL=RedrawFromDate.js.map
