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
})