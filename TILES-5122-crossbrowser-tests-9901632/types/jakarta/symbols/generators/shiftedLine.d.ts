import { Collector } from '../../worker/collector';
import { GeneratorContext, HandyDataKey, ShiftedLineStyleLayer } from '../../expressions/types';
import { Bucket } from '../../worker/collector/bucket';
export declare type ShiftedLineSolidBucket = Bucket<{
    position: Uint16Array;
    extender: Int8Array;
    normal: Int8Array;
    shift: Float32Array;
}>;
export declare const ShiftedLineGenerator: {
    symbol: "shiftedLine";
    sinks: {
        solid: {
            stride: number;
            binder: (bucket: ShiftedLineSolidBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    generate(collector: Collector, styleId: number, layer: ShiftedLineStyleLayer, ctx: GeneratorContext<any>, vertices: Array<ArrayLike<number>>): void;
};
