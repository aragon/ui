import React from 'react'
import styled from 'styled-components'
import { Timer } from '@aragon/ui'

const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60
const DAYS = HOURS * 24

const now = Date.now()

const timers = [
  { start: -40 * SECONDS },
  { start: -40 * SECONDS, showEmpty: true },
  { start: -4 * HOURS, end: 8 * HOURS },
  { end: 1 * DAYS },
  ...['dhms', 'dhm', 'hms', 'hm', 'ms', 'm', 's'].map(format => ({
    end: 2 * DAYS - 55 * SECONDS,
    format,
  })),
].map(timer => {
  if (timer.start) timer.start = new Date(now + timer.start)
  if (timer.end) timer.end = new Date(now + timer.end)
  return timer
})

class App extends React.Component {
  render() {
    return (
      <Main>
        <div>
          {timers.map((props, i) => (
            <div
              key={i}
              css={`
                padding: 5px 0;
              `}
            >
              <Timer {...props} />
            </div>
          ))}
        </div>
      </Main>
    )
  }
}

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export default App
