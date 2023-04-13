import { GlobalBinder } from '../symbols/groups/globalBinders';
import { ObjectBinder } from '../symbols/groups/objectBinders';
import { VaoCreator } from '../symbols/groups/vaoCreators';
import { Buffer } from '../2gl/Buffer';
import { ArrowStyleLayer, BuildingModelStyleLayer, GltfModelStyleLayer, CircleStyleLayer, DashedLineStyleLayer, HeatmapStyleLayer, LabelLineStyleLayer, LineExtrusionStyleLayer, LineStyleLayer, OneWayLineStyleLayer, PointStyleLayer, PolygonExtrusionStyleLayer, PolygonStyleLayer, RasterStyleLayer, ShiftedLineStyleLayer, HandyStyleLayer, HandyCustomLayer, DemStyleLayer, MeshStyleLayer } from '../expressions/types';
import { ShaderProgramName } from '../symbols/groups/programs';
import { GeneratorSinkNames } from '../symbols/generators';
import { ObjectAttributes } from '../utils/objectAttributes';
import { ProgramBinder } from '../symbols/groups/programBinders';
import { ArrowStrokeAttributes, BuildingModelFillAttributes, BuildingModelStrokeAttributes, DemElevationAttributes, DemFlatBottomAttributes, GltfInstancedAttributes, HeatmapFillAttributes, ISceneObject, LabelLineAttributes, MeshFillAttributes, MeshTextureAttributes, OneWayLineRasterAttributes, PointRasterAttributes, PointTextAttributes, PolygonExtrusionAttributes, PolygonFillAttributes, PolygonStrokeAttributes, RasterFillAttributes, SceneObject } from './generatedSceneObjects';
import { TileBinder } from '../symbols/groups/tileBinders';
import { WebglState } from '.';
export declare const enum SceneObjectType {
    Tile = 0,
    Custom = 1
}
/**
 * Объекты сцены, который необходим для отрисовки кастомных стилевых слоевю.
 * Представляет собой заглушку, необходимую только для нашего механизма рендеринга.
 */
export interface CustomSceneObject {
    type: SceneObjectType.Custom;
    attributes: ObjectAttributes;
    tile: {
        zoomLevel: 0;
    };
    layerSettings: {};
}
export interface SpreaderResult {
    buffers: Buffer[];
    objects: SceneObject[];
    identifyObjects: SceneObject[];
}
export declare type UniformSetName = 'fontFill' | 'fontHalo';
export interface RenderingSettings {
    line: SymbolRenderingSettings<LineStyleLayer>;
    lineExtrusion: SymbolRenderingSettings<LineExtrusionStyleLayer>;
    labelLine: SymbolRenderingSettings<LabelLineStyleLayer, {
        raster: LabelLineAttributes;
    }>;
    oneWayLine: SymbolRenderingSettings<OneWayLineStyleLayer, {
        raster: OneWayLineRasterAttributes;
    }>;
    point: SymbolRenderingSettings<PointStyleLayer, {
        raster: PointRasterAttributes;
        text: PointTextAttributes;
    }>;
    polygon: SymbolRenderingSettings<PolygonStyleLayer, {
        fill: PolygonFillAttributes;
        stroke: PolygonStrokeAttributes;
    }>;
    mesh: SymbolRenderingSettings<MeshStyleLayer, {
        fill: MeshFillAttributes;
        raster: MeshTextureAttributes;
    }>;
    polygonExtrusion: SymbolRenderingSettings<PolygonExtrusionStyleLayer, {
        sideFill: PolygonExtrusionAttributes;
        sideStroke: PolygonExtrusionAttributes;
        topFill: PolygonExtrusionAttributes;
        topStroke: PolygonExtrusionAttributes;
    }>;
    dashedLine: SymbolRenderingSettings<DashedLineStyleLayer>;
    shiftedLine: SymbolRenderingSettings<ShiftedLineStyleLayer>;
    buildingModel: SymbolRenderingSettings<BuildingModelStyleLayer, {
        fill: BuildingModelFillAttributes;
        stroke: BuildingModelStrokeAttributes;
    }>;
    gltfModel: SymbolRenderingSettings<GltfModelStyleLayer, {
        anchor: ObjectAttributes;
        instances: GltfInstancedAttributes;
        fill: ObjectAttributes;
    }>;
    arrow: SymbolRenderingSettings<ArrowStyleLayer, {
        stroke: ArrowStrokeAttributes;
    }>;
    raster: SymbolRenderingSettings<RasterStyleLayer, {
        fill: RasterFillAttributes;
    }>;
    circle: SymbolRenderingSettings<CircleStyleLayer>;
    heatmap: SymbolRenderingSettings<HeatmapStyleLayer, {
        fill: HeatmapFillAttributes;
        framebuffer: ObjectAttributes;
    }>;
    dem: SymbolRenderingSettings<DemStyleLayer, {
        elevation: DemElevationAttributes;
        flatBottom: DemFlatBottomAttributes;
        hillshade: ObjectAttributes;
        mesh: ObjectAttributes;
        ground: ObjectAttributes;
    }>;
}
declare type SymbolRenderingSettings<T extends Exclude<HandyStyleLayer, HandyCustomLayer>, U extends Record<GeneratorSinkNames<T['type']>, ObjectAttributes> = {
    [key in GeneratorSinkNames<T['type']>]: ObjectAttributes;
}> = {
    [sink in GeneratorSinkNames<T['type']>]?: Array<LayerRenderingSettings<T, ISceneObject<T['type'], sink, U[sink]>>>;
};
/**
 * Конфиг отрисовки слоя символа
 */
