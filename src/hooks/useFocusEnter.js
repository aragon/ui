import { useCallback, useRef } from 'react'

export function useFocusEnter(cb, _ref) {
  const fallbackRef = useRef()
  const ref = _ref || fallbackRef

  const handleFocusEnter = useCallback(
    event => {
      if (ref && ref.current && ref.current.contains(event.target)) {
        cb(event)
      }
    },
    [cb, ref]
  )

  return { ref, handleFocusEnter }
}
