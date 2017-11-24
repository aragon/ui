# Aragon UI

Aragon UI is the interface toolkit used by Aragon and its related projects.

## How to import

Aragon UI is a library that comes with some assets, like fonts or images. These
need to be copied where Aragon UI can access them.

This emplacement can then be communicated to Aragon UI using the global
component `<AragonApp />`:

```jsx
import { AragonApp } from '@aragon/ui'

const App = () => (
  <AragonApp publicUrl="/">
    {/* Your app goes here */}
  </AragonApp>
)
```

To get the path of the directory from where the assets need to be copied, use
`path.dirname(require.resolve('@aragon/ui'))`.

### Copy Webpack Plugin

A way to do this with webpack is to use [Copy Webpack
Plugin](https://github.com/webpack-contrib/copy-webpack-plugin):

```js
module.exports = {
  /* … */

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.dirname(require.resolve('@aragon/ui')),
        to: path.resolve(
          path.join(__dirname, 'dist/public')
        ),
      },
    ]),
  ]
}
```

### webpack DevServer

For [webpack DevServer](https://webpack.js.org/configuration/dev-server/), add
the Aragon UI directory to the `contentBase` array, without having to copy it:

```js
module.exports = {
  /* … */

  devServer: {
    contentBase: [
      path.dirname(require.resolve('@aragon/ui')),
      path.join(__dirname, 'public'),
    ],
  },
}
```

## Develop

Install the dependencies:

```sh
npm install
```

Build Aragon UI:

```sh
npm run build # or "npm run dev" to rebuild when a file has changed
```


Run the gallery:

```sh
npm start
```

Open <http://localhost:8080/> in your web browser.
