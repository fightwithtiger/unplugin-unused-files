import fs from 'fs'
import { resolve } from 'path'
import type { Options, TargetType } from '../types'
import { ROOT, SYSTEM_SEP } from './constant'

const loadedFiles: string[] = []
let targetRegs: RegExp[]

export function getUnusedFiles() {
  const allFiles = getAllFiles()
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
        allFiles.push(pth)
      }
    })

    return allFiles
  } catch (err) {
    console.error(err)
    return []
  }
}

export function mark(id: string, options: Options | undefined) {
  const { target = 'src' } = options || {} as Options
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
