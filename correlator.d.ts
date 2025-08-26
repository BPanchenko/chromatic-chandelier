export type BezierPoints = [p1x: number, p1y: number, p2x: number, p2y: number];

export interface CubicBezierCorrelator {
	name: string;
	cx: number;
	bx: number;
	ax: number;
	cy: number;
	by: number;
	ay: number;

	/**
	 * @param W progress [0-1]
	 * @returns sampled X value
	 */
	sampleCurveX(Y: number): number;

	/**
	 * @param X progress [0-1]
	 * @returns sampled Y value
	 */
	sampleCurveY(X: number): number;

	/**
	 * @param weight progress [0-1]
	 * @returns sampled curve derivative X value
	 */
	sampleCurveDerivativeX(weight: number): number;

	/**
	 * @param x progress [0-1]
	 * @returns solved curve X value
	 */
	solveCurveX(x: number): number;
}

export interface CubicBezieConstructor {
	/**
	 * @param p1x First point horizontal position
	 * @param p1y First point vertical position
	 * @param p2x Second point horizontal position
	 * @param p2y Second point vertical position
	 * @param name An optional function name
	 * @returns A new CubicBezier instance
	 */
	new(p1x: number, p1y: number, p2x: number, p2y: number, name?: string): CubicBezierCorrelator;
}

export type EasingName =
	| 'ease'
	| 'ease-in'
	| 'ease-out'
	| 'ease-in-out'
	| 'ease-in-circ'
	| 'ease-in-cubic'
	| 'ease-in-expo'
	| 'ease-in-out-circ'
	| 'ease-in-out-cubic'
	| 'ease-in-out-expo'
	| 'ease-in-out-quad'
	| 'ease-in-out-quart'
	| 'ease-in-out-quint'
	| 'ease-in-out-sine'
	| 'ease-in-quad'
	| 'ease-in-quart'
	| 'ease-in-quint'
	| 'ease-in-sine'
	| 'ease-out-circ'
	| 'ease-out-cubic'
	| 'ease-out-expo'
	| 'ease-out-quad'
	| 'ease-out-quart'
	| 'ease-out-quint'
	| 'ease-out-sine'
	| 'linear';

export declare const BezierPointsByName: Map<EasingName, BezierPoints>;
export declare const EaseCorrelationByName: Map<EasingName, CubicBezierCorrelator>;

/** @description https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#linear */
export declare const linear: CubicBezierCorrelator;
/** @description https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#ease */
export declare const ease: CubicBezierCorrelator;
/** @description https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#ease-in */
export declare const easeIn: CubicBezierCorrelator;
/** @description https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#ease-out */
export declare const easeOut: CubicBezierCorrelator;
/** @description https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function#ease-in-out */
export declare const easeInOut: CubicBezierCorrelator;
/** @description https://easings.net/#easeInCirc */
export declare const easeInCirc: CubicBezierCorrelator;
/** @description https://easings.net/#easeInCubic */
export declare const easeInCubic: CubicBezierCorrelator;
/** @description https://easings.net/#easeInExpo */
export declare const easeInExpo: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutCirc */
export declare const easeInOutCirc: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutCubic */
export declare const easeInOutCubic: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutExpo */
export declare const easeInOutExpo: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutQuad */
export declare const easeInOutQuad: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutQuart */
export declare const easeInOutQuart: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutQuint */
export declare const easeInOutQuint: CubicBezierCorrelator;
/** @description https://easings.net/#easeInOutSine */
export declare const easeInOutSine: CubicBezierCorrelator;
/** @description https://easings.net/#easeInQuad */
export declare const easeInQuad: CubicBezierCorrelator;
/** @description https://easings.net/#easeInQuart */
export declare const easeInQuart: CubicBezierCorrelator;
/** @description https://easings.net/#easeInQuint */
export declare const easeInQuint: CubicBezierCorrelator;
/** @description https://easings.net/#easeInSine */
export declare const easeInSine: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutCirc */
export declare const easeOutCirc: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutCubic */
export declare const easeOutCubic: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutExpo */
export declare const easeOutExpo: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutQuad */
export declare const easeOutQuad: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutQuart */
export declare const easeOutQuart: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutQuint */
export declare const easeOutQuint: CubicBezierCorrelator;
/** @description https://easings.net/#easeOutSine */
export declare const easeOutSine: CubicBezierCorrelator;

export default EaseCorrelationByName;
