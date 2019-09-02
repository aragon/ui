import React, { useContext, useEffect, useMemo, useState } from 'react'

function initContainsComponent() {
  const ContainsContext = React.createContext({ contains: false })

  return {
    // Wrap the parent component with this provider.
    /* eslint-disable react/prop-types */
    Provider({ children }) {
      const [count, setCount] = useState(0)

      const contextValue = useMemo(() => {
        return {
          updateCount(diff) {
            setCount(count => count + diff)
          },
          contains: count > 0,
        }
      }, [count])

      return (
        <ContainsContext.Provider value={contextValue}>
          {children}
        </ContainsContext.Provider>
      )
    },
    /* eslint-enable react/prop-types */

    // Call this from the parent component (returns a boolean)
    useContains() {
      return useContext(ContainsContext).contains
    },

    // Call this from the child component
    useRegister() {
      const { updateCount } = useContext(ContainsContext)

      useEffect(() => {
        if (!updateCount) {
          return
        }
        updateCount(1)
        return () => {
          updateCount(-1)
        }
        // We don't want this effect to ever re-run
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    },
  }
}

export { initContainsComponent }
