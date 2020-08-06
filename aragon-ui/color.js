'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./unsupportedIterableToArray-f175acfa.js');
var _commonjsHelpers = require('./_commonjsHelpers-1b94f6bc.js');
var toConsumableArray = require('./toConsumableArray-cc0d28a9.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

var isNativeFunction = _isNativeFunction;

function _isNativeReflectConstruct() {
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

var isNativeReflectConstruct = _isNativeReflectConstruct;

var construct = _commonjsHelpers.createCommonjsModule(function (module) {
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) getPrototypeOf.setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;
});

var wrapNativeSuper = _commonjsHelpers.createCommonjsModule(function (module) {
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
      return construct(Class, arguments, getPrototypeOf.getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return getPrototypeOf.setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;
});

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RGB_HEX_RE = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function rgbFromRgbInt(rgbInt) {
  return {
    r: Math.floor(rgbInt / Math.pow(256, 2)),
    g: Math.floor(rgbInt / 256 % 256),
    b: Math.floor(rgbInt % 256)
  };
}

function normalizeHexColor(value) {
  var matches = value ? String(value).match(RGB_HEX_RE) : null;

  if (matches === null) {
    throw new Error("color(): the value must be a valid CSS hexadecimal color. Received: ".concat(value));
  }

  var hexColor = matches[1].toUpperCase();

  if (hexColor.length === 3) {
    return toConsumableArray.toConsumableArray(hexColor).map(function (c) {
      return c + c;
    }).join('');
  }

  return hexColor;
}

var Color = /*#__PURE__*/function (_String) {
  getPrototypeOf.inherits(Color, _String);

  var _super = _createSuper(Color);

  function Color(value) {
    var _this;

    getPrototypeOf.classCallCheck(this, Color);

    _this = _super.call(this, value);
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

  getPrototypeOf.createClass(Color, [{
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
}( /*#__PURE__*/wrapNativeSuper(String));

function color(value) {
  return new Color(value);
}

exports.default = color;
//# sourceMappingURL=color.js.map
