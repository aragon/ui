import { noop } from './miscellaneous.js';

function devOnly(cb) {
  return process.env.NODE_ENV === 'development' ? cb : noop;
} // Log in dev mode only

var log = devOnly(function () {
  var _console;

  (_console = console).log.apply(_console, arguments);
}); // Warn in dev mode only

var warn = devOnly(function () {
  var _console2;

  (_console2 = console).warn.apply(_console2, arguments);
}); // Like warn(), but only once

var Warned = new Map();
var warnOnce = devOnly(function (domain) {
  if (!Warned.get(domain)) {
    var _console3;

    for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    (_console3 = console).warn.apply(_console3, params);

    Warned.set(domain, true);
  }
});

export { devOnly, log, warn, warnOnce };
//# sourceMappingURL=environment.js.map
