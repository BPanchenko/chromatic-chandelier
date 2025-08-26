import type { Space, UniqSpaceID } from './manual';
import type { Triplet } from './types';

declare abstract class ColorValue {
    constructor(colorspace: Space, parameters: Triplet);
    in(ident: UniqSpaceID): Triplet;
    to(ident: UniqSpaceID): ColorValue;
    toString(): string;
    get space(): Space;
    get xyz(): Triplet;
}

declare abstract class ColorAttributes extends ColorValue {
    constructor(colorspace: Space, parameters: Triplet);
    get saturation(): number;
    get lightness(): number;
    get darkness(): number;
    get brightness(): number;
    get luminance(): number;
}

export class Color extends ColorAttributes {
    constructor(colorspace: Space, parameters: Triplet<number>);
}