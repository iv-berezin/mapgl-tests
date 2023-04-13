import { TileObject } from '../tiles/tileObject';
import { MapState, IdentifyDataChunk } from '../types';
import { TileLayer } from '../tiles/tileLayer';
import { Tile } from '../tiles/tile';
import { MapModules } from './mapModules';
export declare class TileManager {
    private state;
    private modules;
    private tileLayers;
    private objects;
    private viewportDiffer;
    constructor(state: MapState, modules: MapModules);
    addTileLayer(newLayer: TileLayer): void;
    removeTileLayer(layer: TileLayer): void;
    redraw(): void;
    activateStyleUpdating(): void;
    finishStyleUpdating(): void;
    setSelectedIds(): void;
    getViewportTiles(): Tile[];
    /**
     * Определеяет готовность тайлов вьюпорта.
     */
    viewportTilesReady(): boolean;
    /**
     * Проверяет все ли показанные в данный момент на экране тайл завершили свою анимацию появления
     */
    displayedTilesAnimationFinished(): boolean;
    getDisplayedIdentifyData(): IdentifyDataChunk[];
    getLabelingData(): import("../types/labeling").ProcessTileLayerLabels[];
    isIdle(): boolean;
    update(): void;
    /**
     * Возвращает все тайловые объекты
     */
    getTileObjects(): TileObject[];
    addObject(object: TileObject): void;
    removeObject(object: TileObject): void;
    destroy(): void;
    private updateTickers;
}
