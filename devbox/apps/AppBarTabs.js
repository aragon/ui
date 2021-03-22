import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppBar, AppView, TabBar, NavigationBar } from '@tecommons/ui'

const TABS = ['Home', 'Another screen']
const ITEMS = ['My App', 'Details']

const steps = 6

const getTab = step => {
  if (step === 0) return 0
  if (step === 1) return 1
  if (step === 2) return null
  if (step === 3) return 1
  if (step === 4) return 0
  if (step === 5) return null
  return null
}

const getDelay = step => {
  if (step === 1 || step === 4) return 400
  return 1200
}

const App = () => {
  const [step, setStep] = useState(0)

  const tab = getTab(step)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((step + 1) % steps)
    }, getDelay(step))
    return () => {
      clearTimeout(timer)
    }
  })

  const items = tab === null ? ITEMS : ITEMS.slice(0, 1)

  return (
    <div
      css={`
        width: 100vw;
        height: 100vh;
        background: hsl(0, 80%, 90%);
        display: flex;
        align-items: center;
      `}
    >
      <div
        css={`
          margin: 0 auto;
          width: 400px;
          height: 200px;
          overflow: hidden;
          background: #f7fbfd;
          border-radius: 5px;
          box-shadow: 0 0 40px hsl(0, 0%, 0%, 0.2);
        `}
      >
        <AppView
          appBar={
            <AppBar
              tabs={
                tab === null ? null : <TabBar items={TABS} selected={tab} />
              }
            >
              <NavigationBar items={items} />
            </AppBar>
          }
        >
          <div
            css={`
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 30px;
            `}
          >
            {null && TABS[tab]}
          </div>
        </AppView>
      </div>
    </div>
  )
}

export default App
