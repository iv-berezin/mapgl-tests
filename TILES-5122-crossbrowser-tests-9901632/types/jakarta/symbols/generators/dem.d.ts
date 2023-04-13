import { Collector } from '../../worker/collector';
import { Bucket } from '../../worker/collector/bucket';
import { GeneratedObjectBatch } from '../../types';
import { ObjectAttributeValue } from '../../utils/objectAttributes';
export declare type FlatBottomBucket = Bucket<{
    position: Uint16Array;
    demPosition: Int16Array;
    extender: Int8Array;
}>;
export declare const DemGenerator: {
    symbol: "dem";
    sinks: {
        mesh: {
            stride: number;
            binder: (_bucket: Bucket<{}>, _buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number): number[];
            unpackObjectAttributes(attrs: [number, number, ...ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: ObjectAttributeValue[];
            };
        };
        ground: {
            stride: number;
            binder: (_bucket: Bucket<{}>, _buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number): number[];
            unpackObjectAttributes(attrs: [number, number, ...ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: ObjectAttributeValue[];
            };
        };
        elevation: {
            stride: number;
            binder: (_bucket: Bucket<{}>, _buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, textureIndex: number): number[];
            unpackObjectAttributes(attrs: [number, number, ...ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                textureIndex: number;
                tileData: ObjectAttributeValue[];
            };
        };
        hillshade: {
            stride: number;
            binder: (_bucket: Bucket<{}>, _buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number): number[];
            unpackObjectAttributes(attrs: [number, number, ...ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                tileData: ObjectAttributeValue[];
            };
        };
        flatBottom: {
            stride: number;
            binder: (bucket: FlatBottomBucket, buffer: ArrayBuffer) => void;
            packObjectAttributes(styleId: number, layerId: number, matrix?: number[] | undefined): (number | number[])[];
            unpackObjectAttributes(attrs: [number, number, ...ObjectAttributeValue[]]): {
                styleId: number;
                layerId: number;
                matrix: number[] | undefined;
                tileData: ObjectAttributeValue[];
            };
        };
    };
    generateElevation(_collector: Collector, vertices: number[][], styleId: number, layerId: number, textureIndex: number): GeneratedObjectBatch<"dem", "elevation">;
    generateHillshade(_collector: Collector, vertices: number[][], styleId: number, layerId: number): GeneratedObjectBatch<"dem", "hillshade">;
    generateFloorsBottomFill(collector: Collector, styleId: number, vertices: Array<ArrayLike<number>>, extenders: number[][], centroid: number[], matrix?: number[] | undefined): void;
};
