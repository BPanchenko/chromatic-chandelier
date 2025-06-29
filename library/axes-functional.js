/**
 * @module fixtures/properties.js
 * @import SpaceNS from '../types/ns.Space.js'
 */

export {
	fromCoordinate,
	fromParameter, parseCSSParameter, fromParameter as toCoordinate, fromCoordinate as toParameter, toString
};

/**
 * @this {SpaceNS.Axis}  
 * @param {number} coordinate 
 * @returns {number}
 */
function fromCoordinate(coordinate) {
	return parseFloat(this.scale.invert(coordinate).toPrecision(6));
}

/**
 * @this {SpaceNS.Axis}  
 * @param {number | string} parameter 
 * @returns {number}
 */
function fromParameter(parameter) {
	return this.scale(parseCSSParameter(parameter));
}

/**
 * @param {number | string} parameter 
 * @returns {number}
 */
function parseCSSParameter(parameter) {
	return 'number' === typeof parameter
		? parameter
		: ('none' === parameter
			? 0
			: parseFloat(parameter));
}

/**
 * @this {SpaceNS.Axis}
 * @returns {string}
 */
function toString() {
	return [
		`${this.ident}-Axis`,
		`Dimension = ${this.scale.range.min} .. ${this.scale.range.max}`,
		`Values = ${this.scale.domain.min} .. ${this.scale.domain.max}`,
	].join('; ')
}