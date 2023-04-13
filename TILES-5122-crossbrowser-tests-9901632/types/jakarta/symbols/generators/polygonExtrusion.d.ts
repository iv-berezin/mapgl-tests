/// <reference types="@2gis/gl-matrix" />
import { Int64 } from '../../utils/structures/int64';
import { AttributesUnpacker } from '../../types/generators';
import { Bucket } from '../../worker/collector/bucket';
import { Collector } from '../../worker/collector';
import { GeneratorContext, HandyDataKey, PolygonExtrusionStyleLayer } from '../../expressions/types';
import { IdSet } from '../../utils/structures/idSet';
import { ObjectAttributeValue } from '../../utils/objectAttributes';
export declare type PolygonExtrusionFillBucket = Bucket<{
    position: Uint16Array;
    normal: Int8Array;
    localID: Uint32Array;
    demPosition: Int16Array;
}>;
export declare type PolygonExtrusionSideStrokeBucket = Bucket<{
    position: Uint16Array;
    distance: Int16Array;
    normals: Int8Array;
    direction: Int8Array;
    demPosition: Int16Array;
}>;
export declare type PolygonExtrusionTopStrokeBucket = Bucket<{
    position: Uint16Array;
    directionDistance: Int8Array;
    demPosition: Int16Array;
}>;
export declare const PolygonExtrusionGenerator: {
    symbol: "polygonExtrusion";
    sinks: {
        sideFill: {
            stride: number;
            binder: (bucket: PolygonExtrusionFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<{
                styleId: number;
                layerId: number;
                hiddenObjectId: string | undefined;
                tileData: ObjectAttributeValue[];
            }>;
        };
        topFill: {
            stride: number;
            binder: (bucket: PolygonExtrusionFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<{
                styleId: number;
                layerId: number;
                hiddenObjectId: string | undefined;
                tileData: ObjectAttributeValue[];
            }>;
        };
        sideStroke: {
            stride: number;
            binder: (bucket: PolygonExtrusionSideStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<{
                styleId: number;
                layerId: number;
                hiddenObjectId: string | undefined;
                tileData: ObjectAttributeValue[];
            }>;
        };
        topStroke: {
            stride: number;
            binder: (bucket: PolygonExtrusionTopStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, hiddenObjectId: Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<{
                styleId: number;
                layerId: number;
                hiddenObjectId: string | undefined;
                tileData: ObjectAttributeValue[];
            }>;
        };
    };
    generate(collector: Collector, styleId: number, layer: PolygonExtrusionStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>, generateContours: boolean, hiddenObjectIds?: IdSet | undefined, demPosition?: Vec2 | undefined, floorId?: Int64 | undefined): void;
};
