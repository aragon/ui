import React from 'react'
import styled from 'styled-components'
import { AragonApp, LineChart, unselectable } from '@aragon/ui'

const data = [
  {
    id: 1,
    values: [0.1, 0.3, 0.5, 0.4, 0.6, 0.9],
    color: '#028CD1',
  },
  {
    id: 2,
    values: [0.5, 0.1, 0.9, 0.01, 0.6, 0.3],
    color: '#bdedef',
  }
]

const labels = ['1', '2', '3','4','5','6','7','8']

class App extends React.Component {
  state = { active: 0 }
  handleChange = index => {
    this.setState({ active: index })
  }
  render() {
    const { active } = this.state
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <Container>
            <LineChart
              settings={data}
              durationSlices={8}
              labels={labels}
              captionsHeight={20}
            />
          </Container>
        </Main>
      </AragonApp>
    )
  }
}

const Main = styled.div`
  ${unselectable};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
`

const Container = styled.div`
  width: 360px;
`

export default App
