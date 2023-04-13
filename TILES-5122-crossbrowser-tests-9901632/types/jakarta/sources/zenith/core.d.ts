import { GeneratedTileOptions } from '../../types/tiles';
import { MapModules } from '../../map/mapModules';
import { MapState, TileCoords } from '../../types';
import { Int64 } from '../../utils/structures/int64';
import { SourceMetatile } from '../../types/styles';
import { SourceCore, SourceAttributes, FeatureStateMap, BinaryFeatureStateMap } from '../types';
import { TileType } from '../../tiles/tile';
import { ModelData } from '../../types/threads';
export interface ZenithSourceOptions {
    tileServer: string;
    tileSet: string;
    tileProtocol: string;
    tileKey: string;
    subdomains: string[];
    appId: string;
    defaultLang?: string;
    sessionId?: string;
    sourceAttributes?: SourceAttributes;
    isDefaultSource?: boolean;
    identifyAsDefaultSource?: boolean;
    modelsPath?: string;
}
/**
 * Временный костыль.
 * Переименовывает названия полей `tileProps` в тайлах зенита в "camelCase".
 * Переименовываются все поля которые используются в Jakarta, за исключением полей, которые используются в публичных стилях (например `'db_region'`).
 * Это нужно что бы названия полей в `tileProps` соответствовали названиям в Jakarta
 */
export declare const zenithToJakartaPropKey: (zenithProp: string) => string;
/**
 * Временный костыль.
 * Нужен что бы переименовать `objectClass` и `sublayer` в соответствующие поля в тайлах зенита.
 * Вероятно понадобится даже когда имена свойств в стилях станут зенитовскими. Для обеспечения совместимости.
 */
export declare function jakartaToZenithPropertyName(propertyName: string): string;
/**
 * Переименовывает имена словарей в тайлах зенита (`metatile.enumerationValues`)
 * в имена соответствующих тайловых атрибутов.
 */
export declare const zenithEnumerationToPropKey: (enumerationProperty: string) => string;
/**
 * Переименовываем имена словарей в метатайле зенита,
 * что бы они соответствовали именам свойств для которых предназначены.
 * Если `enumerationValues` отсутствует, то собираем его из `classes`, `objectClasses` и `sublayers`.
 * Проверку наличия enumerationValues нужно удалить в https://jira.2gis.ru/browse/TILES-3773.
 */
export declare const renameZenithEnumerationValues: (sourceMetatile: SourceMetatile) => void;
export declare class ZenithSourceCore implements SourceCore {
    id: number;
    private modules;
    private options;
    type: TileType;
    private sourceAttrs;
    private worker;
    constructor(id: number, modules: MapModules, options: ZenithSourceOptions);
    fetchTile(tileCoords: TileCoords, mapState: MapState): Promise<import("../../types").TileServerMetadata[] | undefined>;
    generateTile(mapState: MapState, tileCoords: TileCoords, styleId: number, selectedIds: Int64[], devicePixelRatio: number, generatedTileOptions?: GeneratedTileOptions, hoverId?: Int64, sourceId?: number): Promise<import("../../types/threads").ProcessTileResponse>;
    generateModel(data: ModelData): Promise<import("../../types/threads").ProcessModelResponse>;
    abortTileFetch(tileCoords: TileCoords): void;
    deleteTile(tileCoords: TileCoords): void;
    setAttributes(attributes: SourceAttributes): void;
    getAttributes(): SourceAttributes;
    destroy(): void;
    setFeatureStateMap(featureStateMap: FeatureStateMap): void;
    setFeatureStateMapBinary(featureStateMap: BinaryFeatureStateMap): void;
    appendHiddenObjectIds(hiddenIds: Int64[]): void;
}
