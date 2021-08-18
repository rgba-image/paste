import { pasteDarken } from './paste-darken'
import { pasteDifference } from './paste-difference'
import { pasteExclusion } from './paste-exclusion'
import { pasteHardLight } from './paste-hard-light'
import { pasteLighten } from './paste-lighten'
import { pasteMultiply } from './paste-multiply'
import { pasteNormal } from './paste-normal'
import { pasteOverlay } from './paste-overlay'
import { pasteScreen } from './paste-screen'
import { Composite, CompositeModeKey } from './types'

export const compositeModeKeys = [
  'darken', 'difference', 'exclusion', 'hardLight', 'lighten', 'multiply',
  'normal', 'overlay', 'screen'
] as const

const _compositeFns: Record<CompositeModeKey,Composite> = {
  darken: pasteDarken,
  difference: pasteDifference,
  exclusion: pasteExclusion,
  hardLight: pasteHardLight,
  lighten: pasteLighten,
  multiply: pasteMultiply,
  normal: pasteNormal,
  overlay: pasteOverlay,
  screen: pasteScreen
}

export const compositeFns = Object.freeze( _compositeFns )
