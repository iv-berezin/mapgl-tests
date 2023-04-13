/// <reference types="@2gis/gl-matrix" />
import { Bucket } from '../../../worker/collector/bucket';
declare type SimpleLine2DBucket = Bucket<{
    position: Uint16Array;
    directionDistance: Int8Array;
}>;
declare type SimpleLine3DBucket = Bucket<{
    position: Uint16Array;
    directionDistance: Int8Array;
    demPosition: Int16Array;
}>;
declare type SimpleLineBucket = SimpleLine2DBucket | SimpleLine3DBucket;
export declare function generateSimpleLine(bucket: SimpleLineBucket, xCurr: number, yCurr: number, zCurr: number, xNext: number, yNext: number, zNext: number, demPosition?: Vec2, isModel?: boolean): void;
export {};
