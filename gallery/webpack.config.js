const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
    },
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Aragon Toolkit Gallery' }),
    new ExtractTextPlugin('styles.css'),
  ],
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
