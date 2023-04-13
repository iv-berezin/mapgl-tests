/**
 * Конвертирует порядковый номер вершины контура в порядковый номер вершины полигона,
 * который изначально представлен в виде полосы треугольников
 * (см. https://en.wikipedia.org/wiki/Triangle_strip).
 * Используется при составлении контуров полигонов в тайлах 2ГИС и стенах этажей,
 * полигоны в которых представлены как Triangle strip
 * @param index Индекс вершины
 * @param count Количество вершин
 */
export declare function contourIndexToStripIndex(index: number, count: number): number;
