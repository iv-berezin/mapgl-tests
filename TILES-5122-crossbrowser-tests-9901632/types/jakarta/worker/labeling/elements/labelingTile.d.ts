/// <reference types="@2gis/gl-matrix" />
import { Label, LabelingStyleLayer } from '../label';
import { LabelingElementType, LabelingGroupTable } from '../../../types/labeling';
import { HandyStyle } from '../../../expressions/types';
import { Camera } from '../../../map/camera';
/**
 * Положение якоря объекта в координатах карты.
 *
 * Плоский массив [x, y, z, angle], где
 *
 *   - x, y — соответствующие координаты вершины геометрии лейбла в мап-поинтах,
 *   - z - высота,
 *   - angle — угол линии в случае распределения объекта вдоль линии.
 */
export declare type AnchorWorld = [number, number, number, number];
/**
 * Сущность, представляющая собой минимальный элемент, участвующий в лейблинге.
 */
export declare class LabelingTileElement {
    id: string;
    type: LabelingElementType.Text | LabelingElementType.Icon | LabelingElementType.PoiText | LabelingElementType.PoiText2 | LabelingElementType.OneWayLine | LabelingElementType.LineText;
    label: Label;
    layer: LabelingStyleLayer;
    /**
     * В случае текста POI, parent равен иконке этого POI.
     * В других случаях не используется.
     */
    parent?: LabelingTileElement;
    /**
     * В случае второй подписи у POI, firstLabel равен элементу лейблинга первой подписи
     */
    firstLabel?: LabelingTileElement;
    /**
     * Положение якоря в координатах карты.
     */
    anchorWorld: AnchorWorld;
    anchorScreen: Vec2;
    /**
     * Положение якоря на направляющей.
     * Есть только в линейных лейблах.
     */
    anchorPosition: number;
    /**
     * Индекс сегмента направляющей, в котором находится якорь.
     * Есть только в линейных лейблах.
     */
    anchorSegmentIndex: number;
    /**
     * Половина длины лейбла в координатах карты.
     * Есть только в линейных лейблах.
     */
    halfLabelWidth: number;
    groupPriority: number;
    itemPriority: number;
    /**
     * Случайный фактор приоритета. Используется, в коммерческих POI
     * когда элементы лейблинга по какой-то причине равны по остальным факторам,
     * чтобы приоритезация была стабильной.
     */
    commPriorityRandomFactor: number;
    /**
     * Каждый box — это координаты прямоугольника `[x1, y1, x2, y2]`
     * На основе этих прямоугольников и происходит генерализация
     */
    boxes: Vec4[];
    /**
     * Сюда записывается результат генерализации:
     * - `-1` — лейбл не будет отображаться
     * - `[0, ∞]` — лейбл отображается и равен индексу в массиве boxes
     */
    placementIndex: number;
    labelingGroup: string;
    labelingGroupTable: LabelingGroupTable;
    /**
     * Уровень style zoom, на котором направляющая линейного лейбла становится слишком
     * короткой, чтобы вместить его полностью. Если текущий масштаб карты становится
     * меньше overflowStyleZoom, подпись мгновенно скрывается. Используется только для
     * символа labelLine.
     */
    overflowStyleZoom: number;
    marginTopBottom: number;
    marginLeftRight: number;
    elevation: number;
    constructor(label: Label, type: number, anchorWorld: AnchorWorld, buildingHeight: number, camera: Camera, style: HandyStyle);
    /**
     * Костыль добавляет уникальность в id элемента лейблинга для poi
     * сделано чтобы icon у poi с одинаковыми приоритетами лейблинга были не уникальными
     * для работы анимации hover у иконок poi, и добавить уникальность у элементов которые
     * используют один объект в данных для нескольких слоев одновременно:
     * иконка метро и номер входа метро.
     *
     * Для элементов лейблинга с типом Icon и стилевым слоем point
     * TODO: убрать в TILES-4218
     */
    private getIconLabelPriorityToId;
}
