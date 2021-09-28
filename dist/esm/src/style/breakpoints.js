import { css } from 'styled-components';
import { GU } from './constants.js';

const BREAKPOINTS = {
  min: 360,
  small: 360,
  medium: 96 * GU,
  large: 144 * GU
}; // CSS breakpoints

const breakpoint = (name, styles) => css(["@media (min-width:", "px){", ";}"], BREAKPOINTS[name], styles);

export { BREAKPOINTS, breakpoint };
//# sourceMappingURL=breakpoints.js.map
