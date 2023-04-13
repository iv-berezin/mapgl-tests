/// <reference types="@2gis/gl-matrix" />
import { RendererPlugin } from './RenderPlugin';
import { RenderTarget } from './RenderTarget';
import { GLContext } from './types';
/**
 * Используется для инициализация WebGL контекста и отрисовки объектов.
 * Для некоторых объектов может использовать специфичные рендеры.
 *
 * @param {Object} options
 * @param {HTMLElement} [options.canvas] Элемент canvas
 * @param {WebGLRenderingContext} [options.gl] Если элемент canvas не указан, то можно напрямую передать WebGL контекст
 * @param {Number} [options.pixelRatio=1] Pixel ratio экрана
 * @param {Boolean} [options.antialias=true] Использовать ли антиалиасинг
 * @param {Boolean} [options.stencil=false] Использовать ли stencil buffer
 * @param {Boolean} [options.autoClear=true] Стирать ли прошлый кадр перед новый рендерингом
 * @param {Number[]} [options.clearColor=[1,1,1,1]] Цвет заливки в формате RGBA
 * @param {Boolean} [options.sortObjects=true] Нужно ли сортировать прозрачные объекты по удаленности или по renderOrder
 * @param {Boolean} [options.preserveDrawingBuffer=false] Сохранять ли содержимое Drawing Buffer
 * (может влиять на производительность)
 * */
export declare class Renderer {
    autoClear: boolean;
    clearColor: Vec4;
    sortObjects: boolean;
    webGlExtensions: Record<string, any>;
    protected _gl: GLContext;
    private _canvasElement;
    private _pixelRatio;
    private _plugins;
    private _maxPluginOrder;
    private _size;
    private _renderTarget;
    constructor(options: RendererOptions);
    /**
     * Добавляет {@link RendererPlugin} к рендеру. К рендеру может быть добавлен только один плагин каждого типа.
     * @param plugin Плагин
     * @param order Каждый плагин выполняется при рендеринге по возрастанию order,
     * если его нет, то выбирается максимальный order + 1.
     */
    addPlugin(plugin: RendererPlugin, order?: number): this;
    /**
     * Устанавливает параметр pixel ratio
     * @param {Number} value
     */
    setPixelRatio(value: number): this;
    /**
     * Возвращает текущий pixel ratio
     * @returns {Number}
     */
    getPixelRatio(): any;
    /**
     * Устанавливает размеры элементу canvas и viewport для WebGL
     * @param {Number} width Ширина в пикселях
     * @param {Number} height Высота в пикселях
     */
    setSize(width: number, height: number): this;
    /**
     * Устанавливает viewport для WebGL
     * Если размеры не указаны, то выставляет размеры указанные в функции {@link Renderer#setSize}
     * @param {Number} [width] Ширина в пикселях
     * @param {Number} [height] Высота в пикселях
     */
    setViewport(width?: number, height?: number): this;
    /**
     * Возвращает текущий viewport WebGL
     * @returns {Array}
     */
    getSize(): Vec2;
    /**
     * Устанавливает RenderTarget
     * @param {?RenderTarget} renderTarget
     */
    setRenderTarget(renderTarget: RenderTarget): this;
    /**
     * Считывает указанную область пикселей в массив
     * @param {Number} x Координаты начала области
     * @param {Number} y Координаты начала области
     * @param {Number} width Ширина области
     * @param {Number} height Высота области
     * @param {TypedArray} array Массив для записи данных
     */
    readPixels(x: number, y: number, width: number, height: number, array: TypedArray): this;
    /**
     * Очищает текущий кадр и заливает цветом указанным в clearColor
     */
    clear(): this;
    /**
     * Включает расширение WebGL
     *
     * @param {String} name Название расширения
     */
    addExtension(name: string): this;
}
/**
 * Состояние рендера. Передается объектам для отрисовки.
 *
 * @typedef {Object} State
 * @property {WebGLRenderingContext} gl
 * @property {Scene} scene
 * @property {Camera} camera
 * @property {Renderer} renderer
 */
interface RendererOptsWithGL extends WebGLContextAttributes {
    version?: number;
    pixelRatio?: number;
    autoClear?: undefined;
    clearColor?: [number, number, number, number];
    gl: GLContext;
}
interface RendererOptsWithCanvas extends WebGLContextAttributes {
    version?: number;
    pixelRatio?: number;
    autoClear?: undefined;
    clearColor?: number[];
    canvas: HTMLCanvasElement | string;
}
declare type RendererOptions = RendererOptsWithGL | RendererOptsWithCanvas;
export {};
