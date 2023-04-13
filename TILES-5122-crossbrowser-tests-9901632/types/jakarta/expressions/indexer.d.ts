export declare class HandyIndexer {
    private index;
    private keysMap;
    /**
     * @param offset Задает начальный индекс
     */
    constructor(offset?: number);
    getIndex(): number;
    getUniqueIndex(key: string): number;
    getIndexedKeys(): {
        [key: string]: number;
    };
}
