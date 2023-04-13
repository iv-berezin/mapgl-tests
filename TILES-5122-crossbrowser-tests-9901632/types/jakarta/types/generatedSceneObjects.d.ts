/// <reference types="@2gis/gl-matrix" />
import { Vao } from '../2gl/Vao';
import { Buffer } from '../2gl/Buffer';
import { GeneratorSinkNames } from '../symbols/generators';
import { TileObjectBase } from '../tiles/tileObject';
import { ObjectAttributes } from '../utils/objectAttributes';
import { LayerRenderingSettings, SceneObjectType } from './symbols';
/**
 * Типы тайловых стилевых слоев, геометрия и атрибуты которых формируются генераторами.
 */
export declare type GeneratingLayerType = 'raster' | 'oneWayLine' | 'polygon' | 'roadPolygon' | 'polygonExtrusion' | 'point' | 'labelLine' | 'line' | 'dashedLine' | 'buildingModel' | 'gltfModel' | 'lineExtrusion' | 'shiftedLine' | 'arrow' | 'circle' | 'heatmap' | 'dem' | 'mesh';
export declare type SinkName = 'fill' | 'solid' | 'stroke' | 'sideStroke' | 'topStroke' | 'raster' | 'text' | 'sideFill' | 'topFill' | 'framebuffer' | 'mesh' | 'elevation' | 'hillshade' | 'flatBottom' | 'anchor' | 'instances' | 'ground';
export interface ISceneObject<T extends GeneratingLayerType, S extends GeneratorSinkNames<T> = GeneratorSinkNames<T>, U extends ObjectAttributes = ObjectAttributes> {
    type: SceneObjectType.Tile;
    symbol: T;
    sink: S;
    attributes: U;
    stride: number;
    rangeStart: number;
    rangeEnd: number;
    attributesHash: string;
    layerSettings: LayerRenderingSettings<any, any>;
    tile: TileObjectBase;
    elements?: Buffer;
    elementsType?: number;
    drawMode?: number;
    vao: Vao;
    instanceCount?: number;
    /**
     * Матрица трансформации координат из пространства тайлового объекта
     * в пространство модели, для которой выполняется инстансинг.
     */
    instanceMatrix?: Mat4;
    instanceAttributes?: ObjectAttributes;
}
export declare type LabelLineAttributes = ObjectAttributes & {
    animDirection: number;
    range: number;
    fontIndex: number;
};
export declare type LabelLineRasterSceneObject = ISceneObject<'labelLine', 'raster', LabelLineAttributes>;
export declare type LineSolidSceneObject = ISceneObject<'line', 'solid'>;
export declare type LineExtrusionTopStrokeSceneObject = ISceneObject<'lineExtrusion', 'topStroke'>;
export declare type LineExtrusionFillSceneObject = ISceneObject<'lineExtrusion', 'fill'>;
export declare type LineExtrusionSideStrokeSceneObject = ISceneObject<'lineExtrusion', 'sideStroke'>;
export declare type PolygonFillAttributes = ObjectAttributes & {
    hiddenObjectId: string | undefined;
};
export declare type PolygonFillSceneObject = ISceneObject<'polygon', 'fill', PolygonFillAttributes>;
export declare type PolygonStrokeAttributes = ObjectAttributes & {
    hiddenObjectId: string | undefined;
};
export declare type PolygonStrokeSceneObject = ISceneObject<'polygon', 'stroke', PolygonStrokeAttributes>;
export declare type MeshFillAttributes = ObjectAttributes;
export declare type MeshTextureAttributes = ObjectAttributes;
export declare type PolygonExtrusionAttributes = ObjectAttributes & {
    hiddenObjectId: string | undefined;
};
export declare type PolygonExtrusionTopFillSceneObject = ISceneObject<'polygonExtrusion', 'topFill', PolygonExtrusionAttributes>;
export declare type PolygonExtrusionSideStrokeSceneObject = ISceneObject<'polygonExtrusion', 'sideStroke', PolygonExtrusionAttributes>;
export declare type PolygonExtrusionSideFillSceneObject = ISceneObject<'polygonExtrusion', 'sideFill', PolygonExtrusionAttributes>;
export declare type PolygonExtrusionTopStrokeSceneObject = ISceneObject<'polygonExtrusion', 'topStroke', PolygonExtrusionAttributes>;
export declare type PolygonExtrusionSceneObject = PolygonExtrusionSideFillSceneObject | PolygonExtrusionTopFillSceneObject | PolygonExtrusionSideStrokeSceneObject | PolygonExtrusionTopStrokeSceneObject;
export declare type DemHillshadeSceneObject = ISceneObject<'dem', 'hillshade'>;
export declare type DemMeshSceneObject = ISceneObject<'dem', 'mesh'>;
export declare type DemGroundSceneObject = ISceneObject<'dem', 'ground'>;
export declare type DemFlatBottomAttributes = ObjectAttributes & {
    matrix: number[];
};
export declare type DemFlatBottomSceneObject = ISceneObject<'dem', 'flatBottom', DemFlatBottomAttributes>;
export declare type DemElevationAttributes = ObjectAttributes & {
    textureIndex: number;
};
export declare type DemElevationSceneObject = ISceneObject<'dem', 'elevation', DemElevationAttributes>;
export declare type DashedLineStrokeSceneObject = ISceneObject<'dashedLine', 'stroke'>;
export declare type PointRasterAttributes = ObjectAttributes & {
    animDirection: number;
    atlasIndex: number;
};
export declare type PointRasterSceneObject = ISceneObject<'point', 'raster', PointRasterAttributes>;
export declare type PointTextAttributes = ObjectAttributes & {
    animDirection: number;
    range: number;
    offsetX: number;
    offsetY: number;
    labelIndex: number;
    fontIndex: number;
};
export declare type PointTextSceneObject = ISceneObject<'point', 'text', PointTextAttributes>;
export declare type ArrowStrokeAttributes = ObjectAttributes & {
    isLongArrow: number;
};
export declare type ArrowStrokeSceneObject = ISceneObject<'arrow', 'stroke', ArrowStrokeAttributes>;
export declare type BuildingModelFillAttributes = ObjectAttributes & {
    texture: number;
    primitiveType: number;
    id: string | undefined;
    matrix: number[];
};
export declare type BuildingModelFillSceneObject = ISceneObject<'buildingModel', 'fill', BuildingModelFillAttributes>;
export declare type BuildingModelStrokeAttributes = ObjectAttributes & {
    id: string | undefined;
    matrix: number[];
};
export declare type BuildingModelStrokeSceneObject = ISceneObject<'buildingModel', 'stroke', BuildingModelStrokeAttributes>;
export declare type GltfModelAttributes = ObjectAttributes & {
    modelId: number;
    buildingId: string;
};
export declare type GltfInstancedAttributes = ObjectAttributes & {
    modelId: number;
    colorTexture: number;
    linkedIds: string[];
    texmap: number[];
};
export declare type GltfModelSceneObject = ISceneObject<'gltfModel', 'anchor', ObjectAttributes>;
export declare type GltfFillSceneObject = ISceneObject<'gltfModel', 'fill', ObjectAttributes>;
export declare type GltfModelInstancedSceneObject = ISceneObject<'gltfModel', 'instances', GltfInstancedAttributes>;
export declare type CircleFillSceneObject = ISceneObject<'circle', 'fill'>;
export declare type HeatmapFillAttributes = ObjectAttributes & {
    textureIndex: number;
    rampTextureIndex: number;
};
export declare type HeatmapFillSceneObject = ISceneObject<'heatmap', 'fill', HeatmapFillAttributes>;
export declare type HeatmapFramebufferSceneObject = ISceneObject<'heatmap', 'framebuffer'>;
export declare type OneWayLineRasterAttributes = ObjectAttributes & {
    animDirection: number;
};
export declare type OneWayLineRasterSceneObject = ISceneObject<'oneWayLine', 'raster', OneWayLineRasterAttributes>;
export declare type RasterFillAttributes = ObjectAttributes & {
    textureIndex: number;
};
export declare type RasterFillSceneObject = ISceneObject<'raster', 'fill', RasterFillAttributes>;
export declare type ShiftedLineSolidSceneObject = ISceneObject<'shiftedLine', 'solid'>;
export declare type MeshFillSceneObject = ISceneObject<'mesh', 'fill'>;
/**
 * Все возможные типы объектов сцены, в зависимости от стилевого слоя и синка.
 * Это нужно для типизации атрибутов объекта. Тип атрибутов описан в соответствующем генераторе.
 */
export declare type SceneObject = ArrowStrokeSceneObject | BuildingModelFillSceneObject | BuildingModelStrokeSceneObject | GltfModelSceneObject | GltfModelInstancedSceneObject | GltfFillSceneObject | CircleFillSceneObject | DashedLineStrokeSceneObject | HeatmapFillSceneObject | HeatmapFramebufferSceneObject | LabelLineRasterSceneObject | LineSolidSceneObject | LineExtrusionFillSceneObject | LineExtrusionSideStrokeSceneObject | LineExtrusionTopStrokeSceneObject | OneWayLineRasterSceneObject | PointRasterSceneObject | PointTextSceneObject | PolygonFillSceneObject | PolygonStrokeSceneObject | PolygonExtrusionSideFillSceneObject | PolygonExtrusionSideStrokeSceneObject | PolygonExtrusionTopFillSceneObject | PolygonExtrusionTopStrokeSceneObject | RasterFillSceneObject | ShiftedLineSolidSceneObject | DemElevationSceneObject | DemMeshSceneObject | DemGroundSceneObject | DemHillshadeSceneObject | DemFlatBottomSceneObject | MeshFillSceneObject;
