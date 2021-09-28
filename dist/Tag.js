'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const MODE_INDICATOR = 'indicator';
const MODE_IDENTIFIER = 'identifier';
const MODE_NEW = 'new';
const MODE_ACTIVITY = 'activity';
const SIZE_NORMAL = 'normal';
const SIZE_SMALL = 'small';
const COUNT_DEFAULT = 2;

function useMode(mode) {
  const theme = Theme.useTheme();

  if (mode === MODE_IDENTIFIER) {
    return {
      background: theme.tagIdentifier,
      color: theme.tagIdentifierContent,
      size: SIZE_NORMAL
    };
  }

  if (mode === MODE_NEW) {
    return {
      background: theme.tagNew,
      color: theme.tagNewContent,
      size: SIZE_NORMAL
    };
  }

  if (mode === MODE_ACTIVITY) {
    return {
      background: theme.tagActivity,
      color: theme.tagActivityContent,
      size: SIZE_SMALL
    };
  } // mode === MODE_INDICATOR (default)


  return {
    background: theme.tagIndicator,
    color: theme.tagIndicatorContent,
    size: SIZE_NORMAL
  };
}

function getSize(size, {
  uppercase,
  discMode,
  iconAndLabel
}) {
  if (size === SIZE_SMALL) {
    return `
      min-width: ${2 * constants.GU}px;
      width: ${discMode ? `${2 * constants.GU}px` : 'auto'};
      height: ${2 * constants.GU}px;
      padding: ${discMode ? '0' : `0 ${0.5 * constants.GU}px`};
      padding-top: ${uppercase ? '0.5px' : 0};
      border-radius: ${2 * constants.GU}px;
      ${textStyles.textStyle('label3')};
      font-weight: 600;
    `;
  } // normal


  return `
    min-width: ${2.5 * constants.GU}px;
    width: ${discMode ? `${3 * constants.GU}px` : 'auto'};
    height: ${2.5 * constants.GU}px;
    padding: ${discMode ? '0' : `0 ${1.5 * constants.GU}px`} ;
    padding-top: ${uppercase ? '1px' : 0};
    ${iconAndLabel ? `padding-left: ${1.25 * constants.GU}px` : ''};
    border-radius: ${2.5 * constants.GU}px;
    ${textStyles.textStyle('label2')};
    font-weight: 600;
  `;
}

function useLabel({
  label = '',
  limitDigits
}) {
  const finalLabel = React.useMemo(() => {
    if (limitDigits === false) {
      return typeof label === 'number' ? String(label) : label || '';
    }

    const digits = typeof limitDigits === 'number' ? limitDigits : COUNT_DEFAULT;
    const parsed = parseInt(label, 10);

    if (isNaN(parsed)) {
      return label || '';
    }

    const max = Math.pow(10, digits) - 1;
    const formattedValue = parsed > max ? `${max}+` : parsed;
    return String(formattedValue);
  }, [label, limitDigits]);
  return finalLabel;
}

function Tag({
  background,
  children,
  color,
  limitDigits,
  icon,
  label,
  mode,
  size,
  uppercase,
  ...props
}) {
  if ((icon || label !== undefined) && children !== undefined) {
    throw new Error('Tag: you cannot use icon or label with children.');
  }

  const modeProps = useMode(mode);
  const finalSize = size || modeProps.size;
  const finalLabel = useLabel({
    label: label !== undefined ? label : children,
    limitDigits
  });
  const sizeStyles = getSize(finalSize, {
    uppercase,
    discMode: // icon only
    icon && !finalLabel || !icon && typeof finalLabel === 'string' && finalLabel.length < 2,
    iconAndLabel: icon && finalLabel
  }); // Slightly tweak the alignment when there are no descenders,
  // to make the characters look more aligned.

  const alignmentCorrection = finalSize === SIZE_NORMAL && (uppercase || typeof label === 'number' || limitDigits !== false);
  return /*#__PURE__*/React__default["default"].createElement(_StyledSpan, _extends._extends({}, props, {
    $_css: sizeStyles,
    $_css2: !uppercase ? 'text-transform: unset' : '',
    $_css3: color || modeProps.color,
    $_css4: background || modeProps.background
  }), icon && /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
    $_css5: finalLabel ? 0.25 * constants.GU : 0
  }, icon), /*#__PURE__*/React__default["default"].createElement(_StyledSpan3, {
    $_css6: alignmentCorrection ? '1px' : '0'
  }, finalLabel));
}

Tag.propTypes = {
  background: index.PropTypes.string,
  children: index.PropTypes.node,
  color: index.PropTypes.string,
  limitDigits: index.PropTypes.oneOfType([index.PropTypes.bool, index.PropTypes.number]),
  icon: index.PropTypes.node,
  label: index.PropTypes.oneOfType([index.PropTypes.node, index.PropTypes.number]),
  mode: index.PropTypes.oneOf([MODE_IDENTIFIER, MODE_NEW, MODE_INDICATOR, MODE_ACTIVITY]),
  size: index.PropTypes.oneOf([SIZE_NORMAL, SIZE_SMALL]),
  uppercase: index.PropTypes.bool
};
Tag.defaultProps = {
  uppercase: true,
  limitDigits: false
};

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Tag___StyledSpan",
  componentId: "sc-875dmt-0"
})(["display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;", ";", ";color:", ";background:", ";", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, css.unselectable);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "Tag___StyledSpan2",
  componentId: "sc-875dmt-1"
})(["display:flex;align-items:center;margin-right:", "px;"], p => p.$_css5);

var _StyledSpan3 = _styled__default["default"]("span").withConfig({
  displayName: "Tag___StyledSpan3",
  componentId: "sc-875dmt-2"
})(["overflow:hidden;text-overflow:ellipsis;margin-top:", ";"], p => p.$_css6);

exports["default"] = Tag;
//# sourceMappingURL=Tag.js.map
