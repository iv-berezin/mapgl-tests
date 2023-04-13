import { Tile } from './tile';
import { MapState, IdentifyDataChunk } from '../types';
import { Int64 } from '../utils/structures/int64';
import { MapModules } from '../map/mapModules';
import { ProcessTileLayerLabels } from '../types/labeling';
import { SourceCore } from '../sources/types';
export declare class TileLayer {
    disabledRegions: number[] | null;
    private gridState;
    private mapState;
    private modules;
    private prevStyleState;
    private sourceCore;
    private id;
    constructor(minZoom: number, maxZoom: number, minDetailLevel: number, maxDetailLevel: number, modules: MapModules, state: MapState, sourceCore: SourceCore);
    destroy(): void;
    redraw(): void;
    getDisplayedIdentifyData(): IdentifyDataChunk[];
    getLabelingData(): ProcessTileLayerLabels;
    getViewportTiles(): Tile[];
    /**
     * Проверяет все ли вьюпорт тайлы уже готовы
     */
    viewportTilesReady(): boolean;
    /**
     * Проверяет все ли показанные в данный момент на экране тайл завершили свою анимацию появления
     */
    displayedTilesAnimationFinished(): boolean;
    activateStyleUpdating(): void;
    finishStyleUpdating(): void;
    setSelectedIds(): void;
    setHoverId(id: Int64): void;
    resetHoverId(): void;
    onSourceDataChange(): void;
    onFeatureStateMapChange(): void;
    onCommercialModelsChange(commercialModelIds: Int64[]): void;
    getTileCount(): number;
    isBlank(): boolean;
    updateViewport(): void;
    update(): void;
    /**
     * Отправляет запрос за данными тайлов
     */
    private fetch;
    private abortFetch;
    /**
     * Отправляет тайлы на генерацию
     */
    private generate;
    private clearTiles;
}
