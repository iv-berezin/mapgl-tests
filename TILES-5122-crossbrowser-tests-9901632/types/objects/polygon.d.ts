import { Map } from '../map';
import { PolygonOptions } from '../types';
import { Evented } from '../utils/evented';
import { DynamicObjectEventTable } from '../types/events';
/**
 * Class for creating a polygon on the map
 */
export declare class Polygon extends Evented<DynamicObjectEventTable<Polygon>> {
    /**
     * User specific data. Empty by default
     */
    userData: any;
    private options;
    /**
     * Example:
     * ```js
     * const polygon = new mapgl.Polygon(map, {
     *     coordinates: [
     *         [
     *             [82.878543, 54.975937],
     *             [82.903049, 54.981333],
     *             [82.929373, 54.973391],
     *             [82.902421, 54.996199],
     *             [82.878543, 54.975937],
     *         ],
     *         [
     *             [82.908136, 54.987526],
     *             [82.899028, 54.983494],
     *             [82.897673, 54.988904],
     *             [82.908136, 54.987526],
     *         ],
     *     ],
     *     color: '#990000',
     *     strokeColor: '#bb0000',
     * });
     * ```
     * @param map The map instance
     * @param options Polygon options
     */
    constructor(map: Map, options: PolygonOptions);
    /**
     * Destroys the polygon
     */
    destroy(): void;
    private _emitPointerEvent;
}
