'use strict';

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var index = require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
var constants = require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var index$1 = require('./index-ecc57c9f.js');

var ICON_SIZES = new Map([['large', 6 * constants.GU], ['medium', 3 * constants.GU], ['small', 2 * constants.GU], ['tiny', 1.75 * constants.GU]]); // Mapping of button size => icon size

var BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  var _useInside = index$1.o('Button:icon'),
      _useInside2 = slicedToArray._slicedToArray(_useInside, 2),
      insideButtonIcon = _useInside2[0],
      buttonData = _useInside2[1]; // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.


  var sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

var IconPropTypes = {
  size: index.PropTypes.oneOf(['large', 'medium', 'small', 'tiny'])
};

exports.IconPropTypes = IconPropTypes;
exports.useIconSize = useIconSize;
//# sourceMappingURL=IconPropTypes-56de5759.js.map
