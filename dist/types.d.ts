import { compositeModeKeys } from './const';
export declare type Composite = (source: ImageData, dest: ImageData, sx?: number, sy?: number, sw?: number, sh?: number, dx?: number, dy?: number, sourceAlpha?: number) => void;
export declare type Paste = (source: ImageData, dest: ImageData, sx?: number, sy?: number, sw?: number, sh?: number, dx?: number, dy?: number, sourceAlpha?: number, compositeMode?: CompositeModeKey) => void;
export declare type CompositeModeKey = typeof compositeModeKeys[number];
