import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import memoize from '../../../node_modules/lodash/memoize.js';
import dayjs from '../../../node_modules/dayjs/dayjs.min.js';
import { formatHtmlDatetime, difference } from '../../utils/date.js';
import { Redraw } from '../../providers/Redraw/Redraw.js';
import IconClock from '../../icons/components/IconClock.js';
import { useTheme } from '../../theme/Theme2.js';
import { textStyle } from '../../style/text-styles.js';
import { unselectable } from '../../utils/css.js';
import { GU } from '../../style/constants.js';

const RENDER_EVERY = 1000;

const formatUnit = v => String(v).padStart(2, '0');

const formats = {
  yMdhms: 'yMdhms',
  yMdhm: 'yMdhm',
  yMdh: 'yMdh',
  yMd: 'yMd',
  yM: 'yM',
  Mdhms: 'Mdhms',
  Mdhm: 'Mdhm',
  Mdh: 'Mdh',
  Md: 'Md',
  dhms: 'dhms',
  dhm: 'dhm',
  hms: 'hms',
  hm: 'hm',
  ms: 'ms',
  m: 'm',
  s: 's'
};
const unitNames = {
  y: 'years',
  M: 'months',
  d: 'days',
  h: 'hours',
  m: 'minutes',
  s: 'seconds'
};
const getFormat = memoize(format => ['y', 'M', 'd', 'h', 'm', 's'].reduce((units, symbol) => formats[format].includes(symbol) ? [...units, unitNames[symbol]] : units, []));

function getTime(start, end, format, showEmpty, maxUnits) {
  const date1 = end || new Date();
  const date2 = end ? new Date() : start;
  const totalInSeconds = dayjs(date1).diff(date2, 'seconds');
  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  } = difference(date1, date2, {
    keepLeadingZeros: showEmpty,
    maxUnits,
    units: getFormat(format)
  });
  return {
    units: [['Y', years], ['M', months], ['D', days], ['H', hours], ['M', minutes], ['S', seconds]],
    totalInSeconds
  };
}

class Timer extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "renderTime", () => {
      const {
        start,
        end,
        theme,
        format,
        showEmpty,
        maxUnits
      } = this.props;
      const {
        totalInSeconds,
        units
      } = getTime(start, end, format, showEmpty, maxUnits);

      if (totalInSeconds < 0 || Object.is(totalInSeconds, -0)) {
        return /*#__PURE__*/React.createElement(_StyledSpan2, {
          $_css5: textStyle('body2'),
          $_css6: theme.surfaceContentSecondary
        }, end ? 'Time out' : '−');
      }

      const lastUnitIndex = units.reduce((lastIndex, unit, index) => unit[1] === null ? lastIndex : index, 0);
      return /*#__PURE__*/React.createElement("span", null, units.map((unit, index) => {
        const isLast = index === lastUnitIndex;
        const isSeconds = index === units.length - 1; // Only time units (hours, minutes and seconds).
        // Remember to update if ms gets added one day!

        const isTimeUnit = index >= units.length - 3;

        if (unit[1] === null) {
          return null;
        }

        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: index
        }, /*#__PURE__*/React.createElement(_StyledSpan3, {
          $_css7: theme.surfaceContent,
          $_css8: isSeconds && // Fix the width of the seconds unit so that
          // it doesn’t jump too much.
          `
                      display: inline-flex;
                      align-items: baseline;
                      justify-content: space-between;
                      min-width: 31px;
                    `
        }, formatUnit(unit[1]), /*#__PURE__*/React.createElement(_StyledSpan4, {
          $_css9: theme.surfaceContentSecondary
        }, unit[0])), !isLast &&
        /*#__PURE__*/
        // Separator
        React.createElement(_StyledSpan5, {
          $_css10: theme.surfaceContentSecondary
        }, isTimeUnit && ':'));
      }));
    });
  }

  render() {
    const {
      end,
      start,
      showIcon,
      theme
    } = this.props;
    return /*#__PURE__*/React.createElement(_StyledTime, {
      dateTime: formatHtmlDatetime(end || start),
      $_css: unselectable(),
      $_css2: textStyle('body2')
    }, showIcon && /*#__PURE__*/React.createElement(_StyledSpan, {
      $_css3: 0.5 * GU
    }, /*#__PURE__*/React.createElement(_StyledIconTime, {
      $_css4: theme.surfaceIcon
    })), /*#__PURE__*/React.createElement(Redraw, {
      interval: RENDER_EVERY
    }, this.renderTime));
  }

}

_defineProperty(Timer, "propTypes", {
  end: PropTypes.instanceOf(Date),
  format: PropTypes.oneOf(Object.keys(formats)),
  maxUnits: PropTypes.number,
  showEmpty: PropTypes.bool,
  showIcon: PropTypes.bool,
  start: PropTypes.instanceOf(Date),
  theme: PropTypes.object
});

_defineProperty(Timer, "defaultProps", {
  format: formats.yMdhms,
  maxUnits: -1,
  showEmpty: false,
  showIcon: true
});

var Timer$1 = (props => {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(Timer, _extends({}, props, {
    theme: theme
  }));
});

var _StyledTime = _styled("time").withConfig({
  displayName: "Timer___StyledTime",
  componentId: "sc-58hkwl-0"
})(["display:flex;align-items:center;white-space:nowrap;", ";", ";"], p => p.$_css, p => p.$_css2);

var _StyledSpan = _styled("span").withConfig({
  displayName: "Timer___StyledSpan",
  componentId: "sc-58hkwl-1"
})(["display:flex;align-items:center;margin-right:", "px;margin-top:-3px;"], p => p.$_css3);

var _StyledIconTime = _styled(IconClock).withConfig({
  displayName: "Timer___StyledIconTime",
  componentId: "sc-58hkwl-2"
})(["color:", ";"], p => p.$_css4);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "Timer___StyledSpan2",
  componentId: "sc-58hkwl-3"
})(["", ";color:", ";"], p => p.$_css5, p => p.$_css6);

var _StyledSpan3 = _styled("span").withConfig({
  displayName: "Timer___StyledSpan3",
  componentId: "sc-58hkwl-4"
})(["color:", ";", ";"], p => p.$_css7, p => p.$_css8);

var _StyledSpan4 = _styled("span").withConfig({
  displayName: "Timer___StyledSpan4",
  componentId: "sc-58hkwl-5"
})(["margin-left:2px;color:", ";"], p => p.$_css9);

var _StyledSpan5 = _styled("span").withConfig({
  displayName: "Timer___StyledSpan5",
  componentId: "sc-58hkwl-6"
})(["margin:0 4px;color:", ";font-weight:400;"], p => p.$_css10);

export { Timer$1 as default };
//# sourceMappingURL=Timer.js.map
