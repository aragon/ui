import React, { useState } from 'react'
import {
  _AutoComplete as AutoComplete,
  _AutoCompleteSelected as AutoCompleteSelected,
} from '@tecommons/ui'
import { Center } from '../components/Center'

const items = [
  { name: 'Bruce Wayne', hint: 'I am Batman', key: 0, emoji: '🦇' },
  { name: 'Bruce Banner', hint: 'Hulk smash!', key: 1, emoji: '🤬' },
  { name: 'Bruce Springsteen', hint: 'The Boss', key: 2, emoji: '🎸' },
  { name: 'Bruce Lee', hint: 'The Dragon', key: 3, emoji: '🐉' },
  { name: 'Bruce Willis', hint: 'Yippee Ki-Yay', key: 4, emoji: '🏢' },
]

const Item = ({ name, hint }) => (
  <div>
    {name}{' '}
    <span
      css={`
        font-size: 12px;
      `}
    >
      ({hint})
    </span>
  </div>
)

const Selected = ({ emoji, name }) => <div>{`${emoji} ${name}`}</div>

export default function() {
  const [textSearchTerm, setTextSearchTerm] = useState('')
  const [customSearchTerm, setCustomSearchTerm] = useState('')
  const [selectedSearchTerm, setSelectedSearchTerm] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <Center>
      <div css="width: 250px">
        <h2>Demonstration</h2>
        <div css="margin-top: 24px">
          <h3 css="margin-bottom: 8px">Text items:</h3>
          <label>
            Who is Batman?
            <AutoComplete
              wide
              items={items
                .map(({ name }) => name)
                .filter(
                  name =>
                    textSearchTerm &&
                    name.toLowerCase().indexOf(textSearchTerm.toLowerCase()) >
                      -1
                )}
              onChange={value => setTextSearchTerm(value)}
              value={textSearchTerm}
              onSelect={value => setTextSearchTerm(value)}
              placeholder="Hint Bruce"
            />
          </label>
        </div>
        <div css="margin-top: 24px">
          <h3 css="margin-bottom: 8px">Custom render for items:</h3>
          <label>
            Who is Batman?
            <AutoComplete
              wide
              items={items.filter(
                ({ name, hint }) =>
                  customSearchTerm &&
                  (name.toLowerCase().indexOf(customSearchTerm.toLowerCase()) >
                    -1 ||
                    hint.toLowerCase().indexOf(customSearchTerm.toLowerCase()) >
                      -1)
              )}
              onChange={value => setCustomSearchTerm(value)}
              onSelect={({ name }) => {
                setCustomSearchTerm(name)
              }}
              value={customSearchTerm}
              renderItem={Item}
              placeholder="Hint: I am"
            />
          </label>
        </div>
        <div css="margin-top: 24px">
          <h3 css="margin-bottom: 8px">Custom render for selected item:</h3>
          <label>
            Who is Batman?
            <AutoCompleteSelected
              wide
              items={items.filter(
                ({ name, hint }) =>
                  selectedSearchTerm &&
                  (name
                    .toLowerCase()
                    .indexOf(selectedSearchTerm.toLowerCase()) > -1 ||
                    hint
                      .toLowerCase()
                      .indexOf(selectedSearchTerm.toLowerCase()) > -1)
              )}
              onChange={value => setSelectedSearchTerm(value)}
              onSelect={item => {
                const { name } = item
                setSelectedSearchTerm(name)
                setSelectedItem(item)
              }}
              renderItem={Item}
              selected={selectedItem}
              renderSelected={Selected}
              onSelectedClick={() => {
                setSelectedItem(null)
              }}
              value={selectedSearchTerm}
              placeholder="Hint: Bruce"
            />
          </label>
        </div>
      </div>
    </Center>
  )
}
