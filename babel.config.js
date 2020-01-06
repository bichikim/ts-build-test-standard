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
    '@babel/proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
}
