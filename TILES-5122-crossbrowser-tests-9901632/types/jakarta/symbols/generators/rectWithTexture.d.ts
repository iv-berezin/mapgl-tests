import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
import { RasterStyleLayer } from '../../expressions/types';
export declare type RasterFillBucket = Bucket<{
    position: Uint16Array;
    txtrCoords: Uint16Array;
}>;
/**
 * Конфиг проходов генератора объекта Raster Rect
 */
export declare const RasterGenerator: {
    symbol: "raster";
    sinks: {
        /**
         * Схема буфера вершин Bucket['elements']['buffer'] и view-массивов над ним для прохода fill.
         *
         * position      txtrCoords          |
         * 0  1  2  3    4  5  6  7          |=> stride = 8 bytes             0 — порядковый номер байта в буфере
         * [x][x][y][y]  [x][x][y][y]        |   [-] — один байт буфера, 8-битное число
         *
         * view-position
         * 0     1       2     3       4     5       6     7
         * [x0--][y0--]  [----][----]  [x1--][y1--]  [----][----]  …    [----] — один элемент view-массива position размером 2 байта
         *
         * view-txtrCoords
         * offset 4 →    0             1             2
         *               [x0--][y0--]  [----][----]  [x1--][y1--]  [----][----] — один элемент view-массива txtrCoords размером 2 байта
         */
        fill: {
            stride: number;
            binder: (bucket: RasterFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, textureIndex: number): number[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                textureIndex: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, vertices: Array<ArrayLike<number>>, styleId: number, layer: RasterStyleLayer, textureIndex: number): void;
};
