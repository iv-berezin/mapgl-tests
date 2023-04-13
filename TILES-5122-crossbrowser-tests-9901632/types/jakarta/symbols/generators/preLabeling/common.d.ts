import { HandyValue, ResolveContext } from '../../../expressions/types';
import { PreLabelLine } from './line';
import { PreLabelOneWayLine } from './oneWayLine';
import { PreLabelPoint } from './point';
export declare type PreLabel = PreLabelPoint | PreLabelLine | PreLabelOneWayLine;
export declare const enum PreLabelType {
    Point = 0,
    Line = 1,
    OneWayLine = 2
}
/**
 * Возвращает либо переданный атрибут, либо переданное значение по умолчанию, если атрибут равен NaN.
 * @param attr Значение атрибута из тайлов, нужно передавать что-то вроде tileAttrs[tileProps.db_height].
 * @param def Дефолтное значение, которое подменит attr, если оно NaN.
 */
export declare function getAttrOrDefault<T extends any>(attr: T, def: T): T;
/**
 * Получаем текст подписи из стилевого выражения.
 * В отличии от resolveString, функция не отбрасывает `не текстовые` значения,
 * а переводит их в строку если они валидные.
 */
export declare function resolveLabel(value: HandyValue<string> | undefined, ctx: ResolveContext<string>): string;
