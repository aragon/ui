'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var environment = require('./environment.js');
require('./miscellaneous.js');

// generic names in our components.

const DEFAULT_FONT_FAMILY = 'aragon-ui';
const MONOSPACE_FONT_FAMILY = 'aragon-ui-monospace';
const monospace = () => `
  font-family: ${MONOSPACE_FONT_FAMILY}, monospace;
`;
const FONT_SIZES = {
  xxsmall: '11px',
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
  great: '37px'
};
const FONT_WEIGHTS = {
  normal: '400',
  bold: '600',
  bolder: '800'
};

const fontSizeCss = size => {
  const fontSize = FONT_SIZES[size];
  return fontSize !== undefined ? `
      line-height: 1.5;
      font-size: ${fontSize}
    ` : '';
};

const weightCss = weight => {
  const fontWeight = FONT_WEIGHTS[weight];
  return fontWeight !== undefined ? `font-weight: ${fontWeight}` : '';
};

const smallcapsCss = smallcaps => smallcaps ? `
      text-transform: lowercase;
      font-variant: small-caps;
    ` : '';

const monospaceCss = monospace => monospace ? `
      font-family: ${MONOSPACE_FONT_FAMILY}, monospace;
    ` : '';

function font({
  size,
  weight,
  smallcaps = false,
  monospace = false,
  deprecationNotice = true
}) {
  if (deprecationNotice) {
    environment.warnOnce('font()', 'font() is deprecated. Please use textStyle() instead.');
  }

  return `
    ${fontSizeCss(size)};
    ${weightCss(weight)};
    ${smallcapsCss(smallcaps)};
    ${monospaceCss(monospace)};
  `;
}

exports.DEFAULT_FONT_FAMILY = DEFAULT_FONT_FAMILY;
exports.MONOSPACE_FONT_FAMILY = MONOSPACE_FONT_FAMILY;
exports.font = font;
exports.monospace = monospace;
//# sourceMappingURL=font.js.map
