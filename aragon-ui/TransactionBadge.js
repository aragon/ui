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
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./css.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./keycodes.js');
var web3 = require('./web3-4e58c255.js');
require('./constants.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
require('./FocusVisible.js');
require('./ButtonBase.js');
var BadgeBase = require('./BadgeBase.js');

var TransactionBadge = /*#__PURE__*/React__default.memo(function TransactionBadge(_ref) {
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
  className: index.propTypes.string,
  disabled: index.propTypes.bool,
  labelStyle: index.propTypes.string,
  networkType: index.propTypes.string,
  shorten: index.propTypes.bool,
  style: index.propTypes.object,
  transaction: index.propTypes.string.isRequired,
  // Deprecated
  background: index.propTypes.string,
  fontSize: index.propTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

exports.default = TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
