import { MapModules } from '../../map/mapModules';
import { MapState, TileCoords } from '../../types';
import { Evented } from '../../utils/structures/evented';
import { DataTileLoadedEvent, DataTileClearedEvent, TilesSetChangedEvent } from '../../types/events';
export interface DataTileLayerOptions {
    minZoom: number;
    maxZoom: number;
    tsURLTemplate: (params: TileCoords) => string;
}
export declare class DataTileLayer<T> extends Evented<{
    tilesSetChanged: TilesSetChangedEvent;
    dataTileLoaded: DataTileLoadedEvent<T>;
    dataTileCleared: DataTileClearedEvent;
}> {
    private gridState;
    private viewportDiffer;
    private dataTileLoader;
    private mapState;
    private modules;
    private config;
    private prevZoomLevel;
    constructor(mapState: MapState, modules: MapModules, config: DataTileLayerOptions);
    destroy(): void;
    update(): void;
    private fetch;
    private abortFetch;
    private clearTiles;
    private fetchTile;
}
