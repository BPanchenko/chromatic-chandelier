export type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn';

export interface IPair<T extends TTupleCP = number> extends IteratorObject<T> {
	length: 2;
}
export interface IQuad<T extends TTupleCP = number> extends IteratorObject<T> {
	length: 4;
}
export interface ITriplet<T extends TTupleCP = number> extends IteratorObject<T> {
	length: 3;
}
export type TTuple<T extends TTupleCP = number> = IPair<T> | ITriplet<T> | IQuad<T>;
export type TTupleCP = boolean | number | string | null | Iterable<TTupleCP>;

/**
 * @deprecated
 */
export type Pair<T = number> = [T, T];
/**
 * @deprecated
 */
export type Quad<T = number> = [T, T, T, T];
/**
 * @deprecated
 */
export type Triplet<T = number> = [T, T, T];