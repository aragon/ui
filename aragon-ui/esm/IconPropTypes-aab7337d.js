import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import { P as PropTypes } from './index-097535f1.js';
import './defineProperty-a0480c32.js';
import 'styled-components';
import './miscellaneous.js';
import './environment.js';
import './font.js';
import { GU } from './constants.js';
import './breakpoints.js';
import './springs.js';
import './text-styles.js';
import { o } from './index-422d37c0.js';

var ICON_SIZES = new Map([['large', 6 * GU], ['medium', 3 * GU], ['small', 2 * GU], ['tiny', 1.75 * GU]]); // Mapping of button size => icon size

var BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  var _useInside = o('Button:icon'),
      _useInside2 = _slicedToArray(_useInside, 2),
      insideButtonIcon = _useInside2[0],
      buttonData = _useInside2[1]; // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.


  var sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

var IconPropTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny'])
};

export { IconPropTypes as I, useIconSize as u };
//# sourceMappingURL=IconPropTypes-aab7337d.js.map
