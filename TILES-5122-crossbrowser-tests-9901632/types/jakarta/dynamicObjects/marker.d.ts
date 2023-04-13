import { MapClass } from '../map';
import { MapPoint, ScreenPoint, GeoPoint } from '../types';
import { DraggableDynamicObject } from './base/draggable';
import { PointLabelOptions } from './pointLabel';
export interface MarkerIconOptions {
    icon: string;
    anchor?: number[];
    size?: number[];
}
export declare type MarkerLabelOptions = Omit<PointLabelOptions, 'coordinates'>;
export interface MarkerOptions {
    coordinates: GeoPoint;
    icon?: string;
    size?: number[];
    anchor?: number[];
    rotation?: number;
    hoverIcon?: string;
    hoverSize?: number[];
    hoverAnchor?: number[];
    zIndex?: number;
    minZoom?: number;
    maxZoom?: number;
    interactive?: boolean;
    draggable?: boolean;
    label?: MarkerLabelOptions;
}
export declare class Marker extends DraggableDynamicObject<Marker> {
    private position;
    private rotation;
    private map;
    private status;
    private normalStateData?;
    private hoverStateData?;
    private zIndex;
    private minZoom;
    private maxZoom;
    private interactive;
    private label?;
    constructor(map: MapClass, options: MarkerOptions);
    destroy(): void;
    setRotation(angle: number): void;
    getRotation(): number;
    setIcon(options: MarkerIconOptions): void;
    setHoverIcon(options?: MarkerIconOptions): void;
    /**
     * Устанавливает новую подпись у маркера.
     * Если передать undefined, то подпись просто удалится.
     */
    setLabel(labelOptions?: MarkerLabelOptions): void;
    setCoordinates(coordinates: number[]): void;
    getCoordinates(): number[];
    show(): void;
    hide(): void;
    protected setPosition(position: MapPoint): void;
    protected getPosition(): MapPoint;
    protected isInteractive(): boolean;
    protected contains(point: ScreenPoint): boolean;
    private switchToHoveredStyle;
    private switchToNormalStyle;
    private getMarkerStateData;
    private setIconInternal;
    private setHoverIconInternal;
}
