import type { Range } from '../math-gl';
declare const isRange: (value: unknown) => value is Range;
export { createRange, createRange as default, isRange };
declare function createRange(from?: number, to?: number): Range;
