import { createUnplugin } from 'unplugin'
import { getAllFiles, getLoadedFiles, getUnusedFiles, mark } from './core/index'
import type { Options } from './types'

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-unused-files',
  transformInclude(id) {
    return mark(id, options)
  },
  transform(code) {
    return code
  },
  buildEnd() {
    const unusedFiles = getUnusedFiles()

    console.log('\nloadedFiles', unusedFiles)
  },
}))
