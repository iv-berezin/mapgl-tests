import { ObjectAttributeValue } from '../utils/objectAttributes';
import { SourceAttrs, StyleState } from '../types';
import { LabelingGroupConfig } from '../types/labeling';
import { FontNames, RasterSet, TileAttrs, TileProps, FeatureAttrs } from '../types/styles';
import { StyleIconConfigMap, StyleModelConfig, TextPlacement } from '../types/publicStyles';
import { SinkName } from '../types/generatedSceneObjects';
import { WebglState } from '../types';
/**
 * Цвет в формате [r, g, b, a], каждое число принимает значение от 0 до 255,
 * Например, черный цвет rgba(0, 0, 0, 1) — [0, 0, 0, 255]
 */
export interface StyleColor {
    type: 'color';
    value: number[];
}
export interface StyleGradient {
    type: 'gradient-color';
    values: StyleColor[];
    steps: number[];
}
export declare type HandySimpleType = StyleGradient | StyleColor | string | number | boolean | null | string[] | number[];
export declare type HandyExtractorExpression = HandyGlobalExpression | HandyGetExpression | HandySourceAttrExpression | HandyFeatureStateExpression;
/**
 * Общий тип для стилевых выражений. Нужен для типизации вложенных выражений
 * и для мест, в которых может быть любое стилевое выражение.
 */
export declare type HandyExpression<T extends HandySimpleType> = HandyInterpolateExpression<number | StyleColor> | HandyMatchExpression<T> | HandyAllExpression<T> | HandyAnyExpression<T> | HandyExtractorExpression | HandyStepExpression<T> | HandyHeatmapDensityExpression | HandyHillshadeIntensityExpression | HandyNegationExpression<T> | HandyToBooleanExpression<T> | HandyToColorExpression<T> | HandyEqualExpression<T> | HandyNotEqualExpression<T> | HandyLessThanExpression<T> | HandyLessEqualExpression<T> | HandyGreaterThanExpression<T> | HandyGreaterEqualExpression<T> | HandyInExpression<T> | HandyAdditionExpression<T> | HandyMultiplicationExpression<T> | HandyPowExpression<T> | HandyLog10Expression<T> | HandyZoomExpression | HandyHeightExpression | HandyRandomizationExpression<T> | HandyLiteralArrayExpression<T>;
/**
 * match-выражение
 */
export interface HandyMatchExpression<T extends HandySimpleType> {
    type: 'match';
    input: T | HandyExpression<T>;
    cases: Array<HandyMatchCase<T>>;
    defaultOutput: T | HandyExpression<T>;
}
export interface HandyMatchCase<T extends HandySimpleType> {
    values: Set<T>;
    output: T | HandyExpression<T>;
}
/**
 * get-выражение
 */
export interface HandyGetExpression {
    type: 'get';
    dataIndex: number;
    property: string;
}
/**
 * global-выражение
 */
export interface HandyGlobalExpression {
    type: 'global';
    dataIndex: number;
    property: string;
}
/**
 * sourceAttr-выражение
 */
export interface HandySourceAttrExpression {
    type: 'sourceAttr';
    dataIndex: number;
    property: string;
}
/**
 * featureState-выражение
 */
export interface HandyFeatureStateExpression {
    type: 'featureState';
    dataIndex: number;
    property: string;
}
/**
 * all-выражение
 */
export interface HandyAllExpression<T extends HandySimpleType> {
    type: 'all';
    array: Array<HandySimpleType | HandyExpression<T>>;
}
export interface HandyAnyExpression<T extends HandySimpleType> {
    type: 'any';
    array: Array<HandySimpleType | HandyExpression<T>>;
}
/**
 * step-выражение
 */
