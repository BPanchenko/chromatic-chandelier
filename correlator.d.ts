import { BezierPoints, CubicBezierCorrelator, EasingName } from "../math-gl/lib.ease-correlation.ts";

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
