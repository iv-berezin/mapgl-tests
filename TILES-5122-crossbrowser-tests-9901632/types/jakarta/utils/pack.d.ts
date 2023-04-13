/**
 * Модуль возвращает объект с функциями, упаковывающими аргументы в числовые форматы, используемые в шейдерах
 */
/**
 * Упаковка положительного числа с плавающей запятой в s16
 */
export declare function packPositiveValue(value: number): number;
/**
 * Упаковка текстурной координаты в u16
 */
export declare function packTexCoords(value: number): number;
/**
 * Упаковка масштаба с плавающей запятой в s16
 * Дополнительно в знак числа записывается тип перемасштабирования
 */
export declare function packScale(scale: number): number;
