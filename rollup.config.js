import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import url from 'rollup-plugin-url'
import filesize from 'rollup-plugin-filesize'
import progress from 'rollup-plugin-progress'
import json from 'rollup-plugin-json'
import pkg from './package.json'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    progress(),
    production && filesize(),
    url({
      limit: 5 * 1024, // inline files smaller than 5k
      publicPath: '',
      include: [
        '**/*.svg',
        '**/*.png',
        '**/*.jpg',
        '**/*.gif',
        '**/*.woff',
        '**/*.woff2',
      ],
      emitFiles: true,
    }),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
    json(),
  ],
  sourcemap: true,
}
