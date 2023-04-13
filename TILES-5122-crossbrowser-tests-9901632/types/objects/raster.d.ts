import { LngLatBounds } from './lngLatBounds';
import { Map } from '../map';
import { RasterOptions } from '../types/index';
/**
 * Class for creating a raster on the map.
 */
export declare class Raster {
    private options;
    /**
     * Example:
     * ```js
     * const raster = new mapgl.Raster(map, {
     *     bounds: map.getBounds(),
     *     image: {
     *         url: 'some/url'
     *     },
     * });
     * ```
     * @param map The map instance.
     * @param options Raster options.
     */
    constructor(map: Map, options: RasterOptions);
    /**
     * Updates an image URL or size of the raster on the map.
     * @param options Options that include a URL or geographical bounds.
     */
    updateImage(options: {
        url?: string;
        bounds?: LngLatBounds;
    }): Promise<void>;
    /**
     * Destroys the raster.
     */
    destroy(): void;
}
