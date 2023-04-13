import { Map } from '../map';
import { CircleOptions } from '../types';
import { Evented } from '../utils/evented';
import { DynamicObjectEventTable } from '../types/events';
/**
 * Class for creating a circle on the map
 */
export declare class Circle extends Evented<DynamicObjectEventTable<Circle>> {
    /**
     * User specific data. Empty by default
     */
    userData: any;
    private options;
    /**
     * Example:
     * ```js
     * const circle = new mapgl.Circle(map, {
     *     coordinates: map.getCenter(),
     *     radius: 500,
     * });
     * ```
     * @param map The map instance
     * @param options Circle options
     */
    constructor(map: Map, options: CircleOptions);
    /**
     * Destroys the circle
     */
    destroy(): void;
    private _emitPointerEvent;
}
