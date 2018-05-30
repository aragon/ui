# Aragon UI

<p align=center>
  <img src="https://user-images.githubusercontent.com/36158/40653789-19f2d150-6334-11e8-9f78-8b32648698b4.png" alt="">
</p>

Aragon UI is the user interface toolkit used by Aragon and its related projects.

## Getting Started

Install it from npm:

```sh
npm install --save @aragon/ui
```

Aragon UI comes with some assets (e.g. fonts). These need to be copied where Aragon UI can access them, like the `public/` directory of a project using [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-assets-outside-of-the-module-system).

A simple way to do this is to use the `copy-aragon-ui-assets` provided by Aragon UI:

```sh
npx copy-aragon-ui-assets ./public
```

This emplacement has to be communicated to the library using `<AragonApp>`, so that the assets can be fetched by the components below in the tree.

```jsx
import { AragonApp } from '@aragon/ui'

const App = () => (
  <AragonApp publicUrl="/aragon-ui-assets/">
    …
  </AragonApp>
)
```

*Your project is now ready to use Aragon UI. 💫*

Open https://ui.aragon.one/ to see the list of available components and how to use them.

### Assets Synchronization (optional)

You may also want to add it as a step in your project scripts, so that upgrading Aragon UI can be done without having to worry about these.

```json
"scripts": {
  "sync-assets": "copy-aragon-ui-assets ./public",
  "build": "npm run sync-assets && react-scripts build",
  "start": "npm run sync-assets && react-scripts start"
}
```

See `copy-aragon-ui-assets -h` for more information.

## Build & Develop

Clone this repository, install the dependencies:

```sh
npm install
```

Build:

```sh
npm run build
```

Auto rebuild:

```sh
npm run dev
```

Run the devbox (to develop a component in isolation):

```sh
cd devbox
npm install
npm start
```
