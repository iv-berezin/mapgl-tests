import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
import { GeneratorContext, HandyDataKey, PolygonStyleLayer } from '../../expressions/types';
/**
 * Недогенератор, который существует только для примера, как писать свои.
 * Поскольку для него не существует отдельного стилевого слоя, то он мимикрирует под Polygon.
 * Если писать свой новый генератор, надо создавать новый стилевой слой без какой-либо мимикрии.
 */
export declare type RectFillBucket = Bucket<{
    position: Uint16Array;
    localID: Uint32Array;
}>;
/**
 * Конфиг проходов генератора объекта Rect
 */
export declare const RectGenerator: {
    symbol: "polygon";
    sinks: {
        /**
         * Схема буфера вершин Bucket['elements']['buffer'] и view-массивов над ним для прохода fill.
         *
         * position      localId       |
         * 0  1  2  3    4  5  6  7    |=> stride = 8 bytes             0 — порядковый номер байта в буфере
         * [x][x][y][y]  [i][i][i][i]  |                                [-] — один байт буфера, 8-битное число
         *
         * view-position
         * 0     1       2     3       4     5       6     7
         * [x0--][y0--]  [----][----]  [x1--][y1--]  [----][----]  …    [----] — один элемент view-массива position размером 2 байта
         *
         * view-localID
         * offset 4 →    0             1             2
         *               [id0-------]  [----------]  [id1-------]  …    [----------] — один элемент view-массива localID размером 4 байта
         */
        fill: {
            stride: number;
            binder: (bucket: RectFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, styleId: number, layer: PolygonStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>): void;
};
