import { MapModules } from '../map/mapModules';
import { IdMap } from '../utils/structures/idMap';
import { IdentifyDataChunk, MapState } from '../types';
import { TileType } from '../tiles/tile';
export declare class FloorManager {
    private complexDescriptors;
    private hiddenObjectIds;
    private modules;
    private state;
    private stateDiffer;
    private activeFloor?;
    private floors;
    private needUpdate;
    private displayedMods;
    private cache;
    private requestedFloors;
    private failedRequestedFloors;
    private isStyleUpdateInProgress;
    constructor(state: MapState, modules: MapModules);
    update(): void;
    getActiveFloorHiddenIds(): string[];
    prepareFloors(regionId: number, metatileHash: number, floorHidingMap: IdMap<number[]>, sourceType: TileType): void;
    changeFloorNumber(floorId: string, floorIndex: number): void;
    resetCache(): void;
    getDisplayedIdentifyData(): IdentifyDataChunk[];
    hasDisplayedFloorBuilding(id: string): boolean;
    activateStyleUpdating(): void;
    finishStyleUpdating(): void;
    /**
     * Проверяет, что активные этажи:
     *  - или сгенерированы и готовы к показу;
     *  - или этажи в процессе загрузки;
     *  - или загрузка этажей не удалась.
     * Используется в событии idle, которое не учитывает процесс загрузки.
     */
    activeFloorLoadingOrReady(): boolean;
    /**
     * Проверяет, что все загружаемые этажи:
     *  - или сгенерированы и готовы к показу;
     *  - или загрузка этажей не удалась.
     * Используется в событии ready, которое учитывает и процесс загрузки.
     * Аналог функции TileLayer.viewportTilesReady().
     */
    floorsReady(): boolean;
    private loadFloor;
    /**
     * Обновляет глобальные переменные стилей,
     * которые содержат ID активных зданий и ID активных этажей.
     * Эти переменные нужны для использования в стилях с коммерческими POI из тайлов Casino.
     */
    private updateStyleState;
    private updateScene;
    private addFloorMod;
    private removeFloorMod;
    private commitMods;
    private findActiveFloor;
}
