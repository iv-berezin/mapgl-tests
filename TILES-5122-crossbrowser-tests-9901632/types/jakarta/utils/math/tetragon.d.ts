/// <reference types="@2gis/gl-matrix" />
import { Bounds, Tetragon } from '../../types';
/**
 * Возвращает рамку (bounding box) четырёхугольника
 */
export declare function tetragonBounds(tetragon: Tetragon): Bounds;
/**
 * Копирует четырёхугольник
 */
export declare function tetragonCopy(tetragon: Tetragon): Tetragon;
/**
 * Пересекает ли четырехугольник прямоугольник (или находится внутри)
 */
export declare function tetragonIntersectsBounds(tetragon: Tetragon, bounds: Bounds): boolean;
/**
 * Сдвигает вершины четырехугольника в направлении от центра
 * на указанное расстояние. Мутирует текущий четырехугольник.
 */
export declare function tetragonBuffer(tetragon: Tetragon, buffer: number, center: Vec3): void;
