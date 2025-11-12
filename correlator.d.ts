import { TRichTuple } from "./toolkit";
import { IPair, Pair, Quad, Triplet } from "./types";

/**
 * @param AdjustableWeights interpolation amount, in the range [0-1], along the direction
 */
type InterpolationFunction<T extends Pair | Triplet | Quad = Triplet> = (
	Direction: [Base: T, Terminal: T],
	ControlPoints: [T, T],
	AdjustableWeights: Iterable<number>
) => IteratorObject<TRichTuple>;

type EasingFunction = (TSeries: Iterable<number>) => ReturnType<InterpolationFunction<Pair>>;

export enum XCorrID {
	Ease = 'ease',
	Linear = 'line',
	In = 'ease-in',
	InCirc = 'ease-in-circ',
	InCubic = 'ease-in-cubic',
	InExpo = 'ease-in-expo',
	InOut = 'ease-InOut',
	InOutCirc = 'ease-InOut-circ',
	InOutCubic = 'ease-InOut-cubic',
	InOutExpo = 'ease-InOut-expo',
	InOutQuad = 'ease-InOut-quad',
	InOutQuart = 'ease-InOut-quart',
	InOutQuint = 'ease-InOut-quint',
	InOutSine = 'ease-InOut-sine',
	InQuad = 'ease-in-quad',
	InQuart = 'ease-in-quart',
	InQuint = 'ease-in-quint',
	InSine = 'ease-in-sine',
	Out = 'ease-out',
	OutCirc = 'ease-out-circ',
	OutCubic = 'ease-out-cubic',
	OutExpo = 'ease-out-expo',
	OutQuad = 'ease-out-quad',
	OutQuart = 'ease-out-quart',
	OutQuint = 'ease-out-quint',
	OutSine = 'ease-out-sine',
}

export const derive: (cp1: number, cp2: number, ratio: number) => number;

/**
 * **Интерполяция кривой Безье:**\
 * Метод построения плавной кривой, проходящей через или вблизи заданных точек,\
 * используя математические уравнения, основанные на контрольных точках.
 * 
 * @see https://en.wikipedia.org/wiki/B%C3%A9zier_curve
 */
export const performBezierInterpolation: InterpolationFunction;

/**
 * **Интерполяция Эрмита:**\
 * Метод полиномиальной интерполяции, который находит полином, соответствующий значениям функции\
 * и её производных в заданных точках.
 * 
 * @see https://en.wikipedia.org/wiki/Cubic_Hermite_spline
 */
export const performHermiteInterpolation: InterpolationFunction;

export const XCorrCTR: Map<XCorrID, IPair<IPair>>;
export const XEaseFN: Map<XCorrID, EasingFunction>;