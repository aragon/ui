import React, { useState } from 'react'
import styled from 'styled-components'
import { Switch } from '@aragon/ui'

const Text = styled.span`
  padding-right: 20px;
  min-width: 100px;
`
const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

// eslint-disable-next-line react/prop-types
const Option = ({ name, initiallyChecked, ...passedProps }) => {
  const [checked, setIsChecked] = useState(Boolean(initiallyChecked))
  return (
    <OptionWrapper>
      <Text>{name}</Text>
      <Switch onChange={setIsChecked} checked={checked} {...passedProps} />
    </OptionWrapper>
  )
}

export default () => {
  return (
    <div
      css={`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      `}
    >
      <div>
        <Option name="On" initiallyChecked />
        <Option name="Off" />
        <Option name="Disabled on" initiallyChecked disabled />
        <Option name="Disabled off" disabled />
      </div>
    </div>
  )
}
