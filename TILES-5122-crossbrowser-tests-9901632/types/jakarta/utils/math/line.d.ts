/// <reference types="@2gis/gl-matrix" />
import { MapPoint } from '../../types';
/**
 * Возвращает константы уравнения прямой: ax + by + c = 0
 */
export declare function getLineConstants(point1: Vec2, point2: Vec2): {
    a: number;
    b: number;
    c: number;
};
/**
 * Расстояние от точки до прямой
 */
export declare function pointToLineDistance(point: Vec2, line: {
    a: number;
    b: number;
    c: number;
}): number;
/**
 * Расстояние от точки до прямой с учетом знака.
 * Если точка слева от прямой, то расстояние положительное, если справа - отрицательное.
 */
export declare function pointToLineSignedDistance(point: Vec2, line: {
    a: number;
    b: number;
    c: number;
}): number;
/**
 * Обрезает геометрию линии до длины length
 */
export declare function splitPolylineByLength(polyline: MapPoint[], distances: number[], length: number): MapPoint[];
/**
 * Делит полилинию на несколько частей так, чтобы область содержащая каждую из частей не превышала заданный размер
 */
export declare function splitPolylineByMaxSize(polyline: MapPoint[], maxSize: number): MapPoint[][];
export declare function getClosestPointOnLineSegment(point: number[], point1: number[], point2: number[]): number[];
