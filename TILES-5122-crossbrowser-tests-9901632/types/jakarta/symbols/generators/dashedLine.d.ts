import { LineType } from './helpers/loftedLineTypes';
import { DashedLineStyleLayer, GeneratorContext, HandyDataKey } from '../../expressions/types';
import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
declare function getContextObject(componentDistanceStart: number, objectLength: number, identifyIndex: number): {
    type: LineType.Striped;
    cDist: number;
    oLen: number;
    localID: number;
    offsetMultiplier: number;
};
export declare type Context = ReturnType<typeof getContextObject>;
export declare type DashedLineStrokeBucket = Bucket<{
    position: Uint16Array;
    extender: Int16Array;
    texExtender: Int8Array;
    vertexDistance: Float32Array;
    componentDistance: Float32Array;
    objectLength: Float32Array;
    localID: Uint32Array;
}>;
export declare const DashedLineGenerator: {
    symbol: "dashedLine";
    sinks: {
        stroke: {
            stride: number;
            binder: (bucket: DashedLineStrokeBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, styleId: number, layer: DashedLineStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>): void;
};
export {};
