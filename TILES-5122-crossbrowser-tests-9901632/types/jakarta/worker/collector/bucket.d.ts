/// <reference types="@2gis/gl-matrix" />
import { GeneratingLayerType, SinkName } from '../../types/generatedSceneObjects';
import { GeneratorBinder } from '../../types/generators';
import { ObjectAttributeValue } from '../../utils/objectAttributes';
export interface BucketViewsBaseType {
    [key: string]: TypedArray;
}
/**
 * Буферный объект хранящий данные о вершинах генерируемых объектов
 */
export declare class ElementsObject {
    stride: number;
    watermark: number;
    comittedOffsets: number;
    buffer: ArrayBuffer;
    view: Int32Array;
    offset: number;
    /**
     * Shader attributes object
     */
    constructor(length: number, stride: number);
    extend(): ArrayBuffer;
}
/**
 * Буферный объект хранящий данные об индексах вершин триангуляционной сетки объектов
 */
export declare class IndicesObject {
    watermark: number;
    comittedOffsets: number;
    buffer: Int32Array;
    offset: number;
    /**
     * Shader element indices object
     * @param elements Initial number of Int32 elements
     */
    constructor(elements: number);
    extend(): void;
}
/**
 * Хранилище для генерируемых данных объектов.
 * В одном бакете могут содержаться данные для множества объектов, объединенных по
 * названию символа, имени прохода генератора и набору атрибутов.
 */
export declare class Bucket<T extends BucketViewsBaseType> {
    /**
     * Хранилище данные об уникальных вершинах генерируемых объектов
     */
    elements: ElementsObject;
    /**
     * Хранилище данных об индексах вершин триангуляционных сеток объектов
     */
    indices: IndicesObject;
    /**
     * Набор атрибутов для отрисовки объектов бакета
     */
    attributes: ObjectAttributeValue[];
    /**
     * Типизированные массивы для работы со буфером данных.
     * Смотри описание поля `binder` в интерфейсе `GeneratorSink`.
     */
    views: T;
    /**
     * Способ отрисовки данных
     */
    drawMode: number;
    private binder;
    constructor(styleLayer: GeneratingLayerType, sink: SinkName, attributes: ObjectAttributeValue[], binder: GeneratorBinder<Bucket<T>>, drawMode: number);
    resetOffsets(): void;
    commit(): void;
    rollback(): void;
    checkWatermarks(): number;
}
/** Извлекает тип `views` из типа бакета */
export declare type BucketView<Type> = Type extends Bucket<infer T> ? T : Type extends Bucket<any> ? Type['views'] : never;
