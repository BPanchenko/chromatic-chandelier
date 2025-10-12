import type { SpaceID } from './manual.d.ts';
import type { AngleUnit, Triplet } from './types.d.ts';
export const isColorFunction: (value: string) => boolean;
export const isCSSColor: (value: unknown) => value is string;
export const isCSSIdent: (value: unknown) => value is string;
export const isHEXColor: (value: string) => boolean;

/**
 * Тип данных CSS <angle> представляет собой значение угла, выраженное в градусах, градах, радианах или оборотах.
 * 
 * @param angle Значение угла, выраженное в градусах, градах, радианах или оборотах.
 * @returns Вернётся кортеж из числового значения и одна из единиц измерения.
 */
export const parseCSSAngle: (angle: string) => [number, AngleUnit];
export const parseCSSColor: (color: string) => [SpaceID, Triplet<number | string>, number] | never;
export const parseHEXColor: (hex: string) => [RGB: Triplet<number>, A: number];

export const isNumber: (val: unknown) => val is number;
export const isString: (val: unknown) => val is string;
export const isObject: (val: unknown) => val is object;
export const isIterableObject: (val: unknown) => val is object & Iterable<unknown>;
export const round: (
	numeric: number,
	digits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
) => number;
export const toKebabCase: (sentence: string) => string;
export const toPascalCase: (sentence: string, sep?: string, capitalize?: boolean) => string;