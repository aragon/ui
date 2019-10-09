import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'
import progress from 'rollup-plugin-progress'
import resolve from 'rollup-plugin-node-resolve'
import sizes from 'rollup-plugin-sizes'
import url from 'rollup-plugin-url'
import visualizer from 'rollup-plugin-visualizer'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      preserveModules: true,
      sourcemap: true,
    },
    // The CJS build is used by node tools we are using, like
    // eslint-plugin-import.
    {
      file: pkg.main,
      format: 'cjs',
      preserveModules: false,
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  treeshake: production,
  plugins: [
    progress(),
    production &&
      filesize({
        showMinifiedSize: true,
        showGzippedSize: true,
      }),
    production && sizes(),
    production && visualizer(),
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
  ],
}
