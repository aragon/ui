import { useCallback, useRef } from 'react'

/* eslint-disable react-hooks/rules-of-hooks */
export function useFocusEnter(cb, ref = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const handleFocusEnter = useCallback(
    event => {
      if (ref.current.contains(event.target)) {
        cb(event)
      }
    },
    [cb, ref]
  )

  return { ref, handleFocusEnter }
}
