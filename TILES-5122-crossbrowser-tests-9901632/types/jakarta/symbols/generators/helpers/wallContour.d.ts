/// <reference types="@2gis/gl-matrix" />
import type { LineExtrusionSideStrokeBucket } from '../lineExtrusion';
import { PolygonExtrusionSideStrokeBucket } from '../polygonExtrusion';
export declare function generateFloorContour(bucket: LineExtrusionSideStrokeBucket | PolygonExtrusionSideStrokeBucket, count: number, px: ArrayLike<number>, py: ArrayLike<number>, cuts: ArrayLike<number> | undefined, demPosition?: Vec2): void;
export declare function generateWallContours(bucket: LineExtrusionSideStrokeBucket | PolygonExtrusionSideStrokeBucket, count: number, px: ArrayLike<number>, py: ArrayLike<number>, cuts: ArrayLike<number> | undefined, height: number, demPosition?: Vec2): void;
