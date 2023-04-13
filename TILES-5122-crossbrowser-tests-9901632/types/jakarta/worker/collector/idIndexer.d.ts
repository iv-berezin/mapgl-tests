import { WorkerName, IdentifyIds, MapPoint } from '../../types';
import { Int64 } from '../../utils/structures/int64';
import { HandyStyleLayer } from '../../expressions/types';
import { Metatile } from '../../types/styles';
/**
 * Индекс для объектов, которые не участвуют в identify [255, 255, 255, 255].
 * Также NAN_INDEX используется как значение по умолчанию для аргументов objectClass в getIndex() для тех объектов,
 * у которых нет свойства objectClass в атрибутах, и floorId.
 */
export declare const NAN_INDEX = 4294967295;
/**
 * Весь возможный диапазон индексов [0, 2^32 - 1] поделен на несколько более мелких по количеству используемых тредов
 */
export declare const identifyRanges: {
    [name: string]: {
        min: number;
        max: number;
    };
};
/**
 * Мапит 64-битные id [low, hi] в уникальные индексы (одинаковые id вернут разные индексы), чтобы их можно было
 * упаковать в цвета геометрий, а потом вытащить обратно.
 */
export declare class IdIndexer {
    /**
     * Массив айдишников, каждый id занимает два места в массиве
     * Сбрасывается для каждого тайла
     */
    private ids;
    private phases;
    private sublayers;
    private styleIds;
    private layerIds;
    private instanceIds;
    private objectClasses;
    private floorIds;
    /**
     * Содержит центры точечных POI для их передачи в события мыши.
     * Для всех других объектов содержит `INVALID_IDENTIFY_CENTER_COORD`.
     */
    private center;
    /**
     * Мапа строковых значений, которые не могут быть представлены числами.
     *
     * ВНИМАНИЕ:Это мапа должна иметь минимальное количество элементов,
     * добавлять что-то новое с осторожностью! Поскольку она будет передаваться между тредами,
     * а передачи строковых значений происходит медленно.
     *
     * На данный момент строковые значения появляются только в кейсе с персоналазированными POI, а их бывает только меньше 10.
     */
    private strings;
    /**
     * Постоянно увеличивающийся индекс
     * Cбрасывается только в единственном случае: если стал больше, чем maxIdentifyIndex
     */
    private index;
    private maxIdentifyIndex;
    private minIdentifyIndex;
    constructor(workerName: WorkerName);
    /**
     * Возвращает индекс соответствующий данному id, чтобы зашить его в цвет пикселя.
     */
    getIndex(a: {
        id: number | Int64;
        styleId: number;
        layer: HandyStyleLayer;
        sublayer: string;
        objectClass?: Int64 | string;
        instanceId?: number;
        metatile?: Metatile;
        center?: MapPoint;
        floorId?: Int64;
    }): number;
    /**
     * Возвращает данные об соответствие id и индексов, чтобы передать их в главный тред.
     */
    getPacked(): IdentifyIds;
}
