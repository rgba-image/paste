import { isLittleEndian, rgbaToUint32 } from '@rgba-image/common'
import { Composite } from './types'

export const pasteNormal: Composite = (
  source: ImageData,
  dest: ImageData,
  sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy,
  dx = 0, dy = 0,
  sourceAlpha = 1
) => {
  sx = sx | 0
  sy = sy | 0
  sw = sw | 0
  sh = sh | 0
  dx = dx | 0
  dy = dy | 0

  if (sourceAlpha <= 0 || sw <= 0 || sh <= 0) return

  const destData = new Uint32Array(dest.data.buffer)

  for (let y = 0; y < sh; y++) {
    const sourceY = sy + y

    if (sourceY < 0 || sourceY >= source.height) continue

    const destY = dy + y

    if (destY < 0 || destY >= dest.height) continue

    for (let x = 0; x < sw; x++) {
      const sourceX = sx + x

      if (sourceX < 0 || sourceX >= source.width) continue

      const destX = dx + x

      if (destX < 0 || destX >= dest.width) continue

      const sourceIndex = (sourceY * source.width + sourceX) * 4
      const destIndex = (destY * dest.width + destX) * 4

      const sR = source.data[sourceIndex] / 255
      const sG = source.data[sourceIndex + 1] / 255
      const sB = source.data[sourceIndex + 2] / 255
      const sA = (source.data[sourceIndex + 3] / 255) * sourceAlpha

      const dR = dest.data[destIndex] / 255
      const dG = dest.data[destIndex + 1] / 255
      const dB = dest.data[destIndex + 2] / 255
      const dA = dest.data[destIndex + 3] / 255

      // calculation
      const a = dA + sA - dA * sA
      const r = (sR * sA + dR * dA * (1 - sA)) / a
      const g = (sG * sA + dG * dA * (1 - sA)) / a
      const b = (sB * sA + dB * dA * (1 - sA)) / a
      //

      const v = rgbaToUint32(
        r * 255, g * 255, b * 255, a * 255, isLittleEndian
      )

      const dest32Index = destY * dest.width + destX

      destData[dest32Index] = v
    }
  }
}
