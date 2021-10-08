'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var React = require('react');
var keycodes = require('./keycodes.js');
require('./unsupportedIterableToArray-f175acfa.js');

function useArrowKeysFocus(refs) {
  var _useState = React.useState(-1),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      highlightedIndex = _useState2[0],
      setHighlightedIndex = _useState2[1];

  var cycleFocus = React.useCallback(function (e, change) {
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
  var handleKeyDown = React.useCallback(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === keycodes.KEY_UP || keyCode === keycodes.KEY_DOWN) {
      cycleFocus(event, keyCode === keycodes.KEY_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  React.useEffect(function () {
    document.addEventListener('keydown', handleKeyDown);
    return function () {
      return document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  React.useEffect(function () {
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

exports.useArrowKeysFocus = useArrowKeysFocus;
//# sourceMappingURL=useArrowKeysFocus.js.map
