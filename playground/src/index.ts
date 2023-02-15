import { add } from 'util/math'
import dayjs from 'dayjs'
import { mius } from './util'

export function getContent() {
  const day = dayjs('2019-01-25').format('DD/MM/YYYY')
  return `${add(1, 1)}  ${day} ${mius(2, 5)}`
}