export interface HandyStepExpression<T extends HandySimpleType> {
    type: 'step';
    value: HandyValue<number>;
    steps: Array<HandyStep<T>>;
}
export interface HandyStep<T extends HandySimpleType> {
    key: number;
    value: T | HandyExpression<T>;
}
export interface HandyNegationExpression<T extends HandySimpleType> {
    type: '!';
    value: T | HandyExpression<T>;
}
export interface HandyToBooleanExpression<T extends HandySimpleType> {
    type: 'to-boolean';
    value: T | HandyExpression<T>;
}
export interface HandyToColorExpression<T extends HandySimpleType> {
    type: 'to-color';
    value: T | HandyExpression<T>;
}
export interface HandyEqualExpression<T extends HandySimpleType> {
    type: '==';
    leftValue: T | HandyExpression<T>;
    rightValue: T | HandyExpression<T>;
}
export interface HandyNotEqualExpression<T extends HandySimpleType> {
    type: '!=';
    leftValue: T | HandyExpression<T>;
    rightValue: T | HandyExpression<T>;
}
export interface HandyLessThanExpression<T extends HandySimpleType> {
    type: '<';
    leftValue: T | HandyExpression<T>;
    rightValue: T | HandyExpression<T>;
}
export interface HandyLessEqualExpression<T extends HandySimpleType> {
    type: '<=';
    leftValue: T | HandyExpression<T>;
    rightValue: T | HandyExpression<T>;
}
export interface HandyGreaterThanExpression<T extends HandySimpleType> {
    type: '>';
    leftValue: T | HandyExpression<T>;
    rightValue: T | HandyExpression<T>;
}
export interface HandyGreaterEqualExpression<T extends HandySimpleType> {
    type: '>=';
    leftValue: T | HandyExpression<T>;
    rightValue: T | HandyExpression<T>;
}
export interface HandyInExpression<T extends HandySimpleType> {
    type: 'in';
    element: T | HandyExpression<T>;
    array: HandyExtractorExpression | number[] | string[] | null;
}
export interface HandyAdditionExpression<T extends HandySimpleType> {
    type: '+';
    array: Array<T | HandyExpression<T>>;
}
export interface HandyMultiplicationExpression<T extends HandySimpleType> {
    type: '*';
    array: Array<T | HandyExpression<T>>;
}
export interface HandyPowExpression<T extends HandySimpleType> {
    type: '^';
    base: T | HandyExpression<T>;
    exponent: T | HandyExpression<T>;
}
export interface HandyLog10Expression<T extends HandySimpleType> {
    type: 'log10';
    value: T | HandyExpression<T>;
}
/**
 * interpolate-выражение
 */
export interface HandyInterpolateExpression<T extends number | StyleColor> {
    type: 'interpolate';
    base: number;
    argument: T | HandyExpression<T>;
    steps: Array<HandyInterpolateStep<T>>;
}
export interface HandyInterpolateStep<T extends number | StyleColor> {
    key: number | HandyExpression<number>;
    value: T | HandyExpression<T>;
}
export interface HandyRandomizationExpression<T extends HandySimpleType> {
    type: 'random';
    start: T | HandyExpression<T>;
    end: T | HandyExpression<T>;
}
export interface HandyLiteralArrayExpression<T extends HandySimpleType> {
    type: 'literalArray';
    array: Array<T | HandyExpression<T>>;
}
/**
 * zoom-выражение
 *
 * Это просто styleZoom.
 */
export interface HandyZoomExpression {
    type: 'zoom';
}
/**
 * height-выражение
 *
 * Это указатель что используем высоту в генераторах с высотой.
 */
export interface HandyHeightExpression {
    type: 'height';
}
/**
 * heatmap-density-выражение
 */
export interface HandyHeatmapDensityExpression {
    type: 'heatmap-density';
}
export interface HandyHillshadeIntensityExpression {
    type: 'shading-intensity';
}
/**
 * Каждому выражению для выполнения нужны данные. Эти данные
 * описываются типом ResolveContext. В зависимости от места выполнения
 * выражения контексты могут быть разные.
 */
