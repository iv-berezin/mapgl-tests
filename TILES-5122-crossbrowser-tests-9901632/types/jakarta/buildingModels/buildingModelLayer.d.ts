import { Texture } from '../2gl/Texture';
import { MapModules } from '../map/mapModules';
import { IdentifyDataChunk, MapState } from '../types';
/**
 * Модуль для работы с 3D-моделями Зенита на карте
 *
 * Назначение:
 *  1. Загрузка данных моделей.
 *  2. Отрисовка видимых моделей на карте, очистка моделей с карты
 *  3. Кеширование моделей
 *
 * Вообще все, что связано с 3D-моделями Зенита должно быть выполнено в рамках этого модуля.
 */
export declare class BuildingModelLayer {
    private mapState;
    private modules;
    /**
     * Значение высоты примитивов зданий для которых есть модель.
     * Нужна для анимации появления моделей.
     * Наполняется / используется из рендеринга зданий / моделей.
     *
     * Map<hiddenObjectId, buildingHeight>
     */
    private buildingsHeight;
    /**
     * Список всех моделей-сущностей.
     * Наполняется при скачивании общего файла моделей региона.
     * Никогда не чистится.
     */
    private models;
    /**
     * Список показанных модов моделей на экране.
     * Наполняется и чистится в каждом кадре в методе update.
     */
    private displayedMods;
    /**
     * Список моделей попадающих в данных момент во вьюпорт.
     * Именно модели из этого списка пытаются грузиться и генерироваться.
     */
    private viewportModels;
    /**
     * Кэш готовых модов моделей.
     * Модель прибирает ресурсы за собой, только когда её моды уйдут из кэша.
     */
    private cache;
    private requestedModelsInfo;
    private loadedModelsInfo;
    /**
     * Флаг показывающий, что идет процесс смены стилей карты.
     * В этом процессе новые готовые моды не коммитаются в сцену, пока не будут готовы другие слои.
     */
    private isStyleUpdateInProgress;
    constructor(mapState: MapState, modules: MapModules);
    onFeatureStateMapChange(): void;
    update(): void;
    activateStyleUpdating(): void;
    finishStyleUpdating(): void;
    redraw(): void;
    /**
     * Проверяет загружен ли общий список моделей для региона.
     * Тайлы Зенита не будут генерироваться до тех пор, пока не будет загружен этот список,
     * т.к. здания на месте 3D моделей не должны попасть в батчинг.
     */
    isModelsInfoLoaded(regionId: number): boolean;
    /**
     * Возвращает текстуру модели. Используется для рендеринга.
     */
    getTexture(id: string, textureId: number): Texture | undefined;
    getDisplayedIdentifyData(): IdentifyDataChunk[];
    getOpacity(id: string, minStyleZoom: number): number;
    hasModel(id: string): boolean;
    setBuildingHeight(id: string, height: number): void;
    getBuildingHeight(id: string): number;
    /**
     * Возвращает данные о модели.
     * Модель может еще грузиться и генерироваться, тогда вернет undefined.
     */
    getVisibleModelData(id: string): {
        minStyleZoom: number;
        maxStyleZoom: number;
        opacity: number;
    } | undefined;
    isIdle(): boolean;
    /**
     * Проверяет, что модели во вьюпорте сгенерированны и готовы к показу.
     * Аналог функции TileLayer.viewportTilesReady().
     */
    viewportModelsReady(): boolean;
    private findViewportModels;
    private updateScene;
    private cleanUnnessasaryModels;
    private loadModelsInfo;
}
