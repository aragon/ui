const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uiWebpackBase = require('../webpack-base')

module.exports = uiWebpackBase(webpack, __dirname, {
  entry: [path.resolve(__dirname, 'src/index.js')],
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      comps: path.resolve(__dirname, 'src/comps'),
      src: path.resolve(__dirname, 'src'),
      '@aragon/ui': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Aragon UI', favicon: './favicon.svg' }),
  ],
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
