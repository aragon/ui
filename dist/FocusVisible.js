'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var index = require('./index-19b0c963.js');
require('./_commonjsHelpers-1b94f6bc.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

class FocusVisible extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "_element", /*#__PURE__*/React__default["default"].createRef());

    defineProperty._defineProperty(this, "_document", null);

    defineProperty._defineProperty(this, "state", {
      focusVisible: false
    });

    defineProperty._defineProperty(this, "handlePointerEvent", e => {
      this._pointerActive = true;
      this._timer = setTimeout(() => {
        this._pointerActive = false;
      }, 0);

      if (this.state.focusVisible) {
        this.setState({
          focusVisible: false
        });
      }
    });

    defineProperty._defineProperty(this, "handleFocus", () => {
      this.setState({
        focusVisible: !this._pointerActive
      });
    });
  }

  componentDidMount() {
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

  componentWillUnmount() {
    if (this._document) {
      this._document.removeEventListener('mousedown', this.handlePointerEvent);

      this._document.removeEventListener('mouseup', this.handlePointerEvent);

      this._document.removeEventListener('touchstart', this.handlePointerEvent);

      this._document.removeEventListener('touchend', this.handlePointerEvent);
    }
  } // It doesn’t seem to be specified, but pointer-related events happen before
  // the focus-related events on every modern browser.


  render() {
    const {
      focusVisible
    } = this.state;
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, this.props.children({
      focusVisible,
      onFocus: this.handleFocus
    }), !this._document && /*#__PURE__*/React__default["default"].createElement("span", {
      ref: this._element
    }));
  }

}

defineProperty._defineProperty(FocusVisible, "propTypes", {
  // children is called with an object containing two entries:
  //   - focusVisible represents the visibility of the focus (boolean).
  //   - onFocus() need to be called when the target element is focused.
  children: index.PropTypes.func.isRequired
});

exports["default"] = FocusVisible;
//# sourceMappingURL=FocusVisible.js.map
