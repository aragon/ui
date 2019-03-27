import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { Root } from '../../providers/Root'

const RootPortal = props => (
  <Root>
    {rootElement => {
      if (!rootElement) {
        throw new Error(
          '<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?'
        )
      }
      return ReactDOM.createPortal(props.children, rootElement)
    }}
  </Root>
)

RootPortal.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RootPortal
