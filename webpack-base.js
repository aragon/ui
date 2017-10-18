const path = require('path')
const postCssNext = require('postcss-cssnext')

const extend = (o1, o2) => Object.assign({}, o1, o2)
const append = (a1, a2) => (a1 || []).concat(a2)

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = (webpack, dir, conf) =>
  extend(conf, {
    module: extend(conf.module, {
      rules: append(conf.module && conf.module.rules, [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            postcss: [postCssNext()],
            cssModules: {
              modules: true,
              localIdentName: `${PRODUCTION
                ? ''
                : '[name]__[local]--'}[hash:base64:7]`,
              sourceMap: true,
              minimize: PRODUCTION,
            },
          },
        },
        {
          test: /\.(png|jpg|gif|svg|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 8192 },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        },
      ]),
    }),
    resolve: extend(conf.resolve, {
      modules: append(conf.resolve && conf.resolve.modules, [
        path.join(dir, 'node_modules'),
        path.join(__dirname, 'node_modules'),
      ]),
    }),
    resolveLoader: extend(conf.resolveLoader, {
      modules: append(conf.resolveLoader && conf.resolveLoader.modules, [
        path.join(dir, 'node_modules'),
        path.join(__dirname, 'node_modules'),
      ]),
    }),
    plugins: append(conf.plugins, [
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
      }),
    ]),
  })
