'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
require('styled-components');
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
var web3 = require('./web3.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-40571110.js');
require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
var BadgeBase = require('./BadgeBase.js');

var TransactionBadge = React__default.memo(function TransactionBadge(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      shorten = _ref.shorten,
      style = _ref.style,
      transaction = _ref.transaction,
      background = _ref.background,
      fontSize = _ref.fontSize;

  if (fontSize) {
    environment.warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    environment.warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  var isTx = web3.isTransaction(transaction);
  var transactionUrl = isTx ? web3.blockExplorerUrl('transaction', transaction, {
    networkType: networkType
  }) : '';
  var label = !isTx ? 'Invalid transaction' : shorten ? web3.shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React__default.createElement(BadgeBase.default, {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: index.PropTypes.string,
  disabled: index.PropTypes.bool,
  labelStyle: index.PropTypes.string,
  networkType: index.PropTypes.string,
  shorten: index.PropTypes.bool,
  style: index.PropTypes.object,
  transaction: index.PropTypes.string.isRequired,
  // Deprecated
  background: index.PropTypes.string,
  fontSize: index.PropTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

exports.default = TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
