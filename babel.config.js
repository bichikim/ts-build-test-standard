module.exports = {
  presets: [
    [
      '@vue/babel-preset-jsx',
      {
        modules: false,
        useBuiltIns: 'entry',
      },
    ],
    [
      'typescript-vue',
      {
        isTSX: true,
        allExtensions:true,
      },
    ],
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/proposal-class-properties', {loose: true}],
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
}
