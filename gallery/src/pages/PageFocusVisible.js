import React, { Component } from 'react'

import Page from 'comps/Page/Page'
import readme from 'ui-src/components/FocusVisible/README.md'

class FocusVisible extends Component {

  render() {
    return <Page title={this.props.title} readme={readme} />
  }
}

export default FocusVisible
