import React from 'react'
import styled from 'styled-components'
import { AragonApp, Timer } from '@aragon/ui'

const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60
const DAYS = HOURS * 24

const now = Date.now()

const timers = [
  { start: -4 * HOURS },
  { start: -4 * HOURS, end: 8 * HOURS },
  { end: 1 * DAYS },
].map(({ start, end }) => {
  const timer = {}
  if (start) timer.start = new Date(now + start)
  if (end) timer.end = new Date(now + end)
  return timer
})

class App extends React.Component {
  render() {
    return (
      <AragonApp publicUrl="/aragon-ui/">
        <Main>
          <div>
            {timers.map(timer => (
              <div
                css={`
                  margin-bottom: 10px;
                `}
              >
                <Timer {...timer} />
              </div>
            ))}
          </div>
        </Main>
      </AragonApp>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default App
