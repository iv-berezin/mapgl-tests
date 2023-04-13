/// <reference types="@2gis/gl-matrix" />
import { HandyStyleLayer } from '../../expressions/types';
import { GeoComponentType, LineGeoComponent } from './types';
export declare function filterByGeometryType(objectGeometryType: GeoComponentType, layerGeometryType: HandyStyleLayer['type']): boolean;
export declare function getLineDistance(component: LineGeoComponent): number;
/**
 * Присваивает признак обводки вершинам треугольника, которые присутствуют в обводке сегмента.
 *
 * strokeVertices - вершины сегмента полигона для обводки.
 * triangleVertices - вершины треугольника полученного триангуляцией.
 *
 * Каждый сегмент полигона после триангуляции разбивается на треугольники.
 * Вершинам треугольника, которые присутствуют в обводке сегмента необходимо присвоить признак обводки.
 */
export declare function addStrokeIndexes(triangleVertices: Vec2[], strokeVertices: number[][]): void;
export declare function createGeoJsonMetatile(): import("../../types/styles").Metatile;
