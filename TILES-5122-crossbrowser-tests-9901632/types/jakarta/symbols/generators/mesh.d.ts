import { TileCoords } from '../../';
import { GeneratorContext, HandyDataKey, MeshStyleLayer } from '../../expressions/types';
import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
export declare type MeshFillBucket = Bucket<{
    position: Uint16Array;
    normal: Int8Array;
    localID: Uint32Array;
    demPosition: Int16Array;
}>;
export declare type MeshTextureBucket = Bucket<{
    position: Uint16Array;
    normal: Int8Array;
    textCoord: Uint16Array;
    localID: Uint32Array;
    demPosition: Int16Array;
}>;
export declare const MeshGenerator: {
    symbol: "mesh";
    sinks: {
        fill: {
            stride: number;
            binder: (bucket: MeshFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
        raster: {
            stride: number;
            binder: (bucket: MeshTextureBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, textureIndex: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                textureIndex: import("../../utils/objectAttributes").ObjectAttributeValue;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    /** Генерирует объекты Mesh из Triangle strip */
    generate(collector: Collector, styleId: number, layer: MeshStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>, tileCoords: TileCoords, demPosition?: number[] | undefined): void;
};
