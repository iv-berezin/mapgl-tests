import { FnRegistry } from '../utils/thread/fnRegistry';
import { SyncableMetatile } from './common';
/**
 * Синхронизируемый метатайл, существующий в главном треде и воркере лейблинга.
 * Обновляется по мере поступления новых данных из master-метатайла в воркере парсера.
 * Сейчас может существовать только в единственном экземпляре на тред из-за FnRegistry.
 */
export declare class SlaveSyncableMetatile extends SyncableMetatile {
    constructor(fnRegistry: FnRegistry);
    private sync;
}
