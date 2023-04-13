/// <reference types="@2gis/gl-matrix" />
import { Bounds, LngLatBounds } from '../../../types';
export declare function create(min?: Vec2, max?: Vec2): Bounds;
export declare function fromGeo(geoBounds: LngLatBounds): Bounds;
/**
 * Расширяет границу до заданной точки
 */
export declare function expandByPoint(bounds: Bounds, point: Vec2): void;
export declare function copy(target: Bounds, source: Bounds): void;
export declare function reset(bounds: Bounds): void;
export declare function center(out: Vec2, bounds: Bounds): Vec2;
/**
 * Вписывает точку в границы
 */
export declare function clampPoint(out: Vec3, bounds: Bounds, point: Vec3): void;
export declare function contains(bounds: Bounds, point: Vec3): boolean;
/**
 * Пересекаются ли два прямоугольника
 */
export declare function intersects(a: Bounds, b: Bounds): boolean;
/** Возвращает область пересечения прямоугольников */
export declare function intersection(a: Bounds, b: Bounds): Bounds;
/**
 * Масштабирует границы от центра в `scale` раз
 */
export declare function scale(bounds: Bounds, scale: number): void;
