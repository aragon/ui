import { useCallback, useRef } from 'react'

/* eslint-disable react-hooks/rules-of-hooks */
export function useOnBlur(cb, ref = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const handleBlur = useCallback(
    event => {
      if (!ref.current.contains(event.relatedTarget)) {
        cb(event)
      }
    },
    [cb, ref]
  )

  return { ref, handleBlur }
}
