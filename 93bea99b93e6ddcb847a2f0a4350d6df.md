# TransactionProgress

## Usage

```jsx
function App() {
  const [visible, setVisible] = useState(false)
  const opener = useRef()

  return (
    <div>
      <div ref={opener}>
        <Button onClick={() => setVisible(true)}>Check transaction</Button>
      </div>
      <TransactionProgress
        transactionHashUrl="https://etherscan.io/tx/0x5c50…2060"
        progress={0.3}
        visible={visible}
        endTime={new Date(Date.now() + 100000)}
        onClose={() => setVisible(false)}
        opener={opener}
        slow
      />
    </div>
  )
}
```

## Props

### `transactionHash`

- Type: `String`

Hash of transaction which will be opened on Etherscan.

### `progress`

- Type: `number`

Progress of transaction.

### `endTime`

- Type: `Date` object

Estimated end time of transaction.

### `slow`

- Type: `Bool`
- Default: `false`

Set to true to inform the user that a transaction is taking longer than expected.

### `handleClose`

- Type: `Function`

Provide a function that handles closing of the component.
