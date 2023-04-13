import { SourceMetatile, Metatile, TileProps, FeatureAttrs } from '../types/styles';
import { LabelingGroupConfig, SourceLabelingGroupConfig } from '../types/labeling';
import { SourceAttrs } from '../types';
/**
 * Преобразует хеш метатайла, преставленный байтовым массивом, в число.
 * Для корректной работы необходимо, чтобы размер массива не превышал 6 байт.
 */
export declare function hashToNumber(hash: Uint8Array): number;
/**
 * Преобразует хеш метатайла, представленный числом, в строку
 */
export declare function hashToString(hash: number): string;
export declare function prepareTileProps(props: string[], defaultProps: {
    [name: string]: number;
}): TileProps;
export declare function prepareMetatile(sourceMetatile: SourceMetatile): Metatile;
/**
 * Генерирует нулевой метатайл.
 *
 * Традиционно в генераторах у нас используются метатайлы. Изначально это пришло из наших
 * тайловых данных, где метатайл - это отдельный файл на сервере и его требуется загружать
 * перед генерацией.
 *
 * Но если источник данных другой, например GeoJSON, метатайла у него нет и в этом случае,
 * чтобы переиспользовать генераторы, можно воспользоваться нулевым метатайлом.
 *
 * @returns сгенерированный нулевой метатайл
 */
export declare function createMetatile(tileProps: string[], sublayersList?: string[]): Metatile;
export declare function enhanceTileProps(metatile: Metatile, newProps: string[]): void;
export declare function prepareLabelingGroups(source: SourceLabelingGroupConfig): LabelingGroupConfig;
/**
 * Набор фиксированных тайловых атрибутов.
 * Используется для всех объектов, которые не связаны с данными в тайлах.
 */
export declare const fixedTileProps: TileProps;
/**
 * Фиксированный метатайл, тайловые пропсы которого захардкожены прямо в коде.
 * Используется для всех объектов, которые не связаны с данными в тайлах.
 */
export declare const fixedMetatile: Metatile;
export declare const emptyFeatureAttrs: FeatureAttrs;
export declare const emptySourceAttrs: SourceAttrs;
export declare const zenithSourceAttrs: SourceAttrs;
