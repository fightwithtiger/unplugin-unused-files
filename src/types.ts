export type TargetType = string | RegExp | Array<string | RegExp>

export interface Options {
  target?: TargetType
  external?: string[]
}

export type UnpluginOptions = Required<Options>
