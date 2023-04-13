import { Metatile } from '../types/styles';
export declare type SyncMetatile = (data: MetatileSyncableData) => void;
export declare type MetatileSyncableData = Pick<Required<Metatile>, 'dictionaries' | 'reverseDictionaries'>;
export interface MetatileCollectedData {
    sublayers: Set<string>;
    objectClasses: Set<string>;
}
/**
 * Общий класс для синхронизируемого метатайла.
 */
export declare class SyncableMetatile implements Required<Metatile> {
    dictionaries: Required<Metatile>['dictionaries'];
    reverseDictionaries: Required<Metatile>['reverseDictionaries'];
    version: Required<Metatile>['version'];
    defaultProps: Required<Metatile>['defaultProps'];
    tileProps: Required<Metatile>['tileProps'];
    tilePropsByIndex: Required<Metatile>['tilePropsByIndex'];
    hash: number;
    constructor();
}
