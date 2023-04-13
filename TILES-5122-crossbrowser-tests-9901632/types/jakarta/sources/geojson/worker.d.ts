import { Int64 } from '../../utils/structures/int64';
import { GenerationResult } from '../../types/tiles';
import { MapState, TileCoords } from '../../types';
import { GeoJsonSourceOptions, GeoJsonSourceOptionsUnion } from './';
import { SlaveStyleManager } from '../../styleManager/slave';
import { Collector } from '../../worker/collector';
import { SourceAttributes } from '../types';
import { GeoComponentProps, GeoTileData } from './types';
import { InternalGeoJsonTileServer } from './internalTileServer';
import { ExternalGeoJsonTileServer } from './externalTileServer';
export interface GeoJsonSourceWorkerScope {
    sources: {
        [sourceId: number]: GeoJsonSourceWorker;
    };
    collector: Collector;
    styleManager: SlaveStyleManager;
    syncNewRasterSets: () => void;
    debouncedResetCollector: () => void;
}
export interface GeoJsonTileServerInterface {
    fetchTile: (coords: TileCoords) => Promise<GeoTileData>;
    destroy: () => void;
}
export declare type GeoJsonTileServer = InternalGeoJsonTileServer | ExternalGeoJsonTileServer;
export declare class GeoJsonSourceWorker {
    private scope;
    private options;
    id: number;
    /** хранилище исходных данных тайлов для генерации */
    private tileData;
    private tileServer;
    private styleManager;
    private collector;
    private sourceAttrs;
    private metatile;
    constructor(scope: GeoJsonSourceWorkerScope, options: GeoJsonSourceOptionsUnion, id: number);
    fetchTile(tileCoords: TileCoords): Promise<GeoTileData>;
    abortTileFetch(coords: TileCoords): void;
    generateTile(mapState: MapState, tileCoords: TileCoords, styleId: number, selectedIds: Int64[], devicePixelRatio: number, modelsPath?: string): Promise<{
        results: GenerationResult[];
    }>;
    getObjectAttributes(index: Int64, tileKey: string): GeoComponentProps | undefined;
    deleteTile(tileCoords: TileCoords): void;
    setSourceAttrs(attributes: SourceAttributes): void;
    destroy(): void;
    setData(data: string | GeoJsonSourceOptions['data']): Promise<boolean>;
}
