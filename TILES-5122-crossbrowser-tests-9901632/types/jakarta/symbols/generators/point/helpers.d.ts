/// <reference types="@2gis/gl-matrix" />
import { HandySimpleType, LabelingResolveContext, PointStyleLayer } from '../../../expressions/types';
import { TextPlacement } from '../../../types/publicStyles';
import { Raster } from '../../../types/styles';
import { FullTextMetrics } from '../../../utils/fonts';
/**
 * Возвращает размеры иконки в логических пикселях.
 * Учитывает размеры textMetrics текстовой подписи, если они переданы.
 */
export declare function getIconSizes(raster: Raster | undefined, pixelRatio: number, layer: PointStyleLayer, expContext: LabelingResolveContext<HandySimpleType>, isStretchable: boolean, textMetrics?: FullTextMetrics): Vec2;
/**
 * Возвращает размеры контейнера текстовой подписи в логических пикселях.
 */
export declare function getTextSizes(layer: PointStyleLayer, expContext: LabelingResolveContext<any>, textMetrics: FullTextMetrics): Vec2;
/**
 * Возвращает размеры контейнера второй текстовой подписи в логических пикселях.
 */
export declare function getTextSizes2(layer: PointStyleLayer, expContext: LabelingResolveContext<any>, textMetrics2: FullTextMetrics): Vec2;
/**
 * Возвращает размеры контейнера текстовой подписи на иконке в логических пикселях.
 */
export declare function getIconTextSizes(layer: PointStyleLayer, expContext: LabelingResolveContext<any>, iconTextMetrics: FullTextMetrics): Vec2;
/**
 * Рассчитывает сдвиг иконки без текстовой подписи в логических пикселях так, чтобы точка
 * соответствующая относительному якорю иконки была смещена от гео-центра объекта
 * на offset[0] по горизонтали и offset[1] по вертикали.
 *
 * Центр системы координат иконки совпадает с гео-позицией объекта,
 * а оси X и Y направлены вправо и вниз соответственно. По умолчанию иконка позиционируется
 * своим центром в начало координат. Таким образом, чтобы к примеру, левый верхний угол иконки
 * оказался в начале координат, нужно сместить иконку вправо и вниз на половину ее размеров.
 */
export declare function getAnchorOffsetsForIcon(raster: Raster, iconSize: Vec2, offset: number[]): number[];
/**
 * Рассчитывает сдвиг текстовой подписи на иконке в логических пикселях так, чтобы точка
 * соответствующая относительному якорю контейнера подписи была смещена от гео-центра объекта
 * на offset[0] по горизонтали и offset[1] по вертикали.
 *
 * Центр системы координат бокса подписи совпадает с гео-позицией объекта,
 * а оси X и Y направлены вправо и вниз соответственно. По умолчанию бокс подписи позиционируется
 * своим центром в начало координат. Таким образом, чтобы к примеру, левый верхний угол подписи
 * оказался в начале координат, нужно сместить подпись вправо и вниз на половину ее размеров.
 */
export declare function getAnchorOffsetsForIconText(iconTextSizes: Vec2, iconTextAnchor: number[], offset: number[]): number[];
/**
 * Рассчитывает сдвиг иконки с текстовой подписью в логических пикселях так, чтобы точка
 * соответствующая относительному якорю контейнера текстовой подписи была смещена от гео-центра объекта
 * на offset[0] по горизонтали и offset[1] по вертикали.
 *
 * Тут основной смысл в том, что сперва нужно правильно спозиционировать бокс текстовой подписи,
 * а уже потом спозиционировать иконку относительно текстовой подписи с учетом полей.
 */
export declare function getAnchorOffsetsForIconWithText(iconSize: Vec2, iconTextSizes: Vec2, iconTextAnchor: number[], iconTextPadding: [number, number, number, number], offset: number[]): number[];
export declare function getTextOffsets(placement: TextPlacement, poiSizes: Vec2, textSizes: Vec2, anchorOffsets: Vec2, poiLabelOffset: number): Vec2;
