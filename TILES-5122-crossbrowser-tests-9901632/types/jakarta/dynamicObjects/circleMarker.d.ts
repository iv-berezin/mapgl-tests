import { MapClass } from '../map';
import { MapPoint, ScreenPoint } from '../types';
import { DraggableDynamicObject } from './base/draggable';
import { CircleMarkerOptions } from '../types/dynamicObjects';
export declare class CircleMarker extends DraggableDynamicObject<CircleMarker> {
    private center;
    private options;
    private layer;
    private interactive;
    constructor(map: MapClass, options: CircleMarkerOptions);
    remove(): void;
    setPosition(point: MapPoint): void;
    getPosition(): MapPoint;
    protected isInteractive(): boolean;
    protected contains(point: ScreenPoint): boolean;
}
