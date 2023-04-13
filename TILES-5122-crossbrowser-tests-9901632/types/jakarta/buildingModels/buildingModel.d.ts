import { Texture } from '../2gl/Texture';
import { MapModules } from '../map/mapModules';
import { MapState, SourceModel } from '../types';
import { BitmapTextures, RawTextures } from '../types/threads';
import { LRU } from '../utils/structures/lru';
import { BuildingModelMod } from './buildingModelMod';
export declare class BuildingModel {
    private modules;
    private mapState;
    private cache;
    regionId: number;
    metatileHash: number;
    sourceModel: SourceModel;
    /**
     * Уникальный 64-битный ID модели
     */
    id: string;
    /**
     * Ревизия генерации модели
     */
    revision: number;
    /**
     * Моды смотрят на это флаг после генерации их данных.
     * Моды не будут готовы, если текстуры модели не загружены.
     */
    texturesLoaded: boolean;
    private textures;
    /**
     * Новый генерируемый мод
     */
    private newMod?;
    /**
     * Последний отображаемый пользователю мод.
     * Он точно имеет состояние ready.
     */
    private currentMod?;
    /**
     * Логика с readiness нужна для плавной анимации появления модели,
     * если здание на его месте уже стоит в полную высоту.
     */
    private readiness;
    private readinessTickerName;
    constructor(modules: MapModules, mapState: MapState, cache: LRU<BuildingModelMod>, regionId: number, metatileHash: number, sourceModel: SourceModel);
    update(): void;
    isAnimating(): boolean;
    commitMod(): void;
    setUsefulMod(): void;
    getUsefulMod(): BuildingModelMod | undefined;
    getCurrentMod(): BuildingModelMod | undefined;
    setAllModsNeedless(): void;
    getOpacity(minStyleZoom: number): number;
    getTexture(textureId: number): Texture | undefined;
    /**
     * Вызывается из модов, но текстуры у всех модов одни.
     * Моды ждут подготовки текстур перед показом себя.
     */
    prepareTextures(textures: RawTextures | BitmapTextures): void;
    /**
     * Сущность Model никогда не удаляется из памяти, но их текстуры должны чиститься,
     * если их моды не востребованы и выпали из кэша (проверка выполняется в ModelLayer).
     */
    clean(): void;
    private canBeCleaned;
    private createNewMod;
    private startReadinessTicker;
    private stopReadinessTicker;
}
