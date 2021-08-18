# paste

Paste a region from one ImageData to another with optional composite mode

With the default mode (`normal`) the pixels copied from the source image are 
alpha composited with the pixels in the destination image

Composite modes include:

`darken`, `difference`, `exclusion`, `hardLight`, `lighten`, `multiply`,
`normal`, `overlay`, `screen`

## install

`npm install @rgba-image/paste`

## usage

Pastes one image over another:

```js
const { paste } = require( '@rgba-image/copy' )

paste( source, dest )
```

Paste from a source region to a location on the destination image:

```js
const sourceX = 10
const sourceY = 20
const sourceWidth = 50
const sourceHeight = 100
const destX = 30
const destY = 40

paste( source, dest, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY )
```

Paste with the source at half opacity:

```js
const sourceX = 10
const sourceY = 20
const sourceWidth = 50
const sourceHeight = 100
const destX = 30
const destY = 40
const alpha = 0.5

paste( 
  source, dest, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, alpha
)
```

Paste with the source at normal opacity using screen composite mode:

```js
const sourceX = 10
const sourceY = 20
const sourceWidth = 50
const sourceHeight = 100
const destX = 30
const destY = 40
const alpha = 1
const mode = 'screen'

paste( 
  source, dest, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, 
  alpha, mode
)
```

Arguments following `dest` are optional

If omitted:

```js
sourceX = 0
sourceY = 0
sourceWidth = source.width - sourceX
sourceHeight = source.height - sourceY
destX = 0
destY = 0
alpha = 1
mode = 'normal'
```

Also exported for convenience: 

`pasteDarken`, `pasteDifference`, `pasteExclusion`, `pasteHardLight`, 
`pasteLighten`, `pasteMultiply`, `pasteNormal`, `pasteOverlay`, `pasteScreen`

## License

MIT License

Copyright (c) 2018 Nik Coughlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.