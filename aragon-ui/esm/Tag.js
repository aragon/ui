import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React, { useMemo } from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import { unselectable } from './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import { textStyle } from './text-styles.js';
import './theme-dark.js';
import './theme-light.js';
import { useTheme } from './Theme.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

var MODE_INDICATOR = 'indicator';
var MODE_IDENTIFIER = 'identifier';
var MODE_NEW = 'new';
var MODE_ACTIVITY = 'activity';
var SIZE_NORMAL = 'normal';
var SIZE_SMALL = 'small';
var COUNT_DEFAULT = 2;

function useMode(mode) {
  var theme = useTheme();

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

function getSize(size, _ref) {
  var uppercase = _ref.uppercase,
      discMode = _ref.discMode,
      iconAndLabel = _ref.iconAndLabel;

  if (size === SIZE_SMALL) {
    return "\n      min-width: ".concat(2 * GU, "px;\n      width: ").concat(discMode ? "".concat(2 * GU, "px") : 'auto', ";\n      height: ").concat(2 * GU, "px;\n      padding: ").concat(discMode ? '0' : "0 ".concat(0.5 * GU, "px"), ";\n      padding-top: ").concat(uppercase ? '0.5px' : 0, ";\n      border-radius: ").concat(2 * GU, "px;\n      ").concat(textStyle('label3'), ";\n      font-weight: 600;\n    ");
  } // normal


  return "\n    min-width: ".concat(2.5 * GU, "px;\n    width: ").concat(discMode ? "".concat(3 * GU, "px") : 'auto', ";\n    height: ").concat(2.5 * GU, "px;\n    padding: ").concat(discMode ? '0' : "0 ".concat(1.5 * GU, "px"), " ;\n    padding-top: ").concat(uppercase ? '1px' : 0, ";\n    ").concat(iconAndLabel ? "padding-left: ".concat(1.25 * GU, "px") : '', ";\n    border-radius: ").concat(2.5 * GU, "px;\n    ").concat(textStyle('label2'), ";\n    font-weight: 600;\n  ");
}

function useLabel(_ref2) {
  var _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? '' : _ref2$label,
      limitDigits = _ref2.limitDigits;
  var finalLabel = useMemo(function () {
    if (limitDigits === false) {
      return typeof label === 'number' ? String(label) : label || '';
    }

    var digits = typeof limitDigits === 'number' ? limitDigits : COUNT_DEFAULT;
    var parsed = parseInt(label, 10);

    if (isNaN(parsed)) {
      return label || '';
    }

    var max = Math.pow(10, digits) - 1;
    var formattedValue = parsed > max ? "".concat(max, "+") : parsed;
    return String(formattedValue);
  }, [label, limitDigits]);
  return finalLabel;
}

var _StyledSpan = _styled("span").withConfig({
  displayName: "Tag___StyledSpan",
  componentId: "sc-875dmt-0"
})(["display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;", ";", ";color:", ";background:", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, unselectable);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "Tag___StyledSpan2",
  componentId: "sc-875dmt-1"
})(["display:flex;align-items:center;margin-right:", "px;"], function (p) {
  return p._css5;
});

var _StyledSpan3 = _styled("span").withConfig({
  displayName: "Tag___StyledSpan3",
  componentId: "sc-875dmt-2"
})(["overflow:hidden;text-overflow:ellipsis;margin-top:", ";"], function (p) {
  return p._css6;
});

function Tag(_ref3) {
  var background = _ref3.background,
      children = _ref3.children,
      color = _ref3.color,
      limitDigits = _ref3.limitDigits,
      icon = _ref3.icon,
      label = _ref3.label,
      mode = _ref3.mode,
      size = _ref3.size,
      uppercase = _ref3.uppercase,
      props = _objectWithoutProperties(_ref3, ["background", "children", "color", "limitDigits", "icon", "label", "mode", "size", "uppercase"]);

  if ((icon || label !== undefined) && children !== undefined) {
    throw new Error('Tag: you cannot use icon or label with children.');
  }

  var modeProps = useMode(mode);
  var finalSize = size || modeProps.size;
  var finalLabel = useLabel({
    label: label !== undefined ? label : children,
    limitDigits: limitDigits
  });
  var sizeStyles = getSize(finalSize, {
    uppercase: uppercase,
    discMode: // icon only
    icon && !finalLabel || // label only, using 1 or 0 chars
    !icon && typeof finalLabel === 'string' && finalLabel.length < 2,
    iconAndLabel: icon && finalLabel
  }); // Slightly tweak the alignment when there are no descenders,
  // to make the characters look more aligned.

  var alignmentCorrection = finalSize === SIZE_NORMAL && (uppercase || typeof label === 'number' || limitDigits !== false);
  return /*#__PURE__*/React.createElement(_StyledSpan, _extends({}, props, {
    _css: sizeStyles,
    _css2: !uppercase ? 'text-transform: unset' : '',
    _css3: color || modeProps.color,
    _css4: background || modeProps.background
  }), icon && /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css5: finalLabel ? 0.25 * GU : 0
  }, icon), /*#__PURE__*/React.createElement(_StyledSpan3, {
    _css6: alignmentCorrection ? '1px' : '0'
  }, finalLabel));
}

Tag.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  limitDigits: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  icon: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.number]),
  mode: PropTypes.oneOf([MODE_IDENTIFIER, MODE_NEW, MODE_INDICATOR, MODE_ACTIVITY]),
  size: PropTypes.oneOf([SIZE_NORMAL, SIZE_SMALL]),
  uppercase: PropTypes.bool
};
Tag.defaultProps = {
  uppercase: true,
  limitDigits: false
};

export default Tag;
//# sourceMappingURL=Tag.js.map
