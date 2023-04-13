import { Map } from '../map';
import { LabelOptions } from '../types';
/**
 * Class for creating labels on the map.
 */
export declare class Label {
    /**
     * User specific data. Empty by default
     */
    userData: any;
    /**
     * Example:
     * ```js
     * const label = new mapgl.Label(map, {
     *     coordinates: map.getCenter(),
     *     text: 'There is hope',
     *     color: '#ff0000',
     *     fontSize: 24,
     * });
     * ```
     * @param map The map instance.
     * @param options Label options.
     */
    constructor(map: Map, options: LabelOptions);
    /**
     * Destroys the label.
     */
    destroy(): void;
    /**
     * Displays hidden label.
     */
    show(): this;
    /**
     * Hides the label.
     */
    hide(): this;
    /**
     * Sets geographical coordinates of the label.
     * @param coordinates Coordinates `[longitude, latitude]` where the center of the label with its anchor should be set.
     */
    setCoordinates(coordinates: number[]): this;
    /**
     * Returns geographical coordinates `[longitude, latitude]` of the label.
     */
    getCoordinates(): number[];
}
