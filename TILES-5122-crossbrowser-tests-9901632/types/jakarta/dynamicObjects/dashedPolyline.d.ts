import { MapClass } from '../map';
import { DynamicObject } from './base/dynamicObject';
import { DashedPolylineOptions } from '../types/dynamicObjects';
export declare class DashedPolyline extends DynamicObject<DashedPolyline> {
    private options;
    private readonly dashLayerRaw;
    private readonly dashLayer;
    private readonly baseLayerRaw;
    private readonly baseLayer;
    private readonly interactive;
    private stateDiffer;
    private readonly debouncedGenerate;
    private removed;
    private readonly tileAttrs;
    private readonly points;
    /**  Массив расстояний от начала полилинии до каждого из её узлов */
    private distances;
    private length;
    private animationTickerName?;
    constructor(map: MapClass, options: DashedPolylineOptions);
    update(): void;
    setStyle(style: Partial<Pick<DashedPolylineOptions, 'dashColor' | 'dash2Color' | 'gapColor'>>): void;
    remove(): void;
    private updateShowTicker;
    private startShowTicker;
    private generate;
}
