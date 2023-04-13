/// <reference types="@2gis/gl-matrix" />
import { MapState, ScreenPoint } from '../types';
import { Int64 } from '../utils/structures/int64';
import { MapModules } from './mapModules';
import { GeneratingLayerType } from '../types/generatedSceneObjects';
export interface IdentifierResponse {
    id: Int64;
    phase: number;
    sublayer?: string;
    dynamicObjectId?: number;
    sourceId?: number;
    tileKey?: string;
    symbol: GeneratingLayerType;
    instanceId: number;
    objectClass: string;
    center?: number[];
    floorId?: Int64;
}
/**
 * Модуль отвечающий за поиск объектов карты по координатам экрана
 */
export declare class Identifier {
    debouncedFillCache: () => void;
    private colorBuffer?;
    private stateDiffer;
    private needsUpdate;
    private forceUpdate;
    private identifyData;
    private state;
    private modules;
    private searchQueue;
    constructor(state: MapState, modules: MapModules);
    resetCache(): void;
    isIdle: () => boolean;
    /**
     * Ищет id объекта в указанных координатах экрана
     * Возвращает промис, в котором вернется id
     * Тип используется для отмены предыдущих запросов того же типа
     */
    search(type: string, point: Vec2, force?: boolean): Promise<IdentifierResponse | undefined>;
    /**
     * Синхронная версия метода search. В отличие от search, не дожидается
     * наполнения identify-кеша и сразу возвращает undefined, если его нет.
     */
    searchSync(point: ScreenPoint): IdentifierResponse | undefined;
    update(): void;
    /**
     * Выбирает из identify сцены наиболее приоритетную точку в заданном расстоянии.
     * Наиболее приоритетная точка – это точка с наибольшей фазой и ближайшая к точке поиска.
     * Динамические объекты имеют превосходство над статическими (как и во время отрисовки)
     */
    private searchHigherPriority;
    private searchPointInCache;
    private fillCache;
    private indexToIdentifierResponse;
}
