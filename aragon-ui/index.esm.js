import ReactDOM from 'react-dom';
import styled, { css, createGlobalStyle, keyframes } from 'styled-components';
import React, { useEffect, useMemo, useState as useState$1, useCallback, useRef, useImperativeHandle } from 'react';

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

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
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

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = module.exports;

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
  runtime.wrap = wrap;

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

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
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
  runtime.awrap = function(arg) {
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
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
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
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
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
        context.arg = undefined;
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

  runtime.keys = function(object) {
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

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
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
          context.arg = undefined;
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
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;

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
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
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

var checkPropTypes_1 = checkPropTypes;

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
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (propValue.hasOwnProperty(key)) {
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
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}

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
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
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
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
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
var cancelFrame = function cancelFrame(cb) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
};
var interpolation = undefined;
var now = function now() {
  return Date.now();
};
var defaultElement = undefined;
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
var injectFrame = function injectFrame(raf, caf) {
  var _ref;

  return _ref = [raf, caf], requestFrame = _ref[0], cancelFrame = _ref[1], _ref;
};
var injectNow = function injectNow(nowFn) {
  return now = nowFn;
};
var injectDefaultElement = function injectDefaultElement(el) {
  return defaultElement = el;
};
var injectCreateAnimatedStyle = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle = factory;
};

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

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
var colors = {
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
  if (colors.hasOwnProperty(color)) return colors[color];

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

var colorNamesRegex = new RegExp("(" + Object.keys(colors).join('|') + ")", 'g');
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
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
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
  var time = now();

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

    this.startTime = now();
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

// This module exports a `springs` object and a `spring()` function:
//
//   - `spring()` is deprecated and will be removed in the future (react-motion).
//   - `springs` should be used from now on (react-spring).
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
    mass: 0.7,
    tension: 300,
    friction: 25
  },
  // Fast speed spring, for interactions that feel “almost instant”.
  swift: {
    mass: 0.5,
    tension: 800,
    friction: 30
  },
  // Super fast speed spring, for interactions that feel instant (e.g. a
  // checkbox tick).
  instant: {
    mass: 0.3,
    tension: 1000,
    friction: 30
  } // Deprecated react-motion springs (see above)

};
var reactMotionSprings = {
  slow: {
    stiffness: 150,
    friction: 18
  },
  normal: {
    stiffness: 190,
    friction: 22
  },
  fast: {
    stiffness: 220,
    friction: 24
  }
};
var spring = function spring(name) {
  if (process.env.NODE_ENV === 'development') {
    console.warn('Using spring(name) with react-motion is deprecated. ' + 'Please use springs[name] with react-spring instead.');
  }

  return reactMotionSprings[name] || reactMotionSprings.normal;
};

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
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

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,n){module.exports=n();}(commonjsGlobal,function(){var t="millisecond",n="second",e="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,n,e){var r=String(t);return !r||r.length>=n?t:""+Array(n+1-r.length).join(e)+t},d={s:c,z:function(t){var n=-t.utcOffset(),e=Math.abs(n),r=Math.floor(e/60),i=e%60;return (n<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,n){var e=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(e,u),i=n-r<0,s=t.clone().add(e+(i?-1:1),u);return Number(-(e+(n-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,h:r,m:e,s:n,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,n,e){var r;if(!t)return null;if("string"==typeof t)m[t]&&(r=t),n&&(m[t]=n,r=t);else{var i=t.name;m[i]=t,r=i;}return e||(l=r),r},g=function(t,n,e){if(y(t))return t.clone();var r=n?"string"==typeof n?{format:n,pl:e}:n:{};return r.date=t,new v(r)},D=d;D.l=M,D.i=y,D.w=function(t,n){return g(t,{locale:n.$L,utc:n.$u})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0)||l,this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var n=t.date,e=t.utc;if(null===n)return new Date(NaN);if(D.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var r=n.match(h);if(r)return e?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(n)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,n){var e=g(t);return this.startOf(n)<=e&&e<=this.endOf(n)},d.isAfter=function(t,n){return g(t)<this.startOf(n)},d.isBefore=function(t,n){return this.endOf(n)<g(t)},d.$g=function(t,n,e){return D.u(t)?this[n]:this.set(e,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",e)},d.second=function(t){return this.$g(t,"$s",n)},d.millisecond=function(n){return this.$g(n,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,n){var e=D.w(h.$u?Date.UTC(h.$y,n,t):new Date(h.$y,n,t),h);return f?e:e.endOf(i)},$=function(t,n){return D.w(h.toDate()[t].apply(h.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(n)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case e:return $(M+"Seconds",2);case n:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[e]=c+"Minutes",h[n]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,n){return this.clone().$set(t,n)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(n){var e=g(f);return D.w(e.date(e.date()+Math.round(n*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[e]=6e4,h[r]=36e5,h[n]=1e3,h)[c]||1,l=this.valueOf()+t*$;return D.w(l,this)},d.subtract=function(t,n){return this.add(-1*t,n)},d.format=function(t){var n=this;if(!this.isValid())return "Invalid Date";var e=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(n,e))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,n,e){var r=t<12?"AM":"PM";return e?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:h[o]||h(this,e),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return e.replace(f,function(t,n){return n||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[e]=m/6e4,c[n]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,n){if(!t)return this.$L;var e=this.clone();return e.$L=M(t,n,!0),e},d.clone=function(){return D.w(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,n){return t(n,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
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
    return UNITS.concat().reverse().find(function (_ref) {
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

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction$1 = function emptyFunction() {};

emptyFunction$1.thatReturns = makeEmptyFunction;
emptyFunction$1.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction$1.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction$1.thatReturnsNull = makeEmptyFunction(null);
emptyFunction$1.thatReturnsThis = function () {
  return this;
};
emptyFunction$1.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning$2 = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
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

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning$2.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable$1 = Object.prototype.propertyIsEnumerable;

function toObject$1(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative$1() {
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

var objectAssign$1 = shouldUseNative$1() ? Object.assign : function (target, source) {
	var from;
	var to = toObject$1(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable$1.call(from, symbols[i])) {
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

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$2;

if (process.env.NODE_ENV !== 'production') {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1$1 = ReactPropTypesSecret_1$1;
  var loggedTypeFailures$1 = {};
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
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$1[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1$1 = checkPropTypes$1;

var factoryWithTypeCheckers$1 = function(isValidElement, throwOnDirectAccess) {
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

      if (secret !== ReactPropTypesSecret_1$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
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
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$1);
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
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
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
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$1) == null) {
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
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
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
      var allKeys = objectAssign$1({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
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

  ReactPropTypes.checkPropTypes = checkPropTypes_1$1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var factoryWithThrowingShims$1 = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1$1) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
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
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes$1 = createCommonjsModule$1(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers$1(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims$1();
}
});

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant$3 = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1$2 = invariant$3;

var camel2hyphen = function (str) {
  return str
          .replace(/[A-Z]/g, function (match) {
            return '-' + match.toLowerCase();
          })
          .toLowerCase();
};

var camel2hyphen_1 = camel2hyphen;

var isDimension = function (feature) {
  var re = /[height|width]$/;
  return re.test(feature);
};

var obj2mq = function (obj) {
  var mq = '';
  var features = Object.keys(obj);
  features.forEach(function (feature, index) {
    var value = obj[feature];
    feature = camel2hyphen_1(feature);
    // Add px to dimension features
    if (isDimension(feature) && typeof value === 'number') {
      value = value + 'px';
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += 'not ' + feature;
    } else {
      mq += '(' + feature + ': ' + value + ')';
    }
    if (index < features.length-1) {
      mq += ' and ';
    }
  });
  return mq;
};

var json2mq = function (query) {
  var mq = '';
  if (typeof query === 'string') {
    return query;
  }
  // Handling array of media queries
  if (query instanceof Array) {
    query.forEach(function (q, index) {
      mq += obj2mq(q);
      if (index < query.length-1) {
        mq += ', ';
      }
    });
    return mq;
  }
  // Handling single media query
  return obj2mq(query);
};

var json2mq_1 = json2mq;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};











var inherits$1 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn$1 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * Conditionally renders based on whether or not a media query matches.
 */

var Media = function (_React$Component) {
  inherits$1(Media, _React$Component);

  function Media() {
    var _temp, _this, _ret;

    classCallCheck$1(this, Media);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      matches: _this.props.defaultMatches
    }, _this.updateMatches = function () {
      return _this.setState({ matches: _this.mediaQueryList.matches });
    }, _temp), possibleConstructorReturn$1(_this, _ret);
  }

  Media.prototype.componentWillMount = function componentWillMount() {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object") return;

    var targetWindow = this.props.targetWindow || window;

    invariant_1$2(typeof targetWindow.matchMedia === "function", "<Media targetWindow> does not support `matchMedia`.");

    var query = this.props.query;

    if (typeof query !== "string") query = json2mq_1(query);

    this.mediaQueryList = targetWindow.matchMedia(query);
    this.mediaQueryList.addListener(this.updateMatches);
    this.updateMatches();
  };

  Media.prototype.componentWillUnmount = function componentWillUnmount() {
    this.mediaQueryList.removeListener(this.updateMatches);
  };

  Media.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;
    var matches = this.state.matches;


    return render ? matches ? render() : null : children ? typeof children === "function" ? children(matches) : !Array.isArray(children) || children.length // Preact defaults to empty children array
    ? matches ? React.Children.only(children) : null : null : null;
  };

  return Media;
}(React.Component);

Media.propTypes = {
  defaultMatches: propTypes$1.bool,
  query: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.object, propTypes$1.arrayOf(propTypes$1.object.isRequired)]).isRequired,
  render: propTypes$1.func,
  children: propTypes$1.oneOfType([propTypes$1.node, propTypes$1.func]),
  targetWindow: propTypes$1.object
};
Media.defaultProps = {
  defaultMatches: true
};

var BREAKPOINTS = {
  min: 320,
  small: 540,
  medium: 768,
  large: 1170 // CSS breakpoints

};
var breakpoint = function breakpoint(name, styles) {
  return css(["@media (min-width:", "px){", ";}"], BREAKPOINTS[name], styles);
}; // Rendering breakpoints

var BreakPoint = function BreakPoint(_ref) {
  var from = _ref.from,
      to = _ref.to,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["from", "to", "children"]);

  var names = Object.keys(BREAKPOINTS);
  var query = {};

  if (from && names.includes(from)) {
    query.minWidth = BREAKPOINTS[from];
  }

  if (to && names.includes(to)) {
    query.maxWidth = BREAKPOINTS[to] - 1;
  }

  return React.createElement(Media, _extends_1({
    query: query,
    defaultMatches: false
  }, props), function (ok) {
    return ok ? children : null;
  });
};
var BreakPointName = propTypes.oneOf(toConsumableArray(Object.keys(BREAKPOINTS)).concat(['']));
BreakPoint.propTypes = {
  from: BreakPointName,
  to: BreakPointName,
  children: propTypes.node
};
BreakPoint.defaultProps = {
  to: '',
  from: ''
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
  return monospace ? "\n      font-family: aragon-ui-monospace, monospace;\n    " : '';
};

var font = function font(_ref) {
  var size = _ref.size,
      weight = _ref.weight,
      _ref$smallcaps = _ref.smallcaps,
      smallcaps = _ref$smallcaps === void 0 ? false : _ref$smallcaps,
      _ref$monospace = _ref.monospace,
      monospace = _ref$monospace === void 0 ? false : _ref$monospace;
  return "\n    ".concat(fontSizeCss(size), ";\n    ").concat(weightCss(weight), ";\n    ").concat(smallcapsCss(smallcaps), ";\n    ").concat(monospaceCss(monospace), ";\n  ");
};

var GRID = {
  columns: 12,
  gutterWidth: 30,
  columnWidth: 68
};
var grid = function grid(cols) {
  var gutters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cols - 1;
  return GRID.columnWidth * cols + GRID.gutterWidth * gutters;
};

var unselectable = function unselectable() {
  return "\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n";
};

function noop() {}
function identity(x) {
  return x;
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
});

var TRANSACTION_REGEX = /^0x[A-Fa-f0-9]{64}$/;
var ADDRESS_REGEX = /^0x[0-9a-fA-F]{40}$/;
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
  /**
   * Check address equality without checksums
   * @param {string} first First address
   * @param {string} second Second address
   * @returns {boolean} Address equality
   */

};
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
 * @param {string} address The contract address of the token.
 * @return {string} The generated URL, or an empty string if the parameters are invalid.
 */

function tokenIconUrl() {
  var address = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  address = address.trim();
  return address ? "https://raw.githubusercontent.com/TrustWallet/tokens/master/tokens/".concat(address, ".png") : '';
}

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

/* eslint-disable prettier/prettier */

var Text = styled.span.withConfig({
  displayName: "Text",
  componentId: "yxw4o9-0"
})(["", ";", ";"], function (_ref) {
  var size = _ref.size,
      weight = _ref.weight,
      smallcaps = _ref.smallcaps,
      monospace = _ref.monospace;
  return font({
    size: size,
    weight: weight,
    smallcaps: smallcaps,
    monospace: monospace
  });
}, function (_ref2) {
  var color = _ref2.color;
  return color ? "color: ".concat(color) : '';
});

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
  size: propTypes.string,
  smallcaps: propTypes.bool,
  weight: propTypes.string,
  monospace: propTypes.bool
};
Text.Block = Block;
Text.Paragraph = Paragraph;

var id = 0;

var move = function move(pixel) {
  return "translate3d(0,".concat(pixel, "px,0)");
};

var _React$createContext = React.createContext(function () {
  throw new Error("For Toast to work it needs to be part of a ToastHub's tree, which has to be declared at an upper level!");
}),
    Provider = _React$createContext.Provider,
    Toast = _React$createContext.Consumer;

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      items: [],
      leaving: []
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "cancelMap", new WeakMap());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "add", function (msg) {
      var threshold = _this.props.threshold;

      _this.setState(function (state) {
        // This calls cancel on all leaving animations that stack up too much
        if (threshold !== Infinity) state.leaving.slice(threshold - 1).forEach(function (item) {
          return _this.cancel(item, true);
        });
        return {
          items: toConsumableArray(state.items).concat([{
            key: id++,
            msg: msg
          }])
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "remove", function (item) {
      return _this.setState(function (state) {
        return {
          items: state.items.filter(function (i) {
            return i.key !== item.key;
          }),
          leaving: [item].concat(toConsumableArray(state.leaving))
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "config", function (item, state) {
      var config$$1 = springs.lazy; // Return custom configs on leave (includes the life-line duration)

      return state === 'leave' ? [{
        duration: _this.props.timeout
      }, config$$1, config$$1] : config$$1;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "cancel", function (item) {
      var secondPass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (_this.cancelMap.has(item)) {
        var fn = _this.cancelMap.get(item);

        fn(); // There are 3 passes: lifeline, opacity->0, height->0

        if (secondPass) fn();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "leave", function (item) {
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
            }, _callee, this);
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
          top = _this$props.top;
      return React.createElement(React.Fragment, null, React.createElement(Provider, {
        value: this.add,
        children: children
      }), React.createElement(ToastList, _extends_1({
        config: this.config,
        items: this.state.items,
        leave: this.leave,
        position: position,
        remove: this.remove,
        showIndicator: showIndicator,
        top: top
      }, stylingProps(this))));
    }
  }]);

  return ToastHubProvider;
}(React.PureComponent); // ToastList is separated from ToastHubProvider so we can skip its rendering


defineProperty(ToastHubProvider, "propTypes", {
  children: propTypes.node,
  position: propTypes.PropTypes.oneOf(['left', 'center', 'right']),
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
  var config$$1 = _ref2.config,
      items = _ref2.items,
      leave = _ref2.leave,
      position = _ref2.position,
      remove = _ref2.remove,
      showIndicator = _ref2.showIndicator,
      top = _ref2.top,
      props = objectWithoutProperties(_ref2, ["config", "items", "leave", "position", "remove", "showIndicator", "top"]);

  return React.createElement(Container, _extends_1({
    position: position,
    top: top
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
    config: config$$1
  }, function (item) {
    return (
      /* eslint-disable react/prop-types */
      function (_ref3) {
        var life = _ref3.life,
            props = objectWithoutProperties(_ref3, ["life"]);

        return React.createElement(Message, {
          style: props
        }, React.createElement(Content, {
          top: top
        }, showIndicator && React.createElement(Life, {
          top: top,
          style: {
            right: life
          }
        }), React.createElement(Text.Paragraph, null, item.msg)));
      }
    );
  }
  /* eslint-enable react/prop-types */
  ));
});
ToastList.propTypes = {
  showIndicator: propTypes.bool,
  position: propTypes.PropTypes.oneOf(['left', 'center', 'right']),
  top: propTypes.bool,
  config: propTypes.func,
  items: propTypes.array,
  leave: propTypes.func,
  remove: propTypes.func
};
var Container = styled.div.withConfig({
  displayName: "ToastHub__Container",
  componentId: "sc-1y0i8xl-0"
})(["position:fixed;z-index:1000;top:", ";bottom:", ";margin:0 auto;left:30px;right:30px;display:flex;flex-direction:", ";pointer-events:none;align-items:center;@media (min-width:700px){align-items:", ";}"], function (props) {
  return props.top ? '30px' : 'unset';
}, function (props) {
  return props.top ? 'unset' : '30px';
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
var Message = styled(extendedAnimated.div).withConfig({
  displayName: "ToastHub__Message",
  componentId: "sc-1y0i8xl-1"
})(["box-sizing:border-box;position:relative;width:100%;@media (min-width:700px){width:42ch;}"]);
var Content = styled.div.withConfig({
  displayName: "ToastHub__Content",
  componentId: "sc-1y0i8xl-2"
})(["color:white;background:#445159;opacity:0.9;margin-top:", ";margin-bottom:", ";padding:12px 22px;font-size:1em;display:grid;grid-template-columns:1fr;grid-gap:10px;border-radius:3px;overflow:hidden;"], function (props) {
  return props.top ? '0' : '10px';
}, function (props) {
  return props.top ? '10px' : '0';
});
var Life = styled(extendedAnimated.div).withConfig({
  displayName: "ToastHub__Life",
  componentId: "sc-1y0i8xl-3"
})(["position:absolute;bottom:", ";left:0px;width:auto;background-image:linear-gradient(130deg,#00b4e6,#00f0e0);height:5px;"], function (props) {
  return props.top ? '10px' : '0';
});

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

var Add = function Add(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M11 4.744c1.216 0 2.341.304 3.376.912a6.308 6.308 0 0 1 2.368 2.368 6.546 6.546 0 0 1 .912 3.376 6.546 6.546 0 0 1-.912 3.376 6.308 6.308 0 0 1-2.368 2.368 6.546 6.546 0 0 1-3.376.912 6.546 6.546 0 0 1-3.376-.912 6.428 6.428 0 0 1-2.368-2.384 6.517 6.517 0 0 1-.912-3.36c0-1.205.304-2.325.912-3.36A6.55 6.55 0 0 1 7.64 5.656 6.517 6.517 0 0 1 11 4.744z",
    stroke: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M11.656 8.056v2.688h2.688v1.312h-2.688v2.688h-1.312v-2.688H7.656v-1.312h2.688V8.056z"
  })));
};

var Apps = function Apps(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M4.157 3.07C3.523 3.07 3 3.592 3 4.226v5.012c0 .635.523 1.157 1.157 1.157h5.012c.634 0 1.156-.522 1.156-1.157V4.226c0-.634-.522-1.156-1.156-1.156H4.157zm8.482 0c-.635 0-1.157.522-1.157 1.156v5.012c0 .635.522 1.157 1.157 1.157h5.012c.634 0 1.156-.522 1.156-1.157V4.226c0-.634-.522-1.156-1.156-1.156h-5.012zm-8.482.77h5.012c.22 0 .385.166.385.386v5.012c0 .22-.165.386-.385.386H4.157a.377.377 0 0 1-.386-.386V4.226c0-.22.165-.385.386-.385zm8.482 0h5.012c.22 0 .385.166.385.386v5.012c0 .22-.165.386-.385.386h-5.012a.377.377 0 0 1-.386-.386V4.226c0-.22.165-.385.386-.385zm2.463 7.706a.386.386 0 0 0-.343.391v2.892h-2.892a.386.386 0 1 0 0 .77h2.892v2.893a.386.386 0 1 0 .771 0V15.6h2.892a.386.386 0 1 0 0-.771H15.53v-2.892a.386.386 0 0 0-.428-.391zm-10.945.006c-.634 0-1.157.522-1.157 1.156v5.012c0 .635.523 1.157 1.157 1.157h5.012c.634 0 1.156-.522 1.156-1.157v-5.012c0-.634-.522-1.156-1.156-1.156H4.157zm0 .77h5.012c.22 0 .385.166.385.386v5.012c0 .22-.165.386-.385.386H4.157a.377.377 0 0 1-.386-.386v-5.012c0-.22.165-.385.386-.385z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
};

var ArrowDown = function ArrowDown(props) {
  return React.createElement("svg", _extends_1({
    width: 9,
    height: 5,
    viewBox: "0 0 9 5"
  }, props), React.createElement("path", {
    d: "M0 0h8.36L4.18 4.18z",
    fill: "currentColor",
    fillRule: "evenodd"
  }));
};

var ArrowRight = function ArrowRight(props) {
  return React.createElement("svg", _extends_1({
    width: 12,
    height: 19,
    viewBox: "0 0 12 19",
    fill: "none"
  }, props), React.createElement("path", {
    d: "M1.613 1L10.5 8.988m-9.049 8.779l9-8.795",
    stroke: "currentColor"
  }));
};

var Attention = function Attention(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    transform: "translate(4 4)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    fill: "#DAEAEF",
    width: 14,
    height: 14,
    rx: 7
  }), React.createElement("path", {
    d: "M6.155 8.547h1.298V3.3H6.155v5.247zM6.045 11h1.529V9.537H6.045V11z",
    fill: "#6D777B"
  })));
};

var Blank = function Blank(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("path", {
    d: "M17.155 2.375H4.845a.357.357 0 0 0-.345.345v16.559c0 .181.163.345.345.345h9.768c.09 0 .2-.037.254-.11l2.542-2.85a.345.345 0 0 0 .091-.236V2.72a.357.357 0 0 0-.345-.345zm-11.965.69h11.62v12.637h-2.25a.69.69 0 0 0-.69.69v2.542H5.19V3.064v.001zm9.369 15.742v-2.433h2.16l-2.16 2.433z",
    fill: "currentColor"
  }));
};

var Bylaw = function Bylaw(props) {
  return React.createElement("svg", _extends_1({
    width: 17,
    height: 16,
    viewBox: "0 0 17 16"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M-2-2h22v22H-2z"
  }), React.createElement("g", {
    opacity: 0.8,
    stroke: "currentColor"
  }, React.createElement("path", {
    d: "M9.036 1.143L1.578 4.357V5.43h14.916V4.357L9.036 1.143zm6.88 12.393H2.071c-.318 0-.577.242-.577.535v1.072h15V14.07c0-.293-.26-.535-.578-.535z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M3 5v8.034M6 5v8.275M9 5v8.034M12 5v8.275M15 5v8.275"
  }))));
};

var Check = function Check(props) {
  return React.createElement("svg", _extends_1({
    width: 14,
    height: 10,
    viewBox: "0 0 14 10"
  }, props), React.createElement("path", {
    d: "M4.176 7.956L12.114 0l1.062 1.062-9 9L0 5.886l1.044-1.062z",
    fill: "#21D48E",
    fillRule: "evenodd"
  }));
};

var Close = function Close(props) {
  return React.createElement("svg", _extends_1({
    width: 10,
    height: 10
  }, props), React.createElement("path", {
    d: "M10 1.014L6.014 5 10 8.986 8.986 10 5 6.014 1.014 10 0 8.986 3.986 5 0 1.014 1.014 0 5 3.986 8.986 0z",
    fill: "#6D777B",
    fillRule: "evenodd",
    opacity: 0.7
  }));
};

var Copy = function Copy(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("path", {
    d: "M12.263 5.806H6.651A1.66 1.66 0 0 0 5 7.457v9.892A1.66 1.66 0 0 0 6.651 19h5.612a1.66 1.66 0 0 0 1.652-1.651V7.457c0-.923-.746-1.651-1.652-1.651zm.994 11.525c0 .55-.443.994-.994.994H6.651a.993.993 0 0 1-.994-.994V7.457c0-.55.444-.994.994-.994h5.612c.55 0 .994.444.994.994v9.874zM16.72 4.65v9.892a1.66 1.66 0 0 1-1.651 1.651.337.337 0 0 1-.338-.337c0-.196.142-.338.338-.338.55 0 .994-.444.994-.994V4.651a.993.993 0 0 0-.994-.994H9.457a.993.993 0 0 0-.994.994.337.337 0 0 1-.338.338.327.327 0 0 1-.337-.338A1.688 1.688 0 0 1 9.458 3h5.61a1.66 1.66 0 0 1 1.652 1.651z",
    fill: "currentColor"
  }));
};

var Cross = function Cross(props) {
  return React.createElement("svg", _extends_1({
    width: 11,
    height: 11,
    viewBox: "0 0 11 11"
  }, props), React.createElement("path", {
    d: "M10.476 1.524L6.3 5.7l4.176 4.176-1.062 1.062-4.176-4.176-4.176 4.176L0 9.876 4.176 5.7 0 1.524 1.062.462l4.176 4.176L9.414.462z",
    fill: "#FB7777",
    fillRule: "evenodd"
  }));
};

var Ellipsis = function Ellipsis(props) {
  return React.createElement("svg", _extends_1({
    width: 15,
    height: 4,
    viewBox: "0 0 15 4"
  }, props), React.createElement("path", {
    d: "M7.5 3.213a1.42 1.42 0 0 1-.974-.37c-.278-.248-.418-.588-.418-1.021 0-.384.135-.71.404-.979S7.11.439 7.5.439s.722.135.997.404c.276.27.413.595.413.979 0 .439-.142.78-.427 1.025a1.465 1.465 0 0 1-.983.366zm-5.327 0c-.371 0-.694-.122-.97-.366C.928 2.603.791 2.26.791 1.822c0-.39.133-.718.398-.984.266-.266.594-.399.984-.399s.722.135.997.404c.275.27.413.595.413.979 0 .439-.142.78-.427 1.025a1.465 1.465 0 0 1-.983.366zm10.654 0c-.365 0-.688-.123-.97-.37-.28-.248-.421-.588-.421-1.021 0-.384.134-.71.403-.979.27-.269.598-.404.988-.404s.722.135.997.404c.276.27.413.595.413.979 0 .433-.14.773-.422 1.02a1.45 1.45 0 0 1-.988.371z",
    fill: "currentColor",
    fillRule: "evenodd"
  }));
};

var Error$1 = function Error(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    transform: "translate(4 4)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("rect", {
    fill: "#FF445D",
    width: 14,
    height: 14,
    rx: 7
  }), React.createElement("path", {
    d: "M6.155 8.547h1.298V3.3H6.155v5.247zM6.045 11h1.529V9.537H6.045V11z",
    fill: "#FFF"
  })));
};

var Filter = function Filter(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22",
    fill: "none"
  }, props), React.createElement("path", {
    d: "M13.421 6.667h-9.79C3.275 6.667 3 6.377 3 6c0-.378.274-.667.632-.667h9.79C13.694 4.556 14.388 4 15.21 4c.822 0 1.537.556 1.79 1.333h1.368c.358 0 .632.29.632.667 0 .378-.274.667-.632.667H17C16.726 7.444 16.032 8 15.21 8c-.82 0-1.536-.556-1.789-1.333zM19 11c0 .378-.274.667-.632.667h-9.79C8.327 12.444 7.612 13 6.79 13c-.82 0-1.516-.556-1.79-1.333H3.632c-.358 0-.632-.29-.632-.667 0-.378.274-.667.632-.667H5C5.253 9.556 5.968 9 6.79 9c.82 0 1.515.556 1.789 1.333h9.79c.357 0 .631.29.631.667zm-.632 4.333H12.79C12.537 14.556 11.821 14 11 14c-.821 0-1.516.556-1.79 1.333H3.633c-.358 0-.632.29-.632.667 0 .378.274.667.632.667H9.21C9.463 17.444 10.179 18 11 18c.821 0 1.516-.556 1.79-1.333h5.578c.358 0 .632-.29.632-.667 0-.378-.274-.667-.632-.667z",
    fill: "currentColor"
  }));
};

var Fundraising = function Fundraising(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("g", {
    stroke: "currentColor"
  }, React.createElement("path", {
    d: "M6 12.26C6.402 13.75 9.137 15 12.475 15 16.089 15 19 13.534 19 11.875c0-.886-1.07-1.903-2.967-2.357",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M16 6.88C16 8.536 13.1 10 9.5 10S3 8.536 3 6.88C3 5.224 5.9 4 9.5 4S16 5.224 16 6.88"
  }), React.createElement("path", {
    d: "M6 12v2c0 1.667 2.9 3 6.5 3s6.5-1.333 6.5-3v-2c0 1.643-2.9 3.095-6.5 3.095S6 13.643 6 12z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M9.5 10.095C5.9 10.095 3 8.643 3 7v2c0 1.667 2.9 3 6.5 3S16 10.667 16 9V7c0 1.643-2.9 3.095-6.5 3.095"
  }))));
};

