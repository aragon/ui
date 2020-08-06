import React$1 from 'react';
import _styled$1 from 'styled-components';
import { noop } from '../../utils/miscellaneous.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCross$1 from '../../icons/components/IconCross.js';
import ButtonIcon$1 from '../Button/ButtonIcon.js';
import Link$1 from '../Link/Link.js';
import ExtendedPropTypes from '../../proptypes.js';
import Popover$1 from '../Popover/Popover.js';
import Info$1 from '../Info/Info.js';
import ProgressBar$1 from '../ProgressBar/ProgressBar.js';
import Timer$1 from '../Timer/Timer.js';

var _StyledSection = _styled$1("section").withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "vvbhu5-0"
})(["padding:", "px;"], function (p) {
  return p._css;
});

var _StyledButtonIcon = _styled$1(ButtonIcon$1).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "vvbhu5-1"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledH = _styled$1("h1").withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "vvbhu5-2"
})(["font-weight:600"]);

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "vvbhu5-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "vvbhu5-4"
})(["", ";color:", ";"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledProgressBar = _styled$1(ProgressBar$1).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "vvbhu5-5"
})(["color:", ";"], function (p) {
  return p._css8;
});

var _StyledDiv2 = _styled$1("div").withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "vvbhu5-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _StyledDiv3 = _styled$1("div").withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "vvbhu5-7"
})(["margin-right:", "px;"], function (p) {
  return p._css11;
});

var _StyledLink = _styled$1(Link$1).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "vvbhu5-8"
})(["text-decoration:none"]);

var TransactionProgress = /*#__PURE__*/React$1.memo(function TransactionProgress(_ref) {
  var visible = _ref.visible,
      slow = _ref.slow,
      progress = _ref.progress,
      endTime = _ref.endTime,
      transactionHashUrl = _ref.transactionHashUrl,
      onClose = _ref.onClose,
      opener = _ref.opener;
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(Popover$1, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React$1.createElement(_StyledSection, {
    _css: 2 * GU
  }, /*#__PURE__*/React$1.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    _css2: 1 * GU,
    _css3: 1 * GU
  }, /*#__PURE__*/React$1.createElement(IconCross$1, null)), /*#__PURE__*/React$1.createElement(_StyledH, null, "Pending transaction"), /*#__PURE__*/React$1.createElement(_StyledDiv, {
    _css4: 2 * GU,
    _css5: 1 * GU
  }, /*#__PURE__*/React$1.createElement(_StyledSpan, {
    _css6: textStyle('label2'),
    _css7: theme.contentSecondary
  }, "Estimated time:"), /*#__PURE__*/React$1.createElement(Timer$1, {
    format: "ms",
    end: endTime
  })), /*#__PURE__*/React$1.createElement(_StyledProgressBar, {
    value: progress,
    _css8: theme.accent
  }), /*#__PURE__*/React$1.createElement(_StyledDiv2, {
    _css9: slow ? 'space-between' : 'end',
    _css10: 2 * GU
  }, slow && /*#__PURE__*/React$1.createElement(_StyledDiv3, {
    _css11: 2 * GU
  }, /*#__PURE__*/React$1.createElement(Info$1.Alert, null, "Slow transaction. Retry with more gas")), /*#__PURE__*/React$1.createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Etherscan"))));
});
TransactionProgress.propTypes = {
  endTime: ExtendedPropTypes.instanceOf(Date),
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  progress: ExtendedPropTypes.number,
  slow: ExtendedPropTypes.bool,
  transactionHashUrl: ExtendedPropTypes.string,
  visible: ExtendedPropTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: noop,
  visible: false
};

export default TransactionProgress;
//# sourceMappingURL=TransactionProgress.js.map
