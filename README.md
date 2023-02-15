# unplugin-unused-files

[![NPM version](https://img.shields.io/npm/v/unplugin-unused-files?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-unused-files)

## Install

```bash
npm i unplugin-unused-files
```

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
