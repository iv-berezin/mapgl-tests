import { TileCoords } from '../../../types';
import { GeoJsonTileSourceOptions } from '../';
import { GeoTileData } from '../types';
import { GeoJsonTileServerInterface } from '../worker';
export declare class ExternalGeoJsonTileServer implements GeoJsonTileServerInterface {
    private options;
    private readonly tileLoader;
    private readonly url;
    constructor(options: GeoJsonTileSourceOptions);
    fetchTile(coords: TileCoords): Promise<GeoTileData>;
    abortTile(coords: TileCoords): void;
    destroy(): void;
}
