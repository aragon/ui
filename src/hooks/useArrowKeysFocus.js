import { useState, useCallback, useEffect } from 'react'
import { KEY_UP, KEY_DOWN } from '../utils'

/* eslint-disable react-hooks/rules-of-hooks */
export function useArrowKeysFocus(refs) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const cycleFocus = useCallback(
    (e, change) => {
      e.preventDefault()
      let next = highlightedIndex + change
      if (next > refs.length - 1) {
        next = 0
      }
      if (next < 0) {
        next = refs.length - 1
      }
      setHighlightedIndex(next)
    },
    [highlightedIndex, refs.length]
  )
  const handleKeyDown = useCallback(
    e => {
      const { keyCode } = e
      if (keyCode === KEY_UP || keyCode === KEY_DOWN) {
        cycleFocus(e, keyCode === KEY_UP ? -1 : 1)
      }
    },
    [cycleFocus]
  )

  useEffect(() => {
    if (highlightedIndex === -1) {
      return
    }
    if (!refs[highlightedIndex]) {
      return
    }
    refs[highlightedIndex].focus()
  }, [highlightedIndex, refs])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return {
    highlightedIndex,
    setHighlightedIndex: index => () => setHighlightedIndex(index),
  }
}