export declare type ResolveContext<T extends HandySimpleType> = BinderResolveContext<T> | GeneratorContext<T> | LabelingResolveContext<T>;
/**
 * Контекст выполнения в objectBinders
 */
export interface BinderResolveContext<T extends HandySimpleType> {
    type: 'binder';
    allowedExpressions?: Set<HandyExpression<T>['type']>;
    styleZoom: number;
    styleState: StyleState;
    tileData: ObjectAttributeValue[];
}
/**
 * Контекст генератора данных
 */
export interface GeneratorContext<T extends HandySimpleType> {
    type: 'generator';
    allowedExpressions?: Set<HandyExpression<T>['type']>;
    styleState: StyleState;
    tileProps: TileProps;
    tileAttrs: TileAttrs;
    featureAttrs: FeatureAttrs;
    sourceAttrs: SourceAttrs;
    getSeededRandomValue?: () => number;
}
/**
 * Контекст выполнения для лейблинга
 */
export interface LabelingResolveContext<T extends HandySimpleType> {
    type: 'labeling';
    allowedExpressions?: Set<HandyExpression<T>['type']>;
    styleZoom: number;
    styleState: StyleState;
    /**
     * В случае с получением размера иконки, нужно interpolate expresssion интерпретировать
     * как step expreession для сохранения обратной совместимости
     */
    interpolateExpressionAsStep: boolean;
    tileData: ObjectAttributeValue[];
}
export declare type HandyFilter = HandyExpression<boolean> | boolean;
export declare type HandyValue<T extends HandySimpleType> = HandyExpression<T> | T;
export interface HandyDataKey {
    type: string;
    key: string;
}
export interface HandyBaseLayer {
    /**
     * Пользовательский идентификатор слоя.
     */
    id: string;
    /**
     * Внутренний идентификатор стилевого слоя. Используется для адресации
     * к слою внутри движка
     */
    innerId: number;
    /**
     * Индекс, определяющий порядок рендеринга слоев.
     */
    renderIndex: number;
}
export interface HandyGroupLayer extends HandyBaseLayer {
    type: 'group';
    layers: HandyStyleLayer[];
    orderBy: HandyExtractorExpression[];
}
/**
 * ID несуществующего фреймбуфера.
 * Применяется для стилевых слоев, инициализация которых была прервана
 * и слой не должен быть отрисован
 */
