import { Map } from '../map';
import { PolylineOptions } from '../types';
import { Evented } from '../utils/evented';
import { DynamicObjectEventTable } from '../types/events';
/**
 * Class for creating a polyline on the map
 */
export declare class Polyline extends Evented<DynamicObjectEventTable<Polyline>> {
    /**
     * User specific data. Empty by default
     */
    userData: any;
    private options;
    /**
     * Example:
     * ```js
     * const polyline = new mapgl.Polyline(map, {
     *     coordinates: [
     *         [82.878543, 54.975937],
     *         [82.903049, 54.981333],
     *         [82.929373, 54.973391],
     *     ],
     * });
     * ```
     * @param map The map instance
     * @param options Polyline options
     */
    constructor(map: Map, options: PolylineOptions);
    /**
     * Destroys the polyline
     */
    destroy(): void;
    private _emitPointerEvent;
}
