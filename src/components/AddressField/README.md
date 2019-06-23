# AddressField

A field component to display ETH Adresses.

## Usage

```jsx
import { AddressField } from '@aragon/ui'

const App = () => <AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"} />
```

## Properties

### `address`

* Type: `String` (Required)

Adress to display in the field.

#### Example:

```jsx
<AddressField address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C" />
```

### `icon`

* Type: `node`

Icon to display in the field. Can pass anything that can be rendered, such as num, string, DOM elements, an array of them, or fragments that contain them.

#### Example:

```jsx
        <AddressField
          address="0xcafE1A77e84698c83CA8931F54A755176eF75f2C"
          icon={
            <Badge.Identity
              css={`
                width: 39px;
                height: 38px;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              Icon
            </Badge.Identity>
          }
        />
```
