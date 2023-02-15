import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import Unplugin from '../src/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src/',
      'util': '/src/util',
    },
  },
  plugins: [
    Inspect(),
    Unplugin({
      // target: '',
      // target: resolve(__dirname, './src'),
      target: /src[\\/]util/,
      // target: [/src[\\/]util/, resolve(__dirname, './src')],
      excludes: ['shared/**'],
    }),
  ],
})
