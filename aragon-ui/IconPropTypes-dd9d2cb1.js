'use strict';

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var index = require('./index-46d0e707.js');
require('./environment.js');
var constants = require('./constants.js');
var index$1 = require('./index-f5a9917e.js');

var ICON_SIZES = new Map([['large', 6 * constants.GU], ['medium', 3 * constants.GU], ['small', 2 * constants.GU], ['tiny', 1.75 * constants.GU]]); // Mapping of button size => icon size

var BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  var _useInside = index$1.o('Button:icon'),
      _useInside2 = slicedToArray.slicedToArray(_useInside, 2),
      insideButtonIcon = _useInside2[0],
      buttonData = _useInside2[1]; // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.


  var sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

var IconPropTypes = {
  size: index.propTypes.oneOf(['large', 'medium', 'small', 'tiny'])
};

exports.IconPropTypes = IconPropTypes;
exports.useIconSize = useIconSize;
//# sourceMappingURL=IconPropTypes-dd9d2cb1.js.map
