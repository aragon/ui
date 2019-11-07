# Getting started

aragonUI is a React library based on aragonDS, the Aragon design system. It aims to provide the elements needed to build Aragon apps that feel native to the Aragon ecosystem.

## Quick setup

This tutorial doesn’t cover the creation of your React app nor the way you bundle it, but we recommend [using Parcel](https://parceljs.org/recipes.html#react).

Install aragonUI alongside styled-components in your project:

```sh
npm install --save @aragon/ui styled-components
```

<div class="info">

Note: while not required, we strongly recommend to add [the styled-components Babel plugin](https://www.styled-components.com/docs/tooling#babel-plugin) in your building configuration. It provides, among other things, [the css prop](https://www.styled-components.com/docs/api#css-prop) that we use widely.

</div>

Copy the aragonUI assets into your assets directory (assuming `./public`):

```sh
npx copy-aragon-ui-assets ./public
```

<p class="info">Note: this last step allows to serve assets like fonts and illustrations used by aragonUI. Using services like Google Fonts is not an option since apps built with aragonUI are served in a decentralized (generally through IPFS).</p>

The only mandatory component that you need to define is [Main](../main/). This component sets up global styles and providers used by the other components. The easiest is to wrap your entire app with it:

```jsx
import React from 'react'
import { Main } from '@aragon/ui'

function App() {
  return (
    <Main>
      <div>Your app goes here</div>
    </Main>
  )
}
```

From that point on, you are ready to start building your app! Let’s go through a simple app to see what components are often used in Aragon apps.

## A typical Aragon app

Aragon apps can take many shapes, but most tend to follow similar patterns. aragonUI provides components that can be used to build apps that are responsive, accessible, and theme-able by default.

This section takes the [Tokens app](https://help.aragon.org/article/18-tokens) to illustrate how the different elements that consistute a typical Aragon app can be put together. Rather than implementing every behavior in the Tokens app, we are going to focus on the structure of the app, and the main components it uses. To get an idea of what the final app looks like the [source code](https://github.com/aragon/aragon-apps/tree/master/apps/token-manager/app) is available to read.

This is how it looks:

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68315116-98281400-00b7-11ea-9cbc-48cbc2d4e169.png" alt=""/>
  <figcaption>The Tokens app and its layout variations.</figcaption>
</figure>

### Overview

Let’s start by defining what constitutes an Aragon app.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68322354-96fce400-00c3-11ea-920c-dd378c96a086.png" alt=""/>
  <figcaption>The Aragon client <b class="ref">1</b> displaying the Tokens app, in the app area <span class="ref">2</span>.</figcaption>
</figure>

As you can see, the app is only a part of what a user sees when interacting with the Aragon client, in a way that the app can not interfere with the interface of the client or the other apps.

Two components that are commonly used in Aragon apps are [Header](../header/) and [Split](../split/). **Header** handles the main title of an app and its main action. **Split** creates a two column layout when the available horizontal space allows it. On smaller screens, it renders as a single column. We are also going to use the [DataView](../data-view/) and the [SidePanel](../side-panel/) components.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68324939-bb0ef400-00c8-11ea-8e69-d4d8ab7e4c51.png" alt="" />
  <figcaption>The Tokens app, featuring the Header <b class="ref">1</b> and the Split <span class="ref">2</span> components.</figcaption>
</figure>

### Header

This is how **Header** can be used inside an app.

```jsx
// App.js
import React from 'react'
import { Main, Header, Button } from '@aragon/ui'

function App() {
  return (
    <Main>
      <Header
        primary={
          <>
            Tokens
            <Tag mode="identifier">PTO</Tag>
          </>
        }
        secondary={
          <Button mode="strong" label="Add tokens" icon={<IconPlus />} />
        }
      />
    </Main>
  )
}
```

There are a few things to note, the first one being the way these props are named. `primary` and `secondary` are names used by aragonUI components for “slots”. Slots don’t really exist in a technical sense: this is only a name used to refer to props expecting a subtree to be passed, like `children` does for components accepting a single tree.

If you run this app, you might also notice that the [Button](../button/) component displays either a text label or an icon, adapting to the viewport size automatically. Some components adapt to where they are, which is the case here. [Button](../button/), being in [Header](../header/), follows the behavior defined by aragonDS about how it should adapt to different viewport sizes in this particular case. These variations can help to follow the patterns defined by aragonDS with little effort, and are always documented and overridable.

### SidePanel

To make things a bit more interesting, we are going to add a [SidePanel](../side-panel/) that opens from the “Add tokens” header button. The **SidePanel** component can be inserted anywhere, as long as it is inside the **Main** tree.

```jsx
// App.js
import React, { useState } from 'react'
import { Main, Header, Button, SidePanel } from '@aragon/ui'

function App() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  return (
    <Main>
      <Header
        primary={
          <>
            Tokens
            <Tag mode="identifier">PTO</Tag>
          </>
        }
        secondary={
          <Button
            mode="strong"
            label="Add tokens"
            icon={<IconPlus />}
            onClick={() => setSidePanelOpened(true)}
          />
        }
      />
      <SidePanel
        title="Add tokens"
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      >
        {/* SidePanel content goes here */}
      </SidePanel>
    </Main>
  )
}
```

That’s pretty much it! We now have a drawer that opens from the right side of the screen (with left to right languages), and can get closed by the user. We’re ready to move to the next part of the app.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68330101-eeef1700-00d2-11ea-925c-9c9ed5ba5805.png" alt="" />
  <figcaption>Three components used in this app: DataView <span class="ref">1</span>, a Box <span class="ref">2</span>, and another Box with Distribution <span class="ref">3</span>.</figcaption>
</figure>

### Split

Let’s define the [Split](../split/) layout, right after the Header, to get an idea of what the structure will look like:

```jsx
// App.js
import React, { useState } from 'react'
import { Main, Header, DataView, Box } from '@aragon/ui'

function App() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  return (
    <Main>
      <Header />
      <Split
        primary={<DataView />}
        secondary={
          <>
            <Box />
            <Box />
          </>
        }
      />
      <SidePanel
        title="Add tokens"
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      />
    </Main>
  )
}
```

Like [Header](../header/), the [Split](../split/) component defines two slots using the same `primary` and `secondary` names.

### DataView

[DataView](../data-view/) is a powerful component that can be used to represent data in various ways, adapting itself to the available space. We are going to use it for the “holders” table.

```jsx
// TokenHoldersView.js
import React from 'react'
import {
  DataView,
  IdentityBadge,
  ContextMenu,
  ContextMenuItem,
} from '@aragon/ui'

// The token holders represented as a DataView.
function TokenHoldersView({ tokenHolders }) {
  /*

  This is how tokenHolders could look like:

  tokenHolders = [
    ['0xcafe…', 3],
    ['0xbeef…', 2],
    …
  ]

  */
  return (
    <DataView
      display="table"
      fields={['Holder', 'Balance']}
      items={tokenHolders}
      renderEntry={entryParts}
      renderEntryActions={entryActions}
    />
  )
}

// Return the parts (table cells) corresponding to an entry.
function entryParts([account, balance]) {
  return [<LocalIdentityBadge entity={account} />, balance]
}

// Return the contextual menu for an entry (no behavior here).
function entryActions([account, balance]) {
  return (
    <ContextMenu>
      <ContextMenuItem>Add tokens</ContextMenuItem>
      <ContextMenuItem>Remove tokens</ContextMenuItem>
    </ContextMenu>
  )
}

export default TokenHoldersView
```

To get more details about DataView and how it works, please have a look at its [documentation page](../data-view/).

### Box and useTheme()

**Box** is a straightforward component that renders as a surface (as defined by aragonDS) which can optionally have a heading. It is commonly used in either slot of **Split**.

To implement the “Token info” component, we are going to define some custom styles and use some specific text colors. To ensure your app is compatible with any aragonUI theme, make sure you always use colors from the `useTheme()` hook.

```jsx
// TokenInfoBox.js
import React from 'react'
import { Box, TokenBadge, useTheme } from '@aragon/ui'

// TokenInfoBox is making use of the Box with some custom content.
function TokenInfoBox({ supply, transferable, token }) {
  return (
    <Box heading="Token info">
      <TokenInfoBoxRow primary="Total supply" secondary={supply} />
      <TokenInfoBoxRow
        primary="Transferable"
        secondary={transferable ? 'YES' : 'NO'}
      />
      <TokenInfoBoxRow
        primary="Token"
        secondary={
          <TokenBadge
            address={token.address}
            name={token.name}
            symbol={token.symbol}
          />
        }
      />
    </Box>
  )
}

// TokenInfoBoxRow is relying on useTheme() to get a specific text color.
function TokenInfoBoxRow({ primary, secondary }) {
  const theme = useTheme()
  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
      `}
    >
      <div
        css={`
          color: ${theme.surfaceContentSecondary};
        `}
      >
        {primary}
      </div>
      <div>{secondary}</div>
    </div>
  )
}

