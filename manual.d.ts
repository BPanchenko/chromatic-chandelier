
/**
 * HSL, HLS или HSI (от англ. hue, saturation, lightness (intensity)) — цветовая модель, в которой цветовыми координатами являются тон, насыщенность и светлота.
 * [Соотношения с другими моделями...](https://ru.wikipedia.org/wiki/HSL)
 *
 * In HSL (Hue, Saturation, Lightness) color, the white point is represented by a lightness value of 100% and a saturation value of 0%. The hue value is irrelevant when dealing with white, as it represents a shade of gray regardless of the hue.
 * Therefore, the HSL value for white is hsl(0, 0%, 100%), according to a tutorial on CSS colors.
 */
export const HSLSpace: Space;

/**
 * HWB (Hue, Whiteness, Blackness) is a cylindrical-coordinate representation of points in an RGB color model, similar to HSL and HSV. It was developed by HSV’s creator Alvy Ray Smith in 1996 to address some of the issues with HSV. HWB was designed to be more intuitive for humans to use[1] and slightly faster to compute. The first coordinate, H (Hue), is the same as the Hue coordinate in HSL and HSV. W and B stand for Whiteness and Blackness respectively and range from 0–100% (or 0–1). The mental model is that the user can pick a main hue and then “mix” it with white and/or black to produce the desired color.\
 * _HWB was included in the CSS Level 4 Color Module in 2014._
 *
 * [WIKI](https://en.wikipedia.org/wiki/HWB_color_model)
 */
export const HWBSpace: Space;

/**
 * При разработке Lab преследовалась цель создания цветового пространства, изменение цвета в котором
 * будет более линейным с точки зрения человеческого восприятия (по сравнению с XYZ),
 * то есть с тем, чтобы одинаковое изменение значений координат цвета в разных областях цветового пространства
 * производило одинаковое ощущение изменения цвета.
 *
 * В цветовом пространстве Lab интенсивность света отделена от хроматической составляющей (тон, насыщенность).\
 * Светлота определяется координатой `L`, хроматическая составляющая — двумя декартовыми координатами `a` и `b`.
 *
 * [WIKI](https://en.wikipedia.org/wiki/CIELAB_color_space)
 * | [Цветовая модель Lab (CIELAB) на практике](https://www.fotosklad.ru/expert/articles/lab-na-praktike-cto-eto-zacem-nuzno-fotografu/)
 */
export const LABSpace: Space;

/**
 * Определяет местоположения новой точки путём выполнения афинных преобразований над компонентами аддитивной модели
 * исходного пространства **Adobe® 1998 RGB**; с последующим приведением хроматической составляющей к представлению
 * в плоской системе координат цветности и выделением величины светлотности цвета.
 * 
 * Целевое пространство **OKLab**.\
 * Эталонный белый **D65** выставлен для обоих пространств — _калибровка не выполняется_.
 */
export const a98_rgb_into_oklab: PointReflector;

/**
 * Определяет местоположения новой точки путём выполнения афинных преобразований над компонентами аддитивной модели
 * исходного пространства **Adobe® 1998 RGB**; с последующим приведением хроматической составляющей к представлению
 * в плоской системе координат цветности и выделением величины светлотности цвета.
 * 
 * Целевое пространство **CIE 1976 Lab**, эталонный белый **D50**.\
 * Выполняется калибровка баланса белого от **D65** к **D50** в пространстве _CIE 1931 XYZ_.
 */
export const a98_rgb_into_lab: PointReflector;

/**
 * Определяет местоположения новой точки путём выполнения афинных преобразований над компонентами аддитивной модели
 * исходного пространства **ProPhoto RGB**; с последующим приведением хроматического состава к представлению
 * в плоской системе координат цветности и выделением величины светлотности цвета.
 * 
 * Целевое пространство **CIE Lab**.\
 * Эталонный белый **D50** выставлен для обоих пространств — _калибровка не выполняется_.
 */
