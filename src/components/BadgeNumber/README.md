# BadgeNumber

Badge to display a number.

## Usage

```jsx
import { BadgeNumber } from '@aragon/ui'

const App = () =>   <BadgeNumber 
                        number={5} 
                        size={false}
                        color={'white'}
                        background={'blue'}
                        />

```

## Properties

### `number`

* Type: `Number`
* Default: `0`

Number to display.


### `small`

* Type: `Bool`
* Default: `True`

Size of the badge.

### `color`

* Type: `String`
* Default: `theme.positiveText`

Color of the badge's number.

### `background`

* Type: `String`
* Default: `theme.positive`

Color of the badge's background.

