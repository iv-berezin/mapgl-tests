import { TagValue } from '@2gis/geojson-vt';
import { IdMap } from '../../utils/structures/idMap';
export declare type GeoComponentVertices = number[][];
export interface GeoComponentBase {
    id?: number | string;
    tags: GeoComponentProps;
    index: number;
    vertices: GeoComponentVertices;
}
export interface GeoComponentProps {
    [key: string]: TagValue;
}
/**
 * координаты хранятся как массив массивов компонент точек
 * [[x1, x2, x3, ... xN], [y1, y2, y3, ... yN], [z1, z2, z3, ... zN]]
 */
export interface PolygonGeoComponent extends GeoComponentBase {
    type: 'polygon';
}
/**
 * координаты хранятся как массив массивов компонент точек
 * [[x1, x2, x3, ... xN], [y1, y2, y3, ... yN]]
 */
export interface LineGeoComponent extends GeoComponentBase {
    type: 'line';
}
/**
 * координаты хранятся как массив массивов компонент точки
 * [[x], [y]]
 */
export interface PointGeoComponent extends GeoComponentBase {
    type: 'point';
}
export declare type GeoComponent = PointGeoComponent | LineGeoComponent | PolygonGeoComponent;
export declare type GeoComponentType = GeoComponent['type'];
export interface GeoTileData {
    components: GeoComponent[];
    byId: IdMap<number>;
}
