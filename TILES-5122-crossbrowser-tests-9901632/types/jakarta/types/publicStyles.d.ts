import { WebglState } from '../types';
/**
 * Публичный стиль карты
 */
export interface Style {
    version: number;
    name: string;
    background: {
        color: string;
    };
    metadata?: Metadata;
    icons?: StyleIconConfigMap;
    models?: StyleModelConfigMap;
    layers: StyleLayer[];
    labelingGroups?: StyleLabelingGroupConfig;
    terrain?: TerrainStyle;
}
/**
 * ================
 * Группы лейблинга
 * ================
 */
export interface StyleLabelingGroupConfig {
    groups?: string[];
    overlay?: string[][];
    intersect?: string[][];
}
/**
 * ======
 * Иконки
 * ======
 */
/**
 * Мапа параметров растяжки иконок.
 *
 * undefined указан, чтобы тайпскрипт подсказывал,
 * что иконки с каким-то из имен может и не быть в мапе.
 */
export interface StyleIconConfigMap {
    [iconName: string]: StyleIconConfig | undefined;
}
interface StyleSimpleIconConfig {
    url?: string;
}
export interface StyleStretchableIconConfig {
    url?: string;
    width: number;
    height: number;
    stretchX: Array<[number, number]>;
    stretchY: Array<[number, number]>;
}
export declare type StyleIconConfig = StyleSimpleIconConfig | StyleStretchableIconConfig;
export interface StyleModelConfigMap {
    [modelName: string]: StyleModelConfig | undefined;
}
export interface StyleModelConfig {
    url: string;
}
/**
 * =========
 * Выражения
 * =========
 */
/**
 * Экстракторы
 */
export declare type ExtractorExpression = GetExpression | GetGlobalExpression | GetSourceAttrExpression | FeatureStateExpression | GetZoomExpression | GetHeightExpression | GetHeatmapLayerDensityExpression | GetHillshadeIntensityExpression;
export declare type GetExpression = ['get', string];
export declare type GetGlobalExpression = ['global', string];
export declare type GetSourceAttrExpression = ['sourceAttr', string];
export declare type FeatureStateExpression = ['featureState', string];
export declare type GetZoomExpression = ['zoom'];
export declare type GetHeightExpression = ['height'];
export declare type GetHeatmapLayerDensityExpression = ['heatmap-density'];
export declare type GetHillshadeIntensityExpression = ['shading-intensity'];
/**
 * Логические выражения
 */
export declare type LogicalExpression = LogicalMatchExpression | LogicalAllExpression | LogicalAnyExpression | LogicalNegationExpression | LogicalEqualExpression | LogicalNotEqualExpression | LogicalLessThanExpression | LogicalLessEqualExpression | LogicalGreaterThanExpression | LogicalGreaterEqualExpression | LogicalInExpression;
export declare type LogicalMatchExpression = ['match', ...any[]];
export declare type LogicalAllExpression = ['all', ...any[]];
export declare type LogicalAnyExpression = ['any', ...any[]];
export declare type LogicalNegationExpression = ['!', any];
export declare type LogicalEqualExpression = ['==', ...any[]];
export declare type LogicalNotEqualExpression = ['!=', ...any[]];
export declare type LogicalLessThanExpression = ['<', ...any[]];
export declare type LogicalLessEqualExpression = ['<=', ...any[]];
export declare type LogicalGreaterThanExpression = ['>', ...any[]];
export declare type LogicalGreaterEqualExpression = ['>=', ...any[]];
export declare type LogicalInExpression = ['in', ...any[]];
/**
 * Математические выражения
 */
export declare type MathExpression = MathPowExpression | MathLog10Expression | MathAdditionExpression | MathMultiplicationExpression | MathRandomizationExpression;
export declare type MathPowExpression = ['^', any, any];
export declare type MathLog10Expression = ['log10', any];
export declare type MathAdditionExpression = ['+', any, any, ...any[]];
export declare type MathMultiplicationExpression = ['*', any, any, ...any[]];
export declare type MathRandomizationExpression = ['random', any, any];
/**
 * Выражения приводящие к типам
 */
export declare type CastExpression = ToBooleanExpression | ToColorExpression | LiteralExpression;
export declare type ToBooleanExpression = ['to-boolean', any];
export declare type ToColorExpression = ['to-color', any];
export declare type LiteralExpression = ['literal', any];
/**
 * Шкалы, как непрерывные так и пошаговые.
 */
export declare type ScaleExpressions = StepExpression | InterpolateExpression;
export declare type StepExpression = ['step', ...any[]];
export declare type InterpolateExpression = [
    'interpolate',
    [
        'linear'
    ] | ['exponential', number?],
    ...any[]
];
export declare type Expression = ExtractorExpression | ScaleExpressions | LogicalExpression | MathExpression | CastExpression;
/**
 * =========================
 * Значения стилевых свойств
 * =========================
 */
/**
 * Примитивные значения, которые могут указываться в публичных стилях без выражений
 */
