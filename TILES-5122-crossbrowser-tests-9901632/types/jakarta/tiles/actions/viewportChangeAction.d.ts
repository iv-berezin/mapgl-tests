import { GridState } from '../../types/tiles';
import { MapState } from '../../types';
/**
 * Обработка логики тайлов связанной с изменением вьюпорта
 */
export declare function viewportChangeAction(gridState: GridState, mapState: MapState): void;
/**
 * @param styleZoom Текущий стилевой зум карты
 */
declare function updateZoomLevelAndZoomDirection(gridState: GridState, styleZoom: number, zoom: number): void;
declare function updateViewportTiles(gridState: GridState, mapState: MapState): void;
declare function updateCacheSize(gridState: GridState): void;
export declare const testHandles: {
    updateZoomLevelAndZoomDirection: typeof updateZoomLevelAndZoomDirection;
    updateViewportTiles: typeof updateViewportTiles;
    updateCacheSize: typeof updateCacheSize;
};
export {};
