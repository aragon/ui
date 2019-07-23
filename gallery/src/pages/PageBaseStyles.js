import React from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/BaseStyles/README.md'


class PageBaseStyles extends React.Component {
  render() {
    const { title } = this.props

    return <Page title={title} readme={readme} />
  }
}

export default PageBaseStyles
