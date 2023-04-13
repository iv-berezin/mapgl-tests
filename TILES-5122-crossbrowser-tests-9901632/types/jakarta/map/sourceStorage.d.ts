import { RasterTileSource } from '../sources/raster';
import { GeoJsonSource, GeoJsonTileSource } from '../sources/geojson';
import { ZenithSource } from '../sources/zenith';
import { DefaultSource } from '../sources/defaultSource';
export declare type Source = GeoJsonSource | GeoJsonTileSource | RasterTileSource | DefaultSource | ZenithSource;
export declare class SourceStorage {
    private sources;
    addSource(source: Source): void;
    removeSource(sourceId: number): void;
    getSourceById(id: number): Source | undefined;
}
