import { useRef, useState, useCallback, useEffect } from 'react'
import { useOnBlur } from './'

const KEYCODE_UP = 38
const KEYCODE_DOWN = 40

/* eslint-disable react-hooks/rules-of-hooks */
export function useArrowKeysFocus(query, containerRef = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const reset = () => setHighlightedIndex(-1)
  const cycleFocus = useCallback(
    (e, change) => {
      e.preventDefault()
      const elements = document.querySelectorAll(query)
      let next = highlightedIndex + change
      if (next > elements.length - 1) {
        next = 0
      }
      if (next < 0) {
        next = elements.length - 1
      }
      if (!elements[next]) {
        next = -1
      }
      setHighlightedIndex(next)
    },
    [highlightedIndex, query]
  )
  const handleKeyDown = useCallback(
    e => {
      const { keyCode } = e
      keyCode === KEYCODE_UP
        ? cycleFocus(e, -1)
        : keyCode === KEYCODE_DOWN
        ? cycleFocus(e, 1)
        : null
    },
    [cycleFocus]
  )

  const { handleBlur: handleContainerBlur } = useOnBlur(reset, containerRef)
  useEffect(() => {
    if (highlightedIndex === -1) {
      return
    }
    const elements = document.querySelectorAll(query)
    if (!elements[highlightedIndex]) {
      return
    }
    elements[highlightedIndex].focus()
  }, [highlightedIndex, query])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return { containerRef, handleContainerBlur }
}
