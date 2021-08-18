import { compositeModeKeys } from './const'

export type Composite = (
  source: ImageData,
  dest: ImageData,
  sx?: number, 
  sy?: number, 
  sw?: number, 
  sh?: number,
  dx?: number, 
  dy?: number,
  sourceAlpha?: number
) => void

export type Paste = (
  source: ImageData,
  dest: ImageData,
  sx?: number, 
  sy?: number, 
  sw?: number, 
  sh?: number,
  dx?: number, 
  dy?: number,
  sourceAlpha?: number,
  compositeMode?: CompositeModeKey
) => void


export type CompositeModeKey = typeof compositeModeKeys[ number ]
