import { basename, dirname } from 'path'
import url from '@rollup/plugin-url'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import progress from 'rollup-plugin-progress'
import analyze from 'rollup-plugin-analyzer'
import glob from 'fast-glob'

const production = !process.env.ROLLUP_WATCH

// Get all the JS modules inside of a directory, excluding index.js and test
// files, and with a configurable depth.
async function getModules(dir, deep = 1) {
  const paths = await glob(
    [`${dir}/**/*.js`, `!${dir}/**/index.js`, `!${dir}/**/*.test.js`],
    { onlyFiles: true, deep }
  )
  return paths.reduce(
    (inputs, path) => ({ ...inputs, [basename(path, '.js')]: path }),
    {}
  )
}

// Only get the index.js files of a directory.
async function getModulesIndexes(dir) {
  return (await glob(`${dir}/*/index.js`)).reduce(
    (inputs, path) => ({ ...inputs, [basename(dirname(path))]: path }),
    {}
  )
}

export default (async () => {
  console.log('\n  Bundling modules with Rollup…')
  return {
    input: {
      index: 'src/index.js',
      ...(await getModulesIndexes('src')),
      ...(await getModules('src/components', 2)),
      ...(await getModules('src/hooks')),
      ...(await getModules('src/icons/components')),
      ...(await getModules('src/style')),
      ...(await getModules('src/theme')),
      ...(await getModules('src/theme-legacy')),
      ...(await getModules('src/utils')),
      ...(await getModules('src/providers')),
      observe: 'src/providers/observe/index.js',
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
        // Lets us mix default and named exports in components without emitting
        // a warning. This is not an issue for us because components are not
        // imported directly but through src/index.js, which doesn’t have a
        // default export.
        exports: 'named',
      },
    ],
    external: ['react', 'react-dom', 'styled-components'],
    treeshake: production
      ? {
          moduleSideEffects: false,

          // Reminder: getters are going to be used to deprecate theme-legacy, so
          // we should set this to false when adding the deprecation notice.
          propertyReadSideEffects: true,

          unknownGlobalSideEffects: false,
        }
      : false,

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
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs(),
    ],
  }
})()
