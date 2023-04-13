/// <reference types="@2gis/gl-matrix" />
import { GLContext } from './types';
/**
 * Используется для хранения и подготовки данных для передачи в атрибуты шейдера
 */
export declare class Buffer {
    static readonly ArrayBuffer = 1;
    static readonly ElementArrayBuffer = 2;
    static readonly StaticDraw = 10;
    static readonly DynamicDraw = 11;
    static readonly Float = 20;
    static readonly UnsignedByte = 21;
    static readonly UnsignedShort = 22;
    static readonly UnsignedInt = 23;
    static readonly Byte = 24;
    static readonly Short = 25;
    static readonly Int = 26;
    static readonly defaultOptions: BufferBindOptions;
    /**
     * Размер данных в буфере в байтах
     */
    byteLength: number;
    /**
     * Тип буфера. Буфер может использоваться для передачи массива данных,
     * так и для передачи индексов элементов из данных.
     * @type {Buffer.ArrayBuffer | Buffer.ElementArrayBuffer}
     */
    type: number;
    /**
     * Параметры для связывания буфера
     */
    options: BufferBindOptions;
    /**
     * Указывает, как часто данные буфера будут изменяться.
     * @type {Buffer.StaticDraw | Buffer.DynamicDraw}
     */
    drawType: number;
    /**
     * Тип элементов в индeксном буфере. Применим только к буферам типа ElementArrayBuffer
     * UNSIGNED_INT поддерживается при поддержке расширения OES_element_index_uint (core в WebGL2)
     * Определяется автоматически на основе наибольшего элемента в буфере
     * @type {Buffer.UnsignedByte | Buffer.UnsignedShort | Buffer.UnsignedInt | null}
     */
    elementsType: number | null;
    private _initData;
    /**
     * Исходный WebGL буфер
     */
    private _glBuffer;
    /**
     * Контекст WebGL, в котором был инициализирован буфер.
     * Используется только для удаления буфера, подумать хорошо, прежде чем использовать для чего-то ещё.
     */
    private _glContext;
    /**
     * @param initData Данные для инита буфера: содержимое буфера или его размер
     * @param options Параметры передачи буфера в видеокарту,
     * могут быть переопределены из {@link BufferChannel}
     * @param isElementArray Флаг определяющий является ли буффер индексным (если true)
     * или повертексным (если false)
     */
    constructor(initData: DataView | TypedArray | ArrayBuffer | number, options?: Partial<BufferBindOptions>, isElementArray?: boolean);
    /**
     * Связывает данные с контекстом WebGL.
     *
     * В случае Buffer.ArrayBuffer связывает с атрибутами шейдера.
     * А в случае Buffer.ElementArrayBuffer связывает массив индексов.
     *
     * Если используется первый раз, добавляет данные в контекст WebGL.
     *
     * @param gl Контекст WebGL
     * @param location Положение аттрибута для связывания данных с переменными в шейдере
     * @param options Параметры передаваемые в функцию vertexAttribPointer, если их нет,
     * то используются параметры конкретного буфера. Параметры должны быть переданы все.
     * @param instancesExt Экстеншн для работы с instanced буферами,
     */
    bind(gl: GLContext, location?: number | null, options?: BufferBindOptions | null, instancesExt?: ANGLE_instanced_arrays | null): this;
    /**
     * Удаляет данные из контекста WebGL.
     */
    remove(): this;
    /**
     * Заменяет часть буфера новыми данными и отправляет их в видеокарту
     * @param {WebGLRenderingContext} gl
     * @param {Number} index Индекс, с которого начать замену
     * @param {TypedArray} data Новые данные
     */
    subData(gl: WebGLRenderingContext, index: number, data: TypedArray): this;
    /**
     * Кладёт данные в видеокарту
     * @param gl WebGL Контекст
     * @ignore
     */
    prepare(gl: GLContext): this;
    /**
     * Возвращает GL-тип буфера
     * @param {WebGLRenderingContext} gl
     * @returns {number | null} GL-тип буфера
     * @ignore
     */
    getGLType(gl: GLContext): number | null;
    /**
     * Удаляет данные из видеокарты
     * @ignore
     */
    private _unprepare;
    /**
     * Преобразовывает параметры буфера в параметры WebGL
     * @param {WebGLRenderingContext | WebGL2RenderingContext} gl
     * @param {Buffer.ArrayBuffer | Buffer.ElementArrayBuffer} param
     * @ignore
     */
    private _toGlParam;
    private _hasRealWebGLContext;
}
/**
 * Параметры передаваемые в функцию vertexAttribPointer.
 *
 */
export interface BufferBindOptions {
    /**
     * @property {Number} Размерность элементов в буфере
     */
    itemSize: number;
    /**
     * @property {Buffer.Float | Buffer.UnsignedByte} dataType Тип данных в буфере
     */
    dataType: number;
    /**
     * @property {Boolean} normalized Используется для целочисленных типов. Если выставлен в true, то
     * значения имеющие тип BYTE от -128 до 128 будут переведены от -1.0 до 1.0.
     */
    normalized: boolean;
    /**
     * @property {Number} stride
     */
    stride: number;
    /**
     * @property {Number} offset
     */
    offset: number;
    /**
     * @property {Number} instanceDivisor
     */
    instanceDivisor: number;
}
