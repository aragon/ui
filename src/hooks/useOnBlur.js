import { useCallback, useRef } from 'react'

/* eslint-disable react-hooks/rules-of-hooks */
export function useOnBlur(cb, ref = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const handleBlur = useCallback(
    e => {
      if (!ref.current.contains(e.relatedTarget)) {
        cb()
      }
    },
    [cb, ref]
  )

  return { ref, handleBlur }
}
