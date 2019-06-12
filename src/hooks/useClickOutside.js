import { useCallback, useRef, useEffect } from 'react'

/* eslint-disable react-hooks/rules-of-hooks */
export function useClickOutside(cb, ref = useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const handleClick = useCallback(
    e => {
      if (!ref.current.contains(e.target)) {
        cb()
      }
    },
    [cb, ref]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => {
      document.removeEventListener('click', handleClick, true)
    }
  }, [handleClick])

  return { ref }
}
