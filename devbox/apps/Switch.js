import React, { useState } from 'react'
import styled from 'styled-components'
import { Switch, GU, useTheme } from '@tecommons/ui'
import SplitSurfaces from '../components/SplitSurfaces'

function App() {
  const theme = useTheme()
  const demo = (
    <div>
      <div>
        <Option name="On" initiallyChecked />
        <Option name="Off" />
        <Option name="Disabled on" initiallyChecked disabled />
        <Option name="Disabled off" disabled />
      </div>
    </div>
  )
  return <SplitSurfaces primary={demo} secondary={demo} />
}

function Option({ name, initiallyChecked, ...passedProps }) {
  const [checked, setIsChecked] = useState(Boolean(initiallyChecked))
  return (
    <label
      css={`
        display: flex;
        align-items: center;
        justify-content: space-between;
        & + & {
          margin-top: ${1 * GU}px;
        }
      `}
    >
      <span
        css={`
          padding-right: ${3 * GU}px;
          min-width: 100px;
        `}
      >
        {name}
      </span>
      <Switch onChange={setIsChecked} checked={checked} {...passedProps} />
    </label>
  )
}

export default App
