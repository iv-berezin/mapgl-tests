import { ShaderProgram } from '../../2gl/ShaderProgram';
import { MapState } from '../../types';
import { MapModules } from '../../map/mapModules';
import { HandyArrowAnimation, HandyStyleLayerBase, HandyValue, StyleColor, HandyStyleLayer, LabelLineStyleLayer, PointStyleLayer, HeatmapStyleLayer, DemStyleLayer, StyleGradient, PolygonStyleLayer } from '../../expressions/types';
import { LabelIndex } from '../generators/point';
import { SceneObject, LabelLineRasterSceneObject, PointTextSceneObject, GltfModelInstancedSceneObject, PolygonExtrusionSceneObject } from '../../types/generatedSceneObjects';
export declare type ObjectBinder<T = {}, S = SceneObject> = (gl: WebGLRenderingContext, program: ShaderProgram, mapState: MapState, mapModules: MapModules, object: S, layer: T) => boolean;
declare type ObjectBinderPart<T = {}, S = SceneObject> = (gl: WebGLRenderingContext, program: ShaderProgram, mapState: MapState, mapModules: MapModules, object: S, layer: T, color: StyleColor, gradient: StyleGradient | null) => boolean;
interface HandyLayer<T = {}> extends HandyStyleLayerBase {
    style: T;
}
export declare const empty: ObjectBinder<HandyStyleLayer>;
export declare const color: ObjectBinderPart<HandyLayer<{
    color: HandyValue<StyleColor>;
}>>;
export declare const topColor: ObjectBinderPart<HandyLayer<{
    topColor: HandyValue<StyleColor>;
}>>;
export declare const sideColor: ObjectBinderPart<HandyLayer<{
    sideColor: HandyValue<StyleColor | StyleGradient>;
}>>;
export declare const sideColorGradient: ObjectBinderPart<HandyLayer<{
    sideColor: HandyValue<StyleColor | StyleGradient>;
}>>;
export declare const strokeColor: ObjectBinderPart<HandyLayer<{
    strokeColor: HandyValue<StyleColor>;
}>>;
export declare const stroke2Color: ObjectBinderPart<HandyLayer<{
    strokeColor2: HandyValue<StyleColor>;
}>>;
export declare const applyModelOpacity: ObjectBinderPart<HandyLayer, SceneObject & {
    attributes: {
        id: string | undefined;
    };
}>;
export declare const applyReverseModelOpacity: ObjectBinderPart<any, PolygonExtrusionSceneObject>;
export declare const bindFullOpacity: ObjectBinderPart;
export declare const bindTextureOpacity: ObjectBinderPart<PolygonStyleLayer>;
export declare const applyAaOpacityToColor: ObjectBinderPart<HandyLayer<{
    strokeColor: HandyValue<StyleColor>;
    strokeWidth: HandyValue<number>;
}>>;
export declare const applyAaOpacityToTopColor: ObjectBinderPart<HandyLayer<{
    topColor: HandyValue<StyleColor>;
    strokeWidth: HandyValue<number>;
}>>;
export declare const applyStillnessOpacity: ObjectBinderPart;
export declare const bindColor: ObjectBinderPart;
export declare const bindMeshColor: ObjectBinderPart;
export declare const borderColor: ObjectBinderPart<HandyLayer<{
    borderColor: StyleColor;
}>>;
export declare const width: ObjectBinderPart<HandyLayer<{
    width: HandyValue<number>;
}>>;
export declare const strokeWidth: ObjectBinderPart<HandyLayer<{
    strokeWidth: HandyValue<number>;
}>>;
export declare const circleStrokeWidth: ObjectBinderPart<HandyLayer<{
    width: HandyValue<number>;
    strokeWidth: HandyValue<number>;
}>>;
export declare const circleStroke2Width: ObjectBinderPart<HandyLayer<{
    width: HandyValue<number>;
    strokeWidth: HandyValue<number>;
    strokeWidth2: HandyValue<number>;
}>>;
export declare const circleTotalWidth: ObjectBinderPart<HandyLayer<{
    width: HandyValue<number>;
    strokeWidth: HandyValue<number>;
    strokeWidth2: HandyValue<number>;
}>>;
export declare const iconWidthCheck: ObjectBinderPart<HandyLayer<{
    iconWidth: HandyValue<number>;
}>>;
export declare const trafficShift: ObjectBinderPart<HandyLayer<{
    shift: HandyValue<number>;
}>>;
export declare const labelingOpacityCheck: ObjectBinderPart<any, SceneObject & {
    attributes: {
        animDirection: number;
    };
}>;
export declare const iconLabelingOpacityCheck: ObjectBinderPart<PointStyleLayer, SceneObject & {
    attributes: {
        animDirection: number;
    };
}>;
export declare const labelingOpacity: ObjectBinderPart<any, SceneObject & {
    attributes: {
        animDirection: number;
    };
}>;
export declare const iconLabelingOpacity: ObjectBinderPart<PointStyleLayer, SceneObject & {
    attributes: {
        animDirection: number;
    };
}>;
export declare const iconRotation: ObjectBinderPart<HandyLayer<{
    iconRotation: HandyValue<number>;
}>>;
export declare const readinessCurveOpacity: ObjectBinderPart<HandyLayer<{
    opacity: HandyValue<number>;
}>>;
export declare const opacity: ObjectBinderPart<HandyLayer<{
    opacity: HandyValue<number>;
}>>;
export declare const gltfModelCheck: ObjectBinderPart<any, SceneObject & {
    attributes: {
        hiddenObjectId: string | undefined;
    };
}>;
export declare const floorsCheck: ObjectBinderPart<any, SceneObject & {
    attributes: {
        hiddenObjectId: string | undefined;
    };
}>;
export declare const modelOpacityCheck: ObjectBinderPart<any, SceneObject & {
    attributes: {
        hiddenObjectId: string | undefined;
    };
}>;
export declare const texture: ObjectBinderPart<any, SceneObject & {
    attributes: {
        atlasIndex: number;
    };
}>;
export declare const fontTexture: ObjectBinderPart<any, SceneObject & {
    attributes: {
        range: number;
        fontIndex: number;
        styleId: number;
    };
}>;
export declare const imageTexture: ObjectBinderPart<{}, SceneObject & {
    attributes: {
        textureIndex: number;
    };
}>;
export declare const imageRampTexture: ObjectBinderPart<any, SceneObject & {
    attributes: {
        rampTextureIndex: number;
    };
}>;
export declare const spaceColor: ObjectBinderPart<HandyLayer<{
    gapColor: HandyValue<StyleColor>;
}>>;
export declare const dashedLineUniforms: ObjectBinderPart<HandyLayer<{
    color: HandyValue<StyleColor>;
    dashLength: HandyValue<number>;
    gapLength: HandyValue<number>;
}>>;
export declare const arrowUniforms: ObjectBinderPart<HandyLayer<{
    tipWidth: HandyValue<number>;
    tipHeight: HandyValue<number>;
}>>;
export declare const oneWayLineUniforms: ObjectBinderPart<HandyLayer<{
    lineLength: HandyValue<number>;
    lineWidth: HandyValue<number>;
}>>;
export declare const entranceUniforms: ObjectBinderPart<HandyLayer<{
    lineWidth: HandyValue<number>;
    strokeWidth: HandyValue<number>;
    animation: HandyArrowAnimation;
}>, SceneObject & {
    attributes: {
        isLongArrow: number;
    };
}>;
export declare const modelTexture: ObjectBinderPart<any, SceneObject & {
    attributes: {
        texture: number;
        id?: string;
    };
}>;
export declare const gltfModelTexture: ObjectBinderPart<any, GltfModelInstancedSceneObject>;
export declare const applyGltfModelOpacity: ObjectBinderPart<HandyLayer, GltfModelInstancedSceneObject>;
export declare const heightFactor: ObjectBinderPart<HandyLayer, SceneObject & {
    attributes: {
        id: string | undefined;
    };
}>;
export declare const lineExtrusionHeight: ObjectBinderPart<HandyLayer<{
    height: HandyValue<number>;
}>>;
export declare const buildingHeight: ObjectBinderPart<HandyLayer, SceneObject & {
    attributes: {
        hiddenObjectId: string | undefined;
    };
}>;
export declare const zoomCheck: ObjectBinderPart<HandyLayer>;
export declare const antialiasingZoomCheck: ObjectBinderPart<HandyLayer>;
export declare const labelingZoomCheck: ObjectBinderPart<HandyLayer>;
export declare const sceneWidth: ObjectBinderPart<HandyLayer<{
    width: HandyValue<number>;
}>>;
export declare const heatmapRadius: ObjectBinder<HeatmapStyleLayer>;
export declare const heatmapIntensity: ObjectBinder<HeatmapStyleLayer>;
export declare const tileZoomCheck: ObjectBinderPart;
export declare const fontScale: ObjectBinderPart<HandyLayer<{
    textFontSize: HandyValue<number>;
    textFontSize2?: HandyValue<number>;
    iconTextFontSize?: HandyValue<number>;
}>, LabelLineRasterSceneObject | PointTextSceneObject>;
export declare const fontHaloCheck: ObjectBinderPart<HandyLayer<{
    textHaloWidth: HandyValue<number>;
    textHaloColor: HandyValue<StyleColor>;
    textHaloWidth2?: HandyValue<number>;
    textHaloColor2?: HandyValue<StyleColor>;
    iconTextHaloWidth?: HandyValue<number>;
    iconTextHaloColor?: HandyValue<StyleColor>;
}>, LabelLineRasterSceneObject | PointTextSceneObject>;
/**
 * Выставляет юниформы u_float_buffer, u_float_gamma и u_vec4_color для единственной подписи слоя labelLine
 */
export declare const labelLineTextUniforms: ObjectBinderPart<LabelLineStyleLayer>;
/**
 * Выставляет юниформы u_float_buffer, u_float_gamma и u_vec4_color для единственной подписи слоя labelLine
 */
export declare const pointTextUniforms: ObjectBinderPart<PointStyleLayer, SceneObject & {
    attributes: {
        labelIndex: LabelIndex;
    };
}>;
export declare const offset: ObjectBinderPart<any, SceneObject & {
    attributes: {
        offsetX: number;
        offsetY: number;
    };
}>;
export declare const styleZoom: ObjectBinderPart;
export declare const tileToPixelRatio: ObjectBinder;
export declare const flatTexture: ObjectBinder<DemStyleLayer>;
export declare const flatIdentifyTexture: ObjectBinder<DemStyleLayer>;
export declare const hillshadeTexture: ObjectBinder<DemStyleLayer>;
export declare const demFlatBottomBinder: ObjectBinder<DemStyleLayer>;
export declare const heightFactorSkip: ObjectBinderPart<HandyLayer<{
    elevation: HandyValue<number>;
}>>;
export declare function compose<T, S extends SceneObject>(...functions: Array<ObjectBinderPart<T, S>>): ObjectBinder<T, S>;
export {};
