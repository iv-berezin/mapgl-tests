/**
 * Функция для декодирования дельта стримов.
 * В зените исопльзуется одна на все стримы, кажется, можно и нам попробовать так сделать.
 */
/// <reference types="@2gis/gl-matrix" />
export declare const integer: {
    [bytes: number]: (array: TypedArray) => void;
};
