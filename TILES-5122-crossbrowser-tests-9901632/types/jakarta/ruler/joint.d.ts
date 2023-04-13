import { Evented } from '../utils/structures/evented';
import { GeoPoint } from '../types';
import { MapClass } from '../map';
import { DynamicObjectPointerEvent, DraggablePointerEvent } from '../types/events';
interface EventTable {
    mouseover: DynamicObjectPointerEvent<Joint>;
    mouseout: DynamicObjectPointerEvent<Joint>;
    dragstart: DraggablePointerEvent<Joint>;
    dragend: DraggablePointerEvent<Joint>;
    click: DynamicObjectPointerEvent<Joint>;
}
export declare class Joint extends Evented<EventTable> {
    private point;
    private label;
    private labelText;
    private distance;
    private marker;
    private markerOrLabelHovered;
    private hoverTimer?;
    constructor(map: MapClass, point: GeoPoint, isFirstPoint: boolean, distance: number);
    getDistance(): number;
    getPoint(): GeoPoint;
    getMarkerUniqId(): number;
    getLabelUniqId(): number;
    setPoint(point: GeoPoint): void;
    remove(): void;
    activateHover(): void;
    deactivateHover(): void;
    private markerOrLabelMouseover;
    private markerOrLabelMouseout;
    private onClick;
}
export {};
