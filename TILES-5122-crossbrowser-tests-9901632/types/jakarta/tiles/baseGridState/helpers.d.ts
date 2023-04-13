import { BaseGridState } from '.';
import { BaseTile } from '../tile';
import { MapState, TileCoords } from '../../types';
/**
 * Вычисляем зум (целочисленное значение), для которого находим тайлы,
 * которые могут быть показаны на этом зуме
 * Учитываем конфиг сетки, с которой работаем
 */
export declare function createVisibleInViewportTiles<Tile extends BaseTile>(gridState: BaseGridState<Tile>, state: MapState, createTile: (tileCoords: TileCoords) => Tile): void;
/**
 * Возвращает тайлы из сетки в статусе needFetch
 */
export declare function getTilesToFetch<Tile extends BaseTile>(gridState: BaseGridState<Tile>): Tile[];
/**
 * Возвращает тайлы из сетки в статусе needAbortFetch
 */
export declare function getTilesToAbortFetch<Tile extends BaseTile>(gridState: BaseGridState<Tile>): Tile[];
/**
 * Удаляем все тайлы, которые не попадают во вьюпорт
 */
export declare function getTilesToRemove<Tile extends BaseTile>(gridState: BaseGridState<Tile>, additionalCondition?: (tile: Tile) => boolean): Tile[];
