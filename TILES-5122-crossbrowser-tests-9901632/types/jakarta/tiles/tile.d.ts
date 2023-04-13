import { IdSet } from '../utils/structures/idSet';
import { TileMod } from './tileMod';
import { MapState, TileCoords, TileServerMetadata } from '../types';
import { Int64 } from '../utils/structures/int64';
import { LRU } from '../utils/structures/lru';
import { MapModules } from '../map/mapModules';
import { TileGeneratedData } from '../types/threads';
import { TileObject } from './tileObject';
import { TileModParams } from './tileModParams';
/**
 * Текущий статус тайла. Возможные значения:
 *
 * Initial: тайл попал во вьюпорт, но мы ещё не начали его загружать
 * Loading: тайл скачивается
 * Loaded: тайл загружен, но ещё не отправлен на генерацию
 */
export declare const enum TileStatus {
    Initial = 0,
    Loading = 1,
    Loaded = 2
}
export declare type TileType = 'terrain' | 'traffic' | 'raster' | 'geojson' | 'dem';
export interface BaseTile {
    type: string;
    /**
     * Ключ тайла. Содержит только координаты.
     * Нужен для хранения в тайл менеджере.
     */
    key: string;
    coords: TileCoords;
    zoomLevel: number;
    detailLevel: number;
    status: TileStatus;
    /**
     * Флаг сигналит TileLayer, что данные тайла нужно загрузить с сервера
     */
    needFetch: boolean;
    /**
     * Флаг сигналит TileLayer, что нужно отменить скачивание тайла с сервера
     */
    needAbortFetch: boolean;
}
export interface Tile extends BaseTile {
    type: TileType;
    /**
     * id источника тайлов
     */
    sourceId: number;
    /**
     * Уникальный ключ, по которому лейблы тайла будут добавляться и удаляться из лейблинга
     */
    labelsKey: string;
    /**
     * Новый генерируемый мод
     */
    newMod?: TileMod;
    /**
     * Последний отображаемый пользователю мод.
     * Он точно имеет состояние ready.
     */
    currentMod?: TileMod;
    /**
     * Используется в модах
     */
    serverMetadata?: TileServerMetadata[];
    /**
     * Флаг сигналит TileLayer, что нужно сгенерировать данные тайла
     */
    needGenerate: boolean;
    /**
     * Порядковый номер экземпляра данных.
     * Увеличивается каждый раз при перезапросе данных с сервера.
     */
    revision: number;
    /**
     * Хранит в себе id'шники всех гео-объектов в тайле.
     * Получить можно только после первой генерации мода.
     */
    idSet?: IdSet;
    hover?: {
        id: Int64;
        tileObjects: TileObject[];
        generatedData: TileGeneratedData[];
    };
    oldHoverTileObjects: TileObject[];
}
export declare function createTile(type: TileType, coords: TileCoords, sourceId: number, tileLayerId: number): Tile;
/**
 * @param force Игнорируем проверку равенства id ховеров
 */
export declare function updateTileHover(modules: MapModules, mapState: MapState, tile: Tile, sourceId: number, id?: Int64, force?: boolean): void;
export declare function getTileModToGenerate(tile: Tile): TileMod | undefined;
/**
 * Можно ли удалить ссылку на этот тайл в менеджере?
 * Проверяет, что тайл освободил все занятые ресурсы
 */
export declare function canTileBeRemoved(tile: Tile): boolean;
/**
 * Принудительно очищает тайл и все занятые им ресурсы
 * Используется для redraw
 */
export declare function destroyTile(tile: Tile, mapState: MapState): void;
/**
 * Сброс текущего мода.
 * Применяется в ситуациях, когда тайл данного мод перестал показывается пользователю.
 */
export declare function resetTileCurrentMod(tile: Tile): void;
export declare function getTileUsefulMod(tile: Tile): TileMod | undefined;
export declare function setAllTileModsNeedless(tile: Tile): void;
/**
 * Эй, тайл! Изменились ID для выделения или появились пробки.
 * Проверь-ка какой мод тебе нужен теперь, если что - создай новый!
 */
export declare function setTileUsefulMod(tile: Tile, params: TileModParams, cache: LRU<TileMod>): void;
declare function createTileNewMod(tile: Tile, params: TileModParams, cache: LRU<TileMod>): void;
export declare function updateTileStatus(tile: Tile, cache: LRU<TileMod>, mapState: MapState, modules: MapModules): void;
export declare function commitMod(tile: Tile): void;
export declare function createTileGeoIdSet(modGeneratedData: TileGeneratedData[]): IdSet;
export declare function prepareRefetchTile(tile: Tile): void;
export declare function prepareUpdateByIdsTile(tile: Tile): void;
export declare function prepareUpdateTileWithIds(tile: Tile, diffIds: Int64[]): void;
export declare const testHandles: {
    createTileNewMod: typeof createTileNewMod;
    setTileUsefulMod: typeof setTileUsefulMod;
};
export {};
