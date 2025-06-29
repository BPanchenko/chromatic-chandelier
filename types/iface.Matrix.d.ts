interface MatrixBuffer extends Iterable<number> {
	readonly [key: number]: number;
	readonly length: 9;
}

type MatrixTuple = Float64Array<ArrayBufferLike> & [
	m00: number,
	m01: number,
	m02: number,
	m10: number,
	m11: number,
	m12: number,
	m20: number,
	m21: number,
	m22: number,
]

interface Matrix extends MatrixTuple {
	clone(): Matrix;

	/**
	 * Call callback function on each its element
	 * @param cb callback function
	 * @returns itself
	 */
	each(callback: (element: number) => unknown): Matrix;
	each(callback: (element: number, index: number) => unknown): Matrix;
	each(callback: (element: number, index: number, matrix: Matrix) => unknown): Matrix;

	/**
	 * Определи́тель (детермина́нт) в линейной алгебре — скалярная величина,
	 * которая характеризует ориентированное «растяжение» или «сжатие» многомерного евклидова пространства
	 * после преобразования матрицей; имеет смысл только для квадратных матриц.
	 * 
	 * Стандартные обозначения определителя матрицы `A` — `det(A) , |A| , Δ(A)`.
	 * 
	 * Определитель квадратной матрицы `A` размеров `n × n`, заданной над коммутативным кольцом `R`,
	 * является элементом кольца `R`. Эта величина определяет многие свойства матрицы `A`, в частности,
	 * матрица обратима тогда и только тогда, когда её определитель является обратимым элементом кольца `R`.
	 * 
	 * В случае, когда `R` — поле, определитель матрицы `A` равен нулю тогда и только тогда,
	 * когда ранг матрицы `A` меньше `n`, то есть когда системы строк и столбцов матрицы `A` являются линейно зависимыми.
	 * 
	 * https://en.wikipedia.org/wiki/Determinant
	 */
	determinant(): number;

	/**
	 * Обра́тная ма́трица — такая матрица `A⁻¹`, при умножении которой на исходную матрицу `A` получается единичная матрица `E`: `AA⁻¹=A⁻¹A=E`.
	 * 
	 * https://en.wikipedia.org/wiki/Invertible_matrix
	 */
	invert(): Matrix | never;

	/**
	 * Update its elements to the given values
	 *
	* @param m00 Element in column 0, row 0 position (index 0)
	* @param m01 Element in column 0, row 1 position (index 1)
	* @param m02 Element in column 0, row 2 position (index 2)
	* @param m10 Element in column 1, row 0 position (index 3)
	* @param m11 Element in column 1, row 1 position (index 4)
	* @param m12 Element in column 1, row 2 position (index 5)
	* @param m20 Element in column 2, row 0 position (index 6)
	* @param m21 Element in column 2, row 1 position (index 7)
	* @param m22 Element in column 2, row 2 position (index 8)
	* @returns itself
	 */
	update(
		m00?: number,
		m01?: number,
		m02?: number,
		m10?: number,
		m11?: number,
		m12?: number,
		m20?: number,
		m21?: number,
		m22?: number
	): Matrix;
	readonly length: 9
}

export type {
	Matrix, MatrixBuffer, MatrixTuple
};

