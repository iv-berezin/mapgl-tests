import { MapModules } from '../map/mapModules';
import { MapState } from '../types';
export declare class BuildingHeightAnimator {
    private state;
    private modules;
    private differ;
    private buildingHeights;
    private minZoomBuildingHeight;
    constructor(state: MapState, modules: MapModules);
    /**
     * Получить значение высоты для группы зданий с одинаковым minStyleZoom
     * minStyleZoom - минимальный зум при котором здания трехмерые
     */
    getBuildingHeight(minStyleZoom?: number): number;
    update(): void;
    isAnimating(): boolean;
    /**
     * Очистить список minZoom зданий - использовать при смене стиля
     */
    clearBuildingHeights(): void;
    /**
     * Возвращает defaultBuildingHeight, нужен для объектов у которых нет minZoom
     */
    getDefaultBuildingHeight(): 1 | 0;
    /**
     * обновляет состояние анимации.
     */
    private updateByZoom;
    /**
     * Добавляет новый ключ minZoom с значением высоты от текущего стилевого зума.
     */
    private addBuildingHeightZoom;
}
