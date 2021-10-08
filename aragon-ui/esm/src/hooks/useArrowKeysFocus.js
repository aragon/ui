import slicedToArray from '../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import { useState, useCallback, useEffect } from 'react';
import { KEY_UP, KEY_DOWN } from '../utils/keycodes.js';

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

export { useArrowKeysFocus };
//# sourceMappingURL=useArrowKeysFocus.js.map
