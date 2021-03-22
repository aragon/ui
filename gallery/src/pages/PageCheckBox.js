import React from 'react'
import styled from 'styled-components'
import { Checkbox } from '@tecommons/ui'
import Page from 'comps/Page/Page'
import Container from 'comps/Page/DemoContainer'
import readme from 'ui-src/components/Input/Checkbox.md'

const DemoHeader = styled.h4`
  padding: 15px;
`

class PageCheckbox extends React.Component {
  state = {
    first: false,
    second: false,
  }

  render() {
    const { title } = this.props
    const { first, second } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo>
          <DemoHeader>Checkbox</DemoHeader>
          <Container>
            <div>
              <label>
                <Checkbox
                  checked={first && second}
                  indeterminate={Boolean(first ^ second)}
                  onChange={checked =>
                    this.setState({ first: checked, second: checked })
                  }
                />
                Check all
              </label>
            </div>
            <div>
              <label>
                <Checkbox
                  checked={first}
                  onChange={checked => this.setState({ first: checked })}
                />
                First
              </label>
            </div>
            <div>
              <label>
                <Checkbox
                  checked={second}
                  onChange={checked => this.setState({ second: checked })}
                />
                Second
              </label>
            </div>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageCheckbox
