// This pair of component + hook can be used to know that a component is in the
// tree of another component. It works by using a Map containing named contexts.

import React, { useContext } from 'react'
import PropTypes from 'prop-types'

// List of contexts, created as they are requested
const insideContexts = new Map()

// Creates the required context if it doesn’t exist.
function getContext(name) {
  if (!insideContexts.has(name)) {
    insideContexts.set(name, React.createContext({ inside: false, data: null }))
  }
  return insideContexts.get(name)
}

// Use this component to declare a new “inside context”, by name.
function Inside({ children, data, name }) {
  const Context = getContext(name)
  return (
    <Context.Provider value={{ inside: true, data }}>
      {children}
    </Context.Provider>
  )
}

Inside.propTypes = {
  children: PropTypes.node,
  data: PropTypes.any,
  name: PropTypes.string.isRequired,
}

// Use this hook to know if a given component is somewhere
// in the tree of an <Inside> declared with the same name.
function useInside(name, withData) {
  const { inside, data } = useContext(getContext(name))
  return withData ? [inside, data] : inside
}

export { Inside, useInside }
