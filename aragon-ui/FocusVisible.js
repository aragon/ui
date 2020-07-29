'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
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

var FocusVisible = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf._inherits(FocusVisible, _React$Component);

  var _super = _createSuper(FocusVisible);

  function FocusVisible() {
    var _this;

    getPrototypeOf._classCallCheck(this, FocusVisible);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_element", React__default.createRef());

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "_document", null);

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "state", {
      focusVisible: false
    });

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handlePointerEvent", function (e) {
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

    defineProperty._defineProperty(getPrototypeOf._assertThisInitialized(_this), "handleFocus", function () {
      _this.setState({
        focusVisible: !_this._pointerActive
      });
    });

    return _this;
  }

  getPrototypeOf._createClass(FocusVisible, [{
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
      return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, this.props.children({
        focusVisible: focusVisible,
        onFocus: this.handleFocus
      }), !this._document && /*#__PURE__*/React__default.createElement("span", {
        ref: this._element
      }));
    }
  }]);

  return FocusVisible;
}(React__default.Component);

defineProperty._defineProperty(FocusVisible, "propTypes", {
  // children is called with an object containing two entries:
  //   - focusVisible represents the visibility of the focus (boolean).
  //   - onFocus() need to be called when the target element is focused.
  children: index.PropTypes.func.isRequired
});

exports.default = FocusVisible;
//# sourceMappingURL=FocusVisible.js.map
