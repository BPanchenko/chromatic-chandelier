import type { Matrix } from '../types/iface.Matrix';

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

export default createMatrix