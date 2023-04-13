/// <reference types="@2gis/gl-matrix" />
import { Tile, BaseTile } from '../tiles/tile';
import { IdSet } from './structures/idSet';
import { TileCoords, TileServerData, TileInfo, Tetragon, TileServerMetadata, TilePoint, MapPoint, Bounds, MapState } from '../types';
import { Int64 } from './structures/int64';
import { TileDictionary } from '../types/tiles';
import { TileModParams } from '../tiles/tileModParams';
export declare type MapStateForTiles = Pick<MapState, 'center' | 'zoom' | 'size' | 'tilesBounds' | 'styleZoom' | 'demMode' | 'demTilesBounds'>;
/**
 * Создаёт объект с информацией о тайле на основе его координат
 */
export declare function createTileInfo(coords: TileCoords): TileInfo;
/**
 * Преобразует координаты тайла в ключ
 */
export declare function coordsToKey(coords: TileCoords): string;
export declare function getModKey(coords: TileCoords, args: TileModParams): string;
/**
 * Преобразует ключ в координаты тайла
 */
export declare function keyToCoords(key: string): TileCoords;
/**
 * Разбирает склеенный буфер из нескольки тайлов поступающий с сервера
 */
export declare function splitBuffer(arrayBuffer: ArrayBuffer): TileServerData[];
export declare function stripBuffers(serverData: TileServerData[]): TileServerMetadata[];
export declare function copyTileBuffer(input: Uint8Array): ArrayBuffer;
/** Возвращает границы тайла в координатах карты */
export declare function getTileBounds(coords: TileCoords): Bounds;
/**
 * Проверяет попадание тайла во вьюпорт
 */
export declare function isTileVisible(coords: TileCoords, tilesBounds: Tetragon): boolean;
/**
 * Находит все тайлы, попадающие во вьюпорт (`mapState.tilesBounds`).
 * Если включен режим рельефа, то итеративно добавляем тайлы меньших зумов,
 * расширяя видимую область до границ вьюпорта рельефа.
 * Функция возвращает координаты всех тайлов зума zoomLevel, попадающих во вьюпорт.
 * Значение параметра detailLevel прописывается во все координаты четвёртым элементом.
 */
export declare function findVisibleTiles(mapState: MapStateForTiles, zoomLevel: number, minZoomLevel: number, detailLevel: number): TileCoords[];
/**
 * Формирует урл для запроса тайлов на сервер
 */
export declare function getTilesUrl(tileServer: string, tileSet: string, protocol: string, subdomains: string[], coords: TileCoords, tileKey: string, appId: string, lang: string, defaultLang?: string, sessionId?: string): string;
/**
 * Возвращает true, если tile1 и tile2 пересекаются
 */
export declare function isIntersecting(tile1: Tile, tile2: Tile): boolean;
/**
 * Возвращает true, если тайл candidate является потомком тайла tile
 */
export declare function isChild(tile: Tile, candidate: Tile): boolean;
export declare function getParentKey(tile: Tile, detailLevel: number, maxZoomLevel: number): string;
/**
 * Выбирает из словаря tiles родителя для тайла tile
 */
export declare function selectParent(tiles: TileDictionary, tile: Tile, detailLevel: number, maxZoomLevel: number): Tile | undefined;
/**
 * Выбирает из словаря tiles всех потомков тайла tile
 */
export declare function selectChildren(tiles: TileDictionary, tile: Tile): Tile[];
export declare function compare(center: Vec2, tileA: BaseTile, tileB: BaseTile): number;
/**
 * Возвращает новый массив, элементы которого были в изначальном ids и есть в idSet
 */
export declare function filterIdArrayByIdSet(ids: Int64[], idSet: IdSet): Int64[];
/**
 * Переводит вектор из координат тайла в координаты карты
 */
export declare function tilePointToMapPoint(result: MapPoint, point: TilePoint, tile: TileInfo): void;
/**
 * Переводит вектор из массива вершин из координат тайла в координаты карты
 */
export declare function vertexTilePointToMapPoint(result: MapPoint, vertices: ArrayLike<ArrayLike<number>>, index: number, tileCoords: TileInfo): void;
/**
 * Переводит вектор из координат карты в координаты тайла
 */
export declare function mapPointToTilePoint(result: TilePoint, point: MapPoint, tile: TileInfo): void;
/**
 * Возвращает размер тайла в системе координат карты
 */
export declare function tileZoomToSize(tileZoom: number): number;
/**
 * Проверяет находится ли точка в рамках границ координат тайла от 0 до maxTilePoint.
 */
export declare function pointWithinTilePoints(anchor: TilePoint): boolean;
export declare function tileDistanceToMapDistance(value: number, tileZoom: number): number;
export declare function mapDistanceToTileDistance(value: number, tileZoom: number): number;
/**
 * Упаковывает значение высоты для корректной
 * нормализации высоты в буфере вершин.
 */
export declare function mapHeightToTileHeight(value: number): number;
/**
 * Переводит координаты тайла из системы координат зум-уровня в систему координат карты
 */
export declare function tileCoordsToMapPoint(coords: TileCoords): MapPoint;
/**
 * Возвращает координаты тайла 32 зума, включающего переданную точку в
 * координатах карты. Тайлы 32 зума имеют размер 1x1 MapPoint, что позволяет
 * удобно управлять положением динамических объектов, меняя координаты их тайлов,
 * а в буферы в качестве координат просто записывать нули.
 */
export declare function mapPointTo32ZoomTileCoords(point: MapPoint): TileCoords;
/**
 * Находит координаты центра тайла в системе координат карты
 */
export declare function tileCenterToMapPoint(coords: TileCoords): MapPoint;
/**
 * Вычисляет координаты тайла с переданным центром и зумом
 */
export declare function getTileCoordsByCenterAndZoom(center: MapPoint, zoom: number): TileCoords;
/**
 * Вычисляет координаты тайла, который будет содержать в себе переданные границы
 */
export declare function getBoundsTileCoords(bbox: Bounds, multiplier?: number): TileCoords;
/**
 * Инвертирует Y координату тайла, что бы TileCoords соответствовал сетке OSM.
 * https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
 * Применяется для работы с внешними тайловыми сервисами.
 */
export declare const tileCoordsToOSM: (tileCoords: TileCoords) => TileCoords;
/**
 * Определяет во сколько раз проекция карты преувеличивает
 * расстояния и площади в данной точке тайла.
 */
export declare const tilePointScaleFactor: (tileInfo: TileInfo, tilePoint: TilePoint) => number;
