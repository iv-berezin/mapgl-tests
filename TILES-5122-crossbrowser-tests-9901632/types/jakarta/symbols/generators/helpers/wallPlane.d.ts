/// <reference types="@2gis/gl-matrix" />
import { LineExtrusionFillBucket } from '../lineExtrusion';
import { PolygonExtrusionFillBucket } from '../polygonExtrusion';
export declare function generateWallPlanes(bucket: LineExtrusionFillBucket | PolygonExtrusionFillBucket, count: number, px: ArrayLike<number>, py: ArrayLike<number>, cuts: ArrayLike<number> | undefined, height: number, identifyIndex?: number, demPosition?: Vec2): void;
