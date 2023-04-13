import { projectGeoToMap, projectMapToGeo, geoToMapDistance, geoLineDistance } from '../utils/geo';
import { MapPoint, Padding, Viewport } from '../types';
import { CameraState } from '../map/camera';
export { getCenterZoomByPoints } from './getCenterZoomByPoints';
export { getMousePosition as getMousePositionInContainer } from '../utils/browser/events';
export { projectGeoToMap, projectMapToGeo, geoToMapDistance, geoLineDistance };
/**
 * Проецирует вектор из географических координат в координаты экрана
 */
export declare function projectGeoToScreen(center: number[], zoom: number, rotation: number, size: number[], pitch: number, geoPoint: number[], viewport?: Viewport, padding?: Padding): number[];
/**
 * Проецирует вектор из координат экрана в географические координаты
 */
export declare function projectScreenToGeo(center: number[], zoom: number, rotation: number, size: number[], pitch: number, screenPoint: number[], viewport?: Viewport, padding?: Padding): number[];
/**
 * Вычисляет метры по радиусу из пикселей вокруг проецируемой в географические координаты точки экрана
 */
export declare function getMetersFromPixels(center: number[], zoom: number, rotation: number, size: number[], pitch: number, screenPoint: number[], viewport: Viewport | undefined, padding: Padding | undefined, radiusInPixels: number): number;
export declare function projectMapToScreen(state: CameraState, point: MapPoint): number[];
