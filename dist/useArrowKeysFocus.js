'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var keycodes = require('./keycodes.js');

function useArrowKeysFocus(refs) {
  const [highlightedIndex, setHighlightedIndex] = React.useState(-1);
  const cycleFocus = React.useCallback((e, change) => {
    e.preventDefault();
    let next = highlightedIndex + change;

    if (next > refs.length - 1) {
      next = 0;
    }

    if (next < 0) {
      next = refs.length - 1;
    }

    setHighlightedIndex(next);
  }, [highlightedIndex, refs.length]);
  const handleKeyDown = React.useCallback(event => {
    const {
      keyCode
    } = event;

    if (keyCode === keycodes.KEY_UP || keyCode === keycodes.KEY_DOWN) {
      cycleFocus(event, keyCode === keycodes.KEY_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  React.useEffect(() => {
    if (highlightedIndex === -1) {
      return;
    }

    if (!refs[highlightedIndex]) {
      return;
    }

    refs[highlightedIndex].focus();
  }, [highlightedIndex, refs]);
  return {
    highlightedIndex,
    setHighlightedIndex
  };
}

exports.useArrowKeysFocus = useArrowKeysFocus;
//# sourceMappingURL=useArrowKeysFocus.js.map
