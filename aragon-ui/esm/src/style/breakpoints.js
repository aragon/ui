import { css } from 'styled-components';
import { GU } from './constants.js';

var BREAKPOINTS = {
  min: 360,
  small: 360,
  medium: 96 * GU,
  large: 144 * GU
}; // CSS breakpoints

var breakpoint = function breakpoint(name, styles) {
  return css(["@media (min-width:", "px){", ";}"], BREAKPOINTS[name], styles);
};

export { BREAKPOINTS, breakpoint };
//# sourceMappingURL=breakpoints.js.map
