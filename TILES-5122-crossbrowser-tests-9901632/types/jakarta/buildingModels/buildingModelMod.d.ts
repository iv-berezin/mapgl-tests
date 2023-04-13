import { MapModules } from '../map/mapModules';
import { TileObject } from '../tiles/tileObject';
import { IdentifyIds, MapState } from '../types';
import { Int64 } from '../utils/structures/int64';
import { LRU } from '../utils/structures/lru';
import { BuildingModel } from './buildingModel';
export declare class BuildingModelMod {
    private modules;
    private mapState;
    private cache;
    /**
     * Ссылка на модель. Нужна для обращения к данным модели, которые общие между модами.
     */
    model: BuildingModel;
    /**
     * Ключ мода
     */
    key: string;
    maxStyleZoom: number;
    minStyleZoom: number;
    objects: TileObject[];
    /**
     * Если true, то модель готова появиться на сцене
     */
    ready: boolean;
    /**
     * "Нужность" мода. Выставляется снаружи.
     * Если false, то значит мод не должен выполнять какую-либо работу.
     */
    useful: boolean;
    /**
     * Один из параметров мода.
     * Строго говоря, у модели есть только один ID, и хранить какой-то массив необязательно.
     * Но оставлен массив для однообразия работы в тайлах и в этажах.
     */
    selectedIds: Int64[];
    /**
     * Один из параметров мода.
     */
    styleId: number;
    /**
     * Ревизия стиля, которая меняется при любом его изменении.
     * Если меняется, то модель перегенерируются.
     */
    styleRevision: number;
    /**
     * Ревизия модели, которая меняется при изменении featureState для этой модели.
     * Если меняется, то модель перегенерируются.
     */
    modelRevision: number;
    private status;
    private processResponse?;
    constructor(modules: MapModules, mapState: MapState, cache: LRU<BuildingModelMod>, model: BuildingModel, key: string, selectedIds: Int64[], styleId: number, styleRevision: number);
    update(): void;
    getIdentifyIds(): IdentifyIds | undefined;
    remove(): void;
    canBeRemoved(): boolean;
    private loadModel;
    private updateMinAndMaxStyleZoom;
}
export declare function getModelModKey(id: string, selectedIds: Int64[], styleId: number, styleRevision: number, modelRevision: number): string;
