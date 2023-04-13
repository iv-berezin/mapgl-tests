/// <reference types="@2gis/gl-matrix" />
/**
 * Создает обертку вокруг буфера с разными view.
 * Соддержит оффсет для чтения следующего элемента из буфера.
 */
export declare class BinarySource {
    f32: Float32Array;
    s32: Int32Array;
    s16: Int16Array;
    s8: Int8Array;
    u32: Uint32Array;
    u16: Uint16Array;
    u8: Uint8Array;
    buffer: ArrayBuffer;
    offset: number;
    constructor(buffer: ArrayBuffer);
    readS8(): number;
    readU16(): number;
    readU32(): number;
    readF32(): number;
    readU8Vector(itemSize?: number): Uint8Array;
    readU16Vector(itemSize?: number): Uint16Array;
}
/**
 * Создает массив нужного типа, с нужного оффсета и с нужной длиной.
 * Сдвигает source.offset на размер стрима.
 */
export declare function integerStream(source: BinarySource, TypedArrayConstructor: any, length: number, isDelta?: boolean): TypedArray;
export declare function streamByIndex(source: BinarySource, length: number, index: number): TypedArray | Uint8Array[];
/**
 * Вычисляет сумму всех элементов в стриме
 */
export declare function summarizeStream(stream: TypedArray): number;
/**
 * Создает новый стрим на основе переданного
 */
export declare function sliceStream(stream: any, start: number, length: number): TypedArray;
