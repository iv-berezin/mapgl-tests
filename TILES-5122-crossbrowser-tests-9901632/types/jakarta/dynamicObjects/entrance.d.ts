import { MapClass } from '../map';
import { DynamicObject } from './base/dynamicObject';
import { EntranceOptions } from '../types/dynamicObjects';
export declare class Entrance extends DynamicObject<Entrance> {
    bouncePosition: number;
    growPosition: number;
    private vectors;
    private options;
    private bounceTickerUpdate?;
    private growTickerUpdate?;
    private layerId;
    constructor(map: MapClass, options: EntranceOptions);
    update(): void;
    entranceAnimationInProgress(): boolean;
    remove(): void;
    private getTileInfo;
    private getVertices;
}
