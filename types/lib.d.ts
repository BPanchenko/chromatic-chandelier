

import type { Primitive } from 'type-fest';

import type SpaceNS from './ns.Space.d.ts';

export type AxisID =
	| 'x'
	| 'y'
	| 'z'
	| 'r'
	| 'g'
	| 'b'
	| 'L'
	| 'a'
	| 'C'
	| 'H'
	| 'B'
	| 'S'
	| 'W'

export type SpaceID =
	| 'a98-rgb'
	| 'display-p3'
	| 'hsl'
	| 'hwb'
	| 'lab'
	| 'lch'
	| 'oklab'
	| 'oklch'
	| 'prophoto-rgb'
	| 'rec2020'
	| 'rec2100-pq'
	| 'rec2100-hlg'
	| 'rec2100-linear'
	| 'srgb-linear'
	| 'srgb'
	| 'xyz'
	| 'xyz-d50'
	| 'xyz-d65'

export type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn'
export type BezierPoints = [p1x: number, p1y: number, p2x: number, p2y: number]
export type OutputFormatIdent = 'css' | 'hex' | 'rgb'
export type SampleCollection = Record<SEC, SpaceNS.ColorSample>;
export type SEC = 'Rd' | 'Or' | 'Yl' | 'Gr' | 'Bl' | 'Pr' | 'Wh' | 'Bk'
export type StringToNumber = TransferFunction<string, number>
export type TransferFunction<V extends Primitive = number, R extends Primitive = number> = (value: V) => R
export type Validator = TransferFunction<number, boolean>

export type PointCoordinates = [number, number, number]
export type PointReflector = (position: PointCoordinates) => PointCoordinates;
export interface PointInSpace extends PointCoordinates {
	get space(): SpaceNS.Descriptor;
	get position(): PointCoordinates;
	set position(coordinates: PointCoordinates);
	toString(): string;
}
