import { useInside as o } from '../../node_modules/use-inside/dist/index.js';
import { GU } from '../style/constants.js';

const ICON_SIZES = new Map([['large', 6 * GU], ['medium', 3 * GU], ['small', 2 * GU], ['tiny', 1.75 * GU]]); // Mapping of button size => icon size

const BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  const [insideButtonIcon, buttonData] = o('Button:icon'); // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.

  const sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

export { useIconSize as default };
//# sourceMappingURL=icon-size.js.map
