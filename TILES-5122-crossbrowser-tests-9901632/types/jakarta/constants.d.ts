export declare const tileSizeZpt = 256;
export declare const worldSize: number;
/** Половина размера мира */
export declare const HALF_WORLD_SIZE: number;
export declare const tileHeight: number;
/**
 * Максимальное значение в координатах тайла.
 * Координаты всех данных в рамках тайла
 * содержатся в диапазоне от 0 до 32768.
 */
export declare const maxTilePoint: number;
/**
 * Максимальное значение беззнакового целого,
 * которое можно сохранить в двух байтах
 */
export declare const maxUint16Value: number;
/**
 * Приводит координаты тайлов из диапазона от [0, 2^16 - 1]
 * к диапазону [0, 2^15].
 */
export declare const uint16ToTileCoords: number;
/** Отступ тайловых координат */
export declare const tileCoordOffset = 16383;
export declare const cmPerInch = 2.54;
export declare const zptPerInch = 96;
export declare const z0Scale: number;
export declare const invSqrt2 = 0.7071067811865475;
export declare const maxU32 = 4294967295;
export declare const MIN_SCALE = 1.175494351e-38;
export declare const MAX_SCALE = 3.402823466e+38;
export declare const fontNames: readonly ["Arial", "Helvetica", "HelveticaNeueCyr", "Open_Sans", "Open_Sans_Semibold", "Open_Sans_Italic", "Segoe_UI", "PT_Sans_Caption", "PT_Sans", "Verdana", "Verdana_bold", "Noto_Sans", "Noto_Sans_Semibold", "Noto_Sans_Italic", "SuisseIntl_Bold"];
export declare const DEFAULT_FONT = "Noto_Sans";
export declare const ATLAS_IMAGE_PADDING = 1;
export declare const RENDER_IMAGE_PADDING: number;
export declare const syncableMetatileHash = -3;
export declare const geoJsonMetatileHash = -4;
/**
 * Используется в координатах центров объектов при идентификации.
 * Указывает на то, что для объекта идентификации не указан центр.
 */
export declare const INVALID_IDENTIFY_CENTER_COORD = 2147483647;
export declare const DEFAULT_JAKARTA_STYLE = "eb10e2c3-3c28-4b81-b74b-859c9c4cf47e";
/**
 * Константы режимов отрисовки, используемые при генерации
 */
export declare const GL_TRIANGLE_STRIP = 5;
export declare const GL_TRIANGLES = 4;
