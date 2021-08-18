import { compositeFns } from './const'

import { Paste } from './types'

export const paste: Paste = (
  source: ImageData,
  dest: ImageData,
  sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy,
  dx = 0, dy = 0,
  sourceAlpha = 1,
  compositeMode = 'normal'
) =>
  compositeFns[compositeMode](
    source, dest,
    sx, sy, sw, sh,
    dx, dy,
    sourceAlpha
  )

export * from './const'  
export * from './paste-darken'
export * from './paste-difference'
export * from './paste-exclusion'
export * from './paste-hard-light'
export * from './paste-lighten'
export * from './paste-multiply'
export * from './paste-normal'
export * from './paste-overlay'
export * from './paste-screen'
export * from './types'
