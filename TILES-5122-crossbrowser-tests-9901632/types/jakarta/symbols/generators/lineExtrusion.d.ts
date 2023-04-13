import { AttributesUnpacker } from '../../types/generators';
import { LineExtrusionStyleLayer, HandyDataKey, GeneratorContext } from '../../expressions/types';
import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
export declare type LineExtrusionFillBucket = Bucket<{
    position: Uint16Array;
    normal: Int8Array;
    demPosition: Int16Array;
}>;
export declare type LineExtrusionTopStrokeBucket = Bucket<{
    position: Uint16Array;
    directionDistance: Int8Array;
    demPosition: Int16Array;
}>;
export declare type LineExtrusionSideStrokeBucket = Bucket<{
    position: Uint16Array;
    distance: Int16Array;
    normals: Int8Array;
    direction: Int8Array;
    demPosition: Int16Array;
}>;
export declare const LineExtrusionGenerator: {
    symbol: "lineExtrusion";
    sinks: {
        fill: {
            stride: number;
            binder: (bucket: LineExtrusionFillBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<import("../../utils/objectAttributes").ObjectAttributes>;
        };
        topStroke: {
            stride: number;
            binder: (bucket: LineExtrusionTopStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<import("../../utils/objectAttributes").ObjectAttributes>;
        };
        sideStroke: {
            stride: number;
            binder: (bucket: LineExtrusionSideStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: AttributesUnpacker<import("../../utils/objectAttributes").ObjectAttributes>;
        };
    };
    generate(collector: Collector, styleId: number, layer: LineExtrusionStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>): void;
};
