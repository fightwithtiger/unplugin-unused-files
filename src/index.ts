import { createUnplugin } from 'unplugin'
import { DEFUALT_OPTIONS } from './core/constant'
import { getUnusedFiles, mark } from './core/index'
import type { Options, UnpluginOptions } from './types'

let unpluginOptions: UnpluginOptions

export default createUnplugin<Options | undefined>(options => ({
  name: 'unplugin-unused-files',
  buildStart() {
    unpluginOptions = Object.assign({}, DEFUALT_OPTIONS, options || {})
  },
  transformInclude(id) {
    return mark(id, unpluginOptions)
  },
  transform(code) {
    return code
  },
  buildEnd() {
    const unusedFiles = getUnusedFiles(unpluginOptions)

    // eslint-disable-next-line no-console
    console.info('\n-----------------unused files--------------------\n')
    // eslint-disable-next-line no-console
    console.info(unusedFiles)
    // eslint-disable-next-line no-console
    console.info('\n-----------------unused files end--------------------\n')
  },
}))
