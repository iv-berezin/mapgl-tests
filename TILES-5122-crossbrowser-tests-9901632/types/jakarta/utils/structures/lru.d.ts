/**
 * Имплементация LRU алгоритма кэширования
 */
export declare class LRU<T> {
    private queue;
    private data;
    private size;
    private onRemove;
    constructor(size: number, onRemove?: (k: string, d: T) => void);
    /**
     * Добавляет новый элемент в кэш
     */
    add(key: string, data: T): void;
    /**
     * Метод извлекает элемент из кэша, не вызывая onRemove
     */
    remove(key: string): void;
    /**
     * Метод возвращает элемент из кэша по ключу и обновляет позицию элемента
     */
    get(key: string): T;
    /**
     * Очищает кэш
     */
    reset(): void;
    /**
     * Изменяет размер кэша
     */
    setSize(size: number): void;
    /**
     * Возвращает размер кэша
     */
    getSize(): number;
    /**
     * Возвращает список ключей элементов в кэше
     */
    keys(): string[];
    /**
     * Возвращает массив данных кэша
     */
    getData(): T[];
    /**
     * Оставляет в кэше только size элементов, остальные выкидывает, вызывает метод onRemove
     */
    private shrink;
}
