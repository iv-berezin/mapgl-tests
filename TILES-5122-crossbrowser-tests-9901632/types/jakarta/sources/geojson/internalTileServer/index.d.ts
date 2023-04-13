import { TileCoords } from '../../../types';
import { GeoJsonSourceOptions } from '../';
import { GeoTileData } from '../types';
import { GeoJsonTileServerInterface } from '../worker';
export declare class InternalGeoJsonTileServer implements GeoJsonTileServerInterface {
    private options;
    private geoJsonVT;
    constructor(options: GeoJsonSourceOptions);
    private get geoJsonVtInstance();
    fetchTile(coords: TileCoords): Promise<GeoTileData>;
    destroy(): void;
}
