import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { unselectable } from '../../utils/css.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

const MODE_INDICATOR = 'indicator';
const MODE_IDENTIFIER = 'identifier';
const MODE_NEW = 'new';
const MODE_ACTIVITY = 'activity';
const SIZE_NORMAL = 'normal';
const SIZE_SMALL = 'small';
const COUNT_DEFAULT = 2;

function useMode(mode) {
  const theme = useTheme();

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
      min-width: ${2 * GU}px;
      width: ${discMode ? `${2 * GU}px` : 'auto'};
      height: ${2 * GU}px;
      padding: ${discMode ? '0' : `0 ${0.5 * GU}px`};
      padding-top: ${uppercase ? '0.5px' : 0};
      border-radius: ${2 * GU}px;
      ${textStyle('label3')};
      font-weight: 600;
    `;
  } // normal


  return `
    min-width: ${2.5 * GU}px;
    width: ${discMode ? `${3 * GU}px` : 'auto'};
    height: ${2.5 * GU}px;
    padding: ${discMode ? '0' : `0 ${1.5 * GU}px`} ;
    padding-top: ${uppercase ? '1px' : 0};
    ${iconAndLabel ? `padding-left: ${1.25 * GU}px` : ''};
    border-radius: ${2.5 * GU}px;
    ${textStyle('label2')};
    font-weight: 600;
  `;
}

function useLabel({
  label = '',
  limitDigits
}) {
  const finalLabel = useMemo(() => {
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
  return /*#__PURE__*/React.createElement(_StyledSpan, _extends({}, props, {
    $_css: sizeStyles,
    $_css2: !uppercase ? 'text-transform: unset' : '',
    $_css3: color || modeProps.color,
    $_css4: background || modeProps.background
  }), icon && /*#__PURE__*/React.createElement(_StyledSpan2, {
    $_css5: finalLabel ? 0.25 * GU : 0
  }, icon), /*#__PURE__*/React.createElement(_StyledSpan3, {
    $_css6: alignmentCorrection ? '1px' : '0'
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

var _StyledSpan = _styled("span").withConfig({
  displayName: "Tag___StyledSpan",
  componentId: "sc-875dmt-0"
})(["display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;", ";", ";color:", ";background:", ";", ";"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, unselectable);

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "Tag___StyledSpan2",
  componentId: "sc-875dmt-1"
})(["display:flex;align-items:center;margin-right:", "px;"], p => p.$_css5);

var _StyledSpan3 = _styled("span").withConfig({
  displayName: "Tag___StyledSpan3",
  componentId: "sc-875dmt-2"
})(["overflow:hidden;text-overflow:ellipsis;margin-top:", ";"], p => p.$_css6);

export { Tag as default };
//# sourceMappingURL=Tag.js.map
