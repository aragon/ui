import React, { useState } from 'react'
import styled from 'styled-components'
import { Checkbox, unselectable, useTheme, GU, textStyle } from '@tecommons/ui'
import SplitSurfaces from '../components/SplitSurfaces'

const ITEMS = [
  'Checked',
  'Unchecked',
  'Indeterminate',
  'Checked',
  'Unchecked',
  'Indeterminate',
]

function App({ radioMode = false }) {
  const [selectedItems, setSelectedItems] = useState([0, 3])

  const items = ITEMS.map((name, index) => ({
    name,
    checked: selectedItems.findIndex(itemIndex => itemIndex === index) > -1,
  }))

  const updateItem = (index, check) => {
    setSelectedItems(selectedItems =>
      check ? [...selectedItems, index] : selectedItems.filter(i => i !== index)
    )
  }

  const demo = (
    <div>
      <Title>Normal</Title>
      {items
        .map(({ name, checked }, index) => (
          <React.Fragment key={index}>
            {index === 3 && <Title>Disabled</Title>}
            <Item
              key={name}
              checked={checked}
              disabled={index > 2}
              indeterminate={index === 2 || index === 5}
              label={name}
              onChange={check => updateItem(index, check)}
              radioMode={radioMode}
            />
          </React.Fragment>
        ))
        .filter((item, index) => !(radioMode && (index === 2 || index === 5)))}
    </div>
  )

  return <SplitSurfaces primary={demo} secondary={demo} />
}

function Title({ children }) {
  const theme = useTheme()
  return (
    <h1
      css={`
        margin: ${2 * GU}px 0 ${1 * GU}px;
        ${textStyle('label2')};
        color: ${theme.surfaceContentSecondary};
      `}
    >
      {children}
    </h1>
  )
}

function Item({
  checked,
  disabled,
  indeterminate,
  label,
  onChange,
  radioMode,
}) {
  const theme = useTheme()
  return (
    <div
      css={`
        list-style: none;
        & + & {
          margin-top: ${1 * GU}px;
        }
      `}
    >
      <label
        css={`
          display: flex;
          align-items: center;
          color: ${theme.surfaceContent};
          cursor: ${disabled ? 'default' : 'pointer'};
        `}
      >
        <Checkbox
          checked={checked}
          disabled={disabled}
          indeterminate={indeterminate}
          onChange={onChange}
          variant={radioMode ? 'radio' : undefined}
        />
        <span
          css={`
            margin-left: ${0.5 * GU}px;
          `}
        >
          {label}
        </span>
      </label>
    </div>
  )
}

export default App
