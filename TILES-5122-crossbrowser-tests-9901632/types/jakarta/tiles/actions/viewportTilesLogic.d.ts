import { TileDictionary, TileModDictionary } from '../../types/tiles';
/**
 * Возвращает моды тайлов, которые необходимо показать пользователю во время драга или простоя.
 */
export declare function sceneTilesWhileDragOrWaitingAll(tiles: TileDictionary, viewportTiles: string[]): {};
/**
 * Возвращает моды тайлов, которые необходимо показать пользователю во время призумливания.
 */
export declare function sceneTilesWhileZoomIn(tiles: TileDictionary, viewportTiles: string[], displayedMods: TileModDictionary, startDetailLevel: number, maxZoomLevel: number): TileModDictionary;
/**
 * Возвращает моды тайлов, которые необходимо показать пользователю во время отзумливания.
 */
export declare function sceneTilesWhileZoomOut(tiles: TileDictionary, viewportTiles: string[], displayedMods: TileModDictionary, currentDetailLevel: number, startDetailLevel: number, maxZoomLevel: number): TileModDictionary;
