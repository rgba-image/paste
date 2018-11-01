import * as assert from 'assert'
import * as fs from 'fs'
import { createImage } from '@rgba-image/create-image'
import { fromPng, toPng } from '@rgba-image/png'
import { paste } from '..'

const layer1Png = fs.readFileSync( './src/test/fixtures/layer-1.png' )
const layer2Png = fs.readFileSync( './src/test/fixtures/layer-2.png' )
const expectRegionsPng = fs.readFileSync( './src/test/fixtures/expect-regions.png' )
const expectAllPng = fs.readFileSync( './src/test/fixtures/expect-all.png' )

const layer1 = fromPng( layer1Png )
const layer2 = fromPng( layer2Png )
const expectRegions = fromPng( expectRegionsPng )
const expectAll = fromPng( expectAllPng )

const getNoise = () => {
  const width = 1024
  const height = 1024
  const noise = createImage( width, height )

  for ( let y = 0; y < height; y++ ) {
    for ( let x = 0; x < width; x++ ) {
      const index = ( y * width + x ) * 4
      noise.data[ index ] = ( Math.random() * 256 ) | 0
      noise.data[ index + 1 ] = ( Math.random() * 256 ) | 0
      noise.data[ index + 2 ] = ( Math.random() * 256 ) | 0
      noise.data[ index + 3 ] = ( Math.random() * 256 ) | 0
    }
  }

  return noise
}

const noise1 = getNoise()
const noise2 = getNoise()

describe( 'paste', () => {
  it( 'pastes using regions', () => {
    const regions = createImage( 10, 10 )

    paste( layer1, regions, 0, 0, 8, 8, 2, 2 )
    paste( layer2, regions, 2, 2, 8, 8, 0, 0 )

    assert.deepEqual( regions, expectRegions )
  })

  it( 'pastes all', () => {
    const all = createImage( 10, 10 )

    paste( layer1, all )
    paste( layer2, all )

    assert.deepEqual( all, expectAll )
  })

  it( 'ignores source out of bounds', () => {
    const all = createImage( 10, 10 )

    paste( layer1, all )
    paste( layer2, all )
    paste( layer2, all, 12, 12, 10, 10, 0, 0 )

    assert.deepEqual( all, expectAll )
  })

  it( 'ignores dest out of bounds', () => {
    const all = createImage( 10, 10 )

    paste( layer1, all )
    paste( layer2, all )
    paste( layer2, all, 0, 0, 10, 10, 12, 12 )

    assert.deepEqual( all, expectAll )
  } )

  it( 'does an early return when sw or sh are 0', () => {
    const emptyData = new Uint8Array( 10 * 10 * 4 )
    const swDest = createImage( 10, 10 )
    const shDest = createImage( 10, 10 )

    paste( layer1, swDest, 0, 0, 0, 10 )
    paste( layer1, shDest, 0, 0, 10, 0 )

    assert.deepEqual( swDest.data, emptyData )
    assert.deepEqual( shDest.data, emptyData )
  } )

  // no test, just lazy benchmarking
  it( 'big paste', () => {
    const dest = createImage( 768, 768 )

    paste( noise1, dest, 0, 0, 1280, 1280, 0, 0 )
    paste( noise2, dest, 0, 0, 1280, 1280, 0, 0 )
  })
})