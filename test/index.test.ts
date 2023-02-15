import { describe, expect, it } from 'vitest'
import { getAllFiles } from '../src/core'

describe('getAllFiles', () => {
  it('src', () => {
    const files = getAllFiles('src')
    expect(files).toMatchSnapshot()
  })
})
