'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useFocusLeave = require('./useFocusLeave.js');
var environment = require('./environment.js');
require('react');
require('./miscellaneous.js');

function useOnBlur(...params) {
  environment.warnOnce('useOnBlur', 'useOnBlur() is deprecated, please use useFocusLeave() instead.');
  return useFocusLeave.useFocusLeave(...params);
}

exports.useOnBlur = useOnBlur;
//# sourceMappingURL=useOnBlur.js.map
