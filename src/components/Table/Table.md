# Table

A table component.

## Usage

```jsx
import { Table, TableHeader, TableRow, TableCell, Text } from '@tecommons/ui'

const App = () => (
  <Table
    header={
      <TableRow>
        <TableHeader title="Activity" />
      </TableRow>
    }
  >
    <TableRow>
      <TableCell>
        <Text>January</Text>
      </TableCell>
      <TableCell>
        <Text>February</Text>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        <Text>10 commits</Text>
      </TableCell>
      <TableCell>
        <Text>32 commits</Text>
      </TableCell>
    </TableRow>
  </Table>
)
```

## Props

### `header`

- Type: `Node`

This is a table row containing a header of your choice.

#### Example:

```jsx
const MyTable = (props) => (
  <Table
    header={
      <TableRow>
        <TableHeader title="Records" />
      </TableRow>
    }
  >
    {/* Table content */}
  </Table>
)
```

### `noSideBorders`

- Type: `Boolean`
- Default: `false`

Set this to `true` to remove the borders on the side of the table. Useful when the table need to take the full width of the screen.
