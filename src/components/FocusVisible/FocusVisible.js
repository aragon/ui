import React from 'react'
import PropTypes from 'prop-types'

// Implements a behavior similar to :focus-visible for browsers that are not
// supporting it yet.
//
// It follows the Chrome implementation, checking for a pointer device rather
// than a keyboard event.
//
// Resources:
//  - https://caniuse.com/#search=%3Afocus-visible
//  - https://github.com/WICG/focus-visible/issues/88#issuecomment-363227219
//  - https://chromium-review.googlesource.com/c/chromium/src/+/897002<Paste>
class FocusVisible extends React.Component {
  static propTypes = {
    // children is called with an object containing two entries:
    //   - focusVisible represents the visibility of the focus (boolean).
    //   - onFocus() need to be called when the target element is focused.
    children: PropTypes.func.isRequired,
  }
  state = {
    focusVisible: false,
  }
  componentDidMount() {
    document.addEventListener('mousedown', this.handlePointerEvent)
    document.addEventListener('mouseup', this.handlePointerEvent)
    document.addEventListener('touchstart', this.handlePointerEvent)
    document.addEventListener('touchend', this.handlePointerEvent)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handlePointerEvent)
    document.removeEventListener('mouseup', this.handlePointerEvent)
    document.removeEventListener('touchstart', this.handlePointerEvent)
    document.removeEventListener('touchend', this.handlePointerEvent)
  }
  handleFocus = () => {
    this.setState({ focusVisible: !this._pointerActive })
  }
  handlePointerEvent = e => {
    this._pointerActive = true
    this._timer = setTimeout(() => {
      this._pointerActive = false
    }, 0)
    this.setState({ focusVisible: false })
  }
  render() {
    const { focusVisible } = this.state
    return this.props.children({ focusVisible, onFocus: this.handleFocus })
  }
}

export default FocusVisible
