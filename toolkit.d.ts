import type { Vector, VectorTuple } from '#math-gl';
import type { AngleUnit, PointInSpace, SpaceID } from './types/lib.d.ts';
import type SpaceNS from './types/ns.Space.d.ts';
export type RGBTuple = Uint8Array & [
	R: number,
	G: number,
	B: number
];
export declare const CYLModel: RegExp;
export declare const RGBModel: RegExp;
export declare const isColorFunction: (value: string) => boolean;
export declare const isHEXColor: (value: string) => boolean;
export declare const isCSSColor: (value: unknown) => value is string;
/**
 *
 * @param source Angle as degrees 0..360
 * @returns An angle in a number of turns 0..1
 */
export declare const parseCSSAngle: (source: string) => [number, AngleUnit];
export declare const parseCSSColor: (value: unknown) => Promise<[SpaceNS.Descriptor, Vector, number]> | never;
export declare function parseCSSAlphaParameter(parameter: string | undefined): number;
export declare function parseCSSParameter(parameter: string): number;
export declare function parseHEXColor(hex: string): [Vector, number];
export declare const toHEX: (vec: Vector, opacity?: number) => string;
export declare const toRGB: (vec: Vector) => RGBTuple;


export declare const isNumber: (val: unknown) => val is number;
export declare const isString: (val: unknown) => val is string;
export declare const isObject: (val: unknown) => val is object;

interface ColorDTO extends VectorTuple {
	readonly ident: string;
	readonly name: string;
	readonly space: SpaceID;
	readonly coordinates: Vector;
	readonly parameters: Vector;
	readonly opacity: number;
	readonly 'esm-name': string;
	readonly 'css-name': string;
	readonly 'css-value': string;
	get rgb(): Uint8Array;
	get hex(): string;
	get [Symbol.toStringTag](): string;
	toString(): string;
	valueOf(): string;
}
type Exception = ExceptionTuple | Error;
type ExceptionTuple = [(...props: Array<number>) => Error['message'], ErrorConstructor];
export declare enum ErrorCode {
	InvalidPointOptions = 0,
	ValueWithoutRange = 1
}
export declare function initException(code?: ErrorCode, ...params: (SpaceID | Vector | number)[]): Exception;
export type { Exception, ExceptionTuple };
export declare function makeColorDTO(input: string | PointInSpace, key: string): Promise<ColorDTO>;
export declare const toKebabCase: (sentence: string) => string;
export declare const toPascalCase: (sentence: string, sep?: string, capitalize?: boolean) => string;
