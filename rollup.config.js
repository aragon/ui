import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'
import url from 'rollup-plugin-url'
import progress from 'rollup-plugin-progress'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: { file: pkg.module, format: 'es' },
  external: ['react', 'react-dom'],
  plugins: [
    progress(),
    url({
      limit: false,
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
    babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
    resolve(),
    commonjs(),
  ],
  sourcemap: true,
}