export interface LayerRenderingSettings<T = {}, S = SceneObject> {
    /**
     * Имя шейдерной программы используемой для отрисовки слоя
     */
    programName: ShaderProgramName;
    /**
     * Функция, создающая Vao -
     * обертка над vertex array object. Нужна для удобной передачи атрибутов в шейдерную программу
     */
    vaoCreator: VaoCreator;
    /**
     * Параметры инициализации WebGL для отрисовки группы объектов
     */
    webglState: WebglState;
    /**
     * Функции, инициализирующие юниформы шейдерной программы не зависящие от объектов и стилевых слоев.
     * Устанавливаются перед отрисовкой карты для каждой программы.
     */
    programBinder?: ProgramBinder;
    /**
     * Функции, инициализирующие зависящие от стилевого слоя (но не зависящие от отрисовываемого объекта)
     * юниформы и текстуры для шейдерной программы. Устанавливаются перед отрисовкой каждого стилевого слоя.
     */
    layerBinder?: GlobalBinder;
    /**
     * Функции, инициализирующие зависящие от отрисовываемого объекта юниформы для шейдерной программы
     */
    objectBinder: ObjectBinder<T, S>;
    /**
     * Функции, устанавливающие юниформы, зависимые от зума тайла.
     * Если такой биндер установлен - объекты перед отрисовкой
     * будут дополнительно сгруппированы по зуму.
     * И для каждой группы будет вызван данный биндер.
     * Например: ширина дороги устанавливается в долях от тайла.
     */
    zoomBinder?: ObjectBinder<T, S>;
    /**
     * Функция, устанавливающая юниформы, непосредственно перед отрисовкой объекта.
     * Например, если перед отрисовкой нужно установить в юниформу матрицу тайла или его координаты.
     */
    tileBinder?: TileBinder<T, S>;
    /**
     * Имя карты юниформ используемых для отрисовки слоя, по умолчанию 'fill'.
     * С помощью нее выбираем нужные значения юниформ для отрисовки слоя.
     *
     * Например, чтобы отобразить линию с двумя обводками, мы рисуем по очереди 3 линии разного цвета, одну над другой,
     * причем, чем выше линия тем она уже. Для отрисовки каждой из линий используется одна и та же шейдерная программа,
     * принимающая одни и те же наименования юниформ (width, color, …) с разными значениями. Но при генерации задаем
     * юниформы для всех линий сразу, для этого используем уникальные имена, типа: width, width2, width3.
     * Поэтому мы просто конфигурируем 3 слоя отрисовки, по одному на каждую линию, отличающиеся только параметром
     * uniformSet: 'fill', 'border', 'border2'. Карта юниформ 'border2', например, будет такой
     * ```
     * border2: {
     *   width: 'width3',
     *   color: 'color3',
     *   phase: 'phase3',
     * },
     * ```
     */
    uniformSet?: UniformSetName;
    /**
     * Вторичный индекс — используется для дополнительной группировки объектов
     * внутри группы объектов с одинаковым индексом в процессе отрисовки
     */
    subRenderIndex?: number;
    /**
     * Если true, значит это слой для отрисовки в сцене идентификации
     */
    identify?: boolean;
}
export {};
