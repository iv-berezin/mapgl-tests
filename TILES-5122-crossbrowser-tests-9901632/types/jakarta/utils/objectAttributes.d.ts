import { GeneratorContext, HandyDataKey } from '../expressions/types';
import { Int64 } from './structures/int64';
/**
 * Типы атрибутов объекта генерации.
 * Предназначены для хранения элементарных типов, handyColor, матриц.
 * Массив ObjectAttributeValue используются в главном потоке для установки webgl uniforms и разрешения Expressions.
 */
export declare type ObjectAttributeValue = string | number | boolean | number[] | string[] | Int64;
/**
 * Словарь атрибутов, получаемый при распаковке массива атрибутов объектов генерации
 */
export interface ObjectAttributes {
    /** id стиля */
    styleId: number;
    /** innerId стилевого слоя */
    layerId: number;
    /**
     * Дополнительные параметры для отрисовки, которые как правило
     * устанавливаются в юниформы через объектные биндеры
     */
    tileData: ObjectAttributeValue[];
}
/**
 * Создает массив атрибутов для передачи в главный тред.
 * Объединяет массив обязательных атрибутов с атрибутами, используемыми в стилевых выражениях.
 * @param attributes массив обязательных атрибутов
 * @param dataKeys проиндексированые свойства, используемые в стилевых выражениях
 * @param ctx контекст генератора
 * @returns
 */
export declare function createObjectAttributesArray(attributes: ObjectAttributeValue[], dataKeys: HandyDataKey[], ctx: GeneratorContext<any>): ObjectAttributeValue[];
/**
 * Создает массив атрибутов лейбла для передачи в главный тред.
 * Объединяет массив обязательных атрибутов с атрибутами лейбла.
 * @param attributes массив обязательных атрибутов
 * @param tileData массив атрибутов лейбла
 */
export declare function createLabelObjectAttributesArray(attributes: ObjectAttributeValue[], tileData: ObjectAttributeValue[]): ObjectAttributeValue[];
export declare function areEqual(a: ObjectAttributeValue[], b: ObjectAttributeValue[]): boolean;
