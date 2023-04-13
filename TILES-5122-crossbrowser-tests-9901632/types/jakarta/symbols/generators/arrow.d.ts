import { Bucket } from '../../worker/collector/bucket';
import { LineType } from './helpers/loftedLineTypes';
import { Collector } from '../../worker/collector';
import { ArrowStyleLayer, GeneratorContext, HandyDataKey } from '../../expressions/types';
declare function getContextObject(vertices: Array<ArrayLike<number>>, count: number, totalLength: number, identifyIndex: number): {
    type: LineType.Entrance;
    offsetMultiplier: number;
    cDist: number;
    oLen: number;
    px: ArrayLike<number>;
    py: ArrayLike<number>;
    count: number;
    localID: number;
};
export declare type Context = ReturnType<typeof getContextObject>;
export declare type ArrowStrokeBucket = Bucket<{
    position: Uint16Array;
    segmentEnd: Uint16Array;
    texExtender: Int8Array;
    arrowExtender: Int8Array;
    extender: Int16Array;
    direction: Int16Array;
    vertexDistance: Float32Array;
    objectLength: Float32Array;
    type: Float32Array;
    localID: Uint32Array;
}>;
export declare const ArrowGenerator: {
    symbol: "arrow";
    sinks: {
        stroke: {
            stride: number;
            binder: (bucket: ArrowStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, count: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                isLongArrow: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate: (collector: Collector, styleId: number, layer: ArrowStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>) => void;
};
export {};
