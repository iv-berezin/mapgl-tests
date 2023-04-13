import { HandyExpression, HandySimpleType } from './types';
/**
 * Тип необрабатываемого выражения.
 */
export interface UnextractableExpression<T extends HandySimpleType> {
    type: 'unextractable';
    exp: HandyExpression<T>;
}
export interface UsedAttrs {
    type: 'attrs';
    attrs: {
        [key: string]: any;
    };
}
/**
 * Результат выделения используемых атрибутов данных. Содержит
 * собственно атрибуты и куски необрабатываемых выражений.
 */
export declare type ExtractResult<T extends HandySimpleType> = boolean | UnextractableExpression<T> | UsedAttrs;
export declare function isUsedAttr<T extends HandySimpleType>(x: ExtractResult<T>): x is UsedAttrs;
export declare function isUnextractable<T extends HandySimpleType>(x: ExtractResult<T>): x is UnextractableExpression<any>;
/**
 * Анализирует выражение и получает из него используемые атрибуты данных
 * и необрабатываемые куски выражения (UnextractableExpression)
 *
 * @param exp - выражение
 * @returns - результат его анализа
 */
export declare function extractUsedAttrs<T extends HandySimpleType>(exp: HandyExpression<T> | HandySimpleType): Array<ExtractResult<T>>;
