import { useCallback, useEffect, useMemo } from 'react'

export function useKeyDown(key, callback) {
  const keys = useMemo(() => (Array.isArray(key) ? key : [key]), [key])

  const handlekeyDown = useCallback(
    event => {
      if (keys.includes(event.keyCode)) {
        callback(event.keyCode)
      }
    },
    [callback, keys]
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.addEventListener('keydown', handlekeyDown)
    return () => {
      window.removeEventListener('keydown', handlekeyDown)
    }
  }, [handlekeyDown])
}