export declare const INVALID_FRAMEBUFFER_ID = -1;
export interface HandyStyleLayerBase extends HandyBaseLayer {
    /**
     * Внутренний идентификатор стилевой группы. Используется для адресации к группе внутри движка.
     */
    groupId?: number;
    /**
     * Индекс, определяющий положение в группе.
     */
    groupIndex?: number;
    filter: HandyFilter;
    minzoom: number;
    maxzoom: number;
    dataKeys: HandyDataKey[];
    /**
     * Мапа, указывающая в какой фреймбуфер нужно рендерить объект сцены.
     * Если не указана - значит рендерим в `canvas` карты.
     * Методы для работы с идентификатором находятся в классе `renderer`.
     * В случае, если не получилось инициализировать слой, а он уже находится на карте,
     * то в нужный синк можно поставить `INVALID_FRAMEBUFFER_ID`, и объект не будет рендерится.
     */
    framebufferId?: {
        [sink in SinkName]?: number;
    };
    /**
     * `true` - объект не нужно рисовать, если он слишком сильно удален от центра камеры.
     * По умолчанию - `false`. Используется только в рельефе.
     */
    farLimit?: boolean;
    /**
     * Индекс значения атрибута "selected" используется для получения состояния
     * выделенности объекта SceneObject. Задается здесь,
     * чтобы ускорить сортировку объектов в рамках одного стилевого слоя.
     */
    selectedIdx?: number;
    /**
     * Конфиг, в котором можно переопределить настройки
     * рендеринга WebGL для стилевого слоя.
     */
    webglState?: Partial<WebglState>;
    /**
     * Опция, отвечающая за интерактивность объекта, то есть
     * она определяет будет ли объект попадать в identify-сцену.
     * На данный момент поддерживается только в gltf-моделях
     */
    interactive?: boolean;
}
export interface HandyCustomLayer extends HandyStyleLayerBase {
    type: 'custom';
    style: {};
}
export interface PolygonStyleLayer extends HandyStyleLayerBase {
    type: 'polygon';
    style: {
        color: HandyValue<StyleColor>;
        textureImage: HandyValue<string>;
        textureSize: number | number[];
        textureOpacity: HandyValue<number>;
        strokeColor: HandyValue<StyleColor>;
        strokeWidth: HandyValue<number>;
    };
}
export interface RoadPolygonStyleLayer extends HandyStyleLayerBase {
    type: 'roadPolygon';
    style: {
        color: HandyValue<StyleColor>;
        strokeColor: HandyValue<StyleColor>;
        strokeWidth: HandyValue<number>;
        laneWidth: HandyValue<number>;
    };
}
export interface MeshStyleLayer extends HandyStyleLayerBase {
    type: 'mesh';
    style: {
        color: HandyValue<StyleColor>;
        strokeColor: HandyValue<StyleColor>;
        strokeWidth: HandyValue<number>;
    };
}
export interface PolygonExtrusionStyleLayer extends HandyStyleLayerBase {
    type: 'polygonExtrusion';
    style: {
        topColor: HandyValue<StyleColor>;
        sideColor: HandyValue<StyleColor | StyleGradient>;
        strokeColor: HandyValue<StyleColor>;
        strokeWidth: HandyValue<number>;
    };
}
export interface BuildingModelStyleLayer extends HandyStyleLayerBase {
    type: 'buildingModel';
    style: {
        color: HandyValue<StyleColor>;
        strokeColor: HandyValue<StyleColor>;
        strokeWidth: HandyValue<number>;
    };
}
export interface GltfModelStyleLayer extends HandyStyleLayerBase {
    type: 'gltfModel';
    style: {
        modelSrc: HandyValue<string>;
        scale: HandyValue<number[] | number>;
        rotation: HandyValue<number[] | number>;
        offset: HandyValue<number[] | number>;
        color: HandyValue<StyleColor>;
        linkedIds: HandyValue<string[] | string>;
        useThreeJs: boolean;
    };
}
export interface LineStyleLayer extends HandyStyleLayerBase {
    type: 'line';
    style: {
        color: HandyValue<StyleColor>;
        width: HandyValue<number>;
    };
}
export interface LineExtrusionStyleLayer extends HandyStyleLayerBase {
    type: 'lineExtrusion';
    style: {
        sideColor: HandyValue<StyleColor | StyleGradient>;
        strokeColor: HandyValue<StyleColor>;
        strokeWidth: HandyValue<number>;
        height: HandyValue<number>;
    };
}
export interface DashedLineStyleLayer extends HandyStyleLayerBase {
    type: 'dashedLine';
    style: {
        color: HandyValue<StyleColor>;
        gapColor: HandyValue<StyleColor>;
        width: HandyValue<number>;
        gapLength: HandyValue<number>;
        dashLength: HandyValue<number>;
    };
}
export interface LabelLineStyleLayer extends HandyStyleLayerBase {
    type: 'labelLine';
    style: {
        textField: HandyValue<string>;
        textFont: string;
        textColor: HandyValue<StyleColor>;
        textFontSize: HandyValue<number>;
        textLetterSpacing: number;
        textHaloColor: HandyValue<StyleColor>;
        textHaloWidth: number;
        textPriority: number;
        textLabelingSideMargin: number;
        textDuplicationSpacing: HandyValue<number>;
        labelingGroup: string;
        lineEndingOffsets: number;
    };
}
export interface ShiftedLineStyleLayer extends HandyStyleLayerBase {
    type: 'shiftedLine';
    style: {
        color: HandyValue<StyleColor>;
        width: HandyValue<number>;
        shift: HandyValue<number>;
    };
}
export interface OneWayLineStyleLayer extends HandyStyleLayerBase {
    type: 'oneWayLine';
    style: {
        color: HandyValue<StyleColor>;
        labelingGroup: string;
        lineWidth: HandyValue<number>;
        lineLength: HandyValue<number>;
        tipWidth: number;
        tipHeight: number;
        priority: number;
        duplicationSpacing: HandyValue<number>;
        endingOffsets: number;
    };
}
export declare type HandyArrowAnimation = {
    type: 'erase';
} | {
    type: 'appearance';
    tipMovementAmplitude: HandyValue<number>;
};
export interface ArrowStyleLayer extends HandyStyleLayerBase {
    type: 'arrow';
    style: {
        color: HandyValue<StyleColor>;
        strokeColor: HandyValue<StyleColor>;
        lineWidth: HandyValue<number>;
        strokeWidth: HandyValue<number>;
        tipWidth: HandyValue<number>;
        tipHeight: HandyValue<number>;
        animation: HandyArrowAnimation;
    };
}
export interface RasterStyleLayer extends HandyStyleLayerBase {
    type: 'raster';
    style: {
        opacity: HandyValue<number>;
    };
}
export interface HeatmapStyleLayer extends HandyStyleLayerBase {
    type: 'heatmap';
    style: {
        color: HandyValue<StyleColor>;
        radius: HandyValue<number>;
        opacity: HandyValue<number>;
        intensity: HandyValue<number>;
        weight: HandyValue<number>;
        downscale: number;
    };
}
export interface CircleStyleLayer extends HandyStyleLayerBase {
    type: 'circle';
    style: {
        color: HandyValue<StyleColor>;
        strokeColor: HandyValue<StyleColor>;
        strokeColor2: HandyValue<StyleColor>;
        width: HandyValue<number>;
        strokeWidth: HandyValue<number>;
        strokeWidth2: HandyValue<number>;
    };
}
/**
 * Стилевой слой для отрисовки поверхности рельефа.
 */
