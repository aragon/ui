'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./miscellaneous.js');
var environment = require('./environment.js');

// generic names in our components.

var DEFAULT_FONT_FAMILY = 'aragon-ui';
var MONOSPACE_FONT_FAMILY = 'aragon-ui-monospace';
var monospace = function monospace() {
  return "\n  font-family: ".concat(MONOSPACE_FONT_FAMILY, ", monospace;\n");
};
var FONT_SIZES = {
  xxsmall: '11px',
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
  great: '37px'
};
var FONT_WEIGHTS = {
  normal: '400',
  bold: '600',
  bolder: '800'
};

var fontSizeCss = function fontSizeCss(size) {
  var fontSize = FONT_SIZES[size];
  return fontSize !== undefined ? "\n      line-height: 1.5;\n      font-size: ".concat(fontSize, "\n    ") : '';
};

var weightCss = function weightCss(weight) {
  var fontWeight = FONT_WEIGHTS[weight];
  return fontWeight !== undefined ? "font-weight: ".concat(fontWeight) : '';
};

var smallcapsCss = function smallcapsCss(smallcaps) {
  return smallcaps ? "\n      text-transform: lowercase;\n      font-variant: small-caps;\n    " : '';
};

var monospaceCss = function monospaceCss(monospace) {
  return monospace ? "\n      font-family: ".concat(MONOSPACE_FONT_FAMILY, ", monospace;\n    ") : '';
};

function font(_ref) {
  var size = _ref.size,
      weight = _ref.weight,
      _ref$smallcaps = _ref.smallcaps,
      smallcaps = _ref$smallcaps === void 0 ? false : _ref$smallcaps,
      _ref$monospace = _ref.monospace,
      monospace = _ref$monospace === void 0 ? false : _ref$monospace,
      _ref$deprecationNotic = _ref.deprecationNotice,
      deprecationNotice = _ref$deprecationNotic === void 0 ? true : _ref$deprecationNotic;

  if (deprecationNotice) {
    environment.warnOnce('font()', 'font() is deprecated. Please use textStyle() instead.');
  }

  return "\n    ".concat(fontSizeCss(size), ";\n    ").concat(weightCss(weight), ";\n    ").concat(smallcapsCss(smallcaps), ";\n    ").concat(monospaceCss(monospace), ";\n  ");
}

exports.DEFAULT_FONT_FAMILY = DEFAULT_FONT_FAMILY;
exports.MONOSPACE_FONT_FAMILY = MONOSPACE_FONT_FAMILY;
exports.font = font;
exports.monospace = monospace;
//# sourceMappingURL=font.js.map
