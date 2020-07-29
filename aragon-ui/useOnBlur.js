'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('react');
require('./miscellaneous.js');
var environment = require('./environment.js');
var useFocusLeave = require('./useFocusLeave.js');

function useOnBlur() {
  environment.warnOnce('useOnBlur', 'useOnBlur() is deprecated, please use useFocusLeave() instead.');
  return useFocusLeave.useFocusLeave.apply(void 0, arguments);
}

exports.useOnBlur = useOnBlur;
//# sourceMappingURL=useOnBlur.js.map
