import { Map } from '../..';
import { MapModules } from '../../map/mapModules';
import { TileLayer } from '../../tiles/tileLayer';
import { GeoJsonSourceCore } from './core';
import { Feature, FeatureCollection } from 'geojson';
import { Source, SourceAttributes } from '../types';
import { Int64 } from '../../utils/structures/int64';
/**
 * Максимальный зум, для которого есть тайлы.
 * 15 указано для соответствия с тайлами зенита, они существуют только до 15 зума.
 */
export declare const GEOJSON_DEFAULT_MAX_ZOOM = 15;
/**
 * Размер тайла по умолчанию для тайлов GeoJSON
 */
export declare const GEOJSON_DEFAULT_TILE_SIZE = 256;
/**
 * Максимальный зум, до которого тайловые объекты генерироваться.
 * 17 указано для соответствия с тайлами зенита.
 */
export declare const GEOJSON_DEFAULT_MAX_DETAIL_LEVEL = 17;
interface GeoJsonSourceOptionsBase {
    /**
     * Минимальный зум для которого есть данные тайлов
     */
    minZoom?: number;
    /** git status
     *
     * Максимальный зум для которого есть данные тайлов
     */
    maxZoom?: number;
    /**
     * Атрибуты источника данных.
     */
    attributes?: SourceAttributes;
    /**
     * При true данные geojson будут мимикрировать под данные zenith, т.е.
     * id будет браться из атрибута db_id, а не из feature.id. Таким образом дальше
     * при обработке событий мыши, карта будет думать, что это дефолтный источник данных.
     *
     * Опция нужна для работы коммерческих POI с сервера Casino.
     */
    identifyAsDefaultSource?: boolean;
    /**
     * Путь к моделям. Используется если url задан как относительный путь.
     */
    modelsPath?: string;
}
export declare type GeoJsonSourceOptionsUnion = GeoJsonSourceOptions | GeoJsonTileSourceOptions;
/**
 * Общий класс для работы с источниками GeoJSON-данных.
 */
declare class GeoJsonSourceCommon implements Source {
    type: "geojson";
    /**
     * mapglApiSource - прокси для типизированного в mapgl-api источника.
     * Необходимо для возможности вернуть в событиях источник созданный в mapgl-api
     */
    mapglApiSource: any;
    protected modules: MapModules;
    protected sourceCore: GeoJsonSourceCore;
    protected layer: TileLayer;
    private id;
    private identifiedAsDefault;
    constructor(map: Map, options: GeoJsonSourceOptionsUnion, mapglApiSource?: any);
    destroy(): void;
    setAttributes(attributes: SourceAttributes): void;
    getAttributes(): SourceAttributes;
    getId(): number;
    isIdentifiedAsDefault(): boolean;
}
/**
 * Опции инициализации источника GeoJSON-данных c загрузкой всех данных целиком при инициализации
 * и последующей нарезкой на тайлы на стороне клиента при помощи библиотеки geojsonvt.
 */
export interface GeoJsonSourceOptions extends GeoJsonSourceOptionsBase {
    /**
     * GeoJSON-данные.
     */
    data: FeatureCollection | Feature;
    /**
     * Количество компонентов координат точек. По умолчанию равно 2.
     */
    dimensions?: number;
}
/**
 * Создает источник данных для карты, на основе исходные данные в формате GeoJSON.
 * Данные передаются все сразу в поле data.
 *
 * Пример использования:
 *
 * new GeoJsonSource(map, {
 *    data: {
 *        type: 'FeatureCollection',
 *        features: [
 *            {
 *                type: 'Feature',
 *                properties: {},
 *                geometry: {
 *                    type: 'Point',
 *                    coordinates: [82.92186, 55.03029],
 *                },
 *             },
 *        ],
 *    },
 * });
 */
export declare class GeoJsonSource extends GeoJsonSourceCommon {
    subtype: "internal";
    private data;
    constructor(map: Map, options: GeoJsonSourceOptions, mapglApiSource?: any);
    getFeatureById(id: Int64): Feature;
    destroy(): void;
    setData(data: GeoJsonSourceOptions['data']): Promise<void>;
}
/**
 * Опции инициализации источника GeoJSON-данных
 * с загрузкой тайлов с внешнего тайлового сервера.
 */
export interface GeoJsonTileSourceOptions extends GeoJsonSourceOptionsBase {
    /**
     * Функция возвращающая url для скачивания тайла в зависимости от его координат.
     *
     * TODO: В опциях должна быть функция. https://jira.2gis.ru/browse/TILES-3949
     * url: (x: number, y: number, zoom: number) => string;
     */
    url: string;
    /**
     * Это костыль для отключения интерактивности тайлового geojson.
     * В будущем нужно сделать это через стилевое свойство.
     */
    preventInteractions?: boolean;
    /**
     * Если true, то Y координата будет отсчитываться с юга, а не с севера
     * В https://jira.2gis.ru/browse/TILES-3949 можно будет удалить.
     */
    flipY?: boolean;
    /**
     * Игнорировать отсутствующие тайлы. Если true, то не логируем 404 статус коды.
     */
    ignoreMissingTiles?: boolean;
}
/**
 * Создает источник данных для карты, на основе исходные данные в формате GeoJSON.
 * Данные загружаются с внешнего тайлового сервер по требованию карты
 * в зависимости от состояния карты и опций инициализации источника.
 */
export declare class GeoJsonTileSource extends GeoJsonSourceCommon {
    subtype: "external";
    constructor(map: Map, options: GeoJsonTileSourceOptions, mapglApiSource?: any);
    getObjectAttributes(id: Int64, tileKey: string): Promise<import("./types").GeoComponentProps | undefined>;
    setDataUrl(url: string): Promise<void>;
}
export {};
