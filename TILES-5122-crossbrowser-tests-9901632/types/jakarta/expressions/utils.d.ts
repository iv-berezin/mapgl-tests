import { BooleanOrExpression } from '../types/publicStyles';
import { FontNames } from '../types/styles';
import { ArrowStyleLayer, LineStyleLayer, PolygonStyleLayer, HandyStyleLayer, HandyStyle } from './types';
/**
 * Вернет true, если слой в параметрах — это PolygonStyleLayer
 */
export declare function isPolygonStyleLayer(layer: HandyStyleLayer | undefined): layer is PolygonStyleLayer;
/**
 * Вернет true, если слой в параметрах — это ArrowStyleLayer
 */
export declare function isArrowStyleLayer(layer: HandyStyleLayer | undefined): layer is ArrowStyleLayer;
/**
 * Вернет true, если слой в параметрах — это LineStyleLayer
 */
export declare function isLineStyleLayer(layer: HandyStyleLayer | undefined): layer is LineStyleLayer;
/**
 * Преобразовывает массив шрифтов в обратное представление - шрифт -> индекс
 */
export declare function getFontNameIndexes(fontNames: FontNames): HandyStyle['fontNameToIndex'];
export declare function isZenithDataFilter(expr: BooleanOrExpression | undefined): boolean;
