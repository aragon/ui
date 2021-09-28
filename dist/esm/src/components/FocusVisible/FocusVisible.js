import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';

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

class FocusVisible extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_element", /*#__PURE__*/React.createRef());

    _defineProperty(this, "_document", null);

    _defineProperty(this, "state", {
      focusVisible: false
    });

    _defineProperty(this, "handlePointerEvent", e => {
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

    _defineProperty(this, "handleFocus", () => {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.children({
      focusVisible,
      onFocus: this.handleFocus
    }), !this._document && /*#__PURE__*/React.createElement("span", {
      ref: this._element
    }));
  }

}

_defineProperty(FocusVisible, "propTypes", {
  // children is called with an object containing two entries:
  //   - focusVisible represents the visibility of the focus (boolean).
  //   - onFocus() need to be called when the target element is focused.
  children: PropTypes.func.isRequired
});

export { FocusVisible as default };
//# sourceMappingURL=FocusVisible.js.map
