/// <reference types="@2gis/gl-matrix" />
import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
import { HandyDataKey, GltfModelStyleLayer, GeneratorContext, HandyStyle } from '../../expressions/types';
import { TileCoords } from '../../types';
declare type ModelAnchorBucket = Bucket<{
    position: Uint16Array;
    localID: Uint32Array;
}>;
declare type ModelInstancesBucket = Bucket<{
    position: Uint16Array;
    offset: Float32Array;
    scale: Float32Array;
    rotate: Float32Array;
    localID: Uint32Array;
}>;
/**
 * Конфиг проходов генератора объекта gltf-model
 */
export declare const GltfModelGenerator: {
    symbol: "gltfModel";
    sinks: {
        anchor: {
            stride: number;
            binder: (bucket: ModelAnchorBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>, mapPointCenter: Vec2): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                name: import("../../utils/objectAttributes").ObjectAttributeValue;
                modelSrc: import("../../utils/objectAttributes").ObjectAttributeValue;
                buildingId: import("../../utils/objectAttributes").ObjectAttributeValue;
                lngLat: import("../../utils/objectAttributes").ObjectAttributeValue;
                lngLatDirection: import("../../utils/objectAttributes").ObjectAttributeValue;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
        instances: {
            stride: number;
            binder: (bucket: ModelInstancesBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, modelId: number, linkedIds: string[], dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                modelId: import("../../utils/objectAttributes").ObjectAttributeValue;
                linkedIds: import("../../utils/objectAttributes").ObjectAttributeValue;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
        fill: {
            stride: number;
            binder: (_bucket: Bucket<any>, _buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, style: HandyStyle, layer: GltfModelStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>, tileCoords: TileCoords): void;
    generateInstanced(collector: Collector, style: HandyStyle, layer: GltfModelStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>, tileCoords: TileCoords, modelsPath?: string | undefined): void;
};
export {};
