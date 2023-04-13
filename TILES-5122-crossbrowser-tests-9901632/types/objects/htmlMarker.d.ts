import { Map } from '../map';
import { HtmlMarkerOptions } from '../types';
/**
 * Class for creating an HTML marker on the map.
 */
export declare class HtmlMarker {
    /**
     * User specific data. Empty by default
     */
    userData: any;
    /**
     * Example:
     * ```js
     * const htmlMarker = new mapgl.HtmlMarker(map, {
     *     coordinates: map.getCenter(),
     *     html: '<div>Some content</div>',
     * });
     * ```
     * @param map The map instance.
     * @param options HtmlMarker options.
     */
    constructor(map: Map, options: HtmlMarkerOptions);
    /**
     * Destroys the HTML marker.
     */
    destroy(): void;
    /**
     * Sets the geographical coordinates of the HTML marker.
     * @param coordinates Coordinates `[longitude, latitude]` where the top-left corner of the HTML marker with its anchor should be set.
     */
    setCoordinates(coordinates: number[]): this;
    /**
     * Sets the anchor relative to the top-left corner of the HTML marker.
     * @param anchor An anchor of the HTML marker in pixels.
     */
    setAnchor(anchor: number[]): this;
    /**
     * Sets the HTML content of the HTML marker.
     * @param html The content that will replace the current content of the HTML marker.
     */
    setContent(html: HTMLElement | string): this;
    /**
     * Returns current position of the top-left corner of the HTML marker with its anchor in geographical coordinates `[longitude, latitude]`.
     */
    getCoordinates(): number[];
    /**
     * Returns the HTML marker's anchor in pixels.
     */
    getAnchor(): number[];
    /**
     * Returns the whole HTMLElement of the marker.
     * Previously specified HTML content is a child of the element.
     */
    getContent(): HTMLElement;
}
