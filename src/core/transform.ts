import fs from 'fs'
import { extname, resolve } from 'path'
import type { TargetType, UnpluginOptions } from '../types'
import { ROOT, SYSTEM_SEP } from './constant'

const loadedFiles: string[] = []
let targetRegs: RegExp[]

export function getUnusedFiles(options: UnpluginOptions) {
  const { external } = options
  let allFiles = getAllFiles()
  if (external.length > 0) {
    allFiles = allFiles.filter((file) => {
      const suffix = extname(file)
      return external.includes(suffix)
    })
  }

  const processedFiles = allFiles.filter((file) => {
    let flag = false
    for (const reg of targetRegs) {
      if (reg.test(file)) {
        flag = true
        break
      }
    }
    return flag
  })
  return processedFiles.filter(file => !loadedFiles.includes(file))
}

export function getAllFiles(dir: string = ROOT) {
  try {
    const allFiles: string[] = []
    const files = fs.readdirSync(dir)
    files.forEach((file: any) => {
      const pth = resolve(dir, file)
      const stat = fs.statSync(pth)
      if (stat.isDirectory()) {
        const more = getAllFiles(pth)
        allFiles.push(...more)
      } else {
        allFiles.push(fixPath(pth))
      }
    })

    return allFiles
  } catch (err) {
    console.error(`unplugin-unused-files error: ${JSON.stringify(err)}`)
    return []
  }
}

export function mark(id: string, options: UnpluginOptions) {
  const { target } = options
  targetRegs = getTargetRegs(target)
  const path = fixPath(id)
  for (const reg of targetRegs) {
    if (reg.test(path)) {
      loadedFiles.push(path)
      break
    }
  }

  return !!path
}

function fixPath(path: string) {
  return path.replace(/[\\/]/g, SYSTEM_SEP)
}

function getTargetRegs(target: TargetType) {
  const targetRegs = []
  if (typeof target === 'string') {
    const path = fixPath(target)
    targetRegs.push(new RegExp(path))
  } else if (Array.isArray(target)) {
    target.forEach((item) => {
      targetRegs.push(...getTargetRegs(item))
    })
  } else {
    targetRegs.push(target)
  }
  return targetRegs
}
