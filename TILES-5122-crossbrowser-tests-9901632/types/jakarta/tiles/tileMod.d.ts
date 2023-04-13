import { TileObject } from './tileObject';
import { MapState, MetatileGeneratedLabels } from '../types';
import { TileGeneratedData } from '../types/threads';
import { LRU } from '../utils/structures/lru';
import { Tile } from './tile';
import { IdSet } from '../utils/structures/idSet';
import { MapModules } from '../map/mapModules';
import { TileModParams } from './tileModParams';
/**
 * Текущий статус мода. Возможные значения:
 *
 * Initial: мод попал во вьюпорт, но мы ещё не начали его загружать
 * Loading: мод скачивается
 * Loaded: мод загружен, но ещё не отправлен на генерацию
 * Generating: мод генерируется
 * Generated: мод сгенерировался, но ещё не показан
 */
export declare const enum TileModStatus {
    Initial = 0,
    Loading = 1,
    Loaded = 2,
    Generating = 3,
    Generated = 4
}
/**
 * Мод — это визуальное представление тайла сгенерированного в определенных условиях.
 * Каждый мод можно представить функцией `view = styles(params)`, где:
 * - `view` — это итоговое визуальное представление
 * - `styles` — стили карты
 * - `params` — параметры, от которых зависят стили карты
 */
export interface TileMod {
    /**
     * Уникальный ключ мода. Кроме координат, содержит ещё нужные id для выделения.
     * Нужен для кэша и для отслеживания показанных тайлов в тайл менеджере.
     */
    key: string;
    params: TileModParams;
    /**
     * Флаг для сообщения наружу о том, что тайл нужно сгенерировать.
     */
    needGenerate: boolean;
    objects?: TileObject[];
    /**
     * Готовность мода к показу пользователю
     */
    ready: boolean;
    /**
     * Нужность мода. Меняется только снаружи.
     * Мод не грузится и не генерируется, если он не нужен.
     */
    useful: boolean;
    /**
     * Уникальный ключ для лейблов тайла.
     * Нужен, чтобы различать их в лейблинге между различными типами тайлов.
     */
    labelsKey: string;
    /**
     * Тайл рельефа, откуда брались данные высоты. Используется для инвалидации
     * высот - если demManager находит более подходящий тайл, то высоты можно брать
     * оттуда.
     */
    demKey?: string;
    status: TileModStatus;
    generatedData?: TileGeneratedData[];
    /**
     * Нужно помнить тайл мода, чтобы:
     * 1. Знать его координаты (tile.coords)
     * 2. Следить за загрузкой данных с сервера (tile.serverData)
     * 3. Знать его тип (tile.type)
     */
    tile: Tile;
}
export declare function createTileMod(tile: Tile, key: string, params: TileModParams): TileMod;
/**
 * Устанавливает прилетевшие из воркеров сгенерированные данные
 *
 * @param idSet Берется не из this.tile, а передается намеренно, чтобы не забыть,
 * что вначале должно выполниться сохранение geoId в тайл. Для пробок не используется.
 */
export declare function addGeneratedDataToTileMod(tileMod: TileMod, data: TileGeneratedData[], idSet?: IdSet): void;
export declare function getTileModLabels(tileMod: TileMod): MetatileGeneratedLabels[];
export declare function getTileModGeoIds(tileMod: TileMod): Uint32Array[];
export declare function destroyTileMod(tileMod: TileMod, mapState: MapState): void;
/**
 * Может ли мод в данный момент быть удален?
 */
export declare function canTileModBeRemoved(tileMod: TileMod): boolean;
export declare function updateTileModStatus(mod: TileMod, cache: LRU<TileMod>, mapState: MapState, modules: MapModules): void;
