import { MetadataChildren as Children } from './index'

export enum Constants {
  Basic = 'basic',
  Landscape = 'landscape',
  Portrait = 'portrait',
}

export type childKeyList = Array<keyof Children>

const basic: childKeyList = [
  'title',
]

const landscape: childKeyList = [
  'title',
  'subTitle',
  'starRate',
  'authors',
  'publisher',
  'count',
  'flatrate',
  'badges',
  'price',
]

const portrait: childKeyList = [
  'title',
  'subTitle',
  'starRate',
  'authors',
  'publisher',
  'count',
  'flatrate',
  'badges',
  'price',
]

export type presets = {
  [name in Constants]: childKeyList
}

export const presets: presets = {
  basic,
  landscape,
  portrait,
}
