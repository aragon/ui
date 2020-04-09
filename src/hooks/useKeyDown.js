import { useCallback, useEffect, useMemo } from 'react'

export function useKeyDown(key, callback) {
  const keys = useMemo(() => (Array.isArray(key) ? key : [key]), [key])

  const handleKeyDown = useCallback(
    event => {
      if (keys.includes(event.keyCode)) {
        callback(event.keyCode, event)
      }
    },
    [callback, keys]
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
