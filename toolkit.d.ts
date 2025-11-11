import type { SpaceID } from './manual';
import type { Pair, Quad, Triplet } from './types';

type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

type TAssertionFunction = (condition: Primitive, payload?: Error | string) => asserts condition is true
type TTupleCreator = {
	<T extends string | number = number, P = T | Iterable<T>>(p1: P, p2: P): Pair<P>;
	<T extends string | number = number, P = T | Iterable<T>>(p1: P, p2: P, p3: P): Triplet<P>;
	<T extends string | number = number, P = T | Iterable<T>>(p1: P, p2: P, p3: P, p4: P): Quad<P>;
};

type TCSSParsingResult = [ColorSpace: SpaceID, Components: IteratorObject<number>, AlphaChannelValue: number];
type TDataObject = Record<string, TDatumValue | Record<string, TDatumValue | Record<string, TDatumValue>>>;
type TDatumValue = boolean | null | number | object | string;

export const assert: TAssertionFunction;
export const createTuple: TTupleCreator;
export const deepFreeze: <T extends Record<string, TDatumValue> = TDataObject>(entity: T) => Readonly<T>;

export const isCSSColor: (value: unknown) => value is string;
export const isCSSIdent: (value: unknown) => value is string;
export const isHEXColor: (value: string) => boolean;
export const isNumber: (val: unknown) => val is number;
export const isString: (val: unknown) => val is string;
export const isObject: (val: unknown) => val is object;
export const isIterableObject: (val: unknown) => val is object & Iterable<unknown>;

export const parseCSSColor: (color: string) => TCSSParsingResult | never;
export const parseHEXColor: (hex: string) => TCSSParsingResult;

export const round: (
	numeric: number,
	digits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
) => number;
export const toKebabCase: (sentence: string) => string;
export const toPascalCase: (sentence: string, sep?: string, capitalize?: boolean) => string;