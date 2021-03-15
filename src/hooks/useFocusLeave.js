import { useCallback, useRef } from 'react'

export function useFocusLeave(cb, _ref) {
  const fallbackRef = useRef()
  const ref = _ref || fallbackRef

  const handleFocusLeave = useCallback(
    event => {
      if (ref && ref.current && !ref.current.contains(event.relatedTarget)) {
        cb(event)
      }
    },
    [ref, cb]
  )

  return { ref, handleFocusLeave }
}
