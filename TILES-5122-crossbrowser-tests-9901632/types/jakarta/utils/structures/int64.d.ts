declare const INT64_TYPE = 64;
/**
 * Удобная струтура для работы с большими числами, в нашем случае это массив из 4 элементов
 */
declare type TempInt = number[];
/**
 * 64-битное целое число представленное в виде двух 32-битных [low, hi] разрядов
 */
export interface Int64 {
    type: typeof INT64_TYPE;
    lo: number;
    hi: number;
}
export declare function createInt64(lo: number, hi: number): Int64;
export declare function isInt64(a: any): a is Int64;
export declare function int64AreEqual(a: Int64, b: Int64): boolean;
/**
 * Проверяет экв-ть двух массивов Id
 */
export declare function int64ArraysAreEqual(idsA: Int64[], idsB: Int64[]): boolean;
export declare function int64ToString(x: Int64): string;
export declare function int64fromString(s: string): Int64;
/**
 * Переводит 32-битное число в удобную нам структуру
 */
declare function toArray(x: number): TempInt;
/**
 * Умножает 32-битное число на 2^32
 */
declare function multiply232(a: TempInt): void;
/**
 * Делит 64-битное число на 2^32
 * @param out Результат
 * @param a Делимое
 */
declare function divide232(out: TempInt, a: TempInt): void;
/**
 * Складывает два числа, результат записывает в первое
 */
declare function sum(a: TempInt, b: TempInt): void;
/**
 * Вычитает два числа, результат записывает в первое.
 * Предполагается, что a > b.
 */
declare function sub(a: TempInt, b: TempInt): void;
/**
 * Переводит 64-битное число из внутренней структуры в строку
 */
declare function toString(x: TempInt): string;
/**
 * Получает из внутренней струкруты в 32-битное число
 */
declare function toNumber(x: TempInt): number;
/**
 * Переводит 64-битное число записанное в строкой во внутреннюю структуру
 */
declare function fromString(s: string): TempInt;
/**
 * Переводит массив из [нижних битов, верхних битов] одного 64-битного числа в строковое представление
 */
declare function loHiToString(loPart: number, hiPart: number): string;
/**
 * Переводит 64-битное число из строкового представления в массив из нижних битов, верхних битов]
 */
declare function stringToLoHi(str: string): number[];
export declare const testHandles: {
    toArray: typeof toArray;
    multiply232: typeof multiply232;
    divide232: typeof divide232;
    sum: typeof sum;
    sub: typeof sub;
    toString: typeof toString;
    toNumber: typeof toNumber;
    fromString: typeof fromString;
    loHiToString: typeof loHiToString;
    stringToLoHi: typeof stringToLoHi;
};
export {};
