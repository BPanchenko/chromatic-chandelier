import { IPair, ITriplet } from "./types";

/**
 * @param AdjustableWeights interpolation amount, in the range [0-1], along the direction
 */
type InterpolationFunction<T = IPair | ITriplet> = (
	Direction: [Base: T, Terminal: T],
	ControlPoints: IPair<Iterable<number>>,
	AdjustableWeights: Iterable<number>
) => Iterable<Iterable<number>>;

type EasingFunction = (TSeries: Iterable<number>) => ReturnType<InterpolationFunction>;

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

export const performBezierInterpolation: InterpolationFunction;
export const performHermiteInterpolation: InterpolationFunction;
export const XCorrCTR: Map<XCorrID, IPair<IPair>>;
export const XEaseFN: Map<XCorrID, EasingFunction>;