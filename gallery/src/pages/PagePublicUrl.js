import React from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/providers/PublicUrl/README.md'

class PagePublicUrl extends React.Component {
  render() {
    const { title } = this.props

    return <Page title={title} readme={readme} />
  }
}

export default PagePublicUrl
