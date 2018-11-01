"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@rgba-image/common");
exports.paste = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0) => {
    sx = sx | 0;
    sy = sy | 0;
    sw = sw | 0;
    sh = sh | 0;
    dx = dx | 0;
    dy = dy | 0;
    const destData = new Uint32Array(dest.data.buffer);
    for (let y = 0; y < sh; y++) {
        for (let x = 0; x < sw; x++) {
            const sourceX = sx + x;
            const sourceY = sy + y;
            const index = (sourceY * source.width + sourceX) * 4;
            if (index >= source.data.length)
                return;
            const destX = dx + x;
            const destY = dy + y;
            const destIndex = (destY * dest.width + destX) * 4;
            if (destIndex >= dest.data.length)
                return;
            const sR = source.data[index] / 255;
            const sG = source.data[index + 1] / 255;
            const sB = source.data[index + 2] / 255;
            const sA = source.data[index + 3] / 255;
            const dR = dest.data[destIndex] / 255;
            const dG = dest.data[destIndex + 1] / 255;
            const dB = dest.data[destIndex + 2] / 255;
            const dA = dest.data[destIndex + 3] / 255;
            const a = dA + sA - dA * sA;
            const r = (sR * sA + dR * dA * (1 - sA)) / a;
            const g = (sG * sA + dG * dA * (1 - sA)) / a;
            const b = (sB * sA + dB * dA * (1 - sA)) / a;
            const v = common_1.rgbaToUint32(r * 255, g * 255, b * 255, a * 255, common_1.isLittleEndian);
            const destDataIndex = destY * dest.width + destX;
            destData[destDataIndex] = v;
        }
    }
};
//# sourceMappingURL=index.js.map