import { resolve, sep } from 'path'

export const SYSTEM_SEP = '/' || sep

export const ROOT = resolve('.', './src')

export const DEFUALT_OPTIONS = {
  target: ROOT,
  external: [],
}
