import type SpaceNS from '../types/ns.Space.js';

/**
 * @this {SpaceNS.Axis}
 * @param {number} coordinate
 * @returns {number}
 */
export function fromCoordinate(this: SpaceNS.Axis, coordinate: number): number;
/**
 * @this {SpaceNS.Axis}
 * @param {number | string} parameter
 * @returns {number}
 */
export function fromParameter(this: SpaceNS.Axis, parameter: number | string): number;
/**
 * @param {number | string} parameter
 * @returns {number}
 */
export function parseCSSParameter(parameter: number | string): number;
/**
 * @this {SpaceNS.Axis}
 * @returns {string}
 */
export function toString(this: SpaceNS.Axis): string;
export { fromParameter as toCoordinate, fromCoordinate as toParameter };
