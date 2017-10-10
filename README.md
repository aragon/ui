# Aragon Toolkit

The Aragon UI Toolkit.

## Develop

```sh
npm install
cd gallery
npm install
npm start
```

## Include in a project

Add `@aragon/ui` to the dependencies of the package.json:

```json
"dependencies": {
  "@aragon/ui": "*"
}
```

To transpile the toolkit, the `vue-loader`, `url-loader` and `babel-loader`
loaders need to be added to your webpack configuration. The `postcss-cssnext`
module also need to be installed and passed in the `vue-loader` options.

```javascript
// Webpack configuration
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('postcss-cssnext')()]
        },
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
}
```