export interface DemStyleLayer extends HandyStyleLayerBase {
    type: 'dem';
    style: {
        verticalScale: HandyValue<number>;
        lightingDirection: HandyValue<number>;
        shadingIntensity: HandyValue<number>;
        shadingPalette: HandyInterpolateExpression<number>;
    };
}
export interface StyleLabelingMargin {
    topBottom: number;
    leftRight: number;
}
export interface PointStyleLayer extends HandyStyleLayerBase {
    type: 'point';
    style: {
        allowOverlap: boolean;
        allowElevation: boolean;
        elevation: HandyValue<number>;
        iconImage: HandyValue<string>;
        iconAnchor: number[];
        iconOffset: number[];
        iconWidth: HandyValue<number>;
        iconOpacity: HandyValue<number>;
        iconPriority: number;
        iconLabelingGroup: string;
        iconLabelingMargin: StyleLabelingMargin;
        iconRotation: HandyValue<number>;
        iconTextField: HandyValue<string>;
        iconTextAnchor: number[];
        iconTextOffset: number[];
        iconTextFont?: HandyValue<string>;
        iconTextColor: HandyValue<StyleColor>;
        iconTextFontSize: HandyValue<number>;
        iconTextLineHeight: number;
        iconTextLetterSpacing: number;
        /** [top, right, bottom, left] */
        iconTextPadding: [number, number, number, number];
        iconTextHaloWidth: number;
        iconTextHaloColor: HandyValue<StyleColor>;
        textField: HandyValue<string>;
        textFont: HandyValue<string>;
        textColor: HandyValue<StyleColor>;
        textFontSize: HandyValue<number>;
        textOffset: HandyValue<number>;
        textHaloColor: HandyValue<StyleColor>;
        textHaloWidth: number;
        textLabelingGroup: string;
        textLabelingMargin: StyleLabelingMargin;
        textField2?: HandyValue<string>;
        textFont2?: HandyValue<string>;
        textColor2: HandyValue<StyleColor>;
        textFontSize2: HandyValue<number>;
        textOffset2?: HandyValue<number>;
        textHaloColor2: HandyValue<StyleColor>;
        textHaloWidth2: number;
        textLabelingGroup2: string;
        textLabelingMargin2: StyleLabelingMargin;
        textLineHeight: number;
        textLetterSpacing: number;
        textMaxLengthPerLine: number;
        textPlacement: TextPlacement;
        textPriority: number;
        duplicationSpacing: HandyValue<number>;
        endingOffsets: number;
    };
}
export declare type HandyStyleLayer = HandyCustomLayer | OneWayLineStyleLayer | PolygonStyleLayer | RoadPolygonStyleLayer | PolygonExtrusionStyleLayer | PointStyleLayer | LabelLineStyleLayer | LineStyleLayer | DashedLineStyleLayer | GltfModelStyleLayer | BuildingModelStyleLayer | LineExtrusionStyleLayer | ShiftedLineStyleLayer | ArrowStyleLayer | RasterStyleLayer | CircleStyleLayer | HeatmapStyleLayer | DemStyleLayer | MeshStyleLayer;
export interface StyleLayerGroup extends HandyBaseLayer {
    type: 'group';
    layers: Array<Exclude<HandyStyleLayer, StyleLayerGroup>>;
    orderBy: Array<HandyGetExpression | HandyGlobalExpression | HandySourceAttrExpression>;
}
/**
 * Объект, который содержит все связанное со стилями
 */
