import type { Matrix } from "./iface.Matrix.d.ts";

type VectorTuple = [
	x: number,
	y: number,
	z: number,
]

interface VectorBuffer extends Iterable<number> {
	readonly [key: number]: number;
	readonly length: 3;
}

interface Vector extends Float64Array<ArrayBufferLike> {

	/**
	 * Calculates the vector's length 
	 */
	get magnitude(): number;

	/**
	 * Calculates the squared length of the vector
	 */
	get squaredLength(): number;

	/**
	 * Get the angle between two 3D vectors
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
	 * Calculates the Euclidean distance to a specified vector
	 */
	distance(vector: Vector): number;

	/**
	 * Calculates the scalar product of two vectors
	 */
	dot(vector: Vector): number;

	/**
	 * Call callback function on each component
	 */
	each(cb: (component: number, index: number, vector: Vector) => void): Vector;
	each(cb: (component: number, index: number) => void): Vector;
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
	update(x: number, y: number, z: number): Vector;

	/**
	 * Update the components of the vector to the given values
	 */
	zeroize(): Vector;

	readonly length: 3;
}

export type {
	Vector, VectorBuffer, VectorTuple
};

