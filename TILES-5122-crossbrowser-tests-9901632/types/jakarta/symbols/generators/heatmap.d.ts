import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
import { GeneratorContext, HeatmapStyleLayer } from '../../expressions/types';
export declare type HeatmapFillBucket = Bucket<{
    position: Float32Array;
}>;
export declare type HeatmapFramebufferBucket = Bucket<{
    position: Uint16Array;
    weight: Float32Array;
    widen: Int8Array;
}>;
/**
 * Конфиг проходов генератора объекта Rect
 */
export declare const HeatmapGenerator: {
    symbol: "heatmap";
    sinks: {
        /**
         * Схема буфера прохода
         *
         * position     |
         * 0  1  2  3  4  5  6  7   |=> stride = 8 bytes             i — порядковый номер байта в буфере
         * [x][x][x][x][y][y][y][y] |                                [-] — один байт буфера, 8-битное число
         */
        fill: {
            stride: number;
            binder: (bucket: HeatmapFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, textureIndex: number, rampTextureIndex: number) => number[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                textureIndex: number;
                rampTextureIndex: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
        /**
         * Схема буфера прохода
         *
         * position      weight        widen         |
         * 0  1  2  3    4  5  6  7    8  9  10 11   |=> stride = 12 bytes            i — порядковый номер байта в буфере
         * [x][x][y][y]  [w][w][w][w]  [x][y][-][-]  |                                [-] — один байт буфера, 8-битное число
         */
        framebuffer: {
            stride: number;
            binder: (bucket: HeatmapFramebufferBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number) => number[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, styleId: number, layer: HeatmapStyleLayer, vertices: Array<ArrayLike<number>>, ctx: GeneratorContext<any>): void;
    generateTexture(collector: Collector, styleId: number, layer: HeatmapStyleLayer, textureIndex: number, rampTextureIndex: number): void;
};