export const prophoto_rgb_into_lab: PointReflector;

/**
 * Возвращает точку в пространстве **CIE Lab**, которая является проекцией координат пространства **CIE LCH**.\
 * Выполняется приведение полярных координат цилиндрической модели **LCh** к декартовых прямоугольным **Lab**,
 * величина светлотности копируется без изменений.
 */
export const lch_into_lab: PointReflector;

type TParams = ArrayBufferLike | Triplet<number> | ArrayLike<number>;
declare function initPointInSpace(colorspace: Space, parameters: TParams): PointInSpace | never;
declare function isPointInSpace(entity: unknown): entity is PointInSpace;

export { initPointInSpace as default, initPointInSpace, isPointInSpace };

interface CoordinateSystem extends Iterable<Dimension> {
	readonly 0: Dimension;
	readonly 1: Dimension;
	readonly 2: Dimension | undefined;
	readonly length: 2 | 3;
	readonly tgeom: 'circle' | 'plane' | 'cilinder' | 'cube';
	adapt?: (c1: number, c2: number, c3: number) => Triplet;
	entries(): Iterator<[0 | 1 | 2, Dimension]>;
	toArray(): Array<Dimension>;
}

interface PointInSpace extends Iterable<number> {
	readonly buffer: ArrayBuffer;
	readonly colorspace: SpaceID;
	readonly space: Space;

	get adapted(): IteratorObject<number>;
	get position(): IteratorObject<number>;
	equals(pins: PointInSpace, epsilon?: number): boolean;
	set(parameters: Triplet<number | string>): PointInSpace;

	readonly length: 3;
	get 0(): number;
	set 0(value: number | string);
	get 1(): number;
	set 1(value: number | string);
	get 2(): number;
	set 2(value: number | string);
}

interface PointReflector {
	name: string;
	(point: PointInSpace): PointInSpace;
}

type DimKey =
	| 'a'
	| 'b'
	| 'B'
	| 'C'
	| 'c'
	| 'G'
	| 'g'
	| 'h'
	| 'L'
	| 'R'
	| 'r'
	| 'S'
	| 'W'
	| 'x'
	| 'y'
	| 'z'
	| 'phi'
	| 'rho';

type DimID =
	| 'abscissa'
	| 'angle'
	| 'applicate'
	| 'blackness'
	| 'blue-yellow'
	| 'blue'
	| 'chroma'
	| 'green'
	| 'hue'
	| 'lightness'
	| 'ordinate'
	| 'radius'
	| 'green-red'
	| 'red'
	| 'saturation'
	| 'whiteness';

type SpaceID =
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
	| 'rgb'
	| 'srgb-linear'
	| 'srgb'
	| 'xyz-d50'
	| 'xyz-d65'
	| 'xyz';

type Space = {
	ident: SpaceID;
	CSYS: CoordinateSystem;
	whitepoint: Float64Array<ArrayBuffer>;

	/**
	 * A color appearance model (CAM) is a mathematical model that seeks to describe
	 * the perceptual aspects of human color vision, i.e. viewing conditions under which
	 * the appearance of a color does not tally with the corresponding physical measurement of the stimulus source.
	 * (In contrast, a color model defines a coordinate space to describe colors, such as the RGB and CMYK color models.)
	 */
	CAM?: CoordinateSystem;

	alias?: SpaceID;
	copyright?: string;
	description?: string;
};

type Triplet<T = number> = [T, T, T];

type Dimension = {
	$coord?: Dimension;
	ident: DimID;
	short: DimKey;

	bytes: 1 | 2 | 4 | 8;
	domain: Range;
	input?: (parameter: number, range?: Range) => number;
	output?: (value: number) => number;

	description?: string;
	tgeom?: 'altitude' | 'azimuth' | 'directed-line' | 'reference-ray';
	tcoord?: 'cartesian-coordinate-axis' | 'polar';
};