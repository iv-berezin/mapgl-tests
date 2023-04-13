import { MapClass } from '../../map';
import { DynamicObject } from '../..';
import { ScreenPoint, MapPoint } from '../../types';
export declare abstract class DraggableDynamicObject<T = any> extends DynamicObject<T> {
    private container;
    private dragStartCursorPoint?;
    private dragStartAnchorPoint?;
    constructor(map: MapClass, isDraggable?: boolean);
    destroy(): void;
    private start;
    private move;
    private stop;
    private emitEvent;
    protected abstract setPosition(point: MapPoint): any;
    protected abstract getPosition(): MapPoint;
    protected abstract isInteractive(): boolean;
    protected abstract contains(point: ScreenPoint): boolean;
}
