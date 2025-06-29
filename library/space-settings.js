/**
 * @import {RangeTuple, VectorTuple} from '../math-gl'
 */

/** @type {RangeTuple} */
export const DEGREE_TUPLE = Object.freeze([0, 360])

/** @type {RangeTuple} */
export const RADIAN_TUPLE = Object.freeze([0, 2 * Math.PI])

/** @type {RangeTuple} */
export const PERCENT_TUPLE = Object.freeze([0, 100])

/** @type {RangeTuple} */
export const INT8_TUPLE = Object.freeze([-128, 127])

/** @type {RangeTuple} */
export const UINT8_TUPLE = Object.freeze([0, 255])

/** @type {RangeTuple} */
export const UINT16_TUPLE = Object.freeze([0, 65_535])

/** @type {RangeTuple} */
export const UNIT_TUPLE = Object.freeze([0, 1])

/** @type {RangeTuple} */
export const SIGNET_UNIT_TUPLE = Object.freeze([-1, 1])

/** @type {VectorTuple} */
export const D50 = [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585]

/** @type {VectorTuple} */
export const D65 = [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]

// Corresponds roughly to RGB brighter/darker
export const Kn = 18

// D65 standard referent
export const Xn = 0.950_47
export const Yn = 1
export const Zn = 1.088_83

export const t0 = 0.137_931_034 // 4 / 29
export const t1 = 0.206_896_552 // 6 / 29
export const t2 = 0.128_418_55 // 3 * t1 * t1
export const t3 = 0.008_856_452 // t1 * t1 * t1,

export const kE = 216 / 24_389
export const kKE = 8
export const kK = 24_389 / 27

// used in rgb2xyz
export const As = 0.941_428_535_000_000_1
export const Bs = 1.040_417_467
export const Cs = 1.089_532_651

export const RefWhiteRGB = {
	X: 0.950_47,
	Y: 1,
	Z: 1.088_83,
}