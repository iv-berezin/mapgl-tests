import { FeatureCollection, Geometry, Position } from 'geojson';
import { GeoTileData, GeoComponentVertices, GeoComponentType } from '../types';
import { TileInfo } from '../../../types';
declare type ForEachPointCallback = (pos: Position) => void;
/** Перебирает каждую точку в объектах FeatureCollection   */
export declare function forEachPointInCollection(fc: FeatureCollection, callback: ForEachPointCallback): void;
export declare function parseGeoJson(collection: FeatureCollection, tileInfo: TileInfo): GeoTileData;
export interface VerticesData {
    type: GeoComponentType;
    vertices: GeoComponentVertices;
}
export declare function parseGeometry(geometry: Geometry, tileInfo: TileInfo): VerticesData[];
export {};
