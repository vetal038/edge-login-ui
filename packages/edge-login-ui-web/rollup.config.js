import babel from 'rollup-plugin-babel'

import packageJson from './package.json'

const babelOpts = {
  presets: ['es2015-rollup', 'flow'],
  plugins: [
    'transform-async-to-generator',
    ['transform-es2015-for-of', { loose: true }],
    'transform-object-rest-spread',
    'transform-regenerator'
  ]
}

const external = [
  'regenerator-runtime/runtime',
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.devDependencies)
]

export default {
  external,
  input: 'src/edge-login-ui-index.js',
  output: [
    { file: packageJson.main, format: 'cjs' },
    { file: packageJson.module, format: 'es' }
  ],
  plugins: [babel(babelOpts)],
  sourcemap: true
}
