import { AnchorWorld } from './elements/labelingTile';
/**
 * Класс, представляющий направляющую лейбла. Содержит методы для различных
 * операций над направляющими.
 */
export declare class LabelAxis {
    line: any;
    lengths: number[];
    angles: number[];
    finishLength: number;
    startLength: number;
    midLength: number;
    vertexCount: number;
    constructor(polyline: ArrayLike<number>, startDistance: number, totalLength: number);
    /**
     * Возвращает точку, находящуюся на длине length от начала полилинии
     * Четвертый элемент массива равен углу полилинии в этой точке.
     */
    interpolate(length: number, segmentIndex: number): AnchorWorld;
    /**
     * Возвращает индекс сегмента, который содержит точку, находящуюся на длине
     * length от начала полилинии. Индекс сегмента = индексу его второй вершины.
     *
     * TODO: линейный поиск можно заменить на бинарное разделение, тогда вместо
     * линейной трудоёмкости тут будет логарифм
     */
    getSegmentIndex(length: number): number;
}
