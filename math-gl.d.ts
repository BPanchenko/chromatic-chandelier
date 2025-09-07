interface Matrix extends Iterable<number> {
	[key: number]: number;
	readonly length: 9;
}

interface Matrix {
	clone(): Matrix;

	/**
	 * Определи́тель (детермина́нт) в линейной алгебре — скалярная величина,
	 * которая характеризует ориентированное «растяжение» или «сжатие» многомерного евклидова пространства
	 * после преобразования матрицей; имеет смысл только для квадратных матриц.
	 *
	 * Стандартные обозначения определителя матрицы `A` — `det(A) , |A| , Δ(A)`.
	 *
	 * Определитель квадратной матрицы `A` размеров `n × n`, заданной над коммутативным кольцом `R`,
	 * является элементом кольца `R`. Эта величина определяет многие свойства матрицы `A`, в частности,
	 * матрица обратима тогда и только тогда, когда её определитель является обратимым элементом кольца `R`.
	 *
	 * В случае, когда `R` — поле, определитель матрицы `A` равен нулю тогда и только тогда,
	 * когда ранг матрицы `A` меньше `n`, то есть когда системы строк и столбцов матрицы `A` являются линейно зависимыми.
	 *
	 * https://en.wikipedia.org/wiki/Determinant
	 */
	determinant(): number;

	/**
	 * Call callback function on each its element
	 * @param cb callback function
	 * @returns itself
	 */
	each(callback: (element: number) => unknown): Matrix;
	each(callback: (element: number, index: number) => unknown): Matrix;
	each(callback: (element: number, index: number, matrix: Matrix) => unknown): Matrix;

	/**
	 * Обра́тная ма́трица — такая матрица `A⁻¹`, при умножении которой на исходную матрицу `A` получается единичная матрица `E`: `AA⁻¹=A⁻¹A=E`.
	 *
	 * https://en.wikipedia.org/wiki/Invertible_matrix
	 */
	invert(): Matrix | never;

	toArray: () => number[];
	toString: () => string;

	/**
	 * Update its elements to the given values
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
	 * @returns itself
	 */
	update(
		m00?: number,
		m01?: number,
		m02?: number,
		m10?: number,
		m11?: number,
		m12?: number,
		m20?: number,
		m21?: number,
		m22?: number
	): Matrix;
}

interface Vector extends Iterable<number> {
	readonly length: 3;
	0: number;
	1: number;
	2: number;
	entries(): IteratorObject<[index: number, value: number]>;
	toArray(): [number, number, number];
	toString(): string;
	values(): IteratorObject<number>;
}

interface Vector {
	/**
	 * Initial Point
	 */
	readonly base: IteratorObject<number>;

	/**
	 * Terminal Point
	 */
	readonly head: IteratorObject<number>;

	/**
	 * The magnitude of a vector is its length, a scalar value representing the vector's size or strength.
	 * It's always a non-negative value and is calculated using the components of the vector.
	 */
	get magnitude(): number;
	get sqrMagnitude(): number;

	/**
	 * Angle between two vectors
	 *
	 * @this {Vector} The first operand
	 * @param vec The second operand
	 * @param inDegrees Pass the true value if the result should be in degrees
	 * @returns The angle in radians or degrees
	 */
	angle(vector: Vector, inDegrees?: true): number;

	/**
	 * Dublicate itself and returns new instance
	 */
	clone(): Vector;

	/**
	 * Computes the vector product of two vec3's
	 */
	cross(): Vector;

	/**
	 * euclidean distance to a specified vector
	 */
	distance(vector: Vector): number;

	/**
	 * scalar product of two vectors
	 */
	dot(vector: Vector): number;

	/**
	 * Call callback function on each component
	 */
	each(cb: (component: number, index: 0 | 1 | 2, vector: Vector) => void): Vector;
	each(cb: (component: number, index: 0 | 1 | 2) => void): Vector;
	each(cb: (component: number) => void): Vector;

	/**
	 * Returns whether or not the vectors have approximately the same elements in the same position.
	 */
	equals(): Vector;

	/**
	 * Multiplies itself by a vector or matrix with updating of its components
	 */
	multiply(multiplier: Matrix | Vector): Vector;

	normalize(): Vector;

	/**
	 * Fills it with random values but the given magnitude
	 *
	 * @param magnitude Length of the updated vector. If omitted, a unit vector will be returned
	 */
	randomly(magnitude?: number): Vector;

	/**
	 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
	 */
	strictEquals(): Vector;

	/**
	 * Update the components of the vector to the given values
	 */
	update(xcoord: number | null, y: number | null, z: number | null): Vector;
	update(xyz: Array<number | null>): Vector;

	/**
	 * Update the components of the vector to the given values
	 */
	zeroize(): Vector;
}

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

export type { Matrix, Range, RangeBuffer, RangeTuple, ScalingFunction, Vector };

export class CubicBezier implements CubicBezierCorrelator {
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
export function createMatrix(m00?: number, m01?: number, m02?: number, m10?: number, m11?: number, m12?: number, m20?: number, m21?: number, m22?: number): Matrix;

export function createRange(from?: number, to?: number): Range;
export function createVector(x?: number, y?: number, z?: number): Vector;
export function initScale(external?: RangeTuple | Range, internal?: RangeTuple | Range): ScalingFunction;
export function isMatrix(value: unknown): value is Matrix;
export function isRange(value: unknown): value is Vector;
export function isVector(value: unknown): value is Vector;
export function round(numeric: number, digits?: 0 | 9 | 3 | 1 | 2 | 4 | 5 | 6 | 7 | 8 | 10 | 11 | 12 | 13 | 14 | 15 | 16): number;

export const DEGREE_RANGE: Range;
export const RADIAN_RANGE: Range;
export const PERCENT_RANGE: Range;
export const INT8_RANGE: Range;
export const UINT8_RANGE: Range;
export const UINT16_RANGE: Range;
export const UNIT_RANGE: Range;

