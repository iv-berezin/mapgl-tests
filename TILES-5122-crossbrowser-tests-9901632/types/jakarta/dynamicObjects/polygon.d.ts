import { MapClass } from '../map';
import { DynamicObject } from './base/dynamicObject';
import { PolygonOptions } from '../types/dynamicObjects';
export declare class Polygon extends DynamicObject<Polygon> {
    private options;
    private fillLayerId;
    private borderLayerId;
    private isInteractive;
    constructor(map: MapClass, options: PolygonOptions);
    remove(): void;
}
