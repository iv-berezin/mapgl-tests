import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
import { Int64 } from '../../utils/structures/int64';
import { BuildingModelStyleLayer, GeneratorContext, HandyDataKey } from '../../expressions/types';
export declare const MODEL_DEM_POSITION: number[];
export declare type ModelFillBucket = Bucket<{
    position: Uint16Array;
    texCoords: Uint16Array;
    localID: Uint32Array;
    demPosition: Int16Array;
}>;
export declare type ModelStrokeBucket = Bucket<{
    position: Uint16Array;
    directionDistance: Int8Array;
    demPosition: Int16Array;
}>;
export declare const BuildingModelGenerator: {
    symbol: "buildingModel";
    sinks: {
        fill: {
            stride: number;
            binder: (bucket: ModelFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, texture: number, matrix: number[], id: number | Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                texture: number;
                id: string | undefined;
                matrix: number[];
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
        stroke: {
            stride: number;
            binder: (bucket: ModelStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, matrix: number[], id: number | Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                id: string | undefined;
                matrix: number[];
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    processSubmesh(styleId: number, layer: BuildingModelStyleLayer, ctx: GeneratorContext<any>, collector: Collector, vertices: Uint16Array, indices: Uint16Array, drawMode: number, textureIndex: number, matrix: number[]): void;
    processOuterEdge(styleId: number, layer: BuildingModelStyleLayer, ctx: GeneratorContext<any>, collector: Collector, vertices: Uint16Array, indices: Uint16Array, matrix: number[]): void;
};
