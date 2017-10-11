const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const uiWebpack = require('../webpack-base')

module.exports = uiWebpack(webpack, __dirname, {
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      comps: path.resolve(__dirname, 'src/comps/'),
      '@aragon/ui': path.resolve(__dirname, '../src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Aragon Toolkit Gallery' }),
  ],
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
