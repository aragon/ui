import { basename } from 'path'
import url from '@rollup/plugin-url'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import progress from 'rollup-plugin-progress'
import analyze from 'rollup-plugin-analyzer'
import glob from 'fast-glob'

const production = !process.env.ROLLUP_WATCH

async function getModules(dir, deep = 1) {
  const files = await glob(
    [`${dir}/**/*.js`, `!${dir}/**/index.js`, `!${dir}/**/*.test.js`],
    { onlyFiles: true, deep }
  )
  return files.reduce(
    (inputs, file) => ({ ...inputs, [basename(file, '.js')]: file }),
    {}
  )
}

export default (async () => {
  return {
    input: {
      index: 'src/index.js',
      components: 'src/components/index.js',
      hooks: 'src/hooks/index.js',
      providers: 'src/providers/index.js',
      icons: 'src/icons/index.js',
      themeLegacy: 'src/theme-legacy/index.js',
      theme: 'src/theme/index.js',
      utils: 'src/utils/index.js',
      style: 'src/style/index.js',
      ...(await getModules('src/components', 2)),
      ...(await getModules('src/icons/components')),
      ...(await getModules('src/utils')),
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        preserveModules: true,
        sourcemap: true,
      },
      // The CJS build is used by node tools we are using, like
      // eslint-plugin-import.
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: false,
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom', 'styled-components'],
    treeshake: true,
    plugins: [
      process.env.ANALYZE && analyze(),
      progress(),
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
})()
