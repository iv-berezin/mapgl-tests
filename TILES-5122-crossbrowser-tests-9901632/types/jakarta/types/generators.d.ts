import { Bucket } from '../worker/collector/bucket';
import { TileInfo, LabelingState } from './';
import { Collector } from '../worker/collector';
import { Label } from '../worker/labeling/label';
import { AnchorWorld, LabelingTileElement } from '../worker/labeling/elements/labelingTile';
import { HandyStyle } from '../expressions/types';
import { ObjectAttributes, ObjectAttributeValue } from '../utils/objectAttributes';
import { Camera } from '../map/camera';
import { GeneratingLayerType, SinkName } from './generatedSceneObjects';
/** Тип функции binder в GeneratorSink */
export declare type GeneratorBinder<T> = (bucket: T, buffer: ArrayBuffer) => void;
/** Тип функции упаковщика атрибутов объектов генерации */
export declare type AttributesPacker = (...args: any[]) => ObjectAttributeValue[];
/**
 * Тип функции распаковщика атрибутов объектов генерации.
 * Предполагаем, что первые 2 значения это `styleId` и `layerId`
 */
export declare type AttributesUnpacker<T extends ObjectAttributes = ObjectAttributes> = (array: [number, number, ...ObjectAttributeValue[]]) => T;
/**
 * Интерфейс определяющий проход генератора.
 * За проход генератор наполняет буфер соответствующего бакета данными для отрисовки,
 * а этот интерфейс определяет какие данные в каком месте буфера находятся.
 */
export interface GeneratorSink<B extends Bucket<any>, P extends AttributesPacker, U extends AttributesUnpacker<ObjectAttributes>> {
    /**
     * Количество байт в буфере занимаемое данными по одной вершине.
     *
     * Например, для прохода fill генератора src/worker/generators/area.ts
     * данные вершины включают в себя две 16-битные координаты и один 32-битный идентификатор.
     * Значит объем памяти занимаемый вершиной равен 8 байт (64 бита)
     *
     * position      localId       |
     * 0  1  2  3    8  9  10 11   |=> stride = 8 bytes        i  — порядковый номер байта в буфере
     * [x][x][y][y]  [i][i][i][i]  |                           [] — один байт буфера
     *
     * ВАЖНО!
     * Размер stride должен быть кратен 4 байтам — это самый оптимальный вариант при работе с бинарными данными.
     * Недостающее до кратного значения число байт можно оставить с нулями.
     * Так же на это соглашение опираемся при получении данных из коллектора в главном треде,
     * метод getAccumulatedData в src/worker/collector/index.ts.
     */
    stride: number;
    /**
     * Функция задающая view-массивы над буфером для удобного доступа
     * к конкретному значению конкретного типа данный в каждой вершине.
     *
     * Например, для прохода fill генератора scr/worker/generators/area.ts — это будут 2 типизированных массива:
     * 1. `position = Uint16Array(buffer)`
     *    координаты i-ой вершины `[x,y] = [position[i * stride / 2] , position[i * stride / 2 + 1]`,
     *    где 2 — количество байт занимаемое одним элементом Uint16Array, читай одной координатой.
     * 2. `localId = Uint32Array(buffer, 4)`
     *    идентификатор i-ой вершины `id = localId[i * stride / 4]`,
     *    где 4 — количество байт занимаемое одним элементом Uint32Array, читай одним идентификатором.
     */
    binder: GeneratorBinder<B>;
    /**
     * Упаковывает атрибуты объекта генерации в массив.
     * В таком виде атрибуты используются коллектором вкупе с названиями символа и прохода,
     * чтобы идентифицировать бакет в который будут добавлены данные за проход.
     */
    packObjectAttributes: P;
    /**
     * Распаковывает атрибуты объекта генерации из массива в объект { имя_атрибута: значение }
     */
    unpackObjectAttributes: U;
}
/** Хелпер. Универсальный тип GeneratorSink, что бы проверять generic типы на принадлежность к GeneratorSink */
export declare type ExtendableGeneratorSink = GeneratorSink<Bucket<any>, AttributesPacker, AttributesUnpacker<ObjectAttributes>>;
/**
 * Извлекает тип бакета из GeneratorSink.
 * Сначала пробуем извлечь тип из дженерика `B`, если он указан явно.
 * В противном случае берем тип из первого аргумента функции `binder`
 */
export declare type BucketType<G extends ExtendableGeneratorSink> = G extends GeneratorSink<infer B, infer _P, infer _U> ? B : Parameters<G['binder']>[0];
/** Интерфейс, определяющий генераторы для стилевого слоя */
export interface Generator<S extends GeneratingLayerType, T extends {
    [sink in SinkName]?: ExtendableGeneratorSink;
}, G extends (...args: any) => void> {
    /** Тип стилевого слоя, для которого предназначен генератор */
    symbol: S;
    /** Кофиги проходов генератора объектов */
    sinks: {
        [sink in keyof T]: T[sink];
    };
    /** Генирирует графические данные */
    generate?: G;
    /** Генерирует элемент лейблинга */
    processElement?: LabelingProcessElement;
    /** Рассчитывает элементы лейблинга для лейбла */
    getLabelingInfo?: LabelingGetLabelingInfo;
}
/**
 * Синтаксический сахар для создания генераторов,
 * Нужен, что бы тип автоматически подхватывался из переданного объекта.
 */
export declare function inferGeneratorType<S extends GeneratingLayerType, T extends {
    [sink in SinkName]?: ExtendableGeneratorSink;
}, G extends (...args: any) => void, Ext extends Generator<S, T, G>>(generatorObject: Ext): Ext;
export declare type LabelingProcessElement = (style: HandyStyle, collector: Collector, element: LabelingTileElement, animDirection: number, pixelRatio: number, state: LabelingState, tileInfo: TileInfo) => void;
export declare type LabelingGetLabelingInfo = (label: Label, anchorWorld: AnchorWorld, style: HandyStyle, state: LabelingState, camera: Camera, pixelRatio: number) => void;
