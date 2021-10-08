import slicedToArray from '../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import { useInside as o } from '../../node_modules/use-inside/dist/index.js';
import { GU } from '../style/constants.js';

var ICON_SIZES = new Map([['large', 6 * GU], ['medium', 3 * GU], ['small', 2 * GU], ['tiny', 1.75 * GU]]); // Mapping of button size => icon size

var BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  var _useInside = o('Button:icon'),
      _useInside2 = slicedToArray(_useInside, 2),
      insideButtonIcon = _useInside2[0],
      buttonData = _useInside2[1]; // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.


  var sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

export default useIconSize;
//# sourceMappingURL=icon-size.js.map
