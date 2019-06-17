import React, { useState, useCallback, useContext, useEffect } from 'react'

function initContainsComponent() {
  const Context = React.createContext({})

  return [
    function Provider({ contextValue, children }) {
      return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
      )
    },

    function useRegisterComponent() {
      const { add, remove } = useContext(Context)
      useEffect(() => {
        if (add) {
          add()
        }
        return () => {
          if (remove) {
            remove()
          }
        }
      }, [])
    },

    function useComponentCounter() {
      const [count, setCount] = useState(0)

      const add = useCallback(() => {
        setCount(count => count + 1)
      }, [])

      const remove = useCallback(() => {
        setCount(count => count - 1)
      }, [])

      return [count, { add, remove }]
    },
  ]
}

export { initContainsComponent }
