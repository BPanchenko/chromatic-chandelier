import type { Range, RangeTuple } from '../math-gl';
interface ScalingFunction {
	(value: number | string): number;
	invert(value: number | string): number;
	readonly domain: Range;
	readonly range: Range;
}
export { initScale as default, initScale };
export type { ScalingFunction };
declare function initScale(external?: RangeTuple | Range, internal?: RangeTuple | Range): ScalingFunction;
