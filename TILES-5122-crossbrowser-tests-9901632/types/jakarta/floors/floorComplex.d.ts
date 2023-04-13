import { MapModules } from '../map/mapModules';
import { FloorMod } from './floorMod';
import { LRU } from '../utils/structures/lru';
import { MapState } from '../types';
export declare class FloorComplex {
    private modules;
    private id;
    private floorIndex;
    private regionId;
    private idSetByFloorIndex;
    private currentMod?;
    private newMod?;
    private cache;
    private mapState;
    constructor(modules: MapModules, mapState: MapState, id: string, regionId: number, cache: LRU<FloorMod>, floorIndex: number);
    update(): void;
    setFloorIndex(index: number): void;
    getCurrentMod(): FloorMod | undefined;
    commitMod(): void;
    setUsefulMod(): void;
    getUsefulMod(): FloorMod | undefined;
    setAllModsNeedless(): void;
    /**
     * Можно ли удалить ссылку на этот тайл в менеджере?
     * Проверяет, что тайл освободил все занятые ресурсы
     */
    canBeRemoved(): boolean;
    /**
     * Принудительно очищает тайл и все занятые им ресурсы
     * Используется для redraw
     */
    remove(): void;
    private createNewMod;
    private onModGenerated;
}
