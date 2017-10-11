const path = require('path')
const merge = require('lodash/merge')
const postCssNext = require('postcss-cssnext')

const baseConf = (webpack, dir) => ({
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [postCssNext()],
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
  resolve: {
    modules: [path.join(dir, 'node_modules')],
  },
  resolveLoader: {
    modules: [path.join(dir, 'node_modules')],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
  ],
})

module.exports = (webpack, dir, conf) => merge(baseConf(webpack, dir), conf)
