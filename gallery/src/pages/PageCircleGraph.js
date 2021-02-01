import React from 'react'
import styled from 'styled-components'
import Page from 'comps/Page/Page'

import readme from 'ui-src/components/CircleGraph/README.md'
import { Card, CircleGraph, Button } from '@tecommons/ui'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  .button {
    margin-top: 30px;
  }
`

class PageCircleGraph extends React.Component {
  state = {
    values: [1 / 3, 1 / 5, 64 / 100],
  }
  updateValue = index => {
    this.setState(({ values }) => ({
      values: [
        ...values.slice(0, index),
        Math.random(),
        ...values.slice(index + 1),
      ],
    }))
  }
  render() {
    const { title } = this.props
    const { values } = this.state
    return (
      <Page title={title} readme={readme}>
        <Page.Demo>
          <div style={{ display: 'flex', padding: '20px' }}>
            {values.map((value, index) => (
              <Card
                key={index}
                width="200px"
                height="auto"
                style={{ marginRight: '20px', padding: '0 10px' }}
              >
                <Container>
                  <CircleGraph value={value} size={120} />
                  <div className="button">
                    <Button
                      onClick={() => this.updateValue(index)}
                      mode="strong"
                      compact
                      style={{ width: 80 }}
                    >
                      Change
                    </Button>
                  </div>
                </Container>
              </Card>
            ))}
          </div>
        </Page.Demo>
      </Page>
    )
  }
}

export default PageCircleGraph
