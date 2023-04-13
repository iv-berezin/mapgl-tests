/// <reference types="@2gis/gl-matrix" />
import { GLContext } from './types';
/**
 * Текстуры используются для отрисовки изображений в WebGL
 */
export declare class Texture {
    static readonly ClampToEdgeWrapping = 8;
    static readonly Repeat = 9;
    static readonly MirroredRepeat = 10;
    static readonly NearestFilter = 1;
    static readonly NearestMipMapNearestFilter = 2;
    static readonly NearestMipMapLinearFilter = 3;
    static readonly LinearFilter = 4;
    static readonly LinearMipMapNearestFilter = 5;
    static readonly LinearMipMapLinearFilter = 6;
    static readonly RgbaFormat = 11;
    static readonly AlphaFormat = 12;
    static readonly RgbFormat = 13;
    static readonly UnsignedByte = 14;
    static readonly Float = 15;
    static readonly defaultOptions: TextureOptions;
    /**
     * Параметры для связывания текстуры
     */
    readonly options: TextureOptions;
    private _src;
    /**
     * Контекст WebGL, в котором была инициализирована текстура.
     * Используется только для удаления, подумать хорошо, прежде чем использовать для чего-то ещё.
     * @ignore
     */
    private _glContext;
    private _texture;
    /**
     * @param {TexImageSource} [src=null] В качестве
     * изображения может быть либо элемент img, либо canvas
     * @param {?TextureOptions} options
     */
    constructor(src?: TexImageSource | ArrayBufferView | null, options?: TextureOptions | Record<string, unknown>);
    /**
     * Связывает WebGL и данные текстуры.
     * При первом вызов происходит инициализация.
     *
     * @param {WebGLRenderingContext} gl
     * @param {?Number} index Номер текстуры в контексте WebGL.
     * Если его нет, используется уже активированный юнит текстуры.
     */
    enable(gl: GLContext, index?: number): this;
    /**
     * Удаляет текстуру из видеокарты
     */
    remove(): this;
    /**
     * Возвращает WebGL текстуру
     * @return {WebGLTexture}
     */
    getTexture(): WebGLTexture | null;
    /**
     * Обновляет часть текстуры
     *
     * @param {WebGLRenderingContext} gl
     * @param {HTMLImageElement | HTMLCanvasElement | ImageBitmap | ImageData | TypedArray} src
     * @param {number} x Горизонтальное смещение, с которого записываем в текстуру
     * @param {number} y Вертикальное смещение, с которого записываем в текстуру
     */
    subImage(gl: GLContext, src: TexImageSource, x: number, y: number): this;
    /**
     * Кладёт текстуру в видеокарту
     * @param {WebGLRenderingContext} gl
     */
    prepare(gl: GLContext): this;
    private _toGlParam;
}
/**
 * Параметры связывания текстуры
 */
export interface TextureOptions {
    magFilter: number;
    minFilter: number;
    wrapS: number;
    wrapT: number;
    format: number;
    generateMipmaps: boolean;
    flipY: boolean;
    premultiplyAlpha: boolean;
    size?: Vec2;
    unit?: number;
    type?: number;
}
