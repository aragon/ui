'use strict';

var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var index = require('./index-19b0c963.js');
var getDisplayName = require('./getDisplayName-7f913e84.js');
var dayjs_min = require('./dayjs.min-cee6ef8e.js');
var date = require('./date.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
  } = date.difference(new Date(), fromDate);
  return hours || days ? EVERY_HOUR : minutes > 1 ? EVERY_MINUTE : EVERY_SECOND;
};

class RedrawFromDate extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    defineProperty._defineProperty(this, "clearInterval", () => {
      this.interval && clearInterval(this.interval);
    });

    defineProperty._defineProperty(this, "restartDrawInterval", redrawTime => {
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
    } else if (!dayjs_min.dayjs(fromDate).isSame(this.props.fromDate)) {
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

defineProperty._defineProperty(RedrawFromDate, "propTypes", {
  children: index.PropTypes.func.isRequired,
  fromDate: index.PropTypes.oneOfType([index.PropTypes.string, index.PropTypes.number, index.PropTypes.instanceOf(Date)]).isRequired
});

const hocWrap = Component => {
  const HOC = props => /*#__PURE__*/React__default["default"].createElement(RedrawFromDate, {
    fromDate: props.fromDate
  }, () => /*#__PURE__*/React__default["default"].createElement(Component, props));

  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate
  };
  HOC.displayName = `RedrawFromDate(${getDisplayName.getDisplayName(Component)})`;
  return HOC;
};

RedrawFromDate.hocWrap = hocWrap;

exports.RedrawFromDate = RedrawFromDate;
//# sourceMappingURL=RedrawFromDate-0bcd0773.js.map
