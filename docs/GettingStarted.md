# Getting started

aragonUI is a React library based on aragonDS, the Aragon design system. It aims to provide the elements needed to build Aragon apps that feel native to the Aragon ecosystem.

## Quick setup

This tutorial doesn’t cover the creation of your React app nor the way you bundle it, but we recommend [using Parcel](https://parceljs.org/recipes.html#react).

Install aragonUI alongside styled-components in your project:

```sh
npm install --save @tecommons/ui styled-components
```

<div class="info">

Note: while not required, we strongly recommend adding [the styled-components Babel plugin](https://www.styled-components.com/docs/tooling#babel-plugin) in your build configuration. It provides, amongst other things, [the css prop](https://www.styled-components.com/docs/api#css-prop) that we use widely to.

</div>

Copy the aragonUI assets into your assets directory (assuming `./public`):

```sh
npx copy-aragon-ui-assets ./public
```

<p class="info">Note: doing this step ensures that any assets required by aragonUI, like fonts and illustrations, can be served properly in any environment. Most apps built with aragonUI will be served in a decentralized manner (generally through an IPFS gateway), so using services like Google Fonts is not an option.</p>

The only mandatory component that you need to define is [Main](https://ui.aragon.org/main/). This component sets up the global styles and providers used by other components. We recommend wrapping your entire app with Main:

```jsx
import React from 'react'
import { Main } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <div>Your app goes here</div>
    </Main>
  )
}
```

From that point on, you are ready to start building your app! Let’s go through a simple app to get an overview of the components that are often used in Aragon apps.

## A typical Aragon app

Aragon apps can take many shapes, but most tend to follow similar patterns. aragonUI provides components that can be used to build apps that are responsive, accessible, and theme-able by default.

This section takes the [Tokens app](https://help.aragon.org/article/18-tokens) to illustrate the different elements that consistute a typical Aragon app and how they might be put together. Rather than implementing every behavior in the Tokens app, we are going to focus on the structure of the app and its main components. To get an idea of what the final app looks like, you can visit the [full source code](https://github.com/aragon/aragon-apps/tree/master/apps/token-manager/app).

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

Two components that are commonly used in Aragon apps are [Header](https://ui.aragon.org/header/) and [Split](https://ui.aragon.org/split/). **Header** handles the main title of an app and its main action. **Split** creates a two column layout when the available horizontal space allows it. On smaller screens, it renders as a single column. As we continue, we will also be using the [DataView](https://ui.aragon.org/data-view/) and the [SidePanel](https://ui.aragon.org/side-panel/) components.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68324939-bb0ef400-00c8-11ea-8e69-d4d8ab7e4c51.png" alt="" />
  <figcaption>The Tokens app, featuring the Header <b class="ref">1</b> and the Split <span class="ref">2</span> components.</figcaption>
</figure>

### Header

This is how **Header** can be used inside an app.

```jsx
// App.js
import React from 'react'
import { Main, Header, Button, IconPlus, Tag } from '@tecommons/ui'

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

There are a few things to note, the first one being the way these props are named. `primary` and `secondary` are names used by aragonUI components for “slots”. Slots don’t really exist in a technical sense: this is only a name for props that are expecting a subtree to be passed, similar to the way `children` works in components accepting a single tree.

If you run this app, you might also notice that the [Button](https://ui.aragon.org/button/) component displays either a text label or an icon, adapting to the viewport size automatically. Some components adapt to where they are, which is the case here. [Button](https://ui.aragon.org/button/), being in [Header](https://ui.aragon.org/header/), follows the behavior defined by aragonDS about how it should adapt to different viewport sizes. These variations make it easy to follow the patterns defined by aragonDS, and are always documented and overridable.

### SidePanel

To make things a bit more interesting, we are going to add a [SidePanel](https://ui.aragon.org/side-panel/) that opens from the “Add tokens” header button. The **SidePanel** component can be inserted anywhere, as long as it is inside the **Main** tree.

```jsx
// App.js
import React, { useState } from 'react'
import { Main, Header, Button, IconPlus, Tag, SidePanel } from '@tecommons/ui'

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

That’s pretty much it! We now have a drawer that opens from the right side of the screen (with left to right languages), that can be closed by the user. We’re ready to move to the next part of the app.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68330101-eeef1700-00d2-11ea-925c-9c9ed5ba5805.png" alt="" />
  <figcaption>Three components used in this app: DataView <span class="ref">1</span>, a Box <span class="ref">2</span>, and another Box with Distribution <span class="ref">3</span>.</figcaption>
</figure>

### Split

Let’s define the [Split](https://ui.aragon.org/split/) layout, right after the Header, to get an idea of what the structure will look like:

```jsx
// App.js
import React, { useState } from 'react'
import { Main, Header, Split, DataView, Box } from '@tecommons/ui'

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

Like [Header](https://ui.aragon.org/header/), the [Split](https://ui.aragon.org/split/) component defines two slots using the same `primary` and `secondary` names.

### DataView

[DataView](https://ui.aragon.org/data-view/) is a powerful component that can be used to represent data in various ways, adapting itself to the available space. We are going to use it for the “holders” table.

```jsx
// TokenHoldersView.js
import React from 'react'
import {
  DataView,
  IdentityBadge,
  ContextMenu,
  ContextMenuItem,
} from '@tecommons/ui'

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

// Return the contextual menu for an entry (no interaction behavior defined).
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

To get more details about DataView and how it works, please have a look at its [documentation page](https://ui.aragon.org/data-view/).

### Box and useTheme()

**Box** is a straightforward component that renders as a surface (as defined by aragonDS) which can optionally have a heading. It is commonly used in either slot of **Split**.

To implement the “Token info” component, we are going to define some custom styles and use some specific text colors. To ensure your app is compatible with any aragonUI theme, make sure you always use colors from the `useTheme()` hook.

```jsx
// TokenInfoBox.js
import React from 'react'
import { Box, TokenBadge, useTheme } from '@tecommons/ui'

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

Now that TokenInfoBox is done, there is one last bit remaining, which is the “ownership distribution” box. Luckily for us, the [Distribution](https://ui.aragon.org/distribution/) component will do most of the work.

```jsx
// OwnershipDistributionBox.js
import React from 'react'
import { Box, Distribution } from '@tecommons/ui'

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
import { Main, Header, Button, SidePanel } from '@tecommons/ui'

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

And this is it for the tutorial. Of course, many components were not covered here, the idea being to provide an overview of an Aragon app's structure when it uses aragonUI.
