import { Style, StyleArrowLayer, StyleBuildingModelLayer, StyleGltfModelLayer, StyleDashedLineLayer, StyleLabelLineLayer, StyleLayer, StyleLineExtrusionLayer, StyleLineLayer, StyleOneWayLineLayer, StylePointLayer, StylePolygonExtrusionLayer, StylePolygonLayer, StyleRasterLayer, StyleShiftedLineLayer, StyleHeatmapLayer, PrivateStyleLayer, PrivateStyleCircleLayer, StyleGroupLayer, Expression, StylePrimitiveValue, StyleCustomLayer, TerrainStyle, StyleMeshLayer, StyleRoadPolygonLayer } from '../types/publicStyles';
import { HandyStyle, HandyStyleLayer, HandyExpression, HandySimpleType, PointStyleLayer, OneWayLineStyleLayer, PolygonStyleLayer, RoadPolygonStyleLayer, LabelLineStyleLayer, LineExtrusionStyleLayer, LineStyleLayer, PolygonExtrusionStyleLayer, DashedLineStyleLayer, ShiftedLineStyleLayer, BuildingModelStyleLayer, GltfModelStyleLayer, ArrowStyleLayer, RasterStyleLayer, CircleStyleLayer, HeatmapStyleLayer, HandyGroupLayer, HandyCustomLayer, DemStyleLayer, HandyExtractorExpression, MeshStyleLayer, HandyValue } from './types';
import { HandyIndexer } from './indexer';
import { StaticRasterSet } from '../types/styles';
/**
 * Конвертирует выражение из публичного представления во внутреннее.
 * Так как стилевые свойства могут задаваться не только выражениями,
 * но и примитивными значениями (то есть просто number, string, boolean,),
 * то в качестве аргумента могут выступать и примитивные значения.
 *
 * Примитивные значения функция отдает как есть, за исключением цвета -
 * подходящие строки конвертируются в handyColor.
 *
 * @param expr - стилевое выражение или примитивное значение.
 * @param dataIndexer - индексатор атрибутов данных. Нужен, чтобы
 * запаковывать нужные на этапе рендеринга данные во время генерации.
 * Некоторые выражения, например используемые в фильтрах, в этом не
 * нуждаются, поэтому это поле опционально.
 */
declare function makeHandyExpression<T extends HandySimpleType>(expr: Expression | StylePrimitiveValue, dataIndexer?: HandyIndexer): HandyExpression<T> | T;
export declare function makeHandyStyle(raw: Style, id: number, showCommPoi: boolean, sourceStyleId?: string): HandyStyle;
/**
 * Создаем HandyLayer или HandyGroupLayer из публичного слоя
 *
 * @param layer Публичный стилевой слой.
 */
export declare function makeHandyGroupOrLayer(layer: StyleLayer): HandyGroupLayer | HandyStyleLayer | undefined;
export declare function makeHandyRasterSets(layer: PointStyleLayer | PolygonStyleLayer, rasterSetIndexer: HandyIndexer): StaticRasterSet[];
export declare function makeHandyRasterSet(imageName: string, imageType: ImageType, rasterSetIndexer: HandyIndexer, anchor: number[]): StaticRasterSet;
declare type ImageType = 'icon' | 'texture';
export declare function getLayerImageProps(layer: PolygonStyleLayer | PointStyleLayer): {
    image: HandyValue<string>;
    imageType: ImageType;
    anchor: number[];
};
export declare function makeHandyStyleLayer(raw: StyleCustomLayer, additions?: HandyExtractorExpression[]): HandyCustomLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleLineLayer, additions?: HandyExtractorExpression[]): LineStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleLineExtrusionLayer, additions?: HandyExtractorExpression[]): LineExtrusionStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StylePolygonLayer, additions?: HandyExtractorExpression[]): PolygonStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleRoadPolygonLayer, additions?: HandyExtractorExpression[]): RoadPolygonStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleMeshLayer, additions?: HandyExtractorExpression[]): MeshStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StylePolygonExtrusionLayer, additions?: HandyExtractorExpression[]): PolygonExtrusionStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleDashedLineLayer, additions?: HandyExtractorExpression[]): DashedLineStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleShiftedLineLayer, additions?: HandyExtractorExpression[]): ShiftedLineStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleOneWayLineLayer, additions?: HandyExtractorExpression[]): OneWayLineStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleBuildingModelLayer, additions?: HandyExtractorExpression[]): BuildingModelStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleGltfModelLayer, additions?: HandyExtractorExpression[]): GltfModelStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleLabelLineLayer, additions?: HandyExtractorExpression[]): LabelLineStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StylePointLayer, additions?: HandyExtractorExpression[]): PointStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleArrowLayer, additions?: HandyExtractorExpression[]): ArrowStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleRasterLayer, additions?: HandyExtractorExpression[]): RasterStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: PrivateStyleCircleLayer, additions?: HandyExtractorExpression[]): CircleStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: StyleHeatmapLayer, additions?: HandyExtractorExpression[]): HeatmapStyleLayer | undefined;
export declare function makeHandyStyleLayer(raw: Exclude<StyleLayer, StyleGroupLayer> | PrivateStyleLayer, additions?: HandyExtractorExpression[]): HandyStyleLayer | HandyCustomLayer | undefined;
export declare function makeHandyGroupLayer(raw: StyleGroupLayer): HandyGroupLayer | undefined;
export declare function makeHandyDemLayer(demStyle: TerrainStyle): DemStyleLayer;
export declare function validNumOrDefault(x: number | undefined, xDefault: number): number;
export declare const testHandles: {
    makeHandyExpression: typeof makeHandyExpression;
    makeHandyStyleLayer: typeof makeHandyStyleLayer;
    makeHandyStyle: typeof makeHandyStyle;
};
export {};
