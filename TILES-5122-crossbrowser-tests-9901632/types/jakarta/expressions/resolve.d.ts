import { BinderResolveContext, GeneratorContext, HandyExpression, HandyInterpolateExpression, HandySimpleType, LabelingResolveContext, ResolveContext, StyleColor, StyleGradient } from './types';
import { SourceAttrs, StyleState } from '../types';
import { TileProps, TileAttrs, FeatureAttrs } from '../types/styles';
import { ObjectAttributeValue } from '../utils/objectAttributes';
/**
 * Вычисляет значение стилевого выражения.
 *
 * Взаимно-рекурсивна с функциями вычисления конкретных выражений: resolveGetExpression,
 *  resolveMatchExpression, ... В данном случае в рекурсии нет ничего страшного, потому как
 * стилевые выражения по своей природе нерекурсивны и ацикличны.
 *
 * @param exp - стилевое выражение
 * @param ctx - контекст его выполнения
 * @returns результат вычисления стилевого выражения
 */
export declare function resolveExpression(exp: HandyExpression<HandySimpleType> | HandySimpleType, ctx: ResolveContext<HandySimpleType>): HandySimpleType;
/**
 * Получает значение из переданной кривой для переданного зума
 */
export declare function sample(expr: HandyInterpolateExpression<number>, value: number, ctx: ResolveContext<number>): number;
/**
 * Ресолвит выражение в цвет.
 * Если оно оказывается не цветом, фоллбечимся на defaultValue равный по умолчанию черному цвету.
 */
export declare function resolveColor(exp: StyleColor | StyleGradient | HandyExpression<HandySimpleType>, ctx: ResolveContext<HandySimpleType>): StyleColor;
/**
 * Ресолвит выражение в градиент.
 * Если оно оказывается не градиентом, возвращает null.
 */
export declare function resolveGradient(exp: StyleColor | StyleGradient | HandyExpression<HandySimpleType>, ctx: ResolveContext<HandySimpleType>): StyleGradient | null;
/**
 * Ресолвит выражение в число.
 * Если оно оказывается не числом, возвращает defaultValue равный по умолчанию NaN.
 */
export declare function resolveNumber(exp: HandySimpleType | HandyExpression<HandySimpleType>, ctx: ResolveContext<HandySimpleType>, defaultValue?: number): number;
/**
 * Ресолвит выражение в строку.
 * Если оно оказывается не строкой, возвращает defaultValue равный по умолчанию ''.
 */
export declare function resolveString(exp: HandySimpleType | HandyExpression<HandySimpleType>, ctx: ResolveContext<HandySimpleType>, defaultValue?: string): string;
/**
 * Получает значение цвета из переданной кривой для переданного зума
 */
export declare function sampleColor(expr: HandyInterpolateExpression<StyleColor>, value: number, ctx: ResolveContext<StyleColor>): StyleColor;
export declare function makeBinderContext(styleZoom: number, styleState: StyleState, tileData: ObjectAttributeValue[]): BinderResolveContext<HandySimpleType>;
export declare function makeLabelingContext(styleZoom: number, styleState: StyleState, interpolateExpressionAsStep: boolean, tileData: ObjectAttributeValue[]): LabelingResolveContext<HandySimpleType>;
/**
 * Создает контекст генерации данных
 */
export declare function makeGeneratorContext(styleState: StyleState, sourceAttrs: SourceAttrs, tileProps: TileProps, tileAttrs: TileAttrs, featureAttrs: FeatureAttrs, getSeededRandomValue?: () => number): GeneratorContext<HandySimpleType>;
/**
 * Возвращает цвет в преумноженной и нормализованной форме, готовой для отправки в шейдер
 * ((color_component * alpha_component + 127) / 255)
 *
 * @param rgba Цвет в формате числа RGBA
 * @return Цвет в преумноженной и нормализованной форме
 */
export declare function getColorForShaders(rgba: StyleColor): [number, number, number, number];
/**
 * Получает все возможные значения, которые могут вернуться из expression
 */
export declare function expressionValues<T extends HandySimpleType>(exp: HandyExpression<T> | T): T[];
export declare const testHandles: {
    resolveExpression: typeof resolveExpression;
    makeGeneratorContext: typeof makeGeneratorContext;
    makeBinderContext: typeof makeBinderContext;
};
