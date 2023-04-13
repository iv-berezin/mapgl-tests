import { Collector } from '../../worker/collector';
import { GeneratorContext, HandyDataKey, LineStyleLayer } from '../../expressions/types';
import { Bucket } from '../../worker/collector/bucket';
export declare type LineSolidBucket = Bucket<{
    position: Uint16Array;
    extender: Int8Array;
    normal: Int8Array;
    localID: Uint32Array;
}>;
export declare const LineGenerator: {
    symbol: "line";
    sinks: {
        solid: {
            stride: number;
            binder: (bucket: LineSolidBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, styleId: number, layer: LineStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>): void;
};
