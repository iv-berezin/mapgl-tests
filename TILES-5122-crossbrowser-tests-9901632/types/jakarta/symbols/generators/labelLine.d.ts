import { Bucket } from '../../worker/collector/bucket';
import { LabelingGetLabelingInfo } from '../../types/generators';
import { Label } from '../../worker/labeling/label';
export declare type LabelLineRasterBucket = Bucket<{
    position: Uint16Array;
    texCoords: Uint16Array;
    cornerOffset: Float32Array;
    styleZoomLimits: Float32Array;
}>;
export declare const LabelLineGenerator: {
    symbol: "labelLine";
    sinks: {
        raster: {
            stride: number;
            binder: (bucket: LabelLineRasterBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes: (label: Label, animDirection: number, range: number, fontIndex: number) => import("../../utils/objectAttributes").ObjectAttributeValue[];
            unpackObjectAttributes(attrs: [number, number, ...import("../../utils/objectAttributes").ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                animDirection: number;
                range: number;
                fontIndex: number;
                tileData: import("../../utils/objectAttributes").ObjectAttributeValue[];
            };
        };
    };
    processElement(style: import("../../expressions/types").HandyStyle, collector: import("../../worker/collector").Collector, element: import("../../worker/labeling/elements/labelingTile").LabelingTileElement, animDirection: number, _pixelRatio: number, state: import("../../types").LabelingState, tileInfo: import("../../types").TileInfo): void;
    getLabelingInfo(): void;
};
export declare const getLabelingInfo: LabelingGetLabelingInfo;
