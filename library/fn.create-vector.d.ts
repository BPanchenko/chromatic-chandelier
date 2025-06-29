import type { Vector } from '../types/iface.Vector';

export declare const isVector: (value: unknown) => value is Vector;
export declare function createVector(x?: number, y?: number, z?: number): Vector;
export default createVector
