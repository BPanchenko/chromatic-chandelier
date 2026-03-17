import { SpaceID } from "./manual";
import { AngleUnit, IPair, IQuad, ITriplet, Triplet, TTupleCP } from "./types";

export const assert: TAssertionFunction;
export const createTuple: TExtendedTupleCreation;
export const deepFreeze: <T extends Record<string, TDatumValue> = TDataObject>(entity: T) => Readonly<T>;

export const isBoolean: (value: unknown) => value is boolean;
export const isCSSColor: (value: unknown) => value is string;
export const isCSSIdent: (value: unknown) => value is string;
export const isHEXColor: (value: string) => boolean;
export const isIterableObject: (val: unknown) => val is object & Iterable<unknown>;
export const isNumber: (val: unknown) => val is number;
export const isObject: (val: unknown) => val is object;
export const isString: (val: unknown) => val is string;
export const isTruthy: (value: unknown) => value is boolean;

export const makeHueAttribute: (angle: number) => HueAttr;

export const makeCSSColor: (colorspace: SpaceID, components?: Triplet<number>, opacity?: number) => string;
export const parseCSSColor: (color: string) => TCSSParsingResult | never;
export const parseHEXColor: (hex: string) => TCSSParsingResult;

export const round: (
	numeric: number,
	digits?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
) => number;
export const toKebabCase: (sentence: string) => string;
export const toPascalCase: (sentence: string, sep?: string, capitalize?: boolean) => string;

interface IRichTriplet<T extends TTupleCP = number> extends ITriplet<T>, TTripletProps { }

type HueAttr = number & {
	angle: {
		signed: number;
		unsigned: number;
		unit: AngleUnit;
	};
	as: {
		deg: number;
		grad: number;
		rad: number;
		turn: number;
	};
	deviation: number;
	family: 'red' | 'yellow-red' | 'yellow' | 'green-yellow' | 'green' | 'cyan-green' | 'cyan' | 'blue-cyan' | 'blue' | 'purple-blue' | 'purple' | 'red-purple';
};

type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol
	| bigint;

type TAssertionFunction = (condition: Primitive, payload?: Error | string) => asserts condition is true
type TExtendedTupleCreation = {
	<T extends TTupleCP = number>(p1: T, p2: T): IPair<T>;
	<T extends TTupleCP = number>(p1: T, p2: T, p3: T, props?: TTripletProps): IRichTriplet<T>;
	<T extends TTupleCP = number>(p1: T, p2: T, p3: T, p4: T): IQuad<T>;
};

type TCSSParsingResult = [ColorSpace: SpaceID, Components: IteratorObject<number>, AlphaChannelValue: number];
type TDataObject = Record<string, TDatumValue | Record<string, TDatumValue | Record<string, TDatumValue>>>;
type TDatumValue = boolean | null | number | object | string;
type TTripletProps = Partial<{
	colorspace: SpaceID;
	linear: ITriplet<number>;
}>;
type TRichTuple<T extends TTupleCP = number> = IPair<T> | IRichTriplet<T> | IQuad<T>;
