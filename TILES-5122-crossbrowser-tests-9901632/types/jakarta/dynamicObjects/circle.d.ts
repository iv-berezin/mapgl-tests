import { CircleOptions } from '../types/dynamicObjects';
import { DynamicObject } from './base/dynamicObject';
import { MapClass } from '../map';
export declare class Circle extends DynamicObject<Circle> {
    private options;
    private layerId;
    private isInteractive;
    constructor(map: MapClass, options: CircleOptions);
    remove(): void;
}
