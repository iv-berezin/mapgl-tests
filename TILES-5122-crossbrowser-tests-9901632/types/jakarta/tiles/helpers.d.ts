import { Tile, TileType } from './tile';
import { TileManager } from '../map/tileManager';
import { MapModules } from '../map/mapModules';
import { MapState } from '../types';
import { TileDictionary, GridState, TileModDictionary } from '../types/tiles';
/**
 * Обновляет useful моды в тайлах вьюпорта
 * При необходимости создает новые тайлы
 */
export declare function updateTilesUseful(gridState: GridState): void;
export declare function viewportTilesReady(tiles: TileDictionary, viewportTiles: string[]): boolean;
export declare function getTilesToFetch(gridState: GridState): Tile[];
export declare function getTilesToAbortFetch(gridState: GridState): Tile[];
export declare function getTilesToGenerate(gridState: GridState): Tile[];
export declare function getTilesToRemove(gridState: GridState): Tile[];
export declare function createGridState(type: TileType, sourceId: number, tileLayerId: number, minZoom: number, maxZoom: number, minDetailLevel: number, maxDetailLevel: number, modules: MapModules, mapState: MapState): GridState;
/**
 * Возвращает целое значение зума для для установки GridState в зависимости от типа тайлов.
 *
 * Все тайлы, по умолчанию, подгружаются в зависимости от styleZoom, причем, для загрузки данных
 * значение зума округляется до наибольшего целого не превышающего styleZoom, ф-я Math.floor().
 * Такой подход хорошо работает для векторных данных. Но в случае с растровыми тайлами,
 * такое решение приводит к замыливанию даже на целых значениях зумов, и разнице в отображении
 * растровых тайлов у нас и в mapbox. Чтобы избежать этого, растровые тайлы нужно подгружать
 * в зависимости от zoom, округляя его до ближайшего целого, ф-я Math.round().
 */
export declare function getGridStateZoomLevel(tileType: TileType, zoom: number, styleZoom: number): number;
export declare function resetGridState(gridState: GridState): void;
/**
 * Добавляет в сцену новые моды и удаляет не используемые
 * Возвращает true, если были изменения.
 */
export declare function updateScene(tileManager: TileManager, mapState: MapState, gridState: GridState, oldMods: TileModDictionary): boolean;
/**
 * Выставляет новые моды в текущие у тайлов из вьюпорта
 */
export declare function commitMods(gridState: Pick<GridState, 'tiles' | 'viewportTiles'>): void;
export declare const testHandles: {
    updateTilesUseful: typeof updateTilesUseful;
    getTilesToRemove: typeof getTilesToRemove;
};
