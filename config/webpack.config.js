const packageJson = require('../package.json')
const path = require('path')
const Webpack = require('webpack')
const webpackBaseConfig = require('./webpack.base.config')
const webpackMerge = require('webpack-merge')
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin')
const pascalcase = require('pascalcase')
const createVariants = require('parallel-webpack').createVariants

const resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}


const createConfig = (options) => {
  const {target = 'umd'} = options
  let libraryTarget = target
  const plugins = [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ]
  if(libraryTarget === 'esm'){
    plugins.push(new EsmWebpackPlugin())
    libraryTarget = 'var'
  }
  return webpackMerge(webpackBaseConfig({mode: 'bundle', tsTranspileOnly: false}), {
    /**
     * Test in this project needs development
     * For more info See this
     * @link https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
     */
    mode: 'production',
    output: {
      path: resolve('dist'),
      filename: `[name].${target}.js`,
      pathinfo: true,
      library: pascalcase(packageJson.name),
      libraryTarget,
      globalObject: 'this',
    },
    // for webpack karma debug
    devtool: 'source-map',
    plugins,
    externals: [
      /^[a-z\-0-9]+$/,
    ],
  })
}

module.exports = createVariants(
  {target: ['umd', 'esm']},
  createConfig,
  )
