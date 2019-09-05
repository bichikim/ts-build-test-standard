import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript'
import pug from 'rollup-plugin-pug'
export default {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.js',
  },
  external: ['vue'],
  plugins: [
    typescript({
      tsconfig: false,
      experimentalDecorators: true,
      module: 'es2015',
    }),
    vue(),
    pug(),
  ],
}
