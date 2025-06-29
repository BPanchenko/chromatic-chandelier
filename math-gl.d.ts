import type { Matrix, MatrixBuffer, MatrixTuple } from './types/iface.Matrix';
import type { Vector, VectorBuffer, VectorTuple } from './types/iface.Vector';

interface ScalingFunction {
	(value: number | string): number;
	invert(value: number | string): number;
	readonly domain: Range;
	readonly range: Range;
}

interface CubicBezierCorrelator {
	name: string;
	cx: number;
	bx: number;
	ax: number;
	cy: number;
	by: number;
	ay: number;

	/**
	 * @param W progress [0-1]
	 * @returns sampled X value
	 */
	sampleCurveX(Y: number): number;

	/**
	 * @param X progress [0-1]
	 * @returns sampled Y value
	 */
	sampleCurveY(X: number): number;

	/**
	 * @param weight progress [0-1]
	 * @returns sampled curve derivative X value
	 */
	sampleCurveDerivativeX(weight: number): number;

	/**
	 * @param x progress [0-1]
	 * @returns solved curve X value
	 */
	solveCurveX(x: number): number;
}


interface RangeBuffer extends Iterable<number> {
	readonly 0: number;
	readonly 1: number;
	readonly length: 2;
}

interface Range extends RangeBuffer {
	readonly from: number;
	readonly to: number;
	readonly min: number;
	readonly max: number;
	readonly magnitude: number;
	allot(value: number): number;
	clamp(value: number): number;
	clone(): Range;
	test(value: number): boolean;
}

type RangeTuple = Readonly<[start: number, end: number]>

export type {
	Matrix, MatrixBuffer, MatrixTuple,
	Range, RangeBuffer, RangeTuple, ScalingFunction, Vector, VectorBuffer, VectorTuple
};

export declare class CubicBezier implements CubicBezierCorrelator {
	readonly cx: number;
	readonly bx: number;
	readonly ax: number;
	readonly cy: number;
	readonly by: number;
	readonly ay: number;
	readonly name: string;
	/**
	 * @class
	 * @param p1x First point horizontal position
	 * @param p1y First point vertical position
	 * @param p2x Second point horizontal position
	 * @param p2y Second point vertical position
	 * @param name An optional function name
	 * @returns A new CubicBezier easing function
	 */
	constructor(p1x?: number, p1y?: number, p2x?: number, p2y?: number, name?: string);
	sampleCurveX(W: number): number;
	sampleCurveY(X: number): number;
	sampleCurveDerivativeX(w: number): number;
	solveCurveX(x: number): number;
}

/**
 * Create an 3x3 matrix with the given values
 *
 * @param m00 Element in column 0, row 0 position (index 0)
 * @param m01 Element in column 0, row 1 position (index 1)
 * @param m02 Element in column 0, row 2 position (index 2)
 * @param m10 Element in column 1, row 0 position (index 3)
 * @param m11 Element in column 1, row 1 position (index 4)
 * @param m12 Element in column 1, row 2 position (index 5)
 * @param m20 Element in column 2, row 0 position (index 6)
 * @param m21 Element in column 2, row 1 position (index 7)
 * @param m22 Element in column 2, row 2 position (index 8)
 * @returns An 3x3 matrix
 */
export declare function createMatrix(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number): Matrix;

export declare const isMatrix: (value: unknown) => value is Matrix;
export declare const isVector: (value: unknown) => value is Vector;
export declare const isRange: (value: unknown) => value is Vector;
export declare function createRange(from?: number, to?: number): Range;
export declare function createVector(x?: number, y?: number, z?: number): Vector;
export declare function initScale(external?: RangeTuple | Range, internal?: RangeTuple | Range): ScalingFunction;

export const DEGREE_RANGE: Range;
export const RADIAN_RANGE: Range;
export const PERCENT_RANGE: Range;
export const INT8_RANGE: Range;
export const UINT8_RANGE: Range;
export const UINT16_RANGE: Range;
export const UNIT_RANGE: Range;

