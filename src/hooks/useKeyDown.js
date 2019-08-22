import { useCallback, useEffect, useMemo } from 'react'

export function useKeyDown(key, callback) {
  const keys = useMemo(() => (Array.isArray(key) ? key : [key]), [key])

  const handlekeyDown = useCallback(
    event => {
      if (keys.includes(event.keyCode)) {
        callback()
      }
    },
    [callback, keys]
  )

  useEffect(() => {
    window.addEventListener('keydown', handlekeyDown)
    return () => {
      window.removeEventListener('keydown', handlekeyDown)
    }
  }, [handlekeyDown])
}
