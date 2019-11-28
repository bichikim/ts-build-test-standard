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
  env: {
    test: {
      // 'presets': ['@vue/babel-preset-jsx'],
      plugins: ['istanbul'],
    },
  },
}
