import { useRef, useState, useCallback, useEffect } from 'react'
import { useOnBlur } from './'

/* eslint-disable react-hooks/rules-of-hooks */
export function useArrowKeysFocus(query, containerRef = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const [index, setIndex] = useState(-1)

  const reset = () => setIndex(-1)
  const cycleFocus = useCallback(
    (e, change) => {
      e.preventDefault()
      const elements = document.querySelectorAll(query)
      let next = index + change
      if (next > elements.length - 1) {
        next = 0
      }
      if (next < 0) {
        next = elements.length - 1
      }
      if (!elements[next]) {
        next = -1
      }
      setIndex(next)
    },
    [index, query]
  )
  const handleKeyDown = useCallback(
    e => {
      const { keyCode } = e
      keyCode === 38
        ? cycleFocus(e, -1)
        : keyCode === 40
        ? cycleFocus(e, 1)
        : null
    },
    [cycleFocus]
  )

  const { handleBlur: handleContainerBlur } = useOnBlur(reset, containerRef)
  useEffect(() => {
    if (index === -1) {
      return
    }
    const elements = document.querySelectorAll(query)
    if (!elements[index]) {
      return
    }
    elements[index].focus()
  }, [index, query])
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return { containerRef, handleContainerBlur }
}
