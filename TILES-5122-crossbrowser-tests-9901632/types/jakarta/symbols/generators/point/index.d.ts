/// <reference types="@2gis/gl-matrix" />
import { AnchorWorld, LabelingTileElement } from '../../../worker/labeling/elements/labelingTile';
import { Collector } from '../../../worker/collector';
import { Label } from '../../../worker/labeling/label';
import { LabelingState } from '../../../types';
import { Bucket } from '../../../worker/collector/bucket';
import { HandyStyle, PointStyleLayer } from '../../../expressions/types';
import { Raster } from '../../../types/styles';
import { FullTextMetrics } from '../../../utils/fonts';
import { StyleStretchableIconConfig } from '../../../types/publicStyles';
import { Camera } from '../../../map/camera';
export declare const enum LabelIndex {
    /** Подпись на иконке */
    Icon = 0,
    /** Первая текстовая подпись */
    First = 1,
    /** Вторая текстовая подпись */
    Second = 2
}
export declare type PointRasterBucket = Bucket<{
    position: Uint16Array;
    cornerOffset: Int16Array;
    texCoords: Uint16Array;
    scales: Int16Array;
    localID: Uint32Array;
}>;
export declare type PointTextBucket = Bucket<{
    position: Uint16Array;
    cornerOffset: Int16Array;
    texCoords: Uint16Array;
    localID: Uint32Array;
}>;
export declare const PointGenerator: {
    symbol: "point";
    sinks: {
        raster: {
            /**
             * Схема буфера прохода
             *
             * position                    cornerOffset  texCoords     scales       localId      |
             * 0  1  2  3    3  4  5  6    8  9  10 11   12 13 14 15   16 17 18 19  20 21 22 23  |=> stride = 24 bytes     0   — порядковый номер байта в буфере
             * [x][x][y][y]  [z][z][-][-]  [x][x][y][y]  [x][x][y][y]  [n][n][n][n] [i][i][i][i] |                         []  — один байт буфера, 8-битное число
             */
            stride: number;
            binder: (bucket: PointRasterBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (label: Label, animDirection: number, atlasIndex: number) => import("../../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                animDirection: number;
                atlasIndex: number;
                tileData: import("../../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
        text: {
            /**
             * Схема буфера прохода
             *
             * position                    cornerOffset  texCoords     localId      |
             * 0  1  2  3    3  4  5  6    8  9  10 11   12 13 14 15   16 17 18 19  |=> stride = 20 bytes     0   — порядковый номер байта в буфере
             * [x][x][y][y]  [z][z][-][-]  [x][x][y][y]  [x][x][y][y]  [i][i][i][i] |                         []  — один байт буфера, 8-битное число
             */
            stride: number;
            binder: (bucket: PointTextBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (label: Label, animDirection: number, range: number, offsets: Vec2, labelIndex: LabelIndex, fontIndex: number) => import("../../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                animDirection: number;
                range: number;
                offsetX: number;
                offsetY: number;
                labelIndex: LabelIndex;
                fontIndex: number;
                tileData: import("../../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    processElement(style: HandyStyle, collector: Collector, element: LabelingTileElement, animDirection: number, pixelRatio: number, state: LabelingState, tileInfo: import("../../../types").TileInfo): void;
    getLabelingInfo(label: Label, anchorWorld: AnchorWorld, style: HandyStyle, state: LabelingState, camera: Camera, pixelRatio: number): void;
};
export declare function generateTextElement(collector: Collector, label: Label, labelIndex: LabelIndex, textMetrics: FullTextMetrics, tilePoint: Vec3, animDirection: number, offsets: Vec2, layer: PointStyleLayer, fontIndex: number): void;
/**
 * Генерирует иконку с размерами растра Raster как есть, без растяжки.
 */
export declare function generateNotStretchableIconElement(collector: Collector, label: Label, anchor: Vec3, animDirection: number, raster: Raster): void;
/**
 * Генерирует иконку, растягивая ее до размеров targetW и targetH
 * с учетом конфигов растяжки stretchX и stretchY со сдвигами
 * offsetX и offsetY соответственно, причем все величины должны быть
 * переданы с учетом pixelRatio, в том числе и конфиги растяжки.
 */
export declare function generateIconElement(collector: Collector, label: Label, anchor: Vec3, animDirection: number, raster: Raster, targetW: number, targetH: number, offsetX: number, offsetY: number, stretchX?: StyleStretchableIconConfig['stretchX'], stretchY?: StyleStretchableIconConfig['stretchY']): void;
