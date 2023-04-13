import { EndingType, ObjectEndingType } from './loftedLineTypes';
import { DashedLineStrokeBucket, Context as DashedLineContext } from '../dashedLine';
import { ArrowStrokeBucket, Context as ArrowContext } from '../arrow';
/**
 * Генерация широкой линии со скруглениями (без самоналожений) (оригинальный комментарий из исходников Zenith)
 * Результирующие вершины и индексы возвращаются путем вызова соответствующих callback'ов
 *
 * points                       точки исходной полилинии
 * bothObjectEndingsType        тип окончаний линии
 * firstPointType               является ли первая точка разрезом по тайлу:
 *                                  - если это разрез и тип окончания круглый, то сгенерируется часть кружочка
 *                                  - если не разрез, то полный кружок или плоский конец в зависимости от типа
 *                                    окончания
 * lastPointType                является ли последняя точка разрезом по тайлу:
 *                                  - если это разрез, то сгенерируется плоский конец
 *                                  - если не разрез, то полный кружок или плоский конец в зависимости от типа
 *                                    окончания
 * previousVertex               предыдущая вершина, если начало является разрезом по тайлу
 * nextVertex                   следующая вершина, если конец является разрезом по тайлу
 *
 * appendVertex                 функция-callback добавления вершины в массив атрибутов; должена принимать 4
 *                              аргумента:
 *                                  - индекс исходной вершины
 *                                  - исходную позицию вершины
 *                                  - текстурные координаты "кружочка"
 *                                  - смещение вершины моноширинной линии
 * appendIndex                  функция-callback добавления индекса, должна принимать на вход индекс в массиве
 *                              атрибутов
 */
/**
 * Generates a broad (wide) line with rounding (without self-overlays)
 * @param count count
 * @param px px
 * @param py py
 * @param endingsType Type of line endings
 * @param firstPointType Is the first point on a tile's cut
 * @param lastPointType Is the last point on a tile's cut
 * @param xPrev Previous vertex (if the beginning is on a tile's cut)
 * @param yPrev Previous vertex (if the beginning is on a tile's cut)
 * @param xNext Next vertex (if the ending is on a tile's cut)
 * @param yNext Next vertex (if the ending is on a tile's cut)
 * @param newCtx Context object
 * @param newRef Buffer object
 */
export declare function generateNonInterlappingLoftedLine(px: ArrayLike<number>, py: ArrayLike<number>, count: number, endingsType: ObjectEndingType, firstPointType: EndingType, lastPointType: EndingType, xPrev: number, yPrev: number, xNext: number, yNext: number, newCtx: DashedLineContext | ArrowContext, newRef: DashedLineStrokeBucket | ArrowStrokeBucket): void;
