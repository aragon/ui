import React from 'react'
import styled from 'styled-components'
import { Subject } from 'rxjs'
import { observe, Tag, Button } from '@aragon/ui'

import Page from 'comps/Page/Page'
import readme from 'ui-src/providers/observe/README.md'

const Container = styled.div`
  padding: 20px;
`
const LaunchButton = styled(Button).attrs({
  mode: 'strong',
})`
  margin-top: 10px;
`

class PageObserve extends React.Component {
  constructor() {
    super()
    this.observable = new Subject()
  }
  launchEvents = () => {
    ;[1, 2, 3].forEach(val => {
      setTimeout(() => {
        this.observable.next(val)
      }, val * 500)
    })
  }
  render() {
    const { title } = this.props
    return (
      <Page title={title} readme={readme}>
        <Page.Demo opaque>
          <Container>
            <Observed observable={this.observable} propValue={0} />
            <LaunchButton onClick={this.launchEvents}>
              Launch RxJS events
            </LaunchButton>
          </Container>
        </Page.Demo>
      </Page>
    )
  }
}

const Receiver = ({ propValue, value }) => (
  <div>
    <p>
      Current observed value: <Tag>{value}</Tag>
    </p>
    <p>
      Current passed prop value: <Tag>{propValue}</Tag>
    </p>
  </div>
)
const Observed = observe(
  observable =>
    observable.map(value => {
      return { value }
    }),
  { value: 0 }
)(Receiver)

export default PageObserve
