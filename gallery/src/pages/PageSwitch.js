import React, { useState } from 'react'
import styled from 'styled-components'
import { Switch } from '@aragon/ui'

import Page from 'comps/Page/Page'
import readme from 'ui-src/components/Switch/README.md'

const Text = styled.span`
  padding-right: 20px;
  min-width: 100px;
`
const OptionWrapper = styled.label`
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

// eslint-disable-next-line react/prop-types
const PageTabs = ({ title }) => {
  return (
    <Page title={title} readme={readme}>
      <Page.Demo opaque>
        <div
          css={`
            padding: 20px;
          `}
        >
          <Option name="On" initiallyChecked />
          <Option name="Off" />
          <Option name="Disabled on" initiallyChecked disabled />
          <Option name="Disabled off" disabled />
        </div>
      </Page.Demo>
    </Page>
  )
}

export default PageTabs
