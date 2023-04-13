import { Bucket } from '../../worker/collector/bucket';
import { Collector } from '../../worker/collector';
import { CircleStyleLayer, GeneratorContext, HandyDataKey } from '../../expressions/types';
export declare type CircleMarkerFillBucket = Bucket<{
    position: Uint16Array;
    extender: Int16Array;
    localID: Uint32Array;
}>;
export declare const CircleMarkerGenerator: {
    symbol: "circle";
    sinks: {
        /**
         * Схема буфера прохода
         *
         * position      extender      localId       |
         * 0  1  2  3    4  5  6  7    8  9  10 11   |=> stride = 12 bytes        i  — порядковый номер байта в буфере
         * [x][x][y][y]  [x][x][y][y]  [i][i][i][i]  |                            [] — один байт буфера
         */
        fill: {
            stride: number;
            binder: (bucket: CircleMarkerFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, styleId: number, layer: CircleStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>): void;
};
