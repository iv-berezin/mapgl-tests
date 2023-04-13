/// <reference types="@2gis/gl-matrix" />
import { Texture, TextureOptions } from './Texture';
import { GLContext } from './types';
/**
 * Используется для создания фреймбуфера, куда можно отрендерить кадр.
 */
export declare class RenderTarget {
    static defaultOptions: TextureOptions & {
        size: number[];
        generateMipmaps: boolean;
    };
    /**
     * Параметры для связывания фреймбуфера
     * @type {RenderTargetOptions}
     */
    readonly options: RenderTargetOptions;
    /**
     * Текстура создается в конструкторе, чтобы можно было сразу получить на нее ссылку.
     */
    private _texture;
    /**
     * Контекст WebGL, в котором был инициализирован фреймбуфер.
     * Используется только для удаления, подумать хорошо, прежде чем использовать для чего-то ещё.
     */
    private _glContext;
    private _frameBuffer;
    private _renderBuffer;
    constructor(options?: Partial<RenderTargetOptions>);
    /**
     * Связывает компоненты с контекстом WebGL
     * @param {WebGLRenderingContext} gl
     */
    bind(gl: GLContext): this;
    /**
     * Устанавливает пустой фреймбуфер у контекста WebGL
     * @param {WebGLRenderingContext} gl
     */
    unbind(gl: GLContext): this;
    /**
     * Удаляет фреймбуфер из видеокарты
     */
    remove(): this;
    /**
     * Устанавливает размер фреймбуферу
     * @param {vec2} size
     */
    setSize(size: Vec2): this;
    /**
     * Возвращает текущую текстуру фреймбуфера
     * @return {Texture | null}
     */
    getTexture(): Texture | null;
    /**
     * Инициализирует фреймбуфер, текстуры и рендербуфер
     * @param {WebGLRenderingContext} gl
     * @ignore
     */
    private _prepare;
    /**
     * Удаляет данные из видеокарты
     * @ignore
     */
    private _unprepare;
    /**
     * Проверяет инициализацию фреймбуфера
     * @param {WebGLRenderingContext} gl
     * @ignore
     */
    private _checkComplete;
}
/**
 * Параметры связывания текстуры
 */
interface RenderTargetOptions extends TextureOptions {
    size: Vec2;
}
export {};
