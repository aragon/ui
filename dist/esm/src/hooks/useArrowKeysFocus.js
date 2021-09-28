import { useState, useCallback, useEffect } from 'react';
import { KEY_UP, KEY_DOWN } from '../utils/keycodes.js';

function useArrowKeysFocus(refs) {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const cycleFocus = useCallback((e, change) => {
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
  const handleKeyDown = useCallback(event => {
    const {
      keyCode
    } = event;

    if (keyCode === KEY_UP || keyCode === KEY_DOWN) {
      cycleFocus(event, keyCode === KEY_UP ? -1 : 1);
    }
  }, [cycleFocus]);
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  useEffect(() => {
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

export { useArrowKeysFocus };
//# sourceMappingURL=useArrowKeysFocus.js.map
