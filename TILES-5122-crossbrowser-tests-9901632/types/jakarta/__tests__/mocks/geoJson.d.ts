import { Geometry, GeometryCollection, Point, Polygon, MultiPolygon, LineString, MultiLineString, MultiPoint, Feature, FeatureCollection, GeoJsonProperties } from 'geojson';
export declare const createExteriorRing: () => number[][];
export declare const createInteriorRing: () => number[][];
export declare function mockGeometry(type: Point['type']): Point;
export declare function mockGeometry(type: MultiPoint['type']): MultiPoint;
export declare function mockGeometry(type: LineString['type']): LineString;
export declare function mockGeometry(type: MultiLineString['type']): MultiLineString;
export declare function mockGeometry(type: Polygon['type']): Polygon;
export declare function mockGeometry(type: MultiPolygon['type']): MultiPolygon;
export declare function mockGeometry(type: GeometryCollection['type']): GeometryCollection;
export declare function mockFeature<P = GeoJsonProperties>(geometry: Point['type'], properties?: P): Feature<Point, P>;
export declare function mockFeature<P = GeoJsonProperties>(geometry: MultiPoint['type'], properties?: P): Feature<MultiPoint, P>;
export declare function mockFeature<P = GeoJsonProperties>(geometry: LineString['type'], properties?: P): Feature<LineString, P>;
export declare function mockFeature<P = GeoJsonProperties>(geometry: MultiLineString['type'], properties?: P): Feature<MultiLineString, P>;
export declare function mockFeature<P = GeoJsonProperties>(geometry: Polygon['type'], properties?: P): Feature<Polygon, P>;
export declare function mockFeature<P = GeoJsonProperties>(geometry: MultiPolygon['type'], properties?: P): Feature<MultiPolygon, P>;
export declare function mockFeature<P = GeoJsonProperties>(geometry: GeometryCollection['type'], properties?: P): Feature<GeometryCollection, P>;
export declare function mockGeoJSON<G extends Geometry, P>(features: Array<Feature<G, P>>): FeatureCollection<G, P>;