var Groups = function Groups(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M14.928 16.169l.395.22c.264.146.396.337.396.571v1.186a.753.753 0 0 1-.235.564.773.773 0 0 1-.556.227H4.79a.773.773 0 0 1-.557-.227.753.753 0 0 1-.234-.564V16.96c0-.215.132-.4.396-.557l.395-.234 3.032-1.64c-.556-.44-.942-1.026-1.157-1.758-.215-.733-.322-1.314-.322-1.744V9.05c0-.332.102-.662.307-.989.205-.327.474-.623.806-.886.332-.264.71-.479 1.135-.645a3.497 3.497 0 0 1 1.282-.249c.44 0 .87.083 1.29.25.419.165.793.38 1.12.644.327.263.59.559.79.886.2.327.301.657.301.989v1.977c0 .479-.095 1.075-.286 1.787-.19.713-.559 1.29-1.106 1.729l2.945 1.626zM14.78 18v-.835a.391.391 0 0 0-.102-.073l-.117-.059a.071.071 0 0 1-.037-.014.479.479 0 0 0-.051-.03l-2.945-1.626a.99.99 0 0 1-.337-.315.863.863 0 0 1-.146-.432.856.856 0 0 1 .066-.454.913.913 0 0 1 .285-.366c.4-.313.674-.76.82-1.34.147-.581.22-1.058.22-1.429V9.05c0-.342-.256-.733-.769-1.172a2.672 2.672 0 0 0-1.794-.66c-.664 0-1.262.22-1.794.66-.533.44-.799.83-.799 1.172v1.977c0 .371.088.848.264 1.429.176.58.464 1.027.864 1.34.117.098.208.22.271.366a.856.856 0 0 1 .066.454.863.863 0 0 1-.146.432.865.865 0 0 1-.337.3L5.23 17.005a.06.06 0 0 0-.029.007.115.115 0 0 0-.03.022.432.432 0 0 0-.124.059l-.11.073V18h9.844zm3.428-4.16l.395.22c.264.146.396.336.396.57v1.173a.753.753 0 0 1-.234.564.773.773 0 0 1-.557.227h-1.553a5.372 5.372 0 0 0-.183-.542.952.952 0 0 0-.3-.396h1.89v-.835a4.202 4.202 0 0 0-.103-.066.408.408 0 0 0-.117-.05.092.092 0 0 0-.037-.023.402.402 0 0 1-.051-.022l-2.988-1.626a.99.99 0 0 1-.337-.315.863.863 0 0 1-.147-.432.856.856 0 0 1 .066-.454.913.913 0 0 1 .286-.366c.4-.322.68-.774.842-1.355.161-.581.242-1.052.242-1.414V6.721c0-.352-.264-.747-.791-1.187a2.756 2.756 0 0 0-1.817-.659 2.981 2.981 0 0 0-1.787.6 2.301 2.301 0 0 0-.586-.102l-.6-.03c.341-.4.78-.737 1.318-1.01a3.608 3.608 0 0 1 1.655-.41c.44 0 .872.085 1.297.256a4.52 4.52 0 0 1 1.135.652c.332.264.6.562.806.894.205.332.307.664.307.996v1.977c0 .469-.102 1.062-.307 1.78-.205.718-.581 1.292-1.128 1.721l2.988 1.64z",
    fill: "currentColor"
  })));
};

var Home = function Home(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("path", {
    d: "M17.884 9.993c.08.085.121.198.115.314a.484.484 0 0 1-.129.312.667.667 0 0 1-.143.09.375.375 0 0 1-.157.033c-.06 0-.12-.01-.176-.033a.338.338 0 0 1-.137-.103l-.586-.614v6.53a.419.419 0 0 1-.13.307.419.419 0 0 1-.307.13h-3.052a.419.419 0 0 1-.307-.13.419.419 0 0 1-.13-.307V12.16H9.268l-.014 4.362a.419.419 0 0 1-.13.307.419.419 0 0 1-.307.13H5.78a.43.43 0 0 1-.437-.437V9.993l-.586.613a.484.484 0 0 1-.314.13.428.428 0 0 1-.312-.117.484.484 0 0 1-.13-.312.428.428 0 0 1 .116-.314L10.7 3.135a.463.463 0 0 1 .15-.102.456.456 0 0 1 .34 0 .339.339 0 0 1 .137.102l6.557 6.858zM15.8 9.147c0-.019.003-.036.013-.054l-4.799-5.016-4.81 5.016a.26.26 0 0 0 .005.054.223.223 0 0 1 .007.055v6.885h2.168l.014-4.363a.419.419 0 0 1 .129-.307.419.419 0 0 1 .307-.13h4.348a.419.419 0 0 1 .307.13c.083.08.13.191.13.307v4.363h2.18v-6.94z",
    fill: "currentColor"
  }));
};

var Identity = function Identity(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M4.04 16.984V18h11.44v1H4.04a1.02 1.02 0 0 1-.731-.297A.943.943 0 0 1 3 18v-1.5c0-.281.173-.518.52-.71l.52-.29 4.566-2.078a3.891 3.891 0 0 1-.926-1.008 6.536 6.536 0 0 1-.61-1.21 6.431 6.431 0 0 1-.333-1.212A6.209 6.209 0 0 1 6.64 9V6.5c0-.417.135-.833.406-1.25a4.43 4.43 0 0 1 1.073-1.125 5.961 5.961 0 0 1 1.503-.813A4.82 4.82 0 0 1 11.32 3c.574 0 1.14.104 1.698.313a5.819 5.819 0 0 1 1.495.812c.439.333.796.708 1.073 1.125.276.417.414.833.414 1.25V9c0 .302-.032.651-.098 1.047a6.59 6.59 0 0 1-.324 1.21 5.86 5.86 0 0 1-.602 1.188 4.13 4.13 0 0 1-.91.992l1.381.61-.26 1-1.56-.703a1.045 1.045 0 0 1-.406-.32.958.958 0 0 1-.195-.477c-.01-.177.016-.344.082-.5a1.03 1.03 0 0 1 .308-.406c.564-.417.962-1.008 1.195-1.774.233-.765.349-1.388.349-1.867V6.5c0-.27-.108-.552-.325-.844a3.757 3.757 0 0 0-.837-.804 4.941 4.941 0 0 0-1.162-.61A3.744 3.744 0 0 0 11.32 4c-.444 0-.883.08-1.316.242a4.932 4.932 0 0 0-1.17.617 3.65 3.65 0 0 0-.837.813c-.211.292-.317.568-.317.828V9c0 .49.127 1.115.382 1.875.254.76.653 1.349 1.194 1.766a.969.969 0 0 1 .195 1.367c-.108.14-.243.247-.406.32l-4.566 2.078a1.041 1.041 0 0 0-.268.157c-.114.083-.171.223-.171.421zM18.5 16a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148H17v1.5a.48.48 0 0 1-.148.352.48.48 0 0 1-.352.148.48.48 0 0 1-.352-.148A.48.48 0 0 1 16 18.5V17h-1.5a.48.48 0 0 1-.352-.148A.48.48 0 0 1 14 16.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 14.5 16H16v-1.5a.48.48 0 0 1 .148-.352A.48.48 0 0 1 16.5 14a.48.48 0 0 1 .352.148.48.48 0 0 1 .148.352V16h1.5z",
    fill: "currentColor"
  })));
};

var Menu = function Menu(props) {
  return React.createElement("svg", _extends_1({
    width: 18,
    height: 14,
    viewBox: "0 0 18 14"
  }, props), React.createElement("path", {
    d: "M1 1h16M1 7h16M1 13h16",
    stroke: "currentColor"
  }));
};

var Notifications = function Notifications(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M17.271 13.367c.254.313.455.591.601.835a.731.731 0 0 1 .044.733.718.718 0 0 1-.571.424c-.264.04-.469.059-.616.059H13.99c0 .693-.244 1.284-.732 1.772a2.414 2.414 0 0 1-1.773.733 2.414 2.414 0 0 1-1.772-.733 2.414 2.414 0 0 1-.733-1.772H6.3c-.225 0-.457-.027-.696-.08a.732.732 0 0 1-.52-.403c-.117-.245-.107-.496.03-.755a6.56 6.56 0 0 1 .556-.857c.264-.342.552-.73.864-1.164.313-.435.469-.887.469-1.355V7.742c0-.664.115-1.286.344-1.867.23-.582.545-1.09.945-1.524.4-.434.874-.776 1.42-1.025a4.191 4.191 0 0 1 1.759-.374c.634 0 1.225.125 1.772.374a4.46 4.46 0 0 1 1.428 1.025c.406.435.723.942.953 1.524a5.04 5.04 0 0 1 .344 1.867v3.062c0 .478.149.942.447 1.391.297.45.583.84.856 1.172zm-5.786 3.574c.42 0 .78-.149 1.077-.446.298-.298.447-.657.447-1.077H9.962c0 .42.149.779.447 1.077.298.297.656.446 1.076.446zm5.347-2.52a8.139 8.139 0 0 0-.337-.425c-.322-.39-.657-.856-1.003-1.398a3.262 3.262 0 0 1-.52-1.794V7.742c0-.527-.09-1.02-.271-1.48a3.85 3.85 0 0 0-.74-1.2 3.511 3.511 0 0 0-1.106-.813c-.425-.2-.886-.3-1.384-.3-.489 0-.945.1-1.37.3-.425.2-.793.47-1.106.813a3.744 3.744 0 0 0-.732 1.2 4.102 4.102 0 0 0-.264 1.48v3.062c0 .634-.183 1.218-.55 1.75a46.606 46.606 0 0 1-1.157 1.619c-.063.088-.12.17-.168.249h10.708z",
    fill: "currentColor"
  })));
};

var Permissions = function Permissions(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("g", {
    stroke: "currentColor"
  }, React.createElement("path", {
    d: "M11.036 3.143L3.578 6.357V7.43h14.916V6.357l-7.458-3.214zm6.88 12.393H4.071c-.318 0-.577.242-.577.535v1.072h15V16.07c0-.293-.26-.535-.578-.535z",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("path", {
    d: "M5 7v8.034M8 7v8.275M11 7v8.034M14 7v8.275M17 7v8.275"
  }))));
};

var Plus = function Plus(props) {
  return React.createElement("svg", _extends_1({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, props), React.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
    fill: "currentColor"
  }));
};

var Remove = function Remove(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M11 4.744c1.216 0 2.341.304 3.376.912a6.308 6.308 0 0 1 2.368 2.368 6.546 6.546 0 0 1 .912 3.376 6.546 6.546 0 0 1-.912 3.376 6.308 6.308 0 0 1-2.368 2.368 6.546 6.546 0 0 1-3.376.912 6.546 6.546 0 0 1-3.376-.912 6.428 6.428 0 0 1-2.368-2.384 6.517 6.517 0 0 1-.912-3.36c0-1.205.304-2.325.912-3.36A6.55 6.55 0 0 1 7.64 5.656 6.517 6.517 0 0 1 11 4.744z",
    stroke: "currentColor"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M14.344 10.744v1.312H7.656v-1.312z"
  })));
};

var Settings = function Settings(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M18.063 9.08c.224.038.437.148.637.329.2.18.3.403.3.666v.938c0 .254-.1.459-.3.615-.2.156-.413.264-.637.322l-1.216.293a6.84 6.84 0 0 1-.154.418 4.008 4.008 0 0 1-.183.388l.644 1.084c.127.195.205.42.235.674a.766.766 0 0 1-.235.659l-.659.659a.847.847 0 0 1-.674.256 1.38 1.38 0 0 1-.688-.212l-1.055-.674a7.697 7.697 0 0 1-.41.19 4.595 4.595 0 0 1-.44.162l-.263 1.216a1.29 1.29 0 0 1-.33.637c-.18.2-.403.3-.666.3h-.938a.743.743 0 0 1-.615-.3 1.749 1.749 0 0 1-.322-.637L9.8 15.86a6.001 6.001 0 0 1-.469-.168 4.816 4.816 0 0 1-.454-.213l-1.084.689a1.308 1.308 0 0 1-.681.212.813.813 0 0 1-.667-.256l-.674-.66a.785.785 0 0 1-.22-.658c.03-.254.103-.479.22-.674l.689-1.143a8.068 8.068 0 0 1-.169-.359 3.029 3.029 0 0 1-.139-.388l-1.215-.293a1.749 1.749 0 0 1-.638-.322.743.743 0 0 1-.3-.615v-.938c0-.263.1-.486.3-.666.2-.181.413-.29.638-.33l1.2-.264a3.44 3.44 0 0 1 .147-.41c.059-.136.117-.268.176-.395l-.689-1.143a1.664 1.664 0 0 1-.22-.674.785.785 0 0 1 .22-.659l.674-.659a.813.813 0 0 1 .667-.256c.268.014.495.085.68.212l1.085.689a5.325 5.325 0 0 1 .908-.381l.308-1.202a1.58 1.58 0 0 1 .307-.637.76.76 0 0 1 .63-.3h.938c.263 0 .483.1.659.3.176.2.288.408.337.623l.264 1.23a6.533 6.533 0 0 1 .85.352l1.054-.674a1.38 1.38 0 0 1 .688-.212.847.847 0 0 1 .674.256l.66.66a.766.766 0 0 1 .234.658 1.55 1.55 0 0 1-.235.674l-.644 1.084c.068.137.134.276.198.418.063.141.114.29.153.446l1.201.264zm0 1.86l.014-.836a.515.515 0 0 0-.205-.102l-1.743-.396-.161-.512a2.474 2.474 0 0 0-.117-.352 4.109 4.109 0 0 0-.176-.366l-.235-.469.923-1.538a.474.474 0 0 0 .066-.117.28.28 0 0 0 .022-.088l-.615-.6a.348.348 0 0 0-.19.058l-1.51.967-.483-.25a11.505 11.505 0 0 0-.351-.168 1.904 1.904 0 0 0-.366-.124l-.513-.176-.381-1.772a.431.431 0 0 0-.044-.11l-.03-.051h-.864a.34.34 0 0 0-.058.087.52.52 0 0 0-.044.147l-.425 1.7-.498.16a4.51 4.51 0 0 0-.762.322l-.483.25-1.567-.997-.074-.036a.671.671 0 0 0-.088-.037l-.615.615c0 .03.008.064.022.103a.898.898 0 0 0 .066.132l.952 1.582-.234.454a8.76 8.76 0 0 0-.154.351 2.79 2.79 0 0 0-.11.323l-.16.512-1.773.396a.537.537 0 0 0-.096.044.199.199 0 0 1-.066.03v.863c.02.02.05.037.088.052a.81.81 0 0 0 .147.036l1.714.44.16.498a3.144 3.144 0 0 0 .265.615l.22.454-.953 1.597a.474.474 0 0 0-.066.117.298.298 0 0 0-.022.103l.615.6c.03 0 .062-.007.096-.022a.59.59 0 0 0 .095-.051l1.538-.982.483.25a4.51 4.51 0 0 0 .762.322l.498.16.44 1.73c.01.048.022.09.036.124a.254.254 0 0 0 .051.08h.85a.515.515 0 0 0 .103-.19l.38-1.743.513-.176a5.14 5.14 0 0 0 .703-.293l.484-.249 1.538.982.073.036a.72.72 0 0 0 .088.037l.615-.615a.298.298 0 0 0-.022-.103.826.826 0 0 0-.066-.132l-.923-1.523.235-.469c.058-.107.11-.217.154-.33.044-.112.085-.227.124-.344l.161-.483 1.743-.44a.635.635 0 0 0 .125-.036.254.254 0 0 0 .08-.052zM11.5 7.687c.781 0 1.448.273 2 .82a2.7 2.7 0 0 1 .827 1.992 2.7 2.7 0 0 1-.827 1.992 2.737 2.737 0 0 1-2 .82 2.72 2.72 0 0 1-1.985-.82 2.7 2.7 0 0 1-.828-1.992 2.7 2.7 0 0 1 .828-1.992 2.72 2.72 0 0 1 1.985-.82zm0 4.687c.518 0 .96-.183 1.326-.55.366-.366.549-.807.549-1.325 0-.518-.183-.96-.55-1.326a1.806 1.806 0 0 0-1.325-.549c-.518 0-.96.183-1.326.55a1.804 1.804 0 0 0-.549 1.325c0 .518.183.96.55 1.326.366.366.807.549 1.325.549z",
    fill: "currentColor"
  })));
};

var Share = function Share(props) {
  return React.createElement("svg", _extends_1({
    width: 16,
    height: 14,
    viewBox: "0 0 16 14"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M-3-4h22v22H-3z"
  }), React.createElement("path", {
    d: "M.531 13.719a.44.44 0 0 1-.312-.117.522.522 0 0 1-.157-.305c0-.042-.018-.3-.054-.774-.037-.474-.013-1.054.07-1.742.083-.687.258-1.43.524-2.226A6.74 6.74 0 0 1 1.89 6.313 6.89 6.89 0 0 1 3.125 5.18a7.514 7.514 0 0 1 1.523-.836 9.899 9.899 0 0 1 1.797-.54c.64-.13 1.326-.205 2.055-.226L8.516.781a.48.48 0 0 1 .078-.273.52.52 0 0 1 .203-.18.537.537 0 0 1 .281-.047c.094.01.177.047.25.11l6.485 5.312a.513.513 0 0 1 .187.39.498.498 0 0 1-.188.391L9.329 11.86a.453.453 0 0 1-.25.11.537.537 0 0 1-.281-.047.501.501 0 0 1-.203-.188.493.493 0 0 1-.078-.265L8.5 8.594c-1.75 0-3.125.234-4.125.703s-1.75.99-2.25 1.562c-.5.573-.815 1.107-.945 1.602-.13.495-.196.763-.196.805a.538.538 0 0 1-.132.32.387.387 0 0 1-.305.133H.53zm8.485-6.125c.062 0 .125.013.187.039a.72.72 0 0 1 .172.101.777.777 0 0 1 .102.164.473.473 0 0 1 .039.196v2.312l5.203-4.312-5.203-4.266v2.25a.48.48 0 0 1-.149.352.48.48 0 0 1-.351.148c-.709 0-1.375.05-2 .149a8.793 8.793 0 0 0-1.743.453 7.012 7.012 0 0 0-1.46.75 5.65 5.65 0 0 0-1.157 1.039 6.162 6.162 0 0 0-1.148 1.89 8.291 8.291 0 0 0-.492 1.922c.27-.375.604-.752 1-1.133.395-.38.903-.72 1.523-1.023.62-.302 1.375-.55 2.266-.742.89-.193 1.96-.29 3.21-.29z",
    fill: "currentColor"
  })));
};

var Time = function Time(props) {
  return React.createElement("svg", _extends_1({
    width: 13,
    height: 13,
    viewBox: "0 0 13 13"
  }, props), React.createElement("path", {
    d: "M6.5 11.76c.8 0 1.535-.2 2.205-.6.66-.39 1.185-.92 1.575-1.59.39-.67.585-1.405.585-2.205S10.67 5.83 10.28 5.16a4.403 4.403 0 0 0-1.575-1.575A4.305 4.305 0 0 0 6.5 3c-.8 0-1.535.195-2.205.585-.66.39-1.185.915-1.575 1.575a4.305 4.305 0 0 0-.585 2.205c0 .8.195 1.535.585 2.205.39.67.915 1.2 1.575 1.59.67.4 1.405.6 2.205.6zm0-10.02c1.03 0 1.98.255 2.85.765.85.49 1.52 1.16 2.01 2.01.51.87.765 1.82.765 2.85s-.255 1.98-.765 2.85c-.49.85-1.16 1.52-2.01 2.01-.87.51-1.82.765-2.85.765s-1.98-.255-2.85-.765a5.386 5.386 0 0 1-2.01-2.01 5.535 5.535 0 0 1-.765-2.85c0-1.03.255-1.98.765-2.85.49-.85 1.16-1.52 2.01-2.01.87-.51 1.82-.765 2.85-.765zm.33 2.52v3.315L9.32 9.06l-.51.765L5.885 8.01V4.26h.945zM3.95 1.395l-2.895 2.37L.26 2.82 3.125.45l.825.945zm8.79 1.425l-.795.945-2.895-2.46.825-.945 2.865 2.46z",
    fill: "#6D777B",
    fillRule: "evenodd",
    opacity: 0.75
  }));
};

var Wallet = function Wallet(props) {
  return React.createElement("svg", _extends_1({
    width: 22,
    height: 22,
    viewBox: "0 0 22 22"
  }, props), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M0 0h22v22H0z"
  }), React.createElement("path", {
    d: "M19 7.186v8.642c0 .39-.137.723-.41.996-.274.274-.606.41-.996.41H5.406c-.39 0-.722-.136-.996-.41a1.356 1.356 0 0 1-.41-.996v-7.5c0-.38.137-.708.41-.981.274-.274.6-.415.982-.425h.468V5.047c0-.39.14-.723.418-.996a1.36 1.36 0 0 1 .989-.41l10.59 2.109c.528.146.85.38.967.703.117.322.176.567.176.733zM6.798 5.046v1.876h10.327c.186.01.308-.03.366-.117l.088-.132L7.237 4.578a.467.467 0 0 0-.44.469zm11.264 10.782V7.391c0 .156-.1.273-.3.351-.2.078-.412.117-.637.117H5.406a.45.45 0 0 0-.33.14.45.45 0 0 0-.138.33v7.5a.45.45 0 0 0 .139.329.45.45 0 0 0 .33.139h12.187a.45.45 0 0 0 .33-.14.45.45 0 0 0 .139-.329zm-11.25-4.687c.254 0 .474.092.66.278a.901.901 0 0 1 .278.66.894.894 0 0 1-.278.666.913.913 0 0 1-.66.27.906.906 0 0 1-.666-.27.906.906 0 0 1-.271-.667c0-.254.09-.474.271-.66a.894.894 0 0 1 .667-.277z",
    fill: "currentColor"
  })));
};

/* eslint-disable prettier/prettier */

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

// File generated by the oco-to-js.js script: do not edit manually.
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
    colors$1 = _groups.colors;

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            height: 100%;\n            ", ": ", "px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: ", ";\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n            ", ": ", "px;\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n          display: inline-flex;\n          position: relative;\n          width: max-content;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var baseStyles = css(["", ";width:", ";height:40px;padding:0 10px;background:", ";border:1px solid ", ";border-radius:3px;box-shadow:inset 0 1px 2px rgba(0,0,0,0.06);color:", ";appearance:none;&:focus{outline:none;border-color:", ";}&:read-only{color:transparent;text-shadow:0 0 0 ", ";}"], font({
  size: 'small',
  weight: 'normal'
}), function (_ref) {
  var wide = _ref.wide;
  return wide ? '100%' : 'auto';
}, theme.contentBackground, theme.contentBorder, theme.textPrimary, theme.contentBorderActive, theme.textSecondary); // Simple text input

var TextInput = styled.input.withConfig({
  displayName: "TextInput",
  componentId: "gngg3n-0"
})(["", ";"], baseStyles);
TextInput.propTypes = {
  required: propTypes.bool,
  type: propTypes.oneOf(['email', 'number', 'password', 'search', 'tel', 'text', 'url'])
};
TextInput.defaultProps = {
  required: false,
  type: 'text' // Text input wrapped to allow adornments

};
var WrapperTextInput = React.forwardRef(function (_ref2, ref) {
  var adornment = _ref2.adornment,
      adornmentPosition = _ref2.adornmentPosition,
      _ref2$adornmentSettin = _ref2.adornmentSettings,
      _ref2$adornmentSettin2 = _ref2$adornmentSettin.width,
      adornmentWidth = _ref2$adornmentSettin2 === void 0 ? 34 : _ref2$adornmentSettin2,
      _ref2$adornmentSettin3 = _ref2$adornmentSettin.padding,
      adornmentPadding = _ref2$adornmentSettin3 === void 0 ? 4 : _ref2$adornmentSettin3,
      props = objectWithoutProperties(_ref2, ["adornment", "adornmentPosition", "adornmentSettings"]);

  if (!adornment) {
    return React.createElement(TextInput, _extends_1({
      ref: ref
    }, props));
  }

  return React.createElement(_StyledDiv, null, React.createElement(_StyledTextInput, _extends_1({
    ref: ref
  }, props, {
    _css: adornmentPosition === 'end' ? 'padding-right' : 'padding-left',
    _css2: adornmentWidth - adornmentPadding * 2
  })), React.createElement(_StyledDiv2, {
    _css3: adornmentPosition === 'end' ? 'right' : 'left',
    _css4: adornmentPadding,
    _css5: theme.textSecondary
  }, adornment));
});
WrapperTextInput.propTypes = objectSpread({}, TextInput.propTypes, {
  adornment: propTypes.node,
  adornmentPosition: propTypes.oneOf(['start', 'end']),
  adornmentSettings: propTypes.shape({
    width: propTypes.number,
    padding: propTypes.number
  })
});
WrapperTextInput.defaultProps = objectSpread({}, TextInput.defaultProps, {
  adornment: null,
  adornmentPosition: 'start',
  adornmentSettings: {} // <input type=number> (only for compat)

});
var TextInputNumber = styled.input.attrs({
  type: 'number'
}).withConfig({
  displayName: "TextInput__TextInputNumber",
  componentId: "gngg3n-1"
})(["", ";"], baseStyles); // Multiline input (textarea element)

var TextInputMultiline = styled.textarea.withConfig({
  displayName: "TextInput__TextInputMultiline",
  componentId: "gngg3n-2"
})(["", ";resize:vertical;"], baseStyles);
TextInputMultiline.propTypes = {
  required: propTypes.bool
};
TextInputMultiline.defaultProps = {
  required: false
};
WrapperTextInput.Number = TextInputNumber;
WrapperTextInput.Multiline = TextInputMultiline;

var _StyledDiv = styled("div")(_templateObject());

var _StyledTextInput = styled(TextInput)(_templateObject2(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = styled("div")(_templateObject3(), function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

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
function (_React$PureComponent) {
  inherits(FocusVisible, _React$PureComponent);

  function FocusVisible() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, FocusVisible);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(FocusVisible)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_document", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      focusVisible: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handlePointerEvent", function (e) {
      _this._pointerActive = true;
      _this._timer = setTimeout(function () {
        _this._pointerActive = false;
      }, 0);

      _this.setState({
        focusVisible: false
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleFocus", function () {
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
    } // It doesn’t seem to be specified, but pointer events happen before focus
    // events on modern browsers.

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
}(React.PureComponent);

defineProperty(FocusVisible, "propTypes", {
  // children is called with an object containing two entries:
  //   - focusVisible represents the visibility of the focus (boolean).
  //   - onFocus() need to be called when the target element is focused.
  children: propTypes.func.isRequired
});

var ButtonBase =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(ButtonBase, _React$PureComponent);

  function ButtonBase() {
    classCallCheck(this, ButtonBase);

    return possibleConstructorReturn(this, getPrototypeOf(ButtonBase).apply(this, arguments));
  }

  createClass(ButtonBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          focusVisible = _this$props.focusVisible,
          showFocusRing = _this$props.showFocusRing,
          innerRef = _this$props.innerRef,
          props = objectWithoutProperties(_this$props, ["focusVisible", "showFocusRing", "innerRef"]);

      return React.createElement(Main, _extends_1({
        ref: innerRef,
        focusRing: focusVisible && showFocusRing
      }, props));
    }
  }]);

  return ButtonBase;
}(React.PureComponent);

defineProperty(ButtonBase, "propTypes", {
  innerRef: propTypes.any,
  focusVisible: propTypes.bool,
  showFocusRing: propTypes.bool
});

defineProperty(ButtonBase, "defaultProps", {
  showFocusRing: true
});

var Main = styled.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "ButtonBase__Main",
  componentId: "sc-17cai6d-0"
})(["display:inline-block;padding:0;white-space:nowrap;", ";", ";color:", ";background:none;border:0;border-radius:3px;outline:0;cursor:", ";&::-moz-focus-inner{border:0;}&:focus{outline:", ";}"], font({
  size: 'small',
  weight: 'normal'
}), unselectable, theme.textSecondary, function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'default' : 'pointer';
}, function (p) {
  return p.focusRing ? "2px solid ".concat(theme.accent) : '0';
});
var ButtonBase$1 = React.forwardRef(function (props, ref) {
  return React.createElement(FocusVisible, null, function (_ref2) {
    var focusVisible = _ref2.focusVisible,
        onFocus = _ref2.onFocus;
    return React.createElement(ButtonBase, _extends_1({
      innerRef: ref,
      onFocus: onFocus,
      focusVisible: focusVisible
    }, props));
  });
});

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n          display: inline-flex;\n          justify-content: center;\n          align-items: center;\n          width: 32px;\n          height: 32px;\n          &:active {\n            background: rgba(220, 234, 239, 0.3);\n          }\n        "]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}

var ButtonIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(ButtonIcon, _React$PureComponent);

  function ButtonIcon() {
    classCallCheck(this, ButtonIcon);

    return possibleConstructorReturn(this, getPrototypeOf(ButtonIcon).apply(this, arguments));
  }

  createClass(ButtonIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          props = objectWithoutProperties(_this$props, ["label", "children"]);

      return React.createElement(_StyledButtonBase, _extends_1({
        title: label
      }, props), children);
    }
  }]);

  return ButtonIcon;
}(React.PureComponent);