export default TokenInfoBox
```

### Distribution

Now that TokenInfoBox is done, there is one last bit remaining, which is the “ownership distribution” box. Luckily for us, the [Distribution](../distribution/) component will do most of the work.

```jsx
// OwnershipDistributionBox.js
import React from 'react'
import { Box, Distribution } from '@aragon/ui'

// OwnershipDistributionBox combines Box
// and Distribution into a single component.
function OwnershipDistributionBox({ supply, tokenHolders }) {
  const distributionItems = tokenHolders.map(([account, balance]) => ({
    item: account,
    percentage: (balance / supply) * 100,
  }))

  return (
    <Box heading="Ownership Distribution">
      <Distribution heading="Token holder stakes" items={distributionItems} />
    </Box>
  )
}

export default OwnershipDistributionBox
```

### Wrapping up

Now that we implemented the different parts of the app, this is how the main component would look like in its final state:

```jsx
// App.js
import React, { useState } from 'react'
import { Main, Header, Button, SidePanel } from '@aragon/ui'

import TokenHoldersView from './TokenHoldersView'
import TokenInfoBox from './TokenInfoBox'
import OwnershipDistributionBox from './OwnershipDistributionBox'

// Some demo data
const token = {
  name: 'My Organization Token',
  symbol: 'MOT',
  address: '0x…',
  transferable: true,
  supply: 8,
  holders: [
    ['0xcafe…', 3],
    ['0xbeef…', 2],
    ['0xfeed…', 1],
    ['0xface…', 1],
    ['0xbead…', 1],
  ],
}

function App() {
  const [sidePanelOpened, setSidePanelOpened] = useState(false)
  return (
    <Main>
      <Header />
      <Split
        primary={<TokenHoldersView tokenHolders={token.holders} />}
        secondary={
          <>
            <TokenInfoBox supply={token.supply} />
            <OwnershipDistributionBox
              supply={token.supply}
              tokenHolders={token.holders}
            />
          </>
        }
      />
      <SidePanel
        title="Add tokens"
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      />
    </Main>
  )
}
```

And this is it for the tutorial. Of course there are many components that were not covered here, the idea being to give a general overview of how an Aragon app using aragonUI is structured.
