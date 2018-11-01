"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const fs = require("fs");
const create_image_1 = require("@rgba-image/create-image");
const png_1 = require("@rgba-image/png");
const __1 = require("..");
const layer1Png = fs.readFileSync('./src/test/fixtures/layer-1.png');
const layer2Png = fs.readFileSync('./src/test/fixtures/layer-2.png');
const expectRegionsPng = fs.readFileSync('./src/test/fixtures/expect-regions.png');
const expectAllPng = fs.readFileSync('./src/test/fixtures/expect-all.png');
const layer1 = png_1.fromPng(layer1Png);
const layer2 = png_1.fromPng(layer2Png);
const expectRegions = png_1.fromPng(expectRegionsPng);
const expectAll = png_1.fromPng(expectAllPng);
describe('paste', () => {
    it('pastes using regions', () => {
        const regions = create_image_1.createImage(10, 10);
        __1.paste(layer1, regions, 0, 0, 8, 8, 2, 2);
        __1.paste(layer2, regions, 2, 2, 8, 8, 0, 0);
        assert.deepEqual(regions, expectRegions);
    });
    it('pastes all', () => {
        const all = create_image_1.createImage(10, 10);
        __1.paste(layer1, all);
        __1.paste(layer2, all);
        assert.deepEqual(all, expectAll);
    });
    it('ignores source out of bounds', () => {
        const all = create_image_1.createImage(10, 10);
        __1.paste(layer1, all);
        __1.paste(layer2, all);
        __1.paste(layer2, all, 12, 12, 10, 10, 0, 0);
        assert.deepEqual(all, expectAll);
    });
    it('ignores dest out of bounds', () => {
        const all = create_image_1.createImage(10, 10);
        __1.paste(layer1, all);
        __1.paste(layer2, all);
        __1.paste(layer2, all, 0, 0, 10, 10, 12, 12);
        assert.deepEqual(all, expectAll);
    });
});
//# sourceMappingURL=index.js.map