ButtonIcon.propTypes = {
  label: propTypes.string.isRequired,
  children: propTypes.node.isRequired
};

var _StyledButtonBase = styled(ButtonBase$1)(_templateObject$1());

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
      return React.createElement(Main$1, _extends_1({
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
      }))));
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

var Main$1 = styled.div.withConfig({
  displayName: "EthIdenticon__Main",
  componentId: "sc-1h8gagr-0"
})(["display:inline-flex;vertical-align:middle;overflow:hidden;width:", "px;height:", "px;border-radius:", "px;"], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.radius;
});
var BlockiesOpacity = styled.div.withConfig({
  displayName: "EthIdenticon__BlockiesOpacity",
  componentId: "sc-1h8gagr-1"
})(["opacity:", ";"], function (p) {
  return 1 - p.soften;
});
var BlockiesScaling = styled.div.withConfig({
  displayName: "EthIdenticon__BlockiesScaling",
  componentId: "sc-1h8gagr-2"
})(["display:flex;width:", "px;height:", "px;background:#fff;transform:scale(", ",", ");transform-origin:0 0;"], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, 1 / PX_RATIO, 1 / PX_RATIO);

function _templateObject5() {
  var data = taggedTemplateLiteral(["\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 39px;\n            height: 38px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            border-radius: 0 3px 3px 0;\n            &:active {\n              background: rgba(220, 234, 239, 0.3);\n            }\n          "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n            text-overflow: ellipsis;\n            width: 390px;\n            max-width: 100%;\n            border: 0;\n            box-shadow: none;\n            background: transparent;\n            ", ";\n            ", ";\n            &:read-only {\n              color: ", ";\n              text-shadow: none;\n            }\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n                transform: scale(calc(38 / 48));\n                transform-origin: 0 0;\n              "]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n            position: absolute;\n            top: -1px;\n            left: -1px;\n            height: 40px;\n            overflow: hidden;\n            border-radius: 3px 0 0 3px;\n            border: 1px solid transparent;\n          "]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n          display: inline-flex;\n          max-width: 100%;\n          height: 40px;\n          position: relative;\n          background: ", ";\n          border: 1px solid ", ";\n          border-radius: 3px;\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);\n          padding-left: 40px;\n          padding-right: 30px;\n        "]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}

var AddressFieldBase =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(AddressFieldBase, _React$PureComponent);

  function AddressFieldBase() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, AddressFieldBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(AddressFieldBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_input", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_button", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleFocus", function () {
      _this._input.current.select();
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleCopy", function () {
      var onCopy = _this.props.onCopy;

      _this._input.current.focus();

      _this._input.current.select();

      try {
        document.execCommand('copy');
        onCopy('Address copied');
      } catch (err) {
        warn(err);
      }

      _this._input.current.focus();
    });

    return _this;
  }

  createClass(AddressFieldBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2._input.current.focus();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          icon = _this$props.icon;
      return React.createElement(_StyledDiv$1, {
        _css: theme.contentBackground,
        _css2: theme.contentBorder
      }, React.createElement(_StyledDiv2$1, null, icon || React.createElement(_StyledEthIdenticon, {
        address: address,
        scale: 2
      })), React.createElement(_StyledTextInput$1, {
        ref: this._input,
        value: address,
        onFocus: this.handleFocus,
        readOnly: true,
        _css3: icon && 'padding-left: 8px',
        _css4: font({
          monospace: true
        }),
        _css5: theme.textPrimary
      }), React.createElement(_StyledButtonIcon, {
        ref: this._button,
        onClick: this.handleCopy,
        label: "Copy"
      }, React.createElement(Copy, null)));
    }
  }]);

  return AddressFieldBase;
}(React.PureComponent);

defineProperty(AddressFieldBase, "propTypes", {
  address: propTypes.string.isRequired,
  onCopy: propTypes.func,
  icon: propTypes.node
});

var AddressField = function AddressField(props) {
  return (// If onCopy is set (either to a function or null), Toast is not used.
    props.onCopy || props.onCopy === null ? React.createElement(AddressFieldBase, _extends_1({}, props, {
      onCopy: props.onCopy || noop
    })) : React.createElement(Toast, null, function (add) {
      return React.createElement(AddressFieldBase, _extends_1({
        onCopy: add
      }, props));
    })
  );
};

AddressField.propTypes = AddressFieldBase.propTypes;

