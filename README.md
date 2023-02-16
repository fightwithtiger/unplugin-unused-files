# unplugin-unused-files

[![NPM version](https://img.shields.io/npm/v/unplugin-unused-files?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-unused-files)

## Install

```bash
npm i unplugin-unused-files -D
```

## Description

To find unused files during packaging, only searches in the src directory within the project are supported. And you can use the option to customize any directory or file under src directory.

```ts
type TargetType = string | RegExp | Array<string | RegExp>

interface Options {
  target?: TargetType // Specifies the scope of the search, support RE, path, or array, default(src)
  external?: string[] // Specifies the file suffix to search for, , default(src)
}
```

## Example

```ts
// target: resolve(__dirname, './src'),
// target: /src[\\/]util/,
// target: [/src[\\/]util/, resolve(__dirname, './src')],
// external: ['.ts', '.css'],
```

## Usage

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnusedFiles from 'unplugin-unused-files/vite'

export default defineConfig({
  plugins: [
    UnusedFiles({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnusedFiles from 'unplugin-unused-files/rollup'

export default {
  plugins: [
    UnusedFiles({ /* options */ }),
  ],
}
```

<br></details>


<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-unused-files/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default {
  buildModules: [
    ['unplugin-unused-files/nuxt', { /* options */ }],
  ],
}
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-unused-files/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnusedFiles from 'unplugin-unused-files/esbuild'

build({
  plugins: [UnusedFiles()],
})
```

<br></details>
