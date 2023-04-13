import { AttributesUnpacker } from '../../types/generators';
import { Int64 } from '../../utils/structures/int64';
import { Collector } from '../../worker/collector';
import { GeneratorContext, HandyDataKey, PolygonStyleLayer, RoadPolygonStyleLayer, HandyStyle } from '../../expressions/types';
import { IdSet } from '../../utils/structures/idSet';
import { ObjectAttributeValue } from '../../utils/objectAttributes';
import { Bucket } from '../../worker/collector/bucket';
declare function packObjectAttributes(styleId: number, layerId: number, hiddenObjectId: number | Int64, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): ObjectAttributeValue[];
export declare type PolygonFillBucket = Bucket<{
    position: Uint16Array;
    localID: Uint32Array;
}>;
export declare type PolygonStrokeBucket = Bucket<{
    position: Uint16Array;
    directionDistance: Int8Array;
}>;
export declare const PolygonGenerator: {
    symbol: "polygon";
    sinks: {
        fill: {
            stride: number;
            binder: (bucket: PolygonFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: typeof packObjectAttributes;
            unpackObjectAttributes: AttributesUnpacker<{
                styleId: number;
                layerId: number;
                hiddenObjectId: string | undefined;
                tileData: ObjectAttributeValue[];
            }>;
        };
        stroke: {
            stride: number;
            binder: (bucket: PolygonStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: typeof packObjectAttributes;
            unpackObjectAttributes: AttributesUnpacker<{
                styleId: number;
                layerId: number;
                hiddenObjectId: string | undefined;
                tileData: ObjectAttributeValue[];
            }>;
        };
    };
    generate(collector: Collector, style: HandyStyle, layer: PolygonStyleLayer | RoadPolygonStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>, dpi: number, hiddenObjectIds?: IdSet | undefined, floorId?: Int64 | undefined): void;
};
export {};
