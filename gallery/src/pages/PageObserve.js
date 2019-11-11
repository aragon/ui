import React from 'react'
import styled from 'styled-components'
import { Subject } from 'rxjs'
import { map } from 'rxjs/operators'
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
    clearTimeout(this.tickTimer)

    let val = 0
    const tick = () => {
      val = (val + 1) % 10
      this.observable.next(val)
      this.tickTimer = setTimeout(tick, 500)
    }
    tick()
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

function Receiver({ propValue, value }) {
  return (
    <div>
      <p>
        Current observed value: <Tag>{value}</Tag>
      </p>
      <p>
        Current passed prop value: <Tag>{propValue}</Tag>
      </p>
    </div>
  )
}

const Observed = observe(
  observable => observable.pipe(map(value => ({ value }))),
  { value: 0 }
)(Receiver)

export default PageObserve
