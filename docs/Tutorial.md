## A typical Aragon app

Aragon apps can take many shapes, but most tend to follow similar patterns. aragonUI provides components that can be used to build apps that are responsive, accessible, and theme-able by default.

This section takes the [Tokens app](https://help.aragon.org/article/18-tokens) to illustrate how the different elements that consistute a typical Aragon app can be put together. Rather than implementing every behavior in the Tokens app, we are going to focus on the structure of the app, and the main components it uses. To get an idea of what the final app looks like the [source code](https://github.com/aragon/aragon-apps/tree/master/apps/token-manager/app) is available to read.

This is how it looks:

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68315116-98281400-00b7-11ea-9cbc-48cbc2d4e169.png" alt=""/>
  <figcaption>The Tokens app and its layout variations.</figcaption>
</figure>

To be sure, let’s start by clarifying what constitutes the Aragon app:

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68322354-96fce400-00c3-11ea-920c-dd378c96a086.png" alt=""/>
  <figcaption>The Aragon client <b class="ref">1</b> displaying the Tokens app, in the app area <span class="ref">2</span>.</figcaption>
</figure>

The two main components used by this app are the [Header](../header/) and the [Split](../split/) components. The **Header** component handles the main title of an app and its main action. The **Split** component lets app authors create a two column layout when the horizontal space available allows it. On smaller screens, it renders its children one after another.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68324939-bb0ef400-00c8-11ea-8e69-d4d8ab7e4c51.png" alt="" />
  <figcaption>The Tokens app, featuring the Header <b class="ref">1</b> and the Split <span class="ref">2</span> components.</figcaption>
</figure>

Let’s start by adding the **Header**:

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

To make things interesting, we are going to add a [SidePanel](../side-panel/) that opens when the user clicks on the “Add tokens” button, in the header. The component can be inserted anywhere, as long as it is inside of the Main component.

```jsx
// App.js
import React, { useState } from 'react'
import { Main, Header, Button } from '@aragon/ui'

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
        opened={sidePanelOpened}
        onClose={() => setSidePanelOpened(false)}
      />
    </Main>
  )
}
```

We are ready to move to the next part of the app.

<figure>
  <img src="https://user-images.githubusercontent.com/36158/68330101-eeef1700-00d2-11ea-925c-9c9ed5ba5805.png" alt="" />
  <figcaption>The three main components of this app: DataView <span class="ref">1</span>, a Box <span class="ref">2</span>, and another Box with Distribution <span class="ref">3</span>.</figcaption>
</figure>

Let’s define the [Split](../split/) layout first, to have an idea of what the structure will look like:

```jsx
// App.js
import React from 'react'
import { Main, Header, DataView, Box } from '@aragon/ui'

function App() {
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
    </Main>
  )
}
```

Like [Header](../header/), the [Split](../split/) component defines two slots using the same `primary` and `secondary` names.

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

const tokenHolders = [
  ['0xcafe…', 3],
  ['0xbeef…', 2],
  ['0xfeed…', 1],
  ['0xface…', 1],
  ['0xbead…', 1],
]

// The token holders represented as a DataView.
function TokenHoldersView() {
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

// Return the contextual menu for an entry.
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

The remaining part

