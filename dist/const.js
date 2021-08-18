"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compositeFns = exports.compositeModeKeys = void 0;
const paste_darken_1 = require("./paste-darken");
const paste_difference_1 = require("./paste-difference");
const paste_exclusion_1 = require("./paste-exclusion");
const paste_hard_light_1 = require("./paste-hard-light");
const paste_lighten_1 = require("./paste-lighten");
const paste_multiply_1 = require("./paste-multiply");
const paste_normal_1 = require("./paste-normal");
const paste_overlay_1 = require("./paste-overlay");
const paste_screen_1 = require("./paste-screen");
exports.compositeModeKeys = [
    'darken', 'difference', 'exclusion', 'hardLight', 'lighten', 'multiply',
    'normal', 'overlay', 'screen'
];
const _compositeFns = {
    darken: paste_darken_1.pasteDarken,
    difference: paste_difference_1.pasteDifference,
    exclusion: paste_exclusion_1.pasteExclusion,
    hardLight: paste_hard_light_1.pasteHardLight,
    lighten: paste_lighten_1.pasteLighten,
    multiply: paste_multiply_1.pasteMultiply,
    normal: paste_normal_1.pasteNormal,
    overlay: paste_overlay_1.pasteOverlay,
    screen: paste_screen_1.pasteScreen
};
exports.compositeFns = Object.freeze(_compositeFns);
//# sourceMappingURL=const.js.map