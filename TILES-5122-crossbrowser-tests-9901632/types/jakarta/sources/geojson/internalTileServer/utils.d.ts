/// <reference types="@2gis/gl-matrix" />
import { MapPoint, TilePoint } from '../../../types';
import { LineGeoComponent, PointGeoComponent, PolygonGeoComponent } from '../types';
import { TileFeaturePolygons, TileFeatureLines, TileFeaturePoints } from '@2gis/geojson-vt';
export declare function preparePolygonsFeature(feature: TileFeaturePolygons, vtTileSize: number, dimensions: number): PolygonGeoComponent[];
export declare function prepareLinesFeature(feature: TileFeatureLines, vtTileSize: number, dimensions: number): LineGeoComponent[];
export declare function preparePointsFeature(feature: TileFeaturePoints, vtTileSize: number, dimensions: number): PointGeoComponent[];
/**
 * Возвращает точку в границах координат тайла
 */
export declare function vtTilePointToMapTilePoint(result: TilePoint, point: MapPoint, vtTileSize: number): void;
/**
 * Возвращает массив сегментов кольца полигона, лежащих внутри тайла,
 * выкидывая все точки лежащие за границей тайла
 */
export declare function splitRingByTileEdge(ring: Vec2[], vtTileSize: number): Vec2[][];
