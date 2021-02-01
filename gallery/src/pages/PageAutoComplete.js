import React, { useState, useRef } from 'react'
import Page from 'comps/Page/Page'
import readme from 'ui-src/components/AutoComplete/README.md'
import {
  _AutoComplete as AutoComplete,
  _AutoCompleteSelected as AutoCompleteSelected,
} from '@tecommons/ui'
import Container from '../components/Page/DemoContainer'

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

const PageAutoComplete = ({ title }) => {
  const [textSearchTerm, setTextSearchTerm] = useState('')
  const [customSearchTerm, setCustomSearchTerm] = useState('')
  const [selectedSearchTerm, setSelectedSearchTerm] = useState('')
  const [selectedItem, setSelectedIem] = useState(null)
  const textRef = useRef()
  const customRef = useRef()
  const selectedRef = useRef()

  return (
    <Page title={title} readme={readme}>
      <div>
        <h2>Demonstration</h2>
        <div style={{ width: '250px' }}>
          <div>
            <h3>Text items:</h3>
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
                onChange={setTextSearchTerm}
                onSelect={value => {
                  textRef.current.value = value
                  setTextSearchTerm('')
                }}
                ref={textRef}
                placeholder="Hint Bruce"
              />
            </label>
          </div>
          <div>
            <h3>Custom render for items:</h3>
            <label>
              Who is Batman?
              <AutoComplete
                wide
                items={items.filter(
                  ({ name, hint }) =>
                    customSearchTerm &&
                    (name
                      .toLowerCase()
                      .indexOf(customSearchTerm.toLowerCase()) > -1 ||
                      hint
                        .toLowerCase()
                        .indexOf(customSearchTerm.toLowerCase()) > -1)
                )}
                onChange={setCustomSearchTerm}
                onSelect={({ name }) => {
                  customRef.current.value = name
                  setCustomSearchTerm('')
                }}
                ref={customRef}
                renderItem={Item}
                placeholder="Hint: I am"
              />
            </label>
          </div>
          <div>
            <h3>Custom render for selected item:</h3>
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
                onChange={setSelectedSearchTerm}
                onSelect={item => {
                  const { name } = item
                  selectedRef.current.value = name
                  setSelectedSearchTerm(name)
                  setSelectedIem(item)
                }}
                ref={selectedRef}
                renderItem={Item}
                selected={selectedItem}
                renderSelected={Selected}
                onSelectedClick={() => {
                  setSelectedIem(null)
                }}
                value={selectedSearchTerm}
                placeholder="Hint: Bruce"
              />
            </label>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default PageAutoComplete
