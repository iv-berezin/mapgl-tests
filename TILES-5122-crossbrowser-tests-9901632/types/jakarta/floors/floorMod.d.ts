import { TileObject } from '../tiles/tileObject';
import { MapModules } from '../map/mapModules';
import { LRU } from '../utils/structures/lru';
import { IdentifyIds, MapState, MetatileGeneratedLabels } from '../types';
import { Int64 } from '../utils/structures/int64';
export declare class FloorMod {
    key: string;
    id: string;
    object?: TileObject;
    ready: boolean;
    floorIndex: number;
    needFilterIds: boolean;
    selectedIds: Int64[];
    styleId: number;
    styleRevision: number;
    useful: boolean;
    private modules;
    private mapState;
    private status;
    private processResponse?;
    private regionId;
    private metatileHash;
    private cache;
    private onGenerated;
    constructor(modules: MapModules, mapState: MapState, key: string, id: string, regionId: number, styleId: number, styleRevision: number, floorIndex: number, cache: LRU<FloorMod>, selectedIds: Int64[], needFilterIds: boolean, onGenerated: (a: FloorMod) => void);
    update(): void;
    getLabels(): MetatileGeneratedLabels[];
    /**
     * Нужно для floorComplex
     */
    getGeoIds(): Uint32Array | undefined;
    /**
     * Может ли мод в данный момент быть удален?
     */
    canBeRemoved(): boolean;
    remove(): void;
    /**
     * Нужен для Identifier
     */
    getIdentifyIds(): {
        [metatileHash: number]: IdentifyIds;
    } | undefined;
    /**
     * Проверяет, являются ли данные мода пустыми.
     */
    isDataEmpty(): boolean;
}
export declare function getFloorModKey(id: string, floorIndex: number, selectedIds: Int64[], styleId: number, styleRevision: number): string;
