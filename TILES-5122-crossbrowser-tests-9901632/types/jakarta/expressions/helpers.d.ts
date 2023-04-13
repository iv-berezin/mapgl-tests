import { StyleLabelingMargin, Expression, StylePrimitiveValue } from '../types/publicStyles';
import { HandyExpression, HandyExtractorExpression, HandySimpleType, StyleColor } from './types';
/**
 * Проверка на простой тип в публичных стилях.
 */
export declare function isPublicStylePrimitiveValue<T extends StylePrimitiveValue>(value: any): value is T;
export declare function isHandyExpression<T extends HandySimpleType>(exp: HandyExpression<T> | T): exp is HandyExpression<T>;
export declare function isArrayOfNumbers(value: HandyExpression<HandySimpleType> | HandySimpleType): value is number[];
export declare function isHandySimpleType(value: HandyExpression<HandySimpleType> | HandySimpleType): value is HandySimpleType;
export declare function isExtractableHandyExpression<T extends HandySimpleType>(exp: HandyExpression<T> | T): exp is HandyExtractorExpression;
export declare function toStyleColor(value: number[]): StyleColor;
/**
 * Получения ключа статичного растерсета на основе имени и якоря.
 * Иконки для статичных растерсетов заранее известны из стилей.
 */
export declare function getStaticIconRasterSetKey(iconName: string, anchorX: number, anchorY: number): string;
export declare function getStaticTextureRasterSetKey(textureName: string): string;
/**
 * Получение ключа уникального растерсета на основе ID объекта.
 * Уникальные растер сеты используются для иконок коммерческих POI и POI достопримечательностей, их иконки из стилей получить нельзя.
 */
export declare function getUniqueRasterSetKey(idLo: number, idHi: number): string;
declare type Value = StylePrimitiveValue | Expression | StyleLabelingMargin;
/**
 * Функция возвращает первое значение, если в стилях для атрибута был передан массив.
 * Массив у атрибутов может использоваться для задания нескольких строк у point.
 */
export declare function firstValue<T extends Value | Value[]>(value: T | T[]): T;
/**
 * Функция возвращает второе значение, если в стилях для атрибута был передан массив.
 * Массив у атрибутов может использоваться для задания нескольких строк у point.
 */
export declare function secondValue<T extends Value | Value[]>(value: T | T[]): T | undefined;
export {};
