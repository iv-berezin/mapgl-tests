/// <reference types="@2gis/gl-matrix" />
import { Renderer as DglRenderer } from '../2gl/Renderer';
import { RenderTarget } from '../2gl/RenderTarget';
import { ShaderProgram } from '../2gl/ShaderProgram';
import { CustomSceneObject, RenderingSettings } from '../types/symbols';
import { MapModules } from './mapModules';
import { ShaderProgramName } from '../symbols/groups/programs';
import { StyleColor } from '../expressions/types';
import { TileObject, TileObjectBase } from '../tiles/tileObject';
import { DrawerEffects } from '../symbols/drawer/drawerEffects';
import { Bounds, MapState } from '../types';
import { SceneObject } from '../types/generatedSceneObjects';
/**
 * Конфиг дополнительного фреймбуфера в который будем отрисовывать стилевые слои.
 * ID фреймбуфера указывается в стилевом слое в свойстве `framebufferId`.
 */
export interface Framebuffer {
    renderTarget: RenderTarget;
    /**
     * Цвет, которым будет залит фреймбуфер перед отрисовкой.
     * Если цвет не указан - очищать фреймбуфер перед отрисовкой не нужно.
     * Вектор RGBA, компоненты которого лежат в пределах от 0 до 1.
     */
    clearColor?: Vec4;
    /** Нужно ли очищать глубину фреймбуфера */
    clearDepth?: boolean;
    /**
     * Пересоздает фреймбуфер, в случае изменения размера карты.
     */
    onResize: () => void;
    /**
     * Вызывается непосредственно перед отрисовкой фреймбуфера
     */
    onRenderStart?: () => void;
    /**
     * Вызывается непосредственно после отрисовки фреймбуфера
     */
    onRenderEnd?: () => void;
    /**
     * Камера, используемая фреймбуфером.
     * Если не указана - используем матрицу карты
     */
    getViewProjectionMatrix?: () => Float64Array | number[];
    /**
     * Индекс, определяющий порядок рендеринга фреймбуферов.
     * Нужен, если для отрисовки одного слоя требуется несколько фреймбуферов,
     * порядок отрисовки которых важен.
     */
    renderIndex?: number;
    /** Нужно ли отрисовывать фреймбуфер с учетом рельефа */
    useDem?: boolean;
}
/**
 * Интерфейсы группы объектов для отрисовки фреймбуфера плоской карты.
 * Объекты сгруппированы по тайлам. Это нужно, что бы фильтровать тайлы,
 * попадающие область отрисовки.
 */
interface FlatMapFramebufferObjectsGroup {
    framebuffer: Framebuffer;
    tiles: Map<TileObjectBase, Array<SceneObject | CustomSceneObject>>;
}
export declare class Renderer extends DglRenderer {
    static webglVersion: number;
    identifyBuffer: RenderTarget;
    symbolSettingsList: RenderingSettings;
    private state;
    private modules;
    private timers?;
    private shaderPrograms;
    private framebuffers;
    /** Фреймбуферы, которые отрисовывались в прошлый цикл отрисовки. */
    private lastRenderedFramebuffers;
    constructor(state: MapState, modules: MapModules);
    /**
     * Устанавливает цвет фона карты
     * @param color Цвет в формате для шейдеров
     */
    setClearColor(color: StyleColor): this;
    setSize(width: number, height: number): this;
    updateIdentifySize(): this;
    clear(clearDepth?: boolean): this;
    clearWithColor(color: Vec4, clearDepth?: boolean): void;
    /** Рендерит тайловые объекты на сцене */
    renderTileObjects(tileObjects: TileObjectBase[]): this;
    /**
     * Рендерит identify сцену для определения объекта в специальный буфер
     */
    renderIdentify(tileObjects: TileObject[]): void;
    /**
     * Получает пиксели экрана в специально отрендеренной identify сцене
     */
    readIdentifyPixels(): Uint8Array;
    getRenderingContext(): import("../2gl/types").GLContext;
    getShaderProgram(name: ShaderProgramName): ShaderProgram;
    destroy(): void;
    addFramebuffer(fb: Framebuffer): number;
    getFramebuffer(index: number): Framebuffer | undefined;
    removeFramebuffer(index: number): void;
    /**
     * Отрисовывает меш рельефа на canvas карты
     */
    renderDemMesh(effects: DrawerEffects, flatObjectsGroup: FlatMapFramebufferObjectsGroup, identify?: boolean): void;
    private trackContextLost;
    private clearIdentify;
    private clearFramebuffer;
    /**
     * Сортирует тайлы и объекты сцены по фреймбуферам.
     * Группа объектов для отрисовки на canvas карты будет последней.
     */
    private groupObjectsByFramebuffer;
}
/**
 * Пересекаются ли границы двух тайлов, c учетом буфера вокруг второго тайла.
 * Это логика специфичная для рельефа. Когда мы хоти получить все пересекающися тайлы,
 * но исключить из выборки те, что просто касаются границами.
 */
export declare function boundsIntersects(a: Bounds, b: Bounds, bGap?: number): boolean;
export {};
