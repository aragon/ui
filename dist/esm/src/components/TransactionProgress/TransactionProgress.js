import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../proptypes.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import Info from '../Info/Info.js';
import Link from '../Link/Link.js';
import Popover from '../Popover/Popover.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import Timer from '../Timer/Timer.js';
import { useTheme } from '../../theme/Theme2.js';
import IconCross from '../../icons/components/IconCross.js';
import { noop } from '../../utils/miscellaneous.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const TransactionProgress = /*#__PURE__*/React.memo(function TransactionProgress({
  visible,
  slow,
  progress,
  endTime,
  transactionHashUrl,
  onClose,
  opener
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(Popover, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(_StyledSection, {
    $_css: 2 * GU
  }, /*#__PURE__*/React.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    $_css2: 1 * GU,
    $_css3: 1 * GU
  }, /*#__PURE__*/React.createElement(IconCross, null)), /*#__PURE__*/React.createElement(_StyledH, null, "Pending transaction"), /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css4: 2 * GU,
    $_css5: 1 * GU
  }, /*#__PURE__*/React.createElement(_StyledSpan, {
    $_css6: textStyle('label2'),
    $_css7: theme.contentSecondary
  }, "Estimated time:"), /*#__PURE__*/React.createElement(Timer, {
    format: "ms",
    end: endTime
  })), /*#__PURE__*/React.createElement(_StyledProgressBar, {
    value: progress,
    $_css8: theme.accent
  }), /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css9: slow ? 'space-between' : 'end',
    $_css10: 2 * GU
  }, slow && /*#__PURE__*/React.createElement(_StyledDiv3, {
    $_css11: 2 * GU
  }, /*#__PURE__*/React.createElement(Info.Alert, null, "Slow transaction. Retry with more gas")), /*#__PURE__*/React.createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Etherscan"))));
});
TransactionProgress.propTypes = {
  endTime: PropTypes.instanceOf(Date),
  onClose: PropTypes.func,
  opener: PropTypes._element,
  progress: PropTypes.number,
  slow: PropTypes.bool,
  transactionHashUrl: PropTypes.string,
  visible: PropTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: noop,
  visible: false
};

var _StyledSection = _styled("section").withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "sc-vvbhu5-0"
})(["padding:", "px;"], p => p.$_css);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "sc-vvbhu5-1"
})(["position:absolute;top:", "px;right:", "px;"], p => p.$_css2, p => p.$_css3);

var _StyledH = _styled("h1").withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "sc-vvbhu5-2"
})(["font-weight:600"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "sc-vvbhu5-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], p => p.$_css4, p => p.$_css5);

var _StyledSpan = _styled("span").withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "sc-vvbhu5-4"
})(["", ";color:", ";"], p => p.$_css6, p => p.$_css7);

var _StyledProgressBar = _styled(ProgressBar).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "sc-vvbhu5-5"
})(["color:", ";"], p => p.$_css8);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "sc-vvbhu5-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], p => p.$_css9, p => p.$_css10);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "sc-vvbhu5-7"
})(["margin-right:", "px;"], p => p.$_css11);

var _StyledLink = _styled(Link).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "sc-vvbhu5-8"
})(["text-decoration:none"]);

export { TransactionProgress as default };
//# sourceMappingURL=TransactionProgress.js.map
