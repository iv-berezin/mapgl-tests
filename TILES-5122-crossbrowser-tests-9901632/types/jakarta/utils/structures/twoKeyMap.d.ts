declare type Key = number | string;
export declare class TwoKeyMap<T> {
    protected map: {
        [keyA: string]: {
            [keyB: string]: T;
        };
    };
    constructor(twoKeyMap?: TwoKeyMap<T>);
    set(a: Key, b: Key, data: T): void;
    get(a: Key, b: Key): T | undefined;
    has(a: Key, b: Key): boolean;
}
export {};
