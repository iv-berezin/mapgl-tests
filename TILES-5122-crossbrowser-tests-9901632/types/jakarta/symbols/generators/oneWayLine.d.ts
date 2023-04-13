import { Label } from '../../worker/labeling/label';
import { Bucket } from '../../worker/collector/bucket';
export declare type OneWayLineRasterBucket = Bucket<{
    position: Uint16Array;
    direction: Int8Array;
    widenDirection: Int8Array;
}>;
export declare const OneWayLineGenerator: {
    symbol: "oneWayLine";
    sinks: {
        raster: {
            stride: number;
            binder: (bucket: OneWayLineRasterBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (label: Label, animDirection: number) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes: (attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]) => {
                styleId: number;
                layerId: number;
                animDirection: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    processElement(_metaStyle: import("../../expressions/types").HandyStyle, collector: import("../../worker/collector").Collector, element: import("../../worker/labeling/elements/labelingTile").LabelingTileElement, animDirection: number, _pixelRatio: number, _state: import("../../types").LabelingState, tileInfo: import("../../types").TileInfo): void;
    getLabelingInfo(): void;
};
