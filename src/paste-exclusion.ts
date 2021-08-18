import { rgbaToUint32, isLittleEndian } from '@rgba-image/common'
import { Composite } from './types'

export const pasteExclusion: Composite = (
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
      const sra = sR * sA
      const sga = sG * sA
      const sba = sB * sA

      const dra = dR * dA
      const dga = dG * dA
      const dba = dB * dA

      const a = dA + sA - dA * sA

      const r = (
        sra * dA +
        dra * sA -
        2 * sra * dra +
        sra * (1 - dA) +
        dra * (1 - sA)
      ) / a

      const g = (
        sga * dA +
        dga * sA -
        2 * sga * dga +
        sga * (1 - dA) +
        dga * (1 - sA)
      ) / a

      const b = (
        sba * dA +
        dba * sA -
        2 * sba * dba +
        sba * (1 - dA) +
        dba * (1 - sA)
      ) / a
      //

      const v = rgbaToUint32(
        r * 255, g * 255, b * 255, a * 255, isLittleEndian
      )

      const dest32Index = destY * dest.width + destX

      destData[dest32Index] = v
    }
  }
}
