export type TargetType = string | RegExp | Array<string | RegExp>

export interface Options {
  // define your plugin options here
  target?: TargetType
  external?: string[]
}

export type UnpluginOptions = Required<Options>