export declare type StylePrimitiveValue = number | string | boolean | null;
export declare type BooleanOrExpression = boolean | Expression;
declare type StringOrExpression = string | Expression;
declare type NumberOrExpression = number | Expression;
declare type VisibilityValue = 'none' | 'visible';
declare type Metadata = any;
/**
 * =============
 * Стилевые слои
 * =============
 */
interface LayerBase {
    id: string;
    filter?: BooleanOrExpression;
    minzoom?: number;
    maxzoom?: number;
    metadata?: Metadata;
    farLimit?: boolean;
    name?: string;
    style: {};
    /** Опциональный конфиг отрисовки */
    webglState?: Partial<WebglState>;
}
interface InteractiveLayerBase extends LayerBase {
    interactive?: boolean;
}
/**
 * Приватные стилевые слои, используются в карте но пока не доступны внешним пользователям
 */
export declare type PrivateStyleLayer = PrivateStyleCircleLayer;
export interface PrivateStyleCircleLayer extends InteractiveLayerBase {
    type: 'circle';
    style: {
        color?: StringOrExpression;
        strokeColor?: StringOrExpression;
        strokeColor2?: StringOrExpression;
        width?: NumberOrExpression;
        strokeWidth?: NumberOrExpression;
        strokeWidth2?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
/**
 * Публичные стилевые слои
 */
export declare type StyleLayer = StylePolygonLayer | StyleRoadPolygonLayer | StyleMeshLayer | StyleHeatmapLayer | StylePolygonExtrusionLayer | StyleLineLayer | StyleDashedLineLayer | StyleShiftedLineLayer | StyleLabelLineLayer | StyleGltfModelLayer | StyleBuildingModelLayer | StyleLineExtrusionLayer | StyleOneWayLineLayer | StyleArrowLayer | StylePointLayer | StyleRasterLayer | StyleGroupLayer | StyleCustomLayer;
export interface StylePolygonLayer extends InteractiveLayerBase {
    type: 'polygon';
    style: {
        color?: StringOrExpression;
        textureImage?: StringOrExpression;
        textureSize?: number | number[];
        textureOpacity?: NumberOrExpression;
        strokeColor?: StringOrExpression;
        strokeWidth?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleRoadPolygonLayer extends InteractiveLayerBase {
    type: 'roadPolygon';
    style: {
        color?: StringOrExpression;
        strokeColor?: StringOrExpression;
        strokeWidth?: NumberOrExpression;
        visibility?: VisibilityValue;
        laneWidth?: NumberOrExpression;
    };
}
export interface StyleMeshLayer extends InteractiveLayerBase {
    type: 'mesh';
    style: {
        color?: StringOrExpression;
        strokeColor?: StringOrExpression;
        strokeWidth?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleHeatmapLayer extends LayerBase {
    type: 'heatmap';
    style: {
        color?: InterpolateExpression;
        radius?: NumberOrExpression;
        opacity?: NumberOrExpression;
        intensity?: NumberOrExpression;
        weight?: NumberOrExpression;
        downscale?: number;
        visibility?: VisibilityValue;
    };
}
export interface StyleLineLayer extends InteractiveLayerBase {
    type: 'line';
    style: {
        color?: StringOrExpression;
        width?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleDashedLineLayer extends InteractiveLayerBase {
    type: 'dashedLine';
    style: {
        color?: StringOrExpression;
        gapColor?: StringOrExpression;
        width?: NumberOrExpression;
        gapLength?: NumberOrExpression;
        dashLength?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleShiftedLineLayer extends InteractiveLayerBase {
    type: 'shiftedLine';
    style: {
        color?: StringOrExpression;
        width?: NumberOrExpression;
        shift?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleLabelLineLayer extends InteractiveLayerBase {
    type: 'labelLine';
    style: {
        labelingGroup?: string;
        textField?: StringOrExpression;
        textFont?: string;
        textColor?: StringOrExpression;
        textFontSize?: NumberOrExpression;
        textLetterSpacing?: number;
        textHaloColor?: StringOrExpression;
        textHaloWidth?: number;
        textPriority?: number;
        textLabelingSideMargin?: number;
        textDuplicationSpacing?: NumberOrExpression;
        lineEndingOffsets?: number;
        visibility?: VisibilityValue;
    };
}
export interface StyleLabelingMargin {
    topBottom: number;
    leftRight: number;
}
export interface StyleBuildingModelLayer extends InteractiveLayerBase {
    type: 'buildingModel';
    style: {
        color?: StringOrExpression;
        strokeColor?: StringOrExpression;
        strokeWidth?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleGltfModelLayer extends InteractiveLayerBase {
    type: 'model';
    style: {
        modelSrc?: StringOrExpression;
        offset?: NumberOrExpression;
        scale?: NumberOrExpression;
        rotation?: NumberOrExpression;
        color?: StringOrExpression;
        linkedIds?: StringOrExpression;
        useThreeJs?: boolean;
        visibility?: VisibilityValue;
    };
}
export interface StyleLineExtrusionLayer extends InteractiveLayerBase {
    type: 'lineExtrusion';
    style: {
        sideColor?: StringOrExpression;
        strokeColor?: StringOrExpression;
        strokeWidth?: NumberOrExpression;
        height?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleOneWayLineLayer extends InteractiveLayerBase {
    type: 'oneWayLine';
    style: {
        labelingGroup?: string;
        color?: StringOrExpression;
        lineWidth?: NumberOrExpression;
        lineLength?: NumberOrExpression;
        tipWidth?: number;
        tipHeight?: number;
        priority?: number;
        duplicationSpacing?: NumberOrExpression;
        endingOffsets?: number;
        visibility?: VisibilityValue;
    };
}
export interface StylePolygonExtrusionLayer extends InteractiveLayerBase {
    type: 'polygonExtrusion';
    style: {
        topColor?: StringOrExpression;
        sideColor?: StringOrExpression;
        strokeColor?: StringOrExpression;
        strokeWidth?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleArrowLayer extends InteractiveLayerBase {
    type: 'arrow';
    style: {
        color?: StringOrExpression;
        strokeColor?: StringOrExpression;
        lineWidth?: NumberOrExpression;
        strokeWidth?: NumberOrExpression;
        tipWidth?: NumberOrExpression;
        tipHeight?: NumberOrExpression;
        animation?: ArrowAnimation;
        visibility?: VisibilityValue;
    };
}
export declare type ArrowAnimation = EraseAnimation | AppearanceAnimation;
interface EraseAnimation {
    type: 'erase';
}
interface AppearanceAnimation {
    type: 'appearance';
    tipMovementAmplitude: number;
}
export interface StyleAnimatedArrowLayer extends InteractiveLayerBase {
    type: 'animatedArrow';
    style: {
        color?: StringOrExpression;
        strokeColor?: StringOrExpression;
        lineWidth?: NumberOrExpression;
        strokeWidth?: NumberOrExpression;
        tipWidth?: number;
        tipHeight?: number;
        tipMovementAmplitude?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export interface StyleRasterLayer extends InteractiveLayerBase {
    type: 'raster';
    style: {
        opacity?: NumberOrExpression;
        visibility?: VisibilityValue;
    };
}
export declare type TextPlacement = 'bottomCenter' | 'bottomRight' | 'bottomLeft' | 'topCenter' | 'topRight' | 'topLeft' | 'rightBottom' | 'rightCenter' | 'rightTop' | 'leftBottom' | 'leftCenter' | 'leftTop' | 'centerCenter';
export interface StylePointLayer extends InteractiveLayerBase {
    type: 'point';
    style: {
        allowOverlap?: boolean;
        iconLabelingGroup?: string;
        textLabelingGroup?: string | string[];
        allowElevation?: boolean;
        elevation?: NumberOrExpression;
        iconImage?: StringOrExpression;
        iconAnchor?: number[];
        iconOffset?: number[];
        iconRotation?: NumberOrExpression;
        iconWidth?: NumberOrExpression;
        iconTextField?: StringOrExpression;
        iconTextFont?: StringOrExpression;
        iconTextAnchor?: number[];
        iconTextOffset?: number[];
        iconTextColor?: StringOrExpression;
        iconTextFontSize?: NumberOrExpression;
        iconTextLineHeight?: number;
        iconTextLetterSpacing?: number;
        iconTextPadding?: [number, number, number, number];
        iconTextHaloColor?: StringOrExpression;
        iconTextHaloWidth?: number | number[];
        iconOpacity?: NumberOrExpression;
        iconPriority?: number;
        iconLabelingMargin?: StyleLabelingMargin;
        textField?: StringOrExpression | StringOrExpression[];
        textFont?: StringOrExpression | StringOrExpression[];
        textColor?: StringOrExpression | StringOrExpression[];
        textFontSize?: NumberOrExpression | NumberOrExpression[];
        textLineHeight?: number | number[];
        textLetterSpacing?: number | number[];
        textPlacement?: TextPlacement;
        textOffset?: NumberOrExpression | NumberOrExpression[];
        textHaloColor?: StringOrExpression | StringOrExpression[];
        textHaloWidth?: number | number[];
        textLabelingMargin?: StyleLabelingMargin | StyleLabelingMargin[];
        textMaxLengthPerLine?: number;
        textPriority?: number;
        duplicationSpacing?: NumberOrExpression;
        endingOffsets?: number;
        visibility?: VisibilityValue;
    };
}
export interface StyleGroupLayer {
    type: 'group';
    id: string;
    layers: Array<Exclude<StyleLayer, StyleGroupLayer>>;
    orderBy?: GetExpression[];
}
export interface StyleCustomLayer {
    type: 'custom';
    id: string;
    render: (gl: WebGLRenderingContext) => void;
    onRemove?: () => void;
    onAdd?: () => void;
}
/** Стилевые свойства рельефа */
export interface TerrainStyle {
    /** Множитель высоты. По умолчанию 1.2  */
    verticalScale?: NumberOrExpression;
    /** Направление освещения склонов. По умолчанию 315° */
    lightingDirection?: NumberOrExpression;
    /** Степень затемнения/осветления склонов в долях от единицы. По умолчанию 0.2 */
    shadingIntensity?: NumberOrExpression;
    /** Выражение для RAMP-текстуры */
    shadingPalette?: InterpolateExpression;
}
export {};
