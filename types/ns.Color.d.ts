import type { AxisID, BezierPoints } from './lib.d.ts';

declare namespace ColorNS {
	type Reference = WeakRef<object> | null;

	type TintingOptions = {
		weights: number[];
	} & (Record<'ratio-function', FunctionBody> | Record<'bezier-points', BezierPoints>);

	type ToningFunction = (weight: number) => [number, number];
	type TintingFunction = (weight: number) => number;
}

declare namespace ColorNS {

	type BlacknessCP = {
		get B(): number
		set B(value: number | string)
	}

	/** Интенсивность **синего** света  */
	type BlueCP = {
		get b(): number
		set b(intensity: number | string)
	}

	/**
	 * Chroma (Chromatic Intensity, Цветность):
	 * В теории цвета цветность (chroma) - это характеристика, описывающая степень чистоты или интенсивности цвета, то есть, насколько цвет отличается от серого, не имеющего цветности.
	 * Это количественная мера насыщенности, которая определяет, насколько цвет близок к основному спектральному цвету.
	 */
	type ChromaCP = {
		get C(): number
		set C(intensity: number | string)
	}

	/** Интенсивность **зелёного** света   */
	type GreenCP = {
		get g(): number
		set g(intensity: number | string)
	}

	/**
	 * **Hue (Оттенок, Тон)**
	 * Определяет цвет (например красный), цветовую часть Chroma без учета насыщенности.
	 * Тон представлен в виде угла от 0 до 360 градусов.
	 * 
	 */
	type HueCP = {
		get H(): number
		set H(angle: number | string)
	}

	/**
	 * Lightness Represents the brightness of a color, ranging from 0 (black) to 100 (white). 
	 */
	type LightnessCP = {
		get L(): number
		set L(value: number | string)
	}

	/** Интенсивность **красного** света  */
	type RedCP = {
		get r(): number
		set r(intensity: number | string)
	}

	/**
	 * Color-opponent dimension.
	 * Represents the red-green dimension, with positive values indicating red and negative values indicating green.
	 */
	type RedGreenCP = {
		get a(): number
		set a(dimension: string | number)
	}

	/**
	 * Saturation (Насыщенность): Определяет интенсивность цвета, от серого (0%) до чистой формы (100%).
	 */
	type SaturationCP = {
		get S(): number
		set S(intensity: number | string)
	}

	type WhitenessCP = {
		get W(): number
		set W(value: number | string)
	}

	/**
	 * Color-opponent dimension.
	 * Represents the yellow-blue dimension, with positive values indicating yellow and negative values indicating blue.
	 */
	type YellowBlueCP = {
		get b(): number
		set b(dimension: string | number)
	}

	/**
	 * RGB - аддитивная цветовая модель, описывающая способ кодирования цвета для цветовоспроизведения с помощью трёх цветов, которые принято называть основными.
	 */
	type RGBModel = RedCP & GreenCP & BlueCP
}

declare namespace ColorNS {
	interface Channel extends Iterable<number>, Record<AxisID, number> {
		get alpha(): number
		set alpha(opacity: number)
		entries(): [[AxisID, number], [AxisID, number], [AxisID, number]]
		values(): [number, number, number]
		keys(): Iterable<AxisID>
	}

	/**
	 * Цветовое пространство RGB определяется следующими характеристиками:
	 *  - Координаты цветности аддитивных основных цветов — красного, зеленого и синего.
	 *  - Цветность точки белого, которая обычно является стандартным источником света.
	 *  - Передаточная функция, также известная как кривая тонального отклика или гамма, которая отображает цветность на трехстимулные значения.
	 */
	type RGBChannel = RGBModel & Channel
	type XYZChannel = {
		x: number
		y: number
		z: number
	} & Channel

	/**
	 * The CIELAB color space, also referred to as L*a*b*, is a color space defined by the International Commission on Illumination (abbreviated CIE) in 1976.
	 */
	type LABChannel = LightnessCP & RedGreenCP & YellowBlueCP & Channel

	/**
	 * HSL может быть использован для создания цветовых гамм, где можно изменять только оттенок, сохраняя постоянными насыщенность и светлоту.
	 */
	type HSLChannel = HueCP & SaturationCP & LightnessCP & Channel

	type HWBChannel = HueCP & WhitenessCP & BlacknessCP & Channel

	type LCHChannel = LightnessCP & ChromaCP & HueCP & Channel
}

export type FunctionBody = string;

export default ColorNS;
