import { GeneratorBucketType, GeneratorSinkNames } from '../../symbols/generators';
import { IdIndexer } from './idIndexer';
import { AtlasPacker } from './atlasPacker';
import { WorkerName, CollectorOutput } from '../../types';
import { Int64 } from '../../utils/structures/int64';
import { GeneratorBinder } from '../../types/generators';
import { ObjectAttributeValue } from '../../utils/objectAttributes';
import { PreLabel } from '../../symbols/generators/preLabeling/common';
import { GeneratingLayerType, SinkName } from '../../types/generatedSceneObjects';
/**
 * Коллектор выполняет 2 вещи:
 * 1. Memory preallocation - аллоцирует большие массивы (далее buckets) в памяти заранее, чтобы не приходилось этого делать
 *    при каждой новой генерации объектов карты.
 *
 * 2. Batching - для одинаковых WebGL-объектов используются одни и те же бакеты, что позволяет
 *    рендерить их разом за 1 drawcall, а не по отдельности.
 *
 * Важно не забывать переодически очищать коллектор `collector.reset()`, чтобы выделенная память
 * не держалась бесконечно.
 *
 * TODO: исторически сложилось, что в коллекторе еще хранятся такие сущности как IdIndexer, AtlasPacker,
 * которые вообще-то не соответствуют его основной цели и должны быть из него вытащены.
 */
export declare class Collector {
    idIndexer: IdIndexer;
    atlasPacker: AtlasPacker;
    private geoIds;
    private floorHidingMap;
    private modelsToLoad;
    private dataModels;
    private dataModelsIndex;
    /**
     * Структурированный список хранилищ: symbol -> sink -> Bucket[]
     */
    private buckets;
    /**
     * Список добавленных хранилищ в момент действия генераторов
     * После каждого генератора сбрасывается
     */
    private addedBuckets;
    private labels;
    constructor(workerName: WorkerName);
    /**
     * Очищает всю выделенную память.
     * Важно, что IdIndexer и AtlasPacker при этом не чистятся!
     */
    reset(): void;
    addLabel(label: PreLabel): void;
    addModelToLoad(modelIndex: number): void;
    /**
     * Индексируем модели из данных. Модели из данных носят отрицательные
     * индексы, так как положительные заняты моделями из стилей.
     */
    addModelToLoadByUrl(url: string): number;
    getDataModelUrl(modelIndex: number): string | undefined;
    /**
     * Возвращает бакет подходящий для конкретного WebGL-объекта.
     * Каждый такой объект характеризуется символом, синком и набором атрибутов.
     *
     * @param styleLayer Символ или условный знак
     * @param sink Синк или проход. Каждый условный знак на карте может рисоваться несколькими проходами, например, дома рисуются с помощью линий и площадей.
     * @param attributes Набор значения атрибутов записанных в массив.
     * @param binder Функция, которая устанавливает view-массивы над буфером в бакете для удобной работы в генераторах.
     */
    getBucket<T extends GeneratingLayerType, S extends GeneratorSinkNames<T>>(styleLayer: T, sink: S extends SinkName ? S : SinkName, attributes: ObjectAttributeValue[], binder: GeneratorBinder<GeneratorBucketType<T, S>>, drawMode?: number): GeneratorBucketType<T, S>;
    /**
     * Отвечает на вопрос, был ли хотя бы один из бакетов переполнен в ходе работы генераторов.
     * Если бакет был переполнен, то выделенная память очистится и пересоздатся с большим размером.
     * После чего нужно будет повторно вызвать генерацию объектов.
     */
    isOverloaded(): boolean;
    setGeoIds(ids: Uint32Array): void;
    addFloorHidingMap(hiddenId: Int64, floorId: Int64): void;
    /**
     * Возвращает накопленные данные и сбрасывает оффсеты буферов
     */
    getAccumulatedData(): CollectorOutput;
}
