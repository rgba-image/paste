"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paste = void 0;
const const_1 = require("./const");
const paste = (source, dest, sx = 0, sy = 0, sw = source.width - sx, sh = source.height - sy, dx = 0, dy = 0, sourceAlpha = 1, compositeMode = 'normal') => const_1.compositeFns[compositeMode](source, dest, sx, sy, sw, sh, dx, dy, sourceAlpha);
exports.paste = paste;
__exportStar(require("./const"), exports);
__exportStar(require("./paste-darken"), exports);
__exportStar(require("./paste-difference"), exports);
__exportStar(require("./paste-exclusion"), exports);
__exportStar(require("./paste-hard-light"), exports);
__exportStar(require("./paste-lighten"), exports);
__exportStar(require("./paste-multiply"), exports);
__exportStar(require("./paste-normal"), exports);
__exportStar(require("./paste-overlay"), exports);
__exportStar(require("./paste-screen"), exports);
__exportStar(require("./types"), exports);
//# sourceMappingURL=index.js.map