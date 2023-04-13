import { Int64 } from './int64';
/**
 * Хранит id состоящие из двух компонент low, hi, в словаре со вложенной структурой:
 * - вначале по ключам hi
 * - потом по low
 * Т.о. чтобы проверить наличие какого-либо id, нужно проверить внутри map[id[1]][id[0]].
 */
export declare class IdSet {
    private map;
    /**
     * Превращает массив id состоящих из двух компонент low, hi в множество
     */
    constructor(ids?: Int64[]);
    has(id: Int64): boolean;
    hasSome(ids: Int64[]): boolean;
    add(id: Int64): void;
    addFromFlatArray(ids: ArrayLike<number>): void;
    toFlatArray(): number[];
}
