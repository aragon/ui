import { useCallback, useRef } from 'react'

/* eslint-disable react-hooks/rules-of-hooks */
export function useFocusLeave(cb, ref = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const handleFocusLeave = useCallback(
    event => {
      if (!ref.current.contains(event.relatedTarget)) {
        cb(event)
      }
    },
    [cb, ref]
  )

  return { ref, handleFocusLeave }
}
