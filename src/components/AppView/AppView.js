import React from 'react'
import PropTypes from 'prop-types'
import { pick } from '../../utils'
import { Layout } from '../Layout/Layout'
import { useTheme } from '../../theme/Theme'

function AppView({ children, ...props }) {
  const theme = useTheme()

  return (
    <div
      css={`
        background: ${theme.background};
      `}
      {...pick(props, ['style', 'className'])}
    >
      <Layout>{children}</Layout>
    </div>
  )
}

AppView.propTypes = {
  children: PropTypes.node,
}

export default AppView
