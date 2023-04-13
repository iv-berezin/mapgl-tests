import { GridState } from '../../types/tiles';
import { MapState } from '../../types';
import { MapModules } from '../../map/mapModules';
/**
 * Обработка бизнес-логики тайлов, завязанной на новые фреймы
 */
export declare function newFrameAction(gridState: GridState, mapState: MapState, modules: MapModules): void;
declare function updateTileStatuses(gridState: GridState, mapState: MapState, modules: MapModules): void;
declare function updateTileAppearance(gridState: Pick<GridState, 'tilesAppearance' | 'tiles' | 'viewportTiles'>): void;
/**
 * На основе текущего режим зума карты выбирает какие моды должны отображаться пользователю
 */
declare function updateDisplayedMods(gridState: GridState): void;
/**
 * Чистит currentMod у тайлов, которые и не показываются пользователю в данный момент
 * и не должны быть показаны после окончательной загрузки всех тайлов текущего вьюпорта.
 */
declare function resetTileCurrentMods({ tiles, displayedMods, viewportTiles }: GridState): void;
/**
 * Проверка на окончание процесса зума.
 * Завязана на вьюпорт и показанные моды, поэтому происходит после их обновления.
 */
declare function checkForZoomEnd(gridState: GridState): void;
/**
 * Проверяет, что все тайлы вьюпорта показаны пользователю
 */
declare function viewportTilesAreDisplayed(gridState: Pick<GridState, 'tiles' | 'viewportTiles' | 'displayedMods'>): boolean;
export declare const testHandles: {
    updateTileStatuses: typeof updateTileStatuses;
    updateTileAppearance: typeof updateTileAppearance;
    updateDisplayedMods: typeof updateDisplayedMods;
    resetTileCurrentMods: typeof resetTileCurrentMods;
    viewportTilesAreDisplayed: typeof viewportTilesAreDisplayed;
    checkForZoomEnd: typeof checkForZoomEnd;
};
export {};
