import type { Vector } from "../../math-gl/@types/iface.Vector";
import type { ScalingFunction } from "../../math-gl/fn.initScale.ts";
import type { AxisID, PointReflector, SampleCollection, SpaceID } from "./lib";
import type ColorNS from "./ns.Color";

declare namespace SpaceNS {
	type Axis = {
		description?: string;
		ident: AxisID;
		scale: ScalingFunction;
		toCoordinate(this: Axis, parameter: number | string): number;
		toParameter(this: Axis, coordinate: number, unit?: string): number;
		type: 'polar-azimuth' | 'polar-radius' | 'cartesian-regular';
	};

	type CartesianCoordinateSystem = [abscissa: Axis, ordinate: Axis, applicate: Axis]
	type CartesianCoordinates = [
		x: number,
		y: number,
		z: number,
	]


	/**
	 * The distance from the axis may be called the radial distance or radius,
	 * while the angular coordinate is sometimes referred to as the angular position or as the azimuth.
	 * The radius and the azimuth are together called the polar coordinates,
	 * as they correspond to a two-dimensional polar coordinate system in the plane through the point, parallel to the reference plane.
	 * The third coordinate may be called the height or altitude (if the reference plane is considered horizontal), longitudinal position, or axial position.
	 *
	 * @see [Материал из Википедии](https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D1%80%D0%BD%D0%B0%D1%8F_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%BA%D0%BE%D0%BE%D1%80%D0%B4%D0%B8%D0%BD%D0%B0%D1%82)
	 */
	type CylindricalCoordinateSystem = [RadialDistance: Axis, AngularPosition: Axis, AxialPosition: Axis]
	type CylindricalCoordinates = [
		radius: number,
		azimuth: number,
		altitude: number,
	]
}

declare namespace SpaceNS {
	type ColorSample = {
		opposite: Vector;
		name: string;
		value: Vector;
	};

	type Descriptor = {
		$ref?: WeakRef<Descriptor>;
		ident: SpaceID;
		CSYS: CartesianCoordinateSystem | CylindricalCoordinateSystem;
		samples?: SampleCollection;
		toCSSColor(this: Descriptor, parameters: ColorNS.Channel | Vector | Iterable<number>, alpha?: number): string;
		whitepoint: Vector;
		description?: string;
		copyright?: string;
	} & {
		[key in SpaceID]?: PointReflector;
	};
}

export default SpaceNS;