import _styled, { css, keyframes, createGlobalStyle } from 'styled-components';
import React, { useContext, useState, useMemo, useEffect, useCallback, useRef, useImperativeHandle, forwardRef } from 'react';
import ReactDOM from 'react-dom';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var GU = 8;
var RADIUS = 4;

var BREAKPOINTS = {
  min: 360,
  small: 360,
  medium: 96 * GU,
  large: 144 * GU
}; // CSS breakpoints

var breakpoint = function breakpoint(name, styles) {
  return css(["@media (min-width:", "px){", ";}"], BREAKPOINTS[name], styles);
};

// Springs to be used with react-spring
var springs = {
  // Super slow spring, for debugging purposes
  debug: {
    mass: 1,
    tension: 10,
    friction: 40
  },
  // Slow spring, can be used to move large things (e.g. a side panel).
  lazy: {
    mass: 1,
    tension: 120,
    friction: 20
  },
  // Medium speed spring, can be used to move small objects.
  smooth: {
    mass: 0.8,
    tension: 300,
    friction: 28
  },
  // Fast speed spring, for interactions that feel “almost instant”.
  swift: {
    mass: 0.5,
    tension: 800,
    friction: 30
  },
  // Super fast speed spring, for interactions
  // that feel instant (e.g. a checkbox tick).
  instant: {
    mass: 0.3,
    tension: 1000,
    friction: 30
  }
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function noop() {}
function identity(x) {
  return x;
}
function pick(obj, keys) {
  return keys.reduce(function (filtered, key) {
    if (obj[key] !== undefined) {
      filtered[key] = obj[key];
    }

    return filtered;
  }, {});
}

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

// generic names in our components.

var DEFAULT_FONT_FAMILY = 'aragon-ui';
var MONOSPACE_FONT_FAMILY = 'aragon-ui-monospace';
var monospace = function monospace() {
  return "\n  font-family: ".concat(MONOSPACE_FONT_FAMILY, ", monospace;\n");
};
var FONT_SIZES = {
  xxsmall: '11px',
  xsmall: '12px',
  small: '14px',
  normal: '15px',
  large: '16px',
  xlarge: '20px',
  xxlarge: '22px',
  great: '37px'
};
var FONT_WEIGHTS = {
  normal: '400',
  bold: '600',
  bolder: '800'
};

var fontSizeCss = function fontSizeCss(size) {
  var fontSize = FONT_SIZES[size];
  return fontSize !== undefined ? "\n      line-height: 1.5;\n      font-size: ".concat(fontSize, "\n    ") : '';
};

var weightCss = function weightCss(weight) {
  var fontWeight = FONT_WEIGHTS[weight];
  return fontWeight !== undefined ? "font-weight: ".concat(fontWeight) : '';
};

var smallcapsCss = function smallcapsCss(smallcaps) {
  return smallcaps ? "\n      text-transform: lowercase;\n      font-variant: small-caps;\n    " : '';
};

var monospaceCss = function monospaceCss(monospace) {
  return monospace ? "\n      font-family: ".concat(MONOSPACE_FONT_FAMILY, ", monospace;\n    ") : '';
};

function font(_ref) {
  var size = _ref.size,
      weight = _ref.weight,
      _ref$smallcaps = _ref.smallcaps,
      smallcaps = _ref$smallcaps === void 0 ? false : _ref$smallcaps,
      _ref$monospace = _ref.monospace,
      monospace = _ref$monospace === void 0 ? false : _ref$monospace,
      _ref$deprecationNotic = _ref.deprecationNotice,
      deprecationNotice = _ref$deprecationNotic === void 0 ? true : _ref$deprecationNotic;

  if (deprecationNotice) {
    warnOnce('font()', 'font() is deprecated. Please use textStyle() instead.');
  }

  return "\n    ".concat(fontSizeCss(size), ";\n    ").concat(weightCss(weight), ";\n    ").concat(smallcapsCss(smallcaps), ";\n    ").concat(monospaceCss(monospace), ";\n  ");
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TEXT_STYLES = {
  title1: {
    size: 32,
    weight: 600,
    lineHeight: 1.5
  },
  title2: {
    size: 26,
    weight: 400,
    lineHeight: 1.5
  },
  title3: {
    size: 24,
    weight: 400,
    lineHeight: 1.5
  },
  title4: {
    size: 20,
    weight: 400,
    lineHeight: 1.5
  },
  body1: {
    size: 18,
    weight: 400,
    lineHeight: 1.5
  },
  body2: {
    size: 16,
    weight: 400,
    lineHeight: 1.5
  },
  body3: {
    size: 14,
    weight: 400,
    lineHeight: 1.5
  },
  body4: {
    size: 12,
    weight: 400,
    lineHeight: 1.5
  },
  label1: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
    transform: 'uppercase'
  },
  label2: {
    size: 12,
    weight: 600,
    lineHeight: 1.5,
    transform: 'uppercase'
  },
  label3: {
    size: 10,
    weight: 400,
    lineHeight: 1.5,
    transform: 'uppercase'
  },
  address1: {
    size: 16,
    weight: 400,
    lineHeight: 1.5,
    monospace: true
  },
  address2: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
    monospace: true
  }
};
var STYLES_CSS = {
  size: function size(value) {
    return "font-size: ".concat(value, "px;");
  },
  weight: function weight(value) {
    return "font-weight: ".concat(value, ";");
  },
  transform: function transform(value) {
    return "text-transform: ".concat(value, ";");
  },
  lineHeight: function lineHeight(value) {
    return "line-height: ".concat(value, ";");
  },
  monospace: function monospace$1(value) {
    return value ? monospace() : '';
  }
};

function textStyleToCss(textStyle) {
  return Object.entries(textStyle).map(function (_ref) {
    var _ref2 = slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    return STYLES_CSS[name](value);
  }).join('');
}

function textStyle(name) {
  var includeLineHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!TEXT_STYLES[name]) {
    throw new Error('textStyle(): the text style doesn’t exist: ' + name);
  }

  var style = _objectSpread({}, TEXT_STYLES[name]);

  if (!includeLineHeight) {
    delete style.lineHeight;
  }

  return textStyleToCss(style);
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,n){module.exports=n();}(commonjsGlobal,function(){var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return !r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return (n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:o,w:s,d:i,h:r,m:e,s:n,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i;}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",o)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,a){var h=this,f=!!D.u(a)||a,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case o:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,a){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[o]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(a-this.$W):a;if(f===u||f===o){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,a){var h,f=this;t=Number(t);var c=D.p(a),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return "Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:D.s(a+1,2,"0"),MMM:c(i.monthsShort,a,h,3),MMMM:h[a]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,o,2),ddd:c(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[o]=y/12,c[u]=y,c[a]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
});

var UNITS = [['years', 'year'], ['months', 'month'], ['days', 'day'], ['hours', 'hour'], ['minutes', 'minute'], ['seconds', 'second']];
var DEFAULT_UNITS = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']; // Return the difference between two dates, per unit.
// Set `units` to get specific units only, e.g. ['minutes', 'seconds']
// If `units` is not set, all the units are enabled.

var difference = function difference(date1, date2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var units = options.units || DEFAULT_UNITS;
  var maxUnits = options.maxUnits || -1;
  var keepLeadingZeros = maxUnits === -1 && options.keepLeadingZeros || false;
  var start = date2 > date1 ? date1 : date2;

  var getRightMostUnitIndex = function getRightMostUnitIndex() {
    return [].concat(UNITS).reverse().find(function (_ref) {
      var _ref2 = slicedToArray(_ref, 1),
          unit = _ref2[0];

      return units.includes(unit);
    })[0];
  };

  return UNITS.reduce(function (result, _ref3, index) {
    var _ref4 = slicedToArray(_ref3, 2),
        name = _ref4[0],
        unitName = _ref4[1];

    result[name] = null; // fill the current unit, subtract the difference from the remaining

    if ((maxUnits === -1 || result.remainingUnits > 0) && units.includes(name)) {
      result[name] = result.remaining.diff(start, unitName);
      result.remaining = result.remaining.subtract(result[name], unitName);
    } // remove leading zeros


    if (!keepLeadingZeros && !result.seenNonZero) {
      if (result[name] === 0) {
        result[name] = null;
      } else {
        result.seenNonZero = true;
      }
    } // enforce the maxUnits option


    if (result.remainingUnits > 0 && result.seenNonZero) {
      result.remainingUnits -= 1;
    } // last iteration


    if (index === UNITS.length - 1) {
      delete result.remaining;
      delete result.remainingUnits;
      delete result.seenNonZero; // include at least one 0

      if (Object.values(result).every(function (val) {
        return val === null;
      })) {
        result[getRightMostUnitIndex()] = 0;
      }
    }

    return result;
  }, {
    remaining: dayjs_min(start === date1 ? date2 : date1),
    remainingUnits: maxUnits,
    seenNonZero: false
  });
};
var eachDayOfInterval = function eachDayOfInterval() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      start = _ref5.start,
      end = _ref5.end;

  var startDate = dayjs_min(start);
  var endDate = dayjs_min(end);

  if (!startDate.isValid()) {
    throw new Error('Start date of interval is invalid');
  }

  if (!endDate.isValid()) {
    throw new Error('End date of interval is invalid');
  }

  startDate = startDate.startOf('day');
  endDate = endDate.startOf('day');

  if (startDate.isAfter(endDate)) {
    throw new Error('Start date of interval is after end date');
  }

  var interval = [];

  while (!startDate.isAfter(endDate)) {
    interval.push(startDate.toDate());
    startDate = startDate.add(1, 'day');
  }

  return interval;
};
var formatHtmlDatetime = function formatHtmlDatetime(date) {
  return dayjs_min(date).toISOString();
};

var formatIntegerRange = function formatIntegerRange() {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 99;
  var maxSuffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  count = parseInt(count, 10);

  if (count <= min) {
    return "".concat(parseInt(min, 10));
  }

  if (count > max) {
    return "".concat(parseInt(max, 10)).concat(maxSuffix);
  }

  return count.toString();
};

var sha3 = createCommonjsModule(function (module) {
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */
/*jslint bitwise: true */
(function () {

  var INPUT_ERROR = 'input is invalid type';
  var FINALIZE_ERROR = 'finalize already called';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA3_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA3_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = commonjsGlobal;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA3_NO_COMMON_JS && 'object' === 'object' && module.exports;
  var ARRAY_BUFFER = !root.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var SHAKE_PADDING = [31, 7936, 2031616, 520093696];
  var CSHAKE_PADDING = [4, 1024, 262144, 67108864];
  var KECCAK_PADDING = [1, 256, 65536, 16777216];
  var PADDING = [6, 1536, 393216, 100663296];
  var SHIFT = [0, 8, 16, 24];
  var RC = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649,
    0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0,
    2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771,
    2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648,
    2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
  var BITS = [224, 256, 384, 512];
  var SHAKE_BITS = [128, 256];
  var OUTPUT_TYPES = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'];
  var CSHAKE_BYTEPAD = {
    '128': 168,
    '256': 136
  };

  if (root.JS_SHA3_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (bits, padding, outputType) {
    return function (message) {
      return new Keccak(bits, padding, bits).update(message)[outputType]();
    };
  };

  var createShakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits) {
      return new Keccak(bits, padding, outputBits).update(message)[outputType]();
    };
  };

  var createCshakeOutputMethod = function (bits, padding, outputType) {
    return function (message, outputBits, n, s) {
      return methods['cshake' + bits].update(message, outputBits, n, s)[outputType]();
    };
  };

  var createKmacOutputMethod = function (bits, padding, outputType) {
    return function (key, message, outputBits, s) {
      return methods['kmac' + bits].update(key, message, outputBits, s)[outputType]();
    };
  };

  var createOutputMethods = function (method, createMethod, bits, padding) {
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createMethod(bits, padding, type);
    }
    return method;
  };

  var createMethod = function (bits, padding) {
    var method = createOutputMethod(bits, padding, 'hex');
    method.create = function () {
      return new Keccak(bits, padding, bits);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    return createOutputMethods(method, createOutputMethod, bits, padding);
  };

  var createShakeMethod = function (bits, padding) {
    var method = createShakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits) {
      return new Keccak(bits, padding, outputBits);
    };
    method.update = function (message, outputBits) {
      return method.create(outputBits).update(message);
    };
    return createOutputMethods(method, createShakeOutputMethod, bits, padding);
  };

  var createCshakeMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createCshakeOutputMethod(bits, padding, 'hex');
    method.create = function (outputBits, n, s) {
      if (!n && !s) {
        return methods['shake' + bits].create(outputBits);
      } else {
        return new Keccak(bits, padding, outputBits).bytepad([n, s], w);
      }
    };
    method.update = function (message, outputBits, n, s) {
      return method.create(outputBits, n, s).update(message);
    };
    return createOutputMethods(method, createCshakeOutputMethod, bits, padding);
  };

  var createKmacMethod = function (bits, padding) {
    var w = CSHAKE_BYTEPAD[bits];
    var method = createKmacOutputMethod(bits, padding, 'hex');
    method.create = function (key, outputBits, s) {
      return new Kmac(bits, padding, outputBits).bytepad(['KMAC', s], w).bytepad([key], w);
    };
    method.update = function (key, message, outputBits, s) {
      return method.create(key, outputBits, s).update(message);
    };
    return createOutputMethods(method, createKmacOutputMethod, bits, padding);
  };

  var algorithms = [
    { name: 'keccak', padding: KECCAK_PADDING, bits: BITS, createMethod: createMethod },
    { name: 'sha3', padding: PADDING, bits: BITS, createMethod: createMethod },
    { name: 'shake', padding: SHAKE_PADDING, bits: SHAKE_BITS, createMethod: createShakeMethod },
    { name: 'cshake', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createCshakeMethod },
    { name: 'kmac', padding: CSHAKE_PADDING, bits: SHAKE_BITS, createMethod: createKmacMethod }
  ];

  var methods = {}, methodNames = [];

  for (var i = 0; i < algorithms.length; ++i) {
    var algorithm = algorithms[i];
    var bits = algorithm.bits;
    for (var j = 0; j < bits.length; ++j) {
      var methodName = algorithm.name + '_' + bits[j];
      methodNames.push(methodName);
      methods[methodName] = algorithm.createMethod(bits[j], algorithm.padding);
      if (algorithm.name !== 'sha3') {
        var newMethodName = algorithm.name + bits[j];
        methodNames.push(newMethodName);
        methods[newMethodName] = methods[methodName];
      }
    }
  }

  function Keccak(bits, padding, outputBits) {
    this.blocks = [];
    this.s = [];
    this.padding = padding;
    this.outputBits = outputBits;
    this.reset = true;
    this.finalized = false;
    this.block = 0;
    this.start = 0;
    this.blockCount = (1600 - (bits << 1)) >> 5;
    this.byteCount = this.blockCount << 2;
    this.outputBlocks = outputBits >> 5;
    this.extraBytes = (outputBits & 31) >> 3;

    for (var i = 0; i < 50; ++i) {
      this.s[i] = 0;
    }
  }

  Keccak.prototype.update = function (message) {
    if (this.finalized) {
      throw new Error(FINALIZE_ERROR);
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var blocks = this.blocks, byteCount = this.byteCount, length = message.length,
      blockCount = this.blockCount, index = 0, s = this.s, i, code;

    while (index < length) {
      if (this.reset) {
        this.reset = false;
        blocks[0] = this.block;
        for (i = 1; i < blockCount + 1; ++i) {
          blocks[i] = 0;
        }
      }
      if (notString) {
        for (i = this.start; index < length && i < byteCount; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < byteCount; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }
      this.lastByteIndex = i;
      if (i >= byteCount) {
        this.start = i - byteCount;
        this.block = blocks[blockCount];
        for (i = 0; i < blockCount; ++i) {
          s[i] ^= blocks[i];
        }
        f(s);
        this.reset = true;
      } else {
        this.start = i;
      }
    }
    return this;
  };

  Keccak.prototype.encode = function (x, right) {
    var o = x & 255, n = 1;
    var bytes = [o];
    x = x >> 8;
    o = x & 255;
    while (o > 0) {
      bytes.unshift(o);
      x = x >> 8;
      o = x & 255;
      ++n;
    }
    if (right) {
      bytes.push(n);
    } else {
      bytes.unshift(n);
    }
    this.update(bytes);
    return bytes.length;
  };

  Keccak.prototype.encodeString = function (str) {
    var notString, type = typeof str;
    if (type !== 'string') {
      if (type === 'object') {
        if (str === null) {
          throw new Error(INPUT_ERROR);
        } else if (ARRAY_BUFFER && str.constructor === ArrayBuffer) {
          str = new Uint8Array(str);
        } else if (!Array.isArray(str)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(str)) {
            throw new Error(INPUT_ERROR);
          }
        }
      } else {
        throw new Error(INPUT_ERROR);
      }
      notString = true;
    }
    var bytes = 0, length = str.length;
    if (notString) {
      bytes = length;
    } else {
      for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        if (code < 0x80) {
          bytes += 1;
        } else if (code < 0x800) {
          bytes += 2;
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes += 3;
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (str.charCodeAt(++i) & 0x3ff));
          bytes += 4;
        }
      }
    }
    bytes += this.encode(bytes * 8);
    this.update(str);
    return bytes;
  };

  Keccak.prototype.bytepad = function (strs, w) {
    var bytes = this.encode(w);
    for (var i = 0; i < strs.length; ++i) {
      bytes += this.encodeString(strs[i]);
    }
    var paddingBytes = w - bytes % w;
    var zeros = [];
    zeros.length = paddingBytes;
    this.update(zeros);
    return this;
  };

  Keccak.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex, blockCount = this.blockCount, s = this.s;
    blocks[i >> 2] |= this.padding[i & 3];
    if (this.lastByteIndex === this.byteCount) {
      blocks[0] = blocks[blockCount];
      for (i = 1; i < blockCount + 1; ++i) {
        blocks[i] = 0;
      }
    }
    blocks[blockCount - 1] |= 0x80000000;
    for (i = 0; i < blockCount; ++i) {
      s[i] ^= blocks[i];
    }
    f(s);
  };

  Keccak.prototype.toString = Keccak.prototype.hex = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var hex = '', block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        block = s[i];
        hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F] +
          HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F] +
          HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F] +
          HEX_CHARS[(block >> 28) & 0x0F] + HEX_CHARS[(block >> 24) & 0x0F];
      }
      if (j % blockCount === 0) {
        f(s);
        i = 0;
      }
    }
    if (extraBytes) {
      block = s[i];
      hex += HEX_CHARS[(block >> 4) & 0x0F] + HEX_CHARS[block & 0x0F];
      if (extraBytes > 1) {
        hex += HEX_CHARS[(block >> 12) & 0x0F] + HEX_CHARS[(block >> 8) & 0x0F];
      }
      if (extraBytes > 2) {
        hex += HEX_CHARS[(block >> 20) & 0x0F] + HEX_CHARS[(block >> 16) & 0x0F];
      }
    }
    return hex;
  };

  Keccak.prototype.arrayBuffer = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var bytes = this.outputBits >> 3;
    var buffer;
    if (extraBytes) {
      buffer = new ArrayBuffer((outputBlocks + 1) << 2);
    } else {
      buffer = new ArrayBuffer(bytes);
    }
    var array = new Uint32Array(buffer);
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        array[j] = s[i];
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      array[i] = s[i];
      buffer = buffer.slice(0, bytes);
    }
    return buffer;
  };

  Keccak.prototype.buffer = Keccak.prototype.arrayBuffer;

  Keccak.prototype.digest = Keccak.prototype.array = function () {
    this.finalize();

    var blockCount = this.blockCount, s = this.s, outputBlocks = this.outputBlocks,
      extraBytes = this.extraBytes, i = 0, j = 0;
    var array = [], offset, block;
    while (j < outputBlocks) {
      for (i = 0; i < blockCount && j < outputBlocks; ++i, ++j) {
        offset = j << 2;
        block = s[i];
        array[offset] = block & 0xFF;
        array[offset + 1] = (block >> 8) & 0xFF;
        array[offset + 2] = (block >> 16) & 0xFF;
        array[offset + 3] = (block >> 24) & 0xFF;
      }
      if (j % blockCount === 0) {
        f(s);
      }
    }
    if (extraBytes) {
      offset = j << 2;
      block = s[i];
      array[offset] = block & 0xFF;
      if (extraBytes > 1) {
        array[offset + 1] = (block >> 8) & 0xFF;
      }
      if (extraBytes > 2) {
        array[offset + 2] = (block >> 16) & 0xFF;
      }
    }
    return array;
  };

  function Kmac(bits, padding, outputBits) {
    Keccak.call(this, bits, padding, outputBits);
  }

  Kmac.prototype = new Keccak();

  Kmac.prototype.finalize = function () {
    this.encode(this.outputBits, true);
    return Keccak.prototype.finalize.call(this);
  };

  var f = function (s) {
    var h, l, n, c0, c1, c2, c3, c4, c5, c6, c7, c8, c9,
      b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17,
      b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33,
      b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49;
    for (n = 0; n < 48; n += 2) {
      c0 = s[0] ^ s[10] ^ s[20] ^ s[30] ^ s[40];
      c1 = s[1] ^ s[11] ^ s[21] ^ s[31] ^ s[41];
      c2 = s[2] ^ s[12] ^ s[22] ^ s[32] ^ s[42];
      c3 = s[3] ^ s[13] ^ s[23] ^ s[33] ^ s[43];
      c4 = s[4] ^ s[14] ^ s[24] ^ s[34] ^ s[44];
      c5 = s[5] ^ s[15] ^ s[25] ^ s[35] ^ s[45];
      c6 = s[6] ^ s[16] ^ s[26] ^ s[36] ^ s[46];
      c7 = s[7] ^ s[17] ^ s[27] ^ s[37] ^ s[47];
      c8 = s[8] ^ s[18] ^ s[28] ^ s[38] ^ s[48];
      c9 = s[9] ^ s[19] ^ s[29] ^ s[39] ^ s[49];

      h = c8 ^ ((c2 << 1) | (c3 >>> 31));
      l = c9 ^ ((c3 << 1) | (c2 >>> 31));
      s[0] ^= h;
      s[1] ^= l;
      s[10] ^= h;
      s[11] ^= l;
      s[20] ^= h;
      s[21] ^= l;
      s[30] ^= h;
      s[31] ^= l;
      s[40] ^= h;
      s[41] ^= l;
      h = c0 ^ ((c4 << 1) | (c5 >>> 31));
      l = c1 ^ ((c5 << 1) | (c4 >>> 31));
      s[2] ^= h;
      s[3] ^= l;
      s[12] ^= h;
      s[13] ^= l;
      s[22] ^= h;
      s[23] ^= l;
      s[32] ^= h;
      s[33] ^= l;
      s[42] ^= h;
      s[43] ^= l;
      h = c2 ^ ((c6 << 1) | (c7 >>> 31));
      l = c3 ^ ((c7 << 1) | (c6 >>> 31));
      s[4] ^= h;
      s[5] ^= l;
      s[14] ^= h;
      s[15] ^= l;
      s[24] ^= h;
      s[25] ^= l;
      s[34] ^= h;
      s[35] ^= l;
      s[44] ^= h;
      s[45] ^= l;
      h = c4 ^ ((c8 << 1) | (c9 >>> 31));
      l = c5 ^ ((c9 << 1) | (c8 >>> 31));
      s[6] ^= h;
      s[7] ^= l;
      s[16] ^= h;
      s[17] ^= l;
      s[26] ^= h;
      s[27] ^= l;
      s[36] ^= h;
      s[37] ^= l;
      s[46] ^= h;
      s[47] ^= l;
      h = c6 ^ ((c0 << 1) | (c1 >>> 31));
      l = c7 ^ ((c1 << 1) | (c0 >>> 31));
      s[8] ^= h;
      s[9] ^= l;
      s[18] ^= h;
      s[19] ^= l;
      s[28] ^= h;
      s[29] ^= l;
      s[38] ^= h;
      s[39] ^= l;
      s[48] ^= h;
      s[49] ^= l;

      b0 = s[0];
      b1 = s[1];
      b32 = (s[11] << 4) | (s[10] >>> 28);
      b33 = (s[10] << 4) | (s[11] >>> 28);
      b14 = (s[20] << 3) | (s[21] >>> 29);
      b15 = (s[21] << 3) | (s[20] >>> 29);
      b46 = (s[31] << 9) | (s[30] >>> 23);
      b47 = (s[30] << 9) | (s[31] >>> 23);
      b28 = (s[40] << 18) | (s[41] >>> 14);
      b29 = (s[41] << 18) | (s[40] >>> 14);
      b20 = (s[2] << 1) | (s[3] >>> 31);
      b21 = (s[3] << 1) | (s[2] >>> 31);
      b2 = (s[13] << 12) | (s[12] >>> 20);
      b3 = (s[12] << 12) | (s[13] >>> 20);
      b34 = (s[22] << 10) | (s[23] >>> 22);
      b35 = (s[23] << 10) | (s[22] >>> 22);
      b16 = (s[33] << 13) | (s[32] >>> 19);
      b17 = (s[32] << 13) | (s[33] >>> 19);
      b48 = (s[42] << 2) | (s[43] >>> 30);
      b49 = (s[43] << 2) | (s[42] >>> 30);
      b40 = (s[5] << 30) | (s[4] >>> 2);
      b41 = (s[4] << 30) | (s[5] >>> 2);
      b22 = (s[14] << 6) | (s[15] >>> 26);
      b23 = (s[15] << 6) | (s[14] >>> 26);
      b4 = (s[25] << 11) | (s[24] >>> 21);
      b5 = (s[24] << 11) | (s[25] >>> 21);
      b36 = (s[34] << 15) | (s[35] >>> 17);
      b37 = (s[35] << 15) | (s[34] >>> 17);
      b18 = (s[45] << 29) | (s[44] >>> 3);
      b19 = (s[44] << 29) | (s[45] >>> 3);
      b10 = (s[6] << 28) | (s[7] >>> 4);
      b11 = (s[7] << 28) | (s[6] >>> 4);
      b42 = (s[17] << 23) | (s[16] >>> 9);
      b43 = (s[16] << 23) | (s[17] >>> 9);
      b24 = (s[26] << 25) | (s[27] >>> 7);
      b25 = (s[27] << 25) | (s[26] >>> 7);
      b6 = (s[36] << 21) | (s[37] >>> 11);
      b7 = (s[37] << 21) | (s[36] >>> 11);
      b38 = (s[47] << 24) | (s[46] >>> 8);
      b39 = (s[46] << 24) | (s[47] >>> 8);
      b30 = (s[8] << 27) | (s[9] >>> 5);
      b31 = (s[9] << 27) | (s[8] >>> 5);
      b12 = (s[18] << 20) | (s[19] >>> 12);
      b13 = (s[19] << 20) | (s[18] >>> 12);
      b44 = (s[29] << 7) | (s[28] >>> 25);
      b45 = (s[28] << 7) | (s[29] >>> 25);
      b26 = (s[38] << 8) | (s[39] >>> 24);
      b27 = (s[39] << 8) | (s[38] >>> 24);
      b8 = (s[48] << 14) | (s[49] >>> 18);
      b9 = (s[49] << 14) | (s[48] >>> 18);

      s[0] = b0 ^ (~b2 & b4);
      s[1] = b1 ^ (~b3 & b5);
      s[10] = b10 ^ (~b12 & b14);
      s[11] = b11 ^ (~b13 & b15);
      s[20] = b20 ^ (~b22 & b24);
      s[21] = b21 ^ (~b23 & b25);
      s[30] = b30 ^ (~b32 & b34);
      s[31] = b31 ^ (~b33 & b35);
      s[40] = b40 ^ (~b42 & b44);
      s[41] = b41 ^ (~b43 & b45);
      s[2] = b2 ^ (~b4 & b6);
      s[3] = b3 ^ (~b5 & b7);
      s[12] = b12 ^ (~b14 & b16);
      s[13] = b13 ^ (~b15 & b17);
      s[22] = b22 ^ (~b24 & b26);
      s[23] = b23 ^ (~b25 & b27);
      s[32] = b32 ^ (~b34 & b36);
      s[33] = b33 ^ (~b35 & b37);
      s[42] = b42 ^ (~b44 & b46);
      s[43] = b43 ^ (~b45 & b47);
      s[4] = b4 ^ (~b6 & b8);
      s[5] = b5 ^ (~b7 & b9);
      s[14] = b14 ^ (~b16 & b18);
      s[15] = b15 ^ (~b17 & b19);
      s[24] = b24 ^ (~b26 & b28);
      s[25] = b25 ^ (~b27 & b29);
      s[34] = b34 ^ (~b36 & b38);
      s[35] = b35 ^ (~b37 & b39);
      s[44] = b44 ^ (~b46 & b48);
      s[45] = b45 ^ (~b47 & b49);
      s[6] = b6 ^ (~b8 & b0);
      s[7] = b7 ^ (~b9 & b1);
      s[16] = b16 ^ (~b18 & b10);
      s[17] = b17 ^ (~b19 & b11);
      s[26] = b26 ^ (~b28 & b20);
      s[27] = b27 ^ (~b29 & b21);
      s[36] = b36 ^ (~b38 & b30);
      s[37] = b37 ^ (~b39 & b31);
      s[46] = b46 ^ (~b48 & b40);
      s[47] = b47 ^ (~b49 & b41);
      s[8] = b8 ^ (~b0 & b2);
      s[9] = b9 ^ (~b1 & b3);
      s[18] = b18 ^ (~b10 & b12);
      s[19] = b19 ^ (~b11 & b13);
      s[28] = b28 ^ (~b20 & b22);
      s[29] = b29 ^ (~b21 & b23);
      s[38] = b38 ^ (~b30 & b32);
      s[39] = b39 ^ (~b31 & b33);
      s[48] = b48 ^ (~b40 & b42);
      s[49] = b49 ^ (~b41 & b43);

      s[0] ^= RC[n];
      s[1] ^= RC[n + 1];
    }
  };

  if (COMMON_JS) {
    module.exports = methods;
  } else {
    for (i = 0; i < methodNames.length; ++i) {
      root[methodNames[i]] = methods[methodNames[i]];
    }
  }
})();
});

var keccak256 = sha3.keccak_256;
var EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';
var TRANSACTION_REGEX = /^0x[A-Fa-f0-9]{64}$/;
var ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/;
var TRUST_WALLET_BASE_URL = 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum';
var ETHERSCAN_NETWORK_TYPES = new Map([['main', ''], ['kovan', 'kovan.'], ['rinkeby', 'rinkeby.'], ['ropsten', 'ropsten.'], ['goerli', 'goerli.']]);
var ETHERSCAN_TYPES = new Map([['block', 'block'], ['transaction', 'tx'], ['address', 'address'], ['token', 'token']]);
var BLOCK_EXPLORERS = {
  etherscan: function etherscan(_ref) {
    var type = _ref.type,
        value = _ref.value,
        networkType = _ref.networkType;

    if (networkType === 'private') {
      return '';
    }

    if (!ETHERSCAN_NETWORK_TYPES.has(networkType)) {
      throw new Error('provider not supported.');
    }

    if (!ETHERSCAN_TYPES.has(type)) {
      throw new Error('type not supported.');
    }

    var subdomain = ETHERSCAN_NETWORK_TYPES.get(networkType);
    var typePart = ETHERSCAN_TYPES.get(type);
    return "https://".concat(subdomain, "etherscan.io/").concat(typePart, "/").concat(value);
  }
};
/**
 * Converts to a checksum address
 *
 * This function is taken from web3-utils:
 * https://github.com/ethereum/web3.js/blob/22df832303e349f8ae02f0392e56abe10e1dfaac/packages/web3-utils/src/index.js#L287-L315
 * And was adapted to use js-sha3 rather than soliditySha3.js from web3.js, in
 * order to avoid adding the BN.js and underscore dependencies.
 *
 * @method toChecksumAddress
 * @param {String} address the given HEX address
 * @return {String}
 */

function toChecksumAddress(address) {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    throw new Error('Given address "' + address + '" is not a valid Ethereum address.');
  }

  address = address.toLowerCase().replace(/^0x/i, '');
  var addressHash = keccak256(address).replace(/^0x/i, '');
  var checksumAddress = '0x';

  for (var i = 0; i < address.length; i++) {
    // If ith character is 9 to f then make it uppercase
    if (parseInt(addressHash[i], 16) > 7) {
      checksumAddress += address[i].toUpperCase();
    } else {
      checksumAddress += address[i];
    }
  }

  return checksumAddress;
}
/**
 * Check address equality without checksums
 * @param {string} first First address
 * @param {string} second Second address
 * @returns {boolean} Address equality
 */


function addressesEqual(first, second) {
  first = first && first.toLowerCase();
  second = second && second.toLowerCase();
  return first === second;
}
/**
 * Shorten an Ethereum address. `charsLength` allows to change the number of
 * characters on both sides of the ellipsis.
 *
 * Examples:
 *   shortenAddress('0x19731977931271')    // 0x1973…1271
 *   shortenAddress('0x19731977931271', 2) // 0x19…71
 *   shortenAddress('0x197319')            // 0x197319 (already short enough)
 *
 * @param {string} address The address to shorten
 * @param {number} [charsLength=4] The number of characters to change on both sides of the ellipsis
 * @returns {string} The shortened address
 */

function shortenAddress(address) {
  var charsLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  var prefixLength = 2; // "0x"

  if (!address) {
    return '';
  }

  if (address.length < charsLength * 2 + prefixLength) {
    return address;
  }

  return address.slice(0, charsLength + prefixLength) + '…' + address.slice(-charsLength);
}
/**
 * Alias for shortenAddress (to generalize its use)
 */

var shortenTransaction = shortenAddress;
/**
 *
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {string} address the given HEX address
 * @return {boolean}
 */

function isAddress(address) {
  return ADDRESS_REGEX.test(address);
}
/**
 *
 * Checks if the given string is a transaction
 *
 * @method isTransaction
 * @param {string} address the given HEX address
 * @return {boolean}
 */

function isTransaction(transaction) {
  return TRANSACTION_REGEX.test(transaction);
}
/**
 * Generates an etherscan URL
 *
 * @param {string} type The type of URL (block, transaction, address or token).
 * @param {string} value Identifier of the object, depending on the type (block number, transaction hash, …).
 * @param {object} options The optional parameters.
 * @param {string} options.networkType The Ethereum network type (main, kovan, rinkeby, ropsten, goerli, or private).
 * @param {string} options.provider The explorer provider (e.g. etherscan).
 * @return {string} The generated URL, or an empty string if the parameters are invalid.
 */

function blockExplorerUrl(type, value) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$networkType = _ref2.networkType,
      networkType = _ref2$networkType === void 0 ? 'main' : _ref2$networkType,
      _ref2$provider = _ref2.provider,
      provider = _ref2$provider === void 0 ? 'etherscan' : _ref2$provider;

  var explorer = BLOCK_EXPLORERS[provider];

  if (!explorer) {
    warn('blockExplorerUrl(): provider not supported.');
    return '';
  }

  try {
    return explorer({
      type: type,
      value: value,
      networkType: networkType
    });
  } catch (err) {
    warn("blockExplorerUrl(): ".concat(err.message));
    return '';
  }
}
/**
 * Get the address of a token icon
 *
 * @param {string} address The contract address of the token, or the zero address (0x000…) to get the Ethereum icon.
 * @return {string} The generated URL, or an empty string if the parameters are invalid.
 */

function tokenIconUrl() {
  var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  try {
    address = toChecksumAddress(address.trim());
  } catch (err) {
    return '';
  }

  if (address === EMPTY_ADDRESS) {
    return "".concat(TRUST_WALLET_BASE_URL, "/info/logo.png");
  }

  return "".concat(TRUST_WALLET_BASE_URL, "/assets/").concat(address, "/logo.png");
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

// Forward some props of an instance to a child element.
//
// Usage example:
//
//   <Child {...forwardProps(this, ['name', 'style'])}>
//
function forwardProps(instance, names) {
  return names.reduce(function (props, name) {
    if (instance.props[name]) {
      props[name] = instance.props[name];
    }

    return props;
  }, {});
} // Forward the props useful to extend the styles  of the main child of a
// component, using either styled() or the style attribute. Additionnal names
// can be passed as a second parameter.

function stylingProps(instance) {
  var names = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return forwardProps(instance, ['style', 'className'].concat(toConsumableArray(names)));
}

var unselectable = function unselectable() {
  return "\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n";
}; // Transforms a number to be used as a CSS value, with the `px` suffix appended to it. If not a number, the value is returned directly.

function cssPx(value) {
  return typeof value === 'number' ? value + 'px' : value;
}

// This pair of component + hook can be used to know that a component is in the

var insideContexts = new Map(); // Creates the required context if it doesn’t exist.

function getContext(name) {
  if (!insideContexts.has(name)) {
    insideContexts.set(name, React.createContext({
      inside: false,
      data: null
    }));
  }

  return insideContexts.get(name);
} // Use this component to declare a new “inside context”, by name.


function Inside(_ref) {
  var children = _ref.children,
      data = _ref.data,
      name = _ref.name;
  var Context = getContext(name);
  return React.createElement(Context.Provider, {
    value: {
      inside: true,
      data: data
    }
  }, children);
}

Inside.propTypes = {
  children: propTypes.node,
  data: propTypes.any,
  name: propTypes.string.isRequired
}; // Use this hook to know if a given component is somewhere
// in the tree of an <Inside> declared with the same name.

function useInside(name) {
  var _useContext = useContext(getContext(name)),
      inside = _useContext.inside,
      data = _useContext.data;

  return [inside, data];
}

var KEY_ESC = 27;
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_ENTER = 13;

function initContainsComponent() {
  var ContainsContext = React.createContext({
    contains: false
  });
  return {
    // Wrap the parent component with this provider.

    /* eslint-disable react/prop-types */
    Provider: function Provider(_ref) {
      var children = _ref.children;

      var _useState = useState(0),
          _useState2 = slicedToArray(_useState, 2),
          count = _useState2[0],
          setCount = _useState2[1];

      var contextValue = useMemo(function () {
        return {
          updateCount: function updateCount(diff) {
            setCount(function (count) {
              return count + diff;
            });
          },
          contains: count > 0
        };
      }, [count]);
      return React.createElement(ContainsContext.Provider, {
        value: contextValue
      }, children);
    },

    /* eslint-enable react/prop-types */
    // Call this from the parent component (returns a boolean)
    useContains: function useContains() {
      return useContext(ContainsContext).contains;
    },
    // Call this from the child component
    useRegister: function useRegister() {
      var _useContext = useContext(ContainsContext),
          updateCount = _useContext.updateCount;

      useEffect(function () {
        if (!updateCount) {
          return;
        }

        updateCount(1);
        return function () {
          updateCount(-1);
        }; // We don't want this effect to ever re-run
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    }
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

var isNativeFunction = _isNativeFunction;

var construct = createCommonjsModule(function (module) {
function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
});

var wrapNativeSuper = createCommonjsModule(function (module) {
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
});

var RGB_HEX_RE = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function rgbFromRgbInt(rgbInt) {
  return {
    r: Math.floor(rgbInt / Math.pow(256, 2)),
    g: Math.floor(rgbInt / 256 % 256),
    b: Math.floor(rgbInt % 256)
  };
}

function normalizeHexColor(value) {
  var matches = value ? value.match(RGB_HEX_RE) : null;

  if (matches === null) {
    throw new Error("color(): the value must be a valid CSS hexadecimal color. Received: ".concat(value));
  }

  var hexColor = matches[1].toUpperCase();

  if (hexColor.length === 3) {
    return toConsumableArray(hexColor).map(function (c) {
      return c + c;
    }).join('');
  }

  return hexColor;
}

var Color =
/*#__PURE__*/
function (_String) {
  inherits(Color, _String);

  function Color(value) {
    var _this;

    classCallCheck(this, Color);

    _this = possibleConstructorReturn(this, getPrototypeOf(Color).call(this, value));
    var hexColor = normalizeHexColor(value);

    var _rgbFromRgbInt = rgbFromRgbInt(parseInt(hexColor, 16)),
        r = _rgbFromRgbInt.r,
        g = _rgbFromRgbInt.g,
        b = _rgbFromRgbInt.b;

    _this.r = r;
    _this.g = g;
    _this.b = b;
    _this.hexColor = hexColor;
    return _this;
  }

  createClass(Color, [{
    key: "toString",
    value: function toString() {
      return this.toCssRgb();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toCssRgb();
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.r, this.g, this.b];
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var r = this.r,
          g = this.g,
          b = this.b;
      return {
        r: r,
        g: g,
        b: b
      };
    }
  }, {
    key: "alpha",
    value: function alpha(_alpha) {
      return this.toCssRgb({
        alpha: _alpha
      });
    }
  }, {
    key: "toCssRgb",
    value: function toCssRgb() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alpha = _ref.alpha,
          alpha = _ref$alpha === void 0 ? 1 : _ref$alpha;

      if (alpha === 1) {
        return "#".concat(this.hexColor);
      }

      alpha = Math.max(0, Math.min(1, alpha));
      return "rgba(".concat(this.r, ", ").concat(this.g, ", ").concat(this.b, ", ").concat(alpha, ")");
    }
  }]);

  return Color;
}(wrapNativeSuper(String));

function color(value) {
  return new Color(value);
}

var colors = {
  // base
  White: '#FFFFFF',
  // greyscale
  GreyBasic: '#DDE4E9',
  GreyLight: '#C4CDD5',
  Grey: '#C8D7EA',
  GreyMedium: '#637381',
  GreyDark: '#212B36',
  // primary colors
  AragonBlue: '#08BEE5',
  AragonBlueLight: '#95ECFF',
  AragonBlueLighter: '#EBFAFD',
  AragonBlueDark: '#0792AF',
  AragonTurquoise: '#3FE8E0',
  AragonTurquoiseLight: '#9CF7F3',
  AragonTurquoiseDark: '#26B4AD',
  // secondary colors
  ArcticBlueLight: '#F9FAFC',
  ArcticBlue: '#F1F3F7',
  ArcticBlueDark: '#ABBECF',
  ArcticBlueDarker: '#8FA4B5',
  Purple: '#7C80F2',
  PurpleLight: '#CCBDF4',
  PurpleDark: '#4D22DF',
  BlueLight: '#9DBEFF',
  Blue: '#3E7BF6',
  BlueDark: '#3361EB',
  GrassGreenLight: '#CADFAB',
  GrassGreen: '#9BC75A',
  GrassGreenDark: '#749C47',
  YellowLight: '#FEF4A8',
  Yellow: '#F7D858',
  YellowDark: '#F2C14F',
  CoralLight: '#FCC2AA',
  Coral: '#F08658',
  CoralDark: '#D26C41',
  BrownLight: '#D8BCB1',
  Brown: '#876559',
  BrownDark: '#564038',
  // functionality colors
  MintGreenLight: '#87F1CB',
  MintGreen: '#2CC68F',
  MintGreenDark: '#1B8962',
  OrangeLight: '#FFD48C',
  Orange: '#F5A623',
  OrangeDark: '#C7871E',
  RedLight: '#FFB1B1',
  Red: '#FF6969',
  RedDark: '#CA4141'
};

var light = {
  _name: 'light',
  background: colors.ArcticBlueLight,
  border: colors.GreyBasic,
  overlay: colors.White,
  content: colors.GreyDark,
  contentSecondary: colors.GreyMedium,
  surface: colors.White,
  surfaceContent: colors.GreyDark,
  surfaceContentSecondary: colors.GreyMedium,
  surfaceIcon: colors.ArcticBlueDarker,
  surfaceUnder: colors.ArcticBlue,
  surfaceOpened: colors.ArcticBlueDark,
  surfaceSelected: colors.ArcticBlueLight,
  surfaceHighlight: colors.ArcticBlueLight,
  surfacePressed: colors.ArcticBlueLight,
  surfaceInteractive: colors.White,
  feedbackSurface: colors.ArcticBlueLight,
  feedbackSurfaceContent: colors.GreyDark,
  feedbackSurfaceContentSecondary: colors.GreyMedium,
  warning: colors.Orange,
  warningSurface: '#FFF1DA',
  warningSurfaceContent: colors.OrangeDark,
  info: colors.AragonBlue,
  infoSurface: colors.AragonBlueLighter,
  infoSurfaceContent: colors.AragonBlueDark,
  help: colors.Purple,
  helpContent: colors.White,
  helpSurface: colors.White,
  helpSurfaceContent: colors.GreyDark,
  negative: colors.Red,
  negativeContent: colors.White,
  negativeSurface: '#FFE8E8',
  negativeSurfaceContent: colors.RedDark,
  positive: colors.MintGreen,
  positiveContent: colors.White,
  positiveSurface: '#D8FFF1',
  positiveSurfaceContent: colors.MintGreenDark,
  badge: colors.AragonBlueLighter,
  badgeContent: colors.GreyDark,
  badgePressed: colors.ArcticBlueLight,
  tagIdentifier: '#EDE6FF',
  tagIdentifierContent: colors.PurpleDark,
  tagNew: '#D8FFF1',
  tagNewContent: colors.MintGreen,
  tagIndicator: colors.AragonBlueLighter,
  tagIndicatorContent: colors.AragonBlue,
  tagActivity: colors.AragonBlue,
  tagActivityContent: colors.White,
  hint: colors.ArcticBlueDarker,
  link: colors.Blue,
  focus: colors.Blue,
  selected: colors.AragonBlue,
  selectedContent: colors.White,
  selectedDisabled: colors.GreyLight,
  disabled: colors.ArcticBlue,
  disabledContent: colors.GreyMedium,
  disabledIcon: colors.ArcticBlueDarker,
  control: colors.ArcticBlueLight,
  controlBorder: colors.GreyBasic,
  controlBorderPressed: colors.ArcticBlueDark,
  controlDisabled: colors.ArcticBlue,
  controlSurface: colors.ArcticBlueLight,
  controlUnder: colors.GreyBasic,
  accent: colors.AragonBlue,
  accentStart: colors.AragonBlue,
  accentEnd: colors.AragonTurquoise,
  accentContent: colors.White,
  floating: '#30404F',
  floatingContent: colors.White,
  green: colors.GrassGreen,
  yellow: colors.Yellow,
  red: colors.Coral,
  blue: colors.Blue,
  brown: colors.Brown,
  purple: colors.Purple,
  // Deprecated
  error: colors.Red,
  success: colors.MintGreen
};

var dark = {
  _name: 'dark',
  background: '#28334c',
  border: '#2c3a58',
  overlay: '#35425e',
  content: colors.White,
  contentSecondary: '#7c99d6',
  surface: '#35425e',
  surfaceContent: colors.White,
  surfaceContentSecondary: '#7c99d6',
  surfaceIcon: '#6683c3',
  surfaceUnder: '#2d3954',
  surfaceOpened: '#7c99d6',
  surfaceSelected: '#405071',
  surfaceHighlight: '#405071',
  surfacePressed: '#3f4e6d',
  surfaceInteractive: '#405071',
  feedbackSurface: '#4c5d82',
  feedbackSurfaceContent: colors.GreyDark,
  feedbackSurfaceContentSecondary: colors.GreyMedium,
  warning: '#ffa410',
  warningSurface: '#656569',
  warningSurfaceContent: '#ffa410',
  info: '#00d2ff',
  infoSurface: '#415279',
  infoSurfaceContent: '#18d4fb',
  help: colors.Purple,
  helpContent: colors.White,
  helpSurface: colors.White,
  helpSurfaceContent: colors.GreyDark,
  negative: colors.Red,
  negativeContent: colors.White,
  negativeSurface: '#655c72',
  negativeSurfaceContent: '#ff5454',
  positive: '#2cc68f',
  positiveContent: colors.White,
  positiveSurface: '#35585e',
  positiveSurfaceContent: colors.MintGreenDark,
  badge: '#415279',
  badgeContent: '#ffffff',
  badgePressed: '#4c5d82',
  tagIdentifier: '#564090',
  tagIdentifierContent: '#b6a1ff',
  tagNew: '#35585e',
  tagNewContent: '#2cc68f',
  tagIndicator: '#415279',
  tagIndicatorContent: '#00d3ff',
  tagActivity: '#00d2ff',
  tagActivityContent: colors.White,
  hint: '#6683c3',
  link: '#0ca5ff',
  focus: '#0ca5ff',
  selected: '#00d2ff',
  selectedContent: colors.White,
  selectedDisabled: colors.GreyDark,
  disabled: '#3f4e6f',
  disabledContent: '#8497bf',
  disabledIcon: '#6683c3',
  control: '#57698c',
  controlBorder: '#2c3a58',
  controlBorderPressed: '#65779a',
  controlDisabled: '#3f4e6f',
  controlSurface: colors.ArcticBlueLight,
  controlUnder: colors.ArcticBlue,
  accent: '#00d2ff',
  accentStart: '#00d2ff',
  accentEnd: '#0aece2',
  accentContent: colors.White,
  floating: '#1c2539',
  floatingContent: colors.White,
  green: colors.GrassGreen,
  yellow: colors.Yellow,
  red: colors.Coral,
  blue: colors.Blue,
  brown: colors.Brown,
  purple: colors.Purple,
  // Deprecated
  error: colors.Red,
  success: '#2cc68f'
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var EMBEDDED_THEMES = {
  dark: dark,
  light: light
};
var DEFAULT_THEME = 'light';
var RESERVED_KEYS = ['_name'];

function getTheme(theme) {
  if (typeof theme === 'string' && EMBEDDED_THEMES[theme]) {
    return EMBEDDED_THEMES[theme];
  }

  return theme;
}

var ThemeContext = React.createContext(convertThemeColors(getTheme(DEFAULT_THEME)));

function convertThemeColors(theme) {
  return Object.entries(theme).reduce(function (theme, _ref) {
    var _ref2 = slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    var convertedValue = RESERVED_KEYS.includes(name) ? value : color(value || '#FF00FF');
    return _objectSpread$1({}, theme, defineProperty({}, name, convertedValue));
  }, {});
}

function useTheme() {
  return useContext(ThemeContext);
}

function Theme(_ref3) {
  var theme = _ref3.theme,
      children = _ref3.children;
  var themeConverted = useMemo(function () {
    return convertThemeColors(getTheme(theme));
  }, [theme]);
  return React.createElement(ThemeContext.Provider, {
    value: themeConverted
  }, children);
}

Theme.propTypes = {
  theme: propTypes.oneOfType([propTypes.object, propTypes.string]).isRequired,
  children: propTypes.node
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getCurrentWindowSize = function getCurrentWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

var WINDOW_SIZE_BASE = _objectSpread$2({
  breakpoints: BREAKPOINTS
}, getCurrentWindowSize());

var ViewportContext = React.createContext(WINDOW_SIZE_BASE);

var ViewportProvider =
/*#__PURE__*/
function (_React$Component) {
  inherits(ViewportProvider, _React$Component);

  function ViewportProvider() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, ViewportProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(ViewportProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      windowSize: _this.getWindowSize()
    });

    defineProperty(assertThisInitialized(_this), "updateWindowSize", function () {
      _this.setState({
        windowSize: _this.getWindowSize()
      });
    });

    defineProperty(assertThisInitialized(_this), "within", function (min, max) {
      var width = _this.state.windowSize.width; // Accept "" or -1 indifferently

      if (min === '') min = -1;
      if (max === '') max = -1; // Convert breakpoints into numbers

      if (typeof min === 'string') min = BREAKPOINTS[min];
      if (typeof max === 'string') max = BREAKPOINTS[max];

      if (typeof min !== 'number') {
        throw new Error("Viewport: invalid minimum value (".concat(min, ")."));
      }

      if (typeof max !== 'number') {
        throw new Error("Viewport: invalid maximum value (".concat(max, ")."));
      }

      return (min === -1 || width >= min) && (max === -1 || width < max);
    });

    defineProperty(assertThisInitialized(_this), "above", function (value) {
      return _this.within(value, -1);
    });

    defineProperty(assertThisInitialized(_this), "below", function (value) {
      return _this.within(-1, value);
    });

    return _this;
  }

  createClass(ViewportProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resizeStart();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.resizeStop();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var throttle = this.props.throttle;

      if (prevProps.throttle !== throttle) {
        this.resizeStop();
        this.resizeStart();
      }
    }
  }, {
    key: "resizeStart",
    value: function resizeStart() {
      this._handleResize = throttle(this.updateWindowSize, this.props.throttle);
      this.updateWindowSize();
      window.addEventListener('resize', this._handleResize);
    }
  }, {
    key: "resizeStop",
    value: function resizeStop() {
      if (!this._handleResize) {
        return;
      }

      window.removeEventListener('resize', this._handleResize);

      this._handleResize.cancel();

      delete this._handleResize;
    }
  }, {
    key: "getWindowSize",
    value: function getWindowSize() {
      return _objectSpread$2({}, WINDOW_SIZE_BASE, {}, getCurrentWindowSize());
    } // Check if the current width is between two points.
    // Accepts a breakpoint string ('small', 'large') or numbers (width in pixels).
    // `min` is inclusive and `max` is exclusive.

  }, {
    key: "render",
    value: function render() {
      var windowSize = this.state.windowSize;
      var children = this.props.children;
      var within = this.within,
          above = this.above,
          below = this.below;
      return React.createElement(ViewportContext.Provider, {
        value: _objectSpread$2({}, windowSize, {
          within: within,
          above: above,
          below: below
        })
      }, children);
    }
  }]);

  return ViewportProvider;
}(React.Component); // React emits a warning message if `Provider` is attached to `Consumer`, this
// is only to prevent it.


defineProperty(ViewportProvider, "propTypes", {
  children: propTypes.node,
  throttle: propTypes.number
});

defineProperty(ViewportProvider, "defaultProps", {
  throttle: 100
});

var Viewport = function Viewport(props) {
  return React.createElement(ViewportContext.Consumer, props);
};

Viewport.Provider = ViewportProvider;
var useViewport = function useViewport() {
  return React.useContext(ViewportContext);
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(function (_ref) {
    var _ref2 = slicedToArray(_ref, 1),
        name = _ref2[0];

    return name !== 'min';
  }).sort(function (a, b) {
    return a[1] - b[1];
  });
} // Minimum margin around a layouts


var MIN_MARGIN = 3 * GU;

function getLayoutSize(parentWidth, breakpoints) {
  var sizes = getSizes(breakpoints);
  var index = sizes.length;

  while (index--) {
    if (parentWidth >= sizes[index][1]) {
      return [sizes[index][0], sizes[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2)];
    }
  }

  return sizes[0];
}

var LayoutContext = React.createContext({});

function useLayout() {
  var _useContext = useContext(LayoutContext),
      layoutWidth = _useContext.layoutWidth,
      layoutName = _useContext.layoutName;

  return {
    layoutName: layoutName,
    layoutWidth: layoutWidth,
    // deprecated
    name: layoutName,
    width: layoutWidth
  };
}

var _StyledDiv = _styled.div.withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-16bvfls-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function Layout(_ref3) {
  var breakpoints = _ref3.breakpoints,
      children = _ref3.children,
      paddingBottom = _ref3.paddingBottom,
      parentWidth = _ref3.parentWidth,
      props = objectWithoutProperties(_ref3, ["breakpoints", "children", "paddingBottom", "parentWidth"]);

  var _useViewport = useViewport(),
      viewportWidth = _useViewport.width;

  var mergedBreakpoints = useMemo(function () {
    return _objectSpread$3({}, BREAKPOINTS, {}, breakpoints);
  }, [breakpoints]); // If the parent width is not passed, use the viewport width.

  var _useMemo = useMemo(function () {
    return getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints);
  }, [viewportWidth, parentWidth, mergedBreakpoints]),
      _useMemo2 = slicedToArray(_useMemo, 2),
      layoutName = _useMemo2[0],
      layoutWidth = _useMemo2[1];

  return React.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth: layoutWidth,
      layoutName: layoutName
    }
  }, React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: layoutName === 'small' ? 'auto' : "".concat(layoutWidth, "px"),
    _css2: mergedBreakpoints.min,
    _css3: cssPx(paddingBottom)
  }), children));
}

Layout.propTypes = {
  breakpoints: propTypes.shape({
    min: propTypes.number,
    small: propTypes.number,
    medium: propTypes.number,
    large: propTypes.number
  }),
  children: propTypes.node,
  paddingBottom: propTypes.oneOfType([propTypes.number, propTypes.string]),
  parentWidth: propTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * GU
}; // Can be used to build an alternative Layout component

Layout.__Context = LayoutContext;

var BAR_PADDING = 2 * GU;

var _StyledDiv$1 = _styled.div.withConfig({
  displayName: "Bar___StyledDiv",
  componentId: "sc-1tcfrs9-0"
})(["display:flex;justify-content:space-between;width:100%;height:100%;"]);

var _StyledDiv2 = _styled.div.withConfig({
  displayName: "Bar___StyledDiv2",
  componentId: "sc-1tcfrs9-1"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], BAR_PADDING);

var _StyledDiv3 = _styled.div.withConfig({
  displayName: "Bar___StyledDiv3",
  componentId: "sc-1tcfrs9-2"
})(["display:flex;align-items:center;height:100%;padding-right:", "px;"], BAR_PADDING);

var _StyledDiv4 = _styled.div.withConfig({
  displayName: "Bar___StyledDiv4",
  componentId: "sc-1tcfrs9-3"
})(["border-radius:", "px;background:", ";border-style:solid;border-color:", ";border-width:", ";height:", "px;margin-bottom:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function Bar(_ref) {
  var children = _ref.children,
      primary = _ref.primary,
      secondary = _ref.secondary,
      props = objectWithoutProperties(_ref, ["children", "primary", "secondary"]);

  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullScreen = layoutName === 'small';
  var content = children || React.createElement(_StyledDiv$1, null, React.createElement(_StyledDiv2, null, React.createElement(Inside, {
    name: "Bar:primary"
  }, primary)), React.createElement(_StyledDiv3, null, React.createElement(Inside, {
    name: "Bar:secondary"
  }, secondary)));
  return React.createElement(Inside, {
    name: "Bar"
  }, React.createElement(_StyledDiv4, _extends_1({}, props, {
    _css: fullScreen ? 0 : RADIUS,
    _css2: theme.surface,
    _css3: theme.border,
    _css4: fullScreen ? '1px 0' : '1px',
    _css5: 8 * GU,
    _css6: 2 * GU
  }), content));
}

Bar.propTypes = {
  children: propTypes.node,
  primary: propTypes.node,
  secondary: propTypes.node
};
Bar.PADDING = BAR_PADDING;

/*
 * MainTheme is meant to be used by the <Main /> component. It trades the
 * genericity of `<Theme />` for the idea of a “main theme”, allowing to change
 * the mode of this main theme from anywhere, including from a sub (non main) theme.
 */

var MainThemeContext = React.createContext({});

function useThemeMode() {
  var _useContext = useContext(MainThemeContext),
      theme = _useContext.theme,
      setTheme = _useContext.setTheme;

  var themeMode = useMemo(function () {
    return {
      set: function set(name) {
        setTheme(name);
      },
      toggle: function toggle() {
        setTheme(function (name) {
          return name === 'light' ? 'dark' : 'light';
        });
      },
      mode: theme === 'dark' ? 'dark' : 'light'
    };
  }, [theme, setTheme]);
  return themeMode;
}

function MainTheme(_ref) {
  var children = _ref.children;

  var _useState = useState('light'),
      _useState2 = slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  return React.createElement(MainThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, React.createElement(Theme, {
    theme: theme
  }, children));
}

MainTheme.propTypes = {
  children: propTypes.node
};

var _StyledDiv$2 = _styled.div.withConfig({
  displayName: "Box___StyledDiv",
  componentId: "sc-54p6u6-0"
})(["position:relative;border-radius:", "px;border-style:solid;border-color:", ";border-width:", ";background:", ";color:", ";& + &{margin-top:", "px;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledH = _styled.h1.withConfig({
  displayName: "Box___StyledH",
  componentId: "sc-54p6u6-1"
})(["display:flex;align-items:center;height:", "px;padding:0 ", "px;border-bottom:1px solid ", ";color:", ";", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var _StyledDiv2$1 = _styled.div.withConfig({
  displayName: "Box___StyledDiv2",
  componentId: "sc-54p6u6-2"
})(["padding:", "px;"], function (p) {
  return p._css12;
});

function Box(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      padding = _ref.padding,
      props = objectWithoutProperties(_ref, ["heading", "children", "padding"]);

  var theme = useTheme();

  var _useInside = useInside('Split:primary'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideSplitPrimary = _useInside2[0];

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  var defaultPadding = (fullWidth ? 2 : insideSplitPrimary ? 5 : 3) * GU;

  if (padding === true) {
    warnOnce('Box:padding:true', 'Box: setting true on the padding prop is deprecated. Omit it, or set it to undefined instead.');
    padding = defaultPadding;
  }

  if (padding === false) {
    warnOnce('Box:padding:false', 'Box: setting false on the padding prop is deprecated. Use 0.');
    padding = 0;
  }

  var contentPadding = padding === undefined ? defaultPadding : padding;
  return React.createElement(Inside, {
    name: "Box"
  }, React.createElement(_StyledDiv$2, _extends_1({
    as: heading ? 'section' : 'div'
  }, props, {
    _css: fullWidth ? 0 : RADIUS,
    _css2: theme.border,
    _css3: fullWidth ? '1px 0' : '1px',
    _css4: theme.surface,
    _css5: theme.surfaceContent,
    _css6: 2 * GU
  }), heading && React.createElement(_StyledH, {
    _css7: 4 * GU,
    _css8: defaultPadding,
    _css9: theme.border,
    _css10: theme.surfaceContentSecondary,
    _css11: textStyle('label2')
  }, React.createElement(Inside, {
    name: "Box:heading"
  }, heading)), React.createElement(_StyledDiv2$1, {
    _css12: contentPadding
  }, React.createElement("div", null, React.createElement(Inside, {
    name: "Box:content"
  }, children)))));
}

Box.propTypes = {
  heading: propTypes.node,
  children: propTypes.node,
  padding: propTypes.oneOfType([propTypes.number, // deprecated
  propTypes.bool])
};

// supporting it yet.
//
// It follows the Chrome implementation, checking for a pointer device rather
// than a keyboard event.
//
// Resources:
//  - https://caniuse.com/#search=%3Afocus-visible
//  - https://github.com/WICG/focus-visible/issues/88#issuecomment-363227219
//  - https://chromium-review.googlesource.com/c/chromium/src/+/897002<Paste>
//

var FocusVisible =
/*#__PURE__*/
function (_React$Component) {
  inherits(FocusVisible, _React$Component);

  function FocusVisible() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, FocusVisible);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(FocusVisible)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "_element", React.createRef());

    defineProperty(assertThisInitialized(_this), "_document", null);

    defineProperty(assertThisInitialized(_this), "state", {
      focusVisible: false
    });

    defineProperty(assertThisInitialized(_this), "handlePointerEvent", function (e) {
      _this._pointerActive = true;
      _this._timer = setTimeout(function () {
        _this._pointerActive = false;
      }, 0);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        focusVisible: !_this._pointerActive
      });
    });

    return _this;
  }

  createClass(FocusVisible, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // `document` was previously set as a state entry, which was having the
      // advantages of keeping track of it, and also triggering a rerender to
      // remove the injected span.
      //
      // The issue with this approach is that the component can get unmounted
      // before the state gets updated (e.g. in case of an error in the tree),
      // preventing to remove the event listeners.
      //
      // this._document is now set on the instance directly, and
      // this.forceUpdate() is used to trigger the second render needed to remove
      // the injected span.
      this._document = this._element.current.ownerDocument;

      this._document.addEventListener('mousedown', this.handlePointerEvent);

      this._document.addEventListener('mouseup', this.handlePointerEvent);

      this._document.addEventListener('touchstart', this.handlePointerEvent);

      this._document.addEventListener('touchend', this.handlePointerEvent);

      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._document) {
        this._document.removeEventListener('mousedown', this.handlePointerEvent);

        this._document.removeEventListener('mouseup', this.handlePointerEvent);

        this._document.removeEventListener('touchstart', this.handlePointerEvent);

        this._document.removeEventListener('touchend', this.handlePointerEvent);
      }
    } // It doesn’t seem to be specified, but pointer-related events happen before
    // the focus-related events on every modern browser.

  }, {
    key: "render",
    value: function render() {
      var focusVisible = this.state.focusVisible;
      return React.createElement(React.Fragment, null, this.props.children({
        focusVisible: focusVisible,
        onFocus: this.handleFocus
      }), !this._document && React.createElement("span", {
        ref: this._element
      }));
    }
  }]);

  return FocusVisible;
}(React.Component);

defineProperty(FocusVisible, "propTypes", {
  // children is called with an object containing two entries:
  //   - focusVisible represents the visibility of the focus (boolean).
  //   - onFocus() need to be called when the target element is focused.
  children: propTypes.func.isRequired
});

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getElementProps(_ref) {
  var element = _ref.element,
      href = _ref.href,
      disabled = _ref.disabled,
      external = _ref.external;

  // <button> (handles key events)
  if (element === 'button') {
    return ['button', {
      type: 'button',
      disabled: disabled
    }];
  } // <a href=""> (handles key events)


  if (element === 'a' && href) {
    return ['anchor', disabled ? {} : _objectSpread$4({
      href: href,
      rel: 'noopener noreferrer'
    }, external ? {
      target: '_blank'
    } : {})];
  } // <a> or <div> (doesn’t handle key events)


  return ['basic', {
    role: 'button',
    tabIndex: disabled ? '-1' : '0'
  }];
}

var _StyledButton = _styled.button.withConfig({
  displayName: "ButtonBase___StyledButton",
  componentId: "ur1q76-0"
})(["position:relative;display:inline-block;padding:0;white-space:nowrap;", ";text-decoration:none;text-align:center;background:none;border-radius:", "px;border:0;outline:0;cursor:", ";", ";&::-moz-focus-inner{border:0;}&:focus:after{content:'';display:", ";position:absolute;top:", "px;left:", "px;right:", "px;bottom:", "px;border-radius:", "px;border:2px solid ", ";}"], function (p) {
  return p._css;
}, RADIUS, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

function ButtonBase(_ref2) {
  var disabled = _ref2.disabled,
      element = _ref2.element,
      external = _ref2.external,
      focusRingRadius = _ref2.focusRingRadius,
      focusRingSpacing = _ref2.focusRingSpacing,
      focusVisible = _ref2.focusVisible,
      href = _ref2.href,
      innerRef = _ref2.innerRef,
      onClick = _ref2.onClick,
      onKeyDown = _ref2.onKeyDown,
      showFocusRing = _ref2.showFocusRing,
      props = objectWithoutProperties(_ref2, ["disabled", "element", "external", "focusRingRadius", "focusRingSpacing", "focusVisible", "href", "innerRef", "onClick", "onKeyDown", "showFocusRing"]);

  var theme = useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  if (typeof focusRingSpacing === 'number') {
    focusRingSpacing = [focusRingSpacing, focusRingSpacing];
  }

  if (!element) {
    element = href ? 'a' : 'button';
  }

  var _getElementProps = getElementProps({
    element: element,
    href: href,
    disabled: disabled,
    external: external
  }),
      _getElementProps2 = slicedToArray(_getElementProps, 2),
      elementType = _getElementProps2[0],
      elementProps = _getElementProps2[1];

  var handleKeyDown = useCallback(function (event) {
    // Only applies to cases where the enter key is not handled already
    if (elementType === 'basic' && event.keyCode === KEY_ENTER && onClick) {
      onClick();
    } // Pass the event up


    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [elementType, onClick, onKeyDown]);
  return React.createElement(_StyledButton, _extends_1({
    as: element,
    ref: innerRef,
    onClick: disabled ? undefined : onClick,
    onKeyDown: disabled ? undefined : handleKeyDown
  }, elementProps, props, {
    _css: textStyle('body3'),
    _css2: disabled ? 'default' : 'pointer',
    _css3: elementType === 'basic' ? unselectable : '',
    _css4: focusVisible && showFocusRing ? 'block' : 'none',
    _css5: -focusRingSpacing[1],
    _css6: -focusRingSpacing[0],
    _css7: -focusRingSpacing[0],
    _css8: -focusRingSpacing[1],
    _css9: focusRingRadius,
    _css10: theme.focus
  }));
}

ButtonBase.propTypes = {
  disabled: propTypes.bool,
  external: propTypes.bool,
  focusRingRadius: propTypes.number,
  focusRingSpacing: propTypes.oneOfType([propTypes.number, propTypes.arrayOf(propTypes.number)]),
  focusVisible: propTypes.bool,
  href: propTypes.string,
  innerRef: propTypes.any,
  onClick: propTypes.func,
  onKeyDown: propTypes.func,
  showFocusRing: propTypes.bool,
  element: propTypes.oneOf(['button', 'div', 'a'])
};
ButtonBase.defaultProps = {
  disabled: false,
  focusRingRadius: 0,
  focusRingSpacing: 0,
  showFocusRing: true
};
var ButtonBaseWithFocus = React.forwardRef(function (_ref3, ref) {
  var onFocusProp = _ref3.onFocus,
      props = objectWithoutProperties(_ref3, ["onFocus"]);

  return React.createElement(FocusVisible, null, function (_ref4) {
    var focusVisible = _ref4.focusVisible,
        onFocus = _ref4.onFocus;

    // support external onFocus handlers
    var handleFocus = function handleFocus(event) {
      if (onFocusProp) {
        onFocusProp(event);
      }

      onFocus(event);
    };

    return React.createElement(ButtonBase, _extends_1({
      innerRef: ref,
      onFocus: handleFocus,
      focusVisible: focusVisible
    }, props));
  });
});
ButtonBaseWithFocus.propTypes = _objectSpread$4({}, ButtonBase.propTypes, {
  onFocus: propTypes.func
});
var LinkBase = React.forwardRef(function (props, ref) {
  warnOnce('LinkBase', 'LinkBase is deprecated: please use ButtonBase with a href prop instead.');
  return React.createElement(ButtonBase, _extends_1({
    ref: ref
  }, props));
});

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "PaginationItem___StyledButtonBase",
  componentId: "kftpwz-0"
})(["width:", "px;height:", "px;color:", ";border-radius:", "px;&:active{background:", ";}", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, RADIUS, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan = _styled.span.withConfig({
  displayName: "PaginationItem___StyledSpan",
  componentId: "kftpwz-1"
})(["position:relative;top:1px;"]);

function PaginationItem(_ref) {
  var touchMode = _ref.touchMode,
      selected = _ref.selected,
      index = _ref.index,
      onChange = _ref.onChange;
  var theme = useTheme();
  var handleClick = useCallback(function () {
    onChange(index);
  }, [index, onChange]);
  return React.createElement("div", null, React.createElement(_StyledButtonBase, {
    onClick: handleClick,
    focusRingRadius: RADIUS,
    disabled: selected,
    _css: (touchMode ? 4 : 3) * GU,
    _css2: (touchMode ? 4 : 3) * GU,
    _css3: theme.surfaceContent,
    _css4: theme.surfacePressed,
    _css5: selected && css(["&&{background:", ";color:", ";}"], theme.accent, theme.accentContent)
  }, React.createElement(_StyledSpan, null, index + 1)));
}

PaginationItem.propTypes = {
  index: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
  selected: propTypes.bool.isRequired,
  touchMode: propTypes.bool.isRequired
};

var ICON_SIZES = new Map([['large', 6 * GU], ['medium', 3 * GU], ['small', 2 * GU], ['tiny', 1.75 * GU]]); // Mapping of button size => icon size

var BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  var _useInside = useInside('Button:icon'),
      _useInside2 = slicedToArray(_useInside, 2),
      insideButtonIcon = _useInside2[0],
      buttonData = _useInside2[1]; // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.


  var sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

var IconPropTypes = {
  size: propTypes.oneOf(['large', 'medium', 'small', 'tiny'])
};

function IconAddUser(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M15.644 14.614c-1.382-.77-3.21-1.194-5.148-1.194-1.938 0-3.766.424-5.148 1.194C3.834 15.457 3 16.627 3 17.908v.752a.727.727 0 101.454 0v-.752c0-.72.584-1.457 1.601-2.023 1.17-.652 2.747-1.01 4.44-1.01 1.695 0 3.272.358 4.442 1.01 1.017.566 1.6 1.304 1.6 2.023v.752a.727.727 0 101.455 0v-.752c0-1.281-.834-2.45-2.348-3.294zM14.223 7.55a3.71 3.71 0 00-1.054-2.093 3.733 3.733 0 00-3.19-1.054 3.74 3.74 0 00-3.146 4.243 3.711 3.711 0 001.47 2.453 3.707 3.707 0 002.773.694 3.74 3.74 0 003.147-4.243zm-3.36 2.805a2.266 2.266 0 01-1.694-.424 2.266 2.266 0 01-.897-1.498 2.284 2.284 0 012.59-2.591 2.268 2.268 0 011.923 1.922 2.284 2.284 0 01-1.922 2.59zm7.154-2.199a.727.727 0 00-.727.727v4.512a.727.727 0 101.454 0V8.883a.727.727 0 00-.727-.727z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M20.273 10.412H15.76a.727.727 0 100 1.454h4.513a.727.727 0 000-1.454z"
  }));
}

IconAddUser.propTypes = IconPropTypes;

function IconAlert(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.221 15.131c.274.334.49.632.648.892.157.261.173.522.047.783a.773.773 0 01-.616.454 4.888 4.888 0 01-.663.063h-2.952a2.57 2.57 0 01-.79 1.894 2.613 2.613 0 01-1.91.783c-.746 0-1.383-.26-1.91-.783a2.57 2.57 0 01-.789-1.894H6.398c-.242 0-.492-.029-.75-.086a.788.788 0 01-.56-.43c-.127-.262-.116-.53.031-.807.147-.277.347-.582.6-.916.284-.365.594-.78.931-1.245.337-.464.505-.947.505-1.448V9.12c0-.71.124-1.375.371-1.996a5.184 5.184 0 011.019-1.628c.431-.464.941-.83 1.53-1.096a4.558 4.558 0 011.895-.399c.684 0 1.32.133 1.91.4.59.265 1.102.63 1.54 1.095a5.11 5.11 0 011.025 1.628c.248.621.371 1.287.371 1.996v3.272c0 .512.16 1.008.482 1.488.32.48.629.897.923 1.252zm-6.237 3.78c.427 0 .792-.15 1.095-.451.302-.3.454-.662.454-1.085h-3.097c0 .423.151.785.454 1.085.303.3.667.45 1.094.45zm5.594-2.822a5.039 5.039 0 00-.168-.22 14.96 14.96 0 01-1.232-1.673 3.373 3.373 0 01-.544-1.864V9.153c0-.547-.094-1.06-.283-1.536a3.993 3.993 0 00-.773-1.247 3.668 3.668 0 00-1.155-.844 3.367 3.367 0 00-1.446-.312c-.51 0-.988.104-1.431.312-.444.208-.83.489-1.156.844-.326.355-.581.77-.765 1.247a4.236 4.236 0 00-.276 1.536v3.18a3.12 3.12 0 01-.573 1.817 48.208 48.208 0 01-1.21 1.68 4.714 4.714 0 00-.175.26h11.187z",
    clipRule: "evenodd"
  }));
}

IconAlert.propTypes = IconPropTypes;

function IconAlignCenter(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.068 9.534H5.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398zM19.602 6H3.7a.699.699 0 000 1.398h15.903a.699.699 0 100-1.398zm0 7.068H3.7a.699.699 0 000 1.398h15.903a.699.699 0 100-1.398zm-1.534 3.534H5.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398z"
  }));
}

IconAlignCenter.propTypes = IconPropTypes;

function IconAlignJustify(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M20.273 9.434H3.727a.727.727 0 000 1.455h16.546a.727.727 0 000-1.455zm0-3.676H3.727a.727.727 0 000 1.454h16.546a.727.727 0 100-1.454zm0 7.353H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454zm0 3.677H3.727a.727.727 0 100 1.454h16.546a.727.727 0 100-1.454z"
  }));
}

IconAlignJustify.propTypes = IconPropTypes;

function IconAlignLeft(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M16.418 9.534H4.048a.699.699 0 000 1.398h12.37a.699.699 0 100-1.398zM19.952 6H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm0 7.068H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm-3.534 3.534H4.048a.699.699 0 000 1.398h12.37a.699.699 0 100-1.398z"
  }));
}

IconAlignLeft.propTypes = IconPropTypes;

function IconAlignRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M20.068 9.534H7.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398zM19.952 6H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm0 7.068H4.048a.699.699 0 000 1.398h15.904a.699.699 0 000-1.398zm.116 3.534H7.698a.699.699 0 000 1.398h12.37a.699.699 0 000-1.398z"
  }));
}

IconAlignRight.propTypes = IconPropTypes;

function IconAragon(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 4l.22.068c.595.186 4.982 1.592 8.47 4.433l.31.253-.077.383c-.088.441-.503 2.311-1.594 4.393-.728 1.39-1.617 2.613-2.647 3.627a11.751 11.751 0 01-4.443 2.76l-.24.083-.239-.082a11.739 11.739 0 01-4.442-2.756c-1.03-1.013-1.919-2.23-2.648-3.62-1.097-2.09-1.506-3.96-1.595-4.407L3 8.754l.31-.253c3.487-2.841 7.868-4.247 8.472-4.433L12 4zM4.546 9.268c.168.702.573 2.124 1.386 3.673.672 1.282 1.48 2.384 2.4 3.287A10.33 10.33 0 0012 18.57a10.351 10.351 0 003.67-2.347M4.545 9.268c2.931-2.276 6.445-3.525 7.454-3.854 1.009.33 4.524 1.58 7.454 3.853-.17.7-.577 2.12-1.385 3.664-.673 1.282-1.48 2.389-2.399 3.292",
    clipRule: "evenodd"
  }));
}

IconAragon.propTypes = IconPropTypes;

function IconArrowDown(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M11.434 5.566v12.869a.566.566 0 001.132 0V5.565a.566.566 0 10-1.132 0z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 17.634L7.574 13.21a.565.565 0 10-.8.8l4.826 4.825a.566.566 0 00.8 0l4.826-4.826a.563.563 0 000-.8.566.566 0 00-.8 0L12 17.634z"
  }));
}

IconArrowDown.propTypes = IconPropTypes;

function IconArrowLeft(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M6.366 12l4.426-4.426a.565.565 0 10-.8-.8L5.166 11.6a.566.566 0 000 .8l4.826 4.826a.564.564 0 00.8 0 .565.565 0 000-.8L6.366 12z"
  }));
}

IconArrowLeft.propTypes = IconPropTypes;

function IconArrowRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M5.566 12.566h12.869a.566.566 0 000-1.132H5.565a.566.566 0 100 1.132z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M17.634 12l-4.426 4.426a.566.566 0 00.8.8l4.826-4.826a.566.566 0 000-.8l-4.826-4.826a.564.564 0 00-.8 0 .566.566 0 000 .8L17.634 12z"
  }));
}

IconArrowRight.propTypes = IconPropTypes;

function IconArrowUp(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12.566 18.434V5.566a.566.566 0 00-1.132 0v12.869a.566.566 0 101.132 0z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M12 6.366l4.426 4.426a.566.566 0 00.8-.8L12.4 5.166a.566.566 0 00-.8 0L6.774 9.992a.564.564 0 000 .8c.221.22.58.22.8 0L12 6.366z"
  }));
}

IconArrowUp.propTypes = IconPropTypes;

function IconAtSign(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M12 8.412a3.592 3.592 0 00-3.588 3.587A3.592 3.592 0 0012 15.587 3.592 3.592 0 0015.588 12 3.592 3.592 0 0012 8.412zm0 5.883a2.298 2.298 0 01-2.295-2.296A2.298 2.298 0 0112 9.704 2.298 2.298 0 0114.295 12 2.298 2.298 0 0112 14.295z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.947 7.947 0 00-5.657 2.343A7.947 7.947 0 004 12.002c0 2.136.832 4.145 2.343 5.656A7.948 7.948 0 0012 20a8.044 8.044 0 004.864-1.648.646.646 0 10-.786-1.027A6.744 6.744 0 0112 18.707a6.664 6.664 0 01-4.743-1.964A6.664 6.664 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12v.735c0 .86-.7 1.56-1.56 1.56-.86 0-1.56-.7-1.56-1.56V12a.646.646 0 10-1.292 0v.735a2.856 2.856 0 002.853 2.852A2.856 2.856 0 0020 12.735v-.736a7.948 7.948 0 00-2.343-5.656z"
  }));
}

IconAtSign.propTypes = IconPropTypes;

function IconBlock(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.807 6.589L12.96 3.666l-.002-.001a2.165 2.165 0 00-1.918 0L5.195 6.589A2.141 2.141 0 004 8.516v6.955a2.141 2.141 0 001.186 1.936l5.847 2.924a2.154 2.154 0 001.927 0l5.845-2.923A2.141 2.141 0 0020 15.481V8.515a2.14 2.14 0 00-1.193-1.926zm-.19 8.892a.767.767 0 01-.429.69l-5.847 2.923a.774.774 0 01-.69 0l-5.845-2.922a.766.766 0 01-.423-.694V8.516c0-.294.164-.558.429-.69l5.845-2.923a.771.771 0 01.685 0l5.847 2.924c.264.13.428.395.428.689v6.964z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.693 7.418a.692.692 0 00-.928-.31L12 10.492 5.235 7.108a.692.692 0 00-.619 1.237l7.075 3.538a.692.692 0 00.618 0l7.075-3.538a.691.691 0 00.31-.927z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 10.573a.691.691 0 00-.691.691v8.595a.691.691 0 101.383 0v-8.595a.692.692 0 00-.692-.691z"
  }));
}

IconBlock.propTypes = IconPropTypes;

function IconBookmark(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M16.085 4h-8.17a2.283 2.283 0 00-2.28 2.28v13.074a.646.646 0 001.021.526L12 16.063l5.344 3.817a.646.646 0 001.022-.526V6.28A2.283 2.283 0 0016.086 4zm.988 14.098l-4.697-3.356a.646.646 0 00-.752 0l-4.697 3.356V6.28c0-.544.443-.987.988-.987h8.17c.545 0 .988.443.988.987v11.818z"
  }));
}

IconBookmark.propTypes = IconPropTypes;

function IconCalendar(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v12.161c0 .33-.267.598-.597.598H4.597A.597.597 0 014 18.354V6.194zm1.193.597v10.967h13.613V6.79H5.194z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 6.193c0-.33.267-.597.597-.597h14.806c.33 0 .597.267.597.597v3.722c0 .33-.267.597-.597.597H4.597A.597.597 0 014 9.915V6.193zm1.193.597v2.527h13.613V6.79H5.194z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M7.783 4c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597zm8.499 0c.33 0 .597.267.597.597v2.527a.597.597 0 11-1.194 0V4.597c0-.33.267-.597.597-.597z",
    clipRule: "evenodd"
  }));
}

IconCalendar.propTypes = IconPropTypes;

function IconCanvas(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#clip0)"
  }, React.createElement("path", {
    d: "M17.005 5H6.995C5.895 5 5 5.895 5 6.995v10.01C5 18.105 5.895 19 6.995 19h10.01c1.1 0 1.995-.895 1.995-1.995V6.995C19 5.895 18.105 5 17.005 5zm.864 12.005a.865.865 0 01-.864.864H6.995a.865.865 0 01-.864-.864V6.995c0-.476.388-.864.864-.864h10.01c.476 0 .864.388.864.864v10.01z"
  }), React.createElement("path", {
    d: "M18.434 9.29H5.566a.566.566 0 000 1.13h12.869a.566.566 0 000-1.13z"
  }), React.createElement("path", {
    d: "M9.855 9.29a.566.566 0 00-.565.565v8.58a.566.566 0 001.13 0v-8.58a.566.566 0 00-.565-.565z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconCanvas.propTypes = IconPropTypes;

function IconCaution(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M20.807 16.488a.27.27 0 00-.006-.01L14.005 5.132l-.002-.004a2.326 2.326 0 00-1.446-1.06 2.326 2.326 0 00-1.771.272c-.32.195-.593.467-.788.788l-.002.004L3.2 16.478a2.326 2.326 0 00-.24 1.787c.162.604.55 1.109 1.09 1.422A2.347 2.347 0 005.205 20h13.6a2.344 2.344 0 002.002-3.512zm-2.015 2.039H5.21a.87.87 0 01-.741-1.298L11.26 5.891a.871.871 0 01.948-.391.862.862 0 01.535.39l6.791 11.339a.87.87 0 01-.74 1.298z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 8.898a.737.737 0 00-.736.736v3.21a.737.737 0 101.473 0v-3.21a.737.737 0 00-.736-.736zm.521 6.635a.741.741 0 00-.52-.216.742.742 0 00-.522.216.743.743 0 00-.215.52c0 .195.078.384.215.522a.742.742 0 00.521.216.742.742 0 00.521-.216.741.741 0 00.216-.521.742.742 0 00-.216-.521z"
  }));
}

IconCaution.propTypes = IconPropTypes;

function IconCenter(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 9.883A2.12 2.12 0 009.883 12 2.12 2.12 0 0012 14.117 2.12 2.12 0 0014.117 12 2.12 2.12 0 0012 9.883zm0 2.941a.825.825 0 010-1.648.825.825 0 010 1.648z"
  }));
}

IconCenter.propTypes = IconPropTypes;

function IconChart(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.354 11.354h-6.708V4.646a.646.646 0 10-1.292 0V12c0 .357.29.646.646.646h7.354a.646.646 0 100-1.292z"
  }));
}

IconChart.propTypes = IconPropTypes;

function IconChat(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.999 11.147a7.565 7.565 0 00-2.207-4.939A7.565 7.565 0 0012.817 4h-.426a7.527 7.527 0 00-3.376.804 7.586 7.586 0 00-4.198 6.786 7.534 7.534 0 00.686 3.15l-1.47 4.41a.646.646 0 00.818.817l4.408-1.47c.979.45 2.055.686 3.13.686h.02a7.586 7.586 0 006.786-4.195A7.528 7.528 0 0020 11.59v-.408l-.001-.036zm-1.292.444v.002a6.234 6.234 0 01-.667 2.814 6.265 6.265 0 01-5.633 3.483h-.016a6.23 6.23 0 01-2.796-.666.647.647 0 00-.496-.036l-3.43 1.144L6.811 14.9a.647.647 0 00-.036-.496 6.23 6.23 0 01-.666-2.813 6.262 6.262 0 013.485-5.633 6.231 6.231 0 012.813-.666h.39a6.276 6.276 0 015.91 5.908v.39z"
  }));
}

IconChat.propTypes = IconPropTypes;

function IconCheck(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.5,
    d: "M18.834 7.166a.565.565 0 00-.8 0l-8.447 8.466-3.622-3.63a.565.565 0 00-.8 0 .568.568 0 000 .802l4.022 4.03a.563.563 0 00.8 0l8.847-8.866a.568.568 0 000-.802z"
  }));
}

IconCheck.propTypes = IconPropTypes;

function IconChip(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M16.011 6.006H7.99c-1.094 0-1.984.89-1.984 1.983v8.022c0 1.094.89 1.983 1.984 1.983h8.022c1.094 0 1.983-.89 1.983-1.983V7.99c0-1.094-.89-1.983-1.983-1.983zm.69 10.005a.69.69 0 01-.69.69H7.99a.69.69 0 01-.69-.69V7.99a.69.69 0 01.69-.69h8.022a.69.69 0 01.69.69v8.022z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.006 9.348H9.994a.646.646 0 00-.646.646v4.011c0 .357.29.647.646.647h4.012c.357 0 .646-.29.646-.646V9.994a.646.646 0 00-.646-.646zm-.647 4.011h-2.718v-2.718h2.718v2.718zM9.994 4a.646.646 0 00-.646.646v2.006a.646.646 0 001.293 0V4.646A.646.646 0 009.994 4zm4.011 0a.646.646 0 00-.646.646v2.006a.646.646 0 001.293 0V4.646A.646.646 0 0014.006 4zM9.994 16.702a.646.646 0 00-.646.646v2.006a.646.646 0 101.293 0v-2.006a.646.646 0 00-.647-.646zm4.011 0a.646.646 0 00-.646.646v2.006a.646.646 0 101.293 0v-2.006a.646.646 0 00-.646-.646zm5.349-7.354h-2.006a.646.646 0 100 1.293h2.006a.646.646 0 100-1.293zm0 3.342h-2.006a.646.646 0 100 1.293h2.006a.646.646 0 100-1.292zM6.652 9.348H4.646a.646.646 0 000 1.293h2.006a.646.646 0 000-1.293zm0 3.342H4.646a.646.646 0 000 1.293h2.006a.646.646 0 000-1.292z"
  }));
}

IconChip.propTypes = IconPropTypes;

function IconCircleCheck(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.653 10.356a.646.646 0 00-.646.646v.651a6.316 6.316 0 01-1.865 4.495 6.316 6.316 0 01-4.492 1.859h-.004a6.364 6.364 0 01-6.353-6.36 6.316 6.316 0 011.864-4.495 6.316 6.316 0 014.493-1.86h.003a6.32 6.32 0 012.584.551.646.646 0 10.526-1.18A7.601 7.601 0 0011.654 4h-.004a7.6 7.6 0 00-5.406 2.237A7.6 7.6 0 004 11.646a7.6 7.6 0 002.237 5.41 7.6 7.6 0 005.408 2.244h.005a7.6 7.6 0 005.406-2.238 7.6 7.6 0 002.244-5.408v-.652a.646.646 0 00-.647-.646z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 4.894a.646.646 0 00-.913 0L11.65 12.14l-1.644-1.644a.646.646 0 10-.914.915l2.1 2.1a.644.644 0 00.915 0l7.704-7.703a.646.646 0 000-.914z"
  }));
}

IconCircleCheck.propTypes = IconPropTypes;

function IconCircleMinus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.941 11.354H9.06a.646.646 0 100 1.292h5.883a.646.646 0 100-1.292z"
  }));
}

IconCircleMinus.propTypes = IconPropTypes;

function IconCirclePlus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 8.412a.646.646 0 00-.646.647v5.883a.646.646 0 101.292 0V9.058A.646.646 0 0012 8.412z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.941 11.354H9.06a.646.646 0 100 1.292h5.883a.646.646 0 100-1.292z"
  }));
}

IconCirclePlus.propTypes = IconPropTypes;

function IconClock(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.663 13.75l-2.017-2.018V7.588a.646.646 0 10-1.292 0V12c0 .171.068.336.189.457l2.206 2.206a.644.644 0 00.914 0 .646.646 0 000-.914z"
  }));
}

IconClock.propTypes = IconPropTypes;

function IconCloudDownload(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M15.29 15.034a.68.68 0 00-.96 0l-2.327 2.327-2.327-2.328a.68.68 0 00-.96.96l2.807 2.808a.677.677 0 00.96 0l2.807-2.807a.68.68 0 000-.96z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.003 11.325a.679.679 0 00-.68.68v6.316a.679.679 0 001.359 0v-6.317a.679.679 0 00-.68-.679z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.642 10.999a4.192 4.192 0 00-3.425-1.78h-.383A6.303 6.303 0 008.326 5.2a6.3 6.3 0 00-4.532 7.66 6.322 6.322 0 001.383 2.606.68.68 0 001.017-.9 4.958 4.958 0 01-1.085-2.044 4.941 4.941 0 013.554-6.007 4.941 4.941 0 016.008 3.554c.077.3.348.51.657.51h.888c.92 0 1.785.45 2.315 1.202a2.833 2.833 0 01-.688 3.943.679.679 0 10.782 1.111A4.193 4.193 0 0019.642 11z"
  }));
}

IconCloudDownload.propTypes = IconPropTypes;

function IconCloudUpload(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M8.715 15.292a.679.679 0 00.96 0l2.328-2.327 2.327 2.327a.679.679 0 10.96-.96l-2.807-2.808a.676.676 0 00-.96 0l-2.808 2.808a.679.679 0 000 .96z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.003 19a.679.679 0 00.679-.679v-6.317a.679.679 0 00-1.358 0v6.317c0 .375.304.679.679.679z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.642 10.999a4.192 4.192 0 00-3.425-1.78h-.383A6.303 6.303 0 008.326 5.2a6.3 6.3 0 00-4.532 7.66 6.322 6.322 0 001.383 2.606.68.68 0 001.017-.9 4.958 4.958 0 01-1.085-2.044 4.941 4.941 0 013.554-6.007 4.941 4.941 0 016.008 3.554c.077.3.348.51.657.51h.888c.92 0 1.785.45 2.315 1.202a2.833 2.833 0 01-.688 3.943.679.679 0 10.782 1.111A4.193 4.193 0 0019.642 11z"
  }));
}

IconCloudUpload.propTypes = IconPropTypes;

function IconCoin(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M16.096 10.735c.074-.386.389-.626.703-.535.945.273 1.72.726 2.272 1.283.54.546.929 1.263.929 2.057 0 1.374-.966 2.429-2.1 3.096-1.186.697-2.788 1.124-4.533 1.124-1.613 0-3.1-.365-4.25-.967-1.113-.582-2.056-1.47-2.315-2.632-.086-.383.098-.778.409-.883.311-.105.633.12.718.503.113.507.624 1.155 1.645 1.69.985.515 2.313.851 3.793.851 1.605 0 3.028-.394 4.028-.983 1.053-.619 1.436-1.314 1.436-1.799 0-.199-.107-.548-.502-.946-.384-.388-.984-.76-1.798-.995-.314-.09-.509-.478-.435-.864z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.576 6.296C5.524 6.851 5.17 7.484 5.17 7.945c0 .484.381 1.177 1.43 1.795.996.587 2.413.981 4.01.981 1.599 0 3.016-.394 4.012-.981 1.048-.618 1.43-1.311 1.43-1.795 0-.461-.356-1.094-1.408-1.649-.998-.526-2.421-.859-4.033-.859-1.612 0-3.036.333-4.034.86zm-.46-1.32C7.295 4.353 8.884 4 10.61 4c1.725 0 3.314.353 4.494.976 1.127.594 2.115 1.575 2.115 2.969 0 1.371-.963 2.425-2.093 3.091-1.182.697-2.777 1.123-4.516 1.123-1.74 0-3.335-.426-4.517-1.123C4.963 10.37 4 9.316 4 7.945c0-1.394.989-2.375 2.115-2.97zm1.249 7.986c.323 0 .585.321.585.718 0 .474.377 1.161 1.427 1.775.997.583 2.415.974 4.013.974 1.6 0 3.017-.391 4.014-.974 1.05-.614 1.427-1.301 1.427-1.775 0-.397.262-.718.585-.718.322 0 .584.321.584.718v2.24c0 1.389-.974 2.406-2.105 3.036C16.714 19.614 15.122 20 13.39 20c-1.73 0-3.323-.386-4.505-1.044-1.13-.63-2.104-1.647-2.104-3.035v-2.24c0-.398.262-.72.584-.72zm.6 3.13c.079.459.475 1.038 1.403 1.555.996.555 2.417.916 4.022.916 1.606 0 3.026-.361 4.023-.916.928-.517 1.324-1.096 1.403-1.554-.278.25-.587.471-.91.66-1.182.69-2.777 1.113-4.515 1.113-1.739 0-3.334-.422-4.515-1.113a5.513 5.513 0 01-.911-.66z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M6.596 9.854c.997.583 2.415.974 4.014.974 1.598 0 3.016-.391 4.013-.974 1.05-.614 1.427-1.301 1.427-1.775h1.169v2.24c0 1.389-.974 2.406-2.104 3.036-1.182.658-2.774 1.044-4.505 1.044-1.732 0-3.324-.386-4.506-1.044C4.974 12.725 4 11.708 4 10.32V8.08h1.169c0 .473.378 1.16 1.427 1.774zm-1.412.638c.079.458.475 1.037 1.403 1.553.997.556 2.417.917 4.023.917 1.605 0 3.026-.361 4.022-.916.928-.517 1.324-1.096 1.403-1.554-.277.25-.587.471-.91.66-1.182.69-2.777 1.113-4.515 1.113-1.739 0-3.334-.422-4.515-1.113a5.513 5.513 0 01-.911-.66z",
    clipRule: "evenodd"
  }));
}

IconCoin.propTypes = IconPropTypes;

function IconConfiguration(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21 17.318a.69.69 0 01-.69.69h-1.996a.69.69 0 110-1.38h1.997c.38 0 .689.31.689.69zm-6.047 0a.69.69 0 01-.69.69H3.69a.69.69 0 010-1.38h10.575c.38 0 .69.31.69.69zm-8.859-5.245a.69.69 0 01-.69.69H3.69a.69.69 0 110-1.38h1.715a.69.69 0 01.69.69zm14.906 0a.69.69 0 01-.69.69H9.597a.69.69 0 110-1.38H20.31a.69.69 0 01.689.69zm-5.906-5.246a.69.69 0 01-.69.69H3.69a.69.69 0 010-1.38h10.715c.38 0 .69.31.69.69zm5.906 0a.69.69 0 01-.69.69h-1.996a.69.69 0 010-1.38h1.997c.38 0 .689.31.689.69z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.912 6.665a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.963a.963.963 0 100 1.926.963.963 0 000-1.926zm-2.342 11.454a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.963a.963.963 0 100 1.926.963.963 0 000-1.926zM5.123 11.91a2.342 2.342 0 114.684 0 2.342 2.342 0 01-4.684 0zm2.342-.962a.963.963 0 100 1.925.963.963 0 000-1.925z",
    clipRule: "evenodd"
  }));
}

IconConfiguration.propTypes = IconPropTypes;

function IconConnect(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"
  }));
}

IconConnect.propTypes = IconPropTypes;

function IconConnection(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M12 9.388a2.385 2.385 0 00-2.382 2.382A2.385 2.385 0 0012 14.152a2.385 2.385 0 002.382-2.382A2.385 2.385 0 0012 9.388zm0 3.31a.929.929 0 010-1.856.929.929 0 010 1.855zm4.022-4.951a.727.727 0 10-1.027 1.029 4.242 4.242 0 01.003 5.992l-.004.004a.727.727 0 001.029 1.028l.004-.004a5.698 5.698 0 00-.005-8.05zm-7.017 7.017a4.21 4.21 0 01-1.242-2.996 4.21 4.21 0 011.243-3 .727.727 0 00-1.029-1.029l-.004.004a5.698 5.698 0 00.005 8.05.725.725 0 001.028 0 .727.727 0 000-1.03z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M18.364 5.405a.727.727 0 00-1.028 1.029c2.941 2.942 2.941 7.73 0 10.672a.727.727 0 101.028 1.028A8.943 8.943 0 0021 11.77a8.943 8.943 0 00-2.636-6.365zm-11.7 1.029a.727.727 0 00-1.028-1.029A8.943 8.943 0 003 11.77a8.94 8.94 0 002.636 6.364.724.724 0 001.028 0 .727.727 0 000-1.028c-2.941-2.943-2.941-7.73 0-10.672z"
  }));
}

IconConnection.propTypes = IconPropTypes;

function IconCopy(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.1,
    d: "M6.437 20.505h8.807a1.99 1.99 0 001.988-1.988v-.352a.579.579 0 00-1.157 0v.352c0 .458-.373.83-.83.83H6.436a.832.832 0 01-.83-.83V9.006c0-.458.373-.831.83-.831h.353a.579.579 0 000-1.157h-.353A1.99 1.99 0 004.45 9.006v9.511a1.99 1.99 0 001.987 1.988z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.1,
    d: "M10.665 16.277h7.398a1.99 1.99 0 001.987-1.987V5.483a1.99 1.99 0 00-1.987-1.988h-7.398a1.99 1.99 0 00-1.988 1.988v8.807a1.99 1.99 0 001.988 1.987zm-.83-10.794a.83.83 0 01.83-.83h7.398c.457 0 .83.372.83.83v8.807c0 .458-.373.83-.83.83h-7.398a.832.832 0 01-.83-.83V5.483z"
  }));
}

IconCopy.propTypes = IconPropTypes;

function IconCross(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.5,
    d: "M17.858 6.142a.485.485 0 00-.685 0L6.142 17.172a.485.485 0 10.686.686l11.03-11.03a.485.485 0 000-.686z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.5,
    d: "M17.858 17.173l-5.515-5.516-5.516-5.515a.485.485 0 10-.685.685l11.03 11.031a.483.483 0 00.686 0 .485.485 0 000-.685z"
  }));
}

IconCross.propTypes = IconPropTypes;

function IconDashedSquare(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M9.14 5H6.995C5.895 5 5 5.895 5 6.995V9.14a.566.566 0 001.131 0V6.995c0-.476.388-.864.864-.864H9.14A.566.566 0 009.14 5zm7.865 0H14.86a.566.566 0 100 1.131h2.145c.476 0 .864.388.864.864V9.14a.565.565 0 101.131 0V6.995C19 5.895 18.105 5 17.005 5zm1.43 9.294a.565.565 0 00-.566.566v2.145a.865.865 0 01-.864.864H14.86a.565.565 0 100 1.13h2.145c1.1 0 1.995-.894 1.995-1.994V14.86a.566.566 0 00-.565-.566zM9.14 17.869H6.995a.865.865 0 01-.864-.864V14.86a.566.566 0 10-1.131 0v2.145C5 18.105 5.895 19 6.995 19H9.14a.566.566 0 000-1.131z"
  }));
}

IconDashedSquare.propTypes = IconPropTypes;

function IconDown(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.785 8.782a.725.725 0 00-1.038 0L12 14.632l-5.746-5.85a.725.725 0 00-1.039 0 .757.757 0 000 1.057l6.266 6.38a.726.726 0 001.038 0l6.266-6.38a.757.757 0 000-1.057z"
  }));
}

IconDown.propTypes = IconPropTypes;

function IconDownload(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.399 11.543a.646.646 0 00-.914 0L12 14.027l-2.484-2.484a.646.646 0 00-.914.914l2.941 2.941a.646.646 0 00.914 0l2.941-2.941a.646.646 0 000-.914z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 4a.646.646 0 00-.646.646v10.296a.646.646 0 001.292 0V4.646A.646.646 0 0012 4z"
  }));
}

IconDownload.propTypes = IconPropTypes;

function IconEdit(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.883 13.31a.646.646 0 00-.646.646v3.927c0 .455-.37.825-.825.825H6.117a.825.825 0 01-.824-.825V7.588c0-.455.37-.825.824-.825h3.927a.646.646 0 100-1.292H6.117A2.12 2.12 0 004 7.588v10.295A2.12 2.12 0 006.117 20h10.295a2.12 2.12 0 002.117-2.117v-3.927a.646.646 0 00-.646-.646z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 7.13l-2.94-2.94a.646.646 0 00-.915 0l-7.354 7.353a.646.646 0 00-.189.457v2.942c0 .357.29.646.646.646H12a.646.646 0 00.457-.19l7.354-7.353a.646.646 0 000-.914zm-8.078 7.165H9.705v-2.027l6.707-6.708 2.028 2.028-6.708 6.707z"
  }));
}

IconEdit.propTypes = IconPropTypes;

function IconEllipsis(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("circle", {
    cx: 6,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }), React.createElement("circle", {
    cx: 18,
    cy: 12,
    r: 1,
    fill: "currentColor"
  }));
}

IconEllipsis.propTypes = IconPropTypes;

function IconEthereum(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 3a.59.59 0 01.502.248l5.402 7.785a.53.53 0 01.08.432.556.556 0 01-.277.351l-5.402 2.931a.606.606 0 01-.305.073.606.606 0 01-.306-.073l-5.401-2.93a.556.556 0 01-.277-.352.53.53 0 01.08-.432l5.402-7.785A.59.59 0 0112 3zm-.598 2.394l-3.335 4.805 3.335-1.225v-3.58zm0 4.764L7.93 11.433l3.47 1.883v-3.158zm1.197 3.158l3.47-1.883-3.47-1.275v3.158zm0-4.342l3.334 1.225-3.335-4.805v3.58zm-6.445 3.89a.604.604 0 01.728-.098L12 15.702l5.118-2.936a.604.604 0 01.728.098.531.531 0 01.045.697l-5.32 7.056a.568.568 0 01-.376.357A.609.609 0 0112 21a.61.61 0 01-.195-.026.567.567 0 01-.376-.357L6.11 13.56a.531.531 0 01.045-.697zm6.444 5.82l2.704-3.586-2.704 1.55v2.035zm-1.197-2.036v2.035l-2.703-3.585 2.704 1.55z",
    clipRule: "evenodd"
  }));
}

IconEthereum.propTypes = IconPropTypes;

function IconExternal(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M16.902 12.17a.646.646 0 00-.646.647v4.903a.989.989 0 01-.988.987H6.28a.989.989 0 01-.987-.987V8.732c0-.545.443-.988.987-.988h4.903a.646.646 0 100-1.293H6.28A2.283 2.283 0 004 8.731v8.989A2.283 2.283 0 006.28 20h8.988a2.283 2.283 0 002.28-2.28v-4.903a.646.646 0 00-.645-.646zM19.354 4H14.45a.646.646 0 100 1.293h4.256v4.256a.646.646 0 001.293 0V4.646A.646.646 0 0019.354 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 4.19a.646.646 0 00-.913 0l-8.988 8.988a.646.646 0 00.914.914l8.988-8.988a.646.646 0 000-.914z"
  }));
}

IconExternal.propTypes = IconPropTypes;

function IconFile(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.34 9.337l-5.148-5.148A.646.646 0 0012.735 4H7.588A2.12 2.12 0 005.47 6.117v11.766A2.12 2.12 0 007.588 20h8.824a2.12 2.12 0 002.117-2.117v-8.09a.646.646 0 00-.19-.456zm-1.103 8.546c0 .454-.37.824-.825.824H7.588a.825.825 0 01-.825-.824V6.117c0-.455.37-.824.825-.824h4.88l4.768 4.769v7.82z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M17.883 9.148h-4.501V4.646a.646.646 0 00-1.293 0v5.148c0 .357.29.646.646.646h5.148a.646.646 0 100-1.292z"
  }));
}

IconFile.propTypes = IconPropTypes;

function IconFilter(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.94 5.36a.648.648 0 00-.586-.36H4.646c-.251 0-.48.14-.586.36-.106.22-.07.48.093.665l5.73 6.529v4.406a.62.62 0 00.357.557l2.942 1.417a.667.667 0 00.629-.027.618.618 0 00.306-.53v-5.823l5.73-6.53a.605.605 0 00.093-.663zm-6.963 6.564a.61.61 0 00-.153.402v5.044l-1.648-.795v-4.249a.61.61 0 00-.153-.402L6.039 6.246h11.922l-4.984 5.678z"
  }));
}

IconFilter.propTypes = IconPropTypes;

function IconFlag(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.572 4.88a.67.67 0 00-.755.157c-.006.006-.707.613-2.663.613-1.05 0-1.947-.376-2.897-.773C11.227 4.446 10.162 4 8.847 4c-2.578 0-3.543.931-3.644 1.037A.743.743 0 005 5.55v9.9c0 .301.164.588.433.694a.645.645 0 00.743-.173c.082-.068.808-.621 2.67-.621 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 2.578 0 3.543-.931 3.644-1.037A.742.742 0 0019 15.45v-9.9a.726.726 0 00-.428-.67zm-.958 10.186c-.337.185-1.091.484-2.46.484-1.05 0-1.947-.376-2.897-.773-1.03-.431-2.095-.877-3.41-.877-1.09 0-1.891.166-2.461.366V5.934c.337-.185 1.091-.484 2.46-.484 1.05 0 1.947.376 2.897.773 1.03.431 2.095.877 3.41.877 1.09 0 1.891-.166 2.461-.366v8.332z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M5.693 14.095a.693.693 0 00-.693.693v5.519a.693.693 0 101.386 0v-5.519a.693.693 0 00-.693-.693z"
  }));
}

IconFlag.propTypes = IconPropTypes;

function IconFolder(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.883 6.941H11.61l-1.28-1.918a.646.646 0 00-.537-.288H6.117A2.12 2.12 0 004 6.852v10.296a2.12 2.12 0 002.117 2.117h11.766A2.12 2.12 0 0020 17.148v-8.09a2.12 2.12 0 00-2.117-2.117zm.824 10.207c0 .454-.37.824-.824.824H6.117a.825.825 0 01-.824-.824V6.852c0-.454.37-.824.824-.824h3.331l1.279 1.918c.12.18.322.288.538.288h6.618c.454 0 .824.37.824.825v8.089z"
  }));
}

IconFolder.propTypes = IconPropTypes;

function IconGraph2(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.377 5H16.96c-.734 0-1.331.597-1.331 1.331V17.67c0 .734.597 1.331 1.331 1.331h1.417c.734 0 1.332-.597 1.332-1.331V6.33c0-.734-.598-1.331-1.332-1.331zm.086 12.669a.086.086 0 01-.086.085H16.96a.086.086 0 01-.086-.085V6.33c0-.047.039-.085.086-.085h1.417c.048 0 .086.038.086.085v11.34zm-5.754-9.126h-1.417c-.735 0-1.332.597-1.332 1.331v7.795c0 .734.597 1.331 1.332 1.331h1.417c.734 0 1.331-.597 1.331-1.331V9.874c0-.734-.597-1.331-1.331-1.331zm.086 9.126a.086.086 0 01-.086.085h-1.417a.086.086 0 01-.086-.085V9.874c0-.047.038-.086.086-.086h1.417c.047 0 .086.039.086.086v7.795zM7.04 12.086H5.623c-.734 0-1.332.597-1.332 1.331v4.252c0 .734.598 1.331 1.332 1.331H7.04c.734 0 1.331-.597 1.331-1.331v-4.252c0-.734-.597-1.331-1.331-1.331zm.086 5.583a.086.086 0 01-.086.085H5.623a.086.086 0 01-.086-.085v-4.252c0-.047.038-.086.086-.086H7.04c.047 0 .086.039.086.086v4.252z"
  }));
}

IconGraph2.propTypes = IconPropTypes;

function IconGraph(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M12.736 4.735h-1.471c-.762 0-1.382.62-1.382 1.382v11.766c0 .762.62 1.382 1.382 1.382h1.47c.763 0 1.382-.62 1.382-1.382V6.117c0-.762-.62-1.382-1.381-1.382zm.089 13.148a.09.09 0 01-.09.089h-1.47a.09.09 0 01-.09-.09V6.118a.09.09 0 01.09-.089h1.47c.05 0 .09.04.09.09v11.765zm5.793-9.471h-1.47c-.762 0-1.382.62-1.382 1.382v8.089c0 .762.62 1.382 1.382 1.382h1.47c.762 0 1.382-.62 1.382-1.382v-8.09c0-.76-.62-1.38-1.382-1.38zm.09 9.47c0 .05-.04.09-.09.09h-1.47a.09.09 0 01-.09-.09V9.795c0-.05.04-.09.09-.09h1.47a.09.09 0 01.09.09v8.089zM6.853 12.089H5.382c-.762 0-1.382.62-1.382 1.382v4.412c0 .762.62 1.382 1.382 1.382h1.47c.762 0 1.382-.62 1.382-1.382V13.47c0-.762-.62-1.382-1.381-1.382zm.089 5.794a.09.09 0 01-.09.089h-1.47a.09.09 0 01-.09-.09v-4.411c0-.05.04-.09.09-.09h1.47c.05 0 .09.04.09.09v4.412z"
  }));
}

IconGraph.propTypes = IconPropTypes;

function IconGrid(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M9.549 4H5.463C4.657 4 4 4.657 4 5.463V9.55c0 .807.657 1.463 1.463 1.463H9.55c.807 0 1.463-.656 1.463-1.463V5.463A1.466 1.466 0 009.55 4zm.17 5.549a.17.17 0 01-.17.17H5.463a.171.171 0 01-.17-.17V5.463a.17.17 0 01.17-.17H9.55a.17.17 0 01.17.17V9.55zM18.537 4H14.45c-.807 0-1.463.657-1.463 1.463V9.55c0 .807.656 1.463 1.463 1.463h4.086c.807 0 1.463-.656 1.463-1.463V5.463A1.463 1.463 0 0018.537 4zm.17 5.549a.17.17 0 01-.17.17H14.45a.171.171 0 01-.17-.17V5.463a.17.17 0 01.17-.17h4.086a.17.17 0 01.17.17V9.55zm-.17 3.439H14.45c-.807 0-1.463.656-1.463 1.463v4.086c0 .807.656 1.463 1.463 1.463h4.086c.807 0 1.463-.657 1.463-1.463V14.45c0-.807-.656-1.463-1.463-1.463zm.17 5.549a.17.17 0 01-.17.17H14.45a.17.17 0 01-.17-.17V14.45a.17.17 0 01.17-.17h4.086a.17.17 0 01.17.17v4.086zm-9.158-5.549H5.463c-.806 0-1.463.656-1.463 1.463v4.086C4 19.343 4.657 20 5.463 20H9.55c.807 0 1.463-.657 1.463-1.463V14.45c0-.807-.656-1.463-1.463-1.463zm.17 5.549a.17.17 0 01-.17.17H5.463a.17.17 0 01-.17-.17V14.45a.17.17 0 01.17-.17H9.55a.17.17 0 01.17.17v4.086z"
  }));
}

IconGrid.propTypes = IconPropTypes;

function IconGroup(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.68 18.35h11.76c-.125-1.148-.582-1.865-1.121-2.313-.657-.546-1.518-.762-2.286-.762H6.068c-1.476 0-2.304.616-2.785 1.348-.358.544-.538 1.18-.603 1.727zm-.483-2.442c.717-1.091 1.951-1.933 3.871-1.933h4.966c.982 0 2.166.271 3.117 1.063.974.81 1.624 2.098 1.624 3.962a.65.65 0 01-.65.65H2.003a.65.65 0 01-.65-.623c-.033-.828.152-2.066.844-3.119zM5.49 9.664a3.11 3.11 0 116.223 0 3.11 3.11 0 01-6.222 0zm3.112-1.81a1.81 1.81 0 100 3.621 1.81 1.81 0 000-3.622zm4.415 3.568a.65.65 0 01.65-.65h3.409c.981 0 2.166.271 3.117 1.062.973.81 1.624 2.099 1.624 3.963a.65.65 0 01-.65.65h-4.493a.65.65 0 110-1.3h3.809c-.125-1.148-.582-1.865-1.121-2.313-.657-.546-1.518-.762-2.286-.762h-3.41a.65.65 0 01-.65-.65zM11.662 6.46a3.11 3.11 0 116.222.001 3.11 3.11 0 01-6.222 0zm3.111-1.81a1.811 1.811 0 100 3.622 1.811 1.811 0 000-3.622z",
    clipRule: "evenodd"
  }));
}

IconGroup.propTypes = IconPropTypes;

function IconHash(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.537 8.902H5.463a.646.646 0 000 1.293h13.074a.646.646 0 000-1.293zm0 4.903H5.463a.646.646 0 100 1.293h13.074a.646.646 0 000-1.293z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M10.437 4.004a.646.646 0 00-.714.571L8.09 19.283a.646.646 0 101.285.142l1.634-14.707a.646.646 0 00-.57-.714zm4.903 0a.646.646 0 00-.714.571l-1.634 14.707a.646.646 0 001.285.143L15.91 4.718a.646.646 0 00-.571-.714z"
  }));
}

IconHash.propTypes = IconPropTypes;

function IconHeart(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.681 6.314l-.002-.002a4.55 4.55 0 00-6.388-.002v.001h-.001l-.29.287-.288-.286A4.508 4.508 0 008.518 5a4.508 4.508 0 00-3.195 1.312A4.43 4.43 0 004 9.479c0 1.196.47 2.32 1.323 3.166l6.22 6.167a.65.65 0 00.915 0l6.22-6.166a4.456 4.456 0 00.003-6.332zm-.916 5.425L12 17.453l-5.764-5.714a3.162 3.162 0 01-.944-2.26c0-.854.335-1.657.944-2.261a3.23 3.23 0 012.28-.935 3.23 3.23 0 012.28.935l.747.74a.65.65 0 00.914 0l.746-.74.001-.001a3.247 3.247 0 014.558 0l.003.002a3.18 3.18 0 01-.001 4.52z"
  }));
}

IconHeart.propTypes = IconPropTypes;

function IconHide(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.046 16.027a.727.727 0 00-1.02-.138 6.8 6.8 0 01-4.032 1.4c-1.962-.001-3.828-.927-5.548-2.75a14.135 14.135 0 01-1.888-2.537A13.052 13.052 0 017.974 8.11a.727.727 0 00-.883-1.155 14.506 14.506 0 00-4.005 4.701.727.727 0 00-.01.67c.033.064.817 1.616 2.283 3.18.87.929 1.805 1.671 2.776 2.207 1.24.684 2.54 1.031 3.865 1.031h.012a8.245 8.245 0 004.896-1.698c.32-.244.381-.7.138-1.02zm3.878-4.352c-.033-.065-.817-1.617-2.283-3.18-.87-.93-1.805-1.672-2.776-2.208-1.24-.684-2.54-1.03-3.863-1.03a7.59 7.59 0 00-1.747.199.727.727 0 10.331 1.416A6.198 6.198 0 0112 6.71c1.964 0 3.833.926 5.555 2.752a14.126 14.126 0 011.888 2.537c-.391.682-.845 1.33-1.35 1.932a.727.727 0 101.112.936 14.667 14.667 0 001.71-2.524.727.727 0 00.009-.668z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.09 13.063a.727.727 0 00-1.027.036 1.52 1.52 0 01-1.065.486 1.53 1.53 0 01-1.096-2.647.727.727 0 10-.992-1.064 2.987 2.987 0 000 4.365 2.963 2.963 0 002.139.799 2.964 2.964 0 002.078-.948.727.727 0 00-.037-1.027z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M20.788 19.76L4.24 3.212A.727.727 0 103.212 4.24l16.546 16.547a.725.725 0 001.029 0 .727.727 0 000-1.029z"
  }));
}

IconHide.propTypes = IconPropTypes;

function IconHome(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.4,
    d: "M3.191 10.338l8.533-6.248a.468.468 0 01.552 0l8.533 6.248a.468.468 0 11-.553.754L12 5.047l-8.256 6.045a.465.465 0 01-.654-.1.468.468 0 01.101-.655z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.4,
    d: "M5.452 11.198c.259 0 .468.21.468.468v7.444h3.741v-4.063c0-1.29 1.05-2.34 2.339-2.34 1.29 0 2.339 1.05 2.339 2.34v4.063h3.741v-7.444a.468.468 0 01.935 0v7.912a.468.468 0 01-.467.468H13.87a.467.467 0 01-.468-.468v-4.531c0-.774-.63-1.404-1.403-1.404-.774 0-1.403.63-1.403 1.403v4.532c0 .013 0 .025-.002.036a.467.467 0 01-.466.431H5.452a.468.468 0 01-.467-.467v-7.912c0-.259.209-.468.467-.468z"
  }));
}

IconHome.propTypes = IconPropTypes;

function IconImage(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.005 5H6.995C5.895 5 5 5.895 5 6.995v10.01C5 18.105 5.895 19 6.995 19h10.01c1.1 0 1.995-.895 1.995-1.995V6.995C19 5.895 18.105 5 17.005 5zm.864 12.005a.865.865 0 01-.864.864H6.995a.865.865 0 01-.864-.864V6.995c0-.476.388-.864.864-.864h10.01c.476 0 .864.388.864.864v10.01z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M18.834 13.745L15.26 10.17a.566.566 0 00-.8 0l-7.864 7.865a.566.566 0 00.8.8l7.464-7.465 3.175 3.175a.566.566 0 00.8-.8zM9.498 7.86A1.64 1.64 0 007.86 9.498a1.64 1.64 0 001.638 1.638 1.64 1.64 0 001.638-1.638A1.64 1.64 0 009.498 7.86zm0 2.145a.507.507 0 110-1.015.507.507 0 010 1.015z"
  }));
}

IconImage.propTypes = IconPropTypes;

function IconInfo(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 11.354a.646.646 0 00-.646.646v2.941a.646.646 0 101.292 0v-2.94a.646.646 0 00-.646-.647zm.457-2.752a.65.65 0 00-.457-.19.651.651 0 00-.457.19.651.651 0 00-.19.457.651.651 0 00.646.646.65.65 0 00.458-.19.65.65 0 00.19-.456.651.651 0 00-.19-.457z"
  }));
}

IconInfo.propTypes = IconPropTypes;

function IconLabel(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M20.835 10.825c.487.664.487 1.69 0 2.35l-3.08 4.202a2.6 2.6 0 01-.921.754 2.623 2.623 0 01-1.153.299H4.446A1.649 1.649 0 012.8 16.784V7.216c0-.907.739-1.646 1.646-1.646h11.235c.38 0 .787.115 1.15.3.364.184.698.445.923.752l3.08 4.203zm-4.203-3.378l3.078 4.199c.057.08.095.21.095.355a.623.623 0 01-.097.355l-3.081 4.202v.001a1.223 1.223 0 01-.427.33 1.257 1.257 0 01-.522.148H4.446a.252.252 0 01-.25-.25v-9.57c0-.137.114-.25.25-.25h11.235c.14 0 .332.053.52.149.189.095.346.218.43.33z",
    clipRule: "evenodd"
  }));
}

IconLabel.propTypes = IconPropTypes;

function IconLayers(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.643 7.745l-7.354-3.677a.646.646 0 00-.578 0L4.357 7.745a.646.646 0 000 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 000-1.156zM12 11.277L6.09 8.323 12 5.37l5.908 2.954L12 11.277zm7.932 4.111a.646.646 0 00-.868-.29L12 18.632 4.935 15.1a.646.646 0 00-.578 1.156l7.354 3.677a.646.646 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.932 11.71a.646.646 0 00-.868-.288L12 14.954l-7.065-3.532a.646.646 0 10-.578 1.156l7.354 3.677a.647.647 0 00.578 0l7.354-3.677a.646.646 0 00.289-.867z"
  }));
}

IconLayers.propTypes = IconPropTypes;

function IconLeft(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M15.777 18.392a.737.737 0 000-1.054L9.834 11.5l5.943-5.838a.737.737 0 000-1.055.77.77 0 00-1.074 0l-6.48 6.365a.737.737 0 000 1.055l6.48 6.365a.77.77 0 001.074 0z"
  }));
}

IconLeft.propTypes = IconPropTypes;

function IconLink(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.882 5.163a3.564 3.564 0 00-5.084 0l-2.542 2.578a.566.566 0 000 .793.547.547 0 00.782 0l2.542-2.578a2.454 2.454 0 011.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 01-3.52 0 .547.547 0 00-.782 0 .566.566 0 000 .793 3.563 3.563 0 005.084 0l3.324-3.371a3.645 3.645 0 001.05-2.578 3.65 3.65 0 00-1.05-2.578z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.73 5.094a3.66 3.66 0 015.22 0 3.744 3.744 0 011.077 2.647 3.743 3.743 0 01-1.077 2.647l-3.324 3.37a3.654 3.654 0 01-2.61 1.095c-.945 0-1.89-.365-2.61-1.094a.665.665 0 010-.931.643.643 0 01.918 0c.933.945 2.45.945 3.384 0l3.323-3.372c.45-.455.698-1.064.698-1.715 0-.65-.248-1.26-.698-1.715a2.358 2.358 0 00-1.691-.707c-.642 0-1.242.25-1.692.706l-2.542 2.578a.643.643 0 01-.918 0 .665.665 0 010-.931l2.542-2.578zm.85.862a2.454 2.454 0 011.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 01-3.52 0 .548.548 0 00-.782 0 .566.566 0 000 .793 3.563 3.563 0 005.084 0l3.324-3.371a3.645 3.645 0 001.05-2.578 3.65 3.65 0 00-1.05-2.578 3.564 3.564 0 00-5.084 0l-2.542 2.578a.566.566 0 000 .793.547.547 0 00.782 0l2.542-2.578z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.95 10.388a3.743 3.743 0 001.077-2.647 3.744 3.744 0 00-1.077-2.647 3.66 3.66 0 00-5.22 0l-2.542 2.578a.665.665 0 000 .93.643.643 0 00.918 0l2.542-2.577a2.359 2.359 0 011.692-.706c.642 0 1.242.25 1.691.707.45.455.698 1.064.698 1.715 0 .65-.248 1.26-.698 1.715l-3.323 3.372s0 0 0 0a2.373 2.373 0 01-3.384 0 .643.643 0 00-.918 0 .665.665 0 000 .93 3.654 3.654 0 002.61 1.095c.945 0 1.89-.365 2.61-1.094l3.324-3.371zm0 0s0 0 0 0zm-4.37-4.432a2.454 2.454 0 011.76-.735c.667 0 1.292.261 1.76.736.467.474.725 1.107.725 1.784 0 .676-.258 1.31-.726 1.784l-3.323 3.372a2.47 2.47 0 01-3.52 0 .548.548 0 00-.782 0 .566.566 0 000 .793 3.563 3.563 0 005.084 0l3.324-3.371a3.645 3.645 0 001.05-2.578 3.65 3.65 0 00-1.05-2.578 3.564 3.564 0 00-5.084 0l-2.542 2.578a.566.566 0 000 .793.547.547 0 00.782 0l2.542-2.578z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M11.626 15.864l-2.151 2.181a2.453 2.453 0 01-1.76.736 2.454 2.454 0 01-1.76-.736 2.552 2.552 0 010-3.569l3.129-3.173a2.454 2.454 0 011.76-.735c.667 0 1.291.261 1.759.735a.548.548 0 00.782 0 .566.566 0 000-.793 3.564 3.564 0 00-5.084 0l-3.128 3.173a3.646 3.646 0 00-1.05 2.578c0 .976.373 1.891 1.05 2.577a3.544 3.544 0 002.542 1.064c.962 0 1.865-.378 2.541-1.064l2.151-2.18a.566.566 0 000-.794.547.547 0 00-.781 0z"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M8.233 10.441h0a3.66 3.66 0 015.22 0 .665.665 0 010 .931.643.643 0 01-.918 0 2.359 2.359 0 00-1.691-.706c-.643 0-1.243.251-1.692.706 0 0 0 0 0 0l-3.129 3.173a2.453 2.453 0 000 3.431c.45.456 1.05.707 1.692.707.642 0 1.242-.251 1.692-.707l2.15-2.18a.642.642 0 01.918 0 .665.665 0 010 .93l-2.15 2.181s0 0 0 0A3.64 3.64 0 017.714 20a3.64 3.64 0 01-2.61-1.093 3.743 3.743 0 01-1.078-2.646c0-1.002.383-1.942 1.078-2.647 0 0 0 0 0 0l3.128-3.173zm-3.06 3.242L8.3 10.51a3.564 3.564 0 015.084 0 .566.566 0 010 .793.547.547 0 01-.782 0 2.454 2.454 0 00-1.76-.735c-.667 0-1.292.261-1.76.735l-3.128 3.173a2.552 2.552 0 000 3.57 2.454 2.454 0 001.76.735c.667 0 1.292-.262 1.76-.736l2.15-2.18a.547.547 0 01.782 0 .566.566 0 010 .792l-2.15 2.181a3.544 3.544 0 01-2.542 1.064 3.544 3.544 0 01-2.542-1.064 3.645 3.645 0 01-1.05-2.577c0-.976.373-1.892 1.05-2.578z",
    clipRule: "evenodd"
  }));
}

IconLink.propTypes = IconPropTypes;

function IconLocation(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M16.711 5.952A6.62 6.62 0 0012 4a6.62 6.62 0 00-4.711 1.952 6.62 6.62 0 00-1.952 4.711c0 1.177.343 2.402 1.019 3.642.526.963 1.255 1.94 2.166 2.903a20.25 20.25 0 003.12 2.683.645.645 0 00.716 0 20.261 20.261 0 003.12-2.683c.911-.963 1.64-1.94 2.166-2.903.676-1.24 1.019-2.465 1.019-3.642a6.62 6.62 0 00-1.952-4.711zM12 18.559c-1.255-.93-5.37-4.255-5.37-7.896A5.376 5.376 0 0112 5.293a5.376 5.376 0 015.37 5.37c0 3.642-4.115 6.967-5.37 7.896z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 8.011a2.655 2.655 0 00-2.652 2.652A2.655 2.655 0 0012 13.315a2.655 2.655 0 002.652-2.652A2.655 2.655 0 0012 8.01zm0 4.011a1.36 1.36 0 010-2.718c.75 0 1.36.61 1.36 1.359 0 .75-.61 1.36-1.36 1.36z"
  }));
}

IconLocation.propTypes = IconPropTypes;

function IconLock(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.669 10.48H6.332A2.334 2.334 0 004 12.812v5.668a2.334 2.334 0 002.332 2.332h11.337A2.334 2.334 0 0020 18.48v-5.668a2.334 2.334 0 00-2.331-2.332zm.907 8c0 .5-.407.908-.907.908H6.332a.909.909 0 01-.908-.908v-5.668c0-.5.407-.908.908-.908h11.337c.5 0 .907.407.907.908v5.668z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 3a4.328 4.328 0 00-4.323 4.323v2.942a.646.646 0 001.293 0V7.323c0-1.67 1.359-3.03 3.03-3.03 1.671 0 3.03 1.36 3.03 3.03v2.942a.646.646 0 101.293 0V7.323A4.328 4.328 0 0012 3z"
  }));
}

IconLock.propTypes = IconPropTypes;

function IconMail(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.406 6H6.594a1.948 1.948 0 00-1.945 1.945v8.11c0 1.072.872 1.945 1.945 1.945h10.812a1.948 1.948 0 001.946-1.945v-8.11A1.948 1.948 0 0017.406 6zm.758 10.055c0 .417-.34.757-.758.757H6.594a.758.758 0 01-.758-.757v-8.11c0-.417.34-.757.758-.757h10.812c.418 0 .758.34.758.757v8.11z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.245 7.605a.594.594 0 00-.827-.146L12 11.95 5.584 7.459a.594.594 0 10-.681.973l6.757 4.73a.593.593 0 00.681 0l6.758-4.73a.594.594 0 00.146-.827z"
  }));
}

IconMail.propTypes = IconPropTypes;

function IconMaximize(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.434 5h-4.29a.566.566 0 000 1.131h3.725v3.724a.566.566 0 001.13 0v-4.29A.566.566 0 0018.435 5zM9.855 17.869H6.131v-3.724a.566.566 0 00-1.131 0v4.29c0 .312.253.565.565.565h4.29a.565.565 0 100-1.131z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.834 5.166a.566.566 0 00-.8 0L13.03 10.17a.566.566 0 00.8.8l5.004-5.004a.566.566 0 000-.8zM10.97 13.03a.565.565 0 00-.8 0l-5.004 5.005a.566.566 0 00.8.8l5.004-5.005a.565.565 0 000-.8z"
  }));
}

IconMaximize.propTypes = IconPropTypes;

function IconMenu(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M19.354 11.301H4.646c-.357 0-.646.313-.646.699 0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699zm0-5.301H4.646C4.29 6 4 6.313 4 6.699c0 .386.29.699.646.699h14.708c.357 0 .646-.313.646-.7 0-.385-.29-.698-.646-.698zm0 10.602H4.646c-.357 0-.646.313-.646.7 0 .385.29.698.646.698h14.708c.357 0 .646-.313.646-.699 0-.386-.29-.699-.646-.699z"
  }));
}

IconMenu.propTypes = IconPropTypes;

function IconMinimize(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M10.57 12.864H6.28a.566.566 0 100 1.132h3.725v3.724a.565.565 0 101.13 0v-4.29a.566.566 0 00-.565-.566zm7.15-2.859h-3.725V6.28a.566.566 0 10-1.13 0v4.29c0 .313.252.566.565.566h4.29a.566.566 0 100-1.131z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.834 5.166a.566.566 0 00-.8 0L13.03 10.17a.565.565 0 10.8.8l5.004-5.005a.566.566 0 000-.8zM10.97 13.03a.566.566 0 00-.8 0l-5.004 5.005a.566.566 0 10.8.8l5.004-5.005a.566.566 0 000-.8z"
  }));
}

IconMinimize.propTypes = IconPropTypes;

function IconMinus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.3,
    d: "M18.434 11.354H5.566c-.313 0-.566.29-.566.646 0 .357.253.646.566.646h12.869c.312 0 .565-.289.565-.646 0-.357-.253-.646-.566-.646z"
  }));
}

IconMinus.propTypes = IconPropTypes;

function IconMove(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M7.31 13.75L5.56 12l1.75-1.75a.646.646 0 10-.914-.913l-2.207 2.206a.646.646 0 000 .914l2.207 2.206a.644.644 0 00.914 0 .646.646 0 000-.914zm7.353-7.355L12.457 4.19a.646.646 0 00-.914 0L9.337 6.395a.646.646 0 10.914.914l1.75-1.749 1.748 1.75a.644.644 0 00.914 0 .646.646 0 000-.915zm0 10.295a.646.646 0 00-.914 0L12 18.44l-1.749-1.75a.646.646 0 10-.914.915l2.206 2.206a.645.645 0 00.914 0l2.206-2.206a.646.646 0 000-.914zm5.147-5.147l-2.205-2.206a.646.646 0 10-.914.914L18.44 12l-1.75 1.75a.646.646 0 00.915.913l2.206-2.206a.646.646 0 000-.914z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.354 11.354H4.646a.646.646 0 000 1.292h14.708a.646.646 0 100-1.292z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 4a.646.646 0 00-.646.646v14.708a.646.646 0 101.292 0V4.646A.646.646 0 0012 4z"
  }));
}

IconMove.propTypes = IconPropTypes;

function IconNoPicture(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 18.897L5.105 4.189a.646.646 0 10-.914.914l14.707 14.708a.644.644 0 00.914 0 .646.646 0 000-.914z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M18.017 17.37H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.381.31-.69.69-.69H7.99a.646.646 0 000-1.293H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034a.646.646 0 100-1.293zm0-10.027h-2.329l-1.145-1.718a.646.646 0 00-.537-.288H9.994a.646.646 0 000 1.293h3.666l1.145 1.717c.12.18.321.288.537.288h2.675c.38 0 .69.31.69.69v6.245a.646.646 0 101.293 0V9.326c0-1.094-.89-1.983-1.983-1.983z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.558 13.66a.646.646 0 00-.899.168 2.03 2.03 0 01-2.818.528 2.03 2.03 0 010-3.347.646.646 0 00-.73-1.067 3.324 3.324 0 000 5.48 3.32 3.32 0 004.615-.865.646.646 0 00-.168-.898z"
  }));
}

IconNoPicture.propTypes = IconPropTypes;

function IconPicture(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.017 7.343h-2.329l-1.145-1.718a.646.646 0 00-.537-.288H9.994a.646.646 0 00-.537.288L8.312 7.343H5.983C4.89 7.343 4 8.233 4 9.326v7.354c0 1.093.89 1.983 1.983 1.983h12.034c1.093 0 1.983-.89 1.983-1.983V9.326c0-1.094-.89-1.983-1.983-1.983zm.69 9.337c0 .38-.31.69-.69.69H5.983c-.38 0-.69-.31-.69-.69V9.326c0-.38.31-.69.69-.69h2.674a.646.646 0 00.538-.289L10.34 6.63h3.32l1.145 1.717c.12.18.321.288.538.288h2.674c.38 0 .69.31.69.69v7.355z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 9.348a3.324 3.324 0 00-3.32 3.32 3.323 3.323 0 003.32 3.32c1.83 0 3.32-1.489 3.32-3.32 0-1.83-1.49-3.32-3.32-3.32zm0 5.348a2.03 2.03 0 01-2.028-2.027A2.03 2.03 0 0112 10.64a2.03 2.03 0 012.028 2.027A2.03 2.03 0 0112 14.697z"
  }));
}

IconPicture.propTypes = IconPropTypes;

function IconPlus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.3,
    d: "M12 5a.566.566 0 00-.566.566v12.869a.566.566 0 001.132 0V5.565A.566.566 0 0012 5z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.3,
    d: "M18.434 11.434H5.566a.566.566 0 000 1.132h12.869a.565.565 0 100-1.132z"
  }));
}

IconPlus.propTypes = IconPropTypes;

function IconPower(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.658 7.155a.712.712 0 00-1.007 1.007 6.533 6.533 0 011.925 4.65 6.533 6.533 0 01-1.927 4.65A6.555 6.555 0 0112 19.384a6.557 6.557 0 01-4.65-1.924 6.584 6.584 0 010-9.298.712.712 0 10-1.008-1.007A7.948 7.948 0 004 12.811a7.95 7.95 0 002.342 5.656A7.948 7.948 0 0012 20.81a7.948 7.948 0 005.656-2.342A7.947 7.947 0 0020 12.812a7.948 7.948 0 00-2.342-5.657z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.004 3.189a.712.712 0 00-.712.712v8.098a.712.712 0 001.424 0V3.9a.712.712 0 00-.712-.712z"
  }));
}

IconPower.propTypes = IconPropTypes;

function IconPrint(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M16.412 4H7.588a.646.646 0 00-.646.646v5.148a.646.646 0 001.292 0V5.293h7.532v4.5a.646.646 0 101.293 0V4.647A.646.646 0 0016.412 4z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M17.883 9.148H6.117A2.12 2.12 0 004 11.265v3.676a2.12 2.12 0 002.117 2.117h1.47a.646.646 0 100-1.292h-1.47a.825.825 0 01-.824-.825v-3.676c0-.455.37-.825.824-.825h11.766c.454 0 .824.37.824.825v3.676c0 .455-.37.825-.824.825h-1.47a.646.646 0 100 1.292h1.47A2.12 2.12 0 0020 14.941v-3.676a2.12 2.12 0 00-2.117-2.117z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M16.412 12.824H7.588a.646.646 0 00-.646.647v5.883c0 .357.289.646.646.646h8.824c.357 0 .647-.29.647-.646V13.47a.646.646 0 00-.647-.647zm-.646 5.883H8.234v-4.59h7.532v4.59z"
  }));
}

IconPrint.propTypes = IconPropTypes;

function IconProhibited(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M17.656 16.742L7.258 6.344a.646.646 0 10-.914.914l10.398 10.398a.645.645 0 00.914 0 .647.647 0 000-.914z"
  }));
}

IconProhibited.propTypes = IconPropTypes;

function IconQuestion(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M11.5 4C9.025 4 7 5.966 7 8.369c-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-1.458 1.198-2.621 2.7-2.621 1.502 0 2.7 1.163 2.7 2.62.01 1.197-.624 1.81-1.51 2.622-.442.406-.933.83-1.35 1.384-.415.554-.74 1.275-.74 2.111-.007.462.425.892.9.892.476 0 .907-.43.9-.892 0-.431.13-.731.394-1.083.263-.351.673-.724 1.134-1.146.92-.845 2.08-1.753 2.072-3.887C16 5.983 13.97 4 11.5 4zm0 12.67c-.663 0-1.2.521-1.2 1.165 0 .643.537 1.165 1.2 1.165.663 0 1.2-.522 1.2-1.165s-.537-1.165-1.2-1.165z"
  }));
}

IconQuestion.propTypes = IconPropTypes;

function IconRefresh(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M8.99 10.216H5.96v-3.03a.582.582 0 00-1.164 0v3.612c0 .321.26.582.582.582H8.99a.582.582 0 000-1.164zm9.632 2.407H15.01a.582.582 0 000 1.165h3.03v3.03a.582.582 0 101.164 0v-3.613a.582.582 0 00-.582-.582z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M17.66 10.001a5.96 5.96 0 00-3.072-3.413 5.96 5.96 0 00-4.586-.241 6.037 6.037 0 00-2.235 1.408L4.98 10.373a.582.582 0 00.797.849L8.57 8.597a4.866 4.866 0 011.82-1.153 4.841 4.841 0 016.172 2.946.582.582 0 001.098-.39zm1.386 2.806a.582.582 0 00-.823-.026l-2.793 2.625a4.804 4.804 0 01-3.432 1.43h-.001a4.804 4.804 0 01-3.419-1.416 4.866 4.866 0 01-1.14-1.807.582.582 0 00-1.097.389 6.037 6.037 0 001.414 2.242A5.96 5.96 0 0011.997 18h.001a5.96 5.96 0 004.236-1.752l2.786-2.618a.582.582 0 00.026-.823z"
  }));
}

IconRefresh.propTypes = IconPropTypes;

function IconRemoveUser(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M15.644 14.614c-1.382-.77-3.21-1.194-5.148-1.194-1.938 0-3.766.424-5.148 1.194C3.834 15.457 3 16.627 3 17.908v.752a.727.727 0 101.454 0v-.752c0-.72.584-1.457 1.601-2.023 1.17-.652 2.747-1.01 4.44-1.01 1.695 0 3.272.358 4.442 1.01 1.017.566 1.6 1.304 1.6 2.023v.752a.727.727 0 001.455 0v-.752c0-1.281-.834-2.45-2.348-3.294zM14.223 7.55a3.709 3.709 0 00-1.053-2.093 3.733 3.733 0 00-3.19-1.054 3.74 3.74 0 00-3.147 4.243 3.711 3.711 0 001.47 2.453 3.707 3.707 0 002.773.694 3.74 3.74 0 003.147-4.243zm-3.36 2.805a2.266 2.266 0 01-1.694-.424 2.266 2.266 0 01-.897-1.498 2.284 2.284 0 012.59-2.591 2.268 2.268 0 011.923 1.922 2.284 2.284 0 01-1.922 2.59zm9.41.057H15.76a.727.727 0 100 1.454h4.513a.727.727 0 000-1.454z"
  }));
}

IconRemoveUser.propTypes = IconPropTypes;

function IconRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M8.222 4.607a.737.737 0 000 1.055l5.944 5.838-5.944 5.838a.737.737 0 000 1.054.77.77 0 001.075 0l6.48-6.365a.737.737 0 000-1.054l-6.48-6.366a.77.77 0 00-1.075 0z"
  }));
}

IconRight.propTypes = IconPropTypes;

function IconRotateLeft(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M9.425 10.142H6.131V6.847a.565.565 0 00-1.131 0v3.86c0 .313.253.566.565.566h3.86a.565.565 0 100-1.131z"
  }), React.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M18.636 9.888a6.314 6.314 0 00-3.25-3.62 6.314 6.314 0 00-4.857-.262 6.395 6.395 0 00-2.372 1.49l-2.979 2.8a.566.566 0 00.775.823l2.985-2.805a5.257 5.257 0 011.967-1.242 5.23 5.23 0 016.664 3.192 5.23 5.23 0 01-3.192 6.664 5.23 5.23 0 01-6.663-3.192.565.565 0 00-1.067.376 6.314 6.314 0 003.249 3.62 6.332 6.332 0 004.857.262 6.314 6.314 0 003.62-3.249 6.314 6.314 0 00.262-4.857z"
  }));
}

IconRotateLeft.propTypes = IconPropTypes;

function IconRotateRight(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("g", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    clipPath: "url(#clip0)"
  }, React.createElement("path", {
    d: "M18.434 6.286a.565.565 0 00-.565.565v3.295h-3.295a.566.566 0 000 1.131h3.86a.566.566 0 00.566-.565v-3.86a.566.566 0 00-.566-.566z"
  }), React.createElement("path", {
    d: "M18.822 10.3l-2.973-2.8a6.395 6.395 0 00-2.372-1.493 6.315 6.315 0 00-4.858.258 6.315 6.315 0 00-3.253 3.618 6.315 6.315 0 00.258 4.858 6.315 6.315 0 003.618 3.252 6.334 6.334 0 004.858-.258 6.315 6.315 0 003.253-3.618.565.565 0 10-1.067-.376 5.191 5.191 0 01-2.674 2.974 5.19 5.19 0 01-3.993.212 5.191 5.191 0 01-2.974-2.674 5.19 5.19 0 01-.212-3.994 5.191 5.191 0 012.673-2.974 5.191 5.191 0 013.994-.212 5.258 5.258 0 011.968 1.245l2.979 2.806a.565.565 0 00.775-.824z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconRotateRight.propTypes = IconPropTypes;

function IconSearch(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M15.565 5.984A6.73 6.73 0 0010.775 4a6.73 6.73 0 00-4.79 1.984A6.73 6.73 0 004 10.774a6.73 6.73 0 001.984 4.79 6.73 6.73 0 004.79 1.985 6.73 6.73 0 004.79-1.984 6.73 6.73 0 001.985-4.79 6.73 6.73 0 00-1.984-4.79zm-4.79 10.272a5.488 5.488 0 01-5.482-5.482 5.488 5.488 0 015.481-5.481 5.488 5.488 0 015.482 5.481 5.488 5.488 0 01-5.482 5.482z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.81 18.896l-4.248-4.248a.646.646 0 10-.914.914l4.249 4.249a.644.644 0 00.914 0 .646.646 0 000-.915z"
  }));
}

IconSearch.propTypes = IconPropTypes;

function IconSettings(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.964 10.504c.236.04.46.156.672.347a.91.91 0 01.316.702v.988a.782.782 0 01-.316.648 1.835 1.835 0 01-.672.34l-1.281.309c-.05.148-.104.295-.163.44-.056.14-.12.276-.192.409l.678 1.142c.134.206.216.443.248.71a.808.808 0 01-.248.695l-.694.695a.894.894 0 01-.71.27 1.455 1.455 0 01-.726-.224l-1.111-.71c-.143.07-.287.137-.433.2a4.829 4.829 0 01-.463.17l-.278 1.282a1.36 1.36 0 01-.347.672.909.909 0 01-.702.316h-.989a.782.782 0 01-.648-.316 1.844 1.844 0 01-.34-.672l-.31-1.268a6.31 6.31 0 01-.494-.177 5.081 5.081 0 01-.478-.224l-1.142.726c-.214.14-.463.217-.718.224a.857.857 0 01-.703-.27l-.71-.696a.827.827 0 01-.232-.693c.031-.268.108-.505.232-.71l.726-1.205a8.456 8.456 0 01-.178-.379 3.19 3.19 0 01-.147-.409l-1.28-.308a1.843 1.843 0 01-.673-.34.783.783 0 01-.316-.648v-.988c0-.278.105-.513.316-.702.21-.191.435-.306.673-.348l1.264-.278c.043-.148.094-.292.155-.432.062-.144.123-.283.186-.417L6.01 8.171a1.754 1.754 0 01-.232-.71.827.827 0 01.232-.695l.71-.695a.857.857 0 01.703-.27c.282.015.522.09.716.224l1.144.726c.306-.163.626-.297.957-.401l.325-1.267c.055-.246.166-.475.323-.672a.802.802 0 01.664-.316h.989c.277 0 .509.106.694.316.186.211.304.43.355.657l.279 1.296c.307.103.606.227.896.371l1.11-.71c.218-.137.468-.214.725-.223a.893.893 0 01.71.27l.696.695a.807.807 0 01.247.693 1.625 1.625 0 01-.248.71l-.678 1.143c.071.144.14.291.208.44.067.15.12.306.162.47l1.265.279.002.002zm0 1.96l.015-.88a.543.543 0 00-.216-.108l-1.837-.418-.17-.54a2.615 2.615 0 00-.123-.37 4.37 4.37 0 00-.185-.386l-.248-.494.973-1.621a.5.5 0 00.07-.123.3.3 0 00.022-.093l-.648-.632a.367.367 0 00-.2.06l-1.591 1.02-.51-.264c-.122-.06-.245-.12-.37-.177a2.006 2.006 0 00-.385-.13l-.54-.186-.402-1.867a.457.457 0 00-.047-.116l-.031-.054h-.91a.357.357 0 00-.062.092.546.546 0 00-.046.155l-.448 1.791-.525.169a4.756 4.756 0 00-.803.34l-.51.263-1.65-1.051-.079-.038a.706.706 0 00-.093-.04l-.648.65a.33.33 0 00.023.108c.02.048.043.094.07.139L7.863 9.33l-.246.478c-.057.123-.111.246-.163.37a2.936 2.936 0 00-.115.34l-.17.54-1.868.418a.562.562 0 00-.1.046.21.21 0 01-.07.032v.91a.272.272 0 00.092.054c.05.018.103.03.155.038l1.807.464.168.524c.07.226.164.443.28.649l.231.478-1.004 1.683a.5.5 0 00-.07.123.314.314 0 00-.023.109l.648.632a.25.25 0 00.102-.023.623.623 0 00.1-.053l1.62-1.035.51.263c.257.137.525.251.803.34l.525.168.463 1.823c.01.05.024.095.038.13a.28.28 0 00.054.085h.896a.542.542 0 00.108-.2l.401-1.837.54-.186c.255-.084.503-.187.742-.308l.51-.263 1.62 1.035.078.038c.03.015.06.028.092.04l.648-.649a.314.314 0 00-.023-.108.868.868 0 00-.07-.14l-.972-1.605.248-.494c.06-.113.116-.229.162-.348a7.4 7.4 0 00.13-.362l.17-.51 1.837-.463a.671.671 0 00.132-.038.269.269 0 00.084-.055l.001.001zm-6.917-3.428c.824 0 1.526.288 2.108.864a2.845 2.845 0 01.872 2.1 2.845 2.845 0 01-.872 2.099 2.883 2.883 0 01-2.108.864 2.87 2.87 0 01-2.092-.864 2.846 2.846 0 01-.872-2.1A2.845 2.845 0 019.955 9.9a2.866 2.866 0 012.092-.864zm0 4.94a1.9 1.9 0 001.398-.58c.386-.386.579-.85.579-1.397 0-.545-.193-1.011-.58-1.397a1.903 1.903 0 00-1.397-.579 1.9 1.9 0 00-1.397.58A1.9 1.9 0 0010.07 12c0 .546.193 1.012.58 1.398a1.9 1.9 0 001.396.579z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.875 6.025c.218-.137.468-.214.725-.223a.892.892 0 01.71.27l.696.695a.807.807 0 01.247.693 1.634 1.634 0 01-.248.71l-.678 1.143c.071.144.14.291.208.44.067.15.12.306.162.47l1.265.279.002.002c.236.04.46.156.672.347a.91.91 0 01.316.702v.988a.782.782 0 01-.316.648 1.835 1.835 0 01-.672.34l-1.281.309c-.05.148-.104.295-.163.44-.056.14-.12.276-.192.409l.678 1.142c.134.206.216.443.248.71a.808.808 0 01-.248.695l-.694.695a.893.893 0 01-.71.27 1.454 1.454 0 01-.726-.224l-1.111-.71c-.143.07-.287.137-.433.2a4.84 4.84 0 01-.463.17l-.278 1.282a1.36 1.36 0 01-.347.672.909.909 0 01-.702.316h-.989a.782.782 0 01-.648-.316 1.844 1.844 0 01-.34-.672l-.31-1.268a6.31 6.31 0 01-.494-.177 5.081 5.081 0 01-.478-.224l-1.142.726a1.38 1.38 0 01-.718.224.857.857 0 01-.703-.27l-.71-.696a.828.828 0 01-.232-.693c.031-.268.108-.505.232-.71l.726-1.205a8.467 8.467 0 01-.178-.379 3.19 3.19 0 01-.147-.409l-1.28-.308a1.843 1.843 0 01-.673-.34.783.783 0 01-.316-.648v-.988c0-.278.105-.513.316-.702.21-.191.435-.306.673-.348l1.264-.278c.043-.148.094-.292.155-.432.062-.144.123-.283.186-.417L6.01 8.171a1.754 1.754 0 01-.232-.71.827.827 0 01.232-.695l.71-.695a.857.857 0 01.703-.27c.282.015.522.09.716.224l1.144.726c.306-.163.626-.297.957-.401l.325-1.267c.055-.246.166-.475.323-.672a.801.801 0 01.664-.316h.989c.277 0 .509.106.694.316.186.211.304.43.355.657l.279 1.296c.307.103.606.227.896.371l1.11-.71zm-1.117.602l1.066-.682c.232-.146.498-.228.771-.238a.988.988 0 01.783.298h.001l.693.694a.901.901 0 01.275.772 1.729 1.729 0 01-.26.75l-.653 1.096c.064.13.127.263.188.398.06.136.111.28.152.428l1.236.272v.001c.246.048.476.172.69.364.23.208.347.468.347.773v.988a.88.88 0 01-.353.723c-.22.172-.456.292-.706.357l-1.232.296a7.33 7.33 0 01-.148.397c-.051.126-.108.25-.172.37l.65 1.095c.143.219.229.47.262.749a.901.901 0 01-.276.774l-.692.693a.988.988 0 01-.784.298 1.55 1.55 0 01-.77-.238l-1.067-.681a8.172 8.172 0 01-.39.178 4.905 4.905 0 01-.42.157l-.264 1.227c-.054.27-.183.518-.372.717-.207.23-.467.347-.771.347h-.988a.878.878 0 01-.724-.354 1.94 1.94 0 01-.356-.704v-.001l-.298-1.217a6.436 6.436 0 01-.45-.164 5.184 5.184 0 01-.439-.202l-1.095.695c-.228.15-.492.232-.764.24a.952.952 0 01-.776-.3l-.71-.694a.921.921 0 01-.258-.772 1.86 1.86 0 01.244-.748l.7-1.16a8.57 8.57 0 01-.157-.335 3.28 3.28 0 01-.136-.368l-1.228-.296h-.001a1.939 1.939 0 01-.706-.356.88.88 0 01-.353-.725v-.987c0-.305.117-.565.348-.773.22-.2.46-.324.717-.37l1.208-.266c.04-.132.088-.262.143-.389.055-.127.11-.252.165-.373l-.7-1.162a1.849 1.849 0 01-.245-.747.922.922 0 01.26-.773l.709-.694a.952.952 0 01.777-.298c.296.016.552.094.763.239l1.095.696c.281-.147.573-.27.874-.367l.311-1.215c.06-.258.176-.5.341-.707a.897.897 0 01.74-.353h.988c.304 0 .562.118.765.349.194.22.321.453.377.698l.267 1.245c.276.094.546.206.809.335zm3.99 5.929l-1.838.464-.17.509a7.298 7.298 0 01-.13.362 2.97 2.97 0 01-.162.348l-.248.494.973 1.605a.86.86 0 01.07.14.312.312 0 01.022.108l-.648.648a.755.755 0 01-.093-.039l-.076-.038-1.621-1.035-.51.263a5.403 5.403 0 01-.741.308l-.541.186-.4 1.837a.542.542 0 01-.11.2h-.895a.268.268 0 01-.054-.084.755.755 0 01-.038-.13l-.463-1.824-.525-.169a4.755 4.755 0 01-.803-.339l-.51-.264-1.62 1.035a.615.615 0 01-.1.054.25.25 0 01-.102.023l-.648-.632a.314.314 0 01.023-.108.5.5 0 01.07-.124l1.004-1.683-.231-.478a3.313 3.313 0 01-.28-.649l-.168-.524-1.807-.464a.851.851 0 01-.155-.038.272.272 0 01-.092-.055v-.91a.21.21 0 00.07-.03.562.562 0 01.1-.047l1.869-.418.169-.54c.031-.115.07-.229.115-.34.052-.124.106-.247.163-.37l.246-.478L6.86 7.663a.947.947 0 01-.07-.14.33.33 0 01-.023-.108l.648-.648a.63.63 0 01.093.039l.078.038 1.652 1.05.509-.263c.257-.137.525-.251.803-.34l.525-.168.448-1.792a.546.546 0 01.046-.154.357.357 0 01.061-.092h.91l.032.054a.435.435 0 01.047.116l.401 1.867.54.186c.134.03.263.074.387.13.124.057.247.116.37.177l.509.264 1.591-1.02a.366.366 0 01.2-.06l.648.632a.292.292 0 01-.023.093.5.5 0 01-.07.123l-.972 1.62.248.495c.068.126.13.254.185.386.05.12.092.244.123.37l.17.54 1.837.418c.08.019.153.056.216.107l-.015.881h-.002a.267.267 0 01-.083.054.678.678 0 01-.132.038zm.095-.126a.172.172 0 00.027-.014l.013-.786a.445.445 0 00-.142-.062l-1.89-.43-.186-.593v-.003a2.51 2.51 0 00-.12-.358 4.243 4.243 0 00-.18-.377l-.002-.001-.271-.542 1.002-1.67.003-.005a.404.404 0 00.057-.1v-.001l.001-.002a.197.197 0 00.008-.022l-.582-.568a.272.272 0 00-.111.043h-.001L14.83 7.99l-.557-.289a12.13 12.13 0 00-.367-.176 1.91 1.91 0 00-.367-.124l-.005-.001-.596-.205-.413-1.918a.36.36 0 00-.036-.09l-.004-.006h-.81a.267.267 0 00-.02.036h-.001a.455.455 0 00-.038.129l-.001.005-.462 1.847-.575.185a4.656 4.656 0 00-.787.333H9.79l-.558.289L7.54 6.927l-.074-.036a.611.611 0 00-.027-.013l-.572.572a.392.392 0 00.012.04.852.852 0 00.062.123l1.03 1.713-.269.524a8.37 8.37 0 00-.16.364 2.842 2.842 0 00-.112.33v.001l-.186.594-1.917.428a.469.469 0 00-.102.05v.798c.009.004.019.01.031.014.044.015.09.026.136.033h.005l1.862.479.185.575c.068.22.159.43.271.63l.002.003.255.527-1.033 1.732-.004.004a.405.405 0 00-.056.1v.001a.22.22 0 00-.012.038l.582.568a.208.208 0 00.03-.01v-.001a.525.525 0 00.085-.046h.001l1.668-1.065.558.29c.252.134.516.245.788.332l.575.185.477 1.876v.002c.01.047.021.085.033.114a.165.165 0 00.013.025h.803a.45.45 0 00.063-.129l.41-1.885.592-.203a5.34 5.34 0 00.729-.304l.558-.287 1.662 1.061.073.036a.67.67 0 00.027.013l.572-.572a.775.775 0 00-.074-.163l-1-1.65.271-.543.001-.001c.06-.11.113-.222.157-.337a7.3 7.3 0 00.13-.358l.186-.559 1.89-.477h.003a.575.575 0 00.113-.033zm-6.796-3.394c.824 0 1.526.288 2.108.864a2.844 2.844 0 01.872 2.1 2.845 2.845 0 01-.872 2.099 2.883 2.883 0 01-2.107.864 2.868 2.868 0 01-2.093-.864 2.846 2.846 0 01-.872-2.1A2.845 2.845 0 019.955 9.9a2.867 2.867 0 012.092-.864zm-2.158.797a2.94 2.94 0 00-.901 2.166 2.94 2.94 0 00.9 2.167 2.961 2.961 0 002.16.892 2.98 2.98 0 002.174-.892 2.94 2.94 0 00.9-2.167 2.94 2.94 0 00-.9-2.167 2.98 2.98 0 00-2.174-.89 2.962 2.962 0 00-2.16.89zm3.489 3.496c.368-.368.55-.809.55-1.33 0-.52-.182-.962-.551-1.33l-.001-.001a1.81 1.81 0 00-1.327-.55h-.002c-.52 0-.962.183-1.33.552l-.001.001a1.81 1.81 0 00-.55 1.327V12c0 .52.183.962.552 1.33.368.368.809.55 1.33.55.52 0 .962-.182 1.33-.551zm-2.728-2.726a1.9 1.9 0 011.397-.58 1.904 1.904 0 011.397.579c.387.386.58.852.58 1.397 0 .546-.193 1.011-.579 1.397-.386.387-.852.58-1.398.58a1.9 1.9 0 01-1.396-.579 1.901 1.901 0 01-.58-1.398 1.903 1.903 0 01.579-1.396z",
    clipRule: "evenodd"
  }));
}

IconSettings.propTypes = IconPropTypes;

function IconShare(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.775 5.052a.606.606 0 01.634.089l6.386 5.377a.57.57 0 01.205.434.57.57 0 01-.202.435l-6.386 5.442a.606.606 0 01-.636.091.576.576 0 01-.348-.525v-2.548c-2.13.083-5.798 1.119-7.202 4.778a.595.595 0 01-.624.371.585.585 0 01-.52-.501c-.22-1.708-.053-4.281 1.207-6.453 1.222-2.106 3.443-3.777 7.139-3.938V5.577c0-.226.135-.431.347-.525zm.84 1.787v1.829a.585.585 0 01-.594.577c-3.634 0-5.627 1.517-6.699 3.364-.657 1.133-.98 2.412-1.09 3.588 2.233-2.95 5.978-3.586 7.817-3.501a.584.584 0 01.565.576v1.85l4.89-4.166-4.89-4.117z",
    clipRule: "evenodd"
  }));
}

IconShare.propTypes = IconPropTypes;

function IconSquareMinus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.72 4H6.28A2.283 2.283 0 004 6.28v11.44A2.283 2.283 0 006.28 20h11.44A2.283 2.283 0 0020 17.72V6.28A2.283 2.283 0 0017.72 4zm.987 13.72a.99.99 0 01-.988.987H6.28a.989.989 0 01-.987-.988V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.268 11.354H8.732a.646.646 0 100 1.292h6.536a.646.646 0 100-1.292z"
  }));
}

IconSquareMinus.propTypes = IconPropTypes;

function IconSquarePlus(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.72 4H6.28A2.283 2.283 0 004 6.28v11.44A2.283 2.283 0 006.28 20h11.44A2.283 2.283 0 0020 17.72V6.28A2.283 2.283 0 0017.72 4zm.987 13.72a.99.99 0 01-.988.987H6.28a.989.989 0 01-.987-.988V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 8.085a.646.646 0 00-.646.647v6.536a.646.646 0 101.292 0V8.732A.646.646 0 0012 8.085z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.268 11.354H8.732a.646.646 0 100 1.292h6.536a.646.646 0 100-1.292z"
  }));
}

IconSquarePlus.propTypes = IconPropTypes;

function IconSquare(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.72 4H6.28A2.283 2.283 0 004 6.28v11.44A2.283 2.283 0 006.28 20h11.44A2.283 2.283 0 0020 17.72V6.28A2.283 2.283 0 0017.72 4zm.987 13.72a.989.989 0 01-.987.987H6.28a.989.989 0 01-.987-.987V6.28c0-.544.443-.987.987-.987h11.44c.544 0 .987.443.987.987v11.44z"
  }));
}

IconSquare.propTypes = IconPropTypes;

function IconStarFilled(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.968 10.066a.656.656 0 00-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0012 4a.644.644 0 00-.58.377L9.299 8.88l-4.745.726a.655.655 0 00-.521.461.7.7 0 00.163.694l3.434 3.502-.81 4.947a.692.692 0 00.257.662.622.622 0 00.68.051L12 17.585l4.244 2.337a.622.622 0 00.68-.051.692.692 0 00.258-.662l-.81-4.947 3.433-3.502a.7.7 0 00.163-.694z"
  }));
}

IconStarFilled.propTypes = IconPropTypes;

function IconStar(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M19.968 10.066a.656.656 0 00-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0012 4a.644.644 0 00-.58.377L9.299 8.88l-4.745.726a.655.655 0 00-.521.461.7.7 0 00.163.694l3.434 3.502-.81 4.947a.692.692 0 00.257.662.622.622 0 00.68.051L12 17.585l4.244 2.337a.622.622 0 00.68-.051.692.692 0 00.258-.662l-.81-4.947 3.433-3.502a.7.7 0 00.163-.694zm-4.742 3.474a.697.697 0 00-.186.6l.646 3.946-3.385-1.864a.622.622 0 00-.602 0l-3.385 1.864.646-3.946a.697.697 0 00-.186-.6l-2.74-2.793 3.787-.58a.65.65 0 00.486-.37L12 6.206l1.693 3.59a.65.65 0 00.486.371l3.786.58-2.74 2.793z"
  }));
}

IconStar.propTypes = IconPropTypes;

function IconTarget(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 6.942A5.064 5.064 0 006.941 12c0 2.79 2.27 5.059 5.059 5.059 2.79 0 5.059-2.27 5.059-5.059 0-2.79-2.27-5.058-5.059-5.058zm0 8.824A3.77 3.77 0 018.234 12 3.77 3.77 0 0112 8.234 3.77 3.77 0 0115.766 12 3.77 3.77 0 0112 15.766z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 9.883A2.12 2.12 0 009.883 12 2.12 2.12 0 0012 14.117 2.12 2.12 0 0014.117 12 2.12 2.12 0 0012 9.883zm0 2.941a.825.825 0 010-1.648.825.825 0 010 1.648z"
  }));
}

IconTarget.propTypes = IconPropTypes;

function IconToken(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.556 16.508c0-1.93 1.542-3.493 3.444-3.493s3.444 1.564 3.444 3.492C15.444 18.438 13.902 20 12 20s-3.444-1.564-3.444-3.492zM12 14.366c-1.166 0-2.112.959-2.112 2.142 0 1.182.946 2.141 2.112 2.141 1.166 0 2.112-.959 2.112-2.142 0-1.182-.946-2.141-2.112-2.141zM3 9.183c0-1.307 1.044-2.366 2.333-2.366 1.288 0 2.333 1.06 2.333 2.366s-1.045 2.366-2.333 2.366C4.044 11.549 3 10.489 3 9.183zm2.333-1.015c-.553 0-1.001.454-1.001 1.015 0 .56.448 1.015 1 1.015.554 0 1.002-.455 1.002-1.015 0-.56-.448-1.015-1.001-1.015zm11.001 1.015c0-1.307 1.045-2.366 2.333-2.366 1.289 0 2.333 1.06 2.333 2.366s-1.044 2.366-2.333 2.366c-1.288 0-2.333-1.06-2.333-2.366zm2.333-1.015c-.553 0-1 .454-1 1.015 0 .56.447 1.015 1 1.015.553 0 1.001-.455 1.001-1.015 0-.56-.448-1.015-1-1.015zm-9-1.802C9.667 5.059 10.711 4 12 4c1.288 0 2.333 1.06 2.333 2.366S13.288 8.73 12 8.73c-1.289 0-2.333-1.059-2.333-2.365zM12 5.35c-.553 0-1 .454-1 1.015 0 .56.447 1.015 1 1.015.553 0 1-.455 1-1.015 0-.56-.447-1.015-1-1.015z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.334 13.68V7.775h1.332v5.907h-1.332zm1.723.396l3.907-3.962.942.955-3.907 3.962-.942-.955zm-2.166 0l-3.907-3.962-.942.955 3.907 3.962.942-.955z",
    clipRule: "evenodd"
  }));
}

IconToken.propTypes = IconPropTypes;

function IconTrash(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.618 6.941H5.382a.646.646 0 000 1.293h13.236a.646.646 0 100-1.293z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M17.148 6.941a.646.646 0 00-.647.647v10.295c0 .454-.37.824-.824.824H8.323a.825.825 0 01-.824-.824V7.588a.646.646 0 00-1.293 0v10.295A2.12 2.12 0 008.323 20h7.354a2.12 2.12 0 002.117-2.117V7.588a.646.646 0 00-.646-.647z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M13.47 4h-2.94a2.12 2.12 0 00-2.118 2.117v1.47a.646.646 0 001.293 0v-1.47c0-.455.37-.824.824-.824h2.942c.454 0 .824.37.824.824v1.47a.646.646 0 001.293 0v-1.47A2.12 2.12 0 0013.47 4zm-2.94 6.618a.646.646 0 00-.647.647v4.412a.646.646 0 101.293 0v-4.412a.646.646 0 00-.647-.647zm2.94 0a.646.646 0 00-.646.647v4.412a.646.646 0 101.293 0v-4.412a.646.646 0 00-.646-.647z"
  }));
}

IconTrash.propTypes = IconPropTypes;

function IconUnlock(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.669 10.48H6.332A2.334 2.334 0 004 12.812v5.668a2.334 2.334 0 002.332 2.332h11.337A2.334 2.334 0 0020 18.48v-5.668a2.334 2.334 0 00-2.331-2.332zm.907 8c0 .5-.407.908-.907.908H6.332a.909.909 0 01-.908-.908v-5.668c0-.5.407-.908.908-.908h11.337c.5 0 .907.407.907.908v5.668z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M16.666 6.813a4.774 4.774 0 00-1.655-2.74A4.773 4.773 0 0012 3h-.005A4.73 4.73 0 008.63 4.398a4.73 4.73 0 00-1.39 3.367v3.239a.712.712 0 101.423 0v-3.24c0-.891.345-1.73.975-2.36a3.315 3.315 0 012.359-.98H12a3.347 3.347 0 013.27 2.673.712.712 0 101.396-.284z"
  }));
}

IconUnlock.propTypes = IconPropTypes;

function IconUp(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M5.215 15.219a.725.725 0 001.039 0L12 9.367l5.747 5.851a.725.725 0 001.038 0 .757.757 0 000-1.057l-6.266-6.38a.725.725 0 00-1.038 0l-6.266 6.38a.757.757 0 000 1.058z"
  }));
}

IconUp.propTypes = IconPropTypes;

function IconUpload(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.618 15.03a.646.646 0 00-.646.647v2.206c0 .454-.37.824-.824.824H6.852a.825.825 0 01-.824-.824v-2.206a.646.646 0 00-1.293 0v2.206A2.12 2.12 0 006.853 20h10.295a2.12 2.12 0 002.117-2.117v-2.206a.646.646 0 00-.647-.646zM8.602 8.045a.646.646 0 00.914 0L12 5.56l2.485 2.485a.646.646 0 00.914-.914l-2.942-2.942a.646.646 0 00-.914 0L8.602 7.131a.646.646 0 000 .914z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 15.588c.357 0 .646-.29.646-.646V4.646a.646.646 0 00-1.292 0v10.296c0 .356.289.646.646.646z"
  }));
}

IconUpload.propTypes = IconPropTypes;

function IconUser(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M12 14c-4.806 0-8.571 2.227-8.571 5.07v.875a.694.694 0 101.388 0v-.875c0-1.996 3.29-3.682 7.183-3.682s7.183 1.686 7.183 3.682v.875a.694.694 0 101.388 0v-.875C20.57 16.227 16.806 14 12 14zm4.187-6.42a4.166 4.166 0 00-1.183-2.351 4.192 4.192 0 00-3.582-1.183A4.2 4.2 0 007.889 8.81a4.167 4.167 0 001.65 2.754 4.164 4.164 0 003.115.78 4.2 4.2 0 003.534-4.764zm-3.737 3.39a2.788 2.788 0 01-2.084-.522A2.788 2.788 0 019.26 8.607a2.81 2.81 0 013.189-3.189 2.79 2.79 0 012.365 2.365 2.81 2.81 0 01-2.365 3.188z"
  }));
}

IconUser.propTypes = IconPropTypes;

function IconView(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M20.923 11.675c-.033-.066-.816-1.617-2.282-3.18-.87-.93-1.805-1.672-2.776-2.208-1.24-.684-2.54-1.03-3.865-1.03-1.325 0-2.626.346-3.865 1.03-.971.536-1.905 1.278-2.776 2.207-1.466 1.564-2.25 3.116-2.282 3.18a.727.727 0 000 .651c.032.066.816 1.617 2.282 3.18.87.93 1.805 1.672 2.776 2.208 1.24.684 2.54 1.03 3.865 1.03 1.325 0 2.625-.346 3.865-1.03.971-.536 1.905-1.278 2.776-2.207 1.466-1.564 2.25-3.116 2.282-3.18a.728.728 0 000-.651zM12 17.29c-1.964 0-3.833-.926-5.555-2.752A14.138 14.138 0 014.557 12C5.249 10.802 7.916 6.71 12 6.71c1.964 0 3.833.926 5.554 2.752A14.137 14.137 0 0119.444 12c-.694 1.198-3.36 5.29-7.444 5.29z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 9.017A2.987 2.987 0 009.017 12 2.987 2.987 0 0012 14.983 2.987 2.987 0 0014.983 12 2.987 2.987 0 0012 9.017zm0 4.512A1.53 1.53 0 0110.471 12c0-.843.686-1.53 1.53-1.53a1.53 1.53 0 010 3.058z"
  }));
}

IconView.propTypes = IconPropTypes;

function IconVote(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M8.023 2.178a.656.656 0 01.898 0l.713.675a1.553 1.553 0 01.458 1.459l-.001.005-.427 1.928h3.849c.829 0 1.543.645 1.543 1.482v1.061a1.845 1.845 0 01-.15.72l-2.03 4.488c-.306.694-1.022 1.156-1.83 1.156H4.992C3.912 15.152 3 14.32 3 13.245V7.727c0-.536.233-1.015.592-1.355l4.43-4.194zM4.49 7.283l-.45-.456.45.456a.61.61 0 00-.198.444v5.518c0 .334.29.64.7.64h6.053a.695.695 0 00.647-.4l2.025-4.477a.594.594 0 00.045-.22v-1.06c0-.097-.093-.216-.25-.216h-4.65a.652.652 0 01-.504-.236.624.624 0 01-.129-.532l.596-2.692a.297.297 0 00-.09-.288l-.264-.25-3.981 3.77z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.977 21.822a.656.656 0 01-.898 0l-.713-.675a1.553 1.553 0 01-.457-1.464l.427-1.928h-3.849c-.829 0-1.543-.645-1.543-1.482v-1.061c0-.259.056-.49.14-.696l1.202.466a.6.6 0 00-.049.23v1.06c0 .097.093.216.25.216h4.65c.196 0 .381.087.504.236s.17.345.129.532l-.596 2.692a.297.297 0 00.09.288l.264.25 3.981-3.77.45.457-.45-.456a.61.61 0 00.198-.444v-5.518c0-.334-.29-.64-.7-.64H14.52V8.848h4.489c1.08 0 1.992.832 1.992 1.907v5.518c0 .536-.233 1.015-.592 1.355l-4.43 4.194z",
    clipRule: "evenodd"
  }));
}

IconVote.propTypes = IconPropTypes;

function IconWallet(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 8.577c0-.329.266-.595.595-.595h14.81c.328 0 .595.266.595.595v10.815a.595.595 0 01-.595.595H4.595A.595.595 0 014 19.392V8.577zm1.19.595v9.625h13.62V9.172H5.19z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M13.033 13.862a2.562 2.562 0 012.562-2.562h3.564c.329 0 .595.266.595.595v3.933a.595.595 0 01-.595.595h-3.564a2.562 2.562 0 01-2.562-2.561zm2.562-1.372a1.371 1.371 0 100 2.743h2.969V12.49h-2.97z",
    clipRule: "evenodd"
  }), React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.821 14.65a.778.778 0 100-1.556.778.778 0 000 1.557zm-.359-8.265c.078-.017.167-.04.25-.06l.05-.013a6.67 6.67 0 01.322-.073c.224-.045.413-.06.559-.04.131.02.196.062.242.123.058.076.146.263.146.686a.595.595 0 001.19 0c0-.568-.115-1.044-.384-1.402a1.514 1.514 0 00-1.024-.585c-.345-.05-.689-.004-.96.05a7.8 7.8 0 00-.438.1 6.18 6.18 0 01-.237.057L4.528 7.953a.595.595 0 00.295 1.153l10.639-2.721z",
    clipRule: "evenodd"
  }));
}

IconWallet.propTypes = IconPropTypes;

function IconWarning(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M6.343 17.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.947 7.947 0 0020 12a7.948 7.948 0 00-2.343-5.657A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657zM12 5.293A6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707 6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12 12.646c.357 0 .646-.29.646-.646V9.058a.646.646 0 10-1.292 0V12c0 .357.29.646.646.646zm-.457 2.753c.12.12.287.189.457.189a.651.651 0 00.646-.646.651.651 0 00-.189-.458.65.65 0 00-.457-.189.65.65 0 00-.457.19.65.65 0 00-.19.456c0 .17.07.337.19.457z"
  }));
}

IconWarning.propTypes = IconPropTypes;

function IconWorld(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M19.354 11.354H4.646a.646.646 0 100 1.292h14.708a.646.646 0 100-1.292z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M12.477 4.21a.646.646 0 00-.954 0 11.893 11.893 0 00-3.11 7.804 11.893 11.893 0 003.11 7.776.646.646 0 00.954 0 11.893 11.893 0 003.11-7.803 11.894 11.894 0 00-3.11-7.777zM12 18.358A10.6 10.6 0 019.705 12c.051-2.32.86-4.55 2.295-6.358A10.601 10.601 0 0114.295 12 10.6 10.6 0 0112 18.358z"
  }));
}

IconWorld.propTypes = IconPropTypes;

function IconWrite(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    fill: "currentColor",
    d: "M18.518 5.479a5.029 5.029 0 00-3.58-1.483A5.029 5.029 0 0011.36 5.48l-4.964 4.964a.647.647 0 00-.189.457v6.25c0 .358.29.648.647.648h6.25a.647.647 0 00.459-.19l4.955-4.971A5.028 5.028 0 0020 9.057a5.028 5.028 0 00-1.482-3.578zm-.915 6.243v.001l-4.768 4.781H7.5v-5.336l4.775-4.775A3.743 3.743 0 0114.94 5.29c1.006 0 1.952.391 2.664 1.103a3.744 3.744 0 011.104 2.665 3.744 3.744 0 01-1.104 2.664z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.4 8.604a.647.647 0 00-.915 0L4.189 18.9a.647.647 0 00.915.914L15.399 9.52a.647.647 0 000-.915z"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M15.678 13.563H9.794a.647.647 0 000 1.293h5.884a.647.647 0 100-1.293z"
  }));
}

IconWrite.propTypes = IconPropTypes;

function IconZoomIn(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#clip0)"
  }, React.createElement("path", {
    d: "M15.73 6.84A6.244 6.244 0 0011.284 5 6.244 6.244 0 006.84 6.84 6.244 6.244 0 005 11.286c0 1.679.654 3.257 1.84 4.444a6.244 6.244 0 004.445 1.841 6.244 6.244 0 004.444-1.84 6.244 6.244 0 001.841-4.445 6.244 6.244 0 00-1.84-4.444zm-4.445 9.6a5.16 5.16 0 01-5.154-5.155 5.16 5.16 0 015.154-5.154 5.16 5.16 0 015.154 5.154 5.16 5.16 0 01-5.154 5.154z"
  }), React.createElement("path", {
    d: "M18.834 18.035l-3.11-3.11a.566.566 0 00-.8.8l3.11 3.11a.564.564 0 00.8 0 .566.566 0 000-.8zm-7.549-9.46a.566.566 0 00-.565.565v4.29a.566.566 0 001.13 0V9.14a.566.566 0 00-.565-.565z"
  }), React.createElement("path", {
    d: "M13.43 10.72H9.14a.566.566 0 000 1.13h4.29a.565.565 0 100-1.13z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconZoomIn.propTypes = IconPropTypes;

function IconZoomOut(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties(_ref, ["size"]);

  var sizeValue = useIconSize(size);
  return React.createElement("svg", _extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), React.createElement("g", {
    fill: "currentColor",
    clipPath: "url(#clip0)"
  }, React.createElement("path", {
    d: "M15.73 6.84A6.244 6.244 0 0011.284 5 6.244 6.244 0 006.84 6.84 6.244 6.244 0 005 11.286c0 1.679.654 3.257 1.84 4.444a6.244 6.244 0 004.445 1.841 6.244 6.244 0 004.444-1.84 6.244 6.244 0 001.841-4.445 6.244 6.244 0 00-1.84-4.444zm-4.445 9.6a5.16 5.16 0 01-5.154-5.155 5.16 5.16 0 015.154-5.154 5.16 5.16 0 015.154 5.154 5.16 5.16 0 01-5.154 5.154z"
  }), React.createElement("path", {
    d: "M18.834 18.035l-3.11-3.11a.566.566 0 00-.8.8l3.11 3.11a.564.564 0 00.8 0 .566.566 0 000-.8zM13.43 10.72H9.14a.566.566 0 000 1.13h4.29a.565.565 0 100-1.13z"
  })), React.createElement("defs", null, React.createElement("clipPath", {
    id: "clip0"
  }, React.createElement("path", {
    fill: "#fff",
    d: "M0 0h14v14H0z",
    transform: "translate(5 5)"
  }))));
}

IconZoomOut.propTypes = IconPropTypes;

var _StyledDiv$3 = _styled.div.withConfig({
  displayName: "PaginationSeparator___StyledDiv",
  componentId: "f1pytl-0"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledIconEllipsis = _styled(IconEllipsis).withConfig({
  displayName: "PaginationSeparator___StyledIconEllipsis",
  componentId: "f1pytl-1"
})(["color:", ";"], function (p) {
  return p._css;
});

var PaginationSeparator = React.memo(function PaginationSeparator() {
  var theme = useTheme();
  return React.createElement(_StyledDiv$3, null, React.createElement(_StyledIconEllipsis, {
    _css: theme.surfaceContentSecondary.alpha(0.4)
  }));
});

function paginationItems(pages, selected) {
  var all = toConsumableArray(Array(pages)).map(function (_, i) {
    return i;
  });

  if (all.length < 6) {
    return all;
  }

  var first = 0;
  var last = all.length - 1;
  var prev = Math.min(all.length, Math.max(0, selected - 1));
  var next = Math.min(all.length, Math.max(0, selected + 1));
  var items = []; // Selected item + previous + next

  items.push.apply(items, toConsumableArray(all.slice(prev, next + 1))); // Display three items, even if the first / last one is selected

  if (selected === last) {
    items.unshift(last - 2);
  }

  if (selected === first) {
    items.push(first + 2);
  } // Ellipsises


  if (prev > first + 1) {
    items.unshift(-1);
  }

  if (next < last - 1) {
    items.push(-1);
  } // Always display the first & last items


  if (prev >= first + 1) {
    items.unshift(all[0]);
  }

  if (next <= last - 1) {
    items.push(all[all.length - 1]);
  }

  return items;
}

var _StyledDiv$4 = _styled.div.withConfig({
  displayName: "Pagination___StyledDiv",
  componentId: "sc-10i2kzw-0"
})(["display:flex;align-items:center;justify-content:center;padding:", "px 0;& > div + div{margin-left:", "px;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var Pagination = React.memo(function Pagination(_ref) {
  var pages = _ref.pages,
      selected = _ref.selected,
      onChange = _ref.onChange,
      touchMode = _ref.touchMode,
      props = objectWithoutProperties(_ref, ["pages", "selected", "onChange", "touchMode"]);

  var items = paginationItems(pages, selected);
  return React.createElement(_StyledDiv$4, _extends_1({}, props, {
    _css: 2 * GU,
    _css2: 1 * GU
  }), items.map(function (pageIndex, i) {
    return pageIndex === -1 ? React.createElement(PaginationSeparator, {
      key: "separator-".concat(i)
    }) : React.createElement(PaginationItem, {
      key: pageIndex,
      index: pageIndex,
      selected: selected === pageIndex,
      onChange: onChange,
      touchMode: touchMode
    });
  }));
});
Pagination.propTypes = {
  onChange: propTypes.func,
  pages: propTypes.number,
  selected: propTypes.number,
  touchMode: propTypes.bool
};
Pagination.defaultProps = {
  onChange: noop,
  pages: 0,
  selected: 0,
  touchMode: false
};

var getDisplayName_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
});

var getDisplayName = unwrapExports(getDisplayName_1);

// prefix helper
var prefixUrl = function prefixUrl(url, publicUrl) {
  return url.startsWith('data:') ? url : publicUrl + url;
}; // trailing slash helper

var ensureTrailingSlash = function ensureTrailingSlash(path) {
  return path.endsWith('/') ? path : "".concat(path, "/");
};

var PublicUrlContext = React.createContext('');
var Provider = PublicUrlContext.Provider,
    Consumer = PublicUrlContext.Consumer;

var PublicUrlProvider =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(PublicUrlProvider, _React$PureComponent);

  function PublicUrlProvider() {
    classCallCheck(this, PublicUrlProvider);

    return possibleConstructorReturn(this, getPrototypeOf(PublicUrlProvider).apply(this, arguments));
  }

  createClass(PublicUrlProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          children = _this$props.children;
      return React.createElement(Provider, {
        value: url
      }, children);
    }
  }]);

  return PublicUrlProvider;
}(React.PureComponent); // HOC wrapper


defineProperty(PublicUrlProvider, "propTypes", {
  url: propTypes.string.isRequired,
  children: propTypes.node
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return React.createElement(Consumer, null, function (url) {
      return React.createElement(Component, _extends_1({}, props, {
        publicUrl: url
      }));
    });
  };

  HOC.displayName = "PublicUrlProvider(".concat(getDisplayName(Component), ")");
  return HOC;
}; // styled-components utility for URLs


var styledUrl = function styledUrl(url) {
  return function (_ref) {
    var publicUrl = _ref.publicUrl;
    return prefixUrl(url, publicUrl);
  };
};

var PublicUrl = function PublicUrl(props) {
  return React.createElement(Consumer, props);
};

PublicUrl.Provider = PublicUrlProvider;
PublicUrl.hocWrap = hocWrap;
PublicUrl.styledUrl = styledUrl;

function usePublicUrl() {
  return useContext(PublicUrlContext);
}

var spin = keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);

var _StyledSpan$1 = _styled.span.withConfig({
  displayName: "LoadingRing___StyledSpan",
  componentId: "iauf6f-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:22px;height:22px;animation-duration:1s;animation-iteration-count:infinite;animation-timing-function:linear;animation-name:", ";"], function (p) {
  return p._css;
});

var _StyledSpan2 = _styled.span.withConfig({
  displayName: "LoadingRing___StyledSpan2",
  componentId: "iauf6f-1"
})(["position:relative;width:10px;height:100%;"]);

var _StyledSpan3 = _styled.span.withConfig({
  displayName: "LoadingRing___StyledSpan3",
  componentId: "iauf6f-2"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;border:1px solid ", ";"], function (p) {
  return p._css2;
});

var LoadingRing = React.memo(function LoadingRing(_ref) {
  var paused = _ref.paused,
      props = objectWithoutProperties(_ref, ["paused"]);

  var theme = useTheme();
  return React.createElement(_StyledSpan$1, _extends_1({}, props, {
    _css: paused ? 'none' : spin
  }), React.createElement(_StyledSpan2, {
    style: {
      overflow: paused ? 'visible' : 'hidden'
    }
  }, React.createElement(_StyledSpan3, {
    _css2: theme.accent
  })));
});
LoadingRing.propTypes = {
  paused: propTypes.bool
};
LoadingRing.defaultProps = {
  paused: false
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledButtonBase$1 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Link___StyledButtonBase",
  componentId: "sc-57j27s-0"
})(["color:", ";text-decoration:", ";font-size:inherit;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Link(_ref) {
  var onClick = _ref.onClick,
      href = _ref.href,
      external = _ref.external,
      props = objectWithoutProperties(_ref, ["onClick", "href", "external"]);

  var theme = useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  return React.createElement(_StyledButtonBase$1, _extends_1({
    href: href,
    onClick: onClick,
    external: external,
    focusRingSpacing: [6, 2],
    focusRingRadius: RADIUS
  }, props, {
    _css: theme.link,
    _css2: external ? 'underline' : 'none'
  }));
}

Link.propTypes = _objectSpread$5({}, ButtonBaseWithFocus.propTypes, {
  href: propTypes.string,
  onClick: propTypes.func,
  external: propTypes.bool
});

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var bugfixes = undefined;
var applyAnimatedValues = undefined;
var colorNames = [];
var requestFrame = function requestFrame(cb) {
  return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
};
var interpolation = undefined;
var now$1 = function now() {
  return Date.now();
};
var createAnimatedStyle = undefined;
var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
  return applyAnimatedValues = {
    fn: fn,
    transform: transform
  };
};
var injectColorNames = function injectColorNames(names) {
  return colorNames = names;
};
var injectBugfixes = function injectBugfixes(fn) {
  return bugfixes = fn;
};
var injectInterpolation = function injectInterpolation(cls) {
  return interpolation = cls;
};
var injectCreateAnimatedStyle = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle = factory;
};

var Animated =
/*#__PURE__*/
function () {
  function Animated() {}

  var _proto = Animated.prototype;

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getValue = function getValue() {};

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.addChild = function addChild(child) {};

  _proto.removeChild = function removeChild(child) {};

  _proto.getChildren = function getChildren() {
    return [];
  };

  return Animated;
}();

var getValues = function getValues(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
};

var AnimatedWithChildren =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.children = [];

    _this.getChildren = function () {
      return _this.children;
    };

    _this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _assertThisInitialized$1(_assertThisInitialized$1(_this));
    };

    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return AnimatedWithChildren;
}(Animated);
var AnimatedArrayWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedArrayWithChildren, _AnimatedWithChildren);

  function AnimatedArrayWithChildren() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _AnimatedWithChildren.call.apply(_AnimatedWithChildren, [this].concat(args)) || this;
    _this2.payload = [];

    _this2.getAnimatedValue = function () {
      return _this2.getValue();
    };

    _this2.attach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.addChild(_assertThisInitialized$1(_assertThisInitialized$1(_this2)));
      });
    };

    _this2.detach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated && p.removeChild(_assertThisInitialized$1(_assertThisInitialized$1(_this2)));
      });
    };

    return _this2;
  }

  return AnimatedArrayWithChildren;
}(AnimatedWithChildren);
var AnimatedObjectWithChildren =
/*#__PURE__*/
function (_AnimatedWithChildren2) {
  _inheritsLoose(AnimatedObjectWithChildren, _AnimatedWithChildren2);

  function AnimatedObjectWithChildren() {
    var _this3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _AnimatedWithChildren2.call.apply(_AnimatedWithChildren2, [this].concat(args)) || this;
    _this3.payload = {};

    _this3.getAnimatedValue = function () {
      return _this3.getValue(true);
    };

    _this3.attach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.addChild(_assertThisInitialized$1(_assertThisInitialized$1(_this3)));
      });
    };

    _this3.detach = function () {
      return getValues(_this3.payload).forEach(function (s) {
        return s instanceof Animated && s.removeChild(_assertThisInitialized$1(_assertThisInitialized$1(_this3)));
      });
    };

    return _this3;
  }

  var _proto2 = AnimatedObjectWithChildren.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var key in this.payload) {
      var value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  return AnimatedObjectWithChildren;
}(AnimatedWithChildren);

var AnimatedStyle =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  _inheritsLoose(AnimatedStyle, _AnimatedObjectWithCh);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObjectWithChildren);

// http://www.w3.org/TR/css3-color/#svg-color
var colors$1 = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

var Interpolation =
/*#__PURE__*/
function () {
  function Interpolation() {}

  // Default config = config, args
  // Short config   = range, output, extrapolate
  Interpolation.create = function create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output: output,
      extrapolate: extra || 'extend'
    });
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];

    var easing = config.easing || function (t) {
      return t;
    };

    var extrapolateLeft = 'extend';
    var map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    var extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return function (input) {
      var range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors$1.hasOwnProperty(color)) return colors$1[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  var int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex = new RegExp("(" + Object.keys(colors$1).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex, colorToRgba);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex, colorToRgba);
  }); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
    return Interpolation.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
}

var AnimatedInterpolation =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  _inheritsLoose(AnimatedInterpolation, _AnimatedArrayWithChi);

  function AnimatedInterpolation(parents, _config, _arg) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.getValue = function () {
      var _this2;

      return (_this2 = _this).calc.apply(_this2, _this.payload.map(function (value) {
        return value.getValue();
      }));
    };

    _this.updateConfig = function (config, arg) {
      return _this.calc = Interpolation.create(config, arg);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
    };

    _this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    _this.calc = Interpolation.create(_config, _arg);
    return _this;
  }

  return AnimatedInterpolation;
}(AnimatedArrayWithChildren);

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(function (child) {
    return findAnimatedStyles(child, styles);
  });
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


var AnimatedValue =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(_value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.getValue = function () {
      return _this.value;
    };

    _this.updateStyles = function () {
      return findAnimatedStyles(_assertThisInitialized$1(_assertThisInitialized$1(_this)), _this.animatedStyles);
    };

    _this.updateValue = function (value) {
      return _this.flush(_this.value = value);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
    };

    _this.value = _value;
    _this.animatedStyles = new Set();
    _this.done = false;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    _this.lastVelocity = undefined;
    _this.lastTime = undefined;
    _this.controller = undefined;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.prepare = function prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  };

  return AnimatedValue;
}(AnimatedWithChildren);

var AnimatedArray =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  _inheritsLoose(AnimatedArray, _AnimatedArrayWithChi);

  function AnimatedArray(array) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach(function (v, i) {
          return _this.payload[i].setValue(v, flush);
        });
      } else _this.payload.forEach(function (v, i) {
        return _this.payload[i].setValue(value, flush);
      });
    };

    _this.getValue = function () {
      return _this.payload.map(function (v) {
        return v.getValue();
      });
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
    };

    _this.payload = array.map(function (n) {
      return new AnimatedValue(n);
    });
    return _this;
  }

  return AnimatedArray;
}(AnimatedArrayWithChildren);

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  var i;

  for (i in a) {
    if (!(i in b)) return false;
  }

  for (i in b) {
    if (a[i] !== b[i]) return false;
  }

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj.apply(void 0, args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
}
function getForwardProps(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      native = props.native,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      impl = props.impl,
      inject = props.inject,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      autoStart = props.autoStart,
      ref = props.ref,
      forward = _objectWithoutPropertiesLoose$1(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  var forward = getForwardProps(props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return forward[k] !== void 0 ? a : _extends({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return _extends({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  var _extends3;

  var name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, (_extends3 = {}, _extends3[name] = new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value), _extends3));
}
function convertValues(props) {
  var from = props.from,
      to = props.to,
      native = props.native;
  var allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

var check = function check(value) {
  return value === 'auto';
};

var overwrite = function overwrite(width, height) {
  return function (acc, _ref) {
    var _extends2;

    var name = _ref[0],
        value = _ref[1];
    return _extends({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
  };
};

function fixAuto(props, callback) {
  var from = props.from,
      to = props.to,
      children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  var element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  var elementStyles = element.props.style; // Return v.dom with injected ref

  return React.createElement(element.type, _extends({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: _extends({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: function ref(_ref2) {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        var node = ReactDOM.findDOMNode(_ref2);
        var width, height;
        var cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        var convert = overwrite(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
  prefixes.forEach(function (prefix) {
    return acc[prefixKey(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache = {};
injectCreateAnimatedStyle(function (style) {
  return new AnimatedStyle(style);
});
injectInterpolation(createInterpolation);
injectColorNames(colors$1);
injectBugfixes(fixAuto);
injectApplyAnimatedValues(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = _objectWithoutPropertiesLoose$1(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, function (style) {
  return style;
});

var active = false;
var controllers = new Set();

var frameLoop = function frameLoop() {
  var time = now$1();

  for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isDone = true;
    var noChange = true;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated;

        var _velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;

        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + _velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          _velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * _velocity;
            var acceleration = (force + damping) / config.mass;
            _velocity = _velocity + acceleration * 1 / 1000;
            position = position + _velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(_velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = _velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange: noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

var addController = function addController(controller) {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

var removeController = function removeController(controller) {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

var Controller =
/*#__PURE__*/
function () {
  function Controller(props, config) {
    var _this = this;

    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = function () {
      return _this.props.native ? _this.interpolations : _this.animatedProps;
    };

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  var _proto = Controller.prototype;

  _proto.update = function update(props) {
    var _this2 = this;

    this.props = _extends({}, this.props, props);

    var _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reset merged props when necessary

    var extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref3, i) {
      var name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      var entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = typeof value === 'number';
      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      var isArray = !isNumber && !isString && Array.isArray(value);
      var fromValue = from[name] !== undefined ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        var _extends2;

        _this2.hasChanged = true;
        var parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          var range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        var animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(function (value) {
          return value.prepare(_this2);
        });
        return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          changes: value,
          fromValues: toArray(parent.getValue()),
          toValues: toArray(target ? toValue.getPayload() : toValue),
          immediate: callProp(immediate, name),
          delay: withDefault(toConfig.delay, delay || 0),
          initialVelocity: withDefault(toConfig.velocity, 0),
          clamp: withDefault(toConfig.clamp, false),
          precision: withDefault(toConfig.precision, 0.01),
          tension: withDefault(toConfig.tension, 170),
          friction: withDefault(toConfig.friction, 26),
          mass: withDefault(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start.apply(this, start);
    var onEnd = start[0],
        onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  };

  _proto.start = function start(onEnd, onUpdate) {
    var _this3 = this;

    this.startTime = now$1();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(function (res) {
      return _this3.resolve = res;
    });
  };

  _proto.stop = function stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(function (a) {
      return a.changes = undefined;
    });
    this.debouncedOnEnd({
      finished: finished
    });
  };

  _proto.destroy = function destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  };

  _proto.debouncedOnEnd = function debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    var onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  };

  return Controller;
}();

var AnimatedProps =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  _inheritsLoose(AnimatedProps, _AnimatedObjectWithCh);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    _this.payload = props;
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObjectWithChildren);

function createAnimatedComponent(Component) {
  var AnimatedComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      var _this;

      _this = _React$Component.call(this) || this;

      _this.callback = function () {
        if (_this.node) {
          var didUpdate = applyAnimatedValues.fn(_this.node, _this.propsAnimated.getAnimatedValue(), _assertThisInitialized$1(_assertThisInitialized$1(_this)));
          if (didUpdate === false) _this.forceUpdate();
        }
      };

      _this.attachProps(props);

      return _this;
    }

    var _proto = AnimatedComponent.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    };

    _proto.setNativeProps = function setNativeProps(props) {
      var didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.
    ;

    _proto.attachProps = function attachProps(_ref) {
      var forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose$1(_ref, ["forwardRef"]);

      var oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
      var style = props.style,
          nextProps = _objectWithoutPropertiesLoose$1(props, ["style"]);

      var _this$props = this.props,
          currentStyle = _this$props.style,
          currentProps = _objectWithoutPropertiesLoose$1(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$propsAnimated$g = this.propsAnimated.getValue(),
          scrollTop = _this$propsAnimated$g.scrollTop,
          scrollLeft = _this$propsAnimated$g.scrollLeft,
          animatedProps = _objectWithoutPropertiesLoose$1(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React.createElement(Component, _extends({}, animatedProps, {
        ref: function ref(node) {
          return _this2.node = handleRef(node, _this2.props.forwardRef);
        }
      }));
    };

    return AnimatedComponent;
  }(React.Component);

  return React.forwardRef(function (props, ref) {
    return React.createElement(AnimatedComponent, _extends({}, props, {
      forwardRef: ref
    }));
  });
}

var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

var Spring =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Spring, _React$Component);

  function Spring() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    _this.controller = new Controller(null, null);
    _this.didUpdate = false;
    _this.didInject = false;
    _this.finished = true;

    _this.start = function () {
      _this.finished = false;
      var wasMounted = _this.mounted;

      _this.controller.start(function (props) {
        return _this.finish(_extends({}, props, {
          wasMounted: wasMounted
        }));
      }, _this.update);
    };

    _this.stop = function () {
      return _this.controller.stop(true);
    };

    _this.update = function () {
      return _this.mounted && _this.setState({
        internal: true
      });
    };

    _this.finish = function (_ref) {
      var finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      _this.finished = true;

      if (_this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (_this.props.onRest && (wasMounted || !noChange)) _this.props.onRest(_this.controller.merged); // Restore end-state

        if (_this.mounted && _this.didInject) {
          _this.afterInject = convertValues(_this.props);

          _this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (_this.mounted && (_this.didInject || _this.props.after)) _this.setState({
          internal: true
        });
        _this.didInject = false;
      }
    };

    return _this;
  }

  var _proto = Spring.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  };

  Spring.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    var from = props.from,
        to = props.to,
        reset = props.reset,
        force = props.force;
    var propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged: propsChanged,
      lastProps: props,
      internal: false
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var children = this.props.children;
    var propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      var frame = this.props.inject(this.props, function (injectProps) {
        // The inject frame has rendered, now let's update animations...
        _this2.injectProps = injectProps;

        _this2.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    var values = _extends({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = _extends({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  };

  return Spring;
}(React.Component);

Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

var Trail =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Trail, _React$PureComponent);

  function Trail() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.first = true;
    _this.instances = new Set();

    _this.hook = function (instance, index, length, reverse) {
      // Add instance to set
      _this.instances.add(instance); // Return undefined on the first index and from then on the previous instance


      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(_this.instances)[reverse ? index + 1 : index - 1];
    };

    return _this;
  }

  var _proto = Trail.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        items = _this$props.items,
        _children = _this$props.children,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        initial = _this$props.initial,
        reverse = _this$props.reverse,
        keys = _this$props.keys,
        delay = _this$props.delay,
        onRest = _this$props.onRest,
        props = _objectWithoutPropertiesLoose$1(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    var array = toArray(items);
    return toArray(array).map(function (item, i) {
      return React.createElement(Spring, _extends({
        onRest: i === 0 ? onRest : null,
        key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
        from: _this2.first && initial !== void 0 ? initial || {} : from
      }, props, {
        delay: i === 0 && delay || undefined,
        attach: function attach(instance) {
          return _this2.hook(instance, i, array.length, reverse);
        },
        children: function children(props) {
          var child = _children(item, i);

          return child ? child(props) : null;
        }
      }));
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  };

  return Trail;
}(React.PureComponent);

Trail.defaultProps = {
  keys: function keys(item) {
    return item;
  }
};

var DEFAULT = '__default';

var KeyframesImpl =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(KeyframesImpl, _React$PureComponent);

  function KeyframesImpl() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
    _this.guid = 0;
    _this.state = {
      props: {},
      resolve: function resolve() {
        return null;
      },
      last: true,
      index: 0
    };

    _this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(function (resolve) {
        _this.mounted && _this.setState(function (state) {
          return {
            props: props,
            resolve: resolve,
            last: last,
            index: index
          };
        }, function () {
          return _this.running = false;
        });
      });
    };

    return _this;
  }

  var _proto = KeyframesImpl.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  _proto.componentDidUpdate = function componentDidUpdate(previous) {
    var _this2 = this;

    var _this$props = this.props,
        states = _this$props.states,
        f = _this$props.filter,
        state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        (function () {
          var localId = ++_this2.guid;
          var slots = states[state];

          if (slots) {
            if (Array.isArray(slots)) {
              var q = Promise.resolve();

              var _loop = function _loop(i) {
                var index = i;
                var slot = slots[index];
                var last = index === slots.length - 1;
                q = q.then(function () {
                  return localId === _this2.guid && _this2.next(f(slot), last, index);
                });
              };

              for (var i = 0; i < slots.length; i++) {
                _loop(i);
              }
            } else if (typeof slots === 'function') {
              var index = 0;
              slots( // next
              function (props, last) {
                if (last === void 0) {
                  last = false;
                }

                return localId === _this2.guid && _this2.next(f(props), last, index++);
              }, // cancel
              function () {
                return requestFrame(function () {
                  return _this2.instance && _this2.instance.stop();
                });
              }, // ownprops
              _this2.props);
            } else {
              _this2.next(f(states[state]));
            }
          }
        })();
      }
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$state = this.state,
        props = _this$state.props,
        resolve = _this$state.resolve,
        last = _this$state.last,
        index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    var _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose$1(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return React.createElement(Component, _extends({
      ref: function ref(_ref) {
        return _this3.instance = handleRef(_ref, forwardRef);
      },
      config: config
    }, rest, props, {
      onRest: function onRest(args) {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  };

  return KeyframesImpl;
}(React.PureComponent);

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
var Keyframes = React.forwardRef(function (props, ref) {
  return React.createElement(KeyframesImpl, _extends({}, props, {
    forwardRef: ref
  }));
});

Keyframes.create = function (primitive) {
  return function (states, filter) {
    var _states;

    if (filter === void 0) {
      filter = function filter(states) {
        return states;
      };
    }

    if (typeof states === 'function' || Array.isArray(states)) states = (_states = {}, _states[DEFAULT] = states, _states);
    return function (props) {
      return React.createElement(KeyframesImpl, _extends({
        primitive: primitive,
        states: states,
        filter: filter
      }, props));
    };
  };
};

Keyframes.Spring = function (states) {
  return Keyframes.create(Spring)(states, interpolateTo);
};

Keyframes.Trail = function (states) {
  return Keyframes.create(Trail)(states, interpolateTo);
};

var guid = 0;

var get = function get(props) {
  var items = props.items,
      keys = props.keys,
      rest = _objectWithoutPropertiesLoose$1(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return _extends({
    items: items,
    keys: keys.map(function (key) {
      return String(key);
    })
  }, rest);
};

var Transition =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Transition, _React$PureComponent);

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  function Transition(prevProps) {
    var _this;

    _this = _React$PureComponent.call(this, prevProps) || this;

    _this.destroyItem = function (item, key, state) {
      return function (values) {
        var _this$props = _this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

        if (_this.mounted) {
          onDestroyed && onDestroyed(item);

          _this.setState(function (_ref) {
            var deleted = _ref.deleted;
            return {
              deleted: deleted.filter(function (t) {
                return t.key !== key;
              })
            };
          });

          onRest && onRest(item, state, values);
        }
      };
    };

    _this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps: prevProps
    };
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
    var first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = _objectWithoutPropertiesLoose$1(_ref2, ["first", "prevProps"]);

    var _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    var _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    var current = _extends({}, state.current);

    var deleted = [].concat(state.deleted); // Compare next keys with current keys

    var currentKeys = Object.keys(current);
    var currentSet = new Set(currentKeys);
    var nextSet = new Set(keys);
    var added = keys.filter(function (item) {
      return !currentSet.has(item);
    });
    var removed = state.transitions.filter(function (item) {
      return !item.destroyed && !nextSet.has(item.originalKey);
    }).map(function (i) {
      return i.originalKey;
    });
    var updated = keys.filter(function (item) {
      return currentSet.has(item);
    });
    var delay = 0;
    added.forEach(function (key) {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(function (d) {
        return d.originalKey === key;
      })) deleted = deleted.filter(function (t) {
        return t.originalKey !== key;
      });
      var keyIndex = keys.indexOf(key);
      var item = items[keyIndex];
      var state = 'enter';
      current[key] = {
        state: state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item: item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(function (key) {
      var keyIndex = _keys.indexOf(key);

      var item = _items[keyIndex];
      var state = 'leave';
      deleted.push(_extends({}, current[key], {
        state: state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(function (key) {
      var keyIndex = keys.indexOf(key);
      var item = items[keyIndex];
      var state = 'update';
      current[key] = _extends({}, current[key], {
        item: item,
        state: state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    var out = keys.map(function (key) {
      return current[key];
    });
    deleted.forEach(function (_ref3) {
      var left = _ref3.left,
          right = _ref3.right,
          transition = _objectWithoutPropertiesLoose$1(_ref3, ["left", "right"]);

      var pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(function (t) {
        return t.originalKey === left;
      })) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(function (t) {
        return t.originalKey === right;
      }); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(function (t) {
        return t.originalKey === left;
      }); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(function (t) {
        return t.originalKey === right;
      }); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [].concat(out.slice(0, pos), [transition], out.slice(pos));
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current: current,
      deleted: deleted,
      prevProps: props
    };
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        initial = _this$props2.initial,
        _this$props2$from = _this$props2.from,
        _this$props2$enter = _this$props2.enter,
        _this$props2$leave = _this$props2.leave,
        _this$props2$update = _this$props2.update,
        onDestroyed = _this$props2.onDestroyed,
        keys = _this$props2.keys,
        items = _this$props2.items,
        onFrame = _this$props2.onFrame,
        onRest = _this$props2.onRest,
        onStart = _this$props2.onStart,
        trail = _this$props2.trail,
        config = _this$props2.config,
        _children = _this$props2.children,
        unique = _this$props2.unique,
        reset = _this$props2.reset,
        extra = _objectWithoutPropertiesLoose$1(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map(function (_ref4, i) {
      var _ref5;

      var state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return React.createElement(Keyframes, _extends({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: (_ref5 = {}, _ref5[state] = to, _ref5),
        key: key,
        onRest: destroyed ? _this2.destroyItem(item, key, state) : onRest && function (values) {
          return onRest(item, state, values);
        },
        onStart: onStart && function () {
          return onStart(item, state);
        },
        onFrame: onFrame && function (values) {
          return onFrame(item, state, values);
        },
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: function children(props) {
          var child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  };

  return Transition;
}(React.PureComponent);

Transition.defaultProps = {
  keys: function keys(item) {
    return item;
  },
  unique: false,
  reset: false
};

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var extendedAnimated = domElements.reduce(function (acc, element) {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);

var SIZE = 18;
var CHECKBOX_RADIUS = 2;
var RADIO_BULLET_SIZE = 10;

var _StyledAnimatedSpan = _styled(extendedAnimated.span).withConfig({
  displayName: "Checkbox___StyledAnimatedSpan",
  componentId: "sc-1avgrx5-0"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transform-origin:50% 50%;"]);

var _StyledButton$1 = _styled.button.withConfig({
  displayName: "Checkbox___StyledButton",
  componentId: "sc-1avgrx5-1"
})(["display:inline-flex;position:relative;width:", "px;height:", "px;margin:", "px;padding:0;background:", ";border:1px solid ", ";border-radius:", ";outline:0;&::-moz-focus-inner{border:0;}", ";"], SIZE, SIZE, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan$2 = _styled.span.withConfig({
  displayName: "Checkbox___StyledSpan",
  componentId: "sc-1avgrx5-2"
})(["position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;border:2px solid ", ";border-radius:", ";display:none;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Checkbox, _React$PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "_element", React.createRef());

    defineProperty(assertThisInitialized(_this), "handleClick", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          checked = _this$props.checked,
          indeterminate = _this$props.indeterminate;
      onChange(indeterminate ? false : !checked);
    });

    defineProperty(assertThisInitialized(_this), "focus", function () {
      _this._element.current.focus();
    });

    return _this;
  }

  createClass(Checkbox, [{
    key: "getAriaChecked",
    value: function getAriaChecked() {
      var _this$props2 = this.props,
          checked = _this$props2.checked,
          indeterminate = _this$props2.indeterminate;
      if (indeterminate) return 'mixed';
      if (checked) return 'true';
      return 'false';
    }
  }, {
    key: "renderCheck",
    value: function renderCheck(visible, Icon) {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          theme = _this$props3.theme;
      return React.createElement(Spring, {
        from: {
          progress: 0
        },
        to: {
          progress: Number(visible)
        },
        config: springs.instant,
        native: true
      }, function (_ref) {
        var progress = _ref.progress;
        return React.createElement(_StyledAnimatedSpan, {
          style: {
            opacity: progress,
            transform: progress.interpolate(function (v) {
              return "scale(".concat(v, ")");
            })
          }
        }, React.createElement(Icon, {
          color: disabled ? theme.selectedDisabled : theme.selected
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          checked = _this$props4.checked,
          disabled = _this$props4.disabled,
          indeterminate = _this$props4.indeterminate,
          tabIndex = _this$props4.tabIndex,
          theme = _this$props4.theme,
          variant = _this$props4.variant,
          props = objectWithoutProperties(_this$props4, ["checked", "disabled", "indeterminate", "tabIndex", "theme", "variant"]);

      return React.createElement(FocusVisible, null, function (_ref2) {
        var focusVisible = _ref2.focusVisible,
            onFocus = _ref2.onFocus;
        return React.createElement(_StyledButton$1, _extends_1({
          type: "button",
          ref: _this2._element,
          role: variant,
          tabIndex: tabIndex,
          "aria-checked": _this2.getAriaChecked(),
          onClick: _this2.handleClick,
          onFocus: onFocus,
          disabled: disabled
        }, props, {
          _css: 0.5 * GU,
          _css2: disabled ? theme.controlDisabled : theme.control,
          _css3: theme.controlBorder,
          _css4: variant === 'radio' ? '50%' : "".concat(CHECKBOX_RADIUS, "px"),
          _css5: !disabled ? "\n                    cursor: pointer;\n                    &:active {\n                      border-color: ".concat(theme.controlBorderPressed, ";\n                    }\n                    &:focus .focus-ring {\n                      display: ").concat(focusVisible ? 'block' : 'none', ";\n                    }\n                  ") : ''
        }), variant === 'checkbox' && _this2.renderCheck(checked && !indeterminate, Check), variant === 'checkbox' && _this2.renderCheck(indeterminate, Dash), variant === 'radio' && _this2.renderCheck(checked, Bullet), React.createElement(_StyledSpan$2, {
          className: "focus-ring",
          _css6: theme.focus,
          _css7: variant === 'radio' ? '50%' : "".concat(RADIUS, "px")
        }));
      });
    }
  }]);

  return Checkbox;
}(React.PureComponent);
/* eslint-disable react/prop-types */


defineProperty(Checkbox, "propTypes", {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  indeterminate: propTypes.bool,
  onChange: propTypes.func,
  tabIndex: propTypes.string,
  theme: propTypes.object,
  variant: propTypes.oneOf(['checkbox', 'radio'])
});

defineProperty(Checkbox, "defaultProps", {
  checked: false,
  disabled: false,
  indeterminate: false,
  onChange: noop,
  tabIndex: '0',
  variant: 'checkbox'
});

var Dash = function Dash(_ref3) {
  var color = _ref3.color;
  return (
    /* Use SVG to have subpixels (strokeWidth="1.5") on Chrome */
    React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, React.createElement("line", {
      x1: "3",
      y1: "7",
      x2: "11",
      y2: "7",
      stroke: color,
      strokeWidth: "1.5"
    }))
  );
};

var Check = function Check(_ref4) {
  var color = _ref4.color;
  return React.createElement("svg", {
    width: "12",
    height: "8",
    viewBox: "0 0 12 8"
  }, React.createElement("path", {
    d: "\n        M11.059 1.393\n        L4.335  7.395\n        L0.944  3.260\n        L2.104  2.309\n        L4.503  5.234\n        L10.060 0.274\n        L11.059 1.393\n        Z\n      ",
    fill: color
  }));
};

var _StyledSpan2$1 = _styled.span.withConfig({
  displayName: "Checkbox___StyledSpan2",
  componentId: "sc-1avgrx5-3"
})(["display:block;width:", "px;height:", "px;border-radius:50%;background:", ";"], RADIO_BULLET_SIZE, RADIO_BULLET_SIZE, function (p) {
  return p._css8;
});

var Bullet = function Bullet(_ref5) {
  var color = _ref5.color;
  return React.createElement(_StyledSpan2$1, {
    _css8: color
  });
};

var CheckBoxWithTheme = React.forwardRef(function (props, ref) {
  var theme = useTheme();
  return React.createElement(Checkbox, _extends_1({
    theme: theme,
    ref: ref
  }, props));
});

// See src/icons/icon-size.js for the corresponding icon sizes.

var SIZE_STYLES = {
  medium: {
    textStyleName: 'body2',
    height: 5 * GU,
    padding: 3 * GU,
    iconPadding: 2 * GU,
    minWidth: 14.5 * GU,
    middleSpace: 1 * GU
  },
  small: {
    textStyleName: 'body2',
    height: 4 * GU,
    padding: 2 * GU,
    iconPadding: 1.5 * GU,
    minWidth: 13 * GU,
    middleSpace: 1 * GU
  },
  mini: {
    textStyleName: 'body4',
    height: 3 * GU,
    padding: 1.5 * GU,
    iconPadding: 1 * GU,
    minWidth: 9.25 * GU,
    middleSpace: 0.5 * GU
  }
};

function getPadding(size, displayIcon, displayLabel) {
  var _SIZE_STYLES$size = SIZE_STYLES[size],
      padding = _SIZE_STYLES$size.padding,
      iconPadding = _SIZE_STYLES$size.iconPadding;

  if (displayIcon && !displayLabel) {
    return '0';
  }

  if (displayIcon && displayLabel) {
    return "0 ".concat(padding, "px 0 ").concat(iconPadding, "px");
  }

  return "0 ".concat(padding, "px");
}

function getWidth(size, displayIconOnly, wide) {
  var height = SIZE_STYLES[size].height;

  if (wide) {
    return '100%';
  }

  if (displayIconOnly) {
    return "".concat(height, "px");
  }

  return 'auto';
}

function getMinWidth(size, displayLabelOnly) {
  var minWidth = SIZE_STYLES[size].minWidth;
  return displayLabelOnly ? "".concat(minWidth, "px") : '0';
} // CSS styles related to the current size


function sizeStyles(size, wide, displayIcon, displayLabel) {
  var _SIZE_STYLES$size2 = SIZE_STYLES[size],
      height = _SIZE_STYLES$size2.height,
      textStyleName = _SIZE_STYLES$size2.textStyleName,
      middleSpace = _SIZE_STYLES$size2.middleSpace;
  return {
    height: "".concat(height, "px"),
    middleSpace: displayIcon && displayLabel ? "".concat(middleSpace, "px") : '0',
    minWidth: getMinWidth(size, !displayIcon && displayLabel),
    padding: getPadding(size, displayIcon, displayLabel),
    textStyleCss: textStyle(textStyleName),
    width: getWidth(size, displayIcon && !displayLabel, wide)
  };
} // CSS styles related to the current mode


function modeStyles(theme, mode, disabled) {
  if (disabled) {
    return {
      background: theme.disabled,
      color: theme.disabledContent,
      iconColor: theme.disabledContent,
      border: '0'
    };
  }

  if (mode === 'strong') {
    return {
      background: "\n        linear-gradient(\n          130deg,\n          ".concat(theme.accentStart, ",\n          ").concat(theme.accentEnd, "\n        )\n      "),
      color: theme.accentContent,
      iconColor: theme.accentContent,
      border: '0'
    };
  }

  if (mode === 'positive') {
    return {
      background: theme.positive,
      color: theme.positiveContent,
      iconColor: theme.positiveContent,
      border: '0'
    };
  }

  if (mode === 'negative') {
    return {
      background: theme.negative,
      color: theme.negativeContent,
      iconColor: theme.negativeContent,
      border: '0'
    };
  }

  return {
    background: theme.surfaceInteractive,
    color: theme.surfaceContent,
    iconColor: theme.surfaceIcon,
    border: "1px solid ".concat(theme.border)
  };
}

var _StyledButtonBase$2 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Button___StyledButtonBase",
  componentId: "sc-8npd5h-0"
})(["display:", ";align-items:center;justify-content:center;width:", ";height:", ";min-width:", ";padding:", ";", ";", ";background:", ";color:", ";white-space:nowrap;border:", ";box-shadow:", ";transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:", ";box-shadow:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, unselectable, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var _StyledSpan$3 = _styled.span.withConfig({
  displayName: "Button___StyledSpan",
  componentId: "sc-8npd5h-1"
})(["position:relative;top:-1px;display:flex;color:", ";margin-right:", ";"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      display = _ref.display,
      icon = _ref.icon,
      iconOnly = _ref.iconOnly,
      innerRef = _ref.innerRef,
      label = _ref.label,
      mode = _ref.mode,
      size = _ref.size,
      wide = _ref.wide,
      props = objectWithoutProperties(_ref, ["children", "disabled", "display", "icon", "iconOnly", "innerRef", "label", "mode", "size", "wide"]);

  // backward compatibility and deprecated props
  if (iconOnly) {
    warnOnce('Button:iconOnly', 'Button: "iconOnly" is deprecated, please use "display".');
    display = 'icon';
  }

  if (mode === 'outline' || mode === 'secondary') {
    warnOnce('Button:mode', "Button: the mode \"".concat(mode, "\" is deprecated, please use \"normal\"."));
    mode = 'normal';
  }

  if (size === 'normal' || size === 'large') {
    warnOnce('Button:size', "Button: the size \"".concat(size, "\" is deprecated, please use \"medium\"."));
    size = 'medium';
  } // prop warnings


  if (display === 'icon' && !icon) {
    warn('Button: the display "icon" was used without providing an icon.');
  }

  if (!children && !label) {
    warn('Button: please provide a label.');
  }

  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = useInside('EmptyStateCard'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideEmptyStateCard = _useInside2[0];

  var _useInside3 = useInside('Header:secondary'),
      _useInside4 = slicedToArray(_useInside3, 1),
      insideHeaderSecondary = _useInside4[0]; // Always wide + strong when used as an empty state card action


  if (insideEmptyStateCard) {
    mode = 'strong';
    wide = true;
  } // Alternate between icon and label automatically when used in Header


  if (insideHeaderSecondary && display === 'auto' && icon && label) {
    display = layoutName === 'small' ? 'icon' : 'label';
  } // Otherwise, display both


  if (display === 'auto') {
    display = 'all';
  }

  var displayIcon = icon && (display === 'all' || display === 'icon');
  var displayLabel = label && (display === 'all' || display === 'label'); // Mode styles

  var _useMemo = useMemo(function () {
    return modeStyles(theme, mode, disabled);
  }, [mode, theme, disabled]),
      background = _useMemo.background,
      color = _useMemo.color,
      iconColor = _useMemo.iconColor,
      border = _useMemo.border; // Size styles


  var _useMemo2 = useMemo(function () {
    return sizeStyles(size, wide, displayIcon, displayLabel);
  }, [size, wide, displayIcon, displayLabel]),
      height = _useMemo2.height,
      middleSpace = _useMemo2.middleSpace,
      minWidth = _useMemo2.minWidth,
      padding = _useMemo2.padding,
      textStyleCss = _useMemo2.textStyleCss,
      width = _useMemo2.width; // Use the label as a title when only the icon is displayed


  if (displayIcon && !displayLabel && label && typeof label === 'string') {
    props.title = label;
  }

  var insideData = {
    size: size
  };
  return React.createElement(_StyledButtonBase$2, _extends_1({
    ref: innerRef,
    focusRingSpacing: border === '0' ? 0 : 1,
    focusRingRadius: RADIUS,
    disabled: disabled
  }, props, {
    _css: wide ? 'flex' : 'inline-flex',
    _css2: width,
    _css3: height,
    _css4: minWidth,
    _css5: padding,
    _css6: textStyleCss,
    _css7: background,
    _css8: color,
    _css9: border,
    _css10: disabled ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.1)',
    _css11: disabled ? 'none' : 'translateY(1px)',
    _css12: disabled ? 'none' : '0px 1px 2px rgba(0, 0, 0, 0.08)'
  }), React.createElement(Inside, {
    name: "Button",
    data: insideData
  }, children || React.createElement(React.Fragment, null, displayIcon && React.createElement(Inside, {
    name: "Button:icon",
    data: insideData
  }, React.createElement(_StyledSpan$3, {
    _css13: iconColor,
    _css14: middleSpace
  }, icon)), displayLabel && React.createElement(Inside, {
    name: "Button:label",
    data: insideData
  }, label))));
}

Button.propTypes = {
  children: propTypes.node,
  disabled: propTypes.bool,
  display: propTypes.oneOf(['auto', 'all', 'icon', 'label']),
  icon: propTypes.node,
  innerRef: propTypes.any,
  label: propTypes.string,
  mode: propTypes.oneOf(['normal', 'strong', 'positive', 'negative', // deprecated
  'outline', 'secondary', 'text']),
  size: propTypes.oneOf(['medium', 'small', 'mini', // deprecated
  'large', 'normal']),
  wide: propTypes.bool,
  // deprecated
  iconOnly: propTypes.bool
};
Button.defaultProps = {
  disabled: false,
  display: 'auto',
  mode: 'normal',
  size: 'medium',
  wide: false
};
var ButtonWithRef = React.forwardRef(function (props, ref) {
  return React.createElement(Button, _extends_1({
    innerRef: ref
  }, props));
});
ButtonWithRef.Anchor = React.forwardRef(function (props, ref) {
  warnOnce('Button.Anchor', 'Button.Anchor is deprecated: please use Button with a href prop instead.');
  return React.createElement(ButtonWithRef, _extends_1({
    ref: ref
  }, props));
});

var _StyledButtonBase$3 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ButtonIcon___StyledButtonBase",
  componentId: "sc-1e3i514-0"
})(["display:inline-flex;justify-content:center;align-items:center;width:", "px;height:", "px;&:active{background:rgba(220,234,239,0.3);}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function ButtonIcon(_ref) {
  var label = _ref.label,
      children = _ref.children,
      mode = _ref.mode,
      props = objectWithoutProperties(_ref, ["label", "children", "mode"]);

  if (mode !== undefined) {
    warnOnce('ButtonIcon:mode', 'ButtonIcon: the mode prop is deprecated. Please use Button with the icon prop instead.');
  }

  if (mode === 'button') {
    return React.createElement(ButtonWithRef, _extends_1({
      label: label,
      icon: children,
      display: "icon"
    }, props));
  }

  return React.createElement(_StyledButtonBase$3, _extends_1({
    title: label
  }, props, {
    _css: 4 * GU,
    _css2: 4 * GU
  }), children);
}

ButtonIcon.propTypes = {
  label: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  // deprecated
  mode: propTypes.oneOf(['button'])
};

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1fkpeh6-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], function (p) {
  return p._css;
});

var _StyledDiv$5 = _styled.div.withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1fkpeh6-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2$2 = _styled.div.withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1fkpeh6-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function ToggleButton(_ref) {
  var onClick = _ref.onClick,
      opened = _ref.opened;
  var theme = useTheme();
  return React.createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: RADIUS,
    onClick: onClick,
    _css: theme.surfaceContentSecondary
  }, React.createElement(_StyledDiv$5, {
    _css2: opened ? 1 : 0,
    _css3: opened ? 1 : 0
  }, React.createElement(IconUp, {
    size: "small"
  })), React.createElement(_StyledDiv2$2, {
    _css4: opened ? -1 : 0,
    _css5: opened ? -1 : 0
  }, React.createElement(IconDown, {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: propTypes.func.isRequired,
  opened: propTypes.bool.isRequired
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledAnimatedDiv = _styled(extendedAnimated.div).withConfig({
  displayName: "OpenedSurfaceBorder___StyledAnimatedDiv",
  componentId: "sc-19tx70h-0"
})(["position:absolute;top:0;left:0;height:100%;width:3px;background:", ";transform-origin:0 0;"], function (p) {
  return p._css;
});

function OpenedSurfaceBorder(_ref) {
  var opened = _ref.opened,
      props = objectWithoutProperties(_ref, ["opened"]);

  var theme = useTheme();
  return React.createElement(Spring, {
    native: true,
    from: {
      width: 0
    },
    to: {
      width: Number(opened)
    },
    config: _objectSpread$6({}, springs.smooth)
  }, function (_ref2) {
    var width = _ref2.width;
    return React.createElement(_StyledAnimatedDiv, _extends_1({
      style: {
        transform: width.interpolate(function (v) {
          return "scale3d(".concat(v, ", 1, 1)");
        })
      }
    }, props, {
      _css: theme.surfaceOpened
    }));
  });
}

OpenedSurfaceBorder.propTypes = {
  opened: propTypes.bool
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function headingsFromFields(fields, _ref) {
  var hasAnyActions = _ref.hasAnyActions,
      hasAnyExpansion = _ref.hasAnyExpansion,
      selectContent = _ref.selectContent,
      selectable = _ref.selectable;
  var cells = fields.map(function (field, index) {
    return [field.label, field.align === 'end' ? 'right' : 'left'];
  });

  if (hasAnyExpansion || selectable) {
    cells.unshift([selectable ? selectContent : null, 'left']);
  }

  if (hasAnyActions) {
    cells.push([null, 'left']);
  } // Return null if all the fields are empty


  if (cells.every(function (cell) {
    return !cell[0];
  })) {
    return null;
  }

  return cells;
}

function cellsFromEntry(entry, _ref2) {
  var fields = _ref2.fields,
      hasAnyActions = _ref2.hasAnyActions,
      hasAnyExpansion = _ref2.hasAnyExpansion,
      hasExpansion = _ref2.hasExpansion,
      selectContent = _ref2.selectContent,
      selectable = _ref2.selectable,
      toggleChildContent = _ref2.toggleChildContent;
  var cells = entry.entryNodes.map(function (content, index) {
    return [content, fields[index].align, false];
  }); // Checkbox

  if (selectable) {
    cells.unshift([selectContent, 'start', true]);
  } // Toggle child


  if (!selectable && hasAnyExpansion) {
    cells.unshift([hasExpansion && toggleChildContent, 'start', true]);
  } // Actions


  if (hasAnyActions) {
    cells.push([entry.actions, 'end', true]);
  }

  return cells;
}

var _StyledTable = _styled.table.withConfig({
  displayName: "TableView___StyledTable",
  componentId: "aczwu3-0"
})(["width:100%;border-spacing:0;border-collapse:separate;"]);

function TableView(_ref3) {
  var alignChildOnField = _ref3.alignChildOnField,
      allSelected = _ref3.allSelected,
      entries = _ref3.entries,
      fields = _ref3.fields,
      hasAnyActions = _ref3.hasAnyActions,
      hasAnyExpansion = _ref3.hasAnyExpansion,
      onSelect = _ref3.onSelect,
      onSelectAll = _ref3.onSelectAll,
      renderSelectionCount = _ref3.renderSelectionCount,
      rowHeight = _ref3.rowHeight,
      selectable = _ref3.selectable,
      selectedCount = _ref3.selectedCount;

  var _useState = useState(-1),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var toggleEntry = useCallback(function (index) {
    setOpened(function (opened) {
      return opened === index ? -1 : index;
    });
  }, []);
  var headCells = useMemo(function () {
    return headingsFromFields(fields, {
      hasAnyActions: hasAnyActions,
      hasAnyExpansion: hasAnyExpansion,
      selectContent: React.createElement(CheckBoxWithTheme, {
        indeterminate: allSelected === 0,
        checked: allSelected > -1,
        onChange: onSelectAll
      }),
      selectable: selectable
    });
  }, [fields, hasAnyActions, hasAnyExpansion, allSelected, onSelectAll, selectable]);
  useEffect(function () {
    setOpened(-1);
  }, [entries, fields]);
  return React.createElement(_StyledTable, null, headCells && React.createElement("thead", null, React.createElement(HeadRow, {
    cells: headCells,
    selectedCount: selectedCount,
    renderSelectionCount: renderSelectionCount
  })), React.createElement("tbody", null, entries.map(function (entry, index) {
    return React.createElement(Entry, {
      key: entry.index,
      alignChildOnField: alignChildOnField,
      entry: entry,
      fields: fields,
      firstRow: index === 0,
      hasAnyActions: hasAnyActions,
      hasAnyExpansion: hasAnyExpansion,
      onSelect: onSelect,
      onToggle: toggleEntry,
      opened: opened === entry.index,
      rowHeight: rowHeight,
      selectable: selectable
    });
  })));
}

TableView.propTypes = {
  alignChildOnField: propTypes.number.isRequired,
  allSelected: propTypes.oneOf([-1, 0, 1]).isRequired,
  entries: propTypes.array.isRequired,
  fields: propTypes.array.isRequired,
  hasAnyActions: propTypes.bool.isRequired,
  hasAnyExpansion: propTypes.bool.isRequired,
  onSelect: propTypes.func.isRequired,
  onSelectAll: propTypes.func.isRequired,
  renderSelectionCount: propTypes.func.isRequired,
  rowHeight: propTypes.number.isRequired,
  selectable: propTypes.bool.isRequired,
  selectedCount: propTypes.number.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

function useSidePadding() {
  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  return layoutName === 'small' ? 2 * GU : 3 * GU;
}

var _StyledTh = _styled.th.withConfig({
  displayName: "TableView___StyledTh",
  componentId: "aczwu3-1"
})(["height:", "px;padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";", ";color:", ";border-bottom:1px solid ", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

function HeadRow(_ref4) {
  var cells = _ref4.cells,
      selectedCount = _ref4.selectedCount,
      renderSelectionCount = _ref4.renderSelectionCount;
  var theme = useTheme();
  var sidePadding = useSidePadding();
  return React.createElement("tr", null, cells.map(function (cell, index) {
    var hidden = selectedCount > 0 && index > 1;
    var content = selectedCount > 0 && index === 1 ? renderSelectionCount(selectedCount) : cell[0];
    return !hidden && React.createElement(_StyledTh, {
      key: index,
      colSpan: selectedCount > 0 && index === 1 ? cells.length - 1 : 1,
      _css: 4 * GU,
      _css2: index === 0 ? sidePadding : 0,
      _css3: index === cells.length - 1 ? sidePadding : 0,
      _css4: cell[1],
      _css5: textStyle('label2'),
      _css6: theme.surfaceContentSecondary,
      _css7: theme.border
    }, content);
  }));
}

var Entry = React.memo(function Entry(_ref5) {
  var alignChildOnField = _ref5.alignChildOnField,
      entry = _ref5.entry,
      fields = _ref5.fields,
      firstRow = _ref5.firstRow,
      hasAnyActions = _ref5.hasAnyActions,
      hasAnyExpansion = _ref5.hasAnyExpansion,
      onSelect = _ref5.onSelect,
      onToggle = _ref5.onToggle,
      opened = _ref5.opened,
      rowHeight = _ref5.rowHeight,
      selectable = _ref5.selectable;
  var hasExpansion = entry.expansion.content.length > 0;
  var entryIndex = entry.index;
  var handleToggle = useCallback(function () {
    onToggle(entryIndex);
  }, [entryIndex, onToggle]);
  var handleSelectChange = useCallback(function (check) {
    onSelect(entryIndex, check);
  }, [entryIndex, onSelect]);
  var cells = cellsFromEntry(entry, {
    fields: fields,
    hasAnyActions: hasAnyActions,
    hasAnyExpansion: hasAnyExpansion,
    hasExpansion: hasExpansion,
    selectable: selectable,
    toggleChildContent: hasAnyExpansion ? React.createElement(Toggle, {
      opened: opened,
      onToggle: handleToggle
    }) : null,
    selectContent: selectable ? React.createElement(CheckBoxWithTheme, {
      onChange: handleSelectChange,
      checked: entry.selected
    }) : null
  });
  return React.createElement(React.Fragment, null, React.createElement(EntryRow, {
    cells: cells,
    firstRow: firstRow,
    rowHeight: rowHeight,
    selected: entry.selected
  }), hasExpansion && React.createElement(EntryExpansion, {
    alignChildOnCell: alignChildOnField + 1,
    cellsCount: cells.length,
    expansion: entry.expansion,
    opened: opened,
    rowHeight: rowHeight
  }));
});

var _StyledTr = _styled.tr.withConfig({
  displayName: "TableView___StyledTr",
  componentId: "aczwu3-2"
})(["transition:background 150ms ease-in-out;background:", ";"], function (p) {
  return p._css8;
});

var _StyledTd = _styled.td.withConfig({
  displayName: "TableView___StyledTd",
  componentId: "aczwu3-3"
})(["position:relative;width:", ";height:", "px;padding-top:0;padding-bottom:0;padding-left:", "px;padding-right:", "px;border-top:", ";"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

var _StyledDiv$6 = _styled.div.withConfig({
  displayName: "TableView___StyledDiv",
  componentId: "aczwu3-4"
})(["display:flex;width:100%;justify-content:", ";"], function (p) {
  return p._css14;
});

function EntryRow(_ref6) {
  var firstRow = _ref6.firstRow,
      cells = _ref6.cells,
      selected = _ref6.selected,
      rowHeight = _ref6.rowHeight,
      mode = _ref6.mode;
  var theme = useTheme();
  var sidePadding = useSidePadding();
  return React.createElement(_StyledTr, {
    _css8: selected ? theme.surfaceSelected : 'none'
  }, cells.map(function (_ref7, index, cells) {
    var _ref8 = slicedToArray(_ref7, 3),
        content = _ref8[0],
        align = _ref8[1],
        compact = _ref8[2];

    var first = index === 0;
    var last = index === cells.length - 1;
    return React.createElement(_StyledTd, {
      key: index,
      _css9: compact ? '1px' // For some reason Blink tends to make 0 grow but not 1px
      : 'auto',
      _css10: rowHeight,
      _css11: first || compact ? sidePadding : 0,
      _css12: !first && (align !== 'end' || last) || compact ? sidePadding : 0,
      _css13: firstRow ? '0' : "1px solid ".concat(theme.border)
    }, React.createElement(_StyledDiv$6, {
      _css14: "flex-".concat(align)
    }, content));
  }));
}

var _StyledTr2 = _styled.tr.withConfig({
  displayName: "TableView___StyledTr2",
  componentId: "aczwu3-5"
})(["td{position:relative;padding:0;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);background:", ";}"], function (p) {
  return p._css15;
});

var _StyledAnimatedDiv$1 = _styled(extendedAnimated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv",
  componentId: "aczwu3-6"
})(["overflow:hidden"]);

var _StyledDiv2$3 = _styled.div.withConfig({
  displayName: "TableView___StyledDiv2",
  componentId: "aczwu3-7"
})(["height:", ";border-top:1px solid ", ";"], function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
});

var _StyledAnimatedDiv2 = _styled(extendedAnimated.div).withConfig({
  displayName: "TableView___StyledAnimatedDiv2",
  componentId: "aczwu3-8"
})(["overflow:hidden"]);

var _StyledDiv3$1 = _styled.div.withConfig({
  displayName: "TableView___StyledDiv3",
  componentId: "aczwu3-9"
})(["display:flex;align-items:center;height:", ";padding-left:", "px;padding-right:", "px;border-top:1px solid ", ";"], function (p) {
  return p._css18;
}, function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
}, function (p) {
  return p._css21;
});

function EntryExpansion(_ref9) {
  var alignChildOnCell = _ref9.alignChildOnCell,
      cellsCount = _ref9.cellsCount,
      expansion = _ref9.expansion,
      opened = _ref9.opened,
      rowHeight = _ref9.rowHeight;
  var theme = useTheme(); // Handles the height of the expansion in free layout mode

  var _useState3 = useState(0),
      _useState4 = slicedToArray(_useState3, 2),
      freeLayoutContentHeight = _useState4[0],
      setFreeLayoutContentHeight = _useState4[1];

  var handleFreeLayoutContentRef = useCallback(function (element) {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  var height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return React.createElement(Transition, {
    native: true,
    unique: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height: height
    },
    update: {
      height: height
    },
    leave: {
      height: 0
    },
    config: _objectSpread$7({}, springs.smooth, {
      precision: 0.1
    })
  }, function (show) {
    return show && function (_ref10) {
      var height = _ref10.height;
      return React.createElement(_StyledTr2, {
        _css15: theme.surfaceUnder
      }, alignChildOnCell > 0 && React.createElement("td", {
        colSpan: alignChildOnCell
      }, React.createElement(OpenedSurfaceBorder, {
        opened: opened
      }), React.createElement(_StyledAnimatedDiv$1, {
        style: {
          height: height
        }
      }, expansion.content.map(function (child, i) {
        return React.createElement(_StyledDiv2$3, {
          key: i,
          _css16: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css17: theme.border
        });
      }))), React.createElement("td", {
        colSpan: alignChildOnCell === -1 ? cellsCount : cellsCount - alignChildOnCell
      }, React.createElement(_StyledAnimatedDiv2, {
        style: {
          height: height
        }
      }, expansion.content.map(function (child, i) {
        return React.createElement(_StyledDiv3$1, {
          key: i,
          ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
          _css18: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css19: alignChildOnCell < 1 ? 3 * GU : 0,
          _css20: 3 * GU,
          _css21: theme.border
        }, child);
      }))));
    };
  });
}

var _StyledDiv4$1 = _styled.div.withConfig({
  displayName: "TableView___StyledDiv4",
  componentId: "aczwu3-10"
})(["width:100%;height:100%;"]);

var Toggle = React.memo(function Toggle(_ref11) {
  var opened = _ref11.opened,
      onToggle = _ref11.onToggle;
  return React.createElement(_StyledDiv4$1, null, React.createElement(OpenedSurfaceBorder, {
    opened: opened
  }), React.createElement(ToggleButton, {
    opened: opened,
    onClick: onToggle
  }));
});

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledDiv$7 = _styled.div.withConfig({
  displayName: "ListView___StyledDiv",
  componentId: "sc-1wnrej-0"
})(["position:relative;padding:0;padding-right:", "px;padding-left:", "px;border-bottom:", "px solid ", ";transition:background 150ms ease-in-out;background:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv2$4 = _styled.div.withConfig({
  displayName: "ListView___StyledDiv2",
  componentId: "sc-1wnrej-1"
})(["position:absolute;top:", "px;left:0;display:flex;justify-content:center;width:", "px;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledDiv3$2 = _styled.div.withConfig({
  displayName: "ListView___StyledDiv3",
  componentId: "sc-1wnrej-2"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledDiv4$2 = _styled.div.withConfig({
  displayName: "ListView___StyledDiv4",
  componentId: "sc-1wnrej-3"
})(["display:flex;flex-direction:column;padding-bottom:", "px;"], function (p) {
  return p._css10;
});

var _StyledDiv5 = _styled.div.withConfig({
  displayName: "ListView___StyledDiv5",
  componentId: "sc-1wnrej-4"
})(["display:flex;align-items:center;margin:", "px 0 ", "px;color:", ";", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function ListView(_ref) {
  var allSelected = _ref.allSelected,
      entries = _ref.entries,
      fields = _ref.fields,
      hasAnyExpansion = _ref.hasAnyExpansion,
      onSelect = _ref.onSelect,
      onSelectAll = _ref.onSelectAll,
      renderSelectionCount = _ref.renderSelectionCount,
      selectable = _ref.selectable,
      rowHeight = _ref.rowHeight;
  var theme = useTheme();

  var _useState = useState(-1),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var toggleEntry = useCallback(function (index) {
    setOpened(function (opened) {
      return opened === index ? -1 : index;
    });
  }, []);
  var sideSpace = selectable || hasAnyExpansion;
  return React.createElement(React.Fragment, null, entries.map(function (entry, index) {
    var hasExpansion = entry.expansion.content.length > 0;
    return React.createElement(_StyledDiv$7, {
      key: index,
      _css: 3 * GU,
      _css2: (sideSpace ? 6.5 : 3) * GU,
      _css3: Number(index !== entries.length - 1),
      _css4: theme.border,
      _css5: entry.selected ? theme.surfaceSelected : 'none'
    }, React.createElement(OpenedSurfaceBorder, {
      opened: entry.index === opened
    }), sideSpace && React.createElement(_StyledDiv2$4, {
      _css6: 1.5 * GU,
      _css7: 6.5 * GU
    }, selectable && React.createElement(Select, {
      index: entry.index,
      selected: entry.selected,
      onSelect: onSelect
    }), !selectable && hasExpansion && React.createElement(ToggleButton, {
      opened: entry.index === opened,
      onClick: function onClick() {
        return toggleEntry(entry.index);
      }
    })), entry.actions && React.createElement(_StyledDiv3$2, {
      _css8: 2 * GU,
      _css9: 3 * GU
    }, entry.actions), React.createElement("div", null, entry.entryNodes.map(function (content, index) {
      return [// field content
      content, // field label
      fields[index].label, // priority number
      fields[index].priority && fields[index].priority || 0];
    }) // sort by priority
    .sort(function (a, b) {
      return b[2] - a[2];
    }).map(function (_ref2, index, entryNodes) {
      var _ref3 = slicedToArray(_ref2, 2),
          content = _ref3[0],
          label = _ref3[1];

      return React.createElement(_StyledDiv4$2, {
        key: index,
        _css10: index === entryNodes.length - 1 ? 2 * GU : 0
      }, React.createElement(_StyledDiv5, {
        _css11: 2 * GU,
        _css12: 1 * GU,
        _css13: theme.surfaceContentSecondary,
        _css14: textStyle('label2')
      }, label), React.createElement("div", null, content));
    })), hasExpansion && React.createElement(EntryExpansion$1, {
      expansion: entry.expansion,
      opened: opened === entry.index,
      rowHeight: rowHeight
    }));
  }));
}

ListView.propTypes = {
  allSelected: propTypes.oneOf([-1, 0, 1]).isRequired,
  entries: propTypes.array.isRequired,
  fields: propTypes.array.isRequired,
  hasAnyExpansion: propTypes.bool.isRequired,
  onSelect: propTypes.func.isRequired,
  onSelectAll: propTypes.func.isRequired,
  renderSelectionCount: propTypes.func.isRequired,
  rowHeight: propTypes.number.isRequired,
  selectable: propTypes.bool.isRequired
}; // Disable prop types check for internal components

/* eslint-disable react/prop-types */

var _StyledAnimatedDiv$2 = _styled(extendedAnimated.div).withConfig({
  displayName: "ListView___StyledAnimatedDiv",
  componentId: "sc-1wnrej-5"
})(["overflow:hidden;background:", ";margin-left:", "px;margin-right:", "px;padding-left:", "px;box-shadow:inset 0 6px 4px -4px rgba(0,0,0,0.16);"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
});

var _StyledDiv6 = _styled.div.withConfig({
  displayName: "ListView___StyledDiv6",
  componentId: "sc-1wnrej-6"
})(["display:flex;align-items:center;height:", ";padding-right:", "px;"], function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
});

function EntryExpansion$1(_ref4) {
  var expansion = _ref4.expansion,
      opened = _ref4.opened,
      rowHeight = _ref4.rowHeight;
  var theme = useTheme(); // Handles the height of the expansion in free layout mode

  var _useState3 = useState(0),
      _useState4 = slicedToArray(_useState3, 2),
      freeLayoutContentHeight = _useState4[0],
      setFreeLayoutContentHeight = _useState4[1];

  var handleFreeLayoutContentRef = useCallback(function (element) {
    if (element) {
      setFreeLayoutContentHeight(element.getBoundingClientRect().height);
    }
  }, []);
  var height = expansion.freeLayout ? freeLayoutContentHeight : rowHeight * expansion.content.length;
  return React.createElement(Transition, {
    native: true,
    items: opened,
    from: {
      height: 0
    },
    enter: {
      height: height
    },
    update: {
      height: height
    },
    leave: {
      height: 0
    },
    config: _objectSpread$8({}, springs.smooth, {
      precision: 0.1
    })
  }, function (show) {
    return show && function (_ref5) {
      var height = _ref5.height;
      return React.createElement(_StyledAnimatedDiv$2, {
        style: {
          height: height.interpolate(function (v) {
            return "".concat(v, "px");
          })
        },
        _css15: theme.surfaceUnder,
        _css16: -6.5 * GU,
        _css17: -3 * GU,
        _css18: 6.5 * GU
      }, expansion.content.map(function (child, i) {
        return React.createElement(_StyledDiv6, {
          key: i,
          ref: expansion.freeLayout ? handleFreeLayoutContentRef : null,
          _css19: expansion.freeLayout ? 'auto' : "".concat(rowHeight, "px"),
          _css20: 3 * GU
        }, child);
      }));
    };
  });
}

function Select(_ref6) {
  var index = _ref6.index,
      selected = _ref6.selected,
      onSelect = _ref6.onSelect;
  var change = useCallback(function (check) {
    onSelect(index, check);
  }, [index, onSelect]);
  return React.createElement(CheckBoxWithTheme, {
    onChange: change,
    checked: selected
  });
}

var illustrationRedImage = "5140b2d928ee3408.png";

var illustrationBlueImage = "665de3412d16a795.png";

function prepareEntries(entries, from, to, selectedIndexes) {
  return entries.slice(from, to).map(function (entry, index) {
    var entryIndex = from + index;
    var selected = selectedIndexes.includes(entryIndex);
    return {
      value: entry || null,
      index: entryIndex,
      selected: selected
    };
  });
}

function prepareFields(fields) {
  return fields.map(function (fieldFromProps, index, fields) {
    // Convert non-object fields (e.g. a simple string) into objects
    var field = fieldFromProps && fieldFromProps.label ? fieldFromProps : {
      label: fieldFromProps
    }; // Auto align the last column to the end (right)

    if (!field.align) {
      field.align = index === fields.length - 1 && fields.length > 1 ? 'end' : 'start';
    }

    return field;
  });
}

function entryExpansion(content) {
  // Rows
  if (Array.isArray(content) && content.length > 0) {
    return {
      content: content,
      freeLayout: false
    };
  } // Free layout


  if (content && !Array.isArray(content)) {
    return {
      content: [content],
      freeLayout: true
    };
  } // No expansion


  return {
    content: [],
    freeLayout: false
  };
}

function renderEntries(entries, _ref) {
  var fields = _ref.fields,
      renderEntry = _ref.renderEntry,
      renderEntryActions = _ref.renderEntryActions,
      renderEntryExpansion = _ref.renderEntryExpansion,
      mode = _ref.mode;
  return entries.map(function (entry) {
    var value = entry.value,
        index = entry.index,
        selected = entry.selected;
    var entryNodes = renderEntry(value, index, {
      selected: selected,
      mode: mode
    });

    if (!Array.isArray(entryNodes)) {
      entryNodes = [];
    } // Create undefined cells too


    while (entryNodes.length < fields.length) {
      entryNodes.push(null);
    }

    var expansion = entryExpansion(renderEntryExpansion ? renderEntryExpansion(value, index, {
      selected: selected,
      mode: mode
    }) : null);
    var actions = renderEntryActions ? renderEntryActions(value, index, {
      selected: selected,
      mode: mode
    }) : null;
    return {
      actions: actions,
      entryNodes: entryNodes,
      expansion: expansion,
      index: index,
      selected: selected
    };
  });
}

function useSelection(entries, selection, onSelectEntries) {
  // Only used if `selection` is not passed via props. The selection supports
  // both a managed and a controlled mode, to provide a better developer
  // experience out of the box.
  var _useState = useState([]),
      _useState2 = slicedToArray(_useState, 2),
      selectionManaged = _useState2[0],
      setSelectionManaged = _useState2[1];

  var currentSelection = selection === undefined ? selectionManaged : selection;
  var updateSelection = useCallback(function (newSelection) {
    // Managed state
    if (selection === undefined) {
      setSelectionManaged(newSelection);
    } // Useful to notify, even in managed mode


    onSelectEntries(toConsumableArray(newSelection).sort().map(function (index) {
      return entries[index];
    }), newSelection);
  }, [selection, onSelectEntries, entries]);
  var allSelected = useMemo(function () {
    // none selected
    if (currentSelection.length === 0) {
      return -1;
    } // all selected


    if (currentSelection.length === entries.length) {
      return 1;
    } // some selected


    return 0;
  }, [entries, currentSelection]);
  var toggleEntrySelect = useCallback(function (entryIndex) {
    updateSelection(currentSelection.includes(entryIndex) ? currentSelection.filter(function (index) {
      return index !== entryIndex;
    }) : [].concat(toConsumableArray(currentSelection), [entryIndex]));
  }, [updateSelection, currentSelection]);
  var selectAll = useCallback(function () {
    updateSelection(currentSelection.length === 0 ? entries.map(function (_, index) {
      return index;
    }) : []);
  }, [entries, currentSelection, updateSelection]);
  return {
    allSelected: allSelected,
    selectAll: selectAll,
    toggleEntrySelect: toggleEntrySelect,
    selectedIndexes: currentSelection
  };
}

var _StyledDiv$8 = _styled.div.withConfig({
  displayName: "DataView___StyledDiv",
  componentId: "sc-49otbs-0"
})(["padding:", "px ", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledH$1 = _styled.h1.withConfig({
  displayName: "DataView___StyledH",
  componentId: "sc-49otbs-1"
})(["margin-bottom:", "px;", ";"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2$5 = _styled.div.withConfig({
  displayName: "DataView___StyledDiv2",
  componentId: "sc-49otbs-2"
})(["display:flex;justify-content:center;align-items:center;"]);

var _StyledDiv3$3 = _styled.div.withConfig({
  displayName: "DataView___StyledDiv3",
  componentId: "sc-49otbs-3"
})(["width:", "px;text-align:center;padding:", "px 0;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledImg = _styled.img.withConfig({
  displayName: "DataView___StyledImg",
  componentId: "sc-49otbs-4"
})(["margin-bottom:", "px;"], function (p) {
  return p._css7;
});

var _StyledImg2 = _styled.img.withConfig({
  displayName: "DataView___StyledImg2",
  componentId: "sc-49otbs-5"
})(["margin-bottom:", "px;"], function (p) {
  return p._css8;
});

var _StyledP = _styled.p.withConfig({
  displayName: "DataView___StyledP",
  componentId: "sc-49otbs-6"
})(["", ";"], function (p) {
  return p._css9;
});

var _StyledP2 = _styled.p.withConfig({
  displayName: "DataView___StyledP2",
  componentId: "sc-49otbs-7"
})(["", ";display:flex;align-items:center;"], function (p) {
  return p._css10;
});

var _StyledLoadingRing = _styled(LoadingRing).withConfig({
  displayName: "DataView___StyledLoadingRing",
  componentId: "sc-49otbs-8"
})(["margin-right:", "px;"], function (p) {
  return p._css11;
});

var _StyledP3 = _styled.p.withConfig({
  displayName: "DataView___StyledP3",
  componentId: "sc-49otbs-9"
})(["", ";margin-top:", "px;"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

var _StyledP4 = _styled.p.withConfig({
  displayName: "DataView___StyledP4",
  componentId: "sc-49otbs-10"
})(["color:", ";"], function (p) {
  return p._css14;
});

var _StyledP5 = _styled.p.withConfig({
  displayName: "DataView___StyledP5",
  componentId: "sc-49otbs-11"
})(["", ";margin-top:", "px;"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
});

var _StyledP6 = _styled.p.withConfig({
  displayName: "DataView___StyledP6",
  componentId: "sc-49otbs-12"
})(["color:", ";"], function (p) {
  return p._css17;
});

var _StyledDiv4$3 = _styled.div.withConfig({
  displayName: "DataView___StyledDiv4",
  componentId: "sc-49otbs-13"
})(["border-top:1px solid ", ";"], function (p) {
  return p._css18;
});

var DataView = React.memo(function DataView(_ref2) {
  var page = _ref2.page,
      entries = _ref2.entries,
      entriesPerPage = _ref2.entriesPerPage,
      fields = _ref2.fields,
      heading = _ref2.heading,
      onPageChange = _ref2.onPageChange,
      onSelectEntries = _ref2.onSelectEntries,
      renderEntry = _ref2.renderEntry,
      renderEntryActions = _ref2.renderEntryActions,
      renderEntryChild = _ref2.renderEntryChild,
      renderEntryExpansion = _ref2.renderEntryExpansion,
      renderSelectionCount = _ref2.renderSelectionCount,
      mode = _ref2.mode,
      selection = _ref2.selection,
      tableRowHeight = _ref2.tableRowHeight,
      status = _ref2.status,
      statusEmpty = _ref2.statusEmpty,
      statusLoading = _ref2.statusLoading,
      statusEmptyFilters = _ref2.statusEmptyFilters,
      statusEmptySearch = _ref2.statusEmptySearch,
      onStatusEmptyClear = _ref2.onStatusEmptyClear;

  if (renderEntryChild && !renderEntryExpansion) {
    warnOnce('DataView:renderEntryChild', 'DataView: the renderEntryChild prop has been renamed ' + 'renderEntryExpansion and will be removed in a future version. ' + 'Please use the new name.');
    renderEntryExpansion = renderEntryChild;
  }

  if (renderEntryExpansion && onSelectEntries) {
    warnOnce('DataView: renderEntryExpansion + onSelectEntries', 'A DataView cannot be made selectable with some of its entries ' + 'expandable. Please use only one of renderEntryExpansion or ' + 'onSelectEntries at a time. Ignoring renderEntryExpansion.');
    renderEntryExpansion = undefined;
  } // Only used if `page` is not passed. The pagination supports both a
  // managed and a controlled mode, to provide a better developer experience
  // out of the box.


  var _useState3 = useState(0),
      _useState4 = slicedToArray(_useState3, 2),
      pageManaged = _useState4[0],
      setPageManaged = _useState4[1];

  var handlePageChange = useCallback(function (newPage) {
    // Managed state
    if (page === undefined) {
      setPageManaged(newPage);
    } // Useful to notify, even in managed mode


    onPageChange(newPage);
  }, [onPageChange, page]); // Reset managed pagination if the entries or the pagination changes.

  useEffect(function () {
    setPageManaged(0);
  }, [entries]);
  var selectedPage = page === undefined ? pageManaged : page;
  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var publicUrl = usePublicUrl();
  var listMode = mode === 'list' || mode !== 'table' && layoutName === 'small';

  var _useSelection = useSelection(entries, selection, onSelectEntries),
      allSelected = _useSelection.allSelected,
      selectAll = _useSelection.selectAll,
      toggleEntrySelect = _useSelection.toggleEntrySelect,
      selectedIndexes = _useSelection.selectedIndexes;

  var hasAnyActions = Boolean(renderEntryActions);
  var hasAnyExpansion = Boolean(renderEntryExpansion);
  var canSelect = Boolean(onSelectEntries); // If entriesPerPage is -1 (or 0): no pagination

  if (entriesPerPage < 1) {
    entriesPerPage = entries.length;
  }

  var pages = Math.ceil(entries.length / entriesPerPage);
  var displayFrom = entriesPerPage * selectedPage;
  var displayTo = displayFrom + entriesPerPage;
  var displayedEntries = prepareEntries(entries, displayFrom, displayTo, selectedIndexes);
  var preparedFields = prepareFields(fields);
  var renderedEntries = renderEntries(displayedEntries, {
    fields: fields,
    renderEntry: renderEntry,
    renderEntryActions: renderEntryActions,
    renderEntryExpansion: renderEntryExpansion,
    mode: listMode ? 'list' : 'table'
  });
  var alignChildOnField = fields.findIndex(function (field) {
    return field && field.childStart;
  });
  var emptyEntries = renderedEntries.length === 0;
  return React.createElement(Box, {
    padding: 0
  }, heading && React.createElement(_StyledDiv$8, {
    _css: 2 * GU,
    _css2: layoutName === 'small' ? 2 * GU : 3 * GU
  }, typeof heading === 'string' ? React.createElement(_StyledH$1, {
    _css3: 2 * GU,
    _css4: textStyle('body2')
  }, heading) : heading), !emptyEntries && (listMode ? React.createElement(ListView, {
    allSelected: allSelected,
    entries: renderedEntries,
    fields: preparedFields,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: toggleEntrySelect,
    onSelectAll: selectAll,
    renderSelectionCount: renderSelectionCount,
    rowHeight: tableRowHeight,
    selectable: canSelect
  }) : React.createElement(TableView, {
    alignChildOnField: Math.min(Math.max(-1, alignChildOnField), fields.length - 1),
    allSelected: allSelected,
    entries: renderedEntries,
    fields: preparedFields,
    hasAnyActions: hasAnyActions,
    hasAnyExpansion: hasAnyExpansion,
    onSelect: toggleEntrySelect,
    onSelectAll: selectAll,
    renderSelectionCount: renderSelectionCount,
    rowHeight: tableRowHeight,
    selectable: canSelect,
    selectedCount: selectedIndexes.length
  })), emptyEntries && React.createElement(_StyledDiv2$5, null, React.createElement(_StyledDiv3$3, {
    _css5: 31 * GU,
    _css6: 8 * GU
  }, (status === 'default' || status === 'loading') && React.createElement(_StyledImg, {
    src: publicUrl + illustrationBlueImage,
    alt: "",
    height: 20 * GU,
    _css7: 2 * GU
  }), (status === 'empty-filters' || status === 'empty-search') && React.createElement(_StyledImg2, {
    src: publicUrl + illustrationRedImage,
    alt: "",
    height: 20 * GU,
    _css8: 2 * GU
  }), status === 'default' && (statusEmpty || React.createElement(_StyledP, {
    _css9: textStyle('title2')
  }, "No data available.")), status === 'loading' && (statusLoading || React.createElement(_StyledP2, {
    _css10: textStyle('title2')
  }, React.createElement(_StyledLoadingRing, {
    _css11: 2 * GU
  }), ' ', "Loading data\u2026")), status === 'empty-filters' && React.createElement(React.Fragment, null, React.createElement(_StyledP3, {
    _css12: textStyle('title2'),
    _css13: 2 * GU
  }, "No results found."), statusEmptyFilters || React.createElement(_StyledP4, {
    _css14: theme.surfaceContentSecondary
  }, 'We can’t find any item matching your filter selection. ', React.createElement(Link, {
    onClick: onStatusEmptyClear
  }, "Clear filters"))), status === 'empty-search' && React.createElement(React.Fragment, null, React.createElement(_StyledP5, {
    _css15: textStyle('title2'),
    _css16: 2 * GU
  }, "No results found."), statusEmptySearch || React.createElement(_StyledP6, {
    _css17: theme.surfaceContentSecondary
  }, 'We can’t find any item matching your search query. ', React.createElement(Link, {
    onClick: onStatusEmptyClear
  }, "Clear search"))))), pages > 1 && React.createElement(_StyledDiv4$3, {
    _css18: theme.border
  }, React.createElement(Pagination, {
    pages: pages,
    selected: selectedPage,
    onChange: handlePageChange,
    touchMode: layoutName === 'small'
  })));
});
DataView.propTypes = {
  page: propTypes.number,
  entries: propTypes.array.isRequired,
  entriesPerPage: propTypes.number,
  fields: propTypes.array.isRequired,
  heading: propTypes.node,
  mode: propTypes.oneOf(['adaptive', 'table', 'list']),
  onPageChange: propTypes.func,
  onSelectEntries: propTypes.func,
  renderEntry: propTypes.func.isRequired,
  renderEntryActions: propTypes.func,
  renderEntryExpansion: propTypes.func,
  renderSelectionCount: propTypes.func,
  selection: propTypes.array,
  tableRowHeight: propTypes.number,
  status: propTypes.oneOf(['default', 'loading', 'empty-filters', 'empty-search']),
  statusEmpty: propTypes.node,
  statusLoading: propTypes.node,
  statusEmptyFilters: propTypes.node,
  statusEmptySearch: propTypes.node,
  onStatusEmptyClear: propTypes.func,
  // deprecated
  renderEntryChild: propTypes.func
};
DataView.defaultProps = {
  entriesPerPage: 10,
  mode: 'adaptive',
  onPageChange: noop,
  renderSelectionCount: function renderSelectionCount(count) {
    return "".concat(count, " items selected");
  },
  tableRowHeight: 8 * GU,
  status: 'default'
};

var _StyledButtonBase$4 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "DiscButton___StyledButtonBase",
  componentId: "sc-1ay99f2-0"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;background:", ";color:", ";border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,0.25);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.125);}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var DiscButton = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      description = _ref.description,
      size = _ref.size,
      props = objectWithoutProperties(_ref, ["children", "description", "size"]);

  var theme = useTheme();
  return React.createElement(_StyledButtonBase$4, _extends_1({
    ref: ref,
    focusRingSpacing: 4,
    focusRingRadius: size,
    title: description
  }, props, {
    _css: size,
    _css2: size,
    _css3: theme.help,
    _css4: theme.helpContent
  }), children);
});
DiscButton.propTypes = {
  children: propTypes.node.isRequired,
  description: propTypes.string.isRequired,
  size: propTypes.number
};
DiscButton.defaultProps = {
  size: 5 * GU
};

function getModeStyles(theme, mode) {
  if (mode === 'warning') {
    return {
      background: theme.warningSurface,
      borderColor: theme.warning,
      color: theme.warningSurfaceContent,
      titleColor: theme.warningSurfaceContent
    };
  }

  if (mode === 'error') {
    return {
      background: theme.negativeSurface,
      borderColor: theme.negative,
      color: theme.negativeSurfaceContent,
      titleColor: theme.negativeSurfaceContent
    };
  }

  if (mode === 'description') {
    return {
      background: theme.infoSurface,
      borderColor: theme.info,
      color: theme.surfaceContent,
      titleColor: theme.surfaceContentSecondary
    };
  }

  return {
    background: theme.infoSurface,
    borderColor: theme.info,
    color: theme.infoSurfaceContent,
    titleColor: theme.infoSurfaceContent
  };
}

var _StyledSection = _styled.section.withConfig({
  displayName: "Info___StyledSection",
  componentId: "sc-1kgnlbm-0"
})(["color:", ";background:", ";border-left:2px solid ", ";padding:", "px;border-radius:", "px;word-wrap:break-word;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, RADIUS, function (p) {
  return p._css5;
});

var _StyledH$2 = _styled.h1.withConfig({
  displayName: "Info___StyledH",
  componentId: "sc-1kgnlbm-1"
})(["display:flex;align-items:center;color:", ";", ";margin-bottom:", "px;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Info(_ref) {
  var children = _ref.children,
      mode = _ref.mode,
      color = _ref.color,
      titleColor = _ref.titleColor,
      background = _ref.background,
      borderColor = _ref.borderColor,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ["children", "mode", "color", "titleColor", "background", "borderColor", "title"]);

  var theme = useTheme(); // Get styles from the current mode

  var modeStyles = useMemo(function () {
    var styles = getModeStyles(theme, mode);
    return styles;
  }, [mode, theme]);
  return React.createElement(_StyledSection, _extends_1({}, props, {
    _css: color || modeStyles.color,
    _css2: background || modeStyles.background,
    _css3: borderColor || modeStyles.borderColor,
    _css4: 2 * GU,
    _css5: textStyle('body3')
  }), title && React.createElement(_StyledH$2, {
    _css6: titleColor || modeStyles.titleColor,
    _css7: textStyle('label2'),
    _css8: 1 * GU
  }, title), children);
}

Info.propTypes = {
  children: propTypes.node,
  title: propTypes.node,
  mode: propTypes.oneOf(['info', 'description', 'warning', 'error']),
  color: propTypes.string,
  titleColor: propTypes.string,
  background: propTypes.string,
  borderColor: propTypes.string
};

function Warning(props) {
  return React.createElement(Info, _extends_1({
    mode: "warning"
  }, props));
} // Backward compatibility


Info.Action = Info;
Info.Permissions = Warning;
Info.Alert = Warning;

function ExternalLink(props) {
  warnOnce('ExternalLink', 'ExternalLink is deprecated. Please use Link instead.');
  return React.createElement(Link, _extends_1({
    external: true
  }, props));
}

function SafeLink(props) {
  warnOnce('SafeLink', 'SafeLink is deprecated. Please use Link instead.');
  return React.createElement(Link, props);
}

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledInput = _styled.input.withConfig({
  displayName: "TextInput___StyledInput",
  componentId: "gngg3n-0"
})(["width:", ";height:", "px;padding:0 ", "px;background:", ";border:1px solid ", ";color:", ";border-radius:", "px;appearance:none;", ";", " &:focus{outline:none;border-color:", ";}&:read-only{color:", ";border-color:", ";}&::placeholder{color:", ";opacity:1;}&:invalid{box-shadow:none;}"], function (_ref) {
  var wide = _ref.wide;
  return wide ? '100%' : 'auto';
}, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, RADIUS, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var TextInput = React.forwardRef(function (_ref2, ref) {
  var autofocus = _ref2.autofocus,
      multiline = _ref2.multiline,
      type = _ref2.type,
      props = objectWithoutProperties(_ref2, ["autofocus", "multiline", "type"]);

  var theme = useTheme();
  var handleRef = useCallback(function (element) {
    if (ref) {
      ref.current = element;
    }

    if (autofocus && element) {
      element.focus();
    }
  }, [autofocus, ref]);
  return React.createElement(_StyledInput, _extends_1({
    ref: handleRef,
    as: multiline ? 'textarea' : 'input',
    type: multiline ? undefined : type
  }, props, {
    _css: 5 * GU,
    _css2: 1.5 * GU,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: theme.surfaceContent,
    _css6: textStyle('body3'),
    _css7: multiline ? "\n              height: auto;\n              padding: ".concat(1 * GU, "px ").concat(1.5 * GU, "px;\n              resize: vertical;\n            ") : '',
    _css8: theme.selected,
    _css9: theme.hint,
    _css10: theme.border,
    _css11: theme.hint
  }));
});

var _StyledTextInput = _styled(TextInput).withConfig({
  displayName: "TextInput___StyledTextInput",
  componentId: "gngg3n-1"
})(["", ":", "px;"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

TextInput.propTypes = {
  autofocus: propTypes.bool,
  multiline: propTypes.bool,
  required: propTypes.bool,
  type: propTypes.string
};
TextInput.defaultProps = {
  autofocus: false,
  multiline: false,
  required: false,
  type: 'text'
}; // Text input wrapped to allow adornments

var _StyledDiv$9 = _styled.div.withConfig({
  displayName: "TextInput___StyledDiv",
  componentId: "gngg3n-2"
})(["display:inline-flex;position:relative;width:", ";"], function (p) {
  return p._css12;
});

var _StyledDiv2$6 = _styled.div.withConfig({
  displayName: "TextInput___StyledDiv2",
  componentId: "gngg3n-3"
})(["position:absolute;top:0;bottom:0;height:100%;", ":", "px;display:flex;align-items:center;justify-content:center;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
});

var WrapperTextInput = React.forwardRef(function (_ref3, ref) {
  var adornment = _ref3.adornment,
      adornmentPosition = _ref3.adornmentPosition,
      _ref3$adornmentSettin = _ref3.adornmentSettings,
      _ref3$adornmentSettin2 = _ref3$adornmentSettin.width,
      adornmentWidth = _ref3$adornmentSettin2 === void 0 ? 36 : _ref3$adornmentSettin2,
      _ref3$adornmentSettin3 = _ref3$adornmentSettin.padding,
      adornmentPadding = _ref3$adornmentSettin3 === void 0 ? 4 : _ref3$adornmentSettin3,
      props = objectWithoutProperties(_ref3, ["adornment", "adornmentPosition", "adornmentSettings"]);

  var theme = useTheme();

  if (!adornment) {
    return React.createElement(TextInput, _extends_1({
      ref: ref
    }, props));
  }

  return React.createElement(_StyledDiv$9, {
    _css12: props.wide ? '100%' : 'max-content'
  }, React.createElement(_StyledTextInput, _extends_1({
    ref: ref
  }, props, {
    _css13: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    _css14: adornmentWidth - adornmentPadding * 2
  })), React.createElement(_StyledDiv2$6, {
    _css15: adornmentPosition === 'end' ? 'right' : 'left',
    _css16: adornmentPadding,
    _css17: theme.surfaceContentSecondary
  }, adornment));
});
WrapperTextInput.propTypes = _objectSpread$9({}, TextInput.propTypes, {
  adornment: propTypes.node,
  adornmentPosition: propTypes.oneOf(['start', 'end']),
  adornmentSettings: propTypes.shape({
    width: propTypes.number,
    padding: propTypes.number
  })
});
WrapperTextInput.defaultProps = _objectSpread$9({}, TextInput.defaultProps, {
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {}
}); // <input type=number> (only for compat)

function TextInputNumber(props) {
  warnOnce('TextInputNumber', 'TextInputNumber is deprecated. Please use TextInput instead.');
  return React.createElement(TextInput, _extends_1({
    type: "number"
  }, props));
} // Multiline input (textarea element)


function TextInputMultiline(props) {
  return React.createElement(TextInput, _extends_1({
    multiline: true
  }, props));
}

TextInputMultiline.propTypes = {
  required: propTypes.bool
};
TextInputMultiline.defaultProps = {
  required: false
};
WrapperTextInput.Number = TextInputNumber;
WrapperTextInput.Multiline = TextInputMultiline;

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$a(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$a(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var EMPTY = '';

var _StyledIconSearch = _styled(IconSearch).withConfig({
  displayName: "SearchInput___StyledIconSearch",
  componentId: "sc-13u679s-0"
})(["color:", ";"], function (p) {
  return p._css;
});

var _StyledButtonIcon$1 = _styled(ButtonIcon).withConfig({
  displayName: "SearchInput___StyledButtonIcon",
  componentId: "sc-13u679s-1"
})(["color:", ";"], function (p) {
  return p._css2;
});

var SearchInput = React.forwardRef(function (_ref2, ref) {
  var onChange = _ref2.onChange,
      props = objectWithoutProperties(_ref2, ["onChange"]);

  var theme = useTheme();
  var fallbackRef = useRef();

  var _ref = ref || fallbackRef;

  var handleChange = useCallback(function (ev) {
    var value = ev.currentTarget.value;
    onChange(value, {
      inputChangeEvent: ev
    });
  }, [onChange]);
  var handleClearClick = useCallback(function (ev) {
    onChange(EMPTY, {
      clearClickEvent: ev
    });

    if (_ref.current) {
      _ref.current.focus();
    }
  }, [onChange, _ref]);
  return React.createElement(WrapperTextInput, _extends_1({
    ref: _ref,
    adornment: (props.value || '') === EMPTY ? React.createElement(_StyledIconSearch, {
      _css: theme.surfaceIcon
    }) : React.createElement(_StyledButtonIcon$1, {
      onClick: handleClearClick,
      label: "Clear search input",
      _css2: theme.surfaceIcon
    }, React.createElement(IconCross, null)),
    adornmentPosition: "end",
    onChange: handleChange
  }, props));
});
SearchInput.propTypes = _objectSpread$a({}, WrapperTextInput.propTypes);

var MODE_INDICATOR = 'indicator';
var MODE_IDENTIFIER = 'identifier';
var MODE_NEW = 'new';
var MODE_ACTIVITY = 'activity';
var SIZE_NORMAL = 'normal';
var SIZE_SMALL = 'small';
var COUNT_DEFAULT = 2;

function useMode(mode) {
  var theme = useTheme();

  if (mode === MODE_IDENTIFIER) {
    return {
      background: theme.tagIdentifier,
      color: theme.tagIdentifierContent,
      size: SIZE_NORMAL
    };
  }

  if (mode === MODE_NEW) {
    return {
      background: theme.tagNew,
      color: theme.tagNewContent,
      size: SIZE_NORMAL
    };
  }

  if (mode === MODE_ACTIVITY) {
    return {
      background: theme.tagActivity,
      color: theme.tagActivityContent,
      size: SIZE_SMALL
    };
  } // mode === MODE_INDICATOR (default)


  return {
    background: theme.tagIndicator,
    color: theme.tagIndicatorContent,
    size: SIZE_NORMAL
  };
}

function getSize(size, _ref) {
  var uppercase = _ref.uppercase,
      discMode = _ref.discMode,
      iconAndLabel = _ref.iconAndLabel;

  if (size === SIZE_SMALL) {
    return "\n      min-width: ".concat(2 * GU, "px;\n      width: ").concat(discMode ? "".concat(2 * GU, "px") : 'auto', ";\n      height: ").concat(2 * GU, "px;\n      padding: ").concat(discMode ? '0' : "0 ".concat(0.5 * GU, "px"), ";\n      padding-top: ").concat(uppercase ? '0.5px' : 0, ";\n      border-radius: ").concat(2 * GU, "px;\n      ").concat(textStyle('label3'), ";\n      font-weight: 600;\n    ");
  } // normal


  return "\n    min-width: ".concat(2.5 * GU, "px;\n    width: ").concat(discMode ? "".concat(3 * GU, "px") : 'auto', ";\n    height: ").concat(2.5 * GU, "px;\n    padding: ").concat(discMode ? '0' : "0 ".concat(1.5 * GU, "px"), " ;\n    padding-top: ").concat(uppercase ? '1px' : 0, ";\n    ").concat(iconAndLabel ? "padding-left: ".concat(1.25 * GU, "px") : '', ";\n    border-radius: ").concat(2.5 * GU, "px;\n    ").concat(textStyle('label2'), ";\n    font-weight: 600;\n  ");
}

function useLabel(_ref2) {
  var _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? '' : _ref2$label,
      limitDigits = _ref2.limitDigits;
  var finalLabel = useMemo(function () {
    if (limitDigits === false) {
      return typeof label === 'number' ? String(label) : label || '';
    }

    var digits = typeof limitDigits === 'number' ? limitDigits : COUNT_DEFAULT;
    var parsed = parseInt(label, 10);

    if (isNaN(parsed)) {
      return label || '';
    }

    var max = Math.pow(10, digits) - 1;
    var formattedValue = parsed > max ? "".concat(max, "+") : parsed;
    return String(formattedValue);
  }, [label, limitDigits]);
  return finalLabel;
}

var _StyledSpan$4 = _styled.span.withConfig({
  displayName: "Tag___StyledSpan",
  componentId: "sc-875dmt-0"
})(["display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;", ";", ";color:", ";background:", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, unselectable);

var _StyledSpan2$2 = _styled.span.withConfig({
  displayName: "Tag___StyledSpan2",
  componentId: "sc-875dmt-1"
})(["display:flex;align-items:center;margin-right:", "px;"], function (p) {
  return p._css5;
});

var _StyledSpan3$1 = _styled.span.withConfig({
  displayName: "Tag___StyledSpan3",
  componentId: "sc-875dmt-2"
})(["overflow:hidden;text-overflow:ellipsis;margin-top:", ";"], function (p) {
  return p._css6;
});

function Tag(_ref3) {
  var background = _ref3.background,
      children = _ref3.children,
      color = _ref3.color,
      limitDigits = _ref3.limitDigits,
      icon = _ref3.icon,
      label = _ref3.label,
      mode = _ref3.mode,
      size = _ref3.size,
      uppercase = _ref3.uppercase,
      props = objectWithoutProperties(_ref3, ["background", "children", "color", "limitDigits", "icon", "label", "mode", "size", "uppercase"]);

  if ((icon || label !== undefined) && children !== undefined) {
    throw new Error('Tag: you cannot use icon or label with children.');
  }

  var modeProps = useMode(mode);
  var finalSize = size || modeProps.size;
  var finalLabel = useLabel({
    label: label !== undefined ? label : children,
    limitDigits: limitDigits
  });
  var sizeStyles = getSize(finalSize, {
    uppercase: uppercase,
    discMode: // icon only
    icon && !finalLabel || // label only, using 1 or 0 chars
    !icon && typeof finalLabel === 'string' && finalLabel.length < 2,
    iconAndLabel: icon && finalLabel
  }); // Slightly tweak the alignment when there are no descenders,
  // to make the characters look more aligned.

  var alignmentCorrection = finalSize === SIZE_NORMAL && (uppercase || typeof label === 'number' || limitDigits !== false);
  return React.createElement(_StyledSpan$4, _extends_1({}, props, {
    _css: sizeStyles,
    _css2: !uppercase ? 'text-transform: unset' : '',
    _css3: color || modeProps.color,
    _css4: background || modeProps.background
  }), icon && React.createElement(_StyledSpan2$2, {
    _css5: finalLabel ? 0.25 * GU : 0
  }, icon), React.createElement(_StyledSpan3$1, {
    _css6: alignmentCorrection ? '1px' : '0'
  }, finalLabel));
}

Tag.propTypes = {
  background: propTypes.string,
  children: propTypes.node,
  color: propTypes.string,
  limitDigits: propTypes.oneOfType([propTypes.bool, propTypes.number]),
  icon: propTypes.node,
  label: propTypes.oneOfType([propTypes.node, propTypes.number]),
  mode: propTypes.oneOf([MODE_IDENTIFIER, MODE_NEW, MODE_INDICATOR, MODE_ACTIVITY]),
  size: propTypes.oneOf([SIZE_NORMAL, SIZE_SMALL]),
  uppercase: propTypes.bool
};
Tag.defaultProps = {
  uppercase: true,
  limitDigits: false
};

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator;

var RootContext = React.createContext(null);

function RootProvider(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(null),
      _useState2 = slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var handleRef = useCallback(function (element) {
    if (element !== null) {
      setElement(element);
    }
  }, []);
  return React.createElement(RootContext.Provider, {
    value: element
  }, React.createElement("div", _extends_1({
    ref: handleRef
  }, props),
  /*
     We don’t render the children tree until the element is present, at
     the second rendering.
      The reason why it is needed is because element references are
     assigned after the first rendering, and we don’t want to let
     `<Root />` consumers having to deal with the reference being `null`
     at the first rendering.
      This way, we can guarantee that if a consumer gets `null` rather
     than the element, it’s because <Root.Provider /> has to be defined
     at an upper level.
   */
  element ? children : null));
}

RootProvider.propTypes = {
  children: propTypes.node
};

function Root(props) {
  return React.createElement(RootContext.Consumer, props);
}

Root.Provider = RootProvider;

var useRoot = function useRoot() {
  return useContext(RootContext);
};

var RootPortal = function RootPortal(props) {
  return React.createElement(Root, null, function (rootElement) {
    if (!rootElement) {
      throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
    }

    return ReactDOM.createPortal(props.children, rootElement);
  });
};

RootPortal.propTypes = {
  children: propTypes.node.isRequired
};

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  bottom: ", ";\n  left: 0px;\n  width: auto;\n  background-image: linear-gradient(130deg, #00b4e6, #00f0e0);\n  height: 5px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n  background: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  padding: ", "px ", "px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 10px;\n  border-radius: ", "px;\n  overflow: hidden;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  @media (min-width: 700px) {\n    width: 42ch;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  position: fixed;\n  z-index: 1000;\n  top: ", ";\n  bottom: ", ";\n  margin: 0 auto;\n  left: ", ";\n  right: ", ";\n  display: flex;\n  flex-direction: ", ";\n  pointer-events: none;\n  align-items: center;\n  @media (min-width: 700px) {\n    align-items: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var id = 0;

var move = function move(pixel) {
  return "translate3d(0,".concat(pixel, "px,0)");
};

var ToastContext = React.createContext(function () {
  throw new Error("For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!");
});

var useToast = function useToast() {
  return useContext(ToastContext);
};

var Provider$1 = ToastContext.Provider,
    Toast = ToastContext.Consumer;

var ToastHubProvider =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(ToastHubProvider, _React$PureComponent);

  function ToastHubProvider() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, ToastHubProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(ToastHubProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      items: [],
      leaving: []
    });

    defineProperty(assertThisInitialized(_this), "cancelMap", new WeakMap());

    defineProperty(assertThisInitialized(_this), "add", function (msg) {
      var threshold = _this.props.threshold;

      _this.setState(function (state) {
        // This calls cancel on all leaving animations that stack up too much
        if (threshold !== Infinity) {
          state.leaving.slice(threshold - 1).forEach(function (item) {
            return _this.cancel(item, true);
          });
        }

        return {
          items: [].concat(toConsumableArray(state.items), [{
            key: id++,
            msg: msg
          }])
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "remove", function (item) {
      return _this.setState(function (state) {
        return {
          items: state.items.filter(function (i) {
            return i.key !== item.key;
          }),
          leaving: [item].concat(toConsumableArray(state.leaving))
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "config", function (item, state) {
      var config = springs.lazy; // Return custom configs on leave (includes the life-line duration)

      return state === 'leave' ? [{
        duration: _this.props.timeout
      }, config, config] : config;
    });

    defineProperty(assertThisInitialized(_this), "cancel", function (item) {
      var secondPass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_this.cancelMap.has(item)) {
        var fn = _this.cancelMap.get(item);

        fn(); // There are 3 passes: lifeline, opacity->0, height->0

        if (secondPass) fn();
      }
    });

    defineProperty(assertThisInitialized(_this), "leave", function (item) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = asyncToGenerator(
          /*#__PURE__*/
          regenerator.mark(function _callee(next, cancel) {
            return regenerator.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Save cancel so that it can be used interactively
                    _this.cancelMap.set(item, cancel); // Lifeline first


                    _context.next = 3;
                    return next({
                      to: {
                        life: '0%'
                      }
                    });

                  case 3:
                    _context.next = 5;
                    return next({
                      to: {
                        opacity: 0
                      }
                    });

                  case 5:
                    _context.next = 7;
                    return next({
                      to: {
                        height: 0
                      }
                    }, true);

                  case 7:
                    _this.setState(function (state) {
                      return {
                        leaving: state.leaving.filter(function (i) {
                          return i.key !== item.key;
                        })
                      };
                    });

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    });

    return _this;
  }

  createClass(ToastHubProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          showIndicator = _this$props.showIndicator,
          position = _this$props.position,
          top = _this$props.top,
          shift = _this$props.shift;
      var _this$state = this.state,
          items = _this$state.items,
          leaving = _this$state.leaving;
      var showList = items.length > 0 || leaving.length > 0;
      return React.createElement(React.Fragment, null, React.createElement(Provider$1, {
        value: this.add
      }, children), showList && React.createElement(RootPortal, null, React.createElement(ToastList, _extends_1({
        config: this.config,
        items: this.state.items,
        leave: this.leave,
        position: position,
        remove: this.remove,
        showIndicator: showIndicator,
        top: top
      }, stylingProps(this), {
        shift: shift
      }))));
    }
  }]);

  return ToastHubProvider;
}(React.PureComponent); // ToastList is separated from ToastHubProvider so we can skip its rendering


defineProperty(ToastHubProvider, "propTypes", {
  children: propTypes.node,
  position: propTypes.PropTypes.oneOf(['left', 'center', 'right']),
  shift: propTypes.number,
  showIndicator: propTypes.bool,
  threshold: propTypes.number,
  timeout: propTypes.number,
  top: propTypes.bool
});

defineProperty(ToastHubProvider, "defaultProps", {
  position: 'right',
  showIndicator: false,
  threshold: Infinity,
  timeout: 4000,
  top: false
});

var ToastList = React.memo(function (_ref2) {
  var config = _ref2.config,
      items = _ref2.items,
      leave = _ref2.leave,
      position = _ref2.position,
      remove = _ref2.remove,
      showIndicator = _ref2.showIndicator,
      top = _ref2.top,
      shift = _ref2.shift,
      props = objectWithoutProperties(_ref2, ["config", "items", "leave", "position", "remove", "showIndicator", "top", "shift"]);

  var theme = useTheme();
  return React.createElement(Container, _extends_1({
    position: position,
    top: top,
    shift: shift
  }, props), React.createElement(Transition, {
    native: true,
    items: items,
    keys: function keys(item) {
      return item.key;
    },
    from: {
      opacity: 0,
      height: 0,
      life: '100%',
      transform: move(30)
    },
    enter: {
      opacity: 1,
      height: 'auto',
      transform: move(0)
    },
    leave: leave,
    onRest: remove,
    config: config
  }, function (item) {
    return (
      /* eslint-disable react/prop-types */
      function (_ref3) {
        var life = _ref3.life,
            props = objectWithoutProperties(_ref3, ["life"]);

        return React.createElement(Message, {
          style: props
        }, React.createElement(Content, {
          top: top,
          theme: theme
        }, showIndicator && React.createElement(Life, {
          top: top,
          style: {
            right: life
          }
        }), React.createElement("p", null, item.msg)));
      }
    );
  }
  /* eslint-enable react/prop-types */
  ));
});
ToastList.propTypes = {
  config: propTypes.func,
  items: propTypes.array,
  leave: propTypes.func,
  position: propTypes.PropTypes.oneOf(['left', 'center', 'right']),
  remove: propTypes.func,
  shift: propTypes.number,
  showIndicator: propTypes.bool,
  top: propTypes.bool
};
var Container = _styled.div(_templateObject(), function (props) {
  return props.top ? "".concat(3 * GU, "px") : 'unset';
}, function (props) {
  return props.top ? 'unset' : "".concat(3 * GU, "px");
}, function (_ref4) {
  var shift = _ref4.shift;
  return "calc(".concat(3 * GU, "px + ").concat(shift ? "".concat(shift, "px") : '0px', ")");
}, function (_ref5) {
  var shift = _ref5.shift;
  return "calc(".concat(3 * GU, "px + ").concat(shift ? "".concat(shift, "px") : '0px', ")");
}, function (props) {
  return props.top ? 'column-reverse' : 'column';
}, function (props) {
  switch (props.position) {
    case 'left':
      return 'flex-start';

    case 'right':
      return 'flex-end';

    default:
      return 'center';
  }
});
var Message = _styled(extendedAnimated.div)(_templateObject2());
var Content = _styled.div(_templateObject3(), textStyle('body3'), function (_ref6) {
  var theme = _ref6.theme;
  return theme.floatingContent;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.floating.alpha(0.95);
}, function (props) {
  return props.top ? '0' : "".concat(1.25 * GU, "px");
}, function (props) {
  return props.top ? "".concat(1.25 * GU, "px") : '0';
}, 2 * GU, 2.5 * GU, RADIUS);
var Life = _styled(extendedAnimated.div)(_templateObject4(), function (props) {
  return props.top ? "".concat(1.25 * GU, "px") : '0';
});

var Accordion = React.memo(function Accordion(_ref) {
  var items = _ref.items,
      className = _ref.className,
      style = _ref.style;
  var fields = useMemo(function () {
    return [null];
  }, []);
  var renderEntry = useCallback(function (_ref2) {
    var _ref3 = slicedToArray(_ref2, 1),
        row = _ref3[0];

    return [row];
  }, []);
  var renderEntryExpansion = useCallback(function (_ref4) {
    var _ref5 = slicedToArray(_ref4, 2),
        _ = _ref5[0],
        expansion = _ref5[1];

    return React.createElement(React.Fragment, null, expansion);
  }, []);
  return React.createElement(DataView, {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: propTypes.string,
  items: propTypes.arrayOf(propTypes.arrayOf(propTypes.node)).isRequired,
  style: propTypes.object
};

var HEIGHT = 5 * GU;

var _StyledDiv$a = _styled.div.withConfig({
  displayName: "TextCopy___StyledDiv",
  componentId: "sc-1dg1uit-0"
})(["position:relative;display:inline-flex;width:", "px;max-width:100%;height:", "px;padding-left:", ";"], function (p) {
  return p._css;
}, HEIGHT, function (p) {
  return p._css2;
});

var _StyledDiv2$7 = _styled.div.withConfig({
  displayName: "TextCopy___StyledDiv2",
  componentId: "sc-1dg1uit-1"
})(["position:absolute;top:0;left:0;overflow:hidden;width:", "px;height:", "px;background:", ";border:1px solid ", ";border-right:0;border-radius:", "px 0.0001px 0.0001px ", "px;"], HEIGHT, HEIGHT, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, RADIUS, RADIUS);

var _StyledDiv3$4 = _styled.div.withConfig({
  displayName: "TextCopy___StyledDiv3",
  componentId: "sc-1dg1uit-2"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledButtonIcon$2 = _styled(ButtonIcon).withConfig({
  displayName: "TextCopy___StyledButtonIcon",
  componentId: "sc-1dg1uit-3"
})(["width:", "px;height:", "px;border-radius:0;color:", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledTextInput$1 = _styled(WrapperTextInput).withConfig({
  displayName: "TextCopy___StyledTextInput",
  componentId: "sc-1dg1uit-4"
})(["text-overflow:ellipsis;height:", "px;max-width:100%;border:1px solid ", ";", ";", ";&:read-only{color:", ";text-shadow:none;}"], HEIGHT, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

var TextCopy = React.memo(React.forwardRef(function TextCopy(_ref, ref) {
  var adornment = _ref.adornment,
      autofocus = _ref.autofocus,
      message = _ref.message,
      monospace = _ref.monospace,
      onCopy = _ref.onCopy,
      value = _ref.value,
      props = objectWithoutProperties(_ref, ["adornment", "autofocus", "message", "monospace", "onCopy", "value"]);

  var theme = useTheme();
  var toast = useToast();
  var inputRef = useRef(null); // Allows to focus the component from the outside

  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        inputRef.current.focus();
      }
    };
  }); // Select the content on focus

  var handleFocus = useCallback(function () {
    inputRef.current && inputRef.current.select();
  }, []); // If onCopy is set (either to a function or null), Toast is not used.

  var onCopyOrToast = onCopy === undefined ? toast : onCopy || noop;
  var handleCopy = useCallback(function () {
    if (inputRef.current) {
      inputRef.current.focus();

      try {
        document.execCommand('copy');
        onCopyOrToast(message);
      } catch (err) {
        warn(err);
      }
    }
  }, [message, onCopyOrToast]);
  return React.createElement(_StyledDiv$a, _extends_1({}, props, {
    _css: 52.5 * GU,
    _css2: adornment ? "".concat(HEIGHT, "px") : '0'
  }), adornment && React.createElement(_StyledDiv2$7, {
    _css3: theme.surface,
    _css4: theme.border
  }, React.createElement(_StyledDiv3$4, {
    _css5: HEIGHT - 2,
    _css6: HEIGHT - 2
  }, adornment)), React.createElement(_StyledTextInput$1, {
    ref: inputRef,
    adornment: React.createElement(_StyledButtonIcon$2, {
      onClick: handleCopy,
      label: "Copy",
      _css7: HEIGHT - 2,
      _css8: HEIGHT - 2,
      _css9: theme.surfaceIcon
    }, React.createElement(IconCopy, null)),
    adornmentPosition: "end",
    adornmentSettings: {
      // Keep the button square
      width: HEIGHT - 2,
      padding: 0
    },
    autofocus: autofocus,
    onFocus: handleFocus,
    readOnly: true,
    value: value,
    wide: true,
    _css10: theme.border,
    _css11: adornment ? "\n                  border-top-left-radius: 0;\n                  border-bottom-left-radius: 0;\n                  border-left: 0;\n                " : '',
    _css12: textStyle(monospace ? 'address2' : 'body3'),
    _css13: theme.surfaceContent
  }));
}));
TextCopy.propTypes = {
  adornment: propTypes.node,
  autofocus: propTypes.bool,
  message: propTypes.string,
  monospace: propTypes.bool,
  onCopy: propTypes.func,
  value: propTypes.string
};
TextCopy.defaultProps = {
  autofocus: false,
  message: 'Copied',
  monospace: true
};

var main = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React);



var _propTypes2 = _interopRequireDefault(propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identicon = function (_Component) {
  _inherits(Identicon, _Component);

  function Identicon(props) {
    _classCallCheck(this, Identicon);

    var _this = _possibleConstructorReturn(this, (Identicon.__proto__ || Object.getPrototypeOf(Identicon)).call(this, props));

    _this.generateIdenticon = _this.generateIdenticon.bind(_this);
    return _this;
  }

  _createClass(Identicon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.generateIdenticon(_extends({}, this.props));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!this.isEquivalent(this.props, nextProps)) this.generateIdenticon(_extends({}, nextProps));
    }
  }, {
    key: 'isEquivalent',
    value: function isEquivalent(prevProps, nextProps) {
      var aProps = Object.getOwnPropertyNames(prevProps);
      var bProps = Object.getOwnPropertyNames(nextProps);

      if (aProps.length != bProps.length) {
        return false;
      }

      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (prevProps[propName] !== nextProps[propName]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: 'generateIdenticon',
    value: function generateIdenticon(options) {
      // NOTE --  Majority of this code is referenced from: https://github.com/alexvandesande/blockies
      //          Mostly to ensure congruence to Ethereum Mist's Identicons

      // The random number is a js implementation of the Xorshift PRNG
      var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

      function seedrand(seed) {
        for (var i = 0; i < randseed.length; i++) {
          randseed[i] = 0;
        }
        for (var _i = 0; _i < seed.length; _i++) {
          randseed[_i % 4] = (randseed[_i % 4] << 5) - randseed[_i % 4] + seed.charCodeAt(_i);
        }
      }

      function rand() {
        // based on Java's String.hashCode(), expanded to 4 32bit values
        var t = randseed[0] ^ randseed[0] << 11;

        randseed[0] = randseed[1];
        randseed[1] = randseed[2];
        randseed[2] = randseed[3];
        randseed[3] = randseed[3] ^ randseed[3] >> 19 ^ t ^ t >> 8;

        return (randseed[3] >>> 0) / (1 << 31 >>> 0);
      }

      function createColor() {
        // saturation is the whole color spectrum
        var h = Math.floor(rand() * 360);
        // saturation goes from 40 to 100, it avoids greyish colors
        var s = rand() * 60 + 40 + '%';
        // lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
        var l = (rand() + rand() + rand() + rand()) * 25 + '%';

        var color = 'hsl(' + h + ',' + s + ',' + l + ')';
        return color;
      }

      function createImageData(size) {
        var width = size; // Only support square icons for now
        var height = size;

        var dataWidth = Math.ceil(width / 2);
        var mirrorWidth = width - dataWidth;

        var data = [];
        for (var y = 0; y < height; y++) {
          var row = [];
          for (var x = 0; x < dataWidth; x++) {
            // this makes foreground and background color to have a 43% (1/2.3) probability
            // spot color has 13% chance
            row[x] = Math.floor(rand() * 2.3);
          }
          var r = row.slice(0, mirrorWidth);
          r.reverse();
          row = row.concat(r);

          for (var i = 0; i < row.length; i++) {
            data.push(row[i]);
          }
        }

        return data;
      }

      function setCanvas(identicon, imageData, color, scale, bgcolor, spotcolor) {
        var width = Math.sqrt(imageData.length);
        var size = width * scale;

        identicon.width = size;
        identicon.style.width = size + 'px';

        identicon.height = size;
        identicon.style.height = size + 'px';

        var cc = identicon.getContext('2d');
        cc.fillStyle = bgcolor;
        cc.fillRect(0, 0, identicon.width, identicon.height);
        cc.fillStyle = color;

        for (var i = 0; i < imageData.length; i++) {
          // if data is 2, choose spot color, if 1 choose foreground
          cc.fillStyle = imageData[i] === 1 ? color : spotcolor;

          // if data is 0, leave the background
          if (imageData[i]) {
            var row = Math.floor(i / width);
            var col = i % width;

            cc.fillRect(col * scale, row * scale, scale, scale);
          }
        }
      }

      var opts = options || {};
      var size = opts.size || 8;
      var scale = opts.scale || 4;
      var seed = opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);

      seedrand(seed);

      var color = opts.color || createColor();
      var bgcolor = opts.bgColor || createColor();
      var spotcolor = opts.spotColor || createColor();
      var imageData = createImageData(size);
      var canvas = setCanvas(this.identicon, imageData, color, scale, bgcolor, spotcolor);

      return canvas;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('canvas', {
        ref: function ref(identicon) {
          _this2.identicon = identicon;
        },
        className: this.props.className
      });
    }
  }]);

  return Identicon;
}(React.Component);

exports.default = Identicon;


Identicon.defaultProps = {
  className: 'identicon'
};

Identicon.propTypes = {
  seed: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  color: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  spotColor: _propTypes2.default.string
};
});

var Blockies = unwrapExports(main);

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n  /* display:flex to remove the display:inline on the child without using a\n  * selector (Blockies doesn\u2019t allow the style prop to be passed). */\n  display: flex;\n  width: ", "px;\n  height: ", "px;\n  background: #fff;\n\n  /* add high-res screens support to Blockies */\n  transform: scale(", ", ", ");\n  transform-origin: 0 0;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n  opacity: ", ";\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  display: inline-flex;\n  vertical-align: middle;\n  overflow: hidden;\n  width: ", "px;\n  height: ", "px;\n  border-radius: ", "px;\n\n  // Fix an issue where the border-radius wasn\u2019t visible on Blink browsers.\n  // See https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b\n  mask-image: linear-gradient(red, red);\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio;
var BLOCKIES_SQUARES = 8; // commonly used to represent Ethereum addresses

var BASE_SCALE = 3;

var EthIdenticon =
/*#__PURE__*/
function (_React$Component) {
  inherits(EthIdenticon, _React$Component);

  function EthIdenticon() {
    classCallCheck(this, EthIdenticon);

    return possibleConstructorReturn(this, getPrototypeOf(EthIdenticon).apply(this, arguments));
  }

  createClass(EthIdenticon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          scale = _this$props.scale,
          radius = _this$props.radius,
          soften = _this$props.soften;
      var blockiesScale = scale * BASE_SCALE;
      return isAddress(address) ? React.createElement(Main, _extends_1({
        size: BLOCKIES_SQUARES * blockiesScale,
        radius: radius
      }, stylingProps(this)), React.createElement(BlockiesScaling, {
        size: BLOCKIES_SQUARES * blockiesScale * PX_RATIO
      }, React.createElement(BlockiesOpacity, {
        soften: soften
      }, React.createElement(Blockies, {
        seed: address.toLowerCase(),
        size: BLOCKIES_SQUARES,
        scale: blockiesScale * PX_RATIO
      })))) : null;
    }
  }]);

  return EthIdenticon;
}(React.Component);
/*
 * `vertical-align` prevents the inline parent to have an incorrect height.
 *
 * See
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=491549#c9
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=737757#c1
 */


defineProperty(EthIdenticon, "propTypes", {
  address: propTypes.string.isRequired,
  scale: propTypes.number,
  radius: propTypes.number,
  soften: propTypes.number
});

defineProperty(EthIdenticon, "defaultProps", {
  scale: 1,
  radius: 0,
  soften: 0.3
});

var Main = _styled.div(_templateObject$1(), function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.radius;
});
var BlockiesOpacity = _styled.div(_templateObject2$1(), function (p) {
  return 1 - p.soften;
});
var BlockiesScaling = _styled.div(_templateObject3$1(), function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, 1 / PX_RATIO, 1 / PX_RATIO);

var HEIGHT$1 = 5 * GU;
var IDENTICON_SIZE = 6 * GU;

var _StyledEthIdenticon = _styled(EthIdenticon).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "m75adw-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], function (p) {
  return p._css;
});

var AddressField = React.forwardRef(function AddressField(_ref, ref) {
  var address = _ref.address,
      autofocus = _ref.autofocus,
      icon = _ref.icon,
      onCopy = _ref.onCopy,
      props = objectWithoutProperties(_ref, ["address", "autofocus", "icon", "onCopy"]);

  return React.createElement(TextCopy, {
    ref: ref,
    adornment: icon || React.createElement("div", null, React.createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy,
      scale: 2,
      _css: (HEIGHT$1 - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: propTypes.string.isRequired,
  autofocus: propTypes.bool,
  icon: propTypes.node,
  onCopy: propTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

function useArrowKeysFocus(refs) {
  var _useState = useState(-1),
      _useState2 = slicedToArray(_useState, 2),
      highlightedIndex = _useState2[0],
      setHighlightedIndex = _useState2[1];

  var cycleFocus = useCallback(function (e, change) {
    e.preventDefault();
    var next = highlightedIndex + change;

    if (next > refs.length - 1) {
      next = 0;
    }

    if (next < 0) {
      next = refs.length - 1;
    }

    setHighlightedIndex(next);
  }, [highlightedIndex, refs.length]);
  var handleKeyDown = useCallback(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === KEY_UP || keyCode === KEY_DOWN) {
      cycleFocus(event, keyCode === KEY_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  useEffect(function () {
    if (highlightedIndex === -1) {
      return;
    }

    if (!refs[highlightedIndex]) {
      return;
    }

    refs[highlightedIndex].focus();
  }, [highlightedIndex, refs]);
  return {
    highlightedIndex: highlightedIndex,
    setHighlightedIndex: setHighlightedIndex
  };
}

/* eslint-disable react-hooks/rules-of-hooks */

function useClickOutside(cb) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  var handleClick = useCallback(function (e) {
    if (!ref.current.contains(e.target)) {
      cb();
    }
  }, [cb, ref]);
  useEffect(function () {
    document.addEventListener('click', handleClick, true);
    return function () {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
  return {
    ref: ref
  };
}

var A_DAY = 1000 * 60 * 60 * 24;

function cachedMap() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$expireAfter = _ref.expireAfter,
      expireAfter = _ref$expireAfter === void 0 ? A_DAY : _ref$expireAfter,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 100 : _ref$size;

  var cache = new Map(); // Delete the first (oldest) entry if we are above `size`. `cache.size`
  // should never be greater than `size + 1`, so no need for a loop here.

  function trim() {
    if (cache.size > size) {
      cache.delete(cache.keys().next().value);
    }
  } // We are using delete() then set() to reset the position everytime the
  // access is refreshed. That way, the oldest entry is always at the first
  // position and we don’t need to iterate over the entire cache to find it.


  function update(key, value, lastAccess) {
    cache.delete(key);
    cache.set(key, {
      value: value,
      lastAccess: lastAccess
    });
    trim();
  }

  function get(key) {
    var now = new Date();
    var cachedEntry = cache.get(key);

    if (!cachedEntry) {
      return null;
    } // Expired: delete the entry


    if (now - cachedEntry.lastAccess > expireAfter) {
      cache.delete(key);
      return null;
    }

    update(key, cachedEntry.value, now);
    return cachedEntry.value;
  }

  function set(key, value) {
    update(key, value, new Date());
  }

  return {
    clear: function clear() {
      return cache.clear();
    },
    delete: function _delete(key) {
      return cache.delete(key);
    },
    get: get,
    set: set
  };
}

var srcCache = cachedMap(); // Check if a remote image exists and can be loaded within a specific amount of time.

function useImageExists(src) {
  var timeUntilFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      exists = _useState2[0],
      setExists = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = slicedToArray(_useState5, 2),
      displayFallback = _useState6[0],
      setDisplayFallback = _useState6[1];

  useEffect(function () {
    var image = new Image();
    var fallbackTimer = setTimeout(function () {
      return setDisplayFallback(true);
    }, timeUntilFallback);

    var init = function init() {
      if (!src) {
        setExists(false);
        setLoading(false);
        return;
      }

      if (srcCache.get(src)) {
        success();
        return;
      }

      setExists(false);
      setLoading(true); // TODO: ensure only one image is loading at a time for a given src.

      image.addEventListener('load', success);
      image.src = src;
    };

    var success = function success() {
      setLoading(false);
      setExists(true);
      srcCache.set(src, true);
      done();
    };

    var done = function done() {
      clearTimeout(fallbackTimer);

      if (image) {
        image.removeEventListener('load', success);
        image = null;
      }
    };

    init();
    return done;
  }, [src, timeUntilFallback]);
  return useMemo(function () {
    return {
      src: src,
      displayFallback: displayFallback,
      exists: exists,
      loading: loading
    };
  }, [src, displayFallback, exists, loading]);
} // render prop

var ImageExists = function ImageExists(_ref) {
  var timeUntilFallback = _ref.timeUntilFallback,
      src = _ref.src,
      children = _ref.children;
  return children(useImageExists(src, timeUntilFallback));
};

function useKeyDown(key, callback) {
  var keys = useMemo(function () {
    return Array.isArray(key) ? key : [key];
  }, [key]);
  var handlekeyDown = useCallback(function (event) {
    if (keys.includes(event.keyCode)) {
      callback();
    }
  }, [callback, keys]);
  useEffect(function () {
    window.addEventListener('keydown', handlekeyDown);
    return function () {
      window.removeEventListener('keydown', handlekeyDown);
    };
  }, [handlekeyDown]);
}

/* eslint-disable react-hooks/rules-of-hooks */

function useOnBlur(cb) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  var handleBlur = useCallback(function (event) {
    if (!ref.current.contains(event.relatedTarget)) {
      cb(event);
    }
  }, [cb, ref]);
  return {
    ref: ref,
    handleBlur: handleBlur
  };
}

var _StyledButtonBase$5 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "BadgeBase___StyledButtonBase",
  componentId: "sc-4zaahn-0"
})(["display:inline-flex;overflow:hidden;color:", ";height:", "px;background:", ";", ";&:active{", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv$b = _styled.div.withConfig({
  displayName: "BadgeBase___StyledDiv",
  componentId: "sc-4zaahn-1"
})(["overflow:hidden;display:flex;align-items:center;text-decoration:none;", ";"], function (p) {
  return p._css6;
});

var _StyledSpan$5 = _styled.span.withConfig({
  displayName: "BadgeBase___StyledSpan",
  componentId: "sc-4zaahn-2"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;", " ", ""], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var BadgeBase = React.memo(function BadgeBase(_ref) {
  var badgeRef = _ref.badgeRef,
      children = _ref.children,
      className = _ref.className,
      compact = _ref.compact,
      disabled = _ref.disabled,
      href = _ref.href,
      icon = _ref.icon,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      onClick = _ref.onClick,
      style = _ref.style,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ["badgeRef", "children", "className", "compact", "disabled", "href", "icon", "label", "labelStyle", "onClick", "style", "title"]);

  var theme = useTheme();

  var _useInside = useInside('DropDown'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideDropDownMenu = _useInside2[0];

  if (insideDropDownMenu) {
    disabled = true;
  }

  return React.createElement(React.Fragment, null, React.createElement(_StyledButtonBase$5, {
    ref: badgeRef,
    title: title,
    disabled: disabled,
    element: href || disabled ? 'a' : 'button',
    onClick: !disabled ? onClick : undefined,
    href: !disabled ? href : undefined,
    focusRingRadius: RADIUS,
    _css: theme.badgeContent,
    _css2: 3 * GU,
    _css3: compact ? 'transparent' : theme.badge,
    _css4: insideDropDownMenu ? 'cursor: pointer' : '',
    _css5: !disabled && compact ? "background: ".concat(theme.badgePressed) : ''
  }, React.createElement(_StyledDiv$b, {
    className: className,
    style: style,
    _css6: compact ? "\n                  padding: 0 ".concat(1 * GU, "px;\n                  border-radius: 2px;\n                ") : "\n                  padding-left: ".concat((icon ? 0 : 1.5) * GU, "px;\n                  padding-right: ").concat((icon ? 1 : 1.5) * GU, "px;\n                  border-radius: ").concat(RADIUS, "px;\n                ")
  }, icon, React.createElement(_StyledSpan$5, {
    _css7: textStyle('body2'),
    _css8: labelStyle
  }, label))), typeof children === 'function' ? children(disabled) // whether popover is disabled
  : children);
});
BadgeBase.propTypes = {
  badgeRef: propTypes.any,
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  className: propTypes.string,
  compact: propTypes.bool,
  disabled: propTypes.bool,
  href: propTypes.string,
  icon: propTypes.node,
  label: propTypes.node.isRequired,
  labelStyle: propTypes.string,
  onClick: propTypes.func,
  style: propTypes.object,
  title: propTypes.string
};

var BadgePopoverActionType = propTypes.shape({
  label: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired
});

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize$1(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize$1('Height', body, html, computedStyle),
    width: getSize$1('Width', body, html, computedStyle)
  };
}

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$1({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$1({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$1({}, side, reference[side]),
      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$1(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce$1(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var observe = function observe(_observe) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$Component) {
      inherits(_class, _React$Component);

      function _class() {
        var _getPrototypeOf2;

        var _this;

        classCallCheck(this, _class);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

        defineProperty(assertThisInitialized(_this), "state", initialState);

        defineProperty(assertThisInitialized(_this), "subscribe", function (observable) {
          if (observable) {
            _this.setState({
              subscription: _observe(observable).subscribe(function (state) {
                _this.setState(state);
              })
            });
          }
        });

        defineProperty(assertThisInitialized(_this), "unsubscribe", function () {
          _this.state.subscription && _this.state.subscription.unsubscribe();
        });

        return _this;
      }

      createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.subscribe(this.props.observable);
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(_ref) {
          var nextObservable = _ref.observable;
          var observable = this.props.observable; // If a new observable gets passed in, unsubscribe from the old and subscribe to the new

          if (nextObservable !== observable) {
            this.unsubscribe();
            this.subscribe(nextObservable);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.unsubscribe();
        }
      }, {
        key: "render",
        value: function render() {
          warnOnce('observe()', 'observe() is deprecated. If you are using it with @aragon/api, using @aragon/api-react is now recommended instead.');

          var props = _extends_1({}, this.props); // Don't pass down the given observable


          delete props.observable;
          return React.createElement(Component, _extends_1({}, this.state, props));
        }
      }]);

      return _class;
    }(React.Component), defineProperty(_class, "displayName", "Observe(".concat(getDisplayName(Component), ")")), defineProperty(_class, "propTypes", {
      observable: function observable(_ref2, _, componentName) {
        var _observable = _ref2.observable;

        if (_observable && typeof _observable.subscribe !== 'function') {
          throw new Error("Invalid prop `observable` supplied to `".concat(componentName, "` ") + '(wrapped by `observe()`). ' + '`observable` must be an RxJS Observable-like object. ' + "Given ".concat(_observable, " instead."));
        }
      }
    }), _temp;
  };
};

// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var Redraw =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Redraw, _React$PureComponent);

  function Redraw() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Redraw);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Redraw)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      lastDraw: -1
    });

    defineProperty(assertThisInitialized(_this), "draw", function () {
      _this.raf = requestAnimationFrame(_this.draw);
      var interval = _this.props.interval;
      var lastDraw = _this.state.lastDraw;
      var now = Date.now();
      var delta = now - lastDraw;

      if (lastDraw === -1 || delta > interval) {
        _this.setState({
          lastDraw: Math.round(now / interval) * interval
        });
      }
    });

    return _this;
  }

  createClass(Redraw, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.raf = null;
      this.draw();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.raf && cancelAnimationFrame(this.raf);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children();
    }
  }]);

  return Redraw;
}(React.PureComponent);

defineProperty(Redraw, "propTypes", {
  interval: propTypes.number,
  children: propTypes.func.isRequired
});

defineProperty(Redraw, "defaultProps", {
  interval: 1000
});

var hocWrap$1 = function hocWrap(Component, interval) {
  var HOC = function HOC(props) {
    return React.createElement(Redraw, {
      interval: interval
    }, function () {
      return React.createElement(Component, props);
    });
  };

  HOC.displayName = "Redraw(".concat(getDisplayName(Component), ")");
  return HOC;
};

Redraw.hocWrap = hocWrap$1;

// adjusts the re-render timer to be one second, minute, or hour based on the
// fromDate prop.
// For a discussion on pitfalls, see
// https://gist.github.com/staltz/08bf613199092eeb41ac8137d51eb5e6

var EVERY_SECOND = 1000;
var EVERY_MINUTE = EVERY_SECOND * 60;
var EVERY_HOUR = EVERY_MINUTE * 60;

var getRedrawTime = function getRedrawTime(fromDate) {
  var _difference = difference(new Date(), fromDate),
      days = _difference.days,
      hours = _difference.hours,
      minutes = _difference.minutes;

  return hours || days ? EVERY_HOUR : minutes > 1 ? EVERY_MINUTE : EVERY_SECOND;
};

var RedrawFromDate =
/*#__PURE__*/
function (_React$Component) {
  inherits(RedrawFromDate, _React$Component);

  function RedrawFromDate() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, RedrawFromDate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(RedrawFromDate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    defineProperty(assertThisInitialized(_this), "clearInterval", function () {
      _this.interval && clearInterval(_this.interval);
    });

    defineProperty(assertThisInitialized(_this), "restartDrawInterval", function (redrawTime) {
      _this.clearInterval();

      _this.interval = setInterval(function () {
        _this.setState({
          lastDraw: Date.now()
        });

        var newRedrawTime = getRedrawTime(_this.props.fromDate);

        if (newRedrawTime !== redrawTime) {
          _this.restartDrawInterval(newRedrawTime);
        }
      }, redrawTime);
    });

    return _this;
  }

  createClass(RedrawFromDate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fromDate = this.props.fromDate;

      if (fromDate) {
        this.restartDrawInterval(getRedrawTime(fromDate));
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(_ref) {
      var fromDate = _ref.fromDate;

      if (!fromDate && this.props.fromDate) {
        this.clearInterval();
      } else if (!dayjs_min(fromDate).isSame(this.props.fromDate)) {
        this.restartDrawInterval(getRedrawTime(this.props.fromDate));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearInterval();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children();
    }
  }]);

  return RedrawFromDate;
}(React.Component);

defineProperty(RedrawFromDate, "propTypes", {
  children: propTypes.func.isRequired,
  fromDate: propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.instanceOf(Date)]).isRequired
});

var hocWrap$2 = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return React.createElement(RedrawFromDate, {
      fromDate: props.fromDate
    }, function () {
      return React.createElement(Component, props);
    });
  };

  HOC.propTypes = {
    fromDate: RedrawFromDate.propTypes.fromDate
  };
  HOC.displayName = "RedrawFromDate(".concat(getDisplayName(Component), ")");
  return HOC;
};

RedrawFromDate.hocWrap = hocWrap$2;

var _ref3;

function ownKeys$b(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$b(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$b(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$b(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledAnimatedDiv$3 = _styled(extendedAnimated.div).withConfig({
  displayName: "Popover___StyledAnimatedDiv",
  componentId: "sc-1hohxqp-0"
})(["position:absolute;top:0;left:0;"]);

var _StyledAnimatedDiv2$1 = _styled(extendedAnimated.div).withConfig({
  displayName: "Popover___StyledAnimatedDiv2",
  componentId: "sc-1hohxqp-1"
})(["background:", ";border:1px solid ", ";border-radius:", "px;filter:drop-shadow(0 4px 4px rgba(0,0,0,0.15));&:focus{outline:0;}overflow-y:auto;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, RADIUS);

var PopoverBase =
/*#__PURE__*/
function (_React$Component) {
  inherits(PopoverBase, _React$Component);

  function PopoverBase() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, PopoverBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(PopoverBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "_cardElement", React.createRef());

    defineProperty(assertThisInitialized(_this), "_popperElement", React.createRef());

    defineProperty(assertThisInitialized(_this), "_document", null);

    defineProperty(assertThisInitialized(_this), "_popper", null);

    defineProperty(assertThisInitialized(_this), "handleEscape", function (_ref) {
      var keyCode = _ref.keyCode;
      var _this$props = _this.props,
          opener = _this$props.opener,
          onClose = _this$props.onClose;

      if (keyCode === KEY_ESC) {
        // On escape, we always move the focus back to the opener.
        opener.focus();
        onClose();
      }
    });

    defineProperty(assertThisInitialized(_this), "handleBlur", function (event) {
      var _this$props2 = _this.props,
          closeOnOpenerFocus = _this$props2.closeOnOpenerFocus,
          opener = _this$props2.opener,
          onClose = _this$props2.onClose;
      var focusedElement = event.relatedTarget; // Do not close if:
      // - The blur event is emitted from an element inside of the popover.
      // - The focused target is the opener and closeOnOpenerFocus is true.

      if (_this._cardElement.current && _this._cardElement.current.contains(focusedElement) || closeOnOpenerFocus && opener && opener.contains(focusedElement)) {
        if (closeOnOpenerFocus && (opener.tagName === 'BUTTON' || opener.tagName === 'INPUT')) {
          warn('Popover: using "closeOnOpenerFocus" with a <button> or <input> may lead to bugs due ' + 'to cross-environment focus event handling. ' + 'See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus ' + 'for more information.');
        }

        return;
      } // Probably a click outside, that doesn’t focus anything else: move the
      // focus back to the opener.


      if (!focusedElement) {
        opener.focus();
      }

      onClose();
    });

    return _this;
  }

  createClass(PopoverBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._document = this._popperElement.current.ownerDocument;

      this._document.addEventListener('keydown', this.handleEscape);

      this._cardElement.current.focus();

      this.initPopper();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroyPopper();

      this._document.removeEventListener('keydown', this.handleEscape);

      delete this._document;
      delete this._popper;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props3 = this.props,
          placement = _this$props3.placement,
          children = _this$props3.children,
          opener = _this$props3.opener;

      if (prevProps.placement !== placement || prevProps.children !== children || prevProps.opener !== opener) {
        this.destroyPopper();
        this.initPopper();
      }
    }
  }, {
    key: "getPopperSettings",
    value: function getPopperSettings() {
      var _this$props4 = this.props,
          placement = _this$props4.placement,
          rootBoundary = _this$props4.rootBoundary;
      var settings = {
        placement: placement,
        modifiers: {
          preventOverflow: {
            enabled: true,
            padding: 10,
            boundariesElement: rootBoundary || 'window'
          }
        },
        positionFixed: false
      };

      if (placement !== 'center') {
        return settings;
      }

      return _objectSpread$b({}, settings, {
        placement: 'top-start',
        modifiers: _objectSpread$b({}, settings.modifiers, {
          arrow: {
            enabled: false
          },
          flip: {
            enabled: false
          },
          offset: {
            enabled: true,
            offset: '50% - 50%p, -50%p - 50%'
          }
        })
      });
    }
  }, {
    key: "initPopper",
    value: function initPopper() {
      var opener = this.props.opener;

      if (!this._popper) {
        this._popper = new Popper(opener, this._popperElement.current, this.getPopperSettings());
      }
    }
  }, {
    key: "destroyPopper",
    value: function destroyPopper() {
      if (this._popper) {
        this._popper.destroy();

        this._popper = null;
      }
    }
  }, {
    key: "boundaryDimensions",
    value: function boundaryDimensions() {
      var rootBoundary = this.props.rootBoundary;
      return rootBoundary ? [rootBoundary.clientWidth, rootBoundary.clientHeight] : [window.innerWidth, window.innerHeight];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          children = _this$props5.children,
          theme = _this$props5.theme,
          transitionStyles = _this$props5.transitionStyles,
          zIndex = _this$props5.zIndex;
      var scale = transitionStyles.scale,
          opacity = transitionStyles.opacity;

      var _this$boundaryDimensi = this.boundaryDimensions(),
          _this$boundaryDimensi2 = slicedToArray(_this$boundaryDimensi, 2),
          maxWidth = _this$boundaryDimensi2[0],
          maxHeight = _this$boundaryDimensi2[1];

      return React.createElement(_StyledAnimatedDiv$3, {
        ref: this._popperElement,
        style: {
          zIndex: zIndex
        }
      }, React.createElement(_StyledAnimatedDiv2$1, _extends_1({
        tabIndex: "0",
        onBlur: this.handleBlur,
        ref: this._cardElement,
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (v) {
            return "scale3d(".concat(v, ", ").concat(v, ", 1)");
          }),
          maxHeight: "".concat(maxHeight - 2 * GU, "px"),
          maxWidth: "".concat(maxWidth - 2 * GU, "px")
        }
      }, stylingProps(this), {
        _css: theme.surface,
        _css2: theme.border
      }), children));
    }
  }]);

  return PopoverBase;
}(React.Component);

defineProperty(PopoverBase, "propTypes", {
  children: propTypes.node,
  closeOnOpenerFocus: propTypes.bool,
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  placement: propTypes.oneOf( // "center" is a value that doesn’t exist in Popper, but we are using it
  // to define custom Popper settings (see getPopperSettings() below).
  (_ref3 = ['center']).concat.apply(_ref3, toConsumableArray(['auto', 'top', 'right', 'bottom', 'left'].map(function (position) {
    return [position, "".concat(position, "-start"), "".concat(position, "-end")];
  })))),
  rootBoundary: propTypes.instanceOf(Element),
  theme: propTypes.object,
  transitionStyles: propTypes.object,
  zIndex: propTypes.number
});

defineProperty(PopoverBase, "defaultProps", {
  closeOnOpenerFocus: false,
  opener: null,
  placement: 'center',
  onClose: noop,
  zIndex: 999
});

function Popover(_ref2) {
  var scaleEffect = _ref2.scaleEffect,
      visible = _ref2.visible,
      props = objectWithoutProperties(_ref2, ["scaleEffect", "visible"]);

  var theme = useTheme();
  var root = useRoot();
  return React.createElement(RootPortal, null, React.createElement(Transition, {
    items: visible,
    config: springs.swift,
    from: {
      scale: scaleEffect ? 0.9 : 1,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: scaleEffect ? 0.9 : 1,
      opacity: 0
    },
    native: true
  }, function (visible) {
    return visible && function (transitionStyles) {
      return React.createElement(PopoverBase, _extends_1({}, props, {
        rootBoundary: root,
        theme: theme,
        transitionStyles: transitionStyles
      }));
    };
  }));
}

Popover.propTypes = _objectSpread$b({}, PopoverBase.propTypes, {
  scaleEffect: propTypes.bool,
  visible: propTypes.bool
});
Popover.defaultProps = _objectSpread$b({}, PopoverBase.defaultProps, {
  scaleEffect: true,
  visible: true
});

var _StyledSection$1 = _styled.section.withConfig({
  displayName: "BadgePopoverBase___StyledSection",
  componentId: "xfkga1-0"
})(["position:relative;max-width:calc(100vw - 20px);min-width:300px;"]);

var _StyledButtonIcon$3 = _styled(ButtonIcon).withConfig({
  displayName: "BadgePopoverBase___StyledButtonIcon",
  componentId: "xfkga1-1"
})(["position:absolute;top:0;right:0;border-radius:0;color:", ";"], function (p) {
  return p._css;
});

var _StyledHeader = _styled.header.withConfig({
  displayName: "BadgePopoverBase___StyledHeader",
  componentId: "xfkga1-2"
})(["display:flex;align-items:center;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledH$3 = _styled.h1.withConfig({
  displayName: "BadgePopoverBase___StyledH",
  componentId: "xfkga1-3"
})(["", " font-weight:400;color:", ";"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv$c = _styled.div.withConfig({
  displayName: "BadgePopoverBase___StyledDiv",
  componentId: "xfkga1-4"
})(["padding:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv2$8 = _styled.div.withConfig({
  displayName: "BadgePopoverBase___StyledDiv2",
  componentId: "xfkga1-5"
})(["display:flex;margin-top:", "px;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledP$1 = _styled.p.withConfig({
  displayName: "BadgePopoverBase___StyledP",
  componentId: "xfkga1-6"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledButton$2 = _styled(ButtonWithRef).withConfig({
  displayName: "BadgePopoverBase___StyledButton",
  componentId: "xfkga1-7"
})(["padding:0 ", "px;color:", ";"], function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var BadgePopoverBase = React.memo(function BadgePopoverBase(_ref) {
  var addressField = _ref.addressField,
      link = _ref.link,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      titleTag = _ref.titleTag,
      visible = _ref.visible;
  var theme = useTheme();
  var handlePopoverActionClick = useCallback(function () {
    onClose();

    if (popoverAction && popoverAction.onClick) {
      popoverAction.onClick();
    }
  }, [onClose, popoverAction]);
  return React.createElement(Popover, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, React.createElement(_StyledSection$1, null, React.createElement(_StyledButtonIcon$3, {
    label: "Close",
    onClick: onClose,
    _css: theme.surfaceIcon
  }, React.createElement(IconCross, {
    size: "small"
  })), React.createElement(_StyledHeader, {
    _css2: 4 * GU,
    _css3: 2 * GU,
    _css4: theme.border
  }, React.createElement(_StyledH$3, {
    _css5: textStyle('label2'),
    _css6: theme.surfaceContentSecondary
  }, title), titleTag), React.createElement(_StyledDiv$c, {
    _css7: 2 * GU
  }, addressField, React.createElement(_StyledDiv2$8, {
    _css8: 2 * GU,
    _css9: link ? "\n                  flex-direction: row-reverse;\n                  justify-content: space-between;\n                " : ''
  }, link && React.createElement(_StyledP$1, {
    _css10: textStyle('body3')
  }, link), popoverAction && React.createElement(_StyledButton$2, {
    size: "medium",
    onClick: handlePopoverActionClick,
    _css11: 2 * GU,
    _css12: theme.surfaceContentSecondary
  }, popoverAction.label)))));
});
BadgePopoverBase.propTypes = {
  addressField: propTypes.node.isRequired,
  link: propTypes.node,
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  popoverAction: BadgePopoverActionType,
  title: propTypes.node.isRequired,
  titleTag: propTypes.node,
  visible: propTypes.bool
};
BadgePopoverBase.defaultProps = {
  onClose: noop
};

var AppBadgePopover = React.memo(function AppBadgePopover(_ref) {
  var appAddress = _ref.appAddress,
      iconFallbackSrc = _ref.iconFallbackSrc,
      iconSrc = _ref.iconSrc,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('address', appAddress, {
    networkType: networkType
  });
  return React.createElement(BadgePopoverBase, {
    addressField: React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists,
          displayFallback = _ref2.displayFallback;
      return React.createElement(AddressField, {
        address: appAddress,
        icon: React.createElement(Icon, {
          src: exists ? iconSrc : iconFallbackSrc
        })
      });
    }),
    link: etherscanUrl && React.createElement(Link, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    visible: visible
  });
});
AppBadgePopover.propTypes = {
  appAddress: propTypes.string.isRequired,
  iconFallbackSrc: propTypes.string,
  iconSrc: propTypes.string,
  networkType: propTypes.string,
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  popoverAction: BadgePopoverActionType,
  title: propTypes.node.isRequired,
  visible: propTypes.bool
};

var _StyledDiv$d = _styled.div.withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "cornse-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css;
});

function Icon(_ref3) {
  var src = _ref3.src,
      props = objectWithoutProperties(_ref3, ["src"]);

  return React.createElement(_StyledDiv$d, _extends_1({}, props, {
    _css: src
  }));
}

Icon.propTypes = {
  src: propTypes.string.isRequired
};

var iconDefaultSvg = "data:image/svg+xml,%3Csvg%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M56%200H0v56h56V0z%22%20fill%3D%22url%28%23paint0_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.363%2010.74L13.04%2019.56v17.645l15.322%208.821%2015.323-8.821V19.56l-15.322-8.82z%22%20fill%3D%22url%28%23paint1_linear%29%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M28.363%2046.027V10.74l15.323%208.821v17.645l-15.323%208.821z%22%20fill%3D%22%2373F0F8%22%2F%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M13.041%2019.561l15.322-8.822%2015.323%208.822-15.323%208.426-15.322-8.425z%22%20fill%3D%22url%28%23paint2_linear%29%22%2F%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22paint0_linear%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%2256%22%20y2%3D%2253.105%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2333BCE6%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2348E2E5%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint1_linear%22%20x1%3D%2214.618%22%20y1%3D%2219.282%22%20x2%3D%2231.423%22%20y2%3D%2243.942%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%232597B7%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2339C5E1%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22paint2_linear%22%20x1%3D%2214.799%22%20y1%3D%2219.363%22%20x2%3D%2243.686%22%20y2%3D%2219.363%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%233DCEE5%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2348E2E6%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var _StyledDiv$e = _styled.div.withConfig({
  displayName: "AppBadge___StyledDiv",
  componentId: "sc-5gkmrm-0"
})(["display:grid;align-items:center;grid-template-columns:auto 1fr;"]);

var _StyledSpan$6 = _styled.span.withConfig({
  displayName: "AppBadge___StyledSpan",
  componentId: "sc-5gkmrm-1"
})(["display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);

var _StyledTag = _styled(Tag).withConfig({
  displayName: "AppBadge___StyledTag",
  componentId: "sc-5gkmrm-2"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var AppBadge = React.memo(function AppBadge(_ref) {
  var appAddress = _ref.appAddress,
      badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      iconSrc = _ref.iconSrc,
      identifier = _ref.identifier,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      props = objectWithoutProperties(_ref, ["appAddress", "badgeOnly", "compact", "iconSrc", "identifier", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle"]);

  var badgeRef = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = useCallback(function () {
    return setOpened(true);
  }, []);
  var isValidAddress = isAddress(appAddress);

  if (!badgeOnly && !isValidAddress) {
    warn("AppBadge: provided invalid app address (".concat(appAddress, ")"));
  }

  popoverTitle = popoverTitle || React.createElement(_StyledDiv$e, null, React.createElement(_StyledSpan$6, null, label), identifier && React.createElement(_StyledTag, {
    mode: "identifier",
    _css: 1 * GU
  }, identifier));
  return React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var displayFallback = _ref2.displayFallback,
          exists = _ref2.exists;
      return React.createElement(Icon$1, {
        compact: compact,
        src: exists ? iconSrc : iconDefaultSvg
      });
    }),
    label: label,
    labelStyle: labelStyle,
    onClick: isValidAddress ? handleOpen : undefined,
    title: appAddress
  }, function (popoverDisabled) {
    return !popoverDisabled && appAddress && React.createElement(AppBadgePopover, {
      appAddress: appAddress,
      iconFallbackSrc: iconDefaultSvg,
      iconSrc: iconSrc,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
AppBadge.propTypes = {
  appAddress: propTypes.string,
  badgeOnly: propTypes.bool,
  compact: propTypes.bool,
  iconSrc: propTypes.string,
  identifier: propTypes.string,
  label: propTypes.string.isRequired,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: propTypes.node
};

var _StyledSpan2$3 = _styled.span.withConfig({
  displayName: "AppBadge___StyledSpan2",
  componentId: "sc-5gkmrm-3"
})(["flex-shrink:0;width:", "px;height:", "px;margin-right:", "px;border-radius:", ";background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var Icon$1 = function Icon(_ref3) {
  var compact = _ref3.compact,
      src = _ref3.src,
      props = objectWithoutProperties(_ref3, ["compact", "src"]);

  var size = (compact ? 2.25 : 3) * GU;
  return React.createElement(_StyledSpan2$3, _extends_1({}, props, {
    _css2: size,
    _css3: size,
    _css4: 1 * GU,
    _css5: compact ? "".concat(RADIUS, "px") : 0,
    _css6: src
  }));
};

Icon$1.propTypes = {
  compact: propTypes.bool,
  src: propTypes.string.isRequired
};

var _StyledButtonBase$6 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "BackButton___StyledButtonBase",
  componentId: "ebowg7-0"
})(["display:inline-flex;align-items:center;border-radius:", "px 0 0 ", "px;height:100%;margin-left:", "px;padding:0 ", "px 0 ", "px;border-right:1px solid ", ";color:", ";background:", ";&:active{background:", ";}"], RADIUS, RADIUS, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledSpan$7 = _styled.span.withConfig({
  displayName: "BackButton___StyledSpan",
  componentId: "ebowg7-1"
})(["position:relative;top:2px;color:", ";"], function (p) {
  return p._css8;
});

var _StyledSpan2$4 = _styled.span.withConfig({
  displayName: "BackButton___StyledSpan2",
  componentId: "ebowg7-2"
})(["padding-left:", "px;font-size:16px;font-weight:600;"], function (p) {
  return p._css9;
});

function BackButton(_ref) {
  var label = _ref.label,
      props = objectWithoutProperties(_ref, ["label"]);

  var theme = useTheme();

  var _useInside = useInside('Bar:primary'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBarPrimary = _useInside2[0];

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var compact = layoutName === 'small';
  var horizontalPadding = (compact ? 2 : 3) * GU;
  return React.createElement(_StyledButtonBase$6, _extends_1({
    focusRingRadius: RADIUS,
    focusRingSpacing: 1
  }, props, {
    _css: insideBarPrimary ? -Bar.PADDING : 0,
    _css2: horizontalPadding,
    _css3: horizontalPadding - 4,
    _css4: theme.border,
    _css5: theme.surfaceContent,
    _css6: theme.surfaceInteractive,
    _css7: theme.surfaceHighlight
  }), React.createElement(_StyledSpan$7, {
    _css8: theme.accent
  }, React.createElement(IconArrowLeft, null)), React.createElement(_StyledSpan2$4, {
    _css9: 1 * GU
  }, label));
}

BackButton.propTypes = {
  label: propTypes.string
};
BackButton.defaultProps = {
  label: 'Back'
};

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var overpassMonoLightWoff2 = "3dd21d4f0d28fecb.woff2";

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n\n  // @font-face declarations\n  ", "\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n  html {\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    height: 0;\n    min-height: 100vh;\n    color: ", ";\n    background: ", ";\n    font-family: ", ";\n    ", ";\n  }\n  html, body {\n    overflow: hidden;\n  }\n  body, ul, p, h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button, select, input, textarea, h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a, button, select, input, textarea {\n    color: inherit;\n  }\n  strong, b {\n    font-weight: 600;\n  }\n  ::selection {\n    background: ", ";\n    color: ", ";\n  }\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var DEFAULT_FONTS = {
  '400': {
    url: overpassLightWoff2,
    format: 'woff2'
  },
  '600': {
    url: overpassRegularWoff2,
    format: 'woff2'
  },
  '800': {
    url: overpassSemiBoldWoff2,
    format: 'woff2'
  }
};
var MONOSPACE_FONTS = {
  '400': {
    url: overpassMonoLightWoff2,
    format: 'woff2'
  }
};

function fontSrc(publicUrl, _ref) {
  var url = _ref.url,
      format = _ref.format;
  return "url(".concat(publicUrl + url, ") format('").concat(format, "')");
}

function fontFaceDeclarations(_ref2) {
  var fontFamily = _ref2.fontFamily,
      publicUrl = _ref2.publicUrl;

  // No need to declare the font faces if the font family has changed.
  if (fontFamily !== BaseStyles.defaultProps.fontFamily) {
    return '';
  }

  return "\n    @font-face {\n      font-family: ".concat(DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['600']), ";\n      font-weight: 600;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(DEFAULT_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, DEFAULT_FONTS['800']), ";\n      font-weight: 800;\n      font-style: normal;\n    }\n    @font-face {\n      font-family: ").concat(MONOSPACE_FONT_FAMILY, ";\n      src: ").concat(fontSrc(publicUrl, MONOSPACE_FONTS['400']), ";\n      font-weight: 400;\n      font-style: normal;\n    }\n  ");
}

var BaseStyles = React.memo(function BaseStyles(props) {
  var theme = useTheme();
  return React.createElement(GlobalStyle, _extends_1({}, props, {
    theme: theme,
    fontFaces: fontFaceDeclarations(props),
    textStyleCss: textStyle('body2')
  }));
});
BaseStyles.propTypes = {
  publicUrl: propTypes.string,
  fontFamily: propTypes.string
};
BaseStyles.defaultProps = {
  publicUrl: '/',
  fontFamily: "".concat(DEFAULT_FONT_FAMILY, ", sans-serif")
};
var GlobalStyle = createGlobalStyle(_templateObject$2(), function (p) {
  return p.fontFaces ? p.fontFaces : '';
}, function (p) {
  return p.theme.content;
}, function (p) {
  return p.theme.background;
}, function (p) {
  return p.fontFamily;
}, function (p) {
  return p.textStyleCss;
}, function (p) {
  return p.theme.selected;
}, function (p) {
  return p.theme.selectedContent;
});
var BaseStyles$1 = PublicUrl.hocWrap(BaseStyles);

function ownKeys$c(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$c(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$c(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$c(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledButtonBase$7 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ButtonText___StyledButtonBase",
  componentId: "i6an1t-0"
})(["padding:", "px ", "px ", "px ", "px;color:", ";font-size:inherit;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function ButtonText(_ref) {
  var horizontalPadding = _ref.horizontalPadding,
      props = objectWithoutProperties(_ref, ["horizontalPadding"]);

  var theme = useTheme();
  var leftPadding = Number(horizontalPadding === 'left' || horizontalPadding === 'both') * GU;
  var rightPadding = Number(horizontalPadding === 'right' || horizontalPadding === 'both') * GU;
  return React.createElement(_StyledButtonBase$7, _extends_1({}, props, {
    _css: 1 * GU,
    _css2: rightPadding,
    _css3: 1 * GU,
    _css4: leftPadding,
    _css5: theme.link
  }));
}

ButtonText.propTypes = _objectSpread$c({}, ButtonBaseWithFocus.propTypes, {
  horizontalPadding: propTypes.oneOf(['both', 'left', 'right', 'none'])
});
ButtonText.defaultProps = {
  horizontalPadding: 'both'
};

var DEFAULT_WIDTH = 35 * GU;
var DEFAULT_HEIGHT = 40 * GU;

function dimension(insideCardLayout, value, defaultValue) {
  if (insideCardLayout) {
    return '100%';
  }

  if (typeof value === 'number') {
    value = "".concat(value, "px");
  }

  return value === undefined ? defaultValue : value;
}

var _StyledDiv$f = _styled.div.withConfig({
  displayName: "Card___StyledDiv",
  componentId: "sc-13r75gj-0"
})(["position:relative;width:", ";height:", ";background:", ";border:1px solid ", ";border-radius:", "px;cursor:", ";display:flex;flex-direction:column;align-items:center;justify-content:center;", ""], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, RADIUS, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function Card(_ref) {
  var children = _ref.children,
      width = _ref.width,
      height = _ref.height,
      onClick = _ref.onClick,
      props = objectWithoutProperties(_ref, ["children", "width", "height", "onClick"]);

  var theme = useTheme();

  var _useInside = useInside('CardLayout'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideCardLayout = _useInside2[0];

  var interactive = Boolean(onClick);
  var interactiveProps = interactive ? {
    as: ButtonBaseWithFocus,
    element: 'div',
    focusRingRadius: RADIUS,
    onClick: onClick
  } : {};
  var cssWidth = dimension(insideCardLayout, width, "".concat(DEFAULT_WIDTH, "px"));
  var cssHeight = dimension(insideCardLayout, height, "".concat(DEFAULT_HEIGHT, "px"));
  return React.createElement(_StyledDiv$f, _extends_1({}, interactiveProps, props, {
    _css: cssWidth,
    _css2: cssHeight,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: interactive ? 'pointer' : 'default',
    _css6: interactive && css(["border:0;box-shadow:0px 1px 3px rgba(0,0,0,0.15);transition-property:transform,box-shadow;transition-duration:50ms;transition-timing-function:ease-in-out;text-align:left;white-space:normal;&:active{transform:translateY(1px);box-shadow:0px 1px 3px rgba(0,0,0,0.08);}"])
  }), children);
}

Card.propTypes = {
  children: propTypes.node,
  height: propTypes.oneOfType([propTypes.string, propTypes.number]),
  width: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onClick: propTypes.func
};

var _StyledDiv$g = _styled.div.withConfig({
  displayName: "CardLayout___StyledDiv",
  componentId: "p97qvl-0"
})(["display:grid;grid-gap:", "px;grid-auto-flow:row;grid-template-columns:repeat( ", ",minmax(", "px,1fr) );grid-auto-rows:", "px;align-items:start;padding:0 ", "px ", "px;margin:0 auto;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function CardLayout(_ref) {
  var children = _ref.children,
      columnWidthMin = _ref.columnWidthMin,
      rowHeight = _ref.rowHeight,
      props = objectWithoutProperties(_ref, ["children", "columnWidthMin", "rowHeight"]);

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  return React.createElement(Inside, {
    name: "CardLayout"
  }, React.createElement(_StyledDiv$g, _extends_1({}, props, {
    _css: 2 * GU,
    _css2: fullWidth ? 'auto-fit' : 'auto-fill',
    _css3: columnWidthMin,
    _css4: rowHeight,
    _css5: fullWidth ? 2 * GU : 0,
    _css6: 3 * GU
  }), children));
}

CardLayout.propTypes = {
  children: propTypes.node,
  columnWidthMin: propTypes.number,
  rowHeight: propTypes.number
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * GU,
  rowHeight: 21 * GU
};

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 400;\n  color: #000;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = taggedTemplateLiteral(["\n  fill: none;\n  transform: rotate(270deg);\n  transform-origin: 50% 50%;\n  stroke: #21c1e7;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = taggedTemplateLiteral(["\n  fill: none;\n  stroke: #6d777b;\n  opacity: 0.3;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var BORDER_WIDTH = 4;
var VALUE_DEFAULT = 1;
var SIZE_DEFAULT = 80;

var LABEL_DEFAULT = function LABEL_DEFAULT(value) {
  return "".concat(Math.round(value * 100), "%");
};

var CircleGraph = function CircleGraph(_ref) {
  var value = _ref.value,
      label = _ref.label,
      size = _ref.size;
  var length = Math.PI * 2 * (size - BORDER_WIDTH);
  var radius = (size - BORDER_WIDTH) / 2;
  return React.createElement(Spring, {
    to: {
      progressValue: value
    },
    native: true
  }, function (_ref2) {
    var progressValue = _ref2.progressValue;
    return React.createElement(Main$1, {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: "".concat(size, "px"),
        height: "".concat(size, "px")
      }
    }, React.createElement(CircleSvg, {
      width: size,
      height: size,
      viewBox: "0 0 ".concat(size, " ").concat(size)
    }, React.createElement(CircleBase, {
      cx: size / 2,
      cy: size / 2,
      r: radius
    }), React.createElement(CircleValue, {
      cx: size / 2,
      cy: size / 2,
      r: radius,
      style: {
        strokeDasharray: length,
        strokeDashoffset: progressValue.interpolate(function (t) {
          return length - length * t / 2;
        }),
        strokeWidth: BORDER_WIDTH
      }
    })), React.createElement(Label, null, progressValue.interpolate(function (t) {
      return label(Math.min(1, Math.max(0, t)));
    })));
  });
};

CircleGraph.propTypes = {
  value: propTypes.number,
  size: propTypes.number,
  label: propTypes.func
};
CircleGraph.defaultProps = {
  value: VALUE_DEFAULT,
  size: SIZE_DEFAULT,
  label: LABEL_DEFAULT
};
var Main$1 = _styled.div(_templateObject$3());
var CircleSvg = _styled.svg(_templateObject2$2());
var CircleBase = _styled.circle(_templateObject3$2());
var CircleValue = _styled(extendedAnimated.circle)(_templateObject4$1());
var Label = _styled(extendedAnimated.div)(_templateObject5());

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ClickOutComponent = function (_React$Component) {
  _inherits$1(ClickOutComponent, _React$Component);

  function ClickOutComponent() {
    _classCallCheck$1(this, ClickOutComponent);

    return _possibleConstructorReturn$1(this, (ClickOutComponent.__proto__ || Object.getPrototypeOf(ClickOutComponent)).call(this));
  }

  _createClass$1(ClickOutComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var elTouchIsClick = true;
      var documentTouchIsClick = true;
      var el = ReactDOM.findDOMNode(this);

      self.__documentTouchStarted = function (e) {
        el.removeEventListener('click', self.__elementClicked);
        document.removeEventListener('click', self.__documentClicked);
      };

      self.__documentTouchMoved = function (e) {
        documentTouchIsClick = false;
      };

      self.__documentTouchEnded = function (e) {
        if (documentTouchIsClick) self.__documentClicked(e);
        documentTouchIsClick = true;
      };

      self.__documentClicked = function (e) {
        if ((e.__clickedElements || []).indexOf(el) !== -1) return;

        var clickOutHandler = self.onClickOut || self.props.onClickOut;
        if (!clickOutHandler) {
          return console.warn('onClickOut is not defined.');
        }

        clickOutHandler.call(self, e);
      };

      self.__elementTouchMoved = function (e) {
        elTouchIsClick = false;
      };

      self.__elementTouchEnded = function (e) {
        if (elTouchIsClick) self.__elementClicked(e);
        elTouchIsClick = true;
      };

      self.__elementClicked = function (e) {
        e.__clickedElements = e.__clickedElements || [];
        e.__clickedElements.push(el);
      };

      setTimeout(function () {
        if (self.__unmounted) return;
        self.toggleListeners('addEventListener');
      }, 0);
    }
  }, {
    key: 'toggleListeners',
    value: function toggleListeners(listenerMethod) {
      var el = ReactDOM.findDOMNode(this);

      el[listenerMethod]('touchmove', this.__elementTouchMoved);
      el[listenerMethod]('touchend', this.__elementTouchEnded);
      el[listenerMethod]('click', this.__elementClicked);

      document[listenerMethod]('touchstart', this.__documentTouchStarted);
      document[listenerMethod]('touchmove', this.__documentTouchMoved);
      document[listenerMethod]('touchend', this.__documentTouchEnded);
      document[listenerMethod]('click', this.__documentClicked);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.toggleListeners('removeEventListener');
      this.__unmounted = true;
    }
  }, {
    key: 'render',
    value: function render() {
      return Array.isArray(this.props.children) ? React.createElement(
        'div',
        null,
        this.props.children
      ) : React.Children.only(this.props.children);
    }
  }]);

  return ClickOutComponent;
}(React.Component);

var reactOnclickout = ClickOutComponent;

var BASE_WIDTH = 46;
var BASE_HEIGHT = 32;

var _StyledIconEllipsis$1 = _styled(IconEllipsis).withConfig({
  displayName: "ContextMenu___StyledIconEllipsis",
  componentId: "ris724-0"
})([""]);

var _StyledIconDown = _styled(IconDown).withConfig({
  displayName: "ContextMenu___StyledIconDown",
  componentId: "ris724-1"
})(["color:", ";"], function (p) {
  return p._css7;
});

var _StyledAnimatedDiv$4 = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu___StyledAnimatedDiv",
  componentId: "ris724-2"
})(["z-index:", ";overflow:hidden;position:absolute;top:", "px;right:0;background:", ";border:1px solid ", ";border-radius:3px 0 3px 3px;"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
});

var _StyledDiv$h = _styled.div.withConfig({
  displayName: "ContextMenu___StyledDiv",
  componentId: "ris724-3"
})(["z-index:", ";position:absolute;bottom:0;right:1px;height:1px;width:", "px;background:", ";"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function ContextMenu(_ref) {
  var children = _ref.children,
      zIndex = _ref.zIndex,
      disabled = _ref.disabled;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    setOpened(false);
  }, []);
  var handleBaseButtonClick = useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []); // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)

  var appliedZIndex = opened ? zIndex + 1 : zIndex;
  return React.createElement(reactOnclickout, {
    onClickOut: handleClose
  }, React.createElement(Spring, {
    config: springs.smooth,
    to: {
      openProgress: Number(opened)
    },
    native: true
  }, function (_ref2) {
    var openProgress = _ref2.openProgress;
    return React.createElement(_StyledMain, {
      style: {
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css: appliedZIndex
    }, React.createElement(_StyledButton$3, {
      onClick: handleBaseButtonClick,
      opened: opened,
      disabled: disabled,
      focusRingRadius: RADIUS,
      _css2: disabled ? theme.disabledContent : opened ? theme.accent : theme.surfaceContent,
      _css3: disabled ? theme.disabled : theme.surface,
      _css4: disabled ? '0' : "1px solid ".concat(theme.border),
      _css5: opened ? theme.surface : theme.border,
      _css6: disabled ? '' : "&:active {\n                  background: ".concat(theme.surfacePressed, ";\n                  border-bottom-color: ").concat(opened ? theme.surfacePressed : theme.border, ";\n                }")
    }, React.createElement(_StyledIconEllipsis$1, null), React.createElement(extendedAnimated.div, {
      style: {
        display: 'flex',
        alignItems: 'center',
        transformOrigin: '50% 50%',
        transform: openProgress.interpolate(function (v) {
          return "rotate(".concat(v * 180, "deg)");
        })
      }
    }, React.createElement(_StyledIconDown, {
      size: "tiny",
      _css7: disabled ? theme.disabledIcon : theme.surfaceIcon
    }))), opened && React.createElement(React.Fragment, null, React.createElement(_StyledAnimatedDiv$4, {
      onClick: handleClose,
      style: {
        opacity: openProgress,
        boxShadow: openProgress.interpolate(function (t) {
          return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
        })
      },
      _css8: appliedZIndex + 1,
      _css9: BASE_HEIGHT - 1,
      _css10: theme.surface,
      _css11: theme.border
    }, children), React.createElement(_StyledDiv$h, {
      _css12: appliedZIndex + 1,
      _css13: BASE_WIDTH - 2,
      _css14: theme.surface
    })));
  }));
}

ContextMenu.propTypes = {
  children: propTypes.node,
  zIndex: propTypes.number,
  disabled: propTypes.bool
};
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false
};
var Main$2 = _styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "ris724-4"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);

var _StyledMain = _styled(Main$2).withConfig({
  displayName: "ContextMenu___StyledMain",
  componentId: "ris724-5"
})(["z-index:", ";"], function (p) {
  return p._css;
});

var Button$1 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ContextMenu__Button",
  componentId: "ris724-6"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:", "px;border-radius:", ";box-shadow:", ";"], BASE_HEIGHT, function (_ref3) {
  var opened = _ref3.opened;
  return opened ? "".concat(RADIUS, "px ").concat(RADIUS, "px 0 0") : "".concat(RADIUS, "px");
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled ? 'none' : "0px 1px 3px rgba(0, 0, 0, 0.1)";
});

var _StyledButton$3 = _styled(Button$1).withConfig({
  displayName: "ContextMenu___StyledButton",
  componentId: "ris724-7"
})(["color:", ";background:", ";border:", ";border-bottom-color:", ";", ""], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledButtonBase$8 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "ContextMenuItem___StyledButtonBase",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 16px 5px 10px;cursor:pointer;white-space:nowrap;width:100%;", " ", ";&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var ContextMenuItem = React.memo(function ContextMenuItem(props) {
  var theme = useTheme();
  return React.createElement(_StyledButtonBase$8, _extends_1({}, props, {
    _css: textStyle('body2'),
    _css2: unselectable(),
    _css3: theme.surfacePressed
  }));
});

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$3.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$4.call(data, key);
}

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map');

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

var RENDER_EVERY = 1000;

var formatUnit = function formatUnit(v) {
  return String(v).padStart(2, '0');
};

var formats = {
  yMdhms: 'yMdhms',
  yMdhm: 'yMdhm',
  yMdh: 'yMdh',
  yMd: 'yMd',
  yM: 'yM',
  Mdhms: 'Mdhms',
  Mdhm: 'Mdhm',
  Mdh: 'Mdh',
  Md: 'Md',
  dhms: 'dhms',
  dhm: 'dhm',
  hms: 'hms',
  hm: 'hm',
  ms: 'ms',
  m: 'm',
  s: 's'
};
var unitNames = {
  y: 'years',
  M: 'months',
  d: 'days',
  h: 'hours',
  m: 'minutes',
  s: 'seconds'
};
var getFormat = memoize(function (format) {
  return ['y', 'M', 'd', 'h', 'm', 's'].reduce(function (units, symbol) {
    return formats[format].includes(symbol) ? [].concat(toConsumableArray(units), [unitNames[symbol]]) : units;
  }, []);
});

function getTime(start, end, format, showEmpty, maxUnits) {
  var date1 = end || new Date();
  var date2 = end ? new Date() : start;
  var totalInSeconds = dayjs_min(date1).diff(date2, 'seconds');

  var _difference = difference(date1, date2, {
    keepLeadingZeros: showEmpty,
    maxUnits: maxUnits,
    units: getFormat(format)
  }),
      years = _difference.years,
      months = _difference.months,
      days = _difference.days,
      hours = _difference.hours,
      minutes = _difference.minutes,
      seconds = _difference.seconds;

  return {
    units: [['Y', years], ['M', months], ['D', days], ['H', hours], ['M', minutes], ['S', seconds]],
    totalInSeconds: totalInSeconds
  };
}

var _StyledTime = _styled.time.withConfig({
  displayName: "Timer___StyledTime",
  componentId: "sc-58hkwl-0"
})(["display:flex;align-items:center;white-space:nowrap;", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledSpan$8 = _styled.span.withConfig({
  displayName: "Timer___StyledSpan",
  componentId: "sc-58hkwl-1"
})(["display:flex;align-items:center;margin-right:", "px;margin-top:-3px;"], function (p) {
  return p._css3;
});

var _StyledIconTime = _styled(IconClock).withConfig({
  displayName: "Timer___StyledIconTime",
  componentId: "sc-58hkwl-2"
})(["color:", ";"], function (p) {
  return p._css4;
});

var _StyledSpan2$5 = _styled.span.withConfig({
  displayName: "Timer___StyledSpan2",
  componentId: "sc-58hkwl-3"
})(["", ";color:", ";"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledSpan3$2 = _styled.span.withConfig({
  displayName: "Timer___StyledSpan3",
  componentId: "sc-58hkwl-4"
})(["color:", ";", ";"], function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

var _StyledSpan4 = _styled.span.withConfig({
  displayName: "Timer___StyledSpan4",
  componentId: "sc-58hkwl-5"
})(["margin-left:2px;color:", ";"], function (p) {
  return p._css9;
});

var _StyledSpan5 = _styled.span.withConfig({
  displayName: "Timer___StyledSpan5",
  componentId: "sc-58hkwl-6"
})(["margin:0 4px;color:", ";font-weight:400;"], function (p) {
  return p._css10;
});

var Timer =
/*#__PURE__*/
function (_React$Component) {
  inherits(Timer, _React$Component);

  function Timer() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Timer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Timer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "renderTime", function () {
      var _this$props = _this.props,
          start = _this$props.start,
          end = _this$props.end,
          theme = _this$props.theme,
          format = _this$props.format,
          showEmpty = _this$props.showEmpty,
          maxUnits = _this$props.maxUnits;

      var _getTime = getTime(start, end, format, showEmpty, maxUnits),
          totalInSeconds = _getTime.totalInSeconds,
          units = _getTime.units;

      if (totalInSeconds < 0 || Object.is(totalInSeconds, -0)) {
        return React.createElement(_StyledSpan2$5, {
          _css5: textStyle('body2'),
          _css6: theme.surfaceContentSecondary
        }, end ? 'Time out' : '−');
      }

      var lastUnitIndex = units.reduce(function (lastIndex, unit, index) {
        return unit[1] === null ? lastIndex : index;
      }, 0);
      return React.createElement("span", null, units.map(function (unit, index) {
        var isLast = index === lastUnitIndex;
        var isSeconds = index === units.length - 1; // Only time units (hours, minutes and seconds).
        // Remember to update if ms gets added one day!

        var isTimeUnit = index >= units.length - 3;

        if (unit[1] === null) {
          return null;
        }

        return React.createElement(React.Fragment, {
          key: index
        }, React.createElement(_StyledSpan3$2, {
          _css7: theme.surfaceContent,
          _css8: isSeconds && // Fix the width of the seconds unit so that
          // it doesn’t jump too much.
          "\n                      display: inline-flex;\n                      align-items: baseline;\n                      justify-content: space-between;\n                      min-width: 31px;\n                    "
        }, formatUnit(unit[1]), React.createElement(_StyledSpan4, {
          _css9: theme.surfaceContentSecondary
        }, unit[0])), !isLast && // Separator
        React.createElement(_StyledSpan5, {
          _css10: theme.surfaceContentSecondary
        }, isTimeUnit && ':'));
      }));
    });

    return _this;
  }

  createClass(Timer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          end = _this$props2.end,
          start = _this$props2.start,
          theme = _this$props2.theme;
      return React.createElement(_StyledTime, {
        dateTime: formatHtmlDatetime(end || start),
        _css: unselectable(),
        _css2: textStyle('body2')
      }, React.createElement(_StyledSpan$8, {
        _css3: 0.5 * GU
      }, React.createElement(_StyledIconTime, {
        _css4: theme.surfaceIcon
      })), React.createElement(Redraw, {
        interval: RENDER_EVERY
      }, this.renderTime));
    }
  }]);

  return Timer;
}(React.Component);

defineProperty(Timer, "propTypes", {
  end: propTypes.instanceOf(Date),
  format: propTypes.oneOf(Object.keys(formats)),
  maxUnits: propTypes.number,
  showEmpty: propTypes.bool,
  start: propTypes.instanceOf(Date),
  theme: propTypes.object
});

defineProperty(Timer, "defaultProps", {
  format: formats.yMdhms,
  maxUnits: -1,
  showEmpty: false
});

var Timer$1 = (function (props) {
  var theme = useTheme();
  return React.createElement(Timer, _extends_1({}, props, {
    theme: theme
  }));
});

var Countdown =
/*#__PURE__*/
function (_React$Component) {
  inherits(Countdown, _React$Component);

  function Countdown() {
    classCallCheck(this, Countdown);

    return possibleConstructorReturn(this, getPrototypeOf(Countdown).apply(this, arguments));
  }

  createClass(Countdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          end = _this$props.end,
          removeDaysAndHours = _this$props.removeDaysAndHours;
      var format = removeDaysAndHours ? 'ms' : 'dhms';
      return React.createElement(Timer$1, {
        end: end,
        format: format
      });
    }
  }]);

  return Countdown;
}(React.Component);

Countdown.propTypes = {
  end: propTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: propTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

var HoverIndicator = _styled.span.withConfig({
  displayName: "components__HoverIndicator",
  componentId: "lxakqh-0"
})(["width:100%;height:100%;position:absolute;border-radius:50%;", ""], function (_ref) {
  var theme = _ref.theme,
      selected = _ref.selected;
  return css(["background:", ";border:2px solid ", ";"], selected ? theme.selected : theme.surface, theme.accent);
});

var _StyledButtonBase$9 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "components___StyledButtonBase",
  componentId: "lxakqh-1"
})(["font-size:9px;padding:5px 4px 0 4px;margin-top:-4px;color:", ";&:hover{color:inherit;}"], function (p) {
  return p._css;
});

var ArrowButton = function ArrowButton(props) {
  var theme = useTheme();
  return React.createElement(_StyledButtonBase$9, _extends_1({
    focusRingRadius: GU * 2
  }, props, {
    _css: theme.hint
  }));
};

var SelectorWrapper = _styled.div.withConfig({
  displayName: "components__SelectorWrapper",
  componentId: "lxakqh-2"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:", "px;span{", "}"], 1 * GU, function (_ref2) {
  var small = _ref2.small,
      theme = _ref2.theme;
  return css(["", ";", ""], textStyle(small ? 'label2' : 'body2'), small && css(["color:", ";font-weight:600;"], theme.hint));
}); // eslint-disable-next-line react/prop-types

function Selector(_ref3) {
  var prev = _ref3.prev,
      next = _ref3.next,
      children = _ref3.children,
      small = _ref3.small;
  var theme = useTheme();
  return React.createElement(SelectorWrapper, {
    small: small,
    theme: theme
  }, React.createElement(ArrowButton, {
    onClick: prev
  }, React.createElement(IconLeft, {
    size: "small"
  })), React.createElement("span", null, children), React.createElement(ArrowButton, {
    onClick: next
  }, React.createElement(IconRight, {
    size: "small"
  })));
}

var _StyledDiv$i = _styled.div.withConfig({
  displayName: "MonthDay___StyledDiv",
  componentId: "ngrxyo-0"
})(["position:relative;display:flex;align-items:center;justify-content:center;width:", "px;height:", "px;border-radius:50%;cursor:pointer;user-select:none;margin-bottom:1px;", ";", " ", " ", " ", " ", " ", " &:after{display:block;content:'';margin-top:100%;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledSpan$9 = _styled.span.withConfig({
  displayName: "MonthDay___StyledSpan",
  componentId: "ngrxyo-1"
})(["", ";"], function (p) {
  return p._css10;
});

var _StyledDiv2$9 = _styled.div.withConfig({
  displayName: "MonthDay___StyledDiv2",
  componentId: "ngrxyo-2"
})(["position:absolute;bottom:1px;font-size:9px;color:", ";"], function (p) {
  return p._css11;
});

function MonthDay(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      inRange = _ref.inRange,
      rangeBoundaryBegin = _ref.rangeBoundaryBegin,
      rangeBoundaryEnd = _ref.rangeBoundaryEnd,
      selected = _ref.selected,
      today = _ref.today,
      weekDay = _ref.weekDay,
      props = objectWithoutProperties(_ref, ["children", "disabled", "inRange", "rangeBoundaryBegin", "rangeBoundaryEnd", "selected", "today", "weekDay"]);

  var theme = useTheme();
  var dimmedSelectedColor = theme.selected.alpha(0.09);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      isHovered = _useState2[0],
      setIsHovered = _useState2[1];

  return React.createElement(_StyledDiv$i, _extends_1({
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, props, {
    _css: 4.5 * GU,
    _css2: weekDay ? 3.5 * GU : 4.5 * GU,
    _css3: disabled ? "\n                pointer-events: none;\n                opacity: 0;\n              " : '',
    _css4: selected && !disabled ? "\n                &&& {\n                  background: ".concat(theme.selected, ";\n                  color: ").concat(theme.positiveContent, ";\n                }\n              ") : '',
    _css5: inRange && !selected && !disabled ? "\n                background: ".concat(dimmedSelectedColor, ";\n                border-radius: 0;\n              ") : '',
    _css6: (rangeBoundaryBegin || rangeBoundaryEnd) && css(["z-index:1;&:before{content:'';position:absolute;top:0;", ":0;z-index:0;background:", ";width:50%;height:100%;}"], rangeBoundaryBegin ? 'right' : 'left', dimmedSelectedColor),
    _css7: isHovered && css(["> *{z-index:1;}"]),
    _css8: today && css(["color:", ";font-weight:600;"], theme.selected),
    _css9: weekDay && css(["pointer-events:none;color:", ";text-transform:uppercase;"], theme.contentSecondary)
  }), isHovered ? React.createElement(HoverIndicator, {
    theme: theme,
    selected: selected
  }) : null, React.createElement(_StyledSpan$9, {
    _css10: textStyle(weekDay ? 'body4' : 'body3')
  }, children), today ? React.createElement(_StyledDiv2$9, {
    _css11: selected ? theme.surface : theme.selected
  }, "\u25CF") : null);
}

MonthDay.propTypes = {
  children: propTypes.node,
  disabled: propTypes.bool,
  selected: propTypes.bool,
  inRange: propTypes.bool,
  rangeBoundaryBegin: propTypes.bool,
  rangeBoundaryEnd: propTypes.bool,
  today: propTypes.bool,
  weekDay: propTypes.bool
};

var _StyledButtonBase$a = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "MonthDay___StyledButtonBase",
  componentId: "ngrxyo-3"
})(["display:flex;width:", "px;height:", "px;margin:0;"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
});

function WrappedMonthDay(_ref2) {
  var onClick = _ref2.onClick,
      props = objectWithoutProperties(_ref2, ["onClick"]);

  if (onClick && !props.disabled) {
    return React.createElement(_StyledButtonBase$a, {
      onClick: onClick,
      _css12: 4.5 * GU,
      _css13: props.weekDay ? 3.5 * GU : 4.5 * GU
    }, React.createElement(MonthDay, props));
  } else {
    return React.createElement(MonthDay, props);
  }
}

var _StyledDiv$j = _styled.div.withConfig({
  displayName: "DatePicker___StyledDiv",
  componentId: "sc-6xp23y-0"
})(["display:grid;"]);

var _StyledDiv2$a = _styled.div.withConfig({
  displayName: "DatePicker___StyledDiv2",
  componentId: "sc-6xp23y-1"
})(["display:grid;grid-template:auto / repeat(7,1fr);width:", "px;"], function (p) {
  return p._css;
});

function DatePicker(_ref) {
  var initialDate = _ref.initialDate,
      onSelect = _ref.onSelect,
      datesRangeStart = _ref.datesRangeStart,
      datesRangeEnd = _ref.datesRangeEnd,
      hideYearSelector = _ref.hideYearSelector,
      yearFormat = _ref.yearFormat,
      hideMonthSelector = _ref.hideMonthSelector,
      monthFormat = _ref.monthFormat,
      monthYearFormat = _ref.monthYearFormat,
      hideWeekDays = _ref.hideWeekDays,
      weekDayFormat = _ref.weekDayFormat,
      props = objectWithoutProperties(_ref, ["initialDate", "onSelect", "datesRangeStart", "datesRangeEnd", "hideYearSelector", "yearFormat", "hideMonthSelector", "monthFormat", "monthYearFormat", "hideWeekDays", "weekDayFormat"]);

  var _useState = useState(initialDate),
      _useState2 = slicedToArray(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var setDate = function setDate(_ref2) {
    var year = _ref2.year,
        add = _ref2.add;
    return function (event) {
      setSelectedDate(dayjs_min(selectedDate).startOf('month')[add ? 'add' : 'subtract'](1, year ? 'year' : 'month').toDate());
    };
  };

  var today = dayjs_min().startOf('day').toDate();
  var selectedDayjs = dayjs_min(selectedDate || today);

  var isSelected = function isSelected(day) {
    if (datesRangeStart || datesRangeEnd) {
      return day.isSame(datesRangeStart, 'day') || day.isSame(datesRangeEnd, 'day');
    }

    return false;
  };

  var isInRange = function isInRange(day) {
    if (datesRangeStart && datesRangeEnd) {
      return day.isAfter(datesRangeStart) && day.isBefore(datesRangeEnd);
    }
  };

  return React.createElement(_StyledDiv$j, props, !hideYearSelector && React.createElement(Selector, {
    prev: setDate({
      year: true,
      add: false
    }),
    next: setDate({
      year: true,
      add: true
    }),
    small: true
  }, selectedDayjs.format(yearFormat)), !hideMonthSelector && React.createElement(Selector, {
    prev: setDate({
      year: false,
      add: false
    }),
    next: setDate({
      year: false,
      add: true
    })
  }, selectedDayjs.format(!hideYearSelector ? monthFormat : monthYearFormat)), React.createElement(_StyledDiv2$a, {
    _css: 31.5 * GU
  }, !hideWeekDays && eachDayOfInterval({
    start: selectedDayjs.startOf('week'),
    end: selectedDayjs.endOf('week')
  }).map(function (day) {
    var dayJs = dayjs_min(day);
    return React.createElement(WrappedMonthDay, {
      key: dayJs.format('dd'),
      weekDay: true
    }, dayJs.format(weekDayFormat));
  }), eachDayOfInterval({
    start: selectedDayjs.startOf('month').startOf('week'),
    end: selectedDayjs.endOf('month').endOf('week')
  }).map(function (day) {
    var dayJs = dayjs_min(day);
    return React.createElement(WrappedMonthDay, {
      key: dayJs.valueOf(),
      disabled: !selectedDayjs.isSame(dayJs, 'month'),
      selected: isSelected(dayJs),
      inRange: isInRange(dayJs),
      rangeBoundaryBegin: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeStart, 'day'),
      rangeBoundaryEnd: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeEnd, 'day'),
      today: dayJs.isSame(today, 'day'),
      onClick: function onClick() {
        return onSelect(dayJs.toDate());
      }
    }, dayJs.format(props.dayFormat));
  })));
}

DatePicker.propTypes = {
  /**
   * For displaying a selected dates range - start
   */
  datesRangeStart: propTypes.instanceOf(Date),

  /**
   * For displaying a selected dates range - end
   */
  datesRangeEnd: propTypes.instanceOf(Date),

  /**
   * Initial date - calendar will start from here.
   */
  initialDate: propTypes.instanceOf(Date),
  // Events
  onSelect: propTypes.func,
  // Visibility
  hideMonthSelector: propTypes.bool,
  hideWeekDays: propTypes.bool,
  hideYearSelector: propTypes.bool,
  // Formatting
  dayFormat: propTypes.string,
  monthFormat: propTypes.string,
  monthYearFormat: propTypes.string,
  weekDayFormat: propTypes.string,
  yearFormat: propTypes.string
};
DatePicker.defaultProps = {
  onSelect: function onSelect() {},
  dayFormat: 'D',
  monthFormat: 'MMMM',
  monthYearFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd',
  yearFormat: 'YYYY'
};

var INPUT_BORDER = 1;
var START_DATE = 'Start day';
var END_DATE = 'End day';

var _StyledDiv$k = _styled.div.withConfig({
  displayName: "Labels___StyledDiv",
  componentId: "sc-1is9uv6-0"
})(["position:relative;width:", "px;display:flex;justify-content:space-between;align-items:center;padding:7px 6px;border:", "px solid ", ";border-radius:", "px;background:", ";overflow:hidden;cursor:pointer;&:active{border-color:", ";}&:focus{outline:none;}"], function (p) {
  return p._css;
}, INPUT_BORDER, function (p) {
  return p._css2;
}, RADIUS, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2$b = _styled.div.withConfig({
  displayName: "Labels___StyledDiv2",
  componentId: "sc-1is9uv6-1"
})(["display:flex;flex:1;justify-content:space-around;align-items:center;"]);

var _StyledDiv3$5 = _styled.div.withConfig({
  displayName: "Labels___StyledDiv3",
  componentId: "sc-1is9uv6-2"
})(["color:", ";text-align:center;", ""], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv4$4 = _styled.div.withConfig({
  displayName: "Labels___StyledDiv4",
  componentId: "sc-1is9uv6-3"
})(["color:", ";font-size:13px;"], function (p) {
  return p._css7;
});

var _StyledDiv5$1 = _styled.div.withConfig({
  displayName: "Labels___StyledDiv5",
  componentId: "sc-1is9uv6-4"
})(["color:", ";text-align:center;", ""], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledDiv6$1 = _styled.div.withConfig({
  displayName: "Labels___StyledDiv6",
  componentId: "sc-1is9uv6-5"
})(["display:flex;padding:0 4px 0 10px;"]);

var _StyledIconCalendar = _styled(IconCalendar).withConfig({
  displayName: "Labels___StyledIconCalendar",
  componentId: "sc-1is9uv6-6"
})(["color:", ";"], function (p) {
  return p._css10;
});

var Labels = forwardRef(function Labels(_ref, ref) {
  var enabled = _ref.enabled,
      startText = _ref.startText,
      endText = _ref.endText,
      hasSetDates = _ref.hasSetDates,
      onClick = _ref.onClick,
      props = objectWithoutProperties(_ref, ["enabled", "startText", "endText", "hasSetDates", "onClick"]);

  var theme = useTheme();
  var hasNoStart = startText === START_DATE;
  var hasNoEnd = endText === END_DATE;
  return React.createElement(ButtonBaseWithFocus, {
    focusRingRadius: RADIUS,
    ref: ref,
    onClick: onClick
  }, React.createElement(_StyledDiv$k, _extends_1({}, props, {
    _css: 27.5 * GU,
    _css2: hasSetDates ? theme.accent : theme.border,
    _css3: theme.surface,
    _css4: theme.controlBorderPressed
  }), React.createElement(_StyledDiv2$b, null, React.createElement(_StyledDiv3$5, {
    _css5: hasNoStart ? theme.hint : 'inherit',
    _css6: textStyle(hasNoStart ? 'body2' : 'body3')
  }, startText), React.createElement(_StyledDiv4$4, {
    _css7: theme.hint.alpha(0.3)
  }, "|"), React.createElement(_StyledDiv5$1, {
    _css8: hasNoEnd ? theme.hint : 'inherit',
    _css9: textStyle(hasNoEnd ? 'body2' : 'body3')
  }, endText)), React.createElement(_StyledDiv6$1, null, React.createElement(_StyledIconCalendar, {
    _css10: enabled ? theme.accent : theme.surfaceIcon
  }))));
});
Labels.propTypes = {
  enabled: propTypes.bool,
  hasSetDates: propTypes.bool,
  onClick: propTypes.func,
  startText: propTypes.string.isRequired,
  endText: propTypes.string.isRequired
};

function handleDateSelect(_ref) {
  var date = _ref.date,
      startDate = _ref.startDate,
      endDate = _ref.endDate;

  // clicking on start date resets it, so it can be re-picked
  if (startDate && dayjs_min(date).isSame(startDate, 'day')) {
    return {
      startDate: null
    };
  } // clicking on end date resets it, so it can be re-picked


  if (endDate && dayjs_min(date).isSame(endDate, 'day')) {
    return {
      endDate: null
    };
  }

  var isValidStartDate = !endDate || !dayjs_min(date).isAfter(endDate);
  var isValidEndDate = !startDate || !dayjs_min(date).isBefore(startDate); // if we have startDate, then `date` is the end date

  var isValidDate = startDate ? isValidEndDate : isValidStartDate; // both dates are selected - if a date is clicked and it's before
  // start date, it should be the new start date
  // (this way the start date does not have to be reset before setting)
  // (the converse case for end date is handled implicitly below, because
  // after both dates are selected, any selected date will be candidate for
  // new end date)

  if (startDate && endDate && isValidStartDate && dayjs_min(date).isBefore(startDate, 'day')) {
    return {
      startDate: date
    };
  } // one date is selected, but the clicked date is not corresponding
  // (start selected, but clicked a date before start, and vice-versa)
  // in this case, reverse the range


  if (!startDate && endDate && dayjs_min(date).isAfter(endDate)) {
    return {
      startDate: endDate,
      endDate: date
    };
  }

  if (!endDate && startDate && dayjs_min(date).isBefore(startDate)) {
    return {
      startDate: date,
      endDate: startDate
    };
  }

  if (isValidDate) {
    return defineProperty({}, startDate ? 'endDate' : 'startDate', date);
  }
}

var _StyledPopover = _styled(Popover).withConfig({
  displayName: "DateRangePicker___StyledPopover",
  componentId: "s3s5m9-0"
})(["min-width:", "px;border:0;filter:none;background:none;margin:2px 0 0 0;"], function (p) {
  return p._css;
});

var _StyledDiv$l = _styled.div.withConfig({
  displayName: "DateRangePicker___StyledDiv",
  componentId: "s3s5m9-1"
})(["padding:", "px ", "px ", "px;border:1px solid ", ";border-radius:", "px;background:", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, RADIUS, function (p) {
  return p._css6;
});

var _StyledDiv2$c = _styled.div.withConfig({
  displayName: "DateRangePicker___StyledDiv2",
  componentId: "s3s5m9-2"
})(["display:flex;flex-direction:row;align-items:baseline;"]);

var _StyledDatePicker = _styled(DatePicker).withConfig({
  displayName: "DateRangePicker___StyledDatePicker",
  componentId: "s3s5m9-3"
})(["margin-left:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv3$6 = _styled.div.withConfig({
  displayName: "DateRangePicker___StyledDiv3",
  componentId: "s3s5m9-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:", "px;", ";"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

var _StyledButton$4 = _styled(ButtonWithRef).withConfig({
  displayName: "DateRangePicker___StyledButton",
  componentId: "s3s5m9-5"
})(["margin-left:", "px;"], function (p) {
  return p._css10;
});

function DateRangePicker(_ref) {
  var format = _ref.format,
      endDateProp = _ref.endDate,
      onChange = _ref.onChange,
      startDateProp = _ref.startDate;
  var theme = useTheme();
  var labelsRef = useRef();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      showPicker = _useState2[0],
      setShowPicker = _useState2[1];

  var _useState3 = useState(startDateProp),
      _useState4 = slicedToArray(_useState3, 2),
      startDate = _useState4[0],
      setStartDate = _useState4[1];

  var _useState5 = useState(endDateProp),
      _useState6 = slicedToArray(_useState5, 2),
      endDate = _useState6[0],
      setEndDate = _useState6[1]; // on closing the picked, reset state


  useEffect(function () {
    if (!showPicker) {
      setStartDate(startDateProp);
      setEndDate(endDateProp);
    }
  }, [endDateProp, startDateProp, showPicker]);
  var handlePopoverClose = useCallback(function () {
    return setShowPicker(false);
  }, []);
  var handleLabelsClick = useCallback(function () {
    setShowPicker(function (show) {
      return !show;
    });
  }, []);
  var handleDateClick = useCallback(function (date) {
    var result = handleDateSelect({
      date: date,
      startDate: startDate,
      endDate: endDate
    });
    result.startDate !== undefined && setStartDate(result.startDate);
    result.endDate !== undefined && setEndDate(result.endDate);
  }, [startDate, endDate]);
  var handleApply = useCallback(function () {
    setShowPicker(false);

    if (startDate && endDate) {
      onChange({
        start: dayjs_min(startDate).startOf('day').toDate(),
        end: dayjs_min(endDate).endOf('day').toDate()
      });
    }
  }, [endDate, onChange, startDate]);
  var handleClear = useCallback(function () {
    setStartDate(null);
    setEndDate(null);
    setShowPicker(false);
    onChange({
      start: null,
      end: null
    });
  }, [onChange]);
  var labelProps = useMemo(function () {
    var _startDate = showPicker ? startDate : startDateProp;

    var _endDate = showPicker ? endDate : endDateProp;

    return {
      startText: _startDate ? dayjs_min(_startDate).format(format) : START_DATE,
      endText: _endDate ? dayjs_min(_endDate).format(format) : END_DATE
    };
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp]);
  var compactMode = useViewport().below('medium');
  var displayMonthBeforeOnLeft = useMemo(function () {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    var propsDatesInSameMonth = startDateProp && endDateProp && dayjs_min(startDateProp).isSame(dayjs_min(endDateProp), 'month');
    return !compactMode && (propsDatesInSameMonth || !startDateProp);
  }, [compactMode, endDateProp, startDateProp]);
  return React.createElement("div", null, React.createElement(Labels, _extends_1({
    ref: labelsRef,
    enabled: showPicker,
    hasSetDates: Boolean(startDateProp && endDateProp),
    onClick: handleLabelsClick
  }, labelProps)), React.createElement(_StyledPopover, {
    closeOnOpenerFocus: true,
    onClose: handlePopoverClose,
    opener: labelsRef.current,
    placement: "bottom-start",
    visible: showPicker,
    _css: 37.5 * GU + 2
  }, React.createElement(_StyledDiv$l, {
    _css2: 2.5 * GU,
    _css3: 3 * GU,
    _css4: 3 * GU,
    _css5: theme.border,
    _css6: theme.surface
  }, React.createElement(_StyledDiv2$c, null, React.createElement(DatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min(startDateProp || undefined).subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month').toDate(),
    onSelect: handleDateClick
  }), !compactMode && React.createElement(_StyledDatePicker, {
    datesRangeEnd: endDate,
    datesRangeStart: startDate,
    initialDate: dayjs_min(endDateProp || undefined).toDate(),
    onSelect: handleDateClick,
    _css7: 1 * GU
  })), React.createElement(_StyledDiv3$6, {
    _css8: GU * 2.25,
    _css9: compactMode ? '' : "\n                    max-width: 247px;\n                    margin-left: auto;\n                  "
  }, React.createElement(ButtonWithRef, {
    onClick: handleClear,
    size: "small",
    wide: true
  }, "Reset"), React.createElement(_StyledButton$4, {
    disabled: !startDate || !endDate,
    mode: "strong",
    onClick: handleApply,
    size: "small",
    wide: true,
    _css10: 1.5 * GU
  }, "Apply")))));
}

DateRangePicker.propTypes = {
  endDate: propTypes.instanceOf(Date),
  format: propTypes.string,
  onChange: propTypes.func,
  startDate: propTypes.instanceOf(Date)
};
DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: function onChange() {}
};

var _StyledDiv$m = _styled.div.withConfig({
  displayName: "Distribution___StyledDiv",
  componentId: "r4l1i4-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledH$4 = _styled.h1.withConfig({
  displayName: "Distribution___StyledH",
  componentId: "r4l1i4-1"
})(["", ""], function (p) {
  return p._css2;
});

var _StyledDiv2$d = _styled.div.withConfig({
  displayName: "Distribution___StyledDiv2",
  componentId: "r4l1i4-2"
})(["display:flex;width:100%;overflow:hidden;margin:0 0 ", "px;border-radius:3px;div{height:6px;}"], function (p) {
  return p._css3;
});

var _StyledUl = _styled.ul.withConfig({
  displayName: "Distribution___StyledUl",
  componentId: "r4l1i4-3"
})(["margin-top:", "px;"], function (p) {
  return p._css4;
});

var _StyledLi = _styled.li.withConfig({
  displayName: "Distribution___StyledLi",
  componentId: "r4l1i4-4"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;list-style:none;"]);

var _StyledDiv3$7 = _styled.div.withConfig({
  displayName: "Distribution___StyledDiv3",
  componentId: "r4l1i4-5"
})(["display:flex;align-items:center;flex-shrink:1;flex-grow:1;"]);

var _StyledDiv4$5 = _styled.div.withConfig({
  displayName: "Distribution___StyledDiv4",
  componentId: "r4l1i4-6"
})(["width:0;flex-shrink:1;flex-grow:1;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]);

var _StyledDiv5$2 = _styled.div.withConfig({
  displayName: "Distribution___StyledDiv5",
  componentId: "r4l1i4-7"
})(["padding-left:", "px;flex-shrink:0;"], function (p) {
  return p._css5;
});

function Distribution(_ref) {
  var colors = _ref.colors,
      showLegend = _ref.showLegend,
      heading = _ref.heading,
      itemTitle = _ref.itemTitle,
      LegendItem = _ref.renderLegendItem,
      FullLegendItem = _ref.renderFullLegendItem,
      items = _ref.items;
  var theme = useTheme();

  if (!colors) {
    colors = [theme.blue, theme.red, theme.brown, theme.yellow, theme.purple, theme.green];
  }

  var total = items.reduce(function (total, _ref2) {
    var percentage = _ref2.percentage;
    return total + percentage;
  }, 0); // Sort by percentage

  items = items.sort(function (a, b) {
    return b.percentage - a.percentage;
  });
  return React.createElement("section", null, heading && React.createElement(_StyledDiv$m, {
    _css: 1 * GU
  }, typeof heading === 'string' ? React.createElement(_StyledH$4, {
    _css2: textStyle('body2')
  }, heading) : heading), React.createElement(_StyledDiv2$d, {
    _css3: 1 * GU
  }, items.map(function (_ref3, index) {
    var item = _ref3.item,
        percentage = _ref3.percentage;
    return React.createElement("div", {
      key: index,
      title: itemTitle({
        item: item,
        percentage: percentage,
        index: index
      }),
      style: {
        width: "".concat(percentage / total * 100, "%"),
        background: colors[index % colors.length]
      }
    });
  })), showLegend && React.createElement(_StyledUl, {
    _css4: 3 * GU
  }, items.map(function (_ref4, index) {
    var item = _ref4.item,
        percentage = _ref4.percentage;
    var color = colors[index % colors.length];
    return React.createElement(_StyledLi, {
      key: index
    }, FullLegendItem ? React.createElement(FullLegendItem, {
      bullet: React.createElement(Bullet$1, {
        color: color
      }),
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }) : React.createElement(React.Fragment, null, React.createElement(_StyledDiv3$7, null, React.createElement(Bullet$1, {
      color: color
    }), React.createElement(_StyledDiv4$5, null, React.createElement(LegendItem, {
      color: color,
      index: index,
      item: item,
      percentage: percentage
    }))), React.createElement(_StyledDiv5$2, {
      _css5: 1 * GU
    }, React.createElement("strong", null, percentage, "%"))));
  })));
}

Distribution.propTypes = {
  colors: propTypes.array,
  heading: propTypes.node,
  itemTitle: propTypes.func,
  renderLegendItem: propTypes.func,
  renderFullLegendItem: propTypes.func,
  showLegend: propTypes.bool,
  items: propTypes.arrayOf(propTypes.shape({
    item: propTypes.any.isRequired,
    percentage: propTypes.number.isRequired
  })).isRequired
};
Distribution.defaultProps = {
  heading: null,
  itemTitle: function itemTitle(_ref5) {
    var item = _ref5.item,
        percentage = _ref5.percentage,
        index = _ref5.index;
    return "".concat(typeof item === 'string' ? item : "Item ".concat(index + 1), ": ").concat(percentage, "%");
  },
  renderLegendItem: function renderLegendItem(_ref6) {
    var item = _ref6.item,
        percentage = _ref6.percentage,
        index = _ref6.index;
    return typeof item === 'string' ? item : "Item ".concat(index + 1);
  },
  showLegend: true
};
/* eslint-disable react/prop-types */

var _StyledDiv6$2 = _styled.div.withConfig({
  displayName: "Distribution___StyledDiv6",
  componentId: "r4l1i4-8"
})(["width:", "px;height:", "px;margin-right:", "px;border-radius:50%;flex-shrink:0;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Bullet$1(_ref7) {
  var color = _ref7.color;
  return React.createElement(_StyledDiv6$2, {
    style: {
      background: color
    },
    _css6: 1 * GU,
    _css7: 1 * GU,
    _css8: 1 * GU
  });
}

var MIN_WIDTH = 128;

function useDropDown(_ref) {
  var buttonRef = _ref.buttonRef,
      items = _ref.items,
      displayedLabel = _ref.displayedLabel,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      selected = _ref.selected;

  var _useState = useState(displayedLabel),
      _useState2 = slicedToArray(_useState, 2),
      selectedLabel = _useState2[0],
      setSelectedLabel = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = slicedToArray(_useState3, 2),
      opened = _useState4[0],
      setOpened = _useState4[1];

  var close = useCallback(function () {
    setOpened(false);

    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [buttonRef]);
  var toggle = useCallback(function () {
    return setOpened(function (opened) {
      return !opened;
    });
  }, []);
  var handleItemSelect = useCallback(function (index) {
    onChange(index);
    close();
  }, [onChange, close]);
  useEffect(function () {
    if (selected === -1 || !items[selected]) {
      if (displayedLabel) {
        setSelectedLabel(displayedLabel);
      }

      return;
    }

    setSelectedLabel(items[selected]);
  }, [items, selected, displayedLabel]);
  return {
    handleItemSelect: handleItemSelect,
    close: close,
    toggle: toggle,
    opened: opened,
    selectedLabel: selectedLabel
  };
}

function useButtonRef(cb) {
  var buttonRef = useRef(null);
  var refCallback = useCallback(function (el) {
    if (el) {
      cb(el);
    }

    buttonRef.current = el;
  }, [cb]);
  return {
    buttonRef: buttonRef,
    refCallback: refCallback
  };
}

var _StyledButtonBase$b = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "DropDown___StyledButtonBase",
  componentId: "sc-17zpefi-0"
})(["display:", ";justify-content:space-between;align-items:center;height:", "px;padding-left:", "px;padding-right:", "px;width:", ";min-width:", ";background:", ";color:", ";border:", "px solid ", ";", ";", ""], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
}, function (p) {
  return p._css11;
}, function (p) {
  return p._css12;
});

var _StyledDiv$n = _styled.div.withConfig({
  displayName: "DropDown___StyledDiv",
  componentId: "sc-17zpefi-1"
})(["overflow:hidden;"]);

var _StyledIconDown$1 = _styled(IconDown).withConfig({
  displayName: "DropDown___StyledIconDown",
  componentId: "sc-17zpefi-2"
})(["margin-left:", "px;color:", ";"], function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

var _StyledDiv2$e = _styled.div.withConfig({
  displayName: "DropDown___StyledDiv2",
  componentId: "sc-17zpefi-3"
})(["position:absolute;top:-100vh;left:-100vw;opacity:0;visibility:hidden;"]);

var DropDown = React.memo(function DropDown(_ref2) {
  var disabled = _ref2.disabled,
      header = _ref2.header,
      items = _ref2.items,
      onChange = _ref2.onChange,
      placeholder = _ref2.placeholder,
      renderLabel = _ref2.renderLabel,
      selected = _ref2.selected,
      wide = _ref2.wide,
      width = _ref2.width,
      active = _ref2.active,
      label = _ref2.label,
      props = objectWithoutProperties(_ref2, ["disabled", "header", "items", "onChange", "placeholder", "renderLabel", "selected", "wide", "width", "active", "label"]);

  if (active !== undefined) {
    warnOnce('DropDown:active', 'The “active” prop is deprecated. Please use “selected” to pass the selected index instead.');
  }

  if (label !== undefined) {
    warnOnce('DropDown:label', 'DropDown: the “label” prop is deprecated, please use “placeholder” instead.');
  }

  var theme = useTheme();

  var _useViewport = useViewport(),
      vw = _useViewport.width;

  var _split = (width || '').split('px'),
      _split2 = slicedToArray(_split, 1),
      _split2$ = _split2[0],
      widthNoPx = _split2$ === void 0 ? MIN_WIDTH : _split2$;

  var _useState5 = useState(0),
      _useState6 = slicedToArray(_useState5, 2),
      buttonWidth = _useState6[0],
      setButtonWidth = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = slicedToArray(_useState7, 2),
      measureWidth = _useState8[0],
      setMeasureWidth = _useState8[1]; // Adjust the button width if the item widths are larger than declared width


  var _useState9 = useState(Math.min(widthNoPx, MIN_WIDTH)),
      _useState10 = slicedToArray(_useState9, 2),
      placeholderMinWidth = _useState10[0],
      setPlaceholderMinWidth = _useState10[1];

  var popoverRefCallback = useCallback(function (el) {
    if (!el) {
      return;
    }

    setPlaceholderMinWidth(el.clientWidth);
    setMeasureWidth(false);
  }, []);
  useEffect(function () {
    setMeasureWidth(true);
  }, [vw, items]); // Update the button width every time the reference updates

  var _useButtonRef = useButtonRef(function (el) {
    setButtonWidth(el.clientWidth);
  }),
      refCallback = _useButtonRef.refCallback,
      buttonRef = _useButtonRef.buttonRef; // And every time the viewport resizes


  useEffect(function () {
    if (!buttonRef.current) {
      return;
    }

    setButtonWidth(buttonRef.current.clientWidth);
  }, [buttonRef, vw]);
  var selectedIndex = useMemo(function () {
    if (selected !== undefined) {
      return selected;
    }

    if (active !== undefined) {
      return active;
    }

    return -1;
  }, [active, selected]);

  var _useDropDown = useDropDown({
    buttonRef: buttonRef,
    displayedLabel: placeholder || label,
    items: items,
    onChange: onChange,
    selected: selected
  }),
      handleItemSelect = _useDropDown.handleItemSelect,
      close = _useDropDown.close,
      toggle = _useDropDown.toggle,
      opened = _useDropDown.opened,
      selectedLabel = _useDropDown.selectedLabel;

  var closedWithChanges = !opened && selectedIndex !== -1;
  var Label = renderLabel;
  return React.createElement(Inside, {
    name: "DropDown"
  }, React.createElement(_StyledButtonBase$b, _extends_1({
    ref: refCallback,
    disabled: disabled,
    onClick: toggle,
    focusRingRadius: RADIUS,
    focusRingSpacing: 1
  }, props, {
    _css: wide ? 'flex' : 'inline-flex',
    _css2: 5 * GU,
    _css3: 2 * GU,
    _css4: 1.5 * GU,
    _css5: width || (wide ? '100%' : 'auto'),
    _css6: wide ? 'auto' : "".concat(placeholderMinWidth, "px"),
    _css7: disabled ? theme.disabled : theme.surface,
    _css8: disabled ? theme.disabledContent : theme.surfaceContent,
    _css9: disabled ? 0 : 1,
    _css10: closedWithChanges ? theme.selected : theme.border,
    _css11: textStyle('body2'),
    _css12: disabled ? 'font-weight: 600;' : "\n              &:active {\n                background: ".concat(theme.surfacePressed, ";\n              }\n            ")
  }), React.createElement(_StyledDiv$n, null, React.createElement(Label, {
    selectedIndex: selectedIndex,
    selectedLabel: selectedLabel
  })), React.createElement(_StyledIconDown$1, {
    size: "tiny",
    _css13: 1.5 * GU,
    _css14: disabled ? theme.disabledIcon : closedWithChanges ? theme.accent : theme.surfaceIcon
  })), measureWidth && React.createElement(_StyledDiv2$e, null, React.createElement(PopoverContent, {
    refCallback: popoverRefCallback,
    buttonWidth: buttonWidth,
    header: header,
    items: items
  })), React.createElement(Popover, {
    onClose: close,
    opener: buttonRef.current,
    visible: opened
  }, React.createElement(PopoverContent, {
    buttonWidth: buttonWidth,
    header: header,
    items: items,
    handleItemSelect: handleItemSelect,
    selectedIndex: selectedIndex
  })));
});
DropDown.propTypes = {
  disabled: propTypes.bool,
  header: propTypes.node,
  items: propTypes.arrayOf(propTypes.node).isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.node,
  renderLabel: propTypes.func,
  selected: propTypes.number,
  wide: propTypes.bool,
  width: propTypes.string,
  // deprecated
  active: propTypes.number,
  label: propTypes.string
};
DropDown.defaultProps = {
  placeholder: 'Select an item',
  renderLabel: function renderLabel(_ref3) {
    var selectedLabel = _ref3.selectedLabel;
    return selectedLabel;
  },
  wide: false
};

var _StyledDiv3$8 = _styled.div.withConfig({
  displayName: "DropDown___StyledDiv3",
  componentId: "sc-17zpefi-4"
})(["min-width:", "px;color:", ";"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
});

var _StyledDiv4$6 = _styled.div.withConfig({
  displayName: "DropDown___StyledDiv4",
  componentId: "sc-17zpefi-5"
})(["padding:", "px ", "px ", "px;", ";", ";"], function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
}, function (p) {
  return p._css19;
}, function (p) {
  return p._css20;
}, unselectable);

var _StyledUl$1 = _styled.ul.withConfig({
  displayName: "DropDown___StyledUl",
  componentId: "sc-17zpefi-6"
})(["margin:0;padding:0;list-style:none;width:100%;"]);

var PopoverContent = React.memo(function PopoverContent(_ref4) {
  var refCallback = _ref4.refCallback,
      buttonWidth = _ref4.buttonWidth,
      header = _ref4.header,
      items = _ref4.items,
      handleItemSelect = _ref4.handleItemSelect,
      selectedIndex = _ref4.selectedIndex;
  var theme = useTheme();
  return React.createElement(_StyledDiv3$8, {
    _css15: buttonWidth,
    _css16: theme.surfaceContentSecondary
  }, header && React.createElement(_StyledDiv4$6, {
    _css17: 1.5 * GU,
    _css18: 2 * GU,
    _css19: 1.25 * GU,
    _css20: textStyle('label2')
  }, header), React.createElement(_StyledUl$1, {
    ref: refCallback
  }, React.createElement(Inside, {
    name: "DropDown:menu"
  }, items.map(function (item, index) {
    return React.createElement(Item, {
      key: index,
      index: index,
      onSelect: handleItemSelect,
      theme: theme,
      item: item,
      header: header,
      length: items.length,
      selected: selectedIndex
    });
  }))));
});
PopoverContent.propTypes = {
  refCallback: propTypes.func.isRequired,
  buttonWidth: propTypes.number.isRequired,
  header: propTypes.node,
  items: propTypes.array.isRequired,
  handleItemSelect: propTypes.func.isRequired,
  selectedIndex: propTypes.number.isRequired
};
PopoverContent.defaultProps = {
  refCallback: function refCallback() {
    return null;
  },
  handleItemSelect: function handleItemSelect() {
    return null;
  },
  selectedIndex: -1
};

var _StyledButtonBase2 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "DropDown___StyledButtonBase2",
  componentId: "sc-17zpefi-7"
})(["width:100%;text-align:left;padding:", "px ", "px;border-radius:0;color:", ";", ";", " ", " ", " &:active{background:", ";}"], function (p) {
  return p._css21;
}, function (p) {
  return p._css22;
}, function (p) {
  return p._css23;
}, function (p) {
  return p._css24;
}, function (p) {
  return p._css25;
}, function (p) {
  return p._css26;
}, function (p) {
  return p._css27;
}, function (p) {
  return p._css28;
});

var Item = React.memo(function Item(_ref5) {
  var header = _ref5.header,
      index = _ref5.index,
      item = _ref5.item,
      length = _ref5.length,
      onSelect = _ref5.onSelect,
      selected = _ref5.selected,
      theme = _ref5.theme;
  var handleClick = useCallback(function () {
    onSelect(index);
  }, [index, onSelect]);
  return React.createElement("li", null, React.createElement(_StyledButtonBase2, {
    onClick: handleClick,
    _css21: 1.25 * GU,
    _css22: 2 * GU,
    _css23: theme.content,
    _css24: textStyle('body2'),
    _css25: !header && index === 0 ? "border-top-left-radius: ".concat(RADIUS, "px;") : '',
    _css26: index === length - 1 ? "border-bottom-left-radius: ".concat(RADIUS, "px;") : '',
    _css27: selected === index ? "\n              border-left: 2px solid ".concat(theme.accent, ";\n              background: ").concat(theme.surfaceSelected, ";\n            ") : '',
    _css28: theme.surfacePressed
  }, item));
});
Item.propTypes = {
  header: propTypes.node,
  index: propTypes.number.isRequired,
  item: propTypes.node.isRequired,
  length: propTypes.number.isRequired,
  onSelect: propTypes.func.isRequired,
  selected: propTypes.number.isRequired,
  theme: propTypes.object.isRequired
};

var illustrationDefault = "48526b4ed811c6ff.png";

var _StyledCard = _styled(Card).withConfig({
  displayName: "EmptyStateCard___StyledCard",
  componentId: "ov2yly-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:", "px 1fr auto;height:", "px;padding:", "px;text-align:center;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv$o = _styled.div.withConfig({
  displayName: "EmptyStateCard___StyledDiv",
  componentId: "ov2yly-1"
})(["display:flex;justify-content:center;overflow:hidden;"]);

var _StyledDiv2$f = _styled.div.withConfig({
  displayName: "EmptyStateCard___StyledDiv2",
  componentId: "ov2yly-2"
})(["color:", ";", ";"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var EmptyStateCard = React.memo(function EmptyStateCard(_ref) {
  var action = _ref.action,
      icon = _ref.icon,
      illustration = _ref.illustration,
      text = _ref.text,
      props = objectWithoutProperties(_ref, ["action", "icon", "illustration", "text"]);

  var theme = useTheme();
  var publicUrl = usePublicUrl();

  if (icon !== undefined) {
    warnOnce('EmptyStateCard:icon', 'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.');

    if (illustration === undefined) {
      illustration = icon;
    }
  } // default illustration


  if (!illustration) {
    illustration = React.createElement("img", {
      src: publicUrl + illustrationDefault,
      alt: "",
      height: 20 * GU
    });
  }

  return React.createElement(Inside, {
    name: "EmptyStateCard"
  }, React.createElement(_StyledCard, _extends_1({}, props, {
    _css: 20 * GU,
    _css2: 42 * GU,
    _css3: 2 * GU
  }), React.createElement(_StyledDiv$o, null, illustration), React.createElement(_StyledDiv2$f, {
    _css4: theme.surfaceContent,
    _css5: textStyle('title4')
  }, text), React.createElement("div", null, action)));
});
EmptyStateCard.propTypes = {
  action: propTypes.node,
  illustration: propTypes.node,
  text: propTypes.node.isRequired,
  // deprecated
  icon: propTypes.node
};

var EscapeOutside =
/*#__PURE__*/
function (_React$Component) {
  inherits(EscapeOutside, _React$Component);

  function EscapeOutside() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, EscapeOutside);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(EscapeOutside)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "_element", React.createRef());

    defineProperty(assertThisInitialized(_this), "_document", null);

    defineProperty(assertThisInitialized(_this), "handleClick", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (!_this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    defineProperty(assertThisInitialized(_this), "handleEscape", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (e.keyCode === KEY_ESC) {
        onEscapeOutside();
      }
    });

    return _this;
  }

  createClass(EscapeOutside, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._document = this._element.ownerDocument;

      this._document.addEventListener('keydown', this.handleEscape);

      this._document.addEventListener('click', this.handleClick);

      this._document.addEventListener('touchend', this.handleClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._document.removeEventListener('keydown', this.handleEscape);

      this._document.removeEventListener('click', this.handleClick);

      this._document.removeEventListener('touchend', this.handleClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          onEscapeOutside = _this$props.onEscapeOutside,
          rest = objectWithoutProperties(_this$props, ["children", "onEscapeOutside"]);

      return React.createElement("div", _extends_1({}, rest, {
        ref: function ref(n) {
          return _this2._element = n;
        }
      }), children);
    }
  }]);

  return EscapeOutside;
}(React.Component);

defineProperty(EscapeOutside, "propTypes", {
  children: propTypes.node.isRequired,
  onEscapeOutside: propTypes.func
});

defineProperty(EscapeOutside, "defaultProps", {
  onEscapeOutside: noop
});

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

var fieldId = 1;

var _StyledDiv$p = _styled.div.withConfig({
  displayName: "Field___StyledDiv",
  componentId: "uqte4v-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2$g = _styled.div.withConfig({
  displayName: "Field___StyledDiv2",
  componentId: "uqte4v-1"
})(["display:flex;align-items:center;height:", "px;margin-bottom:", "px;color:", ";white-space:nowrap;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, unselectable);

var _StyledSpan$a = _styled.span.withConfig({
  displayName: "Field___StyledSpan",
  componentId: "uqte4v-2"
})(["color:", ";"], function (p) {
  return p._css6;
});

function Field(_ref) {
  var children = _ref.children,
      label = _ref.label,
      required = _ref.required,
      props = objectWithoutProperties(_ref, ["children", "label", "required"]);

  var theme = useTheme();
  var isRequired = required || React.Children.toArray(children).some(function (_ref2) {
    var props = _ref2.props;
    return props && props.required;
  });
  var id = useMemo(function () {
    return typeof children === 'function' ? "Field_".concat(fieldId++) : null;
  }, [children]);
  var labelProps = id === null ? {} : {
    htmlFor: id
  };
  return React.createElement(Inside, {
    name: "Field"
  }, React.createElement(_StyledDiv$p, _extends_1({}, props, {
    _css: 3 * GU
  }), React.createElement("label", labelProps, React.createElement(_StyledDiv2$g, {
    _css2: 2 * GU,
    _css3: 0.5 * GU,
    _css4: theme.surfaceContentSecondary,
    _css5: textStyle('label2')
  }, React.createElement(Inside, {
    name: "Field:label"
  }, label, isRequired && React.createElement(_StyledSpan$a, {
    title: "Required",
    _css6: theme.accent
  }, "\xA0*"))), React.createElement(Inside, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id: id
  }) : children))));
}

Field.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  label: propTypes.node,
  required: propTypes.bool
};

var _StyledDiv$q = _styled.div.withConfig({
  displayName: "FloatIndicator___StyledDiv",
  componentId: "sc-1mhu8xn-0"
})(["position:absolute;z-index:1;width:100%;display:flex;justify-content:center;bottom:25px;"]);

var FloatIndicator = React.memo(function FloatIndicator(_ref) {
  var children = _ref.children,
      visible = _ref.visible;
  var theme = useTheme();
  return React.createElement(RootPortal, null, React.createElement(Transition, {
    native: true,
    items: visible,
    from: {
      progress: 0
    },
    enter: {
      progress: 1
    },
    leave: {
      progress: 0
    },
    config: springs.smooth
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var progress = _ref2.progress;
      return React.createElement(_StyledDiv$q, null, React.createElement(_StyledBox, {
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          opacity: progress,
          transform: progress.interpolate(function (v) {
            return "translate3d(0, calc(10px * ".concat(1 - v, "), 0)");
          })
        },
        _css: theme.background,
        _css2: theme.contentSecondary,
        _css3: theme.border
      }, children));
    };
  }
  /* eslint-enable react/prop-types */
  ));
});
FloatIndicator.propTypes = {
  visible: propTypes.bool,
  children: propTypes.node.isRequired
};
FloatIndicator.defaultProps = {
  visible: true
};
var Box$1 = _styled(extendedAnimated.div).withConfig({
  displayName: "FloatIndicator__Box",
  componentId: "sc-1mhu8xn-1"
})(["display:flex;padding:", "px ", "px;border-radius:", "px;", ";cursor:default;"], GU, 3 * GU, RADIUS, textStyle('body3'));

var _StyledBox = _styled(Box$1).withConfig({
  displayName: "FloatIndicator___StyledBox",
  componentId: "sc-1mhu8xn-2"
})(["background:", ";color:", ";border:1px solid ", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv$r = _styled.div.withConfig({
  displayName: "Header___StyledDiv",
  componentId: "euryjq-0"
})(["padding:", "px 0;background:", ";margin-bottom:", "px;box-shadow:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

var _StyledDiv2$h = _styled.div.withConfig({
  displayName: "Header___StyledDiv2",
  componentId: "euryjq-1"
})(["display:flex;align-items:center;justify-content:space-between;height:", "px;padding:0 ", "px;"], function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var _StyledDiv3$9 = _styled.div.withConfig({
  displayName: "Header___StyledDiv3",
  componentId: "euryjq-2"
})(["display:flex;min-width:0;flex-shrink:1;flex-grow:1;margin-right:", "px;"], function (p) {
  return p._css7;
});

var _StyledDiv4$7 = _styled.div.withConfig({
  displayName: "Header___StyledDiv4",
  componentId: "euryjq-3"
})(["flex-shrink:0;"]);

function Header(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["primary", "secondary", "children"]);

  var theme = useTheme();

  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var fullWidth = layoutName === 'small';
  return React.createElement(Inside, {
    name: "Header"
  }, React.createElement(_StyledDiv$r, _extends_1({}, props, {
    _css: fullWidth ? 0 : 3 * GU,
    _css2: fullWidth ? theme.surface : 'none',
    _css3: fullWidth ? 2 * GU : 0,
    _css4: fullWidth ? '0px 2px 3px rgba(0, 0, 0, 0.05)' : 'none'
  }), React.createElement(_StyledDiv2$h, {
    _css5: fullWidth ? 8 * GU : 5 * GU,
    _css6: fullWidth && !children ? 2 * GU : 0
  }, children || React.createElement(React.Fragment, null, React.createElement(Inside, {
    name: "Header:primary"
  }, React.createElement(_StyledDiv3$9, {
    _css7: secondary ? 2 * GU : 0
  }, typeof primary === 'string' && primary ? React.createElement(Header.Title, null, primary) : primary)), React.createElement(Inside, {
    name: "Header:secondary"
  }, React.createElement(_StyledDiv4$7, null, secondary))))));
}

Header.propTypes = {
  primary: propTypes.node,
  secondary: propTypes.node,
  children: propTypes.node
};

var _StyledH$5 = _styled.h1.withConfig({
  displayName: "Header___StyledH",
  componentId: "euryjq-4"
})(["color:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;", ";"], function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
});

Header.Title = function HeaderTitle(_ref2) {
  var children = _ref2.children,
      props = objectWithoutProperties(_ref2, ["children"]);

  var theme = useTheme();

  var _useLayout2 = useLayout(),
      layoutName = _useLayout2.layoutName;

  var fullWidth = layoutName === 'small';
  return React.createElement(_StyledH$5, _extends_1({}, props, {
    _css8: theme.content,
    _css9: textStyle(fullWidth ? 'title3' : 'title2')
  }), children);
};

Header.Title.propTypes = {
  children: propTypes.node
};

var _StyledDiscButton = _styled(DiscButton).withConfig({
  displayName: "Help___StyledDiscButton",
  componentId: "sc-11d74sh-0"
})(["margin-top:", "px;margin-left:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledPopover$1 = _styled(Popover).withConfig({
  displayName: "Help___StyledPopover",
  componentId: "sc-11d74sh-1"
})(["border:0;overflow:hidden;", ";"], function (p) {
  return p._css3;
});

var _StyledDiv$s = _styled.div.withConfig({
  displayName: "Help___StyledDiv",
  componentId: "sc-11d74sh-2"
})(["position:relative;max-width:", "px;min-width:", "px;padding:", "px;&:before{content:'';position:absolute;top:0;left:0;bottom:0;width:", "px;background:", ";}"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Help(_ref) {
  var hint = _ref.hint,
      children = _ref.children;
  var theme = useTheme();
  var buttonElement = useRef();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var open = useCallback(function () {
    return setVisible(true);
  }, []);
  var close = useCallback(function () {
    return setVisible(false);
  }, []);

  var _useInside = useInside('Box:heading'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBoxHeading = _useInside2[0];

  var _useInside3 = useInside('Field:label'),
      _useInside4 = slicedToArray(_useInside3, 1),
      insideFieldLabel = _useInside4[0];

  return React.createElement(React.Fragment, null, React.createElement(_StyledDiscButton, {
    ref: buttonElement,
    description: hint,
    onClick: open,
    size: 2 * GU,
    _css: insideFieldLabel ? -3 : 0,
    _css2: insideBoxHeading || insideFieldLabel ? 1 * GU : 0
  }, React.createElement(IconQuestion, {
    size: "tiny"
  })), React.createElement(_StyledPopover$1, {
    opener: buttonElement.current,
    visible: visible,
    onClose: close,
    _css3: textStyle('body3')
  }, React.createElement(_StyledDiv$s, {
    _css4: 48 * GU,
    _css5: 20 * GU,
    _css6: 3 * GU,
    _css7: 0.5 * GU,
    _css8: theme.help
  }, children)));
}

Help.propTypes = {
  hint: propTypes.string.isRequired,
  children: propTypes.node.isRequired
};

var _StyledTag$1 = _styled(Tag).withConfig({
  displayName: "IdentityBadgePopover___StyledTag",
  componentId: "sc-1yeyfty-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var IdentityBadgePopover = React.memo(function IdentityBadgePopover(_ref) {
  var address = _ref.address,
      connectedAccount = _ref.connectedAccount,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      popoverAction = _ref.popoverAction,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('address', address, {
    networkType: networkType
  });
  return React.createElement(BadgePopoverBase, {
    addressField: React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && React.createElement(Link, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    titleTag: connectedAccount && React.createElement(_StyledTag$1, {
      title: "This is your Ethereum address",
      _css: 1 * GU
    }, "you"),
    visible: visible
  });
});
IdentityBadgePopover.propTypes = {
  address: propTypes.string,
  connectedAccount: propTypes.bool,
  networkType: propTypes.string,
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  popoverAction: BadgePopoverActionType,
  title: propTypes.node,
  visible: propTypes.bool
};
IdentityBadgePopover.defaultProps = {
  title: 'Address'
};

var _StyledDiv$t = _styled.div.withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "q71pax-0"
})(["display:block;margin-right:", "px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var IdentityBadge = React.memo(function IdentityBadge(_ref) {
  var badgeOnly = _ref.badgeOnly,
      compact = _ref.compact,
      connectedAccount = _ref.connectedAccount,
      entity = _ref.entity,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      popoverAction = _ref.popoverAction,
      popoverTitle = _ref.popoverTitle,
      shorten = _ref.shorten,
      customLabel = _ref.customLabel,
      fontSize = _ref.fontSize,
      props = objectWithoutProperties(_ref, ["badgeOnly", "compact", "connectedAccount", "entity", "label", "labelStyle", "networkType", "popoverAction", "popoverTitle", "shorten", "customLabel", "fontSize"]);

  if (customLabel) {
    warnOnce('IdentityBadge:customLabel', 'The “customLabel” prop is deprecated. Please use “label” instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    warnOnce('IdentityBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  var badgeRef = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = useCallback(function () {
    return setOpened(true);
  }, []);
  var address = isAddress(entity) ? entity : null;
  var displayLabel = label || (address && shorten ? shortenAddress(address) : entity);
  return React.createElement(BadgeBase, _extends_1({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && React.createElement(_StyledDiv$t, {
      _css: 1 * GU,
      _css2: compact ? "\n                  position: relative;\n                  top: -1px;\n                " : ''
    }, React.createElement(EthIdenticon, {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: "\n        ".concat(!label && address ? textStyle('address1') : '', "\n        ").concat(labelStyle, "\n      "),
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), function (popoverDisabled) {
    return !popoverDisabled && address && React.createElement(IdentityBadgePopover, {
      address: address,
      connectedAccount: connectedAccount,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      popoverAction: popoverAction,
      title: popoverTitle,
      visible: opened
    });
  });
});
IdentityBadge.propTypes = {
  badgeOnly: propTypes.bool,
  compact: propTypes.bool,
  connectedAccount: propTypes.bool,
  entity: propTypes.string,
  label: propTypes.string,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: propTypes.node,
  shorten: propTypes.bool,
  // Deprecated
  customLabel: propTypes.string,
  fontSize: propTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  networkType: 'main',
  shorten: true
};

function ownKeys$d(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$d(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$d(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$d(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function isEmpty(value) {
  return value === undefined || value === null;
} // Require a prop to not be empty


function requireProp(props, propName, componentName) {
  return isEmpty(props[propName]) ? new Error("The prop `".concat(propName, "` is required for `").concat(componentName, "`.")) : null;
} // Accept any number in the 0 => 1 range


function _0to1(props, propName, componentName) {
  if (isEmpty(props[propName])) {
    return null;
  }

  if (typeof props[propName] === 'number' && props[propName] >= 0 && props[propName] <= 1) {
    return null;
  }

  return new Error("Invalid prop `".concat(propName, "` supplied to `").concat(componentName, "`. Please provide a number in the 0-1 range."));
} // Required version


_0to1.isRequired = function () {
  return requireProp.apply(void 0, arguments) || _0to1.apply(void 0, arguments);
};

var ExtendedPropTypes = _objectSpread$d({}, propTypes, {
  _component: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
    render: propTypes.func.isRequired
  })]),
  _spring: propTypes.shape({
    mass: propTypes.number,
    tension: propTypes.number,
    friction: propTypes.number,
    precision: propTypes.number
  }),
  _null: propTypes.oneOf([null]),
  _0to1: _0to1
});

var LABELS_HEIGHT = 30;

var _StyledSvg = _styled.svg.withConfig({
  displayName: "LineChart___StyledSvg",
  componentId: "sc-8kiakb-0"
})(["display:block"]);

var _StyledText = _styled.text.withConfig({
  displayName: "LineChart___StyledText",
  componentId: "sc-8kiakb-1"
})(["alignment-baseline:middle;font-size:12px;font-weight:300;", ";"], unselectable);

var LineChart =
/*#__PURE__*/
function (_React$Component) {
  inherits(LineChart, _React$Component);

  function LineChart() {
    classCallCheck(this, LineChart);

    return possibleConstructorReturn(this, getPrototypeOf(LineChart).apply(this, arguments));
  }

  createClass(LineChart, [{
    key: "getX",
    value: function getX(index) {
      var width = this.props.width;
      var slice = width / Math.max(1, this.getTotalCount() - 1);
      return slice * index;
    }
  }, {
    key: "getY",
    value: function getY(percentage, progress, height) {
      var dotRadius = this.props.dotRadius;
      var padding = dotRadius + 2;
      return height - padding - (height - padding * 2) * percentage * progress;
    }
  }, {
    key: "getLines",
    value: function getLines() {
      var lines = this.props.lines;
      return lines.map(function (lineOrValues) {
        return Array.isArray(lineOrValues) ? {
          values: lineOrValues
        } : lineOrValues;
      });
    }
  }, {
    key: "getValuesCount",
    value: function getValuesCount() {
      var lines = this.getLines(); // All the values have the same length, so we can use the first one.

      return lines[0] ? lines[0].values.length : 0;
    }
  }, {
    key: "getTotalCount",
    value: function getTotalCount() {
      var total = this.props.total;
      var valuesCount = this.getValuesCount(); // If no total is provided, the total is the number of provided values.

      return total > 0 && total > valuesCount ? total : valuesCount;
    }
  }, {
    key: "getLabelPosition",
    value: function getLabelPosition(index, length) {
      if (index === 0) return 'start';
      if (index === length - 1) return 'end';
      return 'middle';
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          borderColor = _this$props.borderColor,
          dotRadius = _this$props.dotRadius,
          springConfig = _this$props.springConfig,
          label = _this$props.label,
          reset = _this$props.reset,
          animDelay = _this$props.animDelay,
          color = _this$props.color,
          labelColor = _this$props.labelColor,
          props = objectWithoutProperties(_this$props, ["width", "height", "borderColor", "dotRadius", "springConfig", "label", "reset", "animDelay", "color", "labelColor"]);

      var lines = this.getLines(); // the provided values, up to this point

      var valuesCount = this.getValuesCount(); // the total amount of values

      var totalCount = this.getTotalCount();
      var labels = label && totalCount > 0 ? toConsumableArray(Array(totalCount).keys()).map(label) : null;
      var chartHeight = height - (labels ? LABELS_HEIGHT : 0);
      var rectangle = React.createElement("rect", {
        width: width,
        height: chartHeight,
        rx: "3",
        ry: "3",
        fill: "#ffffff",
        strokeWidth: "1",
        stroke: borderColor
      });
      return React.createElement(Spring, {
        from: {
          progress: 0
        },
        to: {
          progress: 1
        },
        config: springConfig,
        delay: animDelay,
        reset: reset
      }, function (_ref) {
        var progress = _ref.progress;
        return React.createElement(_StyledSvg, _extends_1({
          viewBox: "0 0 ".concat(width, " ").concat(height),
          width: width,
          height: height
        }, props), React.createElement("mask", {
          id: "chart-mask"
        }, rectangle), rectangle, React.createElement("g", {
          mask: "url(#chart-mask)"
        }, totalCount > 0 && React.createElement("path", {
          d: "\n                    ".concat(toConsumableArray(new Array(totalCount - 1)).reduce(function (path, _, index) {
            return "".concat(path, " M ").concat(_this.getX(index), ",").concat(chartHeight, " l 0,-8");
          }, ''), "\n                  "),
          stroke: borderColor,
          strokeWidth: "1"
        }), lines.map(function (line, lineIndex) {
          return React.createElement("g", {
            key: "line-plot-".concat(line.id || lineIndex)
          }, React.createElement("path", {
            d: "\n                            M\n                            ".concat(_this.getX(0), ",\n                            ").concat(_this.getY(line.values[0], progress, chartHeight), "\n\n                            ").concat(line.values.slice(1).map(function (val, index) {
              return "L\n                                   ".concat(_this.getX((index + 1) * progress), ",\n                                   ").concat(_this.getY(val, progress, chartHeight), "\n                                  ");
            }).join(''), "\n                          "),
            fill: "transparent",
            stroke: line.color || color(lineIndex, {
              lines: lines
            }),
            strokeWidth: "2"
          }), line.values.slice(1, -1).map(function (val, index) {
            return React.createElement("circle", {
              key: index,
              cx: _this.getX(index + 1) * progress,
              cy: _this.getY(val, progress, chartHeight),
              r: dotRadius,
              fill: "white",
              stroke: line.color || color(lineIndex, {
                lines: lines
              }),
              strokeWidth: "1"
            });
          }));
        }), React.createElement("line", {
          x1: _this.getX(valuesCount - 1) * progress,
          y1: "0",
          x2: _this.getX(valuesCount - 1) * progress,
          y2: chartHeight,
          stroke: "#DAEAEF",
          strokeWidth: "3"
        })), labels && React.createElement("g", {
          transform: "translate(0,".concat(chartHeight, ")")
        }, labels.map(function (label, index) {
          return React.createElement(_StyledText, {
            key: index,
            x: _this.getX(index),
            y: LABELS_HEIGHT / 2,
            textAnchor: _this.getLabelPosition(index, labels.length),
            fill: labelColor
          }, label);
        })));
      });
    }
  }]);

  return LineChart;
}(React.Component);

defineProperty(LineChart, "propTypes", {
  springConfig: ExtendedPropTypes._spring,
  total: ExtendedPropTypes.number,
  width: ExtendedPropTypes.number,
  height: ExtendedPropTypes.number,
  dotRadius: ExtendedPropTypes.number,
  animDelay: ExtendedPropTypes.number,
  borderColor: ExtendedPropTypes.string,
  labelColor: ExtendedPropTypes.string,
  reset: ExtendedPropTypes.bool,
  lines: ExtendedPropTypes.arrayOf(ExtendedPropTypes.oneOfType([ExtendedPropTypes.shape({
    id: ExtendedPropTypes.number,
    values: ExtendedPropTypes.arrayOf(ExtendedPropTypes.number).isRequired,
    // numbers between 0 and 1
    color: ExtendedPropTypes.string // overrides the color() prop if set

  }), // values can also be passed directly
  ExtendedPropTypes.arrayOf(ExtendedPropTypes.number)])),
  label: ExtendedPropTypes.oneOfType([ExtendedPropTypes.func, ExtendedPropTypes._null]),
  color: ExtendedPropTypes.func
});

defineProperty(LineChart, "defaultProps", {
  springConfig: springs.lazy,
  total: -1,
  width: 300,
  height: 200,
  dotRadius: 7 / 2,
  animDelay: 500,
  reset: false,
  borderColor: 'rgba(209, 209, 209, 0.5)',
  labelColor: '#6d777b',
  lines: [],
  label: function label(index) {
    return index + 1;
  },
  color: function color(index, _ref2) {
    var lines = _ref2.lines;
    return "hsl(".concat((index * (360 / lines.length) + 40) % 360, ", 60%, 70%)");
  }
});

var _StyledDiv$u = _styled.div.withConfig({
  displayName: "ScrollView___StyledDiv",
  componentId: "sc-1hhoqwn-0"
})(["position:relative;z-index:0;height:100%;overflow-x:", ";overflow-y:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function ScrollView(_ref) {
  var children = _ref.children,
      horizontal = _ref.horizontal,
      vertical = _ref.vertical,
      props = objectWithoutProperties(_ref, ["children", "horizontal", "vertical"]);

  return React.createElement(_StyledDiv$u, _extends_1({}, props, {
    _css: horizontal ? 'auto' : 'hidden',
    _css2: vertical ? 'auto' : 'hidden'
  }), children);
}

ScrollView.propTypes = {
  vertical: propTypes.bool,
  horizontal: propTypes.bool,
  children: propTypes.node
};
ScrollView.defaultProps = {
  vertical: true,
  horizontal: true
};

var _initContainsComponen = initContainsComponent(),
    ContainsAppViewProvider = _initContainsComponen.Provider,
    useContainsAppView = _initContainsComponen.useContains,
    useRegisterAppView = _initContainsComponen.useRegister;

var _StyledScrollView = _styled(ScrollView).withConfig({
  displayName: "Main___StyledScrollView",
  componentId: "sc-1n64cjc-0"
})(["height:100vh"]);

function Main$3(_ref) {
  var children = _ref.children,
      assetsUrl = _ref.assetsUrl,
      layout = _ref.layout,
      scrollView = _ref.scrollView;
  var containsAppView = useContainsAppView();

  if (layout === undefined) {
    layout = !containsAppView;
  }

  if (scrollView === undefined) {
    scrollView = !containsAppView;
  } // Optionally wrap `children` with Layout and/or ScrollView


  var content = layout ? React.createElement(Layout, null, children) : children;
  content = scrollView ? // The main ScrollView is set to 100vh by default (best for Aragon apps)
  // Disable `scrollView` and insert your own if needed.
  React.createElement(_StyledScrollView, null, content) : content;
  return React.createElement(MainTheme, null, React.createElement(Root.Provider, null, React.createElement(Viewport.Provider, null, React.createElement(PublicUrl.Provider, {
    url: ensureTrailingSlash(assetsUrl)
  }, React.createElement(BaseStyles$1, null), React.createElement(ToastHubProvider, null, content)))));
}

Main$3.propTypes = {
  assetsUrl: propTypes.string,
  children: propTypes.node,
  layout: propTypes.bool,
  scrollView: propTypes.bool
};
Main$3.defaultProps = {
  assetsUrl: './aragon-ui/'
};
var Main$4 = (function (props) {
  return React.createElement(ContainsAppViewProvider, null, React.createElement(Main$3, props));
});

function ownKeys$e(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$e(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$e(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$e(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var SPACE_AROUND = 4 * GU;

var _StyledAnimatedDiv$5 = _styled(extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv",
  componentId: "sc-1ofisn3-0"
})(["position:fixed;top:0;left:0;right:0;bottom:0;background:", ";"], function (p) {
  return p._css;
});

var _StyledAnimatedDiv2$2 = _styled(extendedAnimated.div).withConfig({
  displayName: "Modal___StyledAnimatedDiv2",
  componentId: "sc-1ofisn3-1"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;display:grid;align-items:center;justify-content:center;overflow:auto;"]);

var _StyledDiv$v = _styled.div.withConfig({
  displayName: "Modal___StyledDiv",
  componentId: "sc-1ofisn3-2"
})(["padding:", "px 0;"], SPACE_AROUND);

var _StyledEscapeOutside = _styled(EscapeOutside).withConfig({
  displayName: "Modal___StyledEscapeOutside",
  componentId: "sc-1ofisn3-3"
})(["position:relative;overflow:hidden;min-width:", "px;background:", ";box-shadow:0 10px 28px rgba(0,0,0,0.15);"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledButtonIcon$4 = _styled(ButtonIcon).withConfig({
  displayName: "Modal___StyledButtonIcon",
  componentId: "sc-1ofisn3-4"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      padding = _ref.padding,
      visible = _ref.visible,
      width = _ref.width,
      closeButton = _ref.closeButton,
      props = objectWithoutProperties(_ref, ["children", "onClose", "padding", "visible", "width", "closeButton"]);

  var theme = useTheme();
  var viewport = useViewport();
  return React.createElement(RootPortal, null, React.createElement(Transition, {
    native: true,
    items: visible,
    from: {
      opacity: 0,
      scale: 0.98
    },
    enter: {
      opacity: 1,
      scale: 1
    },
    leave: {
      opacity: 0,
      scale: 0.98
    },
    config: _objectSpread$e({}, springs.smooth, {
      precision: 0.001
    })
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var opacity = _ref2.opacity,
          scale = _ref2.scale;
      return React.createElement(_StyledAnimatedDiv$5, _extends_1({
        style: {
          opacity: opacity
        }
      }, props, {
        _css: theme.overlay.alpha(0.9)
      }), React.createElement(_StyledAnimatedDiv2$2, {
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          transform: scale.interpolate(function (v) {
            return "scale3d(".concat(v, ", ").concat(v, ", 1)");
          })
        }
      }, React.createElement(_StyledDiv$v, null, React.createElement(_StyledEscapeOutside, {
        role: "alertdialog",
        background: theme.surface,
        onEscapeOutside: onClose,
        style: {
          width: cssPx(typeof width === 'function' ? width(viewport) : width),
          padding: cssPx(typeof padding === 'function' ? padding(viewport) : padding),
          borderRadius: "".concat(RADIUS, "px")
        },
        _css2: 360 - SPACE_AROUND * 2,
        _css3: theme.surface
      }, closeButton && React.createElement(_StyledButtonIcon$4, {
        label: "Close",
        onClick: onClose,
        _css4: 2 * GU,
        _css5: 2 * GU
      }, React.createElement(IconCross, null)), React.createElement("div", null, children)))));
    };
  }
  /* eslint-enable react/prop-types */
  ));
}

Modal.propTypes = {
  children: propTypes.node.isRequired,
  closeButton: propTypes.bool,
  onClose: propTypes.func,
  padding: propTypes.oneOfType([propTypes.func, propTypes.number, propTypes.string]),
  visible: propTypes.bool.isRequired,
  width: propTypes.oneOfType([propTypes.func, propTypes.number, propTypes.string])
};
Modal.defaultProps = {
  closeButton: true,
  onClose: noop,
  padding: 3 * GU,
  width: function width(viewport) {
    return Math.min(viewport.width - SPACE_AROUND * 2, 600);
  }
};

var LeftIcon = function LeftIcon() {
  return React.createElement("svg", {
    width: "24",
    height: "19",
    viewBox: "0 0 24 19"
  }, React.createElement("path", {
    d: "M21 10H4l6-6-6 6 6 6",
    stroke: "currentColor",
    strokeWidth: "1.5",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
};

function _templateObject4$2() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  height: 63px;\n  padding: ", ";\n  cursor: pointer;\n  svg {\n    color: hsl(179, 76%, 48%);\n  }\n  :active svg {\n    color: hsl(179, 76%, 63%);\n  }\n  & + ", " {\n    padding-left: 0;\n  }\n"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  height: 100%;\n  align-items: center;\n  padding-left: 30px;\n  white-space: nowrap;\n  font-size: 22px;\n"]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  position: relative;\n  height: 100%;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys$f(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$f(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$f(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$f(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var NavigationBar =
/*#__PURE__*/
function (_React$Component) {
  inherits(NavigationBar, _React$Component);

  function NavigationBar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, NavigationBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(NavigationBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      cachedItems: null,
      direction: -1
    });

    return _this;
  }

  createClass(NavigationBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onBack = _this$props.onBack,
          items = _this$props.items,
          compact = _this$props.compact;
      var displayedItems = items.map(function (node, index) {
        return {
          node: node,
          index: index
        };
      }).slice(-1);
      return React.createElement(Container$1, null, React.createElement(Transition, {
        items: displayedItems,
        keys: displayedItems.map( // Use a different key than 0 when there is only one item, so that
        // the “leave” transition of the first item can be executed when a
        // second item is added.
        function (item) {
          return items.length === 1 ? -1 : item.index;
        }),
        config: springs.smooth,
        initial: null,
        from: {
          opacity: 0,
          position: this.state.direction * -1
        },
        enter: {
          opacity: 1,
          position: 0
        },
        leave: {
          opacity: 0,
          position: this.state.direction
        },
        native: true
      }, function (item) {
        return function (styles) {
          return React.createElement(Item$1, _extends_1({
            label: item.node,
            onBack: onBack,
            displayBack: item.index > 0,
            compact: compact
          }, styles));
        };
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var updatedState = {
        cachedItems: props.items
      };

      if (!state.cachedItems) {
        return updatedState;
      }

      return _objectSpread$f({}, updatedState, {
        direction: state.cachedItems.length > props.items.length ? 1 : -1
      });
    }
  }]);

  return NavigationBar;
}(React.Component);

defineProperty(NavigationBar, "propTypes", {
  onBack: propTypes.func,
  items: propTypes.arrayOf(propTypes.node),
  compact: propTypes.bool
});

defineProperty(NavigationBar, "defaultProps", {
  onBack: function onBack() {},
  items: [],
  compact: false
});

var Item$1 = function Item(_ref) {
  var opacity = _ref.opacity,
      position = _ref.position,
      displayBack = _ref.displayBack,
      onBack = _ref.onBack,
      label = _ref.label,
      compact = _ref.compact;
  return React.createElement(extendedAnimated.span, {
    style: {
      display: 'flex',
      alignItems: 'center',
      opacity: opacity,
      transform: position.interpolate(function (p) {
        return "translate(".concat(p * 20, "px, 0)");
      })
    }
  }, React.createElement(Title, null, displayBack && React.createElement(BackButton$1, {
    onClick: onBack,
    compact: compact
  }, React.createElement(LeftIcon, null)), React.createElement(Label$1, null, label)));
};

Item$1.propTypes = {
  compact: propTypes.bool,
  displayBack: propTypes.bool,
  label: propTypes.node,
  onBack: propTypes.func,
  opacity: propTypes.object,
  position: propTypes.object
};
var Container$1 = _styled.span(_templateObject$4());
var Title = _styled.span(_templateObject2$3());
var Label$1 = _styled.span(_templateObject3$3());
var BackButton$1 = _styled.span(_templateObject4$2(), function (p) {
  return p.compact ? '0 16px' : '0 20px 0 30px';
}, Label$1);

function ownKeys$g(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$g(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$g(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$g(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PartitionBar(_ref) {
  var data = _ref.data,
      caption = _ref.caption,
      colors = _ref.colors;
  warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

  var renderFullLegendItem = caption ? function (_ref2) {
    var item = _ref2.item,
        props = objectWithoutProperties(_ref2, ["item"]);

    return caption(_objectSpread$g({
      name: item
    }, props));
  } : undefined; // name => item (items)

  var items = data.map(function (_ref3) {
    var name = _ref3.name,
        percentage = _ref3.percentage;
    return {
      item: name,
      percentage: percentage
    };
  });
  return React.createElement(Distribution, {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
  })).isRequired,
  colors: propTypes.arrayOf(propTypes.string),
  caption: propTypes.func
};

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

var applyAnimatedValues$1 = undefined;
var colorNames$1 = [];
var requestFrame$1 = function requestFrame(cb) {
  return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
};
var interpolation$1 = undefined;
var now$2 = function now() {
  return Date.now();
};
var createAnimatedStyle$1 = undefined;
var injectApplyAnimatedValues$1 = function injectApplyAnimatedValues(fn, transform) {
  return applyAnimatedValues$1 = {
    fn: fn,
    transform: transform
  };
};
var injectColorNames$1 = function injectColorNames(names) {
  return colorNames$1 = names;
};
var injectInterpolation$1 = function injectInterpolation(cls) {
  return interpolation$1 = cls;
};
var injectCreateAnimatedStyle$1 = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle$1 = factory;
};

var Animated$1 =
/*#__PURE__*/
function () {
  function Animated() {}

  var _proto = Animated.prototype;

  _proto.attach = function attach() {};

  _proto.detach = function detach() {};

  _proto.getValue = function getValue() {};

  _proto.getAnimatedValue = function getAnimatedValue() {
    return this.getValue();
  };

  _proto.addChild = function addChild(child) {};

  _proto.removeChild = function removeChild(child) {};

  _proto.getChildren = function getChildren() {
    return [];
  };

  return Animated;
}();

var getValues$2 = function getValues(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
};

var AnimatedWithChildren$1 =
/*#__PURE__*/
function (_Animated) {
  _inheritsLoose(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
    _this.children = [];

    _this.getChildren = function () {
      return _this.children;
    };

    _this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _assertThisInitialized$1(_assertThisInitialized$1(_this));
    };

    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.addChild = function addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  };

  _proto.removeChild = function removeChild(child) {
    var index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  };

  return AnimatedWithChildren;
}(Animated$1);
var AnimatedArrayWithChildren$1 =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedArrayWithChildren, _AnimatedWithChildren);

  function AnimatedArrayWithChildren() {
    var _this2;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _AnimatedWithChildren.call.apply(_AnimatedWithChildren, [this].concat(args)) || this;
    _this2.payload = [];

    _this2.getAnimatedValue = function () {
      return _this2.getValue();
    };

    _this2.attach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated$1 && p.addChild(_assertThisInitialized$1(_assertThisInitialized$1(_this2)));
      });
    };

    _this2.detach = function () {
      return _this2.payload.forEach(function (p) {
        return p instanceof Animated$1 && p.removeChild(_assertThisInitialized$1(_assertThisInitialized$1(_this2)));
      });
    };

    return _this2;
  }

  return AnimatedArrayWithChildren;
}(AnimatedWithChildren$1);
var AnimatedObjectWithChildren$1 =
/*#__PURE__*/
function (_AnimatedWithChildren2) {
  _inheritsLoose(AnimatedObjectWithChildren, _AnimatedWithChildren2);

  function AnimatedObjectWithChildren() {
    var _this3;

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _AnimatedWithChildren2.call.apply(_AnimatedWithChildren2, [this].concat(args)) || this;
    _this3.payload = {};

    _this3.getAnimatedValue = function () {
      return _this3.getValue(true);
    };

    _this3.attach = function () {
      return getValues$2(_this3.payload).forEach(function (s) {
        return s instanceof Animated$1 && s.addChild(_assertThisInitialized$1(_assertThisInitialized$1(_this3)));
      });
    };

    _this3.detach = function () {
      return getValues$2(_this3.payload).forEach(function (s) {
        return s instanceof Animated$1 && s.removeChild(_assertThisInitialized$1(_assertThisInitialized$1(_this3)));
      });
    };

    return _this3;
  }

  var _proto2 = AnimatedObjectWithChildren.prototype;

  _proto2.getValue = function getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    var payload = {};

    for (var key in this.payload) {
      var value = this.payload[key];
      if (animated && !(value instanceof Animated$1)) continue;
      payload[key] = value instanceof Animated$1 ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  };

  return AnimatedObjectWithChildren;
}(AnimatedWithChildren$1);

var AnimatedStyle$1 =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  _inheritsLoose(AnimatedStyle, _AnimatedObjectWithCh);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated$1)) style = applyAnimatedValues$1.transform(style);
    _this.payload = style;
    return _this;
  }

  return AnimatedStyle;
}(AnimatedObjectWithChildren$1);

// http://www.w3.org/TR/css3-color/#svg-color
var colors$2 = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

var Interpolation$1 =
/*#__PURE__*/
function () {
  function Interpolation() {}

  // Default config = config, args
  // Short config   = range, output, extrapolate
  Interpolation.create = function create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation$1 && config.output && typeof config.output[0] === 'string') return interpolation$1(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output: output,
      extrapolate: extra || 'extend'
    });
    var outputRange = config.output;
    var inputRange = config.range || [0, 1];

    var easing = config.easing || function (t) {
      return t;
    };

    var extrapolateLeft = 'extend';
    var map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    var extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return function (input) {
      var range = findRange$1(input, inputRange);
      return interpolate$1(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate$1(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  var result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange$1(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) break;
  }

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
var NUMBER$1 = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE$1 = NUMBER$1 + '%';

function call$1() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var rgb$1 = new RegExp('rgb' + call$1(NUMBER$1, NUMBER$1, NUMBER$1));
var rgba$1 = new RegExp('rgba' + call$1(NUMBER$1, NUMBER$1, NUMBER$1, NUMBER$1));
var hsl$1 = new RegExp('hsl' + call$1(NUMBER$1, PERCENTAGE$1, PERCENTAGE$1));
var hsla$1 = new RegExp('hsla' + call$1(NUMBER$1, PERCENTAGE$1, PERCENTAGE$1, NUMBER$1));
var hex3$1 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4$1 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6$1 = /^#([0-9a-fA-F]{6})$/;
var hex8$1 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor$1(color) {
  var match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6$1.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors$2.hasOwnProperty(color)) return colors$2[color];

  if (match = rgb$1.exec(color)) {
    return (parse255$1(match[1]) << 24 | // r
    parse255$1(match[2]) << 16 | // g
    parse255$1(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba$1.exec(color)) {
    return (parse255$1(match[1]) << 24 | // r
    parse255$1(match[2]) << 16 | // g
    parse255$1(match[3]) << 8 | // b
    parse1$1(match[4])) >>> // a
    0;
  }

  if (match = hex3$1.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8$1.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4$1.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl$1.exec(color)) {
    return (hslToRgb$1(parse360$1(match[1]), // h
    parsePercentage$1(match[2]), // s
    parsePercentage$1(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla$1.exec(color)) {
    return (hslToRgb$1(parse360$1(match[1]), // h
    parsePercentage$1(match[2]), // s
    parsePercentage$1(match[3]) // l
    ) | parse1$1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb$1(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb$1(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb$1(p, q, h + 1 / 3);
  var g = hue2rgb$1(p, q, h);
  var b = hue2rgb$1(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255$1(str) {
  var int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360$1(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1$1(str) {
  var num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage$1(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba$1(input) {
  var int32Color = normalizeColor$1(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


var stringShapeRegex$1 = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

var colorRegex$1 = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

var colorNamesRegex$1 = new RegExp("(" + Object.keys(colors$2).join('|') + ")", 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation$1(config) {
  // Replace colors with rgba
  var outputRange = config.output.map(function (rangeValue) {
    return rangeValue.replace(colorRegex$1, colorToRgba$1);
  }).map(function (rangeValue) {
    return rangeValue.replace(colorNamesRegex$1, colorToRgba$1);
  }); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  var outputRanges = outputRange[0].match(stringShapeRegex$1).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex$1).forEach(function (number, i) {
      return outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex$1).map(function (value, i) {
    return Interpolation$1.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return function (input) {
    var i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex$1, function () {
      return interpolations[i++](input);
    }) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
      return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
    });
  };
}

var AnimatedInterpolation$1 =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  _inheritsLoose(AnimatedInterpolation, _AnimatedArrayWithChi);

  function AnimatedInterpolation(parents, _config, _arg) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.getValue = function () {
      var _this2;

      return (_this2 = _this).calc.apply(_this2, _this.payload.map(function (value) {
        return value.getValue();
      }));
    };

    _this.updateConfig = function (config, arg) {
      return _this.calc = Interpolation$1.create(config, arg);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
    };

    _this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren$1 && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    _this.calc = Interpolation$1.create(_config, _arg);
    return _this;
  }

  return AnimatedInterpolation;
}(AnimatedArrayWithChildren$1);
var interpolate$1$1 = function interpolate(parents, config, arg) {
  return parents && new AnimatedInterpolation$1(parents, config, arg);
};

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles$1(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(function (child) {
    return findAnimatedStyles$1(child, styles);
  });
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


var AnimatedValue$1 =
/*#__PURE__*/
function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(_value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    _this.getValue = function () {
      return _this.value;
    };

    _this.updateStyles = function () {
      return findAnimatedStyles$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), _this.animatedStyles);
    };

    _this.updateValue = function (value) {
      return _this.flush(_this.value = value);
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
    };

    _this.value = _value;
    _this.animatedStyles = new Set();
    _this.done = false;
    _this.startPosition = _value;
    _this.lastPosition = _value;
    _this.lastVelocity = undefined;
    _this.lastTime = undefined;
    _this.controller = undefined;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.flush = function flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(function (animatedStyle) {
      return animatedStyle.update();
    });
  };

  _proto.prepare = function prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  };

  return AnimatedValue;
}(AnimatedWithChildren$1);

var AnimatedArray$1 =
/*#__PURE__*/
function (_AnimatedArrayWithChi) {
  _inheritsLoose(AnimatedArray, _AnimatedArrayWithChi);

  function AnimatedArray(array) {
    var _this;

    _this = _AnimatedArrayWithChi.call(this) || this;

    _this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach(function (v, i) {
          return _this.payload[i].setValue(v, flush);
        });
      } else _this.payload.forEach(function (v, i) {
        return _this.payload[i].setValue(value, flush);
      });
    };

    _this.getValue = function () {
      return _this.payload.map(function (v) {
        return v.getValue();
      });
    };

    _this.interpolate = function (config, arg) {
      return new AnimatedInterpolation$1(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
    };

    _this.payload = array.map(function (n) {
      return new AnimatedValue$1(n);
    });
    return _this;
  }

  return AnimatedArray;
}(AnimatedArrayWithChildren$1);

function withDefault$1(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray$1(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual$1(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  var i;

  for (i in a) {
    if (!(i in b)) return false;
  }

  for (i in b) {
    if (a[i] !== b[i]) return false;
  }

  return i === void 0 ? a === b : true;
}
function callProp$1(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj.apply(void 0, args) : obj;
}
function getValues$1$1(object) {
  return Object.keys(object).map(function (k) {
    return object[k];
  });
}
function getForwardProps$1(props) {
  var to = props.to,
      from = props.from,
      config = props.config,
      native = props.native,
      onStart = props.onStart,
      onRest = props.onRest,
      onFrame = props.onFrame,
      children = props.children,
      reset = props.reset,
      reverse = props.reverse,
      force = props.force,
      immediate = props.immediate,
      impl = props.impl,
      inject = props.inject,
      delay = props.delay,
      attach = props.attach,
      destroyed = props.destroyed,
      interpolateTo = props.interpolateTo,
      autoStart = props.autoStart,
      ref = props.ref,
      forward = _objectWithoutPropertiesLoose$1(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo$1(props) {
  var forward = getForwardProps$1(props);
  var rest = Object.keys(props).reduce(function (a, k) {
    var _extends2;

    return forward[k] !== void 0 ? a : _extends({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
  }, {});
  return _extends({
    to: forward
  }, rest);
}
function handleRef$1(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

var isUnitlessNumber$1 = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

var prefixKey$1 = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

var prefixes$1 = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber$1 = Object.keys(isUnitlessNumber$1).reduce(function (acc, prop) {
  prefixes$1.forEach(function (prefix) {
    return acc[prefixKey$1(prefix, prop)] = acc[prop];
  });
  return acc;
}, isUnitlessNumber$1);

function dangerousStyleValue$1(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber$1.hasOwnProperty(name) && isUnitlessNumber$1[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

var attributeCache$1 = {};
injectCreateAnimatedStyle$1(function (style) {
  return new AnimatedStyle$1(style);
});
injectInterpolation$1(createInterpolation$1);
injectColorNames$1(colors$2);
injectApplyAnimatedValues$1(function (instance, props) {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    var style = props.style,
        children = props.children,
        scrollTop = props.scrollTop,
        scrollLeft = props.scrollLeft,
        attributes = _objectWithoutPropertiesLoose$1(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (var styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue$1(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (var name in attributes) {
      // Attributes are written in dash case
      var dashCase = attributeCache$1[name] || (attributeCache$1[name] = name.replace(/([A-Z])/g, function (n) {
        return '-' + n.toLowerCase();
      }));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, function (style) {
  return style;
});

var AnimatedProps$1 =
/*#__PURE__*/
function (_AnimatedObjectWithCh) {
  _inheritsLoose(AnimatedProps, _AnimatedObjectWithCh);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedObjectWithCh.call(this) || this;
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle$1(props.style)
    });
    _this.payload = props;
    _this.update = callback;

    _this.attach();

    return _this;
  }

  return AnimatedProps;
}(AnimatedObjectWithChildren$1);

function createAnimatedComponent$1(Component) {
  var AnimatedComponent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      var _this;

      _this = _React$Component.call(this) || this;

      _this.callback = function () {
        if (_this.node) {
          var didUpdate = applyAnimatedValues$1.fn(_this.node, _this.propsAnimated.getAnimatedValue(), _assertThisInitialized$1(_assertThisInitialized$1(_this)));
          if (didUpdate === false) _this.forceUpdate();
        }
      };

      _this.attachProps(props);

      return _this;
    }

    var _proto = AnimatedComponent.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    };

    _proto.setNativeProps = function setNativeProps(props) {
      var didUpdate = applyAnimatedValues$1.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.
    ;

    _proto.attachProps = function attachProps(_ref) {
      var forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose$1(_ref, ["forwardRef"]);

      var oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps$1(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    };

    _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
      var style = props.style,
          nextProps = _objectWithoutPropertiesLoose$1(props, ["style"]);

      var _this$props = this.props,
          currentStyle = _this$props.style,
          currentProps = _objectWithoutPropertiesLoose$1(_this$props, ["style"]);

      if (!shallowEqual$1(currentProps, nextProps) || !shallowEqual$1(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$propsAnimated$g = this.propsAnimated.getValue(),
          scrollTop = _this$propsAnimated$g.scrollTop,
          scrollLeft = _this$propsAnimated$g.scrollLeft,
          animatedProps = _objectWithoutPropertiesLoose$1(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React.createElement(Component, _extends({}, animatedProps, {
        ref: function ref(node) {
          return _this2.node = handleRef$1(node, _this2.props.forwardRef);
        }
      }));
    };

    return AnimatedComponent;
  }(React.Component);

  return React.forwardRef(function (props, ref) {
    return React.createElement(AnimatedComponent, _extends({}, props, {
      forwardRef: ref
    }));
  });
}

var active$1 = false;
var controllers$1 = new Set();

var frameLoop$1 = function frameLoop() {
  var time = now$2();

  for (var _iterator = controllers$1, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var controller = _ref;
    var isDone = true;
    var noChange = true;

    for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      var config = controller.configs[configIdx];
      var endOfAnimation = void 0,
          lastTime = void 0;

      for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        var animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        var from = config.fromValues[valIdx];
        var to = config.toValues[valIdx];
        var position = animation.lastPosition;
        var isAnimated = to instanceof Animated$1;

        var _velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;

        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + _velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          _velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          var numSteps = Math.floor(time - lastTime);

          for (var i = 0; i < numSteps; ++i) {
            var force = -config.tension * (position - to);
            var damping = -config.friction * _velocity;
            var acceleration = (force + damping) / config.mass;
            _velocity = _velocity + acceleration * 1 / 1000;
            position = position + _velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          var isVelocity = Math.abs(_velocity) <= config.precision;
          var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = _velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers$1.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange: noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers$1.size) requestFrame$1(frameLoop);else active$1 = false;
};

var addController$1 = function addController(controller) {
  if (!controllers$1.has(controller)) {
    controllers$1.add(controller);
    if (!active$1) requestFrame$1(frameLoop$1);
    active$1 = true;
  }
};

var removeController$1 = function removeController(controller) {
  if (controllers$1.has(controller)) {
    controllers$1.delete(controller);
  }
};

var Controller$1 =
/*#__PURE__*/
function () {
  function Controller(props, config) {
    var _this = this;

    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = function () {
      return _this.props.native ? _this.interpolations : _this.animatedProps;
    };

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  var _proto = Controller.prototype;

  _proto.update = function update(props) {
    var _this2 = this;

    this.props = _extends({}, this.props, props);

    var _ref = this.props.interpolateTo ? interpolateTo$1(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    var target = attach && attach(this); // Reset merged props when necessary

    var extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce(function (acc, _ref3, i) {
      var name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      var entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      var isNumber = typeof value === 'number';
      var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames$1[value];
      var isArray = !isNumber && !isString && Array.isArray(value);
      var fromValue = from[name] !== undefined ? from[name] : value;
      var toValue = isNumber || isArray ? value : isString ? value : 1;
      var toConfig = callProp$1(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual$1(entry.changes, value)) {
        var _extends2;

        _this2.hasChanged = true;
        var parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue$1(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray$1(fromValue);else {
          var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue$1(0);

          var range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp$1(immediate, name)) parent.setValue(value, false); // Reset animated values

        var animatedValues = toArray$1(parent.getPayload());
        animatedValues.forEach(function (value) {
          return value.prepare(_this2);
        });
        return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, entry, {
          name: name,
          parent: parent,
          interpolation: interpolation$$1,
          animatedValues: animatedValues,
          changes: value,
          fromValues: toArray$1(parent.getValue()),
          toValues: toArray$1(target ? toValue.getPayload() : toValue),
          immediate: callProp$1(immediate, name),
          delay: withDefault$1(toConfig.delay, delay || 0),
          initialVelocity: withDefault$1(toConfig.velocity, 0),
          clamp: withDefault$1(toConfig.clamp, false),
          precision: withDefault$1(toConfig.precision, 0.01),
          tension: withDefault$1(toConfig.tension, 170),
          friction: withDefault$1(toConfig.friction, 26),
          mass: withDefault$1(toConfig.mass, 1),
          duration: toConfig.duration,
          easing: withDefault$1(toConfig.easing, function (t) {
            return t;
          }),
          decay: toConfig.decay
        }), _extends2));
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (var key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start.apply(this, start);
    var onEnd = start[0],
        onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  };

  _proto.start = function start(onEnd, onUpdate) {
    var _this3 = this;

    this.startTime = now$2();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController$1(this);
    return new Promise(function (res) {
      return _this3.resolve = res;
    });
  };

  _proto.stop = function stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1$1(this.animations).forEach(function (a) {
      return a.changes = undefined;
    });
    this.debouncedOnEnd({
      finished: finished
    });
  };

  _proto.destroy = function destroy() {
    removeController$1(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  };

  _proto.debouncedOnEnd = function debouncedOnEnd(result) {
    removeController$1(this);
    this.isActive = false;
    var onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  };

  return Controller;
}();

var KeyframeController =
/*#__PURE__*/
function () {
  function KeyframeController(_props) {
    var _this = this;

    this.frameId = 0;

    this.next = function (props, localFrameId, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      // this.last = last
      // this.running = true
      // config passed to props can overwrite global config passed in
      // controller instantiation i.e. globalConfig
      var config = props.config ? props.config : Array.isArray(_this.globalConfig) ? _this.globalConfig[index] : _this.globalConfig;
      _this.onFrameRest = props.onRest;
      return new Promise(function (resolve) {
        // if ref is passed to internal controller, then it ignore onEnd call back
        _this.instance.update(_extends({}, _this.globalProps, props, {
          config: config
        }), _this.onEnd(_this.onFrameRest, localFrameId, last, resolve)); // start needs to be called here if ref is present to activate the anim


        if (_this.ref) {
          _this.instance.start(_this.onEnd(_this.onFrameRest, localFrameId, last, resolve));
        } // hacky solution to force the parent to be updated any time
        // the child controller is reset


        _this.instance.props.reset && _this.instance.props.native && _this.parentForceUpdate && requestFrame$1(_this.parentForceUpdate);
      });
    };

    this.start = function (onEnd) {
      _this.globalOnEnd = onEnd;

      if (_this.currSlots) {
        var _ret = function () {
          var localFrameId = ++_this.frameId;

          if (Array.isArray(_this.currSlots)) {
            var q = Promise.resolve();

            var _loop = function _loop(i) {
              var index = i;
              var slot = _this.currSlots[index];
              var last = index === _this.currSlots.length - 1;
              q = q.then(function () {
                return localFrameId === _this.frameId && _this.next(slot, localFrameId, last, index);
              });
            };

            for (var i = 0; i < _this.currSlots.length; i++) {
              _loop(i);
            }
          } else if (typeof _this.currSlots === 'function') {
            var index = 0;

            _this.currSlots( // next
            function (props, last) {
              if (last === void 0) {
                last = false;
              }

              return localFrameId === _this.frameId && _this.next(props, localFrameId, last, index++);
            }, // cancel
            function () {
              return requestFrame$1(function () {
                return _this.instance.isActive && _this.instance.stop(true);
              });
            });
          } else _this.next(_this.currSlots, localFrameId);

          _this.prevSlots = _this.currSlots;
          return {
            v: new Promise(function (resolve) {
              return _this.keyFrameEndResolver = resolve;
            })
          };
        }();

        if (typeof _ret === "object") return _ret.v;
      }
    };

    this.stop = function (finished) {
      if (finished === void 0) {
        finished = false;
      }

      ++_this.frameId;
      if (_this.instance.isActive) _this.instance.stop(finished);
    };

    this.onEnd = function (onFrameRest, localFrameId, last, resolve) {
      return function (args) {
        if (localFrameId === _this.frameId) {
          if (resolve) resolve();
          if (onFrameRest) onFrameRest(_this.merged);
          if (last && _this.globalOnEnd) _this.globalOnEnd(args);
          if (last && _this.keyFrameEndResolver) _this.keyFrameEndResolver();

          if (args.finished && last && _this.globalOnRest) {
            _this.globalOnRest(_this.merged);
          }
        }
      };
    };

    this.updateWithForceUpdate = function (forceUpdate) {
      // needed to forceUpdate when the controller is reset
      // for native controllers
      _this.parentForceUpdate = forceUpdate;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      _this.update.apply(_this, args);
    };

    this.update = function (args) {
      var isFnOrArray = typeof args === 'function' || Array.isArray(args);

      if (isFnOrArray) {
        _this.currSlots = args;
        !_this.ref && _this.start();
      } else {
        var slots = args.slots,
            rest = _objectWithoutPropertiesLoose$1(args, ["slots"]);

        _this.currSlots = slots;
        !_this.ref && _this.start.apply(_this, rest);
      }
    };

    this.getValues = function () {
      return _this.instance.getValues();
    };

    this.destroy = function () {
      return _this.instance.destroy();
    };

    var _config = _props.config,
        onRest = _props.onRest,
        initialProps = _objectWithoutPropertiesLoose$1(_props, ["config", "onRest"]);

    this.globalProps = function (_ref) {
      var native = _ref.native,
          onStart = _ref.onStart,
          onFrame = _ref.onFrame,
          children = _ref.children,
          reset = _ref.reset,
          delay = _ref.delay,
          destroyed = _ref.destroyed;
      return {
        native: native,
        onStart: onStart,
        reset: reset,
        onFrame: onFrame,
        children: children,
        delay: delay,
        destroyed: destroyed
      };
    }(_props);

    this.globalConfig = _props.config;
    this.globalOnRest = _props.onRest;
    this.ref = _props.ref;
    this.prevSlots = {};
    this.currSlots = null;
    this.instance = new Controller$1(_extends({}, initialProps, {
      native: true
    }));
  }

  _createClass$2(KeyframeController, [{
    key: "isActive",
    get: function get() {
      return this.instance.isActive;
    }
  }, {
    key: "config",
    set: function set(config) {
      this.globalConfig = config;
    }
  }, {
    key: "globals",
    set: function set(props) {
      this.globalProps = _extends({}, this.globalProps, props);
    }
  }, {
    key: "merged",
    get: function get() {
      return this.instance.merged;
    }
  }, {
    key: "props",
    get: function get() {
      return this.instance.props;
    }
  }]);

  return KeyframeController;
}();

var useSpringImpl = function useSpringImpl(type) {
  if (type === void 0) {
    type = 'default';
  }

  return function (args) {
    var _useState = useState(),
        f = _useState[1];

    var forceUpdate = function forceUpdate() {
      return f(function (v) {
        return !v;
      });
    }; // Extract animation props and hook-specific props, can be a function or an obj


    var isFn = typeof args === 'function';

    var _callProp = callProp$1(args),
        onRest = _callProp.onRest,
        onKeyframesHalt = _callProp.onKeyframesHalt,
        props = _objectWithoutPropertiesLoose$1(_callProp, ["onRest", "onKeyframesHalt"]); // The controller maintains the animation values, starts and tops animations


    var _useState2 = useState(function () {
      return type === 'keyframe' ? new KeyframeController(props) : new Controller$1(props);
    }),
        ctrl = _useState2[0]; // Destroy controller on unmount


    useEffect(function () {
      return function () {
        return ctrl.destroy();
      };
    }, []);

    var onHalt = function onHalt(_ref) {
      var finished = _ref.finished;
      return finished && onRest && onRest(ctrl.merged);
    }; // The hooks explcit API gets defined here ...


    useImperativeHandle(props.ref, function () {
      return {
        start: function start() {
          return ctrl.start(onHalt);
        },

        get isActive() {
          return ctrl.isActive;
        },

        stop: function stop(finished) {
          if (finished === void 0) {
            finished = false;
          }

          if (ctrl.isActive) ctrl.stop(finished);
        }
      };
    }); // Defines the hooks setter, which updates the controller

    var updateCtrl = useCallback(function (updateProps) {
      type === 'keyframe' ? ctrl.updateWithForceUpdate(forceUpdate, updateProps) : ctrl.update(updateProps);
      if (!ctrl.props.ref) ctrl.start(onHalt);
      if (ctrl.props.reset && type === 'default') requestFrame$1(forceUpdate);
    }, [onRest, ctrl.props.ref]); // Update next frame is props aren't functional

    useEffect(function () {
      return void (!isFn && updateCtrl(props));
    }); // Return animated props, or, anim-props + the update-setter above

    var propValues = ctrl.getValues();
    return isFn ? [propValues, updateCtrl, function (finished) {
      if (finished === void 0) {
        finished = false;
      }

      return ctrl.stop(finished);
    }] : propValues;
  };
};
var useSpring = useSpringImpl();

var domElements$1 = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
var extendedAnimated$1 = domElements$1.reduce(function (acc, element) {
  acc[element] = createAnimatedComponent$1(element);
  return acc;
}, createAnimatedComponent$1);

function ownKeys$h(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$h(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$h(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$h(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var RADIUS$1 = 2;
var BAR_HEIGHT = 6;
var INDETERMINATE_WIDTH = 1 / 4;
var INDETERMINATE_DURATION = 1600;
var indeterminateAnim = keyframes(["0%{transform:translate3d(calc(-100% - 1px),0,0);}70%,100%{transform:translate3d(calc(", "% + 1px),0,0);}"], 100 / INDETERMINATE_WIDTH);

var _StyledDiv$w = _styled.div.withConfig({
  displayName: "ProgressBar___StyledDiv",
  componentId: "sc-1gly9sn-0"
})(["width:100%;height:", "px;background:", ";border-radius:", "px;overflow:hidden;"], BAR_HEIGHT, function (p) {
  return p._css;
}, RADIUS$1);

var ProgressBar = React.memo(function (_ref) {
  var animate = _ref.animate,
      color = _ref.color,
      progress = _ref.progress,
      value = _ref.value;

  // Support `progress` for a while but warn if being used.
  if (value === -1 && typeof progress === 'number') {
    value = progress;
    warnOnce('ProgressBar:progress', 'The `progress` prop of ProgressBar is deprecated: please use `value` instead.');
  } // The indeterminate state can be triggered either by not setting the value
  // (to mimic the <progress> element in HTML), or by setting the -1 value (for
  // convenience in React).


  var indeterminate = value === -1;
  var theme = useTheme();
  var currentColor = color === undefined ? theme.accent : color;
  var transition = useSpring({
    config: _objectSpread$h({}, springs.smooth, {
      precision: 0.001
    }),
    from: {
      scale: 0,
      x: 0
    },
    to: {
      scale: value,
      x: 0
    },
    immediate: !animate
  });
  return React.createElement(_StyledDiv$w, {
    _css: theme.surfaceUnder
  }, React.createElement(Bar$1, {
    style: {
      width: "".concat((indeterminate ? INDETERMINATE_WIDTH : 1) * 100, "%"),
      background: currentColor,
      borderRadius: "".concat(indeterminate ? RADIUS$1 : 0, "px"),
      animationName: "".concat(indeterminate ? indeterminateAnim.name : 'none'),
      transform: interpolate$1$1([transition.x, transition.scale], function (x, s) {
        return "translate3d(".concat(x * 100, "%, 0, 0) scale3d(").concat(s, ", 1, 1)");
      })
    }
  }));
});
var Bar$1 = _styled(extendedAnimated$1.div).withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "sc-1gly9sn-1"
})(["width:100%;height:", "px;transform-origin:0 0;animation:", " ", "ms ease-in-out infinite;animation-name:none;"], BAR_HEIGHT, indeterminateAnim, INDETERMINATE_DURATION);
ProgressBar.defaultProps = {
  animate: true,
  value: -1
};
ProgressBar.propTypes = {
  animate: ExtendedPropTypes.bool,
  color: ExtendedPropTypes.string,
  progress: ExtendedPropTypes._0to1,
  value: ExtendedPropTypes.oneOfType([ExtendedPropTypes._0to1, ExtendedPropTypes.oneOf([-1])])
};

var _React$createContext = React.createContext({}),
    Provider$2 = _React$createContext.Provider,
    Consumer$1 = _React$createContext.Consumer;

var RadioGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(RadioGroup, _React$PureComponent);

  function RadioGroup() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, RadioGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(RadioGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    defineProperty(assertThisInitialized(_this), "handleChange", function (id) {
      _this.props.onChange(id);
    });

    defineProperty(assertThisInitialized(_this), "addRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.add(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "removeRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty(assertThisInitialized(_this), "selectPrev", function () {
      var id = _this.getSiblingId(-1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    defineProperty(assertThisInitialized(_this), "selectNext", function () {
      var id = _this.getSiblingId(1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    return _this;
  }

  createClass(RadioGroup, [{
    key: "getSiblingId",
    value: function getSiblingId(position) {
      var selected = this.props.selected;

      var radios = toConsumableArray(this.state.radios);

      var selectedIndex = selected === undefined ? 0 : radios.indexOf(selected);
      var newSelectedIndex = selectedIndex + position; // no radios

      if (radios.length === 0) {
        return null;
      } // up on the first item: go to the last one


      if (newSelectedIndex === -1) {
        return radios[radios.length - 1];
      } // down on the last item: go to the first one


      if (newSelectedIndex === radios.length) {
        return radios[0];
      } // select the item item if possible


      if (selectedIndex > -1 && radios[newSelectedIndex]) {
        return radios[newSelectedIndex];
      } // default: select the first item if available


      return radios[0] === undefined ? null : radios[0];
    }
  }, {
    key: "render",
    value: function render() {
      var radios = this.state.radios;
      var _this$props = this.props,
          children = _this$props.children,
          selected = _this$props.selected;
      var focusableId = radios.has(selected) ? selected : toConsumableArray(radios)[0];
      return React.createElement(Provider$2, {
        value: {
          selected: selected,
          focusableId: focusableId,
          onChange: this.handleChange,
          addRadio: this.addRadio,
          removeRadio: this.removeRadio,
          selectPrev: this.selectPrev,
          selectNext: this.selectNext
        }
      }, React.createElement("div", _extends_1({
        role: "radiogroup"
      }, stylingProps(this)), children));
    }
  }]);

  return RadioGroup;
}(React.PureComponent);

defineProperty(RadioGroup, "propTypes", {
  children: propTypes.node,
  selected: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func
});

defineProperty(RadioGroup, "defaultProps", {
  onChange: noop
});

var KEYS_PREV = ['ArrowUp', 'ArrowLeft', // IE / Edge support
'Up', 'Left'];
var KEYS_NEXT = ['ArrowDown', 'ArrowRight', // IE / Edge support
'Down', 'Right'];

var RadioButton =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(RadioButton, _React$PureComponent);

  function RadioButton() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(RadioButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "_element", React.createRef());

    defineProperty(assertThisInitialized(_this), "handleKeyDown", function (event) {
      var _this$props = _this.props,
          selectPrev = _this$props.selectPrev,
          selectNext = _this$props.selectNext;

      if (KEYS_PREV.includes(event.key)) {
        selectPrev();
        event.preventDefault();
      }

      if (KEYS_NEXT.includes(event.key)) {
        selectNext();
        event.preventDefault();
      }
    });

    defineProperty(assertThisInitialized(_this), "handleChange", function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          id = _this$props2.id;

      if (onChange) {
        onChange(id);
      }
    });

    return _this;
  }

  createClass(RadioButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          addRadio = _this$props3.addRadio,
          id = _this$props3.id;

      if (addRadio && id !== null) {
        addRadio(id);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props4 = this.props,
          removeRadio = _this$props4.removeRadio,
          id = _this$props4.id;

      if (removeRadio && id !== null) {
        removeRadio(id);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var checked = this.props.checked;

      if (checked && !prevProps.checked) {
        this._element.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          checked = _this$props5.checked,
          disabled = _this$props5.disabled,
          id = _this$props5.id,
          onChange = _this$props5.onChange,
          tabIndex = _this$props5.tabIndex,
          props = objectWithoutProperties(_this$props5, ["checked", "disabled", "id", "onChange", "tabIndex"]);

      return React.createElement(CheckBoxWithTheme, _extends_1({
        ref: this._element,
        checked: checked,
        disabled: disabled,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown,
        tabIndex: tabIndex,
        variant: "radio"
      }, props));
    }
  }]);

  return RadioButton;
}(React.PureComponent);

defineProperty(RadioButton, "propTypes", {
  addRadio: propTypes.func,
  checked: propTypes.bool,
  disabled: propTypes.bool,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  removeRadio: propTypes.func,
  selectNext: propTypes.func,
  selectPrev: propTypes.func,
  tabIndex: propTypes.string
});

defineProperty(RadioButton, "defaultProps", {
  addRadio: noop,
  checked: false,
  disabled: false,
  id: null,
  onChange: undefined,
  // <Button /> need to detect if onChange has been set
  removeRadio: noop,
  selectNext: noop,
  selectPrev: noop
});

var Radio =
/*#__PURE__*/
function (_React$PureComponent2) {
  inherits(Radio, _React$PureComponent2);

  function Radio() {
    classCallCheck(this, Radio);

    return possibleConstructorReturn(this, getPrototypeOf(Radio).apply(this, arguments));
  }

  createClass(Radio, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement(Consumer$1, null, function (_ref) {
        var onChange = _ref.onChange,
            selected = _ref.selected,
            focusableId = _ref.focusableId,
            addRadio = _ref.addRadio,
            removeRadio = _ref.removeRadio,
            selectNext = _ref.selectNext,
            selectPrev = _ref.selectPrev;
        return React.createElement(RadioButton, _extends_1({}, props, {
          onChange: props.onChange || onChange,
          checked: props.checked || props.id === selected && selected !== null,
          tabIndex: props.tabIndex || (focusableId === undefined || props.id === focusableId ? '0' : '-1'),
          addRadio: addRadio,
          removeRadio: removeRadio,
          selectPrev: selectPrev,
          selectNext: selectNext
        }));
      });
    }
  }]);

  return Radio;
}(React.PureComponent);

defineProperty(Radio, "propTypes", RadioButton.propTypes);

defineProperty(Radio, "defaultProps", RadioButton.defaultProps);

var _StyledLabel = _styled.label.withConfig({
  displayName: "RadioListItem___StyledLabel",
  componentId: "sc-1utxw89-0"
})(["display:flex;", ";& + &{margin-top:", "px;}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledRadio = _styled(Radio).withConfig({
  displayName: "RadioListItem___StyledRadio",
  componentId: "sc-1utxw89-1"
})(["flex-shrink:0;margin-top:", "px;"], function (p) {
  return p._css3;
});

var _StyledDiv$x = _styled.div.withConfig({
  displayName: "RadioListItem___StyledDiv",
  componentId: "sc-1utxw89-2"
})(["flex-grow:1;margin-left:12px;padding:12px 12px;border-radius:3px;transition:border 100ms ease-in-out;cursor:pointer;border:1px ", " solid;&:hover{border-color:", ";}"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv2$i = _styled.div.withConfig({
  displayName: "RadioListItem___StyledDiv2",
  componentId: "sc-1utxw89-3"
})(["margin-top:", "px;"], function (p) {
  return p._css6;
});

var RadioListItem = React.memo(function RadioListItem(_ref) {
  var description = _ref.description,
      index = _ref.index,
      title = _ref.title;
  var theme = useTheme();
  return React.createElement(_StyledLabel, {
    _css: unselectable(),
    _css2: 1 * GU
  }, React.createElement(_StyledRadio, {
    id: index,
    _css3: 2 * GU
  }), React.createElement(_StyledDiv$x, {
    _css4: theme.border,
    _css5: theme.accent.alpha(0.35)
  }, React.createElement("strong", null, title), React.createElement(_StyledDiv2$i, {
    _css6: 0.5 * GU
  }, description)));
});
RadioListItem.propTypes = {
  description: propTypes.node.isRequired,
  index: propTypes.number.isRequired,
  title: propTypes.node.isRequired
};

var _StyledH$6 = _styled.h2.withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-1hkg1b7-0"
})(["margin-bottom:", "px;font-weight:600;"], function (p) {
  return p._css;
});

var _StyledDiv$y = _styled.div.withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-1hkg1b7-1"
})(["margin-bottom:", "px;"], function (p) {
  return p._css2;
});

var _StyledRadioGroup = _styled(RadioGroup).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-1hkg1b7-2"
})(["display:flex;flex-direction:column;"]);

function RadioList(_ref) {
  var description = _ref.description,
      items = _ref.items,
      onChange = _ref.onChange,
      selected = _ref.selected,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ["description", "items", "onChange", "selected", "title"]);

  return React.createElement("div", props, title && React.createElement(_StyledH$6, {
    _css: 0.5 * GU
  }, title), description && React.createElement(_StyledDiv$y, {
    _css2: 2.5 * GU
  }, description), React.createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map(function (_ref2, i) {
    var description = _ref2.description,
        title = _ref2.title;
    return React.createElement(RadioListItem, {
      key: i,
      description: description,
      index: i,
      title: title
    });
  })));
}

RadioList.propTypes = {
  description: propTypes.node,
  items: propTypes.arrayOf(propTypes.shape({
    description: propTypes.node.isRequired,
    title: propTypes.node.isRequired
  })),
  onChange: propTypes.func,
  selected: function selected(_ref3, _, componentName) {
    var items = _ref3.items,
        _selected = _ref3.selected;

    if (!Number.isInteger(_selected) || _selected >= items.length) {
      throw new Error("Invalid prop `selected` supplied to `".concat(componentName, "`. ") + '`selected` must be an integer less than the length of `items`. ' + "Given ".concat(_selected, " instead."));
    }
  },
  title: propTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: noop,
  selected: 0
};

function ownKeys$i(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$i(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$i(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$i(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var CONTENT_PADDING = 3 * GU; // The closing position of the panel, on the right side of the viewport.
// It takes into consideration the shadow of the panel.

var CLOSING_POSITION = 5 * GU;
var SidePanelContext = React.createContext(null);

var _StyledDiv$z = _styled.div.withConfig({
  displayName: "SidePanel___StyledDiv",
  componentId: "sc-1kjx6mk-0"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:", ";overflow:hidden;"], function (p) {
  return p._css;
});

var _StyledAnimatedDiv$6 = _styled(extendedAnimated.div).withConfig({
  displayName: "SidePanel___StyledAnimatedDiv",
  componentId: "sc-1kjx6mk-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background:", ";"], function (p) {
  return p._css2;
});

var _StyledHeader$1 = _styled.header.withConfig({
  displayName: "SidePanel___StyledHeader",
  componentId: "sc-1kjx6mk-2"
})(["display:flex;flex-direction:column;justify-content:center;flex-shrink:0;position:relative;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";", ";"], function (p) {
  return p._css3;
}, CONTENT_PADDING, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledH$7 = _styled.h1.withConfig({
  displayName: "SidePanel___StyledH",
  componentId: "sc-1kjx6mk-3"
})(["color:", ";", ";"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledButtonIcon$5 = _styled(ButtonIcon).withConfig({
  displayName: "SidePanel___StyledButtonIcon",
  componentId: "sc-1kjx6mk-4"
})(["position:absolute;", ""], function (p) {
  return p._css8;
});

var _StyledDiv2$j = _styled.div.withConfig({
  displayName: "SidePanel___StyledDiv2",
  componentId: "sc-1kjx6mk-5"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);

var _StyledDiv3$a = _styled.div.withConfig({
  displayName: "SidePanel___StyledDiv3",
  componentId: "sc-1kjx6mk-6"
})(["min-height:0;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;width:100%;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;"], CONTENT_PADDING, CONTENT_PADDING, CONTENT_PADDING);

function SidePanel(_ref2) {
  var blocking = _ref2.blocking,
      children = _ref2.children,
      opened = _ref2.opened,
      onClose = _ref2.onClose,
      onTransitionEnd = _ref2.onTransitionEnd,
      title = _ref2.title;
  var theme = useTheme();

  var _useViewport = useViewport(),
      below = _useViewport.below;

  var compact = below('medium');
  var close = useCallback(function () {
    if (!blocking) {
      onClose();
    }
  }, [blocking, onClose]);
  var handleEscape = useCallback(function (event) {
    if (event.keyCode === KEY_ESC && opened) {
      close();
    }
  }, [opened, close]);

  var _useState = useState(opened ? 'opened' : 'closed'),
      _useState2 = slicedToArray(_useState, 2),
      status = _useState2[0],
      setStatus = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = slicedToArray(_useState3, 2),
      readyToFocus = _useState4[0],
      setReadyToFocus = _useState4[1];

  var handleTransitionRest = useCallback(function () {
    onTransitionEnd(opened);
    setStatus(opened ? 'opened' : 'closed');
  }, [opened, onTransitionEnd]);
  var handleTransitionStart = useCallback(function () {
    setStatus(opened ? 'opening' : 'closing');
  }, [opened]);
  var handleTransitionFrame = useCallback(function (item, _, _ref3) {
    var progress = _ref3.progress;

    if (progress > 0.5 && !readyToFocus) {
      setReadyToFocus(true);
    } else if (progress < 0.5 && readyToFocus) {
      setReadyToFocus(false);
    }
  }, [readyToFocus]);
  var handleTransitionDestroyed = useCallback(function () {
    setReadyToFocus(false);
  }, []);
  useEffect(function () {
    document.addEventListener('keydown', handleEscape);
    return function () {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
  return React.createElement(RootPortal, null, React.createElement(Inside, {
    name: "SidePanel"
  }, React.createElement(Transition, {
    items: opened,
    config: _objectSpread$i({}, springs.lazy, {
      precision: 0.001
    }),
    from: {
      progress: 0
    },
    enter: {
      progress: Number(opened)
    },
    leave: {
      progress: 0
    },
    onRest: handleTransitionRest,
    onStart: handleTransitionStart,
    onFrame: handleTransitionFrame,
    onDestroyed: handleTransitionDestroyed,
    unique: true,
    native: true
  }, function (opened) {
    return opened && function (_ref4) {
      var progress = _ref4.progress;
      return React.createElement(_StyledDiv$z, {
        _css: status !== 'closing' ? 'auto' : 'none'
      }, React.createElement(_StyledAnimatedDiv$6, {
        onClick: close,
        style: {
          opacity: progress,
          pointerEvents: status !== 'closing' ? 'auto' : 'none'
        },
        _css2: theme.overlay.alpha(0.9)
      }), React.createElement(Panel, {
        compact: compact,
        style: {
          transform: progress.interpolate(function (v) {
            return "\n                          translate3d(\n                            calc(\n                              ".concat(100 * (1 - v), "% +\n                              ").concat(CLOSING_POSITION * (1 - v), "px\n                            ), 0, 0\n                          )\n                        ");
          })
        }
      }, React.createElement(_StyledHeader$1, {
        _css3: 8 * GU,
        _css4: theme.border,
        _css5: unselectable()
      }, React.createElement(_StyledH$7, {
        _css6: theme.surfaceContent,
        _css7: textStyle('body1')
      }, title), !blocking && React.createElement(_StyledButtonIcon$5, {
        label: "Close",
        onClick: close,
        _css8: !compact ? "\n                              top: ".concat(2 * GU, "px;\n                              right: ").concat(2 * GU, "px;\n                            ") : "\n                              top: 0;\n                              right: 0;\n                              height: ".concat(8 * GU, "px;\n                              width: ").concat(8 * GU, "px;\n                            ")
      }, React.createElement(IconCross, {
        color: theme.surfaceIcon
      }))), React.createElement(_StyledDiv2$j, null, React.createElement(_StyledDiv3$a, null, React.createElement(SidePanelContext.Provider, {
        value: {
          status: status,
          readyToFocus: readyToFocus
        }
      }, children)))));
    };
  })));
}

SidePanel.propTypes = {
  blocking: propTypes.bool,
  children: propTypes.node.isRequired,
  opened: propTypes.bool,
  onClose: propTypes.func,
  onTransitionEnd: propTypes.func,
  title: propTypes.node.isRequired
};
SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: function onClose() {},
  onTransitionEnd: function onTransitionEnd() {}
};

var _StyledAnimatedAside = _styled(extendedAnimated.aside).withConfig({
  displayName: "SidePanel___StyledAnimatedAside",
  componentId: "sc-1kjx6mk-7"
})(["position:absolute;top:0;right:0;display:flex;flex-direction:column;width:100%;height:100%;background:", ";box-shadow:-2px 0px 4px rgba(0,0,0,0.1);", ""], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var Panel = React.memo(function Panel(_ref5) {
  var compact = _ref5.compact,
      props = objectWithoutProperties(_ref5, ["compact"]);

  var theme = useTheme();
  return React.createElement(_StyledAnimatedAside, _extends_1({}, props, {
    _css9: theme.surface,
    _css10: !compact ? 'max-width: 450px;' : ''
  }));
});
Panel.propTypes = {
  compact: propTypes.bool
};

function useSidePanel() {
  var value = useContext(SidePanelContext);

  if (value === null) {
    throw new Error('useSidePanel() was used outside of the SidePanel render tree, ' + 'which has to be declared at an upper level!');
  }

  return value;
}

function useSidePanelFocusOnReady(ref) {
  var _useSidePanel = useSidePanel(),
      readyToFocus = _useSidePanel.readyToFocus;

  var fallbackRef = useRef();

  var _ref = ref || fallbackRef;

  useEffect(function () {
    if (readyToFocus && _ref.current) {
      if (_ref.current.focus) {
        _ref.current.focus();
      } else {
        warn('useSidePanelFocusOnReady(): the focus() method wasn’t available on ' + 'the passed ref.');
      }
    }
  }, [readyToFocus, _ref]);
  return _ref;
} // Used for spacing in SidePanelSplit and SidePanelSeparator


SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING;

var _StyledDiv$A = _styled.div.withConfig({
  displayName: "SidePanelSeparator___StyledDiv",
  componentId: "sc-75c7uf-0"
})(["width:calc(100% + ", "px);margin:0 -", "px;height:1px;background:", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function SidePanelSeparator(props) {
  var theme = useTheme();
  return React.createElement(_StyledDiv$A, _extends_1({}, props, {
    _css: SidePanel.HORIZONTAL_PADDING * 2,
    _css2: SidePanel.HORIZONTAL_PADDING,
    _css3: theme.border
  }));
}

var _StyledDiv$B = _styled.div.withConfig({
  displayName: "SidePanelSplit___StyledDiv",
  componentId: "d0csv3-0"
})(["display:flex;width:calc(100% + ", "px);margin:0 -", "px;padding:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2$k = _styled.div.withConfig({
  displayName: "SidePanelSplit___StyledDiv2",
  componentId: "d0csv3-1"
})(["display:inline-block;border-right:1px solid ", ";margin:-", "px ", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function SidePanelSplit(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ["children"]);

  var theme = useTheme();
  return React.createElement(_StyledDiv$B, _extends_1({}, props, {
    _css: SidePanel.HORIZONTAL_PADDING * 2,
    _css2: SidePanel.HORIZONTAL_PADDING,
    _css3: SidePanel.HORIZONTAL_PADDING
  }), React.createElement(Part, null, children[0]), React.createElement(_StyledDiv2$k, {
    _css4: theme.border,
    _css5: SidePanel.HORIZONTAL_PADDING,
    _css6: SidePanel.HORIZONTAL_PADDING
  }), React.createElement(Part, null, children[1]));
}

SidePanelSplit.propTypes = {
  children: propTypes.node
};
var Part = _styled.div.withConfig({
  displayName: "SidePanelSplit__Part",
  componentId: "d0csv3-2"
})(["width:50%;"]);

var BAR_HEIGHT$1 = 6;
var HANDLE_SIZE = 24;
var HANDLE_SHADOW_MARGIN = 15;
var PADDING = 5;
var MIN_WIDTH$1 = HANDLE_SIZE * 10;
var HEIGHT$2 = Math.max(HANDLE_SIZE, BAR_HEIGHT$1) + PADDING * 2;

var _StyledDiv$C = _styled.div.withConfig({
  displayName: "Slider___StyledDiv",
  componentId: "sc-94djfe-0"
})(["min-width:", "px;padding:0 ", "px;", ";"], MIN_WIDTH$1, function (p) {
  return p._css;
}, unselectable);

var _StyledDiv2$l = _styled.div.withConfig({
  displayName: "Slider___StyledDiv2",
  componentId: "sc-94djfe-1"
})(["position:relative;height:", "px;cursor:pointer;"], HEIGHT$2);

var _StyledAnimatedDiv$7 = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider___StyledAnimatedDiv",
  componentId: "sc-94djfe-2"
})(["position:absolute;top:50%;left:0;width:", "px;height:", "px;border:1px solid ", ";border-radius:50%;"], HANDLE_SIZE, HANDLE_SIZE, function (p) {
  return p._css4;
});

var Slider =
/*#__PURE__*/
function (_React$Component) {
  inherits(Slider, _React$Component);

  function Slider() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Slider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Slider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      pressed: false
    });

    defineProperty(assertThisInitialized(_this), "handleRef", function (element) {
      _this._mainElement = element;
      _this._document = element && element.ownerDocument;
    });

    defineProperty(assertThisInitialized(_this), "getRect", function () {
      var now = Date.now(); // Cache the rect if the last poll was less than a second ago

      if (_this._lastRect && now - _this._lastRectTime < 1000) {
        return _this._lastRect;
      }

      _this._lastRectTime = now;
      _this._lastRect = _this._mainElement ? _this._mainElement.getBoundingClientRect() : new window.DOMRect();
      return _this._lastRect;
    });

    defineProperty(assertThisInitialized(_this), "dragStart", function (event) {
      _this.dragStop();

      var clientX = _this.clientXFromEvent(event);

      _this.setState({
        pressed: true
      }, function () {
        _this.updateValueFromClientX(clientX);
      });

      _this._document.addEventListener('mouseup', _this.dragStop);

      _this._document.addEventListener('touchend', _this.dragStop);

      _this._document.addEventListener('mousemove', _this.dragMove);

      _this._document.addEventListener('touchmove', _this.dragMove);
    });

    defineProperty(assertThisInitialized(_this), "dragStop", function () {
      _this.setState({
        pressed: false
      });

      _this._document.removeEventListener('mouseup', _this.dragStop);

      _this._document.removeEventListener('touchend', _this.dragStop);

      _this._document.removeEventListener('mousemove', _this.dragMove);

      _this._document.removeEventListener('touchmove', _this.dragMove);
    });

    defineProperty(assertThisInitialized(_this), "dragMove", function (event) {
      if (!_this.state.pressed) {
        return;
      }

      _this.updateValueFromClientX(_this.clientXFromEvent(event));
    });

    return _this;
  }

  createClass(Slider, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dragStop();
    }
  }, {
    key: "clientXFromEvent",
    value: function clientXFromEvent(event) {
      return (event.touches ? event.touches.item(0) : event).clientX;
    }
  }, {
    key: "updateValueFromClientX",
    value: function updateValueFromClientX(clientX) {
      var rect = this.getRect();
      var x = Math.min(rect.width, Math.max(0, clientX - rect.x));
      this.props.onUpdate(x / rect.width);
    }
  }, {
    key: "getHandleStyles",
    value: function getHandleStyles(pressProgress) {
      return {
        transform: pressProgress.interpolate(function (t) {
          return "translate3d(0, calc(".concat(t * 0.5, "px - 50%), 0)");
        }),
        boxShadow: pressProgress.interpolate(function (t) {
          return "0 1px 3px rgba(0, 0, 0, ".concat(0.1 - 0.02 * t, ")");
        }),
        background: pressProgress.interpolate(function (t) {
          return "hsl(0, 0%, ".concat(100 * (1 - t * 0.01), "%)");
        })
      };
    }
  }, {
    key: "getHandlePositionStyles",
    value: function getHandlePositionStyles(value) {
      return {
        transform: value.interpolate(function (t) {
          return "translate3d(calc(".concat(t * 100, "% + ").concat(HANDLE_SHADOW_MARGIN, "px), 0, 0)");
        })
      };
    }
  }, {
    key: "getActiveBarStyles",
    value: function getActiveBarStyles(value, pressProgress) {
      return {
        transform: value.interpolate(function (t) {
          return "scaleX(".concat(t, ") translateZ(0)");
        })
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pressed = this.state.pressed;

      var _this$props = this.props,
          onUpdate = _this$props.onUpdate,
          value = _this$props.value,
          theme = _this$props.theme,
          props = objectWithoutProperties(_this$props, ["onUpdate", "value", "theme"]);

      return React.createElement(Spring, {
        native: true,
        config: springs.swift,
        to: {
          pressProgress: Number(pressed),
          value: Math.max(0, Math.min(1, value))
        }
      }, function (_ref) {
        var value = _ref.value,
            pressProgress = _ref.pressProgress;
        return React.createElement(_StyledDiv$C, _extends_1({}, props, {
          _css: HANDLE_SIZE / 2 + PADDING
        }), React.createElement(_StyledDiv2$l, {
          ref: _this2.handleRef,
          onMouseDown: _this2.dragStart,
          onTouchStart: _this2.dragStart
        }, React.createElement(Bars, null, React.createElement(_StyledBar, {
          _css2: theme.surfaceUnder
        }), React.createElement(_StyledBar2, {
          style: _this2.getActiveBarStyles(value, pressProgress),
          _css3: theme.selected
        })), React.createElement(HandleClip, null, React.createElement(HandlePosition, {
          style: _this2.getHandlePositionStyles(value, pressProgress)
        }, React.createElement(_StyledAnimatedDiv$7, {
          style: _this2.getHandleStyles(pressProgress),
          _css4: theme.border
        })))));
      });
    }
  }]);

  return Slider;
}(React.Component);

defineProperty(Slider, "propTypes", {
  value: propTypes.number,
  onUpdate: propTypes.func,
  theme: propTypes.object
});

defineProperty(Slider, "defaultProps", {
  value: 0,
  onUpdate: function onUpdate() {}
});

var Bars = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bars",
  componentId: "sc-94djfe-3"
})(["position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);overflow:hidden;border-radius:2px;height:", "px;"], BAR_HEIGHT$1);
var Bar$2 = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bar",
  componentId: "sc-94djfe-4"
})(["position:absolute;top:0;left:0;right:0;bottom:0;"]);

var _StyledBar2 = _styled(Bar$2).withConfig({
  displayName: "Slider___StyledBar2",
  componentId: "sc-94djfe-5"
})(["transform-origin:0 0;background:", ";"], function (p) {
  return p._css3;
});

var _StyledBar = _styled(Bar$2).withConfig({
  displayName: "Slider___StyledBar",
  componentId: "sc-94djfe-6"
})(["background:", ";"], function (p) {
  return p._css2;
});

var HandleClip = _styled.div.withConfig({
  displayName: "Slider__HandleClip",
  componentId: "sc-94djfe-7"
})(["pointer-events:none;overflow:hidden;width:calc(100% + ", "px);height:calc(100% + ", "px);transform-origin:50% 50%;transform:translate( -", "px,-", "px );"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2, HANDLE_SHADOW_MARGIN * 2, HANDLE_SIZE / 2 + HANDLE_SHADOW_MARGIN, HANDLE_SHADOW_MARGIN);
var HandlePosition = _styled(extendedAnimated.div).withConfig({
  displayName: "Slider__HandlePosition",
  componentId: "sc-94djfe-8"
})(["width:calc(100% - ", "px);height:100%;transform-origin:50% 50%;"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2);
var Slider$1 = (function (props) {
  var theme = useTheme();
  return React.createElement(Slider, _extends_1({
    theme: theme
  }, props));
});

var _StyledDiv$D = _styled.div.withConfig({
  displayName: "Split___StyledDiv",
  componentId: "sc-19nz0vo-0"
})(["flex-grow:1;margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2$m = _styled.div.withConfig({
  displayName: "Split___StyledDiv2",
  componentId: "sc-19nz0vo-1"
})(["flex-shrink:0;flex-grow:0;width:", ";margin-left:", "px;padding-top:", "px;"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledDiv3$b = _styled.div.withConfig({
  displayName: "Split___StyledDiv3",
  componentId: "sc-19nz0vo-2"
})(["display:", ";padding-bottom:", "px;width:100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

function Split(_ref) {
  var primary = _ref.primary,
      secondary = _ref.secondary,
      invert = _ref.invert;

  var _useLayout = useLayout(),
      layout = _useLayout.name;

  var oneColumn = layout === 'small' || layout === 'medium';
  var inverted = !oneColumn && invert === 'horizontal' || oneColumn && invert === 'vertical';
  var primaryContent = React.createElement(Inside, {
    name: "Split:primary"
  }, React.createElement(_StyledDiv$D, {
    _css: !oneColumn && inverted ? 2 * GU : 0,
    _css2: oneColumn && inverted ? 2 * GU : 0
  }, primary));
  var secondaryContent = React.createElement(Inside, {
    name: "Split:secondary"
  }, React.createElement(_StyledDiv2$m, {
    _css3: oneColumn ? '100%' : "".concat(33 * GU, "px"),
    _css4: !oneColumn && !inverted ? 2 * GU : 0,
    _css5: oneColumn && !inverted ? 2 * GU : 0
  }, secondary));
  return React.createElement(Inside, {
    name: "Split"
  }, React.createElement(_StyledDiv3$b, {
    _css6: oneColumn ? 'block' : 'flex',
    _css7: 3 * GU
  }, inverted ? secondaryContent : primaryContent, inverted ? primaryContent : secondaryContent));
}

Split.propTypes = {
  invert: propTypes.oneOf(['none', 'horizontal', 'vertical']),
  primary: propTypes.node,
  secondary: propTypes.node
};
Split.defaultProps = {
  invert: 'none'
};

var BORDER = 1;
var WRAPPER_WIDTH = 5 * GU;
var WRAPPER_HEIGHT = 2.25 * GU;

var _StyledSpan$b = _styled.span.withConfig({
  displayName: "Switch___StyledSpan",
  componentId: "sc-1f0jw9z-0"
})(["position:relative;display:inline-block;width:", "px;height:", "px;border:", "px solid ", ";border-radius:", "px;background-color:", ";cursor:", ";", " ", ";"], WRAPPER_WIDTH, WRAPPER_HEIGHT, BORDER, function (p) {
  return p._css;
}, WRAPPER_HEIGHT, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledInput$1 = _styled.input.withConfig({
  displayName: "Switch___StyledInput",
  componentId: "sc-1f0jw9z-1"
})(["opacity:0;pointer-events:none;"]);

var _StyledAnimatedSpan$1 = _styled(extendedAnimated.span).withConfig({
  displayName: "Switch___StyledAnimatedSpan",
  componentId: "sc-1f0jw9z-2"
})(["position:absolute;left:0;z-index:1;top:", "px;width:", "px;height:", "px;border-radius:", "px;background-color:", ";box-shadow:", ";"], BORDER, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
}, function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

function Switch(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      onChange = _ref.onChange;
  var theme = useTheme();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      isFocused = _useState2[0],
      setIsFocused = _useState2[1];

  var handleChange = disabled ? noop : function () {
    return onChange(!checked);
  };
  return React.createElement(FocusVisible, null, function (_ref2) {
    var focusVisible = _ref2.focusVisible,
        _onFocus = _ref2.onFocus;
    return React.createElement(_StyledSpan$b, {
      onClick: function onClick(e) {
        e.preventDefault();
        handleChange();
      },
      _css: theme.border,
      _css2: disabled ? theme.controlBorder : checked ? theme.selected : theme.control,
      _css3: disabled ? 'default' : 'pointer',
      _css4: disabled ? '' : "\n                  &:active {\n                    border-color: ".concat(theme.controlBorderPressed, ";\n                  }\n                "),
      _css5: isFocused && focusVisible ? "\n                  &:after {\n                    content: '';\n                    position: absolute;\n                    left: ".concat(-BORDER * 2, "px;\n                    top: ").concat(-BORDER * 2, "px;\n                    width: ").concat(WRAPPER_WIDTH + BORDER * 2, "px;\n                    height: ").concat(WRAPPER_HEIGHT + BORDER * 2, "px;\n                    border-radius: ").concat(WRAPPER_HEIGHT, "px;\n                    border: 2px solid ").concat(theme.focus, ";\n                  }\n                ") : ''
    }, React.createElement(_StyledInput$1, {
      type: "checkbox",
      onFocus: function onFocus() {
        setIsFocused(true);

        _onFocus();
      },
      onBlur: function onBlur() {
        return setIsFocused(false);
      },
      checked: checked,
      disabled: disabled,
      onChange: handleChange
    }), React.createElement(Spring, {
      to: {
        progress: checked ? WRAPPER_WIDTH - WRAPPER_HEIGHT + BORDER : BORDER
      },
      config: springs.smooth,
      native: true
    }, function (_ref3) {
      var progress = _ref3.progress;
      return React.createElement(_StyledAnimatedSpan$1, {
        style: {
          transform: progress.interpolate(function (v) {
            return "translate3d(".concat(v, "px, 0, 0)");
          })
        },
        _css6: WRAPPER_HEIGHT - BORDER * 4,
        _css7: WRAPPER_HEIGHT - BORDER * 4,
        _css8: WRAPPER_HEIGHT - BORDER * 4,
        _css9: theme.controlSurface,
        _css10: disabled ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.15)'
      });
    }));
  });
}

Switch.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func
};
Switch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: noop
};

var _StyledSpan$c = _styled.span.withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-0"
})(["margin-left:5px"]);

function SyncIndicator(_ref) {
  var visible = _ref.visible,
      label = _ref.label;
  return React.createElement(FloatIndicator, {
    visible: visible
  }, React.createElement(LoadingRing, {
    animated: true
  }), React.createElement(_StyledSpan$c, null, label));
}

SyncIndicator.propTypes = {
  label: propTypes.string,
  visible: propTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

var _StyledTable$1 = _styled.table.withConfig({
  displayName: "Table___StyledTable",
  componentId: "uvcan9-0"
})(["width:100%;border-spacing:0;td{border-bottom:1px solid ", ";}tr:first-child td{border-top:1px solid ", ";}td:first-child{border-left:", ";}td:last-child{border-right:", ";}tr:first-child td:first-child{border-top-left-radius:", ";}tr:first-child td:last-child{border-top-right-radius:", ";}tr:last-child td:first-child{border-bottom-left-radius:", ";}tr:last-child td:last-child{border-bottom-right-radius:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Table(_ref) {
  var header = _ref.header,
      children = _ref.children,
      noSideBorders = _ref.noSideBorders,
      props = objectWithoutProperties(_ref, ["header", "children", "noSideBorders"]);

  var theme = useTheme();
  return React.createElement(_StyledTable$1, _extends_1({}, props, {
    _css: theme.border,
    _css2: theme.border,
    _css3: noSideBorders ? '0' : "1px solid ".concat(theme.border),
    _css4: noSideBorders ? '0' : "1px solid ".concat(theme.border),
    _css5: noSideBorders ? '0' : '3px',
    _css6: noSideBorders ? '0' : '3px',
    _css7: noSideBorders ? '0' : '3px',
    _css8: noSideBorders ? '0' : '3px'
  }), header && React.createElement("thead", null, header), React.createElement("tbody", null, children));
}

Table.propTypes = {
  children: propTypes.node,
  header: propTypes.node,
  noSideBorders: propTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};

var _StyledDiv$E = _styled.div.withConfig({
  displayName: "TableCell___StyledDiv",
  componentId: "sc-110j155-0"
})(["display:flex;align-items:center;justify-content:", ";"], function (p) {
  return p._css;
});

function ContentContainerDefault(_ref) {
  var align = _ref.align,
      props = objectWithoutProperties(_ref, ["align"]);

  return React.createElement(_StyledDiv$E, _extends_1({}, props, {
    _css: align === 'right' ? 'flex-end' : 'space-between'
  }));
}

ContentContainerDefault.propTypes = {
  align: ExtendedPropTypes.string
};

var _StyledTd$1 = _styled.td.withConfig({
  displayName: "TableCell___StyledTd",
  componentId: "sc-110j155-1"
})(["padding:", "px;background:", ";text-align:", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

function TableCell(_ref2) {
  var children = _ref2.children,
      Container = _ref2.contentContainer,
      align = _ref2.align,
      props = objectWithoutProperties(_ref2, ["children", "contentContainer", "align"]);

  var theme = useTheme();
  return React.createElement(_StyledTd$1, _extends_1({}, props, {
    _css2: 2.5 * GU,
    _css3: theme.surface,
    _css4: align
  }), React.createElement(Container, {
    align: align
  }, children));
}

TableCell.propTypes = {
  align: ExtendedPropTypes.string,
  contentContainer: ExtendedPropTypes._component,
  children: ExtendedPropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: ContentContainerDefault
}; // Compatibility (not sure this is used at all?)

var _StyledTh$1 = _styled.th.withConfig({
  displayName: "TableHeader___StyledTh",
  componentId: "sc-1qxm8cp-0"
})(["padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";white-space:nowrap;color:", ";", ";line-height:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

function TableHeader(_ref) {
  var title = _ref.title,
      align = _ref.align,
      props = objectWithoutProperties(_ref, ["title", "align"]);

  var theme = useTheme();
  return React.createElement(_StyledTh$1, _extends_1({}, props, {
    _css: align === 'left' ? 2.5 * GU + 1 : 0,
    _css2: align === 'right' ? 2.5 * GU + 1 : 0,
    _css3: align,
    _css4: theme.contentSecondary,
    _css5: textStyle('label2'),
    _css6: 4 * GU
  }), title);
}

TableHeader.propTypes = {
  title: propTypes.string,
  align: propTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

function _templateObject$5() {
  var data = taggedTemplateLiteral([""]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var StyledTableRow = _styled.tr(_templateObject$5());

var aragon = {
  "Grey": {
    "Black Ash": "#3B3B3B",
    "Dim Grey": "#707070",
    "Dust Grey": "#969696",
    "Light Grey": "#B3B3B3",
    "Gainsboro": "#E6E6E6",
    "Alabaster": "#F2F2F2"
  },
  "Rain": {
    "Shark": "#1F2323",
    "Atomic": "#455559",
    "Slate": "#6D8088",
    "Aqua Island": "#9ECDDB",
    "Rain Sky": "#DCEAEF",
    "Aqua Blue": "#F7FBFD"
  },
  "Blue": {
    "Lochmara": "#028BCF",
    "Danube": "#7FADDC",
    "Spindle": "#B3CFEA",
    "Solitude": "#ECF8FE"
  },
  "Sea": {
    "Light Sea": "#21B7C4",
    "Turquoise": "#50E2C3",
    "Blizzard Blue": "#ACECE7"
  },
  "Purple": {
    "Indigo": "#4A2DBE",
    "Portage": "#A684F5",
    "Lavender": "#EDE5FF"
  },
  "Eagle": {
    "Dark Cerulean": "#00A4D1",
    "Cerulean": "#00B4E6",
    "Dark Turquoise": "#00CBE6",
    "Dark Opal": "#00DBCD",
    "Opal": "#00F0E0"
  },
  "Gold": {
    "Brandy": "#DAC08B",
    "Beige": "#FFF9EB"
  },
  "Red": {
    "Salmon Red": "#FB7979"
  },
  "Green": {
    "Spring Green": "#21D48F"
  },
  "Black": {
    "Black": "#000000"
  },
  "White": {
    "White": "#FFFFFF"
  },
  "Aragon Brand": {
    "Primary": "=Purple.Indigo",
    "Secondary": "=Sea.Turquoise",
    "Black Ash": "=Grey.Black Ash",
    "Gradient Start": "=Eagle.Cerulean",
    "Gradient End": "=Eagle.Opal"
  },
  "Aragon UI": {
    "gradientStart": "=Eagle.Cerulean",
    "gradientEnd": "=Eagle.Opal",
    "gradientStartActive": "=Eagle.Dark Cerulean",
    "gradientEndActive": "=Eagle.Dark Opal",
    "gradientText": "=White.White",
    "mainBackground": "=Rain.Aqua Blue",
    "mainBgGradientStart": "=Rain.Rain Sky",
    "mainBgGradientEnd": "=Rain.Aqua Blue",
    "secondaryBackground": "=Rain.Rain Sky",
    "contentBackground": "=White.White",
    "contentBackgroundActive": "=Grey.Alabaster",
    "contentBorder": "=Grey.Gainsboro",
    "contentBorderActive": "=Grey.Light Grey",
    "disabled": "=Grey.Gainsboro",
    "disabledText": "=White.White",
    "infoBackground": "=Blue.Solitude",
    "infoPermissionsBackground": "=Gold.Beige",
    "infoPermissionsIcon": "=Gold.Brandy",
    "shadow": "=Grey.Alabaster",
    "text": "=Black.Black",
    "textPrimary": "=Aragon UI.text",
    "textDimmed": "=Grey.Black Ash",
    "textSecondary": "=Grey.Dim Grey",
    "textTertiary": "=Grey.Light Grey",
    "accent": "=Eagle.Dark Turquoise",
    "positive": "=Green.Spring Green",
    "positiveText": "=White.White",
    "negative": "=Red.Salmon Red",
    "negativeText": "=White.White",
    "badgeAppBackground": "=Purple.Lavender",
    "badgeAppForeground": "=Purple.Portage",
    "badgeIdentityBackground": "=Rain.Rain Sky",
    "badgeIdentityForeground": "=Rain.Slate",
    "badgeNotificationBackground": "=Aragon UI.positive",
    "badgeNotificationForeground": "=Aragon UI.positiveText",
    "badgeInfoBackground": "=Rain.Rain Sky",
    "badgeInfoForeground": "=Rain.Slate",
    "selectionBackground": "#B2D7FF",
    "selectionForeground": "=Aragon UI.textPrimary"
  },
  "Aragon UI Dark": {
    "gradientStart": "=Eagle.Cerulean",
    "gradientEnd": "=Eagle.Opal",
    "gradientStartActive": "=Eagle.Dark Cerulean",
    "gradientEndActive": "=Eagle.Dark Opal",
    "gradientText": "=White.White",
    "mainBackground": "=Rain.Aqua Blue",
    "mainBgGradientStart": "=Rain.Rain Sky",
    "mainBgGradientEnd": "=Rain.Aqua Blue",
    "secondaryBackground": "=Rain.Rain Sky",
    "contentBackground": "=Rain.Shark",
    "contentBackgroundActive": "=Grey.Alabaster",
    "contentBorder": "=Grey.Gainsboro",
    "contentBorderActive": "=Grey.Light Grey",
    "disabled": "=Grey.Light Grey",
    "disabledText": "=Grey.Dim Grey",
    "infoBackground": "=Blue.Solitude",
    "infoPermissionsBackground": "=Gold.Beige",
    "infoPermissionsIcon": "=Gold.Brandy",
    "shadow": "=Grey.Alabaster",
    "text": "=White.White",
    "textPrimary": "=Aragon UI Dark.text",
    "textDimmed": "=Grey.Alabaster",
    "textSecondary": "=Grey.Dust Grey",
    "textTertiary": "=Grey.Dim Grey",
    "accent": "=Eagle.Dark Turquoise",
    "positive": "=Green.Spring Green",
    "positiveText": "=White.White",
    "negative": "=Red.Salmon Red",
    "negativeText": "=White.White",
    "badgeAppBackground": "=Purple.Lavender",
    "badgeAppForeground": "=Purple.Portage",
    "badgeIdentityBackground": "=Rain.Rain Sky",
    "badgeIdentityForeground": "=Rain.Slate",
    "badgeNotificationBackground": "=Aragon UI Dark.positive",
    "badgeNotificationForeground": "=Aragon UI Dark.positiveText",
    "badgeInfoBackground": "=Rain.Rain Sky",
    "badgeInfoForeground": "=Rain.Slate",
    "selectionBackground": "#B2D7FF",
    "selectionForeground": "=Aragon UI.textPrimary"
  }
};

var THEME_NAME = 'Aragon UI';
var THEME_DARK_NAME = 'Aragon UI Dark';
var BRAND_NAME = 'Aragon Brand'; // Name of the group a given palette belong to

var getGroupName = function getGroupName(name) {
  if (name === THEME_NAME) return 'theme';
  if (name === THEME_DARK_NAME) return 'themeDark';
  if (name === BRAND_NAME) return 'brand';
  return 'colors';
}; // Resolve a single color


var resolveColor = function resolveColor(value, palettes) {
  // already resolved color
  if (!value.startsWith('=')) {
    return value;
  }

  var _value$slice$split = value.slice(1).split('.'),
      _value$slice$split2 = slicedToArray(_value$slice$split, 2),
      paletteName = _value$slice$split2[0],
      key = _value$slice$split2[1];

  var color = palettes[paletteName] && palettes[paletteName][key];

  if (!color) {
    throw new Error("resolveColor: ".concat(value, " doesn\u2019t seem to exist"));
  } // follow the references until we find one


  if (color.startsWith('=')) {
    return resolveColor(color, palettes);
  }

  return color;
}; // Resolve all the colors in a palette


var resolveColors = function resolveColors(palette, palettes) {
  return Object.entries(palette).reduce(function (pal, _ref) {
    var _ref2 = slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'string') {
      pal[name] = resolveColor(value, palettes);
    }

    return pal;
  }, {});
}; // Prepare groups from the palettes: theme, themeDark, brand and colors.


var groups = function groups(palettes) {
  return Object.entries(palettes).reduce(function (groups, _ref3) {
    var _ref4 = slicedToArray(_ref3, 2),
        paletteName = _ref4[0],
        palette = _ref4[1];

    var groupName = getGroupName(paletteName);

    if (groupName === 'colors') {
      groups.colors[paletteName] = resolveColors(palette, palettes);
    } else {
      groups[groupName] = resolveColors(palette, palettes);
    }

    return groups;
  }, {
    colors: {}
  });
};

var _groups = groups(aragon),
    themeDark = _groups.themeDark,
    theme = _groups.theme,
    brand = _groups.brand,
    colors$3 = _groups.colors;

function _templateObject4$3() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: -1px;\n  padding: 5px 0 3px;\n  border-bottom: 4px solid ", ";\n"]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = taggedTemplateLiteral(["\n  position: relative;\n  list-style: none;\n  padding: 0 30px;\n  cursor: pointer;\n  ", ";\n  ", ";\n  &:focus {\n    outline: 0;\n    ", " {\n      display: block;\n    }\n  }\n"]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = taggedTemplateLiteral(["\n  display: none;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  right: -5px;\n  bottom: -5px;\n  border: 2px solid ", ";\n  border-radius: 2px;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$6() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  border-bottom: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

var TabBar =
/*#__PURE__*/
function (_React$Component) {
  inherits(TabBar, _React$Component);

  function TabBar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, TabBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(TabBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      displayFocusRing: false
    });

    defineProperty(assertThisInitialized(_this), "_barRef", React.createRef());

    defineProperty(assertThisInitialized(_this), "handleMouseDown", function () {
      _this.disableFocusRing();
    });

    defineProperty(assertThisInitialized(_this), "handleKeydown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.selectElement(document.activeElement);

        _this.enableFocusRing();
      }

      if (key === 'Tab') {
        _this.enableFocusRing();
      }
    });

    defineProperty(assertThisInitialized(_this), "handleTabMouseDown", function (_ref2) {
      var currentTarget = _ref2.currentTarget;

      // We would usually avoid using the DOM when possible, and prefer using a
      // separate component (`Tab`) to keep the `index` in a prop, then pass it
      // using an event prop. But since `this.selectElement()` is needed (so we
      // can pass `document.activeElement` to it for the keyboard), and we have
      // `e.currentTarget` in the event object, we might as well use it for the
      // pointer device too.
      _this.selectElement(currentTarget);
    });

    return _this;
  }

  createClass(TabBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeydown);
    }
  }, {
    key: "enableFocusRing",
    value: function enableFocusRing() {
      this.setState({
        displayFocusRing: true
      });
    }
  }, {
    key: "disableFocusRing",
    value: function disableFocusRing() {
      this.setState({
        displayFocusRing: false
      });
    }
  }, {
    key: "selectElement",
    value: function selectElement(element) {
      var onChange = this.props.onChange;

      if (!element || !this._barRef.current) {
        return;
      }

      var index = toConsumableArray(this._barRef.current.childNodes).indexOf(element);

      if (index === -1) {
        return;
      }

      onChange(index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var displayFocusRing = this.state.displayFocusRing;
      var _this$props = this.props,
          items = _this$props.items,
          selected = _this$props.selected,
          inAppBar = _this$props.inAppBar;
      return React.createElement("nav", {
        onMouseDown: this.handleMouseDown
      }, React.createElement(Bar$3, {
        ref: this._barRef,
        border: !inAppBar
      }, items.map(function (item, i) {
        return React.createElement(Tab, {
          key: i,
          tabIndex: "0",
          selected: i === selected,
          focusRing: displayFocusRing,
          onMouseDown: _this2.handleTabMouseDown
        }, React.createElement(Label$2, {
          selected: i === selected
        }, item), displayFocusRing && React.createElement(FocusRing, null));
      })));
    }
  }]);

  return TabBar;
}(React.Component);

defineProperty(TabBar, "propTypes", {
  items: propTypes.arrayOf(propTypes.node).isRequired,
  selected: propTypes.number,
  onChange: propTypes.func,
  inAppBar: propTypes.bool
});

defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: noop
});

var Bar$3 = _styled.ul(_templateObject$6(), function (p) {
  return p.border ? "1px solid ".concat(theme.contentBorder) : '0';
});
var FocusRing = _styled.span(_templateObject2$4(), theme.accent);
var Tab = _styled.li(_templateObject3$4(), function (p) {
  return font({
    weight: p.selected ? 'bold' : 'normal',
    deprecationNotice: false
  });
}, unselectable(), FocusRing);
var Label$2 = _styled.span(_templateObject4$3(), function (p) {
  return p.selected ? theme.accent : 'transparent';
});

/* eslint-disable react/prop-types */

var _StyledDiv$F = _styled.div.withConfig({
  displayName: "TabsFullWidth___StyledDiv",
  componentId: "sc-1sqpfuf-0"
})(["padding-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2$n = _styled.div.withConfig({
  displayName: "TabsFullWidth___StyledDiv2",
  componentId: "sc-1sqpfuf-1"
})(["position:relative;display:flex;align-items:center;justify-content:space-between;width:100%;height:", "px;"], function (p) {
  return p._css2;
});

var _StyledButtonBase$c = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "TabsFullWidth___StyledButtonBase",
  componentId: "sc-1sqpfuf-2"
})(["display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;background:", ";border-style:solid;border-color:", ";border-top-width:", ";border-bottom-width:1px;border-radius:0;", ";&:active{background:", ";}"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledDiv3$c = _styled.div.withConfig({
  displayName: "TabsFullWidth___StyledDiv3",
  componentId: "sc-1sqpfuf-3"
})(["padding-left:", "px;"], function (p) {
  return p._css8;
});

var _StyledDiv4$8 = _styled.div.withConfig({
  displayName: "TabsFullWidth___StyledDiv4",
  componentId: "sc-1sqpfuf-4"
})(["display:flex;align-items:center;justify-content:center;width:", "px;height:100%;color:", ";"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _StyledIconDown$2 = _styled(IconDown).withConfig({
  displayName: "TabsFullWidth___StyledIconDown",
  componentId: "sc-1sqpfuf-5"
})(["transition:transform 150ms ease-in-out;transform:rotate3d(0,0,1,", "deg);"], function (p) {
  return p._css11;
});

var _StyledAnimatedDiv$8 = _styled(extendedAnimated.div).withConfig({
  displayName: "TabsFullWidth___StyledAnimatedDiv",
  componentId: "sc-1sqpfuf-6"
})(["position:absolute;z-index:9;top:", "px;left:0;right:0;border-bottom:1px solid ", ";box-shadow:0px 2px 3px rgba(0,0,0,0.05);background:", ";"], function (p) {
  return p._css12;
}, function (p) {
  return p._css13;
}, function (p) {
  return p._css14;
});

function TabsFullWidth(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  var theme = useTheme();
  var buttonRef = useRef(null);

  var _useInside = useInside('SidePanel'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideSidePanel = _useInside2[0];

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var selectedItem = items[selected];
  var close = useCallback(function () {
    return setOpened(false);
  }, []);
  var focusButton = useCallback(function () {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);
  var toggle = useCallback(function () {
    setOpened(function (opened) {
      return !opened;
    });
  }, []);
  var change = useCallback(function (index) {
    if (index !== selected) {
      onChange(index);
      close();
      focusButton();
    }
  }, [selected, onChange, close, focusButton]);

  var _useOnBlur = useOnBlur(close),
      handleBlur = _useOnBlur.handleBlur,
      ref = _useOnBlur.ref; // close on escape


  var handleMenuKeyDown = useCallback(function (event) {
    if (event.keyCode === KEY_ESC) {
      close();
      focusButton();
    }
  }, [close, focusButton]);
  return React.createElement(_StyledDiv$F, {
    ref: ref,
    onBlur: handleBlur,
    _css: 2 * GU
  }, React.createElement(_StyledDiv2$n, {
    _css2: 8 * GU
  }, React.createElement(_StyledButtonBase$c, {
    ref: buttonRef,
    onClick: toggle,
    _css3: theme.surface,
    _css4: theme.border,
    _css5: insideSidePanel ? '0' : '1px',
    _css6: textStyle('body2'),
    _css7: theme.surfacePressed
  }, React.createElement(_StyledDiv3$c, {
    _css8: 2 * GU
  }, selectedItem), React.createElement(_StyledDiv4$8, {
    _css9: 7 * GU,
    _css10: theme.surfaceIcon
  }, React.createElement(_StyledIconDown$2, {
    _css11: opened ? 180 : 0
  }))), React.createElement(Transition, {
    items: opened,
    config: springs.swift,
    from: {
      y: -1,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1
    },
    leave: {
      y: -1,
      opacity: 0
    },
    native: true
  }, function (opened) {
    return opened && function (_ref2) {
      var opacity = _ref2.opacity,
          y = _ref2.y;
      return React.createElement(_StyledAnimatedDiv$8, {
        style: {
          opacity: opacity,
          transform: y.interpolate(function (v) {
            return "translate3d(0, ".concat(v * 4, "px, 0)");
          })
        },
        _css12: 8 * GU,
        _css13: theme.border,
        _css14: theme.surface
      }, React.createElement(Menu, {
        items: items,
        onChange: change,
        onKeyDown: handleMenuKeyDown
      }));
    };
  })));
}

var _StyledDiv5$3 = _styled.div.withConfig({
  displayName: "TabsFullWidth___StyledDiv5",
  componentId: "sc-1sqpfuf-7"
})(["display:flex;flex-direction:column;outline:0;"]);

function Menu(_ref3) {
  var items = _ref3.items,
      onChange = _ref3.onChange,
      props = objectWithoutProperties(_ref3, ["items", "onChange"]);

  var handleRef = useCallback(function (element) {
    if (element) {
      element.focus();
    }
  }, []);
  return React.createElement(_StyledDiv5$3, _extends_1({
    ref: handleRef,
    tabIndex: "0"
  }, props), items.map(function (item, index) {
    return React.createElement(MenuItem, {
      key: index,
      item: item,
      index: index,
      onChange: onChange
    });
  }));
}

var _StyledButtonBase2$1 = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "TabsFullWidth___StyledButtonBase2",
  componentId: "sc-1sqpfuf-8"
})(["height:", "px;padding-left:", "px;text-align:left;", ";&:active{background:", ";}"], function (p) {
  return p._css15;
}, function (p) {
  return p._css16;
}, function (p) {
  return p._css17;
}, function (p) {
  return p._css18;
});

function MenuItem(_ref4) {
  var item = _ref4.item,
      index = _ref4.index,
      onChange = _ref4.onChange;
  var theme = useTheme();
  var change = useCallback(function () {
    onChange(index);
  }, [onChange, index]);
  return React.createElement(_StyledButtonBase2$1, {
    onClick: change,
    _css15: 8 * GU,
    _css16: 2 * GU,
    _css17: textStyle('body2'),
    _css18: theme.surfacePressed
  }, item);
}

var _StyledLi$1 = _styled.li.withConfig({
  displayName: "Tab___StyledLi",
  componentId: "sc-1cgzd3b-0"
})(["list-style:none"]);

var _StyledButtonBase$d = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Tab___StyledButtonBase",
  componentId: "sc-1cgzd3b-1"
})(["", ";border-radius:0;transition:background 50ms ease-in-out;&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledSpan$d = _styled.span.withConfig({
  displayName: "Tab___StyledSpan",
  componentId: "sc-1cgzd3b-2"
})(["display:flex;position:relative;align-items:center;height:", "px;padding:0 ", "px;white-space:nowrap;color:", ";"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan2$6 = _styled.span.withConfig({
  displayName: "Tab___StyledSpan2",
  componentId: "sc-1cgzd3b-3"
})(["position:absolute;left:0;right:0;bottom:0;background:", ";height:2px;opacity:", ";transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:ease-in-out;transform:scale3d(1,", ",1);transform-origin:0 100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Tab$1(_ref) {
  var index = _ref.index,
      item = _ref.item,
      selected = _ref.selected,
      onChange = _ref.onChange;
  var theme = useTheme();

  var _useInside = useInside('SidePanel'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideSidePanel = _useInside2[0];

  var handleClick = useCallback(function () {
    onChange(index);
  }, [index, onChange]);
  return React.createElement(_StyledLi$1, null, React.createElement(_StyledButtonBase$d, {
    focusRingRadius: RADIUS,
    onClick: handleClick,
    _css: textStyle('body2'),
    _css2: theme.surfacePressed
  }, React.createElement(_StyledSpan$d, {
    _css3: 8 * GU - (insideSidePanel ? 1 : 2),
    _css4: 3 * GU,
    _css5: selected ? theme.surfaceContent : theme.surfaceContentSecondary
  }, item, React.createElement(_StyledSpan2$6, {
    _css6: theme.selected,
    _css7: Number(selected),
    _css8: Number(selected)
  }))));
}

Tab$1.propTypes = {
  index: propTypes.number.isRequired,
  item: propTypes.node.isRequired,
  onChange: propTypes.func.isRequired,
  selected: propTypes.bool.isRequired
};

var _StyledUl$2 = _styled.ul.withConfig({
  displayName: "Tabs___StyledUl",
  componentId: "sc-1eu39ev-0"
})(["display:flex"]);

function TabBar$1(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange;
  return React.createElement("nav", null, React.createElement(_StyledUl$2, null, items.map(function (item, i) {
    return React.createElement(Tab$1, {
      key: i,
      index: i,
      item: item,
      onChange: onChange,
      selected: i === selected
    });
  })));
}

TabBar$1.propTypes = {
  items: propTypes.arrayOf(propTypes.node).isRequired,
  selected: propTypes.number,
  onChange: propTypes.func
};
TabBar$1.defaultProps = {
  selected: 0,
  onChange: noop
};

var _StyledBar$1 = _styled(Bar).withConfig({
  displayName: "Tabs___StyledBar",
  componentId: "sc-1eu39ev-1"
})(["overflow:hidden;", ""], function (p) {
  return p._css;
});

function Tabs(props) {
  var _useLayout = useLayout(),
      layoutName = _useLayout.layoutName;

  var _useInside = useInside('Bar'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBar = _useInside2[0];

  var _useInside3 = useInside('SidePanel'),
      _useInside4 = slicedToArray(_useInside3, 1),
      insideSidePanel = _useInside4[0];

  if (insideBar) {
    throw new Error('Tabs cannot be a child of Bar: please use the Tabs component directly.');
  }

  if (layoutName === 'small') {
    return React.createElement(TabsFullWidth, props);
  }

  return React.createElement(_StyledBar$1, {
    _css: insideSidePanel ? "\n            border-width: 0 0 1px 0;\n            border-radius: 0;\n          " : ''
  }, React.createElement(TabBar$1, props));
} // TabBar legacy compatibility


function TabBarLegacyCompatibility(props) {
  var _useInside5 = useInside('AppBar'),
      _useInside6 = slicedToArray(_useInside5, 1),
      insideAppBar = _useInside6[0]; // Use a separate component for Tabs in AppBar, to prevent breaking anything.


  if (insideAppBar) {
    return React.createElement(TabBar, _extends_1({}, props, {
      inAppBar: true
    }));
  }

  warnOnce('TabBarLegacyCompatibility', 'TabBar is deprecated and was used outside of an AppBar. Please use the Tabs component instead.');
  return React.createElement(Tabs, props);
}

var TokenBadgePopover = React.memo(function TokenBadgePopover(_ref) {
  var address = _ref.address,
      iconSrc = _ref.iconSrc,
      networkType = _ref.networkType,
      onClose = _ref.onClose,
      opener = _ref.opener,
      title = _ref.title,
      visible = _ref.visible;
  var etherscanUrl = blockExplorerUrl('token', address, {
    networkType: networkType
  });
  return React.createElement(BadgePopoverBase, {
    addressField: iconSrc ? React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return React.createElement(AddressField, {
        address: address,
        icon: exists ? React.createElement(Icon$2, {
          src: iconSrc
        }) : null
      });
    }) : React.createElement(AddressField, {
      address: address
    }),
    link: etherscanUrl && React.createElement(Link, {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    title: title,
    visible: visible
  });
});
TokenBadgePopover.propTypes = {
  address: propTypes.string.isRequired,
  iconSrc: propTypes.string,
  networkType: propTypes.string,
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  title: propTypes.string.isRequired,
  visible: propTypes.bool
};

var _StyledDiv$G = _styled.div.withConfig({
  displayName: "TokenBadgePopover___StyledDiv",
  componentId: "sc-8b2bwa-0"
})(["width:calc(100% - ", "px);height:calc(100% - ", "px);background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function Icon$2(_ref3) {
  var src = _ref3.src;
  return React.createElement(_StyledDiv$G, {
    _css: 0.5 * GU,
    _css2: 0.5 * GU,
    _css3: src
  });
}

Icon$2.propTypes = {
  src: propTypes.string.isRequired
};

var _StyledSpan$e = _styled.span.withConfig({
  displayName: "TokenBadge___StyledSpan",
  componentId: "sc-7bvdqo-0"
})(["position:relative;top:1px;display:flex;flex-shrink:1;min-width:0;margin-left:", ";"], function (p) {
  return p._css;
});

var TokenBadge = React.memo(function TokenBadge(_ref) {
  var address = _ref.address,
      badgeOnly = _ref.badgeOnly,
      className = _ref.className,
      compact = _ref.compact,
      name = _ref.name,
      networkType = _ref.networkType,
      style = _ref.style,
      symbol = _ref.symbol;
  var badgeRef = useRef(null);

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleOpen = useCallback(function () {
    return setOpened(true);
  }, []);
  var isValidAddress = isAddress(address);
  var iconSrc = isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null;
  var title = name && symbol ? "".concat(name, " (").concat(symbol, ")") : symbol;

  if (!isValidAddress) {
    warn("TokenBadge: provided invalid address (".concat(address, ")"));
  }

  return React.createElement(BadgeBase, {
    badgeRef: badgeRef,
    className: className,
    compact: compact,
    disabled: badgeOnly,
    icon: React.createElement(ImageExists, {
      src: iconSrc
    }, function (_ref2) {
      var exists = _ref2.exists;
      return exists && React.createElement(Icon$3, {
        compact: compact,
        src: iconSrc
      });
    }),
    label: React.createElement(_StyledSpan$e, {
      _css: compact ? 0 : "".concat(1 * GU, "px")
    }, name && React.createElement(Name, null, name), React.createElement(_Symbol, null, name ? "(".concat(symbol, ")") : symbol)),
    onClick: isValidAddress ? handleOpen : undefined,
    style: style,
    title: "".concat(title, " \u2212 ").concat(address || 'No address')
  }, function (popoverDisabled) {
    return !popoverDisabled && address && React.createElement(TokenBadgePopover, {
      address: address,
      iconSrc: iconSrc,
      networkType: networkType,
      onClose: handleClose,
      opener: badgeRef.current,
      title: title,
      visible: opened
    });
  });
});
TokenBadge.propTypes = {
  address: propTypes.string,
  badgeOnly: propTypes.bool,
  className: propTypes.string,
  compact: propTypes.bool,
  name: propTypes.string,
  networkType: propTypes.string,
  style: propTypes.object,
  symbol: propTypes.string.isRequired
};
TokenBadge.defaultProps = {
  address: '',
  name: '',
  networkType: 'main'
};

var _StyledSpan2$7 = _styled.span.withConfig({
  displayName: "TokenBadge___StyledSpan2",
  componentId: "sc-7bvdqo-1"
})(["flex-shrink:0;display:block;width:18px;height:18px;margin:0 ", "px 0 ", "px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
});

function Icon$3(_ref3) {
  var compact = _ref3.compact,
      src = _ref3.src,
      props = objectWithoutProperties(_ref3, ["compact", "src"]);

  var margin = 1 * GU;
  return React.createElement(_StyledSpan2$7, _extends_1({}, props, {
    _css2: compact ? margin : 0,
    _css3: compact ? 0 : margin,
    _css4: src
  }));
}

Icon$3.propTypes = {
  compact: propTypes.bool,
  src: propTypes.string.isRequired
};
var Name = _styled.span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-2"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:", "px;"], 0.5 * GU);

var _Symbol = _styled.span.withConfig({
  displayName: "TokenBadge___Symbol",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;"]);

var TransactionBadge = React.memo(function TransactionBadge(_ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      labelStyle = _ref.labelStyle,
      networkType = _ref.networkType,
      shorten = _ref.shorten,
      style = _ref.style,
      transaction = _ref.transaction,
      background = _ref.background,
      fontSize = _ref.fontSize;

  if (fontSize) {
    warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  var isTx = isTransaction(transaction);
  var transactionUrl = isTx ? blockExplorerUrl('transaction', transaction, {
    networkType: networkType
  }) : '';
  var label = !isTx ? 'Invalid transaction' : shorten ? shortenTransaction(transaction) : transaction;
  return React.createElement(BadgeBase, {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: propTypes.string,
  disabled: propTypes.bool,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  shorten: propTypes.bool,
  style: propTypes.object,
  transaction: propTypes.string.isRequired,
  // Deprecated
  background: propTypes.string,
  fontSize: propTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

var _StyledSection$2 = _styled.section.withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "vvbhu5-0"
})(["padding:", "px;"], function (p) {
  return p._css;
});

var _StyledButtonIcon$6 = _styled(ButtonIcon).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "vvbhu5-1"
})(["position:absolute;top:", "px;right:", "px;"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledH$8 = _styled.h1.withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "vvbhu5-2"
})(["font-weight:600"]);

var _StyledDiv$H = _styled.div.withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "vvbhu5-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan$f = _styled.span.withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "vvbhu5-4"
})(["", ";color:", ";"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
});

var _StyledProgressBar = _styled(ProgressBar).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "vvbhu5-5"
})(["color:", ";"], function (p) {
  return p._css8;
});

var _StyledDiv2$o = _styled.div.withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "vvbhu5-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], function (p) {
  return p._css9;
}, function (p) {
  return p._css10;
});

var _StyledDiv3$d = _styled.div.withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "vvbhu5-7"
})(["margin-right:", "px;"], function (p) {
  return p._css11;
});

var _StyledLink = _styled(Link).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "vvbhu5-8"
})(["text-decoration:none"]);

var TransactionProgress = React.memo(function TransactionProgress(_ref) {
  var visible = _ref.visible,
      slow = _ref.slow,
      progress = _ref.progress,
      endTime = _ref.endTime,
      transactionHashUrl = _ref.transactionHashUrl,
      onClose = _ref.onClose,
      opener = _ref.opener;
  var theme = useTheme();
  return React.createElement(Popover, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, React.createElement(_StyledSection$2, {
    _css: 2 * GU
  }, React.createElement(_StyledButtonIcon$6, {
    onClick: onClose,
    _css2: 1 * GU,
    _css3: 1 * GU
  }, React.createElement(IconCross, null)), React.createElement(_StyledH$8, null, "Pending transaction"), React.createElement(_StyledDiv$H, {
    _css4: 2 * GU,
    _css5: 1 * GU
  }, React.createElement(_StyledSpan$f, {
    _css6: textStyle('label2'),
    _css7: theme.contentSecondary
  }, "Estimated time:"), React.createElement(Countdown, {
    removeDaysAndHours: true,
    end: endTime
  })), React.createElement(_StyledProgressBar, {
    value: progress,
    _css8: theme.accent
  }), React.createElement(_StyledDiv2$o, {
    _css9: slow ? 'space-between' : 'end',
    _css10: 2 * GU
  }, slow && React.createElement(_StyledDiv3$d, {
    _css11: 2 * GU
  }, React.createElement(Info.Alert, null, "Slow transaction. Retry with more gas")), React.createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Etherscan"))));
});
TransactionProgress.propTypes = {
  endTime: propTypes.instanceOf(Date),
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  progress: propTypes.number,
  slow: propTypes.bool,
  transactionHashUrl: propTypes.string,
  visible: propTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: noop,
  visible: false
};

var _StyledSpan$g = _styled.span.withConfig({
  displayName: "Text___StyledSpan",
  componentId: "yxw4o9-0"
})(["", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Text(_ref) {
  var children = _ref.children,
      color = _ref.color,
      deprecationNotice = _ref.deprecationNotice,
      monospace = _ref.monospace,
      size = _ref.size,
      smallcaps = _ref.smallcaps,
      weight = _ref.weight,
      props = objectWithoutProperties(_ref, ["children", "color", "deprecationNotice", "monospace", "size", "smallcaps", "weight"]);

  if (deprecationNotice) {
    warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return React.createElement(_StyledSpan$g, _extends_1({}, props, {
    _css: font({
      deprecationNotice: false,
      monospace: monospace,
      size: size,
      smallcaps: smallcaps,
      weight: weight
    }),
    _css2: color ? "color: ".concat(color) : ''
  }), children);
}

var Block = function Block(props) {
  return React.createElement(Text, _extends_1({
    as: "div"
  }, props));
};

var Paragraph = function Paragraph(props) {
  return React.createElement(Text, _extends_1({
    as: "p"
  }, props));
};

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  deprecationNotice: propTypes.bool,
  monospace: propTypes.bool,
  size: propTypes.string,
  smallcaps: propTypes.bool,
  weight: propTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

var chevronSvg = "data:image/svg+xml,%3Csvg%20width%3D%227%22%20height%3D%2212%22%20viewBox%3D%220%200%207%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.446%2012a.512.512%200%200%201-.172-.03.422.422%200%200%201-.146-.087A.37.37%200%200%201%200%2011.6a.37.37%200%200%201%20.128-.281l5.826-5.361L.217.692A.376.376%200%200%201%20.089.405.378.378%200%200%201%20.217.117.444.444%200%200%201%20.529%200c.123%200%20.228.04.313.117l6.03%205.56A.37.37%200%200%201%207%205.96a.37.37%200%200%201-.128.281l-6.12%205.643A.477.477%200%200%201%20.446%2012z%22%20fill%3D%22%2300CBE6%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var BAR_HEIGHT$2 = 64;

var _StyledDiv$I = _styled.div.withConfig({
  displayName: "AppBar___StyledDiv",
  componentId: "sc-11q0awo-0"
})(["overflow:hidden;display:flex;flex-direction:column;width:100%;min-height:", "px;background:", ";", ";padding-bottom:1px;&:after{content:'';position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid ", ";}"], BAR_HEIGHT$2, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2$p = _styled.div.withConfig({
  displayName: "AppBar___StyledDiv2",
  componentId: "sc-11q0awo-1"
})(["display:flex;align-items:center;justify-content:flex-start;width:100%;height:", "px;"], function (p) {
  return p._css4;
});

var _StyledDiv3$e = _styled.div.withConfig({
  displayName: "AppBar___StyledDiv3",
  componentId: "sc-11q0awo-2"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], function (p) {
  return p._css5;
});

var _StyledDiv4$9 = _styled.div.withConfig({
  displayName: "AppBar___StyledDiv4",
  componentId: "sc-11q0awo-3"
})(["display:flex;align-items:center;height:100%;margin-left:auto;padding-right:", "px;"], function (p) {
  return p._css6;
});

var AppBar =
/*#__PURE__*/
function (_React$Component) {
  inherits(AppBar, _React$Component);

  function AppBar() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(AppBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      tabsHeight: 0
    });

    defineProperty(assertThisInitialized(_this), "_tabsRef", React.createRef());

    return _this;
  }

  createClass(AppBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTabsHeight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (Boolean(prevProps.tabs) !== Boolean(this.props.tabs)) {
        this.updateTabsHeight();
      }
    }
  }, {
    key: "updateTabsHeight",
    value: function updateTabsHeight() {
      var el = this._tabsRef.current;

      if (el) {
        this.setState({
          tabsHeight: el.clientHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabsHeight = this.state.tabsHeight;

      var _this$props = this.props,
          children = _this$props.children,
          endContent = _this$props.endContent,
          onTitleClick = _this$props.onTitleClick,
          padding = _this$props.padding,
          tabs = _this$props.tabs,
          title = _this$props.title,
          theme = _this$props.theme,
          props = objectWithoutProperties(_this$props, ["children", "endContent", "onTitleClick", "padding", "tabs", "title", "theme"]);

      return React.createElement(Inside, {
        name: "AppBar"
      }, React.createElement(_StyledDiv$I, {
        _css: theme.surface,
        _css2: unselectable(),
        _css3: theme.border
      }, React.createElement(_StyledDiv2$p, _extends_1({}, props, {
        _css4: BAR_HEIGHT$2 - 1
      }), title && React.createElement(_StyledDiv3$e, {
        _css5: padding
      }, React.createElement(AppBarTitle, {
        chevron: Boolean(children),
        clickable: Boolean(onTitleClick),
        onClick: onTitleClick
      }, typeof title === 'string' ? React.createElement(Text, {
        size: "xxlarge",
        deprecationNotice: false
      }, title) : title)), children, endContent && React.createElement(_StyledDiv4$9, {
        _css6: padding
      }, endContent)), React.createElement(Transition, {
        items: tabs,
        from: {
          opacity: 0,
          height: 0
        },
        enter: {
          opacity: 1,
          height: tabsHeight || 'auto'
        },
        leave: {
          opacity: 0,
          height: 0
        },
        initial: null,
        config: springs.smooth,
        native: true
      }, function (tabs) {
        return tabs && function (styles) {
          return React.createElement(TabsWrapper, {
            style: styles
          }, React.createElement("div", {
            ref: _this2._tabsRef
          }, tabs));
        };
      })));
    }
  }]);

  return AppBar;
}(React.Component);

defineProperty(AppBar, "propTypes", {
  children: propTypes.node,
  endContent: propTypes.node,
  onTitleClick: propTypes.func,
  padding: propTypes.number,
  tabs: propTypes.element,
  theme: propTypes.object,
  title: propTypes.node
});

defineProperty(AppBar, "defaultProps", {
  onTitleClick: noop,
  padding: 30,
  title: ''
});

var AppBarTitle = PublicUrl.hocWrap(_styled.h1.withConfig({
  displayName: "AppBar__AppBarTitle",
  componentId: "sc-11q0awo-4"
})(["padding-right:20px;margin-right:calc(20px - 7px);white-space:nowrap;background-image:", ";background-position:100% 50%;background-repeat:no-repeat;cursor:", ";"], function (_ref) {
  var chevron = _ref.chevron;
  return chevron ? css(["url(", ")"], PublicUrl.styledUrl(chevronSvg)) : 'none';
}, function (_ref2) {
  var clickable = _ref2.clickable;
  return clickable ? 'pointer' : 'default';
}));
var TabsWrapper = _styled(extendedAnimated.div).withConfig({
  displayName: "AppBar__TabsWrapper",
  componentId: "sc-11q0awo-5"
})(["position:relative;z-index:1;"]);
function AppBar$1 (props) {
  var theme = useTheme();
  return React.createElement(AppBar, _extends_1({}, props, {
    theme: theme
  }));
}

var _StyledDiv$J = _styled.div.withConfig({
  displayName: "AppView___StyledDiv",
  componentId: "sm6g80-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], function (p) {
  return p.height;
});

var _StyledDiv2$q = _styled.div.withConfig({
  displayName: "AppView___StyledDiv2",
  componentId: "sm6g80-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);

var _StyledDiv3$f = _styled.div.withConfig({
  displayName: "AppView___StyledDiv3",
  componentId: "sm6g80-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);

var _StyledDiv4$a = _styled.div.withConfig({
  displayName: "AppView___StyledDiv4",
  componentId: "sm6g80-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], function (_ref) {
  var padding = _ref.padding;
  return "".concat(padding, "px");
});

function AppView(_ref2) {
  var appBar = _ref2.appBar,
      children = _ref2.children,
      height = _ref2.height,
      padding = _ref2.padding,
      tabs = _ref2.tabs,
      title = _ref2.title,
      props = objectWithoutProperties(_ref2, ["appBar", "children", "height", "padding", "tabs", "title"]);

  // Notify Main that it contains this AppView
  useRegisterAppView();
  return React.createElement(_StyledDiv$J, _extends_1({
    height: height
  }, props), React.createElement(_StyledDiv2$q, null, appBar || React.createElement(AppBar$1, {
    title: title,
    tabs: tabs
  })), React.createElement(_StyledDiv3$f, null, React.createElement(_StyledDiv4$a, {
    padding: padding
  }, children)));
}

AppView.defaultProps = {
  title: '',
  padding: 30,
  height: '100vh'
};
AppView.propTypes = {
  appBar: propTypes.element,
  title: propTypes.string,
  children: propTypes.node,
  padding: propTypes.number,
  height: propTypes.string,
  tabs: propTypes.element
};

function deprecationWarning() {
  warnOnce('Badge', '"Badge" and its variants have been deprecated. Please use "Tag" instead.');
}
/* eslint-disable react/prop-types */


function Badge(_ref) {
  var background = _ref.background,
      foreground = _ref.foreground,
      shape = _ref.shape,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["background", "foreground", "shape", "children"]);

  deprecationWarning();
  return React.createElement(Tag, _extends_1({
    background: background,
    color: foreground,
    size: shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'
  }, props), children);
}

function BadgeNumber(_ref2) {
  var background = _ref2.background,
      children = _ref2.children,
      foreground = _ref2.foreground,
      label = _ref2.label,
      shape = _ref2.shape,
      small = _ref2.small,
      props = objectWithoutProperties(_ref2, ["background", "children", "foreground", "label", "shape", "small"]);

  deprecationWarning();

  if (!children && typeof label === 'number') {
    return React.createElement(Badge, _extends_1({
      limitDigits: true,
      background: background,
      color: foreground,
      label: label,
      size: small ? 'small' : 'normal'
    }, props));
  }

  return React.createElement(Tag, _extends_1({
    count: true,
    background: background,
    color: foreground
  }, props), children || label);
}

function BadgeInfo(props) {
  return React.createElement(BadgeNumber, props);
}

function BadgeIdentity(props) {
  return React.createElement(Badge, _extends_1({}, props, {
    uppercase: false
  }));
}

function BadgeApp(props) {
  return React.createElement(Badge, _extends_1({}, props, {
    mode: "identifier"
  }));
}

function BadgeNotification(props) {
  var theme = useTheme();
  return React.createElement(BadgeNumber, _extends_1({
    background: String(theme.positive),
    foreground: String(theme.positiveContent)
  }, props));
}
/* eslint-enable react/prop-types */


Badge.Info = BadgeInfo;
Badge.Notification = BadgeNotification;
Badge.Identity = BadgeIdentity;
Badge.App = BadgeApp;

var _StyledDiv$K = _styled.div.withConfig({
  displayName: "AutoComplete___StyledDiv",
  componentId: "bpnxyo-0"
})(["position:relative"]);

function AutoComplete(_ref) {
  var forwardedRef = _ref.forwardedRef,
      _ref$itemButtonStyles = _ref.itemButtonStyles,
      itemButtonStyles = _ref$itemButtonStyles === void 0 ? '' : _ref$itemButtonStyles,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      _ref$onSelect = _ref.onSelect,
      onSelect = _ref$onSelect === void 0 ? noop : _ref$onSelect,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? noop : _ref$onChange,
      placeholder = _ref.placeholder,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? identity : _ref$renderItem,
      required = _ref.required,
      value = _ref.value,
      wide = _ref.wide;
  var ref = forwardedRef;
  var uniqueItems = new Set(items);

  var _useState = useState(true),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var wrapRef = useRef();
  var refs = useRef([]);
  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleFocus = useCallback(function () {
    return setOpened(true);
  }, []);
  var handleSelect = useCallback(function (item) {
    onSelect(item);
    setOpened(false);
  }, [onSelect]);
  var handleInputChange = useCallback(function () {
    setOpened(true);
    onChange.apply(void 0, arguments);
  }, [onChange]);

  var _useOnBlur = useOnBlur(handleClose, wrapRef),
      handleBlur = _useOnBlur.handleBlur;

  var _useArrowKeysFocus = useArrowKeysFocus(refs),
      highlightedIndex = _useArrowKeysFocus.highlightedIndex,
      setHighlightedIndex = _useArrowKeysFocus.setHighlightedIndex;

  useClickOutside(handleClose, wrapRef);
  useKeyDown(KEY_ESC, handleClose);
  useEffect(function () {
    setHighlightedIndex(-1);
  }, [opened, items, value, setHighlightedIndex]);
  return React.createElement(_StyledDiv$K, {
    ref: wrapRef,
    onBlur: handleBlur
  }, React.createElement(SearchInput, {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleInputChange,
    onFocus: handleFocus,
    value: value
  }), React.createElement(Transition, {
    config: springs.swift,
    items: opened && items.length > 0,
    from: {
      scale: 0.98,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: 1,
      opacity: 0
    },
    native: true
  }, function (show) {
    return show &&
    /* eslint-disable react/prop-types */
    function (_ref2) {
      var scale = _ref2.scale,
          opacity = _ref2.opacity;
      return React.createElement(Items, {
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (t) {
            return "scale3d(".concat(t, ",").concat(t, ",1)");
          })
        }
      }, Array.from(uniqueItems).map(function (item, index) {
        return React.createElement(Item$2, {
          key: item.key || item,
          ref: function ref(node) {
            return refs.current[index] = node;
          },
          index: index,
          item: item,
          itemButtonStyles: itemButtonStyles,
          onHighlight: setHighlightedIndex,
          onSelect: handleSelect,
          selected: index === highlightedIndex
        }, renderItem(item, value));
      }));
    };
  }
  /* eslint-enable react/prop-types */
  ));
}

AutoComplete.propTypes = {
  forwardedRef: propTypes.object,
  itemButtonStyles: propTypes.string,
  items: propTypes.array.isRequired,
  onSelect: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  renderItem: propTypes.func,
  required: propTypes.bool,
  value: propTypes.string,
  wide: propTypes.bool
};
/* eslint-disable react/prop-types */

var _StyledLi$2 = _styled.li.withConfig({
  displayName: "AutoComplete___StyledLi",
  componentId: "bpnxyo-1"
})(["overflow:hidden;cursor:pointer;", ";"], function (p) {
  return p._css;
});

var _StyledButtonBase$e = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "AutoComplete___StyledButtonBase",
  componentId: "bpnxyo-2"
})(["text-align:left;padding:4px 8px;width:100%;border-radius:0;border-left:3px solid transparent;cursor:pointer;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var Item$2 = React.forwardRef(function Item(_ref3, ref) {
  var children = _ref3.children,
      index = _ref3.index,
      item = _ref3.item,
      itemButtonStyles = _ref3.itemButtonStyles,
      onHighlight = _ref3.onHighlight,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected;
  var theme = useTheme();
  var handleClick = useCallback(function (event) {
    event.preventDefault();
    onSelect(item);
  }, [item, onSelect]);
  var handleFocusOrMouseOver = useCallback(function () {
    onHighlight(index);
  }, [index, onHighlight]);
  return React.createElement(_StyledLi$2, {
    role: "option",
    _css: unselectable()
  }, React.createElement(_StyledButtonBase$e, {
    ref: ref,
    onClick: handleClick,
    onFocus: handleFocusOrMouseOver,
    onMouseOver: handleFocusOrMouseOver,
    _css2: selected ? "\n                outline: 2px solid ".concat(theme.accent, ";\n                background: #f9fafc;\n                border-left: 3px solid ").concat(theme.accent, ";\n              ") : '',
    _css3: itemButtonStyles
  }, children));
});
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */

var _StyledAnimatedUl = _styled(extendedAnimated.ul).withConfig({
  displayName: "AutoComplete___StyledAnimatedUl",
  componentId: "bpnxyo-3"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& > li:first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& > li:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
});

var Items = function Items(props) {
  var theme = useTheme();
  return React.createElement(_StyledAnimatedUl, _extends_1({
    role: "listbox"
  }, props, {
    _css4: theme.surfaceContent,
    _css5: theme.surface,
    _css6: theme.border
  }));
};
/* eslint-enable react/prop-types */


var AutoCompleteMemo = React.memo(AutoComplete);
var AutoComplete$1 = React.forwardRef(function (props, ref) {
  return React.createElement(AutoCompleteMemo, _extends_1({}, props, {
    forwardedRef: ref
  }));
});

var _StyledButtonBase$f = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "AutoCompleteSelected___StyledButtonBase",
  componentId: "sc-15vq9oz-0"
})(["height:40px;width:100%;text-align:left;background:", ";cursor:pointer;border:1px solid ", ";padding:4px 8px;", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

function AutoCompleteSelected(_ref) {
  var forwardedRef = _ref.forwardedRef,
      itemButtonStyles = _ref.itemButtonStyles,
      items = _ref.items,
      onChange = _ref.onChange,
      onSelect = _ref.onSelect,
      _ref$onSelectedClick = _ref.onSelectedClick,
      onSelectedClick = _ref$onSelectedClick === void 0 ? noop : _ref$onSelectedClick,
      placeholder = _ref.placeholder,
      renderItem = _ref.renderItem,
      required = _ref.required,
      _ref$renderSelected = _ref.renderSelected,
      renderSelected = _ref$renderSelected === void 0 ? identity : _ref$renderSelected,
      selected = _ref.selected,
      _ref$selectedButtonSt = _ref.selectedButtonStyles,
      selectedButtonStyles = _ref$selectedButtonSt === void 0 ? '' : _ref$selectedButtonSt,
      value = _ref.value,
      wide = _ref.wide;
  var theme = useTheme();
  var ref = forwardedRef;
  var selectedRef = useRef();
  var handleSelect = useCallback(function (selected) {
    onSelect(selected);
    setTimeout(function () {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  var handleSelectedClick = useCallback(function () {
    onSelectedClick();
    setTimeout(function () {
      if (ref && ref.current) {
        ref.current.select();
        ref.current.focus();
      }
    }, 0);
  }, [ref, onSelectedClick]);

  if (selected) {
    return React.createElement(_StyledButtonBase$f, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      focusRingRadius: RADIUS,
      focusRingSpacing: 1,
      _css: theme.surface,
      _css2: theme.border,
      _css3: selectedButtonStyles
    }, renderSelected(selected));
  }

  return React.createElement(AutoComplete$1, {
    items: items,
    onChange: onChange,
    onSelect: handleSelect,
    placeholder: placeholder,
    ref: ref,
    renderItem: renderItem,
    required: required,
    value: value,
    wide: wide
  });
}

AutoCompleteSelected.propTypes = {
  forwardedRef: propTypes.object,
  itemButtonStyles: propTypes.string,
  items: propTypes.array.isRequired,
  onChange: propTypes.func.isRequired,
  onSelect: propTypes.func.isRequired,
  onSelectedClick: propTypes.func,
  placeholder: propTypes.string,
  renderItem: propTypes.func,
  renderSelected: propTypes.func,
  required: propTypes.bool,
  selected: propTypes.object,
  selectedButtonStyles: propTypes.string,
  value: propTypes.string,
  wide: propTypes.bool
};
var AutoCompleteSelectedMemo = React.memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = React.forwardRef(function (props, ref) {
  return React.createElement(AutoCompleteSelectedMemo, _extends_1({}, props, {
    forwardedRef: ref
  }));
});

export { Accordion, AddressField, AppBadge, AppBar$1 as AppBar, AppView, BREAKPOINTS, BackButton, Badge, BadgeNumber, Bar, BaseStyles$1 as BaseStyles, Box, ButtonWithRef as Button, ButtonBaseWithFocus as ButtonBase, ButtonIcon, ButtonText, Card, CardLayout, CheckBoxWithTheme as Checkbox, CircleGraph, ContextMenu, ContextMenuItem, Countdown, DEFAULT_FONT_FAMILY, DataView, DateRangePicker, DiscButton, Distribution, DropDown, EmptyStateCard, EscapeOutside, EthIdenticon, ExternalLink, Field, FloatIndicator, FocusVisible, GU, Header, Help, IconCirclePlus as IconAdd, IconAddUser, IconAlert, IconAlignCenter, IconAlignJustify, IconAlignLeft, IconAlignRight, IconGrid as IconApps, IconAragon, IconArrowDown, IconArrowLeft, IconArrowRight, IconArrowUp, IconAtSign, IconCaution as IconAttention, IconFile as IconBlank, IconBlock, IconBookmark, IconInfo as IconBylaw, IconCalendar, IconCanvas, IconCaution, IconCenter, IconChart, IconChat, IconCheck, IconChip, IconCircleCheck, IconCircleMinus, IconCirclePlus, IconClock, IconCross as IconClose, IconCloudDownload, IconCloudUpload, IconCoin, IconConfiguration, IconConnect, IconConnection, IconCopy, IconCross, IconDashedSquare, IconDown, IconDownload, IconEdit, IconEllipsis, IconWarning as IconError, IconEthereum, IconExternal, IconFile, IconFilter, IconFlag, IconFolder, IconCoin as IconFundraising, IconGraph, IconGraph2, IconGrid, IconGroup, IconHash, IconHeart, IconHide, IconHome, IconAddUser as IconIdentity, IconImage, IconInfo, IconLabel, IconLayers, IconLeft, IconLink, IconLocation, IconLock, IconMail, IconMaximize, IconMenu, IconMinimize, IconMinus, IconMove, IconNoPicture, IconAlert as IconNotifications, IconInfo as IconPermissions, IconPicture, IconPlus, IconPower, IconPrint, IconProhibited, IconQuestion, IconRefresh, IconCircleMinus as IconRemove, IconRemoveUser, IconRight, IconRotateLeft, IconRotateRight, IconSearch, IconSettings, IconShare, IconSquare, IconSquareMinus, IconSquarePlus, IconStar, IconStarFilled, IconTarget, IconClock as IconTime, IconToken, IconTrash, IconUnlock, IconUp, IconUpload, IconUser, IconView, IconVote, IconWallet, IconWarning, IconWorld, IconWrite, IconZoomIn, IconZoomOut, IdentityBadge, ImageExists, Info, Inside, KEY_DOWN, KEY_ENTER, KEY_ESC, KEY_UP, Layout, LineChart, Link, LinkBase, LoadingRing, MONOSPACE_FONT_FAMILY, Main$4 as Main, MainTheme, Modal, NavigationBar, Pagination, PartitionBar, Popover, ProgressBar, PublicUrl, RADIUS, Radio, Radio as RadioButton, RadioGroup, RadioList, Redraw, RedrawFromDate, Root, RootPortal, SafeLink, ScrollView, SearchInput, SidePanel, SidePanelSeparator, SidePanelSplit, Slider$1 as Slider, Split, Switch, SyncIndicator, TEXT_STYLES, TabBarLegacyCompatibility as TabBar, Table, TableCell, TableHeader, StyledTableRow as TableRow, Tabs, Tag, Text, TextCopy, WrapperTextInput as TextInput, Theme, Timer$1 as Timer, Toast, ToastHubProvider as ToastHub, TokenBadge, TransactionBadge, TransactionProgress, Viewport, AutoComplete$1 as _AutoComplete, AutoCompleteSelected$1 as _AutoCompleteSelected, addressesEqual, blockExplorerUrl, brand, breakpoint, colors$3 as colors, cssPx, devOnly, difference, eachDayOfInterval, font, formatHtmlDatetime, formatIntegerRange, forwardProps, identity, initContainsComponent, isAddress, isTransaction, log, monospace, noop, observe, pick, shortenAddress, shortenTransaction, springs, stylingProps, textStyle, theme, themeDark, tokenIconUrl, unselectable, useArrowKeysFocus, useClickOutside, useContainsAppView, useImageExists, useInside, useKeyDown, useLayout, useOnBlur, useRoot, useSidePanel, useSidePanelFocusOnReady, useTheme, useThemeMode, useToast, useViewport, warn, warnOnce };
//# sourceMappingURL=index.esm.js.map
