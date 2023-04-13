import { MapClass } from '../map';
import { DynamicObject } from './base/dynamicObject';
import { GeoPoint } from '../types';
import { PolylineOptions } from '../types/dynamicObjects';
interface SnapInfo {
    point: GeoPoint;
    distance: number;
}
export declare class Polyline extends DynamicObject<Polyline> {
    /** Cтиль основной линии */
    private styleLayerId;
    private rawStyleLayer;
    /** Cтиль линии обводки */
    private styleLayer2Id;
    private rawStyleLayer2;
    /** Cтиль линии тени */
    private styleLayer3Id;
    private rawStyleLayer3;
    private geoPoints;
    private points;
    /**  Массив расстояний от начала полилинии до каждого из её узлов */
    private distances;
    private length;
    private options;
    private stateDiffer;
    private debouncedGenerate;
    private removed;
    private tileAttrs;
    private isInteractive;
    private animationTickerName?;
    constructor(map: MapClass, options: PolylineOptions);
    update(): void;
    snapPoint(point: number[]): SnapInfo;
    setStyle(style: Partial<Pick<PolylineOptions, 'color' | 'color2' | 'color3'>>): void;
    remove(): void;
    private startShowTicker;
    private setSubLayerStyle;
    private updateShowTicker;
    private generate;
}
export {};