export interface HandyStyle {
    /**
     * Внутренний ID стиля.
     * Важно! С каждым новым стилем в карте он обязан увеличиваться,
     * чтобы корректно работала сортировка отрисовки объектов при смене стилей.
     */
    id: number;
    /**
     * Ревизии стиля, которая меняется после любого его изменения.
     */
    revision: number;
    background: {
        color: StyleColor;
    };
    /**
     * Временные стилевые свойства освещения карты
     */
    light: {
        /** Направленное освещение (нормализованный вектор) */
        direction: number[];
        /** Рассеянный свет */
        ambientColor: StyleColor;
    };
    layers: HandyStyleLayer[];
    /**
     * Служебная мапа для адресации к слою внутри движка по `innerId`.
     * Содержит ссылки ко всем слоям, использующимся для отрисовки карты.
     * В том числе на слои в массиве `layers` и слой рельефа `dem`.
     */
    layersById: {
        [id: number]: HandyStyleLayer | undefined;
    };
    layerIdToInnerId: {
        [id: string]: number | undefined;
    };
    groupsById: {
        [id: number]: HandyGroupLayer | undefined;
    };
    legacyIconBaseUrl: string;
    iconBaseUrl: string;
    iconNameTemplate: string;
    fontUrlTemplate: string;
    modelsBaseUrl: string;
    fonts: FontNames;
    fontNameToIndex: {
        [font: string]: number;
    };
    /**
     * Лейблинг группы задающие отношение, как лейблятся друг с другом объекты принадлежащие разным группам.
     */
    labelingGroups: LabelingGroupConfig;
    /**
     * Каждый rasterSet представляет собой массив иконок разных размеров.
     * В стилях некоторым объектам задаются иконки, в этом случае в дереве стилей у них будет хранится не название иконки,
     * а индекс указывающий на нужный растер сет в этом объекте.
     */
    rasterSets: {
        /**
         * Мапа растерсетов по индексам
         */
        byIndex: {
            [index: number]: RasterSet;
        };
        /**
         * Мапа растерсетов по ключам
         */
        byKey: {
            [key: string]: RasterSet;
        };
    };
    icons: StyleIconConfigMap;
    models: StyleModelConfig[];
    modelIndex: {
        [key: string]: number;
    };
    dem: DemStyleLayer;
}
