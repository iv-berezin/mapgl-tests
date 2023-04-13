import { MetatileGeneratedLabels, StyleState } from '../../types';
import { LabelingTileElement } from './elements/labelingTile';
import { LabelAxis } from './labelAxis';
import { FullTextMetrics } from '../../utils/fonts';
import { LabelSource, LabelPointType, LabelGeometryType } from '../../types/labeling';
import { StyleManager } from '../../styleManager/common';
import { LabelLineStyleLayer, OneWayLineStyleLayer, PointStyleLayer } from '../../expressions/types';
import { ObjectAttributeValue } from '../../utils/objectAttributes';
import { PreLabelPoint } from '../../symbols/generators/preLabeling/point';
import { PreLabel } from '../../symbols/generators/preLabeling/common';
import { PreLabelLine } from '../../symbols/generators/preLabeling/line';
import { PreLabelOneWayLine } from '../../symbols/generators/preLabeling/oneWayLine';
export declare type LabelingStyleLayer = OneWayLineStyleLayer | PointStyleLayer | LabelLineStyleLayer;
export declare function unpackPreLabelingResult(preLabels: MetatileGeneratedLabels[], source: LabelSource, styleManager: StyleManager, styleState: StyleState, styleZoom: number): Label[];
/**
 * Класс, описывающий лейбл карты. Примеры лейблов: любая иконка (poi),
 * подпись poi, номер дома, название улицы, направление одностороннего движения и т.п.
 * Каждый лейбл агрегирует связанные между собой элементы LabelingElement.
 * Взаимоотношение между лейблами и элементами лейблинга такое:
 *
 *  1. У плоских надписей есть один элемент лейблинга — вся надпись
 *  2. У лейблов-POI два элемента лейблинга — один на иконку и один на текст
 *  3. У дорожных надписей есть несколько элементов лейблинга — по одному на
 *     каждый из повторов надписи
 */
export declare class Label {
    styleId: number;
    layer: LabelingStyleLayer;
    metatileHash: number;
    source: LabelSource;
    sourceId: number;
    tileData: ObjectAttributeValue[];
    rtlProcessed: boolean;
    labelingElements: LabelingTileElement[];
    /**
     * 64-битный ID в виде строки
     */
    id: string;
    /**
     * Первая часть 64-битного ID в виде 32-битного числа
     */
    idLo: number;
    /**
     * Вторая часть 64-битного ID в виде 32-битного числа
     */
    idHi: number;
    detailLevel: number;
    labelPriority: number;
    label: string;
    ranges: number[];
    /**
     * Метрика основной текстовой подписи
     *
     * TODO: Убрать восклицательный знак у textMetrics
     */
    textMetrics: FullTextMetrics;
    pointType: LabelPointType;
    geometryType: LabelGeometryType;
    iconPriority: number;
    identifyIndex: number;
    identifyPoiLabelIndex: number;
    hovered: number;
    label2Priority: number;
    label2?: string;
    iconLabel?: string;
    /**
     * Метрика второй подписи, может быть только для точечного объекта
     */
    textMetrics2?: FullTextMetrics;
    /**
     * Метрика подписи поверх иконки, может быть только для точечного объекта
     */
    iconTextMetrics?: FullTextMetrics;
    /**
     * Плоский массив координат вершин геометрии лейбла в мап-поинтах:
     * — для Point с точечной геометрией - это массив из 3-х элементов [x, y, z]
     * — для Point c линейной геометрией, Line и OneWayLine - [x1, y1, 0, x2, y2, 0, x3, y3, 0, ...]
     */
    mapPointVertices: number[];
    /**
     * Высота из тайлов рельефа
     */
    demElevation: number;
    /**
     * Эффективная высота лейбла. На практике это высота относительно высоты центра карты
     * (рельеф в своей работе опускает карту вниз на высоту центра)
     */
    elevation: number;
    axis: LabelAxis;
    componentDistanceStartWorld: number;
    componentDistanceEnd: number;
    componentDistanceStart: number;
    objectLengthWorld: number;
    constructor(label: PreLabel, layer: LabelingStyleLayer, source: LabelSource, metatileHash: number);
    setSpecificPointAttributes(label: PreLabelPoint, styleState: StyleState, styleZoom: number): void;
    setSpecificLineAttributes(label: PreLabelLine, styleState: StyleState, styleZoom: number): void;
    setSpecificOneWayAttributes(label: PreLabelOneWayLine): void;
    updateRanges(): void;
}
