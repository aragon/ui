import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

const RootContext = React.createContext(null)

function RootProvider({ children, ...props }) {
  const [element, setElement] = useState(null)

  const handleRef = useCallback(element => {
    if (element !== null) {
      setElement(element)
    }
  }, [])

  return (
    <RootContext.Provider value={element}>
      <div ref={handleRef} {...props}>
        {/*
            We don’t render the children tree until the element is present, at
            the second rendering.

            The reason why it is needed is because element references are
            assigned after the first rendering, and we don’t want to let
            `<Root />` consumers having to deal with the reference being `null`
            at the first rendering.

            This way, we can guarantee that if a consumer gets `null` rather
            than the element, it’s because <Root.Provider /> has to be defined
            at an upper level.
          */
        element ? children : null}
      </div>
    </RootContext.Provider>
  )
}

RootProvider.propTypes = {
  children: PropTypes.node,
}

function Root(props) {
  return <RootContext.Consumer {...props} />
}

Root.Provider = RootProvider

export { Root }
export default Root
