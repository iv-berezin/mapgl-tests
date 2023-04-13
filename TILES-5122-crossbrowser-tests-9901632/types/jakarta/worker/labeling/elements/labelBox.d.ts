/// <reference types="@2gis/gl-matrix" />
import { LabelingElementType, LabelingGroupTable } from '../../../types/labeling';
import { LabelingTileElement } from './labelingTile';
import { HandyStyle } from '../../../expressions/types';
import { Camera } from '../../../map/camera';
interface LabelBoxLabel {
    styleId: number;
    layer: {
        innerId: number;
    };
    idLo: number;
    idHi: number;
    symbol: string;
    phase: number;
}
/**
 * Элемент лейблинга занимающий прямоугольник на экране.
 * После успешной генерализации, генерировать его не нужно, но результат необходимо передать в главный тред.
 */
export declare class LabelBoxElement {
    type: LabelingElementType.Box;
    id: string;
    label: LabelBoxLabel;
    /**
     * Может указывать на иконки POI, к которой конкретный LabelBox привязан
     */
    parent?: LabelingTileElement;
    /**
     * Оставлен для совместимости
     */
    firstLabel: undefined;
    /**
     * Положение якоря в координатах карты.
     * Четвертый элемент оставлен для совместимости.
     */
    anchorWorld: Vec4;
    anchorScreen: Vec2;
    groupPriority: number;
    itemPriority: number;
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
    marginTopBottom: number;
    marginLeftRight: number;
    constructor(id: number, width: number, height: number, position: Vec3, offset: Vec2, buildingHeight: number, camera: Camera, style: HandyStyle, labelingGroup: string, parent: LabelingTileElement | undefined, itemPriority: number | undefined, groupPriority: number | undefined);
}
export {};