var _StyledDiv$1 = styled("div")(_templateObject$2(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2$1 = styled("div")(_templateObject2$1());

var _StyledEthIdenticon = styled(EthIdenticon)(_templateObject3$1());

var _StyledTextInput$1 = styled(WrapperTextInput)(_templateObject4(), function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledButtonIcon = styled(ButtonIcon)(_templateObject5());

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

var _React$createContext$1 = React.createContext(''),
    Provider$1 = _React$createContext$1.Provider,
    Consumer = _React$createContext$1.Consumer;

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
      return React.createElement(Provider$1, {
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

var chevronSvg = "data:image/svg+xml,%3Csvg%20width%3D%227%22%20height%3D%2212%22%20viewBox%3D%220%200%207%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.446%2012a.512.512%200%200%201-.172-.03.422.422%200%200%201-.146-.087A.37.37%200%200%201%200%2011.6a.37.37%200%200%201%20.128-.281l5.826-5.361L.217.692A.376.376%200%200%201%20.089.405.378.378%200%200%201%20.217.117.444.444%200%200%201%20.529%200c.123%200%20.228.04.313.117l6.03%205.56A.37.37%200%200%201%207%205.96a.37.37%200%200%201-.128.281l-6.12%205.643A.477.477%200%200%201%20.446%2012z%22%20fill%3D%22%2300CBE6%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

function _templateObject4$1() {
  var data = taggedTemplateLiteral(["\n                  display: flex;\n                  align-items: center;\n                  height: 100%;\n                  margin-left: auto;\n                  padding-right: ", "px;\n                "]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = taggedTemplateLiteral(["\n                  display: flex;\n                  align-items: center;\n                  height: 100%;\n                  padding-left: ", "px;\n                "]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n              display: flex;\n              align-items: center;\n              justify-content: flex-start;\n              width: 100%;\n              height: ", "px;\n            "]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n            overflow: hidden;\n            display: flex;\n            flex-direction: column;\n            width: 100%;\n            min-height: ", "px;\n            background: ", ";\n            ", ";\n\n            /* We are using an \u201Cinner border\u201D to allow components like TabBar\n               to draw over the border while having overflow:hidden set. */\n            padding-bottom: 1px;\n            &:after {\n              content: '';\n              position: absolute;\n              left: 0;\n              right: 0;\n              bottom: 0;\n              border-bottom: 1px solid ", ";\n            }\n          "]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var BAR_HEIGHT = 64;
var InAppBarContext = React.createContext(false);

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      tabsHeight: 0
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_tabsRef", React.createRef());

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
          props = objectWithoutProperties(_this$props, ["children", "endContent", "onTitleClick", "padding", "tabs", "title"]);

      return React.createElement(InAppBarContext.Provider, {
        value: true
      }, React.createElement(_StyledDiv$2, {
        _css: theme.contentBackground,
        _css2: unselectable(),
        _css3: theme.contentBorder
      }, React.createElement(_StyledDiv2$2, _extends_1({}, props, {
        _css4: BAR_HEIGHT - 1
      }), title && React.createElement(_StyledDiv3, {
        _css5: padding
      }, React.createElement(AppBarTitle, {
        chevron: Boolean(children),
        clickable: Boolean(onTitleClick),
        onClick: onTitleClick
      }, typeof title === 'string' ? React.createElement(Text, {
        size: "xxlarge"
      }, title) : title)), children, endContent && React.createElement(_StyledDiv4, {
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
  title: propTypes.string
});

defineProperty(AppBar, "defaultProps", {
  onTitleClick: noop,
  padding: 30,
  title: '' // Let external components have the possibility to know they are in AppBar

});

defineProperty(AppBar, "InAppBar", InAppBarContext.Consumer);

var AppBarTitle = PublicUrl.hocWrap(styled.h1.withConfig({
  displayName: "AppBar__AppBarTitle",
  componentId: "sc-1861a4z-0"
})(["padding-right:20px;margin-right:calc(20px - 7px);white-space:nowrap;background-image:", ";background-position:100% 50%;background-repeat:no-repeat;cursor:", ";"], function (_ref) {
  var chevron = _ref.chevron;
  return chevron ? css(["url(", ")"], PublicUrl.styledUrl(chevronSvg)) : 'none';
}, function (_ref2) {
  var clickable = _ref2.clickable;
  return clickable ? 'pointer' : 'default';
}));
var TabsWrapper = styled(extendedAnimated.div).withConfig({
  displayName: "AppBar__TabsWrapper",
  componentId: "sc-1861a4z-1"
})(["position:relative;z-index:1;"]);

var _StyledDiv$2 = styled("div")(_templateObject$3(), BAR_HEIGHT, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2$2 = styled("div")(_templateObject2$2(), function (p) {
  return p._css4;
});

var _StyledDiv3 = styled("div")(_templateObject3$2(), function (p) {
  return p._css5;
});

var _StyledDiv4 = styled("div")(_templateObject4$1(), function (p) {
  return p._css6;
});

var AppView =
/*#__PURE__*/
function (_React$Component) {
  inherits(AppView, _React$Component);

  function AppView() {
    classCallCheck(this, AppView);

    return possibleConstructorReturn(this, getPrototypeOf(AppView).apply(this, arguments));
  }

  createClass(AppView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          appBar = _this$props.appBar,
          children = _this$props.children,
          height = _this$props.height,
          padding = _this$props.padding,
          tabs = _this$props.tabs,
          title = _this$props.title;
      return React.createElement(Main$2, _extends_1({
        height: height
      }, stylingProps(this)), React.createElement(Header, null, appBar || React.createElement(AppBar, {
        title: title,
        tabs: tabs
      })), React.createElement(ScrollWrapper, null, React.createElement(Content$1, {
        padding: padding
      }, children)));
    }
  }]);

  return AppView;
}(React.Component);

defineProperty(AppView, "defaultProps", {
  title: '',
  padding: 30,
  height: '100vh'
});

defineProperty(AppView, "propTypes", {
  appBar: propTypes.element,
  title: propTypes.string,
  children: propTypes.node,
  padding: propTypes.number,
  height: propTypes.string,
  tabs: propTypes.element
});

var Main$2 = styled.div.withConfig({
  displayName: "AppView__Main",
  componentId: "bz2dbk-0"
})(["display:flex;height:", ";flex-direction:column;align-items:stretch;justify-content:stretch;"], function (p) {
  return p.height;
});
var Header = styled.div.withConfig({
  displayName: "AppView__Header",
  componentId: "bz2dbk-1"
})(["position:relative;z-index:2;flex-shrink:0;"]);
var ScrollWrapper = styled.div.withConfig({
  displayName: "AppView__ScrollWrapper",
  componentId: "bz2dbk-2"
})(["position:relative;z-index:1;height:100%;overflow:auto;"]);
var Content$1 = styled.div.withConfig({
  displayName: "AppView__Content",
  componentId: "bz2dbk-3"
})(["display:flex;flex-direction:column;min-height:100%;padding:", ";"], function (_ref) {
  var padding = _ref.padding;
  return "".concat(padding, "px");
});

var overpassLightWoff = "fd48a701d84ebf69.woff";

var overpassLightWoff2 = "cf790334a5a6d45c.woff2";

var overpassRegularWoff = "860b19d3e10736e7.woff";

var overpassRegularWoff2 = "32a3f11e7740ce58.woff2";

var overpassSemiBoldWoff = "f8ba2d7a9af0db1f.woff";

var overpassSemiBoldWoff2 = "5cfe62515c2f9b42.woff2";

var overpassMonoLightWoff = "e6cc295577142efd.woff";

var overpassMonoLightWoff2 = "3dd21d4f0d28fecb.woff2";

function _templateObject$4() {
  var data = taggedTemplateLiteral(["\n  ", "\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  html {\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    height: 0;\n    min-height: 100vh;\n    font-family: ", ";\n    font-size: 15px;\n    font-weight: 400;\n    line-height: 1.5;\n    color: ", ";\n    background: ", ";\n  }\n  body,\n  ul,\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    padding: 0;\n  }\n  button,\n  select,\n  input,\n  textarea,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: inherit;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  a,\n  button,\n  select,\n  input,\n  textarea {\n    color: inherit;\n  }\n  strong,\n  b {\n    font-weight: 600;\n  }\n  ::selection {\n    color: ", ";\n    background: ", ";\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
// generic names in our components.

var DEFAULT_FONT_FAMILY = 'aragon-ui';
var MONOSPACE_FONT_FAMILY = 'aragon-ui-monospace';
var DEFAULT_FONTS = {
  '400': [{
    url: overpassLightWoff2,
    format: 'woff2'
  }, {
    url: overpassLightWoff,
    format: 'woff',
    legacy: true
  }],
  '600': [{
    url: overpassRegularWoff2,
    format: 'woff2'
  }, {
    url: overpassRegularWoff,
    format: 'woff',
    legacy: true
  }],
  '800': [{
    url: overpassSemiBoldWoff2,
    format: 'woff2'
  }, {
    url: overpassSemiBoldWoff,
    format: 'woff',
    legacy: true
  }]
};
var MONOSPACE_FONTS = {
  '400': [{
    url: overpassMonoLightWoff2,
    format: 'woff2'
  }, {
    url: overpassMonoLightWoff,
    format: 'woff',
    legacy: true
  }]
};

var BaseStyles =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(BaseStyles, _React$PureComponent);

  function BaseStyles() {
    classCallCheck(this, BaseStyles);

    return possibleConstructorReturn(this, getPrototypeOf(BaseStyles).apply(this, arguments));
  }

  createClass(BaseStyles, [{
    key: "fontSrc",
    value: function fontSrc(sources, _ref) {
      var publicUrl = _ref.publicUrl,
          enableLegacyFonts = _ref.enableLegacyFonts;
      return sources.filter(function (_ref2) {
        var legacy = _ref2.legacy;
        return !legacy || legacy && enableLegacyFonts;
      }).map(function (_ref3) {
        var url = _ref3.url,
            format = _ref3.format;
        return "url(".concat(publicUrl + url, ") format('").concat(format, "')");
      }).join(', ');
    }
  }, {
    key: "fontFaceDeclarations",
    value: function fontFaceDeclarations() {
      var props = this.props; // No need to declare the font faces if the font family has changed.

      if (props.fontFamily !== BaseStyles.defaultProps.fontFamily) {
        return '';
      }

      return "\n      @font-face {\n        font-family: ".concat(DEFAULT_FONT_FAMILY, ";\n        src: ").concat(this.fontSrc(DEFAULT_FONTS['400'], props), ";\n        font-weight: 400;\n        font-style: normal;\n      }\n      @font-face {\n        font-family: ").concat(DEFAULT_FONT_FAMILY, ";\n        src: ").concat(this.fontSrc(DEFAULT_FONTS['600'], props), ";\n        font-weight: 600;\n        font-style: normal;\n      }\n      @font-face {\n        font-family: ").concat(DEFAULT_FONT_FAMILY, ";\n        src: ").concat(this.fontSrc(DEFAULT_FONTS['800'], props), ";\n        font-weight: 800;\n        font-style: normal;\n      }\n      @font-face {\n        font-family: ").concat(MONOSPACE_FONT_FAMILY, ";\n        src: ").concat(this.fontSrc(MONOSPACE_FONTS['400'], props), ";\n        font-weight: 400;\n        font-style: normal;\n      }\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(GlobalStyle, _extends_1({}, this.props, {
        fontFaces: this.fontFaceDeclarations()
      }));
    }
  }]);

  return BaseStyles;
}(React.PureComponent);

defineProperty(BaseStyles, "propTypes", {
  publicUrl: propTypes.string,
  enableLegacyFonts: propTypes.bool,
  fontFamily: propTypes.string
});

defineProperty(BaseStyles, "defaultProps", {
  publicUrl: '/',
  enableLegacyFonts: false,
  fontFamily: "".concat(DEFAULT_FONT_FAMILY, ", sans-serif")
});

var GlobalStyle = createGlobalStyle(_templateObject$4(), function (props) {
  return props.fontFaces ? props.fontFaces : '';
}, function (props) {
  return props.fontFamily;
}, theme.textPrimary, theme.mainBackground, theme.selectionForeground, theme.selectionBackground);
var BaseStyles$1 = PublicUrl.hocWrap(BaseStyles);

var logo = "data:image/svg+xml,%3Csvg%20width%3D%221129%22%20height%3D%22792%22%20viewBox%3D%220%200%201129%20792%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20x1%3D%2258.303%25%22%20y1%3D%2229.305%25%22%20x2%3D%22-20.356%25%22%20y2%3D%2289.584%25%22%20id%3D%22a%22%3E%3Cstop%20stop-color%3D%22%23E9F2F4%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23FFF%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2250%25%22%20y1%3D%22125.887%25%22%20x2%3D%2250%25%22%20y2%3D%2227.419%25%22%20id%3D%22b%22%3E%3Cstop%20stop-color%3D%22%23E9F2F4%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23FFF%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20x1%3D%2238.76%25%22%20y1%3D%2240.284%25%22%20x2%3D%2227.198%25%22%20y2%3D%224.898%25%22%20id%3D%22c%22%3E%3Cstop%20stop-color%3D%22%23E9F2F4%22%20offset%3D%220%25%22%2F%3E%3Cstop%20stop-color%3D%22%23FFF%22%20offset%3D%22100%25%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.7%22%3E%3Cpath%20d%3D%22M474.223%2064.24c-.503%200-231.685%2073.873-231.685%20275.905%200%20202.033%20223.146%20300.029%20387.48%20300.029%2089.383%200%20162.808-26.013%20211.24-49.744%206.242-28.642%2028.943-96.473%20104.047-96.981%2013.393-.523%2025.958%201.99%2036.517%208.021%2050.256%2027.144%2017.59%2077.898%2017.59%2077.898%201.894-.307%203.809-.663%205.724-1.075%201.91-.413%203.83-.89%205.764-1.408%2060.404-16.268%20128.467-85.36%20116.661-201.057-9.463-92.774-95.09-151.58-136.743-174.94-13.64-7.648-22.566-11.513-22.566-11.513%201.508-9.423%201.995-16.71%201.995-22.309%200-1.05-.02-2.035-.05-2.96v-10.86C751.617%2020.65%20566.645.223%20475.414.223c-39.412%200-61.5%203.704-61.5%203.704l60.309%2060.313zm461.86%20125.638s-29.652-9.55-59.8-13.57c-15.083%2015.58-28.15%2022.113-32.17%2024.129-.503.497-1.005%201-1.005%201-87.95-18.595-119.612-63.827-119.612-63.827%2082.93-.497%20157.812%2019.098%20212.587%2052.268z%22%20fill%3D%22url%28%23a%29%22%20opacity%3D%22.779%22%2F%3E%3Cpath%20d%3D%22M1018.002%20315.017c0%2065.842-27.134%20126.647-73.375%20175.899l-2.197%202.528%203.704-.01c12.564-.508%2025.129%202.005%2035.688%208.036%2050.256%2027.144%2017.59%2077.898%2017.59%2077.898%2062.82-10.051%20140.719-80.406%20128.15-203.54-9.464-92.774-95.092-151.58-136.744-174.94%2017.901%2035.357%2027.184%2074.19%2027.184%20114.13%22%20fill%3D%22url%28%23b%29%22%20opacity%3D%22.374%22%2F%3E%3Cpath%20d%3D%22M.808%20545.696c0%208.152.317%2015.911.769%2023.495%2062.198%20119.616%20137.015%20224.115%20222.588%20310.653%20106.72%20107.685%20230.9%20187.578%20369.166%20237.539%20137.764-49.785%20261.949-129.854%20369.182-238.057%2031.792-32.144%2062.112-66.887%2090.915-104.012-229.272-16.479-215.346-155.74-215.346-155.74%200-5.524%200-11.057%201.005-16.585%200%200%20.508-4.89%202.176-12.564-48.432%2023.736-121.857%2049.749-211.244%2049.749-164.335%200-387.48-97.996-387.48-300.029%200-202.032%20231.181-275.905%20231.181-275.905l-.12-.035c-5.86-.452-12.143-.472-17.973-.472C202.836%2072.784.808%20284.863.808%20545.696%22%20fill%3D%22url%28%23c%29%22%20opacity%3D%22.557%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E";

var StyledAragonApp = styled.main.withConfig({
  displayName: "AragonApp__StyledAragonApp",
  componentId: "sc-156qg0-0"
})(["min-width:320px;min-height:100vh;background-color:", ";background-image:", ";background-position:50% 50%;background-repeat:no-repeat;"], theme.mainBackground, function (_ref) {
  var backgroundLogo = _ref.backgroundLogo;
  return backgroundLogo ? css(["url(", ")"], PublicUrl.styledUrl(logo)) : 'none';
});

var AragonApp =
/*#__PURE__*/
function (_React$Component) {
  inherits(AragonApp, _React$Component);

  function AragonApp() {
    classCallCheck(this, AragonApp);

    return possibleConstructorReturn(this, getPrototypeOf(AragonApp).apply(this, arguments));
  }

  createClass(AragonApp, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        publicUrl: ensureTrailingSlash(this.props.publicUrl)
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (!AragonApp._warned) {
        warn('<AragonApp /> is deprecated: please use <Main /> instead.');
        AragonApp._warned = true;
      }

      var _this$props = this.props,
          children = _this$props.children,
          backgroundLogo = _this$props.backgroundLogo,
          className = _this$props.className,
          publicUrl = _this$props.publicUrl,
          supportLegacyAgents = _this$props.supportLegacyAgents;
      var styledProps = {
        backgroundLogo: backgroundLogo,
        className: className,
        publicUrl: publicUrl
      };
      return React.createElement(PublicUrl.Provider, {
        url: ensureTrailingSlash(publicUrl)
      }, React.createElement(BaseStyles$1, {
        enableLegacyFonts: supportLegacyAgents
      }), React.createElement(StyledAragonApp, styledProps, children));
    }
  }]);

  return AragonApp;
}(React.Component);

defineProperty(AragonApp, "propTypes", {
  className: propTypes.string,
  backgroundLogo: propTypes.bool,
  publicUrl: propTypes.string.isRequired,
  children: propTypes.node,
  supportLegacyAgents: propTypes.bool
});

defineProperty(AragonApp, "defaultProps", {
  backgroundLogo: false
});

defineProperty(AragonApp, "childContextTypes", {
  publicUrl: propTypes.string
});

defineProperty(AragonApp, "Styled", StyledAragonApp);

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

var srcCache = cachedMap(); // Check if a remote image exists.

function useImageExists(src) {
  var _useState = useState$1(false),
      _useState2 = slicedToArray(_useState, 2),
      exists = _useState2[0],
      setExists = _useState2[1];

  var _useState3 = useState$1(true),
      _useState4 = slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  useEffect(function () {
    var image = new Image();

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
      if (image) {
        image.removeEventListener('load', success);
        image = null;
      }
    };

    init();
    return done;
  }, [src]);
  return useMemo(function () {
    return {
      src: src,
      exists: exists,
      loading: loading
    };
  }, [src, exists, loading]);
} // render prop

var ImageExists = function ImageExists(_ref) {
  var src = _ref.src,
      children = _ref.children;
  return children(useImageExists(src));
};

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

/* eslint-disable react-hooks/rules-of-hooks */

function useOnBlur(cb) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  var handleBlur = useCallback(function (e) {
    if (!ref.current.contains(e.relatedTarget)) {
      cb();
    }
  }, [cb, ref]);
  return {
    ref: ref,
    handleBlur: handleBlur
  };
}

var KEYCODE_UP = 38;
var KEYCODE_DOWN = 40;
/* eslint-disable react-hooks/rules-of-hooks */

function useArrowKeysFocus(refs) {
  /* eslint-enable react-hooks/rules-of-hooks */
  var _useState = useState$1(-1),
      _useState2 = slicedToArray(_useState, 2),
      highlightedIndex = _useState2[0],
      _setHighlightedIndex = _useState2[1];

  var cycleFocus = useCallback(function (e, change) {
    e.preventDefault();
    var next = highlightedIndex + change;

    if (next > refs.length - 1) {
      next = 0;
    }

    if (next < 0) {
      next = refs.length - 1;
    }

    _setHighlightedIndex(next);
  }, [highlightedIndex, refs.length]);
  var handleKeyDown = useCallback(function (e) {
    var keyCode = e.keyCode;

    if (keyCode === KEYCODE_UP || keyCode === KEYCODE_DOWN) {
      cycleFocus(e, keyCode === KEYCODE_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  useEffect(function () {
    if (highlightedIndex === -1) {
      return;
    }

    if (!refs[highlightedIndex]) {
      return;
    }

    refs[highlightedIndex].focus();
  }, [highlightedIndex, refs]);
  useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  return {
    highlightedIndex: highlightedIndex,
    setHighlightedIndex: function setHighlightedIndex(index) {
      return function () {
        return _setHighlightedIndex(index);
      };
    }
  };
}

var MagnifyingGlass = function MagnifyingGlass(props) {
  return React.createElement("svg", _extends_1({
    width: 16,
    height: 16,
    fill: "none"
  }, props), React.createElement("path", {
    d: "M15.757 14.573l-3.944-3.96a6.307 6.307 0 0 0 1.57-4.153C13.382 2.898 10.38 0 6.69 0 3.001 0 0 2.898 0 6.46s3.002 6.46 6.691 6.46a6.784 6.784 0 0 0 3.834-1.169l3.974 3.99a.88.88 0 0 0 .629.259.885.885 0 0 0 .605-.235.823.823 0 0 0 .024-1.192zM6.69 1.685c2.727 0 4.946 2.142 4.946 4.775 0 2.633-2.219 4.775-4.946 4.775S1.746 9.093 1.746 6.46c0-2.633 2.218-4.775 4.945-4.775z",
    fill: "currentColor"
  }));
};

function _templateObject5$1() {
  var data = taggedTemplateLiteral(["\n                      text-align: left;\n                      padding: 4px 8px;\n                      width: 100%;\n                      border-radius: 0;\n                      border-left: 3px solid transparent;\n                      cursor: pointer;\n\n                      ", "\n                      ", ";\n                    "]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$2() {
  var data = taggedTemplateLiteral(["color: #a8b3c8"]);

  _templateObject4$2 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$3() {
  var data = taggedTemplateLiteral(["\n          position: absolute;\n          top: 0;\n          right: 0;\n          height: 40px;\n          width: 35px;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        "]);

  _templateObject3$3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = taggedTemplateLiteral(["\n          caret-color: ", ";\n          padding-right: 35px;\n        "]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = taggedTemplateLiteral(["position: relative"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var accent = theme.accent,
    contentBackground = theme.contentBackground,
    contentBorder = theme.contentBorder,
    textPrimary = theme.textPrimary;

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

  var _useState = useState$1(true),
      _useState2 = slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpened = _useState2[1];

  var wrapRef = useRef();

  var _useState3 = useState$1([]),
      _useState4 = slicedToArray(_useState3, 1),
      refs = _useState4[0];

  var handleClose = useCallback(function () {
    return setOpened(false);
  }, []);
  var handleFocus = useCallback(function () {
    return setOpened(true);
  }, []);
  var handleSelect = useCallback(function (item) {
    return function (e) {
      e.preventDefault();
      onSelect(item);
    };
  }, [onSelect]);
  var handleChange = useCallback(function (_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  }, [onChange]);

  var _useOnBlur = useOnBlur(handleClose, wrapRef),
      handleBlur = _useOnBlur.handleBlur;

  var _useArrowKeysFocus = useArrowKeysFocus(refs),
      highlightedIndex = _useArrowKeysFocus.highlightedIndex,
      setHighlightedIndex = _useArrowKeysFocus.setHighlightedIndex;

  var reset = setHighlightedIndex(-1);

  var _useOnBlur2 = useOnBlur(reset),
      containerRef = _useOnBlur2.ref,
      handleResetBlur = _useOnBlur2.handleBlur;

  useEffect(function () {
    reset();
  }, [opened, items, value]);
  useClickOutside(handleClose, wrapRef);
  return React.createElement(_StyledDiv$3, {
    ref: wrapRef,
    onBlur: handleBlur
  }, React.createElement(_StyledTextInput$2, {
    ref: ref,
    wide: wide,
    placeholder: placeholder,
    required: required,
    onChange: handleChange,
    onFocus: handleFocus,
    value: value
  }), React.createElement(_StyledDiv2$3, null, React.createElement(_StyledIconMagnifyingGlass, null)), React.createElement(Transition, {
    config: springs.swift,
    items: opened && !!items.length,
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
    function (_ref3) {
      var scale = _ref3.scale,
          opacity = _ref3.opacity;
      return React.createElement(Items, {
        ref: containerRef,
        onBlur: handleResetBlur,
        role: "listbox",
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (t) {
            return "scale3d(".concat(t, ",").concat(t, ",1)");
          })
        }
      }, Array.from(uniqueItems).map(function (item, index) {
        return React.createElement(Item, {
          role: "option",
          key: item.key || item
        }, React.createElement(_StyledButtonBase$1, {
          ref: function ref(node) {
            return refs[index] = node;
          },
          onClick: handleSelect(item),
          onFocus: setHighlightedIndex(index),
          onMouseOver: setHighlightedIndex(index),
          _css: index === highlightedIndex && "\n                          outline: 2px solid ".concat(theme.accent, ";\n                          background: #f9fafc;\n                          border-left: 3px solid ").concat(theme.accent, ";\n                        "),
          _css2: itemButtonStyles
        }, renderItem(item, value)));
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
var Item = styled.li.withConfig({
  displayName: "AutoComplete__Item",
  componentId: "bpnxyo-0"
})(["", ";overflow:hidden;cursor:pointer;"], unselectable());
var Items = styled(extendedAnimated.ul).withConfig({
  displayName: "AutoComplete__Items",
  componentId: "bpnxyo-1"
})(["position:absolute;z-index:2;top:100%;width:100%;padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;padding:0;margin:0;list-style:none;& ", ":first-child{border-top-left-radius:3px;border-top-right-radius:3px;}& ", ":last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px;}"], textPrimary, contentBackground, contentBorder, Item, Item);
var AutoCompleteMemo = React.memo(AutoComplete);
var AutoComplete$1 = React.forwardRef(function (props, ref) {
  return React.createElement(AutoCompleteMemo, _extends_1({}, props, {
    forwardedRef: ref
  }));
});

var _StyledDiv$3 = styled("div")(_templateObject$5());

var _StyledTextInput$2 = styled(WrapperTextInput)(_templateObject2$3(), accent);

var _StyledDiv2$3 = styled("div")(_templateObject3$3());

var _StyledIconMagnifyingGlass = styled(MagnifyingGlass)(_templateObject4$2());

var _StyledButtonBase$1 = styled(ButtonBase$1)(_templateObject5$1(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function _templateObject$6() {
  var data = taggedTemplateLiteral(["\n          height: 40px;\n          width: 100%;\n          text-align: left;\n          background: #fff;\n          cursor: pointer;\n          border: 1px solid ", ";\n          border-radius: 3px;\n          padding: 4px 8px;\n          &:hover,\n          &:focus {\n            outline: none;\n            border: 1px solid ", ";\n            border-radius: 3px;\n          }\n          ", ";\n        "]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}

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
    return React.createElement(_StyledButtonBase$2, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      _css: theme.contentBorder,
      _css2: theme.accent,
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

var _StyledButtonBase$2 = styled(ButtonBase$1)(_templateObject$6(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var shapeStyles = function shapeStyles(shape) {
  if (shape === 'disc') {
    return css(["overflow:hidden;padding-top:2px;letter-spacing:-0.5px;justify-content:center;align-items:center;width:18px;height:18px;border-radius:9px;", ";line-height:20px;"], font({
      size: 'xsmall',
      weight: 'bold'
    }));
  }

  if (shape === 'smalldisc') {
    return css(["overflow:hidden;padding-top:1px;letter-spacing:-1px;justify-content:center;align-items:center;width:14px;height:14px;border-radius:7px;", ";line-height:14px;"], font({
      size: 'xxsmall',
      weight: 'bold'
    }));
  }

  if (shape === 'compact') {
    return css(["padding:1px 3px 0;border-radius:3px;", ";"], font({
      size: 'xxsmall'
    }));
  } // round shape


  return css(["padding:1px 8px 0;border-radius:9px;", ";"], font({
    size: 'xsmall'
  }));
};

var Badge = styled.span.withConfig({
  displayName: "Badge",
  componentId: "akcx9j-0"
})(["display:inline-flex;font-weight:600;white-space:nowrap;color:", ";background:", ";", ";"], function (_ref) {
  var foreground = _ref.foreground;
  return foreground;
}, function (_ref2) {
  var background = _ref2.background;
  return background;
}, function (_ref3) {
  var shape = _ref3.shape;
  return shapeStyles(shape);
});
Badge.defaultProps = {
  shape: 'round',
  foreground: colors$1.Purple.Portage,
  background: colors$1.Purple.Lavender
};
Badge.propTypes = {
  shape: propTypes.oneOf(['disc', 'smalldisc', 'compact', 'round']),
  background: propTypes.string,
  foreground: propTypes.string
};

var Info = function Info(_ref) {
  var children = _ref.children,
      label = _ref.label,
      small = _ref.small,
      props = objectWithoutProperties(_ref, ["children", "label", "small"]);

  return React.createElement(Badge, _extends_1({
    shape: small ? 'smalldisc' : 'disc',
    background: theme.badgeInfoBackground,
    foreground: theme.badgeInfoForeground
  }, props), children || (typeof label === 'number' ? formatIntegerRange(label) : label));
};

Info.defaultProps = {
  small: false
};
Info.propTypes = {
  children: propTypes.node,
  label: propTypes.oneOfType([propTypes.number, propTypes.string]),
  small: propTypes.bool
};

var Notification = function Notification(_ref) {
  var children = _ref.children,
      label = _ref.label,
      small = _ref.small,
      props = objectWithoutProperties(_ref, ["children", "label", "small"]);

  return React.createElement(Badge, _extends_1({
    shape: small ? 'smalldisc' : 'disc',
    background: theme.badgeNotificationBackground,
    foreground: theme.badgeNotificationForeground
  }, props), children || (typeof label === 'number' ? formatIntegerRange(label) : label));
};

Notification.defaultProps = {
  small: false
};
Notification.propTypes = {
  children: propTypes.node,
  label: propTypes.oneOfType([propTypes.number, propTypes.string]),
  small: propTypes.bool
};

var Identity$1 = function Identity(props) {
  return React.createElement(Badge, _extends_1({
    shape: "compact",
    background: theme.badgeIdentityBackground,
    foreground: theme.badgeIdentityForeground
  }, props));
};

var App = function App(props) {
  return React.createElement(Badge, _extends_1({
    shape: "round",
    background: theme.badgeAppBackground,
    foreground: theme.badgeAppForeground
  }, props));
};

Badge.Info = Info;
Badge.Notification = Notification;
Badge.Identity = Identity$1;
Badge.App = App;

var BadgeNumber = function BadgeNumber(_ref) {
  var number = _ref.number,
      small = _ref.small,
      background = _ref.background,
      color = _ref.color,
      props = objectWithoutProperties(_ref, ["number", "small", "background", "color"]);

  return React.createElement(Badge, _extends_1({
    shape: small ? 'smalldisc' : 'disc',
    background: background,
    foreground: color
  }, props), number);
};

BadgeNumber.propTypes = {
  number: propTypes.number,
  small: propTypes.bool,
  color: propTypes.string,
  background: propTypes.string
};
BadgeNumber.defaultProps = {
  number: 0,
  small: false,
  color: theme.positiveText,
  background: theme.positive
};

var SafeLink = styled.a.attrs({
  // See https://mathiasbynens.github.io/rel-noopener
  rel: 'noopener noreferrer'
}).withConfig({
  displayName: "SafeLink",
  componentId: "ff844y-0"
})([""]);

var cross = "data:image/svg+xml,%3Csvg%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.476%201.524L6.3%205.7l4.176%204.176-1.062%201.062-4.176-4.176-4.176%204.176L0%209.876%204.176%205.7%200%201.524%201.062.462l4.176%204.176L9.414.462z%22%20fill%3D%22%23FB7777%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var check$1 = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2210%22%20viewBox%3D%220%200%2014%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4.176%207.956L12.114%200l1.062%201.062-9%209L0%205.886l1.044-1.062z%22%20fill%3D%22%2321D48E%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var crossWhite = "data:image/svg+xml,%3Csvg%20width%3D%2211%22%20height%3D%2211%22%20viewBox%3D%220%200%2011%2011%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M10.476%201.062L6.3%205.238l4.176%204.176-1.062%201.062L5.238%206.3l-4.176%204.176L0%209.414l4.176-4.176L0%201.062%201.062%200l4.176%204.176L9.414%200z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var checkWhite = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2210%22%20viewBox%3D%220%200%2014%2010%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M4.176%207.956L12.114%200l1.062%201.062-9%209L0%205.886l1.044-1.062z%22%20fill%3D%22%23FFF%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var gradientStart = theme.gradientStart,
    gradientEnd = theme.gradientEnd,
    gradientStartActive = theme.gradientStartActive,
    gradientEndActive = theme.gradientEndActive,
    gradientText = theme.gradientText,
    contentBackground$1 = theme.contentBackground,
    contentBorder$1 = theme.contentBorder,
    contentBorderActive = theme.contentBorderActive,
    secondaryBackground = theme.secondaryBackground,
    textPrimary$1 = theme.textPrimary,
    textSecondary = theme.textSecondary,
    disabledColor = theme.disabled,
    disabledText = theme.disabledText; // Plain button = normal or strong

var plainButtonStyles = css(["position:relative;overflow:hidden;box-shadow:0 1px 1px rgba(0,0,0,0);&:after{content:'';opacity:0;position:absolute;z-index:-1;top:0;left:0;right:0;bottom:0;}", ";"], function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? '' : css(["&:hover,&:focus{box-shadow:", ";}&:active{transform:translateY(1px);box-shadow:0 1px 1px rgba(0,0,0,0);&:after{opacity:1;}}"], function (_ref2) {
    var disabled = _ref2.disabled;
    return disabled ? 'none' : '0 1px 1px rgba(0, 0, 0, 0.2)';
  });
});
var modeNormal = css(["", ";&:active{color:", ";}"], plainButtonStyles, textPrimary$1);
var modeSecondary = css(["", ";background:", ";&:hover,&:focus{box-shadow:none;}"], plainButtonStyles, secondaryBackground);
var modeStrong = css(["", ";", ";", ";"], plainButtonStyles, font({
  size: 'small',
  weight: 'bold'
}), function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? css(["color:", ";background-color:", ";background-image:none;"], disabledText, disabledColor) : css(["color:", ";background-color:transparent;background-image:linear-gradient( 130deg,", ",", " )};&:after{background-image:linear-gradient( 130deg,", ",", " );}"], gradientText, gradientStart, gradientEnd, gradientStartActive, gradientEndActive);
});
var modeOutline = css(["background:transparent;padding-top:9px;padding-bottom:9px;border:1px solid ", ";&:hover,&:focus{border-color:", ";}&:active{color:", ";border-color:", ";}"], contentBorder$1, contentBorderActive, textPrimary$1, textPrimary$1);
var modeText = css(["padding:10px;background:transparent;&:active,&:focus{color:", ";}"], textPrimary$1);
var smallStyle = css(["padding:", ";"], function (_ref4) {
  var mode = _ref4.mode;
  return mode === 'outline' ? '4px 14px' : '5px 15px';
});
var miniStyle = css(["padding:", ";", ";"], function (_ref5) {
  var mode = _ref5.mode;
  return mode === 'outline' ? '1px 11px' : '2px 12px';
}, font({
  size: 'small'
}));

var getEmphasisStyle = function getEmphasisStyle(_ref6) {
  var emphasisColor = _ref6.emphasisColor,
      icon = _ref6.icon,
      iconLight = _ref6.iconLight,
      _ref6$iconX = _ref6.iconX,
      iconX = _ref6$iconX === void 0 ? '12px' : _ref6$iconX,
      _ref6$iconY = _ref6.iconY,
      iconY = _ref6$iconY === void 0 ? 'calc(50% - 1px)' : _ref6$iconY,
      _ref6$iconWidth = _ref6.iconWidth,
      iconWidth = _ref6$iconWidth === void 0 ? '34px' : _ref6$iconWidth;
  return css(["padding-left:", ";background-image:url(", ");background-position:", " ", ";background-repeat:no-repeat;", ";"], iconWidth, styledUrl(icon), iconX, iconY, function (_ref7) {
    var mode = _ref7.mode;

    if (mode === 'normal') {
      return css(["&,&:active{background-image:url(", ");}"], styledUrl(icon));
    }

    if (mode === 'strong') {
      return css(["&,&:active{background-image:url(", ");background-color:", ";}&:after{background:none;}"], styledUrl(iconLight), emphasisColor);
    }

    return '';
  });
};

var positiveStyle = getEmphasisStyle({
  emphasisColor: theme.positive,
  icon: check$1,
  iconLight: checkWhite
});
var negativeStyle = getEmphasisStyle({
  emphasisColor: theme.negative,
  icon: cross,
  iconLight: crossWhite,
  iconX: '10px',
  iconWidth: '30px'
});
var StyledButton = styled.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-8npd5h-0"
})(["display:inline-block;width:", ";padding:10px 15px;white-space:nowrap;", ";", ";text-decoration:none;color:", ";background:", ";border:0;border-radius:3px;outline:0;cursor:", ";&,&:after{transition-property:all;transition-duration:100ms;transition-timing-function:ease-in-out;}&::-moz-focus-inner{border:0;}", ";", ";", ";"], function (_ref8) {
  var wide = _ref8.wide;
  return wide ? '100%' : 'auto';
}, font({
  size: 'small',
  weight: 'normal'
}), unselectable, textSecondary, contentBackground$1, function (_ref9) {
  var disabled = _ref9.disabled;
  return disabled ? 'default' : 'pointer';
}, function (_ref10) {
  var mode = _ref10.mode;
  if (mode === 'secondary') return modeSecondary;
  if (mode === 'strong') return modeStrong;
  if (mode === 'outline') return modeOutline;
  if (mode === 'text') return modeText;
  return modeNormal;
}, function (_ref11) {
  var compact = _ref11.compact,
      size = _ref11.size;
  if (size === 'small' || compact) return smallStyle;
  if (size === 'mini') return miniStyle;
  return '';
}, function (_ref12) {
  var emphasis = _ref12.emphasis;
  if (emphasis === 'positive') return positiveStyle;
  if (emphasis === 'negative') return negativeStyle;
  return '';
});
var Button = React.forwardRef(function (props, ref) {
  return React.createElement(PublicUrl, null, function (url) {
    return React.createElement(StyledButton, _extends_1({
      ref: ref,
      publicUrl: url
    }, props));
  });
});
Button.Anchor = React.forwardRef(function (props, ref) {
  return React.createElement(Button, _extends_1({
    ref: ref,
    as: SafeLink
  }, props));
});

var StyledCard = styled.div.withConfig({
  displayName: "Card__StyledCard",
  componentId: "sc-13r75gj-0"
})(["width:", ";height:", ";background:", ";border:1px solid ", ";border-radius:3px;"], function (_ref) {
  var width = _ref.width;
  return width || '282px';
}, function (_ref2) {
  var height = _ref2.height;
  return height || '322px';
}, theme.contentBackground, theme.contentBorder);

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClick", function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          checked = _this$props.checked,
          indeterminate = _this$props.indeterminate;
      onChange(indeterminate ? false : !checked);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "focus", function () {
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
    value: function renderCheck(visible, node) {
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
        return React.createElement(CheckWrapper, {
          style: {
            opacity: progress,
            transform: progress.interpolate(function (v) {
              return "scale(".concat(v, ")");
            })
          }
        }, node);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          checked = _this$props3.checked,
          indeterminate = _this$props3.indeterminate,
          variant = _this$props3.variant,
          tabIndex = _this$props3.tabIndex,
          props = objectWithoutProperties(_this$props3, ["checked", "indeterminate", "variant", "tabIndex"]);

      return React.createElement(FocusVisible, null, function (_ref2) {
        var focusVisible = _ref2.focusVisible,
            onFocus = _ref2.onFocus;
        return React.createElement(Main$3, _extends_1({
          ref: _this2._element,
          role: variant,
          tabIndex: tabIndex,
          "aria-checked": _this2.getAriaChecked(),
          onClick: _this2.handleClick,
          focusVisible: focusVisible,
          onFocus: onFocus
        }, props), variant === 'checkbox' && _this2.renderCheck(checked && !indeterminate, React.createElement(Check$1, null)), variant === 'checkbox' && _this2.renderCheck(indeterminate, React.createElement(Dash, null)), variant === 'radio' && _this2.renderCheck(checked, React.createElement(Bullet, null)), React.createElement(FocusRing, {
          variant: variant
        }));
      });
    }
  }]);

  return Checkbox;
}(React.PureComponent);

defineProperty(Checkbox, "propTypes", {
  checked: propTypes.bool,
  indeterminate: propTypes.bool,
  onChange: propTypes.func,
  variant: propTypes.oneOf(['checkbox', 'radio']),
  tabIndex: propTypes.string
});

defineProperty(Checkbox, "defaultProps", {
  checked: false,
  indeterminate: false,
  onChange: noop,
  variant: 'checkbox',
  tabIndex: '0'
});

var FocusRing = styled.span.withConfig({
  displayName: "Checkbox__FocusRing",
  componentId: "sc-1avgrx5-0"
})(["position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:", ";display:none;"], theme.accent, function (p) {
  return p.variant === 'radio' ? '50%' : '3px';
});
var Main$3 = styled.button.attrs({
  type: 'button'
}).withConfig({
  displayName: "Checkbox__Main",
  componentId: "sc-1avgrx5-1"
})(["display:inline-flex;position:relative;width:14px;height:14px;margin:5px;background:#f3f9fb;border:1px solid #daeaef;border-radius:", ";outline:0;padding:0;cursor:pointer;&:active{border-color:#c9d9de;}&:focus ", "{display:", ";}&::-moz-focus-inner{border:0;}"], function (p) {
  return p.role === 'radio' ? '50%' : '3px';
}, FocusRing, function (p) {
  return p.focusVisible ? 'block' : 'none';
});
var CheckWrapper = styled(extendedAnimated.span).withConfig({
  displayName: "Checkbox__CheckWrapper",
  componentId: "sc-1avgrx5-2"
})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;transform-origin:50% 50%;"]);
var Check$1 = styled(Check).withConfig({
  displayName: "Checkbox__Check",
  componentId: "sc-1avgrx5-3"
})(["filter:brightness(0);transform-origin:50% 50%;transform:scale(0.88);"]);

var Dash = function Dash() {
  return (
    /* Use SVG to have subpixels (1.5 storke width) on Chrome */
    React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 14 14"
    }, React.createElement("line", {
      x1: "3",
      y1: "7",
      x2: "11",
      y2: "7",
      stroke: "black",
      strokeWidth: "1.5"
    }))
  );
};

var Bullet = styled.span.withConfig({
  displayName: "Checkbox__Bullet",
  componentId: "sc-1avgrx5-4"
})(["display:block;width:8px;height:8px;border-radius:50%;background:", ";"], theme.accent);

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
    return React.createElement(Main$4, {
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
var Main$4 = styled.div.withConfig({
  displayName: "CircleGraph__Main",
  componentId: "sc-2a8gt2-0"
})(["position:relative;"]);
var CircleSvg = styled.svg.withConfig({
  displayName: "CircleGraph__CircleSvg",
  componentId: "sc-2a8gt2-1"
})(["position:absolute;top:0;left:0;"]);
var CircleBase = styled.circle.withConfig({
  displayName: "CircleGraph__CircleBase",
  componentId: "sc-2a8gt2-2"
})(["fill:none;stroke:#6d777b;opacity:0.3;"]);
var CircleValue = styled(extendedAnimated.circle).withConfig({
  displayName: "CircleGraph__CircleValue",
  componentId: "sc-2a8gt2-3"
})(["fill:none;transform:rotate(270deg);transform-origin:50% 50%;stroke:#21c1e7;"]);
var Label = styled(extendedAnimated.div).withConfig({
  displayName: "CircleGraph__Label",
  componentId: "sc-2a8gt2-4"
})(["font-size:16px;font-weight:400;color:#000;"]);

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

var ContextMenu =
/*#__PURE__*/
function (_React$Component) {
  inherits(ContextMenu, _React$Component);

  function ContextMenu() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, ContextMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(ContextMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      opened: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        opened: false
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleBaseButtonClick", function () {
      _this.setState(function (_ref) {
        var opened = _ref.opened;
        return {
          opened: !opened
        };
      });
    });

    return _this;
  }

  createClass(ContextMenu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var opened = this.state.opened;
      var children = this.props.children;
      return React.createElement(reactOnclickout, {
        onClickOut: this.handleClose
      }, React.createElement(Spring, {
        config: springs.smooth,
        to: {
          openProgress: Number(opened)
        },
        native: true
      }, function (_ref2) {
        var openProgress = _ref2.openProgress;
        return React.createElement(Main$5, {
          style: {
            zIndex: opened ? '2' : '1',
            boxShadow: openProgress.interpolate(function (t) {
              return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
            })
          }
        }, React.createElement(BaseButton, {
          onClick: _this2.handleBaseButtonClick,
          opened: opened
        }, React.createElement("span", null, React.createElement(Ellipsis, {
          style: {
            color: opened ? theme.accent : theme.textSecondary
          }
        })), React.createElement("span", null, React.createElement(extendedAnimated.div, {
          style: {
            color: theme.textTertiary,
            transform: openProgress.interpolate(function (t) {
              return "rotate(".concat(t * 180, "deg)");
            })
          }
        }, React.createElement(ArrowDown, null)))), React.createElement(Popup, {
          onClick: _this2.handleClose,
          style: {
            display: opened ? 'block' : 'none',
            opacity: openProgress,
            boxShadow: openProgress.interpolate(function (t) {
              return "0 4px 4px rgba(0, 0, 0, ".concat(t * 0.03, ")");
            })
          }
        }, children));
      }));
    }
  }]);

  return ContextMenu;
}(React.Component);

defineProperty(ContextMenu, "propTypes", {
  children: propTypes.node
});

var Main$5 = styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Main",
  componentId: "ris724-0"
})(["position:relative;width:", "px;height:", "px;"], BASE_WIDTH, BASE_HEIGHT);
var BaseButton = styled.div.withConfig({
  displayName: "ContextMenu__BaseButton",
  componentId: "ris724-1"
})(["position:relative;z-index:2;display:flex;justify-content:center;align-items:center;width:100%;height:", "px;background:", ";border:1px solid ", ";border-radius:", ";border-bottom-color:", ";cursor:pointer;", ";&:active{background:", ";border-bottom-color:", ";}&:before{display:", ";content:'';position:absolute;bottom:-1px;right:-1px;width:1px;height:2px;background:", ";}& > span{display:flex;align-items:center;&:first-child{margin-right:5px;}}"], BASE_HEIGHT, theme.contentBackground, theme.contentBorder, function (_ref3) {
  var opened = _ref3.opened;
  return opened ? '3px 3px 0 0' : '3px';
}, function (_ref4) {
  var opened = _ref4.opened;
  return opened ? theme.contentBackground : theme.contentBorder;
}, unselectable(), theme.contentBackgroundActive, function (_ref5) {
  var opened = _ref5.opened;
  return opened ? theme.contentBackgroundActive : theme.contentBorder;
}, function (_ref6) {
  var opened = _ref6.opened;
  return opened ? 'block' : 'none';
}, theme.contentBorder);
var Popup = styled(extendedAnimated.div).withConfig({
  displayName: "ContextMenu__Popup",
  componentId: "ris724-2"
})(["overflow:hidden;position:absolute;top:", "px;right:0;padding:10px 0;background:", ";border:1px solid ", ";border-radius:3px 0 3px 3px;"], BASE_HEIGHT - 1, theme.contentBackground, theme.contentBorder);
ContextMenu.BASE_WIDTH = 46;
ContextMenu.BASE_HEIGHT = 32;

var ContextMenuItem = styled.div.withConfig({
  displayName: "ContextMenuItem",
  componentId: "sc-6mg7lj-0"
})(["display:flex;align-items:center;padding:5px 20px;cursor:pointer;white-space:nowrap;", ";&:active{background:", ";}"], unselectable(), theme.contentBackgroundActive);

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto.hasOwnProperty;

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
  var isOwn = hasOwnProperty$2.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  {
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
function isFunction(value) {
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
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$3).replace(reRegExpChar, '\\$&')
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
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
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
var hasOwnProperty$4 = objectProto$3.hasOwnProperty;

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
  return hasOwnProperty$4.call(data, key) ? data[key] : undefined;
}

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$4.hasOwnProperty;

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
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
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
var FUNC_ERROR_TEXT = 'Expected a function';

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
    throw new TypeError(FUNC_ERROR_TEXT);
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      lastDraw: -1
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "draw", function () {
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

function _templateObject6() {
  var data = taggedTemplateLiteral(["margin-right: 15px"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$2() {
  var data = taggedTemplateLiteral(["\n          white-space: nowrap;\n          ", ";\n        "]);

  _templateObject5$2 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$3() {
  var data = taggedTemplateLiteral(["\n                    margin: 0 4px;\n                    color: ", ";\n                    font-weight: 400;\n                  "]);

  _templateObject4$3 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$4() {
  var data = taggedTemplateLiteral(["\n                    margin-left: 2px;\n                    font-size: 12px;\n                    color: ", ";\n                  "]);

  _templateObject3$4 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = taggedTemplateLiteral(["\n                  font-size: 15px;\n                  font-weight: 600;\n                  color: ", ";\n\n                  ", ";\n                "]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = taggedTemplateLiteral(["\n            font-weight: 600;\n            color: ", ";\n          "]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
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
    return formats[format].includes(symbol) ? toConsumableArray(units).concat([unitNames[symbol]]) : units;
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "renderTime", function () {
      var _this$props = _this.props,
          start = _this$props.start,
          end = _this$props.end,
          format = _this$props.format,
          showEmpty = _this$props.showEmpty,
          maxUnits = _this$props.maxUnits;

      var _getTime = getTime(start, end, format, showEmpty, maxUnits),
          totalInSeconds = _getTime.totalInSeconds,
          units = _getTime.units;

      if (totalInSeconds < 0 || Object.is(totalInSeconds, -0)) {
        return React.createElement(_StyledSpan, {
          _css: theme.textSecondary
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
        }, React.createElement(_StyledSpan2, {
          _css2: theme.textPrimary,
          _css3: isSeconds && // Fix the width of the seconds unit so that
          // it doesn’t jump too much.
          "\n                      display: inline-flex;\n                      align-items: baseline;\n                      justify-content: space-between;\n                      min-width: 31px;\n                    "
        }, formatUnit(unit[1]), React.createElement(_StyledSpan3, {
          _css4: theme.textSecondary
        }, unit[0])), !isLast && // Separator
        React.createElement(_StyledSpan4, {
          _css5: theme.textTertiary
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
          start = _this$props2.start;
      return React.createElement(_StyledTime, {
        dateTime: formatHtmlDatetime(end || start),
        _css6: unselectable()
      }, React.createElement(_StyledSpan5, null, React.createElement(Time, null)), React.createElement(Redraw, {
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
  start: propTypes.instanceOf(Date)
});

defineProperty(Timer, "defaultProps", {
  format: formats.yMdhms,
  maxUnits: -1,
  showEmpty: false
});

var _StyledSpan = styled("span")(_templateObject$7(), function (p) {
  return p._css;
});

var _StyledSpan2 = styled("span")(_templateObject2$4(), function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledSpan3 = styled("span")(_templateObject3$4(), function (p) {
  return p._css4;
});

var _StyledSpan4 = styled("span")(_templateObject4$3(), function (p) {
  return p._css5;
});

var _StyledTime = styled("time")(_templateObject5$2(), function (p) {
  return p._css6;
});

var _StyledSpan5 = styled("span")(_templateObject6());

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
      return React.createElement(Timer, {
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

var NON_BREAKING_SPACE = '\xa0';
var accent$1 = theme.accent,
    contentBackgroundActive = theme.contentBackgroundActive;

var DropDownItem =
/*#__PURE__*/
function (_React$Component) {
  inherits(DropDownItem, _React$Component);

  function DropDownItem() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, DropDownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(DropDownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      pressed: false,
      displayFocus: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleActivate", function (event) {
      var keyboard = event.type === 'keydown';

      if (keyboard && event.keyCode !== 13) {
        return;
      }

      _this.props.onActivate(_this.props.index, {
        keyboard: keyboard
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleMouseDown", function () {
      _this.setState({
        pressed: true
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleMouseUp", function () {
      _this.setState({
        pressed: false
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleFocus", function () {
      _this.setState({
        displayFocus: !_this.state.pressed
      });
    });

    return _this;
  }

  createClass(DropDownItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          mainRef = _this$props.mainRef,
          active = _this$props.active;
      var displayFocus = this.state.displayFocus;
      return React.createElement(StyledDropDownItem, {
        ref: mainRef,
        className: className,
        active: active,
        displayFocus: displayFocus,
        onClick: this.handleActivate,
        onKeyDown: this.handleActivate,
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onFocus: this.handleFocus
      }, children);
    }
  }]);

  return DropDownItem;
}(React.Component);

defineProperty(DropDownItem, "propTypes", {
  active: propTypes.bool,
  children: propTypes.node,
  index: propTypes.number,
  mainRef: propTypes.func,
  onActivate: propTypes.func,
  className: propTypes.string
});

defineProperty(DropDownItem, "defaultProps", {
  children: NON_BREAKING_SPACE,
  mainRef: function mainRef() {},
  className: ''
});

var StyledDropDownItem = styled.div.attrs({
  tabIndex: '0'
}).withConfig({
  displayName: "DropDownItem__StyledDropDownItem",
  componentId: "sc-192d7e-0"
})(["position:relative;padding:8px 15px;cursor:pointer;outline:0;&:after{content:'';opacity:0;position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;margin:-1px -2px;border:2px solid ", ";transition:all 100ms ease-in-out;}&:active{background-color:", ";}&:hover,&:focus{color:", ";}&:focus:after{opacity:", ";}"], accent$1, contentBackgroundActive, accent$1, function (_ref) {
  var displayFocus = _ref.displayFocus;
  return displayFocus ? 1 : 0;
});

var arrow = "data:image/svg+xml,%3Csvg%20width%3D%229%22%20height%3D%225%22%20viewBox%3D%220%200%209%205%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h8.36L4.18%204.18z%22%20fill%3D%22%23B3B3B3%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

var NON_BREAKING_SPACE$1 = '\xa0';
var contentBackground$2 = theme.contentBackground,
    contentBorder$2 = theme.contentBorder,
    textPrimary$2 = theme.textPrimary;
var StyledDropDown = styled.div.withConfig({
  displayName: "DropDown__StyledDropDown",
  componentId: "sc-17zpefi-0"
})(["position:relative;z-index:", ";display:", ";flex-direction:column;color:", ";white-space:nowrap;box-shadow:0 4px 4px 0 rgba(0,0,0,0.03);", ";&:focus{outline:0;}"], function (_ref) {
  var opened = _ref.opened;
  return opened ? '2' : '0';
}, function (_ref2) {
  var wide = _ref2.wide;
  return wide ? 'flex' : 'inline-flex';
}, textPrimary$2, unselectable());
var DropDownItems = styled(extendedAnimated.div).withConfig({
  displayName: "DropDown__DropDownItems",
  componentId: "sc-17zpefi-1"
})(["position:absolute;z-index:2;top:calc(100% - 1px);padding:8px 0;color:", ";background:", ";border:1px solid ", ";box-shadow:0 4px 4px 0 rgba(0,0,0,0.06);border-radius:3px;list-style:none;"], textPrimary$2, contentBackground$2, contentBorder$2);
var BlockingLayer = styled(extendedAnimated.div).withConfig({
  displayName: "DropDown__BlockingLayer",
  componentId: "sc-17zpefi-2"
})(["position:absolute;z-index:2;top:0;left:0;right:0;bottom:0;"]);
var DropDownActiveItem = styled(PublicUrl.hocWrap(DropDownItem)).withConfig({
  displayName: "DropDown__DropDownActiveItem",
  componentId: "sc-17zpefi-3"
})(["padding-right:40px;background:", ";background-image:url(", ");background-repeat:no-repeat;background-position:calc(100% - 15px) 50%;border:1px solid ", ";border-radius:3px;&:hover,&:focus{color:inherit;}&:active{color:", ";}"], contentBackground$2, PublicUrl.styledUrl(arrow), contentBorder$2, textPrimary$2);

var DropDown =
/*#__PURE__*/
function (_React$Component) {
  inherits(DropDown, _React$Component);

  function DropDown() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, DropDown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(DropDown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      opened: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "activeItemElt", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleToggle", function () {
      _this.setState({
        opened: !_this.state.opened
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        opened: false
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleItemActivate", function (index, _ref3) {
      var keyboard = _ref3.keyboard;

      _this.props.onChange(index, _this.props.items);

      _this.setState({
        opened: false
      });

      if (_this.activeItemElt && keyboard) {
        _this.activeItemElt.focus();
      }
    });

    return _this;
  }

  createClass(DropDown, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          active = _this$props.active,
          wide = _this$props.wide;
      var opened = this.state.opened;
      var activeItem = items[active] || items[0];
      return React.createElement(reactOnclickout, {
        onClickOut: this.handleClose
      }, React.createElement(StyledDropDown, {
        wide: wide,
        opened: opened
      }, React.createElement(DropDownActiveItem, {
        onActivate: this.handleToggle,
        mainRef: function mainRef(el) {
          return _this2.activeItemElt = el;
        }
      }, activeItem), React.createElement(Transition, {
        config: springs.swift,
        items: opened,
        from: {
          scale: 0.98,
          opacity: 0,
          enabled: 1
        },
        enter: {
          scale: 1,
          opacity: 1,
          enabled: 1
        },
        leave: {
          scale: 1,
          opacity: 0,
          enabled: 0
        },
        native: true
      }, function (opened) {
        return opened && function (_ref4) {
          var scale = _ref4.scale,
              opacity = _ref4.opacity,
              enabled = _ref4.enabled;
          return React.createElement(DropDownItems, {
            role: "listbox",
            style: {
              opacity: opacity,
              transform: scale.interpolate(function (t) {
                return "scale3d(".concat(t, ",").concat(t, ",1)");
              }),
              minWidth: wide ? '100%' : '0'
            }
          }, items.length ? items.map(function (item, i) {
            return React.createElement(DropDownItem, {
              role: "option",
              key: i,
              index: i,
              active: i === active,
              onActivate: _this2.handleItemActivate
            }, item);
          }) : NON_BREAKING_SPACE$1, React.createElement(BlockingLayer, {
            style: {
              display: enabled.interpolate(function (t) {
                return t === 1 ? 'none' : 'block';
              })
            }
          }));
        };
      })));
    }
  }]);

  return DropDown;
}(React.Component);

defineProperty(DropDown, "propTypes", {
  items: propTypes.arrayOf(propTypes.node),
  wide: propTypes.bool,
  active: propTypes.number,
  onChange: propTypes.func
});

defineProperty(DropDown, "defaultProps", {
  items: [],
  wide: false,
  active: 0,
  onChange: function onChange() {}
});

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

var ExtendedPropTypes = objectSpread({}, propTypes, {
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

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var defineProperty$1 = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty$1) {
    defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$5.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
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
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$7.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/** Detect free variable `exports`. */
var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports$1 && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$8.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$a = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$a.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn$1(source), object);
}

/** Detect free variable `exports`. */
var freeExports$2 = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule$2 = freeExports$2 && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;

/** Built-in value references. */
var Buffer$1 = moduleExports$2 ? root.Buffer : undefined,
    allocUnsafe = Buffer$1 ? Buffer$1.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

/* Built-in method references that are verified to be native. */
var Promise$1 = getNative(root, 'Promise');

/* Built-in method references that are verified to be native. */
var Set$1 = getNative(root, 'Set');

/* Built-in method references that are verified to be native. */
var WeakMap$1 = getNative(root, 'WeakMap');

/** `Object#toString` result references. */
var mapTag$1 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$1 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (Map$1 && getTag(new Map$1) != mapTag$1) ||
    (Promise$1 && getTag(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag(new Set$1) != setTag$1) ||
    (WeakMap$1 && getTag(new WeakMap$1) != weakMapTag$1)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$1;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$1;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var getTag$1 = getTag;

/** Used for built-in method references. */
var objectProto$c = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$b = objectProto$c.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$b.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]',
    float32Tag$1 = '[object Float32Array]',
    float64Tag$1 = '[object Float64Array]',
    int8Tag$1 = '[object Int8Array]',
    int16Tag$1 = '[object Int16Array]',
    int32Tag$1 = '[object Int32Array]',
    uint8Tag$1 = '[object Uint8Array]',
    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
    uint16Tag$1 = '[object Uint16Array]',
    uint32Tag$1 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);

    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);

    case dataViewTag$2:
      return cloneDataView(object, isDeep);

    case float32Tag$1: case float64Tag$1:
    case int8Tag$1: case int16Tag$1: case int32Tag$1:
    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
      return cloneTypedArray(object, isDeep);

    case mapTag$2:
      return new Ctor;

    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);

    case regexpTag$1:
      return cloneRegExp(object);

    case setTag$2:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/** `Object#toString` result references. */
var mapTag$3 = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag$1(value) == mapTag$3;
}

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

/** `Object#toString` result references. */
var setTag$3 = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$3;
}

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag$2 = '[object Boolean]',
    dateTag$2 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$2 = '[object Function]',
    genTag$1 = '[object GeneratorFunction]',
    mapTag$4 = '[object Map]',
    numberTag$2 = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag$2 = '[object RegExp]',
    setTag$4 = '[object Set]',
    stringTag$2 = '[object String]',
    symbolTag$1 = '[object Symbol]',
    weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]',
    dataViewTag$3 = '[object DataView]',
    float32Tag$2 = '[object Float32Array]',
    float64Tag$2 = '[object Float64Array]',
    int8Tag$2 = '[object Int8Array]',
    int16Tag$2 = '[object Int16Array]',
    int32Tag$2 = '[object Int32Array]',
    uint8Tag$2 = '[object Uint8Array]',
    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
    uint16Tag$2 = '[object Uint16Array]',
    uint32Tag$2 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
cloneableTags[numberTag$2] = cloneableTags[objectTag$2] =
cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag$1(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$2 || tag == argsTag$2 || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/** `Object#toString` result references. */
var symbolTag$2 = '[object Symbol]';

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
    (isObjectLike(value) && baseGetTag(value) == symbolTag$2);
}

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$1 ? Symbol$1.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

/** `Object#toString` result references. */
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$d = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$c = objectProto$d.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$c.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

/** Built-in value references. */
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty$1 ? identity$1 : function(func, string) {
  return defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG$1 = 1,
    CLONE_FLAT_FLAG$1 = 2,
    CLONE_SYMBOLS_FLAG$1 = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG$1 | CLONE_FLAT_FLAG$1 | CLONE_SYMBOLS_FLAG$1, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

var EmptyStateCard =
/*#__PURE__*/
function (_React$Component) {
  inherits(EmptyStateCard, _React$Component);

  function EmptyStateCard(props) {
    var _this;

    classCallCheck(this, EmptyStateCard);

    _this = possibleConstructorReturn(this, getPrototypeOf(EmptyStateCard).call(this, props));

    _this.displayWarnings({}, props);

    return _this;
  }

  createClass(EmptyStateCard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.displayWarnings(prevProps, this.props);
    }
  }, {
    key: "displayWarnings",
    value: function displayWarnings(prevProps, props) {
      // Deprecated warnings
      if (prevProps.actionButton !== props.actionButton && props.actionButton) {
        warn('The “actionButton” prop is deprecated. Please use “action” to pass ' + 'a custom element instead.');
      }

      if (prevProps.icon !== props.icon && props.icon && !React.isValidElement(props.icon)) {
        warn('Passing a component to the “icon” prop is deprecated. Please pass ' + 'an element instead (i.e. use icon={<Icon />} rather than ' + 'icon={Icon}).');
      } // Display a warning if `action` is used to override the button, while also
      // using one of the props that apply to the default button component.


      var anyActionParam = props.actionDisabled || props.actionText || props.onActivate;

      if (prevProps.action !== props.action && props.action && anyActionParam) {
        warn('Using `action` takes priority over `actionDisabled`, `actionText`, ' + 'and `onActivate`. Please use either `action` or any of these ' + 'props.');
      }
    } // Render icon, even when provided as a component (deprecated)

  }, {
    key: "iconElement",
    value: function iconElement() {
      var icon = this.props.icon;
      return !icon || React.isValidElement(icon) ? icon : React.createElement(icon);
    } // Render the action (usually a button)

  }, {
    key: "actionElement",
    value: function actionElement() {
      var _this$props = this.props,
          action = _this$props.action,
          actionButton = _this$props.actionButton,
          actionDisabled = _this$props.actionDisabled,
          actionText = _this$props.actionText,
          onActivate = _this$props.onActivate; // If an action node is provided, it takes priority above the other props

      if (action) {
        return action;
      } // If no label is provided, the button is not displayed


      if (!actionText) {
        return null;
      } // Use the provided actionButton if it exists, or a local component.


      var Button$$1 = actionButton || DefaultActionButton;
      return React.createElement(Button$$1, {
        disabled: actionDisabled,
        mode: "strong",
        onClick: onActivate,
        wide: true
      }, actionText);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          text = _this$props2.text,
          props = objectWithoutProperties(_this$props2, ["title", "text"]);

      var extraProps = omit(props, Object.keys(EmptyStateCard.propTypes));
      return React.createElement(Main$6, extraProps, React.createElement("section", null, this.iconElement(), React.createElement(Heading, null, React.createElement(Text, {
        color: theme.accent,
        weight: "bold",
        size: "large"
      }, title)), text && React.createElement(Text.Block, null, text), React.createElement(ActionWrapper, null, this.actionElement())));
    }
  }]);

  return EmptyStateCard;
}(React.Component);

defineProperty(EmptyStateCard, "propTypes", {
  action: ExtendedPropTypes.element,
  actionButton: ExtendedPropTypes._component,
  actionDisabled: ExtendedPropTypes.bool,
  actionText: ExtendedPropTypes.string,
  icon: ExtendedPropTypes.oneOfType([ExtendedPropTypes.element, ExtendedPropTypes._component]),
  onActivate: ExtendedPropTypes.func,
  text: ExtendedPropTypes.string,
  title: ExtendedPropTypes.string
});

defineProperty(EmptyStateCard, "defaultProps", {
  title: 'Nothing here.',
  actionDisabled: false,
  onActivate: noop
});

var Main$6 = styled(StyledCard).withConfig({
  displayName: "EmptyStateCard__Main",
  componentId: "ov2yly-0"
})(["display:flex;padding:40px 60px;align-items:center;justify-content:center;text-align:center;section{padding-top:20px;}"]);
var DefaultActionButton = styled(Button).withConfig({
  displayName: "EmptyStateCard__DefaultActionButton",
  componentId: "ov2yly-1"
})(["width:150px;"]);
var Heading = styled.h1.withConfig({
  displayName: "EmptyStateCard__Heading",
  componentId: "ov2yly-2"
})(["margin:20px 0 5px;"]);
var ActionWrapper = styled.div.withConfig({
  displayName: "EmptyStateCard__ActionWrapper",
  componentId: "ov2yly-3"
})(["margin-top:20px;"]);

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_document", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClick", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (!_this._element.contains(e.target)) {
        onEscapeOutside();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleEscape", function (e) {
      var onEscapeOutside = _this.props.onEscapeOutside;

      if (e.keyCode === 27) {
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

var ExternalLink = function ExternalLink(props) {
  return React.createElement(SafeLink, _extends_1({
    target: "_blank"
  }, props));
};

var StyledField = styled.div.withConfig({
  displayName: "Field__StyledField",
  componentId: "uqte4v-0"
})(["margin-bottom:20px;"]);
var StyledAsterisk = styled.span.withConfig({
  displayName: "Field__StyledAsterisk",
  componentId: "uqte4v-1"
})(["color:", ";margin-left:auto;padding-top:3px;font-size:12px;"], theme.accent);
var StyledTextBlock = styled(Text.Block).withConfig({
  displayName: "Field__StyledTextBlock",
  componentId: "uqte4v-2"
})(["", ";display:flex;"], unselectable());

var Field = function Field(_ref) {
  var children = _ref.children,
      label = _ref.label,
      props = objectWithoutProperties(_ref, ["children", "label"]);

  var isRequired = React.Children.toArray(children).some(function (_ref2) {
    var props = _ref2.props;
    return props && props.required;
  });
  return React.createElement(StyledField, props, React.createElement("label", null, React.createElement(StyledTextBlock, {
    color: theme.textSecondary,
    smallcaps: true
  }, label, isRequired && React.createElement(StyledAsterisk, {
    title: "Required"
  }, "*")), children));
};

Field.propTypes = {
  children: propTypes.node,
  label: propTypes.string,
  required: propTypes.bool
};

var _React$createContext$2 = React.createContext(null),
    Provider$2 = _React$createContext$2.Provider,
    Consumer$1 = _React$createContext$2.Consumer;

var RootProvider =
/*#__PURE__*/
function (_React$Component) {
  inherits(RootProvider, _React$Component);

  function RootProvider() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, RootProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(RootProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      element: null
    });

    return _this;
  }

  createClass(RootProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        element: this._element.current
      });
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.state.element;
      var children = this.props.children;
      return React.createElement(Provider$2, {
        value: element
      }, React.createElement("div", {
        ref: this._element
      },
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
  }]);

  return RootProvider;
}(React.Component);

defineProperty(RootProvider, "propTypes", {
  children: propTypes.node
});

var Root = function Root(props) {
  return React.createElement(Consumer$1, props);
};

Root.Provider = RootProvider;

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

function _templateObject$8() {
  var data = taggedTemplateLiteral(["\n              position: absolute;\n              z-index: 1;\n              width: 100%;\n              display: flex;\n              justify-content: center;\n              bottom: 25px;\n            "]);

  _templateObject$8 = function _templateObject() {
    return data;
  };

  return data;
}
var FloatIndicator = React.memo(function (_ref) {
  var children = _ref.children,
      visible = _ref.visible;
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
      return React.createElement(_StyledDiv$4, null, React.createElement(Box, {
        style: {
          pointerEvents: visible ? 'auto' : 'none',
          opacity: progress,
          transform: progress.interpolate(function (v) {
            return "translate3d(0, calc(10px * ".concat(1 - v, "), 0)");
          })
        }
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
var Box = styled(extendedAnimated.div).withConfig({
  displayName: "FloatIndicator__Box",
  componentId: "sc-1mhu8xn-0"
})(["display:flex;padding:8px 20px;background:", ";color:", ";border:1px solid ", ";border-radius:3px;", ";cursor:default;"], theme.contentBackground, theme.textSecondary, theme.contentBorder, font({
  size: 'small'
}));

var _StyledDiv$4 = styled("div")(_templateObject$8());

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
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
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction$1(functionToCheck) {
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
  var css$$1 = window.getComputedStyle(element, null);
  return property ? css$$1[property] : css$$1;
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

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck$2 = function (instance, Constructor) {
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





var defineProperty$2 = function (obj, key, value) {
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
  return isFixed(getParentNode(element));
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
    if (modifier.enabled && isFunction$1(fn)) {
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


  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;
  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;

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
function arrow$1(data, options) {
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
  var css$$1 = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css$$1['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css$$1['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$2(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$2(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

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
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

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
      return defineProperty$2({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$2({}, mainSide, value);
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
      start: defineProperty$2({}, side, reference[side]),
      end: defineProperty$2({}, side, reference[side] + reference[measurement] - popper[measurement])
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
    fn: arrow$1,
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
    boundariesElement: 'viewport'
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
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck$2(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

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
      if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
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

var _ref2;

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_cardElement", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_popperElement", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_document", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_popper", null);

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleEscape", function (_ref) {
      var keyCode = _ref.keyCode;
      var _this$props = _this.props,
          opener = _this$props.opener,
          onClose = _this$props.onClose;

      if (keyCode === 27) {
        // On escape, we always move the focus back to the opener.
        opener.focus();
        onClose();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleBlur", function (event) {
      var _this$props2 = _this.props,
          opener = _this$props2.opener,
          onClose = _this$props2.onClose;
      var focusedElement = event.relatedTarget;

      if (_this._cardElement.current.contains(focusedElement)) {
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
      var placement = this.props.placement;
      var settings = {
        placement: placement,
        modifiers: {
          preventOverflow: {
            enabled: true,
            padding: 10,
            boundariesElement: 'window'
          }
        },
        positionFixed: false
      };

      if (placement !== 'center') {
        return settings;
      }

      return objectSpread({}, settings, {
        placement: 'top-start',
        modifiers: objectSpread({}, settings.modifiers, {
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
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          zIndex = _this$props4.zIndex,
          children = _this$props4.children,
          transitionStyles = _this$props4.transitionStyles;
      var scale = transitionStyles.scale,
          opacity = transitionStyles.opacity;
      return React.createElement(Main$7, {
        ref: this._popperElement,
        style: {
          zIndex: zIndex
        }
      }, React.createElement(Card, {
        tabIndex: "0",
        onBlur: this.handleBlur,
        ref: this._cardElement,
        style: {
          opacity: opacity,
          transform: scale.interpolate(function (v) {
            return "scale3d(".concat(v, ", ").concat(v, ", 1)");
          })
        }
      }, children));
    }
  }]);

  return PopoverBase;
}(React.Component);

defineProperty(PopoverBase, "propTypes", {
  opener: propTypes.instanceOf(Element),
  placement: propTypes.oneOf( // "center" is a value that doesn’t exist in Popper, but we are using it
  // to define custom Popper settings (see getPopperSettings() below).
  (_ref2 = ['center']).concat.apply(_ref2, toConsumableArray(['auto', 'top', 'right', 'bottom', 'left'].map(function (position) {
    return [position, "".concat(position, "-start"), "".concat(position, "-end")];
  })))),
  zIndex: propTypes.number,
  onClose: propTypes.func,
  children: propTypes.node,
  transitionStyles: propTypes.object
});

defineProperty(PopoverBase, "defaultProps", {
  opener: null,
  placement: 'center',
  onClose: noop,
  zIndex: 999
});

var Main$7 = styled(extendedAnimated.div).withConfig({
  displayName: "Popover__Main",
  componentId: "sc-1hohxqp-0"
})(["position:absolute;top:0;left:0;"]);
var Card = styled(extendedAnimated.div).withConfig({
  displayName: "Popover__Card",
  componentId: "sc-1hohxqp-1"
})(["background:", ";border:1px solid #e6e6e6;border-radius:3px;filter:drop-shadow(0 4px 4px rgba(0,0,0,0.06));&:focus{outline:0;}"], theme.contentBackground);

var Popover = function Popover(props) {
  return React.createElement(RootPortal, null, React.createElement(Transition, {
    items: props.visible,
    config: springs.swift,
    from: {
      scale: 0.9,
      opacity: 0
    },
    enter: {
      scale: 1,
      opacity: 1
    },
    leave: {
      scale: 0.9,
      opacity: 0
    },
    native: true
  }, function (visible) {
    return visible && function (transitionStyles) {
      return React.createElement(PopoverBase, _extends_1({}, props, {
        transitionStyles: transitionStyles
      }));
    };
  }));
};

Popover.propTypes = objectSpread({}, PopoverBase.propTypes, {
  visible: propTypes.bool
});
Popover.defaultProps = objectSpread({}, PopoverBase.defaultProps, {
  visible: true
});

var PopoverActionType = propTypes.shape({
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
});

function _templateObject7() {
  var data = taggedTemplateLiteral(["\n                  color: ", ";\n                "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = taggedTemplateLiteral(["\n              padding: 10px 0 0;\n              text-align: right;\n              ", ";\n            "]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$3() {
  var data = taggedTemplateLiteral(["\n                  margin: -1px 0 0 5px;\n                  text-transform: uppercase;\n                  ", ";\n                "]);

  _templateObject5$3 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$4() {
  var data = taggedTemplateLiteral(["\n                ", ";\n                color: ", ";\n              "]);

  _templateObject4$4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$5() {
  var data = taggedTemplateLiteral(["\n              display: flex;\n              align-items: center;\n              padding: 5px 0;\n            "]);

  _templateObject3$5 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$5() {
  var data = taggedTemplateLiteral(["\n              position: absolute;\n              top: 0;\n              right: 0;\n              width: 46px;\n              height: 40px;\n            "]);

  _templateObject2$5 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$9() {
  var data = taggedTemplateLiteral(["\n            position: relative;\n            padding: 10px 18px 20px;\n            max-width: calc(100vw - 20px);\n            min-width: 300px;\n          "]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}

var IdentityBadgePopover =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(IdentityBadgePopover, _React$PureComponent);

  function IdentityBadgePopover() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, IdentityBadgePopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(IdentityBadgePopover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handlePopoverActionClick", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          _this$props$popoverAc = _this$props.popoverAction.onClick,
          onClick = _this$props$popoverAc === void 0 ? noop : _this$props$popoverAc;
      onClose();
      onClick();
    });

    return _this;
  }

  createClass(IdentityBadgePopover, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          address = _this$props2.address,
          connectedAccount = _this$props2.connectedAccount,
          popoverAction = _this$props2.popoverAction,
          networkType = _this$props2.networkType,
          onClose = _this$props2.onClose,
          opener = _this$props2.opener,
          title = _this$props2.title,
          visible = _this$props2.visible;
      var etherscanUrl = blockExplorerUrl('address', address, {
        networkType: networkType
      });
      return React.createElement(Popover, {
        visible: visible,
        opener: opener,
        onClose: onClose
      }, React.createElement(_StyledSection, null, React.createElement(_StyledButtonIcon$1, {
        label: "Close",
        onClick: onClose
      }, React.createElement(Close, null)), React.createElement(_StyledHeader, null, React.createElement(_StyledH, {
        _css: font({
          size: 'large'
        }),
        _css2: theme.textSecondary
      }, title), connectedAccount && React.createElement(_StyledBadgeIdentity, {
        title: "This is your Ethereum address",
        _css3: font({
          size: 'xxsmall'
        })
      }, "You")), React.createElement(AddressField, {
        address: address
      }), React.createElement(_StyledP, {
        _css4: font({
          size: 'small'
        })
      }, etherscanUrl && React.createElement(_StyledSafeLink, {
        href: etherscanUrl,
        target: "_blank",
        _css5: theme.accent
      }, "See on Etherscan")), popoverAction && React.createElement(Button, {
        mode: "outline",
        size: "small",
        onClick: this.handlePopoverActionClick
      }, popoverAction.label)));
    }
  }]);

  return IdentityBadgePopover;
}(React.PureComponent);

defineProperty(IdentityBadgePopover, "propTypes", {
  address: propTypes.string,
  connectedAccount: propTypes.bool,
  networkType: propTypes.string,
  onClose: propTypes.func,
  opener: propTypes.instanceOf(Element),
  popoverAction: PopoverActionType,
  title: propTypes.node,
  visible: propTypes.bool
});

defineProperty(IdentityBadgePopover, "defaultProps", {
  title: 'Address',
  onClose: noop
});

var _StyledSection = styled("section")(_templateObject$9());

var _StyledButtonIcon$1 = styled(ButtonIcon)(_templateObject2$5());

var _StyledHeader = styled("header")(_templateObject3$5());

var _StyledH = styled("h1")(_templateObject4$4(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledBadgeIdentity = styled(Badge.Identity)(_templateObject5$3(), function (p) {
  return p._css3;
});

var _StyledP = styled("p")(_templateObject6$1(), function (p) {
  return p._css4;
});

var _StyledSafeLink = styled(SafeLink)(_templateObject7(), function (p) {
  return p._css5;
});

function _templateObject4$5() {
  var data = taggedTemplateLiteral(["\n                padding: 0 8px;\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;\n              "]);

  _templateObject4$5 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$6() {
  var data = taggedTemplateLiteral(["\n                  display: block;\n                  margin-right: -3px;\n                  ", ";\n                "]);

  _templateObject3$6 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$6() {
  var data = taggedTemplateLiteral(["\n              overflow: hidden;\n              display: flex;\n              align-items: center;\n              ", ";\n              text-decoration: none;\n            "]);

  _templateObject2$6 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$a() {
  var data = taggedTemplateLiteral(["\n            display: inline-flex;\n            overflow: hidden;\n            color: ", ";\n            height: 24px;\n            &:active {\n              ", ";\n            }\n          "]);

  _templateObject$a = function _templateObject() {
    return data;
  };

  return data;
}

var IdentityBadge =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(IdentityBadge, _React$PureComponent);

  function IdentityBadge() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, IdentityBadge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(IdentityBadge)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      opened: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        opened: false
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState({
        opened: true
      });
    });

    return _this;
  }

  createClass(IdentityBadge, [{
    key: "render",
    value: function render() {
      var opened = this.state.opened;
      var _this$props = this.props,
          connectedAccount = _this$props.connectedAccount,
          popoverAction = _this$props.popoverAction,
          popoverTitle = _this$props.popoverTitle,
          entity = _this$props.entity,
          fontSize = _this$props.fontSize,
          customLabel = _this$props.customLabel,
          networkType = _this$props.networkType,
          shorten = _this$props.shorten,
          compact = _this$props.compact,
          badgeOnly = _this$props.badgeOnly;
      var address = isAddress(entity) ? entity : null;
      var label = customLabel || (address && shorten ? shortenAddress(address) : entity);
      return React.createElement(React.Fragment, null, React.createElement(_StyledButtonBase$3, {
        ref: this._element,
        title: address,
        disabled: badgeOnly,
        onClick: address && !badgeOnly ? this.handleOpen : undefined,
        _css: theme.textPrimary,
        _css2: compact && 'background: rgba(220, 234, 239, 0.3);'
      }, React.createElement(_StyledDiv$5, _extends_1({}, stylingProps(this), {
        _css3: compact ? 'padding-left: 8px; border-radius: 2px;' : 'background: #daeaef; border-radius: 3px;'
      }), address && React.createElement(_StyledDiv2$4, {
        _css4: compact && 'position: relative; top: -1px;'
      }, React.createElement(EthIdenticon, {
        scale: compact ? 0.58 : 1,
        radius: compact ? 2 : 0,
        address: address
      })), React.createElement(_StyledText, {
        size: fontSize,
        monospace: Boolean(!customLabel && address)
      }, label))), address && !badgeOnly && React.createElement(IdentityBadgePopover, {
        address: address,
        visible: opened,
        connectedAccount: connectedAccount,
        networkType: networkType,
        opener: this._element.current,
        onClose: this.handleClose,
        popoverAction: popoverAction,
        title: popoverTitle
      }));
    }
  }]);

  return IdentityBadge;
}(React.PureComponent);

defineProperty(IdentityBadge, "propTypes", {
  connectedAccount: propTypes.bool,
  customLabel: propTypes.string,
  entity: propTypes.string,
  fontSize: propTypes.string,
  networkType: propTypes.string,
  popoverTitle: propTypes.node,
  popoverAction: PopoverActionType,
  shorten: propTypes.bool,
  compact: propTypes.bool,
  badgeOnly: propTypes.bool
});

defineProperty(IdentityBadge, "defaultProps", {
  entity: '',
  shorten: true,
  fontSize: 'normal',
  networkType: 'main',
  connectedAccount: false,
  compact: false,
  badgeOnly: false
});

var _StyledButtonBase$3 = styled(ButtonBase$1)(_templateObject$a(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv$5 = styled("div")(_templateObject2$6(), function (p) {
  return p._css3;
});

var _StyledDiv2$4 = styled("div")(_templateObject3$6(), function (p) {
  return p._css4;
});

var _StyledText = styled(Text)(_templateObject4$5());

var Info$1 = function Info(_ref) {
  var children = _ref.children,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ["children", "title"]);

  return React.createElement(Main$8, props, title && React.createElement(Title, null, title), children);
};

Info$1.propTypes = {
  background: propTypes.string,
  children: propTypes.node,
  title: propTypes.node
};
Info$1.defaultProps = {
  background: theme.infoBackground
};
var Main$8 = styled.section.withConfig({
  displayName: "Info__Main",
  componentId: "sc-1kgnlbm-0"
})(["background:", ";padding:15px;border-radius:3px;word-wrap:break-word;"], function (_ref2) {
  var background = _ref2.background;
  return background;
});
var Title = styled.h1.withConfig({
  displayName: "Info__Title",
  componentId: "sc-1kgnlbm-1"
})(["display:flex;"]);

var installedColorSpaces = [],
    undef = function (obj) {
        return typeof obj === 'undefined';
    },
    channelRegExp = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,
    percentageChannelRegExp = /\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/,
    alphaChannelRegExp = /\s*(\.\d+|\d+(?:\.\d+)?)\s*/,
    cssColorRegExp = new RegExp(
                         '^(rgb|hsl|hsv)a?' +
                         '\\(' +
                             channelRegExp.source + ',' +
                             channelRegExp.source + ',' +
                             channelRegExp.source +
                             '(?:,' + alphaChannelRegExp.source + ')?' +
                         '\\)$', 'i');

function color(obj) {
    if (Array.isArray(obj)) {
        if (typeof obj[0] === 'string' && typeof color[obj[0]] === 'function') {
            // Assumed array from .toJSON()
            return new color[obj[0]](obj.slice(1, obj.length));
        } else if (obj.length === 4) {
            // Assumed 4 element int RGB array from canvas with all channels [0;255]
            return new color.RGB(obj[0] / 255, obj[1] / 255, obj[2] / 255, obj[3] / 255);
        }
    } else if (typeof obj === 'string') {
        var lowerCased = obj.toLowerCase();
        if (color.namedColors[lowerCased]) {
            obj = '#' + color.namedColors[lowerCased];
        }
        if (lowerCased === 'transparent') {
            obj = 'rgba(0,0,0,0)';
        }
        // Test for CSS rgb(....) string
        var matchCssSyntax = obj.match(cssColorRegExp);
        if (matchCssSyntax) {
            var colorSpaceName = matchCssSyntax[1].toUpperCase(),
                alpha = undef(matchCssSyntax[8]) ? matchCssSyntax[8] : parseFloat(matchCssSyntax[8]),
                hasHue = colorSpaceName[0] === 'H',
                firstChannelDivisor = matchCssSyntax[3] ? 100 : (hasHue ? 360 : 255),
                secondChannelDivisor = (matchCssSyntax[5] || hasHue) ? 100 : 255,
                thirdChannelDivisor = (matchCssSyntax[7] || hasHue) ? 100 : 255;
            if (undef(color[colorSpaceName])) {
                throw new Error('color.' + colorSpaceName + ' is not installed.');
            }
            return new color[colorSpaceName](
                parseFloat(matchCssSyntax[2]) / firstChannelDivisor,
                parseFloat(matchCssSyntax[4]) / secondChannelDivisor,
                parseFloat(matchCssSyntax[6]) / thirdChannelDivisor,
                alpha
            );
        }
        // Assume hex syntax
        if (obj.length < 6) {
            // Allow CSS shorthand
            obj = obj.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, '$1$1$2$2$3$3');
        }
        // Split obj into red, green, and blue components
        var hexMatch = obj.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);
        if (hexMatch) {
            return new color.RGB(
                parseInt(hexMatch[1], 16) / 255,
                parseInt(hexMatch[2], 16) / 255,
                parseInt(hexMatch[3], 16) / 255
            );
        }

        // No match so far. Lets try the less likely ones
        if (color.CMYK) {
            var cmykMatch = obj.match(new RegExp(
                             '^cmyk' +
                             '\\(' +
                                 percentageChannelRegExp.source + ',' +
                                 percentageChannelRegExp.source + ',' +
                                 percentageChannelRegExp.source + ',' +
                                 percentageChannelRegExp.source +
                             '\\)$', 'i'));
            if (cmykMatch) {
                return new color.CMYK(
                    parseFloat(cmykMatch[1]) / 100,
                    parseFloat(cmykMatch[2]) / 100,
                    parseFloat(cmykMatch[3]) / 100,
                    parseFloat(cmykMatch[4]) / 100
                );
            }
        }
    } else if (typeof obj === 'object' && obj.isColor) {
        return obj;
    }
    return false;
}

color.namedColors = {};

color.installColorSpace = function (colorSpaceName, propertyNames, config) {
    color[colorSpaceName] = function (a1) { // ...
        var args = Array.isArray(a1) ? a1 : arguments;
        propertyNames.forEach(function (propertyName, i) {
            var propertyValue = args[i];
            if (propertyName === 'alpha') {
                this._alpha = (isNaN(propertyValue) || propertyValue > 1) ? 1 : (propertyValue < 0 ? 0 : propertyValue);
            } else {
                if (isNaN(propertyValue)) {
                    throw new Error('[' + colorSpaceName + ']: Invalid color: (' + propertyNames.join(',') + ')');
                }
                if (propertyName === 'hue') {
                    this._hue = propertyValue < 0 ? propertyValue - Math.floor(propertyValue) : propertyValue % 1;
                } else {
                    this['_' + propertyName] = propertyValue < 0 ? 0 : (propertyValue > 1 ? 1 : propertyValue);
                }
            }
        }, this);
    };
    color[colorSpaceName].propertyNames = propertyNames;

    var prototype = color[colorSpaceName].prototype;

    ['valueOf', 'hex', 'hexa', 'css', 'cssa'].forEach(function (methodName) {
        prototype[methodName] = prototype[methodName] || (colorSpaceName === 'RGB' ? prototype.hex : function () {
            return this.rgb()[methodName]();
        });
    });

    prototype.isColor = true;

    prototype.equals = function (otherColor, epsilon) {
        if (undef(epsilon)) {
            epsilon = 1e-10;
        }

        otherColor = otherColor[colorSpaceName.toLowerCase()]();

        for (var i = 0; i < propertyNames.length; i = i + 1) {
            if (Math.abs(this['_' + propertyNames[i]] - otherColor['_' + propertyNames[i]]) > epsilon) {
                return false;
            }
        }

        return true;
    };

    prototype.toJSON = function () {
        return [colorSpaceName].concat(propertyNames.map(function (propertyName) {
            return this['_' + propertyName];
        }, this));
    };

    for (var propertyName in config) {
        if (config.hasOwnProperty(propertyName)) {
            var matchFromColorSpace = propertyName.match(/^from(.*)$/);
            if (matchFromColorSpace) {
                color[matchFromColorSpace[1].toUpperCase()].prototype[colorSpaceName.toLowerCase()] = config[propertyName];
            } else {
                prototype[propertyName] = config[propertyName];
            }
        }
    }

    // It is pretty easy to implement the conversion to the same color space:
    prototype[colorSpaceName.toLowerCase()] = function () {
        return this;
    };
    prototype.toString = function () {
        return '[' + colorSpaceName + ' ' + propertyNames.map(function (propertyName) {
            return this['_' + propertyName];
        }, this).join(', ') + ']';
    };

    // Generate getters and setters
    propertyNames.forEach(function (propertyName) {
        var shortName = propertyName === 'black' ? 'k' : propertyName.charAt(0);
        prototype[propertyName] = prototype[shortName] = function (value, isDelta) {
            // Simple getter mode: color.red()
            if (typeof value === 'undefined') {
                return this['_' + propertyName];
            } else if (isDelta) {
                // Adjuster: color.red(+.2, true)
                return new this.constructor(propertyNames.map(function (otherPropertyName) {
                    return this['_' + otherPropertyName] + (propertyName === otherPropertyName ? value : 0);
                }, this));
            } else {
                // Setter: color.red(.2);
                return new this.constructor(propertyNames.map(function (otherPropertyName) {
                    return (propertyName === otherPropertyName) ? value : this['_' + otherPropertyName];
                }, this));
            }
        };
    });

    function installForeignMethods(targetColorSpaceName, sourceColorSpaceName) {
        var obj = {};
        obj[sourceColorSpaceName.toLowerCase()] = function () {
            return this.rgb()[sourceColorSpaceName.toLowerCase()]();
        };
        color[sourceColorSpaceName].propertyNames.forEach(function (propertyName) {
            var shortName = propertyName === 'black' ? 'k' : propertyName.charAt(0);
            obj[propertyName] = obj[shortName] = function (value, isDelta) {
                return this[sourceColorSpaceName.toLowerCase()]()[propertyName](value, isDelta);
            };
        });
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop) && color[targetColorSpaceName].prototype[prop] === undefined) {
                color[targetColorSpaceName].prototype[prop] = obj[prop];
            }
        }
    }

    installedColorSpaces.forEach(function (otherColorSpaceName) {
        installForeignMethods(colorSpaceName, otherColorSpaceName);
        installForeignMethods(otherColorSpaceName, colorSpaceName);
    });

    installedColorSpaces.push(colorSpaceName);
    return color;
};

color.pluginList = [];

color.use = function (plugin) {
    if (color.pluginList.indexOf(plugin) === -1) {
        this.pluginList.push(plugin);
        plugin(color);
    }
    return color;
};

color.installMethod = function (name, fn) {
    installedColorSpaces.forEach(function (colorSpace) {
        color[colorSpace].prototype[name] = fn;
    });
    return this;
};

color.installColorSpace('RGB', ['red', 'green', 'blue', 'alpha'], {
    hex: function () {
        var hexString = (Math.round(255 * this._red) * 0x10000 + Math.round(255 * this._green) * 0x100 + Math.round(255 * this._blue)).toString(16);
        return '#' + ('00000'.substr(0, 6 - hexString.length)) + hexString;
    },

    hexa: function () {
        var alphaString = Math.round(this._alpha * 255).toString(16);
        return '#' + '00'.substr(0, 2 - alphaString.length) + alphaString + this.hex().substr(1, 6);
    },

    css: function () {
        return 'rgb(' + Math.round(255 * this._red) + ',' + Math.round(255 * this._green) + ',' + Math.round(255 * this._blue) + ')';
    },

    cssa: function () {
        return 'rgba(' + Math.round(255 * this._red) + ',' + Math.round(255 * this._green) + ',' + Math.round(255 * this._blue) + ',' + this._alpha + ')';
    }
});

var color_1 = color;

var XYZ = function XYZ(color) {
    color.installColorSpace('XYZ', ['x', 'y', 'z', 'alpha'], {
        fromRgb: function () {
            // http://www.easyrgb.com/index.php?X=MATH&H=02#text2
            var convert = function (channel) {
                    return channel > 0.04045 ?
                        Math.pow((channel + 0.055) / 1.055, 2.4) :
                        channel / 12.92;
                },
                r = convert(this._red),
                g = convert(this._green),
                b = convert(this._blue);

            // Reference white point sRGB D65:
            // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
            return new color.XYZ(
                r * 0.4124564 + g * 0.3575761 + b * 0.1804375,
                r * 0.2126729 + g * 0.7151522 + b * 0.0721750,
                r * 0.0193339 + g * 0.1191920 + b * 0.9503041,
                this._alpha
            );
        },

        rgb: function () {
            // http://www.easyrgb.com/index.php?X=MATH&H=01#text1
            var x = this._x,
                y = this._y,
                z = this._z,
                convert = function (channel) {
                    return channel > 0.0031308 ?
                        1.055 * Math.pow(channel, 1 / 2.4) - 0.055 :
                        12.92 * channel;
                };

            // Reference white point sRGB D65:
            // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
            return new color.RGB(
                convert(x *  3.2404542 + y * -1.5371385 + z * -0.4985314),
                convert(x * -0.9692660 + y *  1.8760108 + z *  0.0415560),
                convert(x *  0.0556434 + y * -0.2040259 + z *  1.0572252),
                this._alpha
            );
        },

        lab: function () {
            // http://www.easyrgb.com/index.php?X=MATH&H=07#text7
            var convert = function (channel) {
                    return channel > 0.008856 ?
                        Math.pow(channel, 1 / 3) :
                        7.787037 * channel + 4 / 29;
                },
                x = convert(this._x /  95.047),
                y = convert(this._y / 100.000),
                z = convert(this._z / 108.883);

            return new color.LAB(
                (116 * y) - 16,
                500 * (x - y),
                200 * (y - z),
                this._alpha
            );
        }
    });
};

var LAB = function LAB(color) {
    color.use(XYZ);

    color.installColorSpace('LAB', ['l', 'a', 'b', 'alpha'], {
        fromRgb: function () {
            return this.xyz().lab();
        },

        rgb: function () {
            return this.xyz().rgb();
        },

        xyz: function () {
            // http://www.easyrgb.com/index.php?X=MATH&H=08#text8
            var convert = function (channel) {
                    var pow = Math.pow(channel, 3);
                    return pow > 0.008856 ?
                        pow :
                        (channel - 16 / 116) / 7.87;
                },
                y = (this._l + 16) / 116,
                x = this._a / 500 + y,
                z = y - this._b / 200;

            return new color.XYZ(
                convert(x) *  95.047,
                convert(y) * 100.000,
                convert(z) * 108.883,
                this._alpha
            );
        }
    });
};

var HSV = function HSV(color) {
    color.installColorSpace('HSV', ['hue', 'saturation', 'value', 'alpha'], {
        rgb: function () {
            var hue = this._hue,
                saturation = this._saturation,
                value = this._value,
                i = Math.min(5, Math.floor(hue * 6)),
                f = hue * 6 - i,
                p = value * (1 - saturation),
                q = value * (1 - f * saturation),
                t = value * (1 - (1 - f) * saturation),
                red,
                green,
                blue;
            switch (i) {
            case 0:
                red = value;
                green = t;
                blue = p;
                break;
            case 1:
                red = q;
                green = value;
                blue = p;
                break;
            case 2:
                red = p;
                green = value;
                blue = t;
                break;
            case 3:
                red = p;
                green = q;
                blue = value;
                break;
            case 4:
                red = t;
                green = p;
                blue = value;
                break;
            case 5:
                red = value;
                green = p;
                blue = q;
                break;
            }
            return new color.RGB(red, green, blue, this._alpha);
        },

        hsl: function () {
            var l = (2 - this._saturation) * this._value,
                sv = this._saturation * this._value,
                svDivisor = l <= 1 ? l : (2 - l),
                saturation;

            // Avoid division by zero when lightness approaches zero:
            if (svDivisor < 1e-9) {
                saturation = 0;
            } else {
                saturation = sv / svDivisor;
            }
            return new color.HSL(this._hue, saturation, l / 2, this._alpha);
        },

        fromRgb: function () { // Becomes one.color.RGB.prototype.hsv
            var red = this._red,
                green = this._green,
                blue = this._blue,
                max = Math.max(red, green, blue),
                min = Math.min(red, green, blue),
                delta = max - min,
                hue,
                saturation = (max === 0) ? 0 : (delta / max),
                value = max;
            if (delta === 0) {
                hue = 0;
            } else {
                switch (max) {
                case red:
                    hue = (green - blue) / delta / 6 + (green < blue ? 1 : 0);
                    break;
                case green:
                    hue = (blue - red) / delta / 6 + 1 / 3;
                    break;
                case blue:
                    hue = (red - green) / delta / 6 + 2 / 3;
                    break;
                }
            }
            return new color.HSV(hue, saturation, value, this._alpha);
        }
    });
};

var HSL = function HSL(color) {
    color.use(HSV);

    color.installColorSpace('HSL', ['hue', 'saturation', 'lightness', 'alpha'], {
        hsv: function () {
            // Algorithm adapted from http://wiki.secondlife.com/wiki/Color_conversion_scripts
            var l = this._lightness * 2,
                s = this._saturation * ((l <= 1) ? l : 2 - l),
                saturation;

            // Avoid division by zero when l + s is very small (approaching black):
            if (l + s < 1e-9) {
                saturation = 0;
            } else {
                saturation = (2 * s) / (l + s);
            }

            return new color.HSV(this._hue, saturation, (l + s) / 2, this._alpha);
        },

        rgb: function () {
            return this.hsv().rgb();
        },

        fromRgb: function () { // Becomes one.color.RGB.prototype.hsv
            return this.hsv().hsl();
        }
    });
};

var CMYK = function CMYK(color) {
    color.installColorSpace('CMYK', ['cyan', 'magenta', 'yellow', 'black', 'alpha'], {
        rgb: function () {
            return new color.RGB((1 - this._cyan * (1 - this._black) - this._black),
                                     (1 - this._magenta * (1 - this._black) - this._black),
                                     (1 - this._yellow * (1 - this._black) - this._black),
                                     this._alpha);
        },

        fromRgb: function () { // Becomes one.color.RGB.prototype.cmyk
            // Adapted from http://www.javascripter.net/faq/rgb2cmyk.htm
            var red = this._red,
                green = this._green,
                blue = this._blue,
                cyan = 1 - red,
                magenta = 1 - green,
                yellow = 1 - blue,
                black = 1;
            if (red || green || blue) {
                black = Math.min(cyan, Math.min(magenta, yellow));
                cyan = (cyan - black) / (1 - black);
                magenta = (magenta - black) / (1 - black);
                yellow = (yellow - black) / (1 - black);
            } else {
                black = 1;
            }
            return new color.CMYK(cyan, magenta, yellow, black, this._alpha);
        }
    });
};

var namedColors = function namedColors(color) {
    color.namedColors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '0ff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000',
        blanchedalmond: 'ffebcd',
        blue: '00f',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '0ff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgrey: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkslategrey: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dimgrey: '696969',
        dodgerblue: '1e90ff',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'f0f',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        grey: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred: 'cd5c5c',
        indigo: '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgray: 'd3d3d3',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslategray: '789',
        lightslategrey: '789',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '0f0',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'f0f',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '639',
        red: 'f00',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        slategrey: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        wheat: 'f5deb3',
        white: 'fff',
        whitesmoke: 'f5f5f5',
        yellow: 'ff0',
        yellowgreen: '9acd32'
    };
};

var clearer = function clearer(color) {
    color.installMethod('clearer', function (amount) {
        return this.alpha(isNaN(amount) ? -0.1 : -amount, true);
    });
};

var luminance = function luminance(color) {
  // http://www.w3.org/TR/WCAG20/#relativeluminancedef

  function channelLuminance(value) {
    return (value <= 0.03928) ? value / 12.92 : Math.pow(((value + 0.055) / 1.055), 2.4);
  }

  color.installMethod('luminance', function () {
    var rgb = this.rgb();
    return 0.2126 * channelLuminance(rgb._red) + 0.7152 * channelLuminance(rgb._green) + 0.0722 * channelLuminance(rgb._blue);
  });
};

var contrast = function contrast(color) {
  // http://www.w3.org/TR/WCAG20/#contrast-ratiodef

  color.use(luminance);

  color.installMethod('contrast', function (color2) {
    var lum1 = this.luminance();
    var lum2 = color2.luminance();
    if (lum1 > lum2) {
      return (lum1 + 0.05) / (lum2 + 0.05);
    }

    return (lum2 + 0.05) / (lum1 + 0.05);
  });
};

var darken = function darken(color) {
    color.use(HSL);

    color.installMethod('darken', function (amount) {
        return this.lightness(isNaN(amount) ? -0.1 : -amount, true);
    });
};

var desaturate = function desaturate(color) {
    color.use(HSL);

    color.installMethod('desaturate', function (amount) {
        return this.saturation(isNaN(amount) ? -0.1 : -amount, true);
    });
};

var grayscale = function grayscale(color) {
    function gs () {
        /*jslint strict:false*/
        var rgb = this.rgb(),
            val = rgb._red * 0.3 + rgb._green * 0.59 + rgb._blue * 0.11;

        return new color.RGB(val, val, val, rgb._alpha);
    }

    color.installMethod('greyscale', gs).installMethod('grayscale', gs);
};

var isDark = function isDark(color) {

  color.installMethod('isDark', function () {
    var rgb = this.rgb();

    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
    var yiq = (rgb._red * 255 * 299 + rgb._green * 255 * 587 + rgb._blue * 255 * 114) / 1000;
    return yiq < 128;
  });
};

var isLight = function isLight(color) {

  color.use(isDark);

  color.installMethod('isLight', function () {
    return !this.isDark();
  });
};

var lighten = function lighten(color) {
    color.use(HSL);

    color.installMethod('lighten', function (amount) {
        return this.lightness(isNaN(amount) ? 0.1 : amount, true);
    });
};

var mix = function mix(color) {
    color.installMethod('mix', function (otherColor, weight) {
        otherColor = color(otherColor).rgb();
        weight = 1 - (isNaN(weight) ? 0.5 : weight);

        var w = weight * 2 - 1,
            a = this._alpha - otherColor._alpha,
            weight1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2,
            weight2 = 1 - weight1,
            rgb = this.rgb();

        return new color.RGB(
            rgb._red * weight1 + otherColor._red * weight2,
            rgb._green * weight1 + otherColor._green * weight2,
            rgb._blue * weight1 + otherColor._blue * weight2,
            rgb._alpha * weight + otherColor._alpha * (1 - weight)
        );
    });
};

var negate = function negate(color) {
    color.installMethod('negate', function () {
        var rgb = this.rgb();
        return new color.RGB(1 - rgb._red, 1 - rgb._green, 1 - rgb._blue, this._alpha);
    });
};

var opaquer = function opaquer(color) {
    color.installMethod('opaquer', function (amount) {
        return this.alpha(isNaN(amount) ? 0.1 : amount, true);
    });
};

var rotate = function rotate(color) {
    color.use(HSL);

    color.installMethod('rotate', function (degrees) {
        return this.hue((degrees || 0) / 360, true);
    });
};

var saturate = function saturate(color) {
    color.use(HSL);

    color.installMethod('saturate', function (amount) {
        return this.saturation(isNaN(amount) ? 0.1 : amount, true);
    });
};

// Adapted from http://gimp.sourcearchive.com/documentation/2.6.6-1ubuntu1/color-to-alpha_8c-source.html
// toAlpha returns a color where the values of the argument have been converted to alpha
var toAlpha = function toAlpha(color) {
    color.installMethod('toAlpha', function (color) {
        var me = this.rgb(),
            other = color(color).rgb(),
            epsilon = 1e-10,
            a = new color.RGB(0, 0, 0, me._alpha),
            channels = ['_red', '_green', '_blue'];

        channels.forEach(function (channel) {
            if (me[channel] < epsilon) {
                a[channel] = me[channel];
            } else if (me[channel] > other[channel]) {
                a[channel] = (me[channel] - other[channel]) / (1 - other[channel]);
            } else if (me[channel] > other[channel]) {
                a[channel] = (other[channel] - me[channel]) / other[channel];
            } else {
                a[channel] = 0;
            }
        });

        if (a._red > a._green) {
            if (a._red > a._blue) {
                me._alpha = a._red;
            } else {
                me._alpha = a._blue;
            }
        } else if (a._green > a._blue) {
            me._alpha = a._green;
        } else {
            me._alpha = a._blue;
        }

        if (me._alpha < epsilon) {
            return me;
        }

        channels.forEach(function (channel) {
            me[channel] = (me[channel] - other[channel]) / me._alpha + other[channel];
        });
        me._alpha *= a._alpha;

        return me;
    });
};

var onecolor = color_1
    .use(XYZ)
    .use(LAB)
    .use(HSV)
    .use(HSL)
    .use(CMYK)

    // Convenience functions
    .use(namedColors)
    .use(clearer)
    .use(contrast)
    .use(darken)
    .use(desaturate)
    .use(grayscale)
    .use(isDark)
    .use(isLight)
    .use(lighten)
    .use(luminance)
    .use(mix)
    .use(negate)
    .use(opaquer)
    .use(rotate)
    .use(saturate)
    .use(toAlpha);

var Icon = styled.span.withConfig({
  displayName: "IconInfo__Icon",
  componentId: "sc-1g1veyi-0"
})(["margin-right:10px;display:flex;"]);
var Title$1 = styled.div.withConfig({
  displayName: "IconInfo__Title",
  componentId: "sc-1g1veyi-1"
})(["color:", ";margin-bottom:2px;display:flex;align-items:center;", ";"], theme.textSecondary, font({
  size: 'small'
}));
var TitlelessBody = styled.div.withConfig({
  displayName: "IconInfo__TitlelessBody",
  componentId: "sc-1g1veyi-2"
})(["display:flex;align-items:center;"]);

var IconInfo = function IconInfo(_ref) {
  var children = _ref.children,
      icon = _ref.icon,
      title = _ref.title,
      props = objectWithoutProperties(_ref, ["children", "icon", "title"]);

  var titleElm = title;
  var bodyElm = React.createElement(TitlelessBody, null, icon && React.createElement(Icon, null, icon), children);

  if (title) {
    titleElm = React.createElement(Title$1, null, icon && React.createElement(Icon, null, icon), title);
    bodyElm = children;
  }

  return React.createElement(Info$1, _extends_1({
    title: titleElm
  }, props), bodyElm);
};

IconInfo.propTypes = {
  children: propTypes.node,
  icon: propTypes.node,
  title: propTypes.node
};

var Action = function Action(props) {
  return React.createElement(IconInfo, _extends_1({
    icon: React.createElement(Attention, null)
  }, props));
};

var redColor = onecolor(theme.negative);

var Alert = function Alert(props) {
  return React.createElement(IconInfo, _extends_1({
    background: redColor.alpha(0.06).cssa(),
    icon: React.createElement(Attention, {
      bg: redColor.alpha(0.1).cssa(),
      color: redColor.css()
    })
  }, props));
};

var PermissionIconInfo = styled(IconInfo).withConfig({
  displayName: "IconInfo__PermissionIconInfo",
  componentId: "sc-1g1veyi-3"
})(["", "{color:", ";}"], Icon, theme.infoPermissionsIcon);

var Permissions$1 = function Permissions(props) {
  return React.createElement(PermissionIconInfo, _extends_1({
    background: theme.infoPermissionsBackground,
    icon: React.createElement(Bylaw, null)
  }, props));
};

Info$1.Action = Action;
Info$1.Alert = Alert;
Info$1.Permissions = Permissions$1;

function _templateObject2$7() {
  var data = taggedTemplateLiteral(["\n                      alignment-baseline: middle;\n                      font-size: 12px;\n                      font-weight: 300;\n                      ", ";\n                    "]);

  _templateObject2$7 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$b() {
  var data = taggedTemplateLiteral(["display: block"]);

  _templateObject$b = function _templateObject() {
    return data;
  };

  return data;
}
var LABELS_HEIGHT = 30;

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
          return React.createElement(_StyledText$1, {
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

var _StyledSvg = styled("svg")(_templateObject$b());

var _StyledText$1 = styled("text")(_templateObject2$7(), unselectable);

function _templateObject3$7() {
  var data = taggedTemplateLiteral(["\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 14px;\n            height: 14px;\n            border-radius: 50%;\n            border: 1px solid ", ";\n          "]);

  _templateObject3$7 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$8() {
  var data = taggedTemplateLiteral(["\n          position: relative;\n          width: 10px;\n          height: 100%;\n        "]);

  _templateObject2$8 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$c() {
  var data = taggedTemplateLiteral(["\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 22px;\n        height: 22px;\n        animation-duration: 1s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-name: ", ";\n      "]);

  _templateObject$c = function _templateObject() {
    return data;
  };

  return data;
}
var spin = keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
var LoadingRing = React.memo(function LoadingRing(_ref) {
  var paused = _ref.paused,
      props = objectWithoutProperties(_ref, ["paused"]);

  return React.createElement(_StyledSpan$1, _extends_1({}, props, {
    _css: paused ? 'none' : spin
  }), React.createElement(_StyledSpan2$1, {
    style: {
      overflow: paused ? 'visible' : 'hidden'
    }
  }, React.createElement(_StyledSpan3$1, {
    _css2: theme.accent
  })));
});
LoadingRing.propTypes = {
  paused: propTypes.bool
};
LoadingRing.defaultProps = {
  paused: false
};

var _StyledSpan$1 = styled("span")(_templateObject$c(), function (p) {
  return p._css;
});

var _StyledSpan2$1 = styled("span")(_templateObject2$8());

var _StyledSpan3$1 = styled("span")(_templateObject3$7(), function (p) {
  return p._css2;
});

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
var now$1 = function() {
  return root.Date.now();
};

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
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max,
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
function debounce$1(func, wait, options) {
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
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax$1(toNumber(options.maxWait) || 0, wait) : maxWait;
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
    var time = now$1();
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
    return timerId === undefined ? result : trailingEdge(now$1());
  }

  function debounced() {
    var time = now$1(),
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
var FUNC_ERROR_TEXT$2 = 'Expected a function';

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
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce$1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var getCurrentWindowSize = function getCurrentWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

var WINDOW_SIZE_BASE = objectSpread({
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      windowSize: _this.getWindowSize()
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updateWindowSize", function () {
      _this.setState({
        windowSize: _this.getWindowSize()
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "within", function (min, max) {
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "above", function (value) {
      return _this.within(value, -1);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "below", function (value) {
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
      var throttle$$1 = this.props.throttle;

      if (prevProps.throttle !== throttle$$1) {
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
      return objectSpread({}, WINDOW_SIZE_BASE, getCurrentWindowSize());
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
        value: objectSpread({}, windowSize, {
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

var Main$9 = function Main(_ref) {
  var children = _ref.children,
      assetsUrl = _ref.assetsUrl,
      legacyFonts = _ref.legacyFonts;
  return React.createElement(Root.Provider, null, React.createElement(Viewport.Provider, null, React.createElement(PublicUrl.Provider, {
    url: ensureTrailingSlash(assetsUrl)
  }, React.createElement(BaseStyles$1, {
    enableLegacyFonts: legacyFonts
  }), React.createElement(ToastHubProvider, null, children))));
};

Main$9.propTypes = {
  children: propTypes.node,
  legacyFonts: propTypes.bool,
  assetsUrl: propTypes.string
};
Main$9.defaultProps = {
  legacyFonts: false,
  assetsUrl: './aragon-ui/'
};

function _templateObject$d() {
  var data = taggedTemplateLiteral(["padding: 24px 12px"]);

  _templateObject$d = function _templateObject() {
    return data;
  };

  return data;
}

var cssPx = function cssPx(value) {
  return typeof value === 'number' ? value + 'px' : value;
};

var Modal = function Modal(_ref) {
  var children = _ref.children,
      onClose = _ref.onClose,
      padding = _ref.padding,
      radius = _ref.radius,
      visible = _ref.visible,
      width = _ref.width,
      overlayColor = _ref.overlayColor;
  return React.createElement(RootPortal, null, React.createElement(Viewport, null, function (viewport) {
    return React.createElement(Transition, {
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
      config: springs.smooth
    }, function (show) {
      return show &&
      /* eslint-disable react/prop-types */
      function (_ref2) {
        var opacity = _ref2.opacity,
            scale = _ref2.scale;
        return React.createElement(Overlay, {
          style: {
            opacity: opacity,
            background: overlayColor
          }
        }, React.createElement(ContentWrapper, {
          style: {
            pointerEvents: visible ? 'auto' : 'none',
            transform: scale.interpolate(function (v) {
              return "scale3d(".concat(v, ", ").concat(v, ", 1)");
            })
          }
        }, React.createElement(_StyledDiv$6, null, React.createElement(Content$2, {
          role: "alertdialog",
          onEscapeOutside: onClose,
          style: {
            width: cssPx(typeof width === 'function' ? width(viewport) : width),
            padding: cssPx(typeof padding === 'function' ? padding(viewport) : padding),
            borderRadius: "".concat(radius, "px")
          }
        }, children))));
      };
    }
    /* eslint-enable react/prop-types */
    );
  }));
};

Modal.defaultProps = {
  onClose: noop,
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  padding: 24,
  radius: 4,
  width: function width(viewport) {
    return Math.min(viewport.width - 48, 600);
  }
};
Modal.propTypes = {
  children: propTypes.node.isRequired,
  onClose: propTypes.func,
  overlayColor: propTypes.string,
  padding: propTypes.oneOfType([propTypes.func, propTypes.number, propTypes.string]),
  radius: propTypes.number,
  visible: propTypes.bool.isRequired,
  width: propTypes.oneOfType([propTypes.func, propTypes.number, propTypes.string])
};
var ContentWrapper = styled(extendedAnimated.div).withConfig({
  displayName: "Modal__ContentWrapper",
  componentId: "sc-1ofisn3-0"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;display:grid;align-items:center;justify-items:center;overflow:auto;"]);
var Content$2 = styled(EscapeOutside).withConfig({
  displayName: "Modal__Content",
  componentId: "sc-1ofisn3-1"
})(["overflow:hidden;min-width:288px;background:#fff;box-shadow:0 10px 28px rgba(0,0,0,0.2);"]);
var Overlay = styled(extendedAnimated.div).withConfig({
  displayName: "Modal__Overlay",
  componentId: "sc-1ofisn3-2"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;"]);

var _StyledDiv$6 = styled("div")(_templateObject$d());

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
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

      return objectSpread({}, updatedState, {
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
  }, React.createElement(Title$2, null, displayBack && React.createElement(BackButton, {
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
var Container$1 = styled.span.withConfig({
  displayName: "NavigationBar__Container",
  componentId: "pd4tzi-0"
})(["display:flex;position:relative;height:100%;"]);
var Title$2 = styled.span.withConfig({
  displayName: "NavigationBar__Title",
  componentId: "pd4tzi-1"
})(["display:flex;align-items:center;position:absolute;left:0;top:0;bottom:0;"]);
var Label$1 = styled.span.withConfig({
  displayName: "NavigationBar__Label",
  componentId: "pd4tzi-2"
})(["display:flex;height:100%;align-items:center;padding-left:30px;white-space:nowrap;font-size:22px;"]);
var BackButton = styled.span.withConfig({
  displayName: "NavigationBar__BackButton",
  componentId: "pd4tzi-3"
})(["display:flex;align-items:center;height:63px;padding:", ";cursor:pointer;svg{color:hsl(179,76%,48%);}:active svg{color:hsl(179,76%,63%);}& + ", "{padding-left:0;}"], function (p) {
  return p.compact ? '0 16px' : '0 20px 0 30px';
}, Label$1);

var DEFAULT_COLORS = ['#000000', '#57666F', '#028CD1', '#21AAE7', '#39CAD0', '#ADE9EC', '#80AEDC'];
/* eslint-disable react/prop-types */

var DEFAULT_CAPTION = function DEFAULT_CAPTION(_ref) {
  var name = _ref.name,
      bullet = _ref.bullet,
      percentage = _ref.percentage;
  return React.createElement(React.Fragment, null, React.createElement(DefaultItem, null, bullet, React.createElement(Text, {
    title: name,
    color: theme.textSecondary
  }, name)), React.createElement(Percentage, null, percentage, "%"));
};
/* eslint-enable react/prop-types */


var PartitionBar = function PartitionBar(_ref2) {
  var data = _ref2.data,
      caption = _ref2.caption,
      colors = _ref2.colors;

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  var partitions = data.sort(function (p1, p2) {
    return p2.percentage - p1.percentage;
  }).map(function (_ref3, index) {
    var name = _ref3.name,
        percentage = _ref3.percentage;
    return {
      name: name,
      percentage: percentage,
      color: colors[index % colors.length]
    };
  });
  return React.createElement(React.Fragment, null, React.createElement(Bar, null, partitions.map(function (_ref4, index) {
    var name = _ref4.name,
        percentage = _ref4.percentage,
        color = _ref4.color;
    return React.createElement(Partition, {
      key: index,
      title: "".concat(name, ": ").concat(percentage, "%"),
      value: percentage,
      color: color
    });
  })), caption && React.createElement(Caption, null, partitions.map(function (_ref5, index) {
    var name = _ref5.name,
        percentage = _ref5.percentage,
        color = _ref5.color;
    return React.createElement(CaptionItem, {
      key: name + index
    }, caption({
      name: name,
      bullet: React.createElement(Bullet$1, {
        color: color
      }),
      percentage: percentage,
      index: index,
      color: color
    }));
  })));
};

PartitionBar.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
  })).isRequired,
  colors: propTypes.arrayOf(propTypes.string),
  caption: propTypes.func
};
PartitionBar.defaultProps = {
  colors: DEFAULT_COLORS,
  caption: DEFAULT_CAPTION
};
var Bar = styled.div.withConfig({
  displayName: "PartitionBar__Bar",
  componentId: "sc-1udnzwm-0"
})(["display:flex;align-items:stretch;width:100%;height:10px;margin-top:20px;border-radius:4px;overflow:hidden;"]);
var Partition = styled.div.withConfig({
  displayName: "PartitionBar__Partition",
  componentId: "sc-1udnzwm-1"
})(["flex:", ";background:", ";"], function (_ref6) {
  var value = _ref6.value;
  return value;
}, function (_ref7) {
  var color = _ref7.color;
  return color || DEFAULT_COLORS[0];
});
var Caption = styled.ul.withConfig({
  displayName: "PartitionBar__Caption",
  componentId: "sc-1udnzwm-2"
})(["margin:1em 0;"]);
var CaptionItem = styled.li.withConfig({
  displayName: "PartitionBar__CaptionItem",
  componentId: "sc-1udnzwm-3"
})(["display:flex;align-items:center;justify-content:space-between;margin-top:10px;list-style:none;"]);
var DefaultItem = styled.span.withConfig({
  displayName: "PartitionBar__DefaultItem",
  componentId: "sc-1udnzwm-4"
})(["display:flex;align-items:center;max-width:80%;> span:nth-of-type(2){flex-shrink:1;text-overflow:ellipsis;overflow:hidden;}"]);
var Bullet$1 = styled.span.withConfig({
  displayName: "PartitionBar__Bullet",
  componentId: "sc-1udnzwm-5"
})(["width:10px;height:10px;margin-right:10px;border-radius:5px;flex-shrink:0;background:", ";"], function (_ref8) {
  var color = _ref8.color;
  return color || DEFAULT_COLORS[0];
});
var Percentage = styled(Text).attrs({
  weight: 'bolder'
}).withConfig({
  displayName: "PartitionBar__Percentage",
  componentId: "sc-1udnzwm-6"
})([""]);

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

var bugfixes$1 = undefined;
var applyAnimatedValues$1 = undefined;
var colorNames$1 = [];
var requestFrame$1 = function requestFrame(cb) {
  return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
};
var cancelFrame$1 = function cancelFrame(cb) {
  return typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
};
var interpolation$1 = undefined;
var now$2 = function now() {
  return Date.now();
};
var defaultElement$1 = undefined;
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
var injectBugfixes$1 = function injectBugfixes(fn) {
  return bugfixes$1 = fn;
};
var injectInterpolation$1 = function injectInterpolation(cls) {
  return interpolation$1 = cls;
};
var injectFrame$1 = function injectFrame(raf, caf) {
  var _ref;

  return _ref = [raf, caf], requestFrame$1 = _ref[0], cancelFrame$1 = _ref[1], _ref;
};
var injectNow$1 = function injectNow(nowFn) {
  return now$2 = nowFn;
};
var injectDefaultElement$1 = function injectDefaultElement(el) {
  return defaultElement$1 = el;
};
var injectCreateAnimatedStyle$1 = function injectCreateAnimatedStyle(factory) {
  return createAnimatedStyle$1 = factory;
};

var Globals$1 = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes$1; },
  get applyAnimatedValues () { return applyAnimatedValues$1; },
  get colorNames () { return colorNames$1; },
  get requestFrame () { return requestFrame$1; },
  get cancelFrame () { return cancelFrame$1; },
  get interpolation () { return interpolation$1; },
  get now () { return now$2; },
  get defaultElement () { return defaultElement$1; },
  get createAnimatedStyle () { return createAnimatedStyle$1; },
  injectApplyAnimatedValues: injectApplyAnimatedValues$1,
  injectColorNames: injectColorNames$1,
  injectBugfixes: injectBugfixes$1,
  injectInterpolation: injectInterpolation$1,
  injectFrame: injectFrame$1,
  injectNow: injectNow$1,
  injectDefaultElement: injectDefaultElement$1,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle$1
});

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
      return interpolate$2(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  };

  return Interpolation;
}();

function interpolate$2(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
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
function convertToAnimatedValue$1(acc, _ref) {
  var _extends3;

  var name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, (_extends3 = {}, _extends3[name] = new (Array.isArray(value) ? AnimatedArray$1 : AnimatedValue$1)(value), _extends3));
}
function convertValues$1(props) {
  var from = props.from,
      to = props.to,
      native = props.native;
  var allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue$1, {}) : _extends({}, from, to);
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

var check$2 = function check(value) {
  return value === 'auto';
};

var overwrite$1 = function overwrite(width, height) {
  return function (acc, _ref) {
    var _extends2;

    var name = _ref[0],
        value = _ref[1];
    return _extends({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
  };
};

function fixAuto$1(props, callback) {
  var from = props.from,
      to = props.to,
      children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1$1(to).some(check$2) || getValues$1$1(from).some(check$2))) return; // Fetch render v-dom

  var element = children(convertValues$1(props)); // A spring can return undefined/null, check against that (#153)

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

        var convert = overwrite$1(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
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
injectDefaultElement$1('div');
injectInterpolation$1(createInterpolation$1);
injectColorNames$1(colors$2);
injectBugfixes$1(fixAuto$1);
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
    var _useState = useState$1(),
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


    var _useState2 = useState$1(function () {
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

function _templateObject$e() {
  var data = taggedTemplateLiteral(["\n        width: 100%;\n        height: ", "px;\n        background: ", ";\n        border-radius: ", "px;\n        overflow: hidden;\n      "]);

  _templateObject$e = function _templateObject() {
    return data;
  };

  return data;
}
var RADIUS = 2;
var BAR_HEIGHT$1 = 6;
var INDETERMINATE_WIDTH = 1 / 4;
var INDETERMINATE_DURATION = 1600;
var indeterminateAnim = keyframes(["0%{transform:translate3d(calc(-100% - 1px),0,0);}70%,100%{transform:translate3d(calc(", "% + 1px),0,0);}"], 100 / INDETERMINATE_WIDTH);
var ProgressBar = React.memo(function (_ref) {
  var animate = _ref.animate,
      color = _ref.color,
      progress = _ref.progress,
      value = _ref.value;

  // Support `progress` for a while but warn if being used.
  if (value === -1 && typeof progress === 'number') {
    value = progress;

    if (!ProgressBar._warned) {
      warn('The `progress` prop of ProgressBar is deprecated: please use `value` instead.');
      ProgressBar._warned = true;
    }
  } // The indeterminate state can be triggered either by not setting the value
  // (to mimic the <progress> element in HTML), or by setting the -1 value (for
  // convenience in React).


  var indeterminate = value === -1;
  var transition = useSpring({
    config: objectSpread({}, springs.smooth, {
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
  return React.createElement(_StyledDiv$7, {
    _css: theme.secondaryBackground
  }, React.createElement(Bar$1, {
    style: {
      width: "".concat((indeterminate ? INDETERMINATE_WIDTH : 1) * 100, "%"),
      background: color,
      borderRadius: "".concat(indeterminate ? RADIUS : 0, "px"),
      animationName: "".concat(indeterminate ? indeterminateAnim.name : 'none'),
      transform: interpolate$1$1([transition.x, transition.scale], function (x, s) {
        return "translate3d(".concat(x * 100, "%, 0, 0) scale3d(").concat(s, ", 1, 1)");
      })
    }
  }));
});
var Bar$1 = styled(extendedAnimated$1.div).withConfig({
  displayName: "ProgressBar__Bar",
  componentId: "sc-1gly9sn-0"
})(["width:100%;height:", "px;transform-origin:0 0;animation:", " ", "ms ease-in-out infinite;animation-name:none;"], BAR_HEIGHT$1, indeterminateAnim, INDETERMINATE_DURATION);
ProgressBar.defaultProps = {
  animate: true,
  color: theme.accent,
  value: -1
};
ProgressBar.propTypes = {
  animate: ExtendedPropTypes.bool,
  color: ExtendedPropTypes.string,
  progress: ExtendedPropTypes._0to1,
  value: ExtendedPropTypes.oneOfType([ExtendedPropTypes._0to1, ExtendedPropTypes.oneOf([-1])])
};

var _StyledDiv$7 = styled("div")(_templateObject$e(), BAR_HEIGHT$1, function (p) {
  return p._css;
}, RADIUS);

var _React$createContext$3 = React.createContext({}),
    Provider$3 = _React$createContext$3.Provider,
    Consumer$2 = _React$createContext$3.Consumer;

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      // keep track of the radios buttons to handle keyboard navigation
      radios: new Set()
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleChange", function (id) {
      _this.props.onChange(id);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "addRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.add(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "removeRadio", function (id) {
      _this.setState(function (state) {
        var radios = new Set(state.radios);
        radios.delete(id);
        return {
          radios: radios
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "selectPrev", function () {
      var id = _this.getSiblingId(-1);

      if (id !== null) {
        _this.props.onChange(id);
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "selectNext", function () {
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
      return React.createElement(Provider$3, {
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleKeyDown", function (event) {
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleChange", function () {
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
          onChange = _this$props5.onChange,
          id = _this$props5.id,
          tabIndex = _this$props5.tabIndex,
          props = objectWithoutProperties(_this$props5, ["checked", "onChange", "id", "tabIndex"]);

      return React.createElement(Checkbox, _extends_1({
        ref: this._element,
        variant: "radio",
        checked: checked,
        tabIndex: tabIndex,
        onChange: this.handleChange,
        onKeyDown: this.handleKeyDown
      }, props));
    }
  }]);

  return RadioButton;
}(React.PureComponent);

defineProperty(RadioButton, "propTypes", {
  checked: propTypes.bool,
  onChange: propTypes.func,
  id: propTypes.oneOfType([propTypes.string, propTypes.number]),
  addRadio: propTypes.func,
  removeRadio: propTypes.func,
  selectNext: propTypes.func,
  selectPrev: propTypes.func,
  tabIndex: propTypes.string
});

defineProperty(RadioButton, "defaultProps", {
  checked: false,
  id: null,
  selectPrev: noop,
  selectNext: noop,
  onChange: undefined,
  // <Button /> need to detect if onChange has been set
  addRadio: noop,
  removeRadio: noop
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
      return React.createElement(Consumer$2, null, function (_ref) {
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

var contentBorder$3 = theme.contentBorder;
var labelBoxBorder = onecolor(colors$1.Sea['Light Sea']);

var RadioListItem = function RadioListItem(_ref) {
  var description = _ref.description,
      index = _ref.index,
      title = _ref.title;
  return React.createElement(Label$2, null, React.createElement(RadioWrapper, {
    id: index
  }), React.createElement(LabelBox, null, React.createElement(Title$3, null, title), React.createElement(Description, null, description)));
};

RadioListItem.propTypes = {
  description: propTypes.node.isRequired,
  index: propTypes.number.isRequired,
  title: propTypes.node.isRequired // Styled components

};
var Label$2 = styled.label.withConfig({
  displayName: "RadioListItem__Label",
  componentId: "sc-1utxw89-0"
})(["display:flex;&:not(:first-child){margin-top:10px;}", ";"], unselectable());
var LabelBox = styled.div.withConfig({
  displayName: "RadioListItem__LabelBox",
  componentId: "sc-1utxw89-1"
})(["flex-grow:1;margin-left:12px;padding:12px 12px;border:1px ", " solid;border-radius:3px;transition:border 200ms linear;cursor:pointer;&:focus,&:hover{border-color:", ";}"], contentBorder$3, labelBoxBorder.alpha(0.35).cssa());
var Title$3 = styled(Text).attrs({
  weight: 'bold'
}).withConfig({
  displayName: "RadioListItem__Title",
  componentId: "sc-1utxw89-2"
})([""]);
var Description = styled(Text.Block).withConfig({
  displayName: "RadioListItem__Description",
  componentId: "sc-1utxw89-3"
})(["margin-top:5px;"]);
var RadioWrapper = styled(Radio).withConfig({
  displayName: "RadioListItem__RadioWrapper",
  componentId: "sc-1utxw89-4"
})(["flex-shrink:0;margin-top:16px;"]);

var RadioList =
/*#__PURE__*/
function (_React$Component) {
  inherits(RadioList, _React$Component);

  function RadioList() {
    classCallCheck(this, RadioList);

    return possibleConstructorReturn(this, getPrototypeOf(RadioList).apply(this, arguments));
  }

  createClass(RadioList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          description = _this$props.description,
          items = _this$props.items,
          onChange = _this$props.onChange,
          selected = _this$props.selected,
          title = _this$props.title;
      return React.createElement("div", stylingProps(this), title && React.createElement(Title$4, null, React.createElement(Text, {
        size: "large",
        weight: "bold"
      }, title)), description && React.createElement(Description$1, null, description), React.createElement(StyledRadioGroup, {
        onChange: onChange,
        selected: selected
      }, items.map(function (_ref, i) {
        var description = _ref.description,
            title = _ref.title;
        return React.createElement(RadioListItem, {
          key: i,
          description: description,
          index: i,
          title: title
        });
      })));
    }
  }]);

  return RadioList;
}(React.Component);

defineProperty(RadioList, "propTypes", {
  description: propTypes.node,
  items: propTypes.arrayOf(propTypes.shape({
    description: propTypes.node.isRequired,
    title: propTypes.node.isRequired
  })),
  onChange: propTypes.func,
  selected: function selected(_ref2, _, componentName) {
    var items = _ref2.items,
        _selected = _ref2.selected;

    if (!Number.isInteger(_selected) || _selected >= items.length) {
      throw new Error("Invalid prop `selected` supplied to `".concat(componentName, "`. ") + '`selected` must be an integer less than the length of `items`. ' + "Given ".concat(_selected, " instead."));
    }
  },
  title: propTypes.node
});

defineProperty(RadioList, "defaultProps", {
  items: [],
  onChange: noop,
  selected: 0
});

var Title$4 = styled.h2.withConfig({
  displayName: "RadioList__Title",
  componentId: "sc-1hkg1b7-0"
})(["margin-bottom:5px;"]);
var Description$1 = styled(Text.Block).withConfig({
  displayName: "RadioList__Description",
  componentId: "sc-1hkg1b7-1"
})(["margin-bottom:18px;"]);
var StyledRadioGroup = styled(RadioGroup).withConfig({
  displayName: "RadioList__StyledRadioGroup",
  componentId: "sc-1hkg1b7-2"
})(["display:flex;flex-direction:column;"]);

var CONTENT_PADDING = 30;

var SidePanel =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(SidePanel, _React$PureComponent);

  function SidePanel() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, SidePanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(SidePanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClose", function () {
      if (!_this.props.blocking) {
        _this.props.onClose();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleEscape", function (event) {
      if (event.keyCode === 27 && _this.props.opened) {
        _this.handleClose();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleTransitionRest", function () {
      _this.props.onTransitionEnd(_this.props.opened);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "renderIn", function (_ref) {
      var progress = _ref.progress;
      var _this$props = _this.props,
          children = _this$props.children,
          title = _this$props.title,
          opened = _this$props.opened,
          blocking = _this$props.blocking;
      return React.createElement(Main$a, {
        opened: opened
      }, React.createElement(Overlay$1, {
        style: {
          opacity: progress,
          pointerEvents: opened ? 'auto' : 'none'
        },
        onClick: _this.handleClose
      }), React.createElement(Panel, {
        style: {
          transform: progress.interpolate(function (v) {
            return "translate3d(calc(".concat(100 * (1 - v), "% + ").concat(36 * (1 - v), "px), 0, 0)");
          }),
          opacity: progress.interpolate(function (v) {
            return v > 0 ? 1 : 0;
          })
        }
      }, React.createElement(PanelHeader, null, React.createElement("h1", null, React.createElement(Text, {
        size: "xxlarge"
      }, title)), !blocking && React.createElement(PanelCloseButton, {
        type: "button",
        onClick: _this.handleClose
      }, React.createElement(Close, null))), React.createElement(PanelScrollView, null, React.createElement(PanelContent, null, children))));
    });

    return _this;
  }

  createClass(SidePanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleEscape, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleEscape, false);
    }
  }, {
    key: "render",
    value: function render() {
      var opened = this.props.opened;
      return React.createElement(Spring, {
        config: springs.lazy,
        from: {
          progress: 0
        },
        to: {
          progress: !!opened
        },
        onRest: this.handleTransitionRest,
        native: true
      }, this.renderIn);
    }
  }]);

  return SidePanel;
}(React.PureComponent);

SidePanel.propTypes = {
  children: propTypes.node,
  title: propTypes.string.isRequired,
  opened: propTypes.bool,
  blocking: propTypes.bool,
  onClose: propTypes.func,
  onTransitionEnd: propTypes.func
};
SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: function onClose() {},
  onTransitionEnd: function onTransitionEnd() {}
};
var Main$a = styled.div.withConfig({
  displayName: "SidePanel__Main",
  componentId: "sc-1kjx6mk-0"
})(["position:fixed;z-index:3;top:0;left:0;right:0;bottom:0;pointer-events:", ";"], function (_ref2) {
  var opened = _ref2.opened;
  return opened ? 'auto' : 'none';
});
var Overlay$1 = styled(extendedAnimated.div).withConfig({
  displayName: "SidePanel__Overlay",
  componentId: "sc-1kjx6mk-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(68,81,89,0.65);"]);
var maxWidth = css(["max-width:", "px;"], function (_ref3) {
  var _ref3$maxwidth = _ref3.maxwidth,
      maxwidth = _ref3$maxwidth === void 0 ? 450 : _ref3$maxwidth;
  return maxwidth;
});
var Panel = styled(extendedAnimated.aside).withConfig({
  displayName: "SidePanel__Panel",
  componentId: "sc-1kjx6mk-2"
})(["position:absolute;top:0;right:0;display:flex;flex-direction:column;width:100vw;height:100vh;background:white;box-shadow:-2px 0 36px rgba(0,0,0,0.2);", ""], breakpoint('medium', maxWidth));
var PanelHeader = styled.header.withConfig({
  displayName: "SidePanel__PanelHeader",
  componentId: "sc-1kjx6mk-3"
})(["position:relative;padding-top:15px;padding-left:", "px;padding-right:20px;padding-bottom:15px;", ";flex-shrink:0;"], CONTENT_PADDING, unselectable());
var PanelScrollView = styled.div.withConfig({
  displayName: "SidePanel__PanelScrollView",
  componentId: "sc-1kjx6mk-4"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);
var PanelContent = styled.div.withConfig({
  displayName: "SidePanel__PanelContent",
  componentId: "sc-1kjx6mk-5"
})(["min-height:0;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;width:100%;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;"], CONTENT_PADDING, CONTENT_PADDING, CONTENT_PADDING);
var PanelCloseButton = styled.button.withConfig({
  displayName: "SidePanel__PanelCloseButton",
  componentId: "sc-1kjx6mk-6"
})(["", " &{position:absolute;padding:20px;top:0;right:0;cursor:pointer;background:none;border:0;outline:0;&::-moz-focus-inner{border:0;}}"], PanelHeader); // Used for spacing in SidePanelSplit and SidePanelSeparator

SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING;

var SidePanelSeparator = styled.div.withConfig({
  displayName: "SidePanelSeparator",
  componentId: "sc-75c7uf-0"
})(["width:calc(100% + ", "px);margin:0 -", "px;height:1px;background:", ";"], SidePanel.HORIZONTAL_PADDING * 2, SidePanel.HORIZONTAL_PADDING, theme.contentBorder);

var SidePanelSplit = function SidePanelSplit(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ["children"]);

  return React.createElement(Main$b, props, React.createElement(Part, null, children[0]), React.createElement(Part, null, children[1]));
};

SidePanelSplit.propTypes = {
  children: propTypes.node
};
var Main$b = styled.div.withConfig({
  displayName: "SidePanelSplit__Main",
  componentId: "d0csv3-0"
})(["display:flex;width:calc(100% + ", "px);margin:0 -", "px;border:1px solid ", ";border-width:1px 0;"], SidePanel.HORIZONTAL_PADDING * 2, SidePanel.HORIZONTAL_PADDING, theme.contentBorder);
var Part = styled.div.withConfig({
  displayName: "SidePanelSplit__Part",
  componentId: "d0csv3-1"
})(["width:50%;padding:20px ", "px;&:first-child{border-right:1px solid ", ";}"], SidePanel.HORIZONTAL_PADDING, theme.contentBorder);

var BAR_HEIGHT$2 = 6;
var HANDLE_SIZE = 24;
var HANDLE_SHADOW_MARGIN = 15;
var PADDING = 5;
var MIN_WIDTH = HANDLE_SIZE * 10;
var HEIGHT = Math.max(HANDLE_SIZE, BAR_HEIGHT$2) + PADDING * 2;

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      pressed: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleRef", function (element) {
      _this._mainElement = element;
      _this._document = element && element.ownerDocument;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getRect", function () {
      var now = Date.now(); // Cache the rect if the last poll was less than a second ago

      if (_this._lastRect && now - _this._lastRectTime < 1000) {
        return _this._lastRect;
      }

      _this._lastRectTime = now;
      _this._lastRect = _this._mainElement ? _this._mainElement.getBoundingClientRect() : new window.DOMRect();
      return _this._lastRect;
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "dragStart", function (event) {
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "dragStop", function () {
      _this.setState({
        pressed: false
      });

      _this._document.removeEventListener('mouseup', _this.dragStop);

      _this._document.removeEventListener('touchend', _this.dragStop);

      _this._document.removeEventListener('mousemove', _this.dragMove);

      _this._document.removeEventListener('touchmove', _this.dragMove);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "dragMove", function (event) {
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
          return "translate3d(0, calc(".concat(t, "px - 50%), 0)");
        }),
        boxShadow: pressProgress.interpolate(function (t) {
          return "0 4px 8px 0 rgba(0, 0, 0, ".concat(0.13 * (1 - t), ")");
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
        }),
        background: pressProgress.interpolate(function (t) {
          return "hsl(179, ".concat(Math.round(76 * (1 + 0.2 * t)), "%, 48%)");
        })
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var pressed = this.state.pressed;
      var value = Math.max(0, Math.min(1, this.props.value));
      return React.createElement(Spring, {
        config: springs.swift,
        to: {
          pressProgress: Number(pressed),
          value: value
        },
        native: true
      }, function (_ref) {
        var value = _ref.value,
            pressProgress = _ref.pressProgress;
        return React.createElement(Main$c, null, React.createElement(Area, {
          ref: _this2.handleRef,
          onMouseDown: _this2.dragStart,
          onTouchStart: _this2.dragStart
        }, React.createElement(Bars, null, React.createElement(BaseBar, null), React.createElement(ActiveBar, {
          style: _this2.getActiveBarStyles(value, pressProgress)
        })), React.createElement(HandleClip, null, React.createElement(HandlePosition, {
          style: _this2.getHandlePositionStyles(value, pressProgress)
        }, React.createElement(Handle, {
          style: _this2.getHandleStyles(pressProgress)
        })))));
      });
    }
  }]);

  return Slider;
}(React.Component);

defineProperty(Slider, "propTypes", {
  value: propTypes.number,
  onUpdate: propTypes.func
});

defineProperty(Slider, "defaultProps", {
  value: 0,
  onUpdate: function onUpdate() {}
});

var Main$c = styled.div.withConfig({
  displayName: "Slider__Main",
  componentId: "sc-94djfe-0"
})(["min-width:", "px;padding:0 ", "px;", ";"], MIN_WIDTH, HANDLE_SIZE / 2 + PADDING, unselectable);
var Area = styled.div.withConfig({
  displayName: "Slider__Area",
  componentId: "sc-94djfe-1"
})(["position:relative;height:", "px;cursor:pointer;"], HEIGHT);
var Bars = styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bars",
  componentId: "sc-94djfe-2"
})(["position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);overflow:hidden;border-radius:2px;height:", "px;"], BAR_HEIGHT$2);
var Bar$2 = styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Bar",
  componentId: "sc-94djfe-3"
})(["position:absolute;top:0;left:0;right:0;bottom:0;"]);
var BaseBar = styled(Bar$2).withConfig({
  displayName: "Slider__BaseBar",
  componentId: "sc-94djfe-4"
})(["background:#edf3f6;"]);
var ActiveBar = styled(Bar$2).withConfig({
  displayName: "Slider__ActiveBar",
  componentId: "sc-94djfe-5"
})(["transform-origin:0 0;"]);
var HandleClip = styled.div.withConfig({
  displayName: "Slider__HandleClip",
  componentId: "sc-94djfe-6"
})(["pointer-events:none;overflow:hidden;width:calc(100% + ", "px);height:calc(100% + ", "px);transform-origin:50% 50%;transform:translate( -", "px,-", "px );"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2, HANDLE_SHADOW_MARGIN * 2, HANDLE_SIZE / 2 + HANDLE_SHADOW_MARGIN, HANDLE_SHADOW_MARGIN);
var HandlePosition = styled(extendedAnimated.div).withConfig({
  displayName: "Slider__HandlePosition",
  componentId: "sc-94djfe-7"
})(["width:calc(100% - ", "px);height:100%;transform-origin:50% 50%;"], HANDLE_SIZE + HANDLE_SHADOW_MARGIN * 2);
var Handle = styled(extendedAnimated.div).withConfig({
  displayName: "Slider__Handle",
  componentId: "sc-94djfe-8"
})(["position:absolute;top:50%;left:0;width:", "px;height:", "px;border:0.5px solid #dcecf5;border-radius:50%;"], HANDLE_SIZE, HANDLE_SIZE);

function _templateObject$f() {
  var data = taggedTemplateLiteral(["margin-left: 5px"]);

  _templateObject$f = function _templateObject() {
    return data;
  };

  return data;
}

function SyncIndicator(_ref) {
  var visible = _ref.visible,
      label = _ref.label;
  return React.createElement(FloatIndicator, {
    visible: visible
  }, React.createElement(LoadingRing, {
    animated: true
  }), React.createElement(_StyledSpan$2, null, label));
}

SyncIndicator.propTypes = {
  label: propTypes.string,
  visible: propTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

var _StyledSpan$2 = styled("span")(_templateObject$f());

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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      displayFocusRing: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_barRef", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleMouseDown", function () {
      _this.disableFocusRing();
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleKeydown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.selectElement(document.activeElement);

        _this.enableFocusRing();
      }

      if (key === 'Tab') {
        _this.enableFocusRing();
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleTabMouseDown", function (_ref2) {
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

      onChange(index); // onSelect compatibility

      if (this.props.onSelect) {
        this.props.onSelect(index);

        if (!TabBar._onSelectWarned) {
          warn('TabBar: the `onSelect` prop has been renamed: please use `onChange` instead.');
          TabBar._onSelectWarned = true;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var displayFocusRing = this.state.displayFocusRing;
      var _this$props = this.props,
          items = _this$props.items,
          selected = _this$props.selected;
      return React.createElement(InAppBarContext.Consumer, null, function (inAppBar) {
        return React.createElement("nav", {
          onMouseDown: _this2.handleMouseDown
        }, React.createElement(Bar$3, {
          ref: _this2._barRef,
          border: !inAppBar
        }, items.map(function (item, i) {
          return React.createElement(Tab, {
            key: i,
            tabIndex: "0",
            selected: i === selected,
            focusRing: displayFocusRing,
            onMouseDown: _this2.handleTabMouseDown
          }, React.createElement(Label$3, {
            selected: i === selected
          }, item), displayFocusRing && React.createElement(FocusRing$1, null));
        })));
      });
    }
  }]);

  return TabBar;
}(React.Component);

defineProperty(TabBar, "propTypes", {
  items: propTypes.arrayOf(propTypes.node).isRequired,
  selected: propTypes.number,
  onSelect: propTypes.func,
  onChange: propTypes.func
});

defineProperty(TabBar, "defaultProps", {
  selected: 0,
  onChange: noop
});

var Bar$3 = styled.ul.withConfig({
  displayName: "TabBar__Bar",
  componentId: "sc-1rsszd9-0"
})(["display:flex;border-bottom:", ";"], function (p) {
  return p.border ? "1px solid ".concat(theme.contentBorder) : '0';
});
var FocusRing$1 = styled.span.withConfig({
  displayName: "TabBar__FocusRing",
  componentId: "sc-1rsszd9-1"
})(["display:none;position:absolute;top:-5px;left:-5px;right:-5px;bottom:-5px;border:2px solid ", ";border-radius:2px;"], theme.accent);
var Tab = styled.li.withConfig({
  displayName: "TabBar__Tab",
  componentId: "sc-1rsszd9-2"
})(["position:relative;list-style:none;padding:0 30px;cursor:pointer;", ";", ";&:focus{outline:0;", "{display:block;}}"], function (p) {
  return font({
    weight: p.selected ? 'bold' : 'normal'
  });
}, unselectable(), FocusRing$1);
var Label$3 = styled.span.withConfig({
  displayName: "TabBar__Label",
  componentId: "sc-1rsszd9-3"
})(["display:flex;margin-bottom:-1px;padding:5px 0 3px;border-bottom:4px solid ", ";"], function (p) {
  return p.selected ? theme.accent : 'transparent';
});

var StyledTableRow = styled.tr.withConfig({
  displayName: "TableRow__StyledTableRow",
  componentId: "sc-3jn6yz-0"
})([""]);

var contentBorder$4 = theme.contentBorder;

var Table = function Table(_ref) {
  var header = _ref.header,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["header", "children"]);

  return React.createElement(StyledTable, props, header && React.createElement("thead", null, header), React.createElement("tbody", null, children));
};

Table.propTypes = {
  children: propTypes.node,
  header: propTypes.node,
  noSideBorders: propTypes.bool
};
Table.defaultProps = {
  noSideBorders: false
};
var StyledTable = styled.table.withConfig({
  displayName: "Table__StyledTable",
  componentId: "uvcan9-0"
})(["width:100%;border-spacing:0;td{border-bottom:1px solid ", ";}", ":first-child td{border-top:1px solid ", ";}td:first-child{border-left:", ";}td:last-child{border-right:", ";}", ":first-child td:first-child{border-top-left-radius:", ";}", ":first-child td:last-child{border-top-right-radius:", ";}", ":last-child td:first-child{border-bottom-left-radius:", ";}", ":last-child td:last-child{border-bottom-right-radius:", ";}"], contentBorder$4, StyledTableRow, contentBorder$4, function (_ref2) {
  var noSideBorders = _ref2.noSideBorders;
  return noSideBorders ? 0 : "1px solid ".concat(contentBorder$4);
}, function (_ref3) {
  var noSideBorders = _ref3.noSideBorders;
  return noSideBorders ? 0 : "1px solid ".concat(contentBorder$4);
}, StyledTableRow, function (_ref4) {
  var noSideBorders = _ref4.noSideBorders;
  return noSideBorders ? 0 : '3px';
}, StyledTableRow, function (_ref5) {
  var noSideBorders = _ref5.noSideBorders;
  return noSideBorders ? 0 : '3px';
}, StyledTableRow, function (_ref6) {
  var noSideBorders = _ref6.noSideBorders;
  return noSideBorders ? 0 : '3px';
}, StyledTableRow, function (_ref7) {
  var noSideBorders = _ref7.noSideBorders;
  return noSideBorders ? 0 : '3px';
});

var contentBackground$3 = theme.contentBackground;
var StyledTableCell = styled.td.withConfig({
  displayName: "TableCell__StyledTableCell",
  componentId: "sc-110j155-0"
})(["padding:20px;background:", ";text-align:", ";"], contentBackground$3, function (_ref) {
  var align = _ref.align;
  return align;
});
var StyledTableCellContent = styled.div.withConfig({
  displayName: "TableCell__StyledTableCellContent",
  componentId: "sc-110j155-1"
})(["display:flex;align-items:center;justify-content:", ";"], function (_ref2) {
  var align = _ref2.align;
  return align === 'right' ? 'flex-end' : 'space-between';
});

var TableCell = function TableCell(_ref3) {
  var children = _ref3.children,
      Container = _ref3.contentContainer,
      align = _ref3.align,
      props = objectWithoutProperties(_ref3, ["children", "contentContainer", "align"]);

  return React.createElement(StyledTableCell, _extends_1({
    align: align
  }, props), React.createElement(Container, {
    align: align
  }, children));
};

TableCell.propTypes = {
  align: ExtendedPropTypes.string,
  contentContainer: ExtendedPropTypes._component,
  children: ExtendedPropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: StyledTableCellContent
};

var StyledTableHeader = styled.th.withConfig({
  displayName: "TableHeader__StyledTableHeader",
  componentId: "sc-1qxm8cp-0"
})(["padding:0;padding-left:", ";padding-right:", ";line-height:30px;font-weight:normal;text-align:", ";white-space:nowrap;"], function (_ref) {
  var align = _ref.align;
  return align === 'left' ? '21px' : '0';
}, function (_ref2) {
  var align = _ref2.align;
  return align === 'right' ? '21px' : '0';
}, function (_ref3) {
  var align = _ref3.align;
  return align;
});

var TableHeader = function TableHeader(_ref4) {
  var title = _ref4.title,
      align = _ref4.align,
      props = objectWithoutProperties(_ref4, ["title", "align"]);

  return React.createElement(StyledTableHeader, _extends_1({
    align: align
  }, props), React.createElement(Text.Block, {
    color: theme.textSecondary,
    smallcaps: true
  }, title));
};

TableHeader.propTypes = {
  title: propTypes.string,
  align: propTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

function _templateObject7$1() {
  var data = taggedTemplateLiteral(["\n        width: 26px;\n        height: 26px;\n        background-size: contain;\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        background-image: url(", ");\n      "]);

  _templateObject7$1 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$2() {
  var data = taggedTemplateLiteral(["\n      flex-shrink: 0;\n      display: flex;\n      width: 40px;\n      height: 40px;\n      align-items: center;\n      justify-content: center;\n    "]);

  _templateObject6$2 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$4() {
  var data = taggedTemplateLiteral(["\n                color: ", ";\n              "]);

  _templateObject5$4 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$6() {
  var data = taggedTemplateLiteral(["\n              padding: 10px 0 0;\n              text-align: right;\n              ", ";\n            "]);

  _templateObject4$6 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$8() {
  var data = taggedTemplateLiteral(["\n              display: flex;\n              align-items: center;\n              padding: 5px 0;\n              ", ";\n              color: ", ";\n            "]);

  _templateObject3$8 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$9() {
  var data = taggedTemplateLiteral(["\n              position: absolute;\n              top: 0;\n              right: 0;\n              width: 46px;\n              height: 40px;\n            "]);

  _templateObject2$9 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$g() {
  var data = taggedTemplateLiteral(["\n            position: relative;\n            padding: 10px 18px 20px;\n            max-width: calc(100vw - 20px);\n            min-width: 300px;\n          "]);

  _templateObject$g = function _templateObject() {
    return data;
  };

  return data;
}

var TokenBadgePopover =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(TokenBadgePopover, _React$PureComponent);

  function TokenBadgePopover() {
    classCallCheck(this, TokenBadgePopover);

    return possibleConstructorReturn(this, getPrototypeOf(TokenBadgePopover).apply(this, arguments));
  }

  createClass(TokenBadgePopover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          iconUrl = _this$props.iconUrl,
          label = _this$props.label,
          networkType = _this$props.networkType,
          onClose = _this$props.onClose,
          opener = _this$props.opener,
          visible = _this$props.visible;
      return React.createElement(Popover, {
        visible: visible,
        opener: opener,
        onClose: onClose
      }, React.createElement(_StyledSection$1, null, React.createElement(_StyledButtonIcon$2, {
        label: "Close",
        onClick: onClose
      }, React.createElement(Close, null)), React.createElement(_StyledH$1, {
        _css: font({
          size: 'large',
          weight: 'bold'
        }),
        _css2: theme.textPrimary
      }, label), iconUrl ? React.createElement(ImageExists, {
        src: iconUrl
      }, function (_ref) {
        var exists = _ref.exists;
        return React.createElement(AddressField, {
          address: address,
          icon: exists ? React.createElement(Icon$1, {
            src: iconUrl
          }) : null
        });
      }) : React.createElement(AddressField, {
        address: address
      }), React.createElement(_StyledP$1, {
        _css3: font({
          size: 'small'
        })
      }, React.createElement(_StyledSafeLink$1, {
        href: blockExplorerUrl('token', address, {
          networkType: networkType
        }),
        target: "_blank",
        _css4: theme.accent
      }, "See on Etherscan"))));
    }
  }]);

  return TokenBadgePopover;
}(React.PureComponent);

defineProperty(TokenBadgePopover, "propTypes", {
  address: propTypes.string.isRequired,
  iconUrl: propTypes.string,
  label: propTypes.string.isRequired,
  visible: propTypes.bool,
  opener: propTypes.instanceOf(Element),
  onClose: propTypes.func,
  networkType: propTypes.string
});

var Icon$1 = function Icon(_ref2) {
  var src = _ref2.src;
  return React.createElement(_StyledDiv$8, null, React.createElement(_StyledDiv2$5, {
    _css5: src
  }));
};

Icon$1.propTypes = {
  src: propTypes.string.isRequired
};

var _StyledSection$1 = styled("section")(_templateObject$g());

var _StyledButtonIcon$2 = styled(ButtonIcon)(_templateObject2$9());

var _StyledH$1 = styled("h1")(_templateObject3$8(), function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledP$1 = styled("p")(_templateObject4$6(), function (p) {
  return p._css3;
});

var _StyledSafeLink$1 = styled(SafeLink)(_templateObject5$4(), function (p) {
  return p._css4;
});

var _StyledDiv$8 = styled("div")(_templateObject6$2());

var _StyledDiv2$5 = styled("div")(_templateObject7$1(), function (p) {
  return p._css5;
});

function _templateObject4$7() {
  var data = taggedTemplateLiteral(["\n                  position: relative;\n                  top: 1px;\n                "]);

  _templateObject4$7 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$9() {
  var data = taggedTemplateLiteral(["\n                white-space: nowrap;\n                text-overflow: ellipsis;\n                overflow: hidden;\n              "]);

  _templateObject3$9 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$a() {
  var data = taggedTemplateLiteral(["\n              overflow: hidden;\n              display: flex;\n              align-items: center;\n              background: #daeaef;\n              border-radius: 3px;\n              text-decoration: none;\n              font-size: 15px;\n              min-width: 0;\n              flex-shrink: 1;\n              padding: 0 8px;\n            "]);

  _templateObject2$a = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$h() {
  var data = taggedTemplateLiteral(["\n            display: inline-flex;\n            overflow: hidden;\n            height: 24px;\n            color: ", ";\n          "]);

  _templateObject$h = function _templateObject() {
    return data;
  };

  return data;
}

var TokenBadge =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(TokenBadge, _React$PureComponent);

  function TokenBadge() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, TokenBadge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(TokenBadge)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "_element", React.createRef());

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      opened: false
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleClose", function () {
      _this.setState({
        opened: false
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "handleOpen", function () {
      _this.setState({
        opened: true
      });
    });

    return _this;
  }

  createClass(TokenBadge, [{
    key: "render",
    value: function render() {
      var opened = this.state.opened;
      var _this$props = this.props,
          address = _this$props.address,
          symbol = _this$props.symbol,
          name = _this$props.name,
          networkType = _this$props.networkType;
      var isValidAddress = isAddress(address);
      var iconUrl = isValidAddress && networkType === 'main' ? tokenIconUrl(address) : null;
      var label = name && symbol ? "".concat(name, " (").concat(symbol, ")") : symbol;
      return React.createElement(React.Fragment, null, React.createElement(_StyledButtonBase$4, {
        ref: this._element,
        title: "".concat(label, " \u2212 ").concat(address || 'No address'),
        onClick: isValidAddress ? this.handleOpen : null,
        _css: theme.textPrimary
      }, React.createElement(_StyledDiv$9, stylingProps(this), React.createElement(ImageExists, {
        src: iconUrl
      }, function (_ref) {
        var exists = _ref.exists;
        return exists && React.createElement(Icon$2, {
          src: iconUrl
        });
      }), React.createElement(_StyledDiv2$6, null, React.createElement(_StyledNameWrapper, null, name && React.createElement(Name, null, name), React.createElement(_Symbol, null, name ? "(".concat(symbol, ")") : symbol))))), address && React.createElement(TokenBadgePopover, {
        address: address,
        iconUrl: iconUrl,
        label: label,
        networkType: networkType,
        onClose: this.handleClose,
        opener: this._element.current,
        visible: opened
      }));
    }
  }]);

  return TokenBadge;
}(React.PureComponent);

defineProperty(TokenBadge, "propTypes", {
  address: propTypes.string,
  name: propTypes.string,
  networkType: propTypes.string,
  symbol: propTypes.string.isRequired
});

defineProperty(TokenBadge, "defaultProps", {
  address: '',
  name: '',
  networkType: 'main'
});

var Icon$2 = styled.span.withConfig({
  displayName: "TokenBadge__Icon",
  componentId: "sc-7bvdqo-0"
})(["flex-shrink:0;display:block;width:18px;height:18px;margin-right:4px;margin-left:-4px;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], function (p) {
  return p.src;
});
var NameWrapper = styled.span.withConfig({
  displayName: "TokenBadge__NameWrapper",
  componentId: "sc-7bvdqo-1"
})(["flex-shrink:1;display:flex;min-width:0;"]);
var Name = styled.span.withConfig({
  displayName: "TokenBadge__Name",
  componentId: "sc-7bvdqo-2"
})(["flex-shrink:1;overflow:hidden;text-overflow:ellipsis;min-width:20%;margin-right:4px;"]);

var _Symbol = styled.span.withConfig({
  displayName: "TokenBadge___Symbol",
  componentId: "sc-7bvdqo-3"
})(["flex-shrink:0;"]);

var _StyledButtonBase$4 = styled(ButtonBase$1)(_templateObject$h(), function (p) {
  return p._css;
});

var _StyledDiv$9 = styled("div")(_templateObject2$a());

var _StyledDiv2$6 = styled("div")(_templateObject3$9());

var _StyledNameWrapper = styled(NameWrapper)(_templateObject4$7());

var TransactionBadge =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(TransactionBadge, _React$PureComponent);

  function TransactionBadge() {
    classCallCheck(this, TransactionBadge);

    return possibleConstructorReturn(this, getPrototypeOf(TransactionBadge).apply(this, arguments));
  }

  createClass(TransactionBadge, [{
    key: "getMainProps",
    value: function getMainProps(transaction) {
      var _this$props = this.props,
          networkType = _this$props.networkType,
          background = _this$props.background;
      var baseProps = stylingProps(this);

      if (!transaction) {
        return baseProps;
      }

      return objectSpread({}, baseProps, {
        as: SafeLink,
        target: '_blank',
        href: blockExplorerUrl('transaction', transaction, {
          networkType: networkType
        }),
        style: objectSpread({}, baseProps.style, {
          cursor: 'pointer',
          backgroundColor: background
        })
      });
    }
  }, {
    key: "getLabel",
    value: function getLabel(transaction) {
      var shorten = this.props.shorten;

      if (!transaction) {
        return 'Invalid';
      }

      return shorten ? shortenTransaction(transaction) : transaction;
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var fontSize = props.fontSize;
      var transaction = isTransaction(props.transaction) ? props.transaction : null;
      var mainProps = this.getMainProps(transaction);
      return React.createElement(Main$d, _extends_1({
        title: transaction,
        onClick: this.handleClick
      }, mainProps), React.createElement(Label$4, {
        size: fontSize
      }, this.getLabel(transaction)));
    }
  }]);

  return TransactionBadge;
}(React.PureComponent);

defineProperty(TransactionBadge, "propTypes", {
  transaction: propTypes.string.isRequired,
  shorten: propTypes.bool,
  fontSize: propTypes.string,
  networkType: propTypes.string,
  background: propTypes.string
});

defineProperty(TransactionBadge, "defaultProps", {
  transaction: '',
  shorten: true,
  fontSize: 'normal',
  networkType: 'main',
  background: '#daeaef'
});

var Main$d = styled.div.withConfig({
  displayName: "TransactionBadge__Main",
  componentId: "sc-1ceh9ki-0"
})(["overflow:hidden;display:inline-flex;align-items:center;border-radius:3px;cursor:default;text-decoration:none;"]);
var Label$4 = styled(Text).withConfig({
  displayName: "TransactionBadge__Label",
  componentId: "sc-1ceh9ki-1"
})(["padding:0 8px;white-space:nowrap;"]);

var TransactionProgress =
/*#__PURE__*/
function (_React$Component) {
  inherits(TransactionProgress, _React$Component);

  function TransactionProgress() {
    classCallCheck(this, TransactionProgress);

    return possibleConstructorReturn(this, getPrototypeOf(TransactionProgress).apply(this, arguments));
  }

  createClass(TransactionProgress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          slow = _this$props.slow,
          progress = _this$props.progress,
          endTime = _this$props.endTime,
          transactionHashUrl = _this$props.transactionHashUrl,
          onClose = _this$props.onClose,
          opener = _this$props.opener;
      return React.createElement(Popover, {
        visible: visible,
        opener: opener,
        onClose: onClose
      }, React.createElement(CloseButton, {
        type: "button",
        onClick: onClose
      }, React.createElement(Close, null)), React.createElement(Wrapper, null, React.createElement(Text, {
        size: "large",
        weight: "bold"
      }, "Pending transaction"), React.createElement(ContentWrapper$1, null, React.createElement(Text, {
        smallcaps: true,
        color: theme.textSecondary
      }, "Estimated time:"), React.createElement(Countdown, {
        removeDaysAndHours: true,
        end: endTime
      })), React.createElement(ProgressBar, {
        color: theme.accent,
        value: progress
      }), React.createElement(FooterWrapper, {
        slow: slow
      }, slow && React.createElement(SlowTransaction, null, React.createElement(Info$1.Alert, null, "Slow transaction. Retry with more gas")), React.createElement(Link, {
        href: transactionHashUrl
      }, "See on Etherscan"))));
    }
  }]);

  return TransactionProgress;
}(React.Component);

defineProperty(TransactionProgress, "propTypes", {
  visible: propTypes.bool,
  opener: propTypes.instanceOf(Element),
  slow: propTypes.bool,
  transactionHashUrl: propTypes.string,
  endTime: propTypes.instanceOf(Date),
  onClose: propTypes.func,
  progress: propTypes.number
});

defineProperty(TransactionProgress, "defaultProps", {
  visible: false,
  onClose: noop
});

var Wrapper = styled.div.withConfig({
  displayName: "TransactionProgress__Wrapper",
  componentId: "vvbhu5-0"
})(["padding:1rem;"]);
var CloseButton = styled.button.withConfig({
  displayName: "TransactionProgress__CloseButton",
  componentId: "vvbhu5-1"
})(["position:absolute;top:10px;right:10px;cursor:pointer;background:none;border:0;outline:0;&::-moz-focus-inner{border:0;}"]);
var ContentWrapper$1 = styled.div.withConfig({
  displayName: "TransactionProgress__ContentWrapper",
  componentId: "vvbhu5-2"
})(["display:flex;justify-content:space-between;margin-top:1rem;margin-bottom:0.5rem;"]);
var FooterWrapper = styled.div.withConfig({
  displayName: "TransactionProgress__FooterWrapper",
  componentId: "vvbhu5-3"
})(["display:flex;justify-content:", ";align-items:center;padding-top:1rem;"], function (_ref) {
  var slow = _ref.slow;
  return slow ? 'space-between' : 'end';
});
var Link = styled(ExternalLink).withConfig({
  displayName: "TransactionProgress__Link",
  componentId: "vvbhu5-4"
})(["color:#21aae7;text-decoration:none;"]);
var SlowTransaction = styled.div.withConfig({
  displayName: "TransactionProgress__SlowTransaction",
  componentId: "vvbhu5-5"
})(["margin-right:10px;"]);

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

        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", initialState);

        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "subscribe", function (observable) {
          if (observable) {
            _this.setState({
              subscription: _observe(observable).subscribe(function (state) {
                _this.setState(state);
              })
            });
          }
        });

        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "unsubscribe", function () {
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

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
      redrawTime: EVERY_HOUR,
      lastDraw: -1
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "clearInterval", function () {
      _this.interval && clearInterval(_this.interval);
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "restartDrawInterval", function (redrawTime) {
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

export { ToastHubProvider as ToastHub, Toast, AddressField, AppBar, AppView, AragonApp, AutoComplete$1 as _AutoComplete, AutoCompleteSelected$1 as _AutoCompleteSelected, Badge, BadgeNumber, BaseStyles$1 as BaseStyles, Button, ButtonBase$1 as ButtonBase, ButtonIcon, StyledCard as Card, Checkbox, CircleGraph, ContextMenu, ContextMenuItem, Countdown, DropDown, EmptyStateCard, EscapeOutside, EthIdenticon, ExternalLink, Field, FloatIndicator, FocusVisible, IdentityBadge, Info$1 as Info, LineChart, LoadingRing, Main$9 as Main, Modal, NavigationBar, PartitionBar, Popover, ProgressBar, Radio, Radio as RadioButton, RadioGroup, RadioList, RootPortal, SafeLink, SidePanel, SidePanelSeparator, SidePanelSplit, Slider, SyncIndicator, TabBar, Table, TableCell, TableHeader, StyledTableRow as TableRow, Text, WrapperTextInput as TextInput, Timer, TokenBadge, TransactionBadge, TransactionProgress, useImageExists, ImageExists, useClickOutside, useOnBlur, useArrowKeysFocus, Add as IconAdd, Apps as IconApps, ArrowDown as IconArrowDown, ArrowRight as IconArrowRight, Attention as IconAttention, Blank as IconBlank, Bylaw as IconBylaw, Check as IconCheck, Close as IconClose, Copy as IconCopy, Cross as IconCross, Ellipsis as IconEllipsis, Error$1 as IconError, Filter as IconFilter, Fundraising as IconFundraising, Groups as IconGroups, Home as IconHome, Identity as IconIdentity, Menu as IconMenu, Notifications as IconNotifications, Permissions as IconPermissions, Plus as IconPlus, Remove as IconRemove, Settings as IconSettings, Share as IconShare, Time as IconTime, Wallet as IconWallet, observe, PublicUrl, Redraw, RedrawFromDate, Root, Viewport, useViewport, theme, themeDark, brand, colors$1 as colors, difference, formatHtmlDatetime, formatIntegerRange, unselectable, BREAKPOINTS, breakpoint, BreakPoint, font, grid, springs, spring, addressesEqual, shortenAddress, shortenTransaction, isAddress, isTransaction, blockExplorerUrl, tokenIconUrl, forwardProps, stylingProps, devOnly, log, warn, noop, identity };
