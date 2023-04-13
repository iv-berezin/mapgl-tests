import { FnRegistry } from '../utils/thread/fnRegistry';
import { SyncableMetatile, MetatileCollectedData } from './common';
/**
 * Синхронизируемый метатайл, существующий в воркере парсера.
 * Заполняется по мере поступления новых данных. На его основе генерируются объекты.
 * Сейчас может существовать только в единственном экземпляре из-за FnRegistry.
 */
export declare class MasterSyncableMetatile extends SyncableMetatile {
    private obClassEnumIndex;
    private sublayerEnumIndex;
    private workerParserSyncMetatile;
    constructor(fnRegistry: FnRegistry);
    /**
     * Наполняет данные в метатайле и синхронизирует их в других потоках.
     * @param data Данные для наполнения и синхронизации.
     */
    addData(data: MetatileCollectedData): void;
}
