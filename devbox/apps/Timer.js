import React from 'react'
import styled from 'styled-components'
import { Timer } from '@aragon/ui'

const SECONDS = 1000
const MINUTES = 60 * SECONDS
const HOURS = 60 * MINUTES
const DAYS = 24 * HOURS

const now = Date.now()
const OVER_A_YEAR_END = 398 * DAYS

const timers = [
  { start: -40 * SECONDS },
  { start: -40 * SECONDS, showEmpty: true },
  { start: -4 * DAYS, end: 20 * DAYS },
  { end: 1 * DAYS },
  ...[
    'yMdhms',
    'yMdhm',
    'yMdh',
    'yMd',
    'yM',
    'Mdhms',
    'Mdhm',
    'Mdh',
    'Md',
    'dhms',
    'dhm',
    'hms',
    'hm',
    'ms',
    'm',
    's',
  ].map(format => ({
    end: OVER_A_YEAR_END - 55 * SECONDS,
    format,
  })),
].map(timer => {
  if (timer.start) timer.start = new Date(now + timer.start)
  if (timer.end) timer.end = new Date(now + timer.end)
  return timer
})

function App() {
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

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export default App
