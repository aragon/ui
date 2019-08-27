# DataView

DataView is a component that can adapt to several different ways of representing and selecting data, switching from a table layout to a list layout depending on the available space.

## Usage

```jsx
<DataView
  fields={['Account', 'Amount']}
  entries={[
    { account: addr(), amount: '-7.900,33 ANT' },
    { account: addr(), amount: '-8.760,90 ANT' },
    { account: addr(), amount: '+5.321 ANT' },
  ]}
  renderEntry={({ account, amount }) => {
    return [<IdentityBadge entity={account} />, <Amount>{amount}</Amount>]
  }}
/>
```

## Props

### fields

| Type    | Default value   |
| ------- | --------------- |
| `Array` | None (required) |

The different fields of data, displayed in the column headers in table mode.

```jsx
<DataView fields={['Account', 'Amount']} />
```

An object form exists, allowing to set additional settings:

```jsx
<DataView
  fields={[
    // `priority` allows to change the fields
    // order when DataView is in list mode.
    { label: 'Account', priority: 1 },
    { label: 'Amount', priority: 2 },
  ]}
/>
```

#### field.label

The content displayed for the field.

#### field.priority

List mode only. Set this to any number to set the field priority.

#### field.align

Table mode only. Forces the table header to be aligned on a specific side: `end` or `start`.

#### field.childStart

Table mode only. Set this to `true` on the field you want the child content to be aligned. See `renderEntryChild()` for more details.

### entries

| Type    | Default value   |
| ------- | --------------- |
| `Array` | None (required) |

The actual data entries. An array of any kind of data structure. Every value set in this array will be passed to `renderEntry`.

Example with an array of objects:

```jsx
<DataView
  fields={['Account', 'Amount']}
  entries={[
    { account: addr(), amount: '-7.900,33 ANT' },
    { account: addr(), amount: '-8.760,90 ANT' },
    { account: addr(), amount: '+5.321 ANT' },
  ]}
  renderEntry={({ account, amount }) => {
    return [<IdentityBadge entity={account} />, <Amount>{amount}</Amount>]
  }}
/>
```

An array of arrays:

```jsx
<DataView
  fields={['Account', 'Amount']}
  entries={[
    [addr(), '-7.900,33 ANT'],
    [addr(), '-8.760,90 ANT'],
    [addr(), '+5.321 ANT'],
  ]}
  renderEntry={([account, amount]) => {
    return [<IdentityBadge entity={account} />, <Amount>{amount}</Amount>]
  }}
/>
```

Or anything else, like a string:

```jsx
<DataView
  fields={['Account', 'Amount']}
  entries={[
    `${addr()} | -7.900,33 ANT`,
    `${addr()} | -8.760,90 ANT`,
    `${addr()} | +5.321 ANT`,
  ]}
  renderEntry={entry => {
    const [account, amount] = entry.split(' | ')
    return [<IdentityBadge entity={account} />, <Amount>{amount}</Amount>]
  }}
/>
```

### heading

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

Set this to add a header inside the `DataView` surface.

### mode

| Type                              | Default value |
| --------------------------------- | ------------- |
| `"adaptive"`, `"table"`, `"list"` | `"adaptive"`  |

Set this to force the display mode of DataView.

### page

| Type     | Default value |
| -------- | ------------- |
| `Number` | None          |

Index of the current page. When not provided, `DataView` will manage the pagination itself.

### onPageChange

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when a page change is requested. Use with `page` to manage the pagination in a [controlled](https://reactjs.org/docs/forms.html#controlled-components) way.

### entriesPerPage

| Type     | Default value |
| -------- | ------------- |
| `Number` | `10`          |

Number of items per page.

### selection

| Type    | Default value |
| ------- | ------------- |
| `Array` | None          |

A list of selected items, using their indexes. When not provided, `DataView` will manage the selection itself. See also `onSelectEntries()`.

### onSelectEntries(entries, indexes)

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when the entries selection changes. If not set, the checkboxes won’t be displayed. Use with `selection` to manage the selection in a [controlled](https://reactjs.org/docs/forms.html#controlled-components) way.

Note: only one of `onSelectEntries` and `renderEntryChild` can be set at a time.

### renderEntry(entry, index, { selected, mode })

| Type       | Default value   |
| ---------- | --------------- |
| `Function` | None (required) |

Renders an entry by returning an array of nodes with items corresponding to every field.

#### Note: hooks in render props

Hooks won’t work in one of the `render` prefixed methods. The reason is that these are not components, but functions called conditionally from `DataView`.

This is not possible:

```jsx
<DataView
  fields={['Account', 'Amount']}
  entries={[
    [addr(), '-7.900,33 ANT'],
    [addr(), '-8.760,90 ANT'],
    [addr(), '+5.321 ANT'],
    [addr(), '-328,65 ANT'],
    [addr(), '+3.321 ANT'],
    [addr(), '-328,65 ANT'],
  ]}
  renderEntry={({ account, amount }) => {
    const { accountConnected } = useAragonApi()
    return [
      <div>
        <IdentityBadge entity={account} />
        {accountConnected === account && <span>You</span>}
      </div>,
      <Amount>{amount}</Amount>,
    ]
  }}
/>
```

But hooks can be used in components, so we can create one:

```jsx
function Account({ address }) {
  const { accountConnected } = useAragonApi()
  return (
    <div>
      <IdentityBadge entity={address} />
      {accountConnected === address && <span>You</span>}
    </div>
  )
}

function App() {
  return (
    <DataView
      fields={['Account', 'Amount']}
      entries={[
        [addr(), '-7.900,33 ANT'],
        [addr(), '-8.760,90 ANT'],
        [addr(), '+5.321 ANT'],
        [addr(), '-328,65 ANT'],
        [addr(), '+3.321 ANT'],
        [addr(), '-328,65 ANT'],
      ]}
      renderEntry={([address, amount]) => {
        return [<Account address={account} />, <Amount>{amount}</Amount>]
      }}
    />
  )
}
```

### renderEntryActions(entry, index, { selected, mode })

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Renders the actions of an entry, usually as a `ContextMenu`.

### renderEntryChild(entry, index, { selected, mode })

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Renders the child content of a given entry.

It can return:

- An array, that will be displayed as individual rows.
- A React node, to be used as a single container.
- `null`, if the entry doesn’t have any child content.

When an array is returned, each entry in this array will be displayed as a row, whose height will be determined by the value of `tableRowHeight` − even in list view mode. The alignment of these rows can also start from a specific column in table mode: see `field.childStart`.

When a React node is returned, the height is dynamic and should be set in the child content itself.

### renderSelectionCount(count)

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Renders the label used to indicate the current selection. If not provided, “X items selected” will be displayed.

### tableRowHeight

| Type     | Default value     |
| -------- | ----------------- |
| `Number` | `8 * GU` (`64px`) |

The height of a row, in `px`.
