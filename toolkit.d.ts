import type { Space } from './manual.d.ts';
import type { Vector } from './math-gl.d.ts';
import type { AngleUnit, Triplet } from './types.d.ts';
export const isColorFunction: (value: string) => boolean;
export const isHEXColor: (value: string) => boolean;
export const isCSSColor: (value: unknown) => value is string;

/**
 * Тип данных CSS <angle> представляет собой значение угла, выраженное в градусах, градах, радианах или оборотах.
 * 
 * @param angle Значение угла, выраженное в градусах, градах, радианах или оборотах.
 * @returns Вернётся кортеж из числового значения и одна из единиц измерения.
 */
export const parseCSSAngle: (angle: string) => [number, AngleUnit];
export const parseCSSColor: (value: unknown) => Promise<[Space, Vector, number]> | never;
export const parseHEXColor: (hex: string) => [RGB: Triplet, A: number];

export const isNumber: (val: unknown) => val is number;
export const isString: (val: unknown) => val is string;
export const isObject: (val: unknown) => val is object;
export const isIterableObject: (val: unknown) => val is object & Iterable<unknown>;
export const toKebabCase: (sentence: string) => string;
export const toPascalCase: (sentence: string, sep?: string, capitalize?: boolean) => string;