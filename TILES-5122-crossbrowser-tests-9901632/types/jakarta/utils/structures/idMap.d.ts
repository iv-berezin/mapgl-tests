import { Int64 } from './int64';
export declare class IdMap<T> {
    private map;
    constructor(map?: {
        [lo: number]: {
            [hi: number]: T;
        };
    });
    set(key: Int64, value: T): void;
    get(key: Int64): T | undefined;
    serialize(): {
        [lo: number]: {
            [hi: number]: T;
        };
    };
    forEach(callback: (elem: T, key: Int64) => void): void;
    clear(): void;
}
