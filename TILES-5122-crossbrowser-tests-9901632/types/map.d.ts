import { MapOptions, FitBoundsOptions, Padding, StyleState, SupportedSimpleOpts, GLContext } from './types';
import { MapEventTable } from './types/events';
import { AnimationOptions, RotationAnimationOptions, ZoomAnimationOptions } from './types/animations';
import { Evented } from './utils/evented';
import { LngLatBounds, LngLatBoundsClass } from './objects/lngLatBounds';
import { Layer, StyleIconConfig } from './types/styles';
import { DefaultSource } from './sources/defaultSource';
/**
 * The main class for map initialization.
 */
export declare class Map extends Evented<MapEventTable> {
    /**
     * Example:
     * ```js
     * const map = new mapgl.Map('map', {
     *   center: [55.185346, 25.14226],
     *   zoom: 16,
     * });
     * ```
     * @param container The HTML element in which the map appears, or its ID.
     * @param options Map initialization options.
     */
    constructor(container: HTMLElement | string, options: MapOptions);
    /**
     * Sets the geographical center of the map.
     * @param center The desired coordinates (`[longitude, latitude]`).
     * @param options Center animation options.
     */
    setCenter(center: number[], options?: AnimationOptions): this;
    /**
     * Returns the current map center in geographical coordinates (`[longitude, latitude]`).
     */
    getCenter(): number[];
    /**
     * Sets the map zoom.
     * @param zoom The desired zoom.
     * @param options Zoom animation options.
     */
    setZoom(zoom: number, options?: ZoomAnimationOptions): this;
    /**
     * Returns the current map zoom.
     */
    getZoom(): number;
    /**
     * Returns the current map style zoom.
     */
    getStyleZoom(): number;
    /**
     * Sets the map style zoom.
     * @param styleZoom The desired style zoom.
     * @param options Zoom animation options.
     */
    setStyleZoom(styleZoom: number, options?: AnimationOptions): this;
    /**
     * Sets the map rotation angle.
     * @param rotation The desired map rotation in degrees.
     * @param options Rotation animation options.
     */
    setRotation(rotation: number, options?: RotationAnimationOptions): this;
    /**
     * Returns the current map rotation in degrees.
     */
    getRotation(): number;
    /**
     * Sets the map pitch angle.
     * @param pitch The desired map pitch in degrees.
     * @param options Pitch animation options.
     */
    setPitch(pitch: number, options?: AnimationOptions): this;
    /**
     * Returns the current map pitch in degrees.
     */
    getPitch(): number;
    /**
     * Sets the minimum map zoom.
     * @param zoom The desired minimum zoom.
     * @param options Options for adjusting map zoom in case the current zoom is less than the new minimum.
     */
    setMinZoom(zoom: number, options?: AnimationOptions): this;
    /**
     * Returns the current minimum map zoom.
     */
    getMinZoom(): number;
    /**
     * Returns the current maximum map zoom.
     */
    getMaxZoom(): number;
    /**
     * Sets the maximum map zoom.
     * @param zoom The desired maximum zoom.
     * @param options Options for adjusting map zoom in case the current zoom is more than the new maximum.
     */
    setMaxZoom(zoom: number, options?: AnimationOptions): this;
    /**
     * Sets the minimum map pitch.
     * @param pitch The desired minimum pitch in degrees.
     * @param options Options for animating the pitch in case the current pitch is less than the new minimum.
     */
    setMinPitch(pitch: number, options?: AnimationOptions): this;
    /**
     * Sets the maximum map pitch.
     * @param pitch The desired maximum pitch in degrees.
     * @param options Options for animating the pitch in case the current pitch is more than the new maximum.
     */
    setMaxPitch(pitch: number, options?: AnimationOptions): this;
    /**
     * Returns the current map size in logical pixels.
     */
    getSize(): number[];
    /**
     * Returns true if the map isn't moving and has rendered all the viewport tiles.
     */
    isIdle(): boolean;
    /**
     * Returns the geographical bounds visible in the current map view.
     */
    getBounds(): LngLatBoundsClass;
    /**
     * Returns pixel coordinates `[x, y, z]`, relative to the map's container, that correspond to the specified geographical coordinates.
     * `Z` coordinate is deprecated.
     * @param lngLat The geographical coordinates `[longitude, latitude]` to project.
     */
    project(lngLat: number[]): number[];
    /**
     * Returns geographical coordinates `[longitude, latitude]` that correspond to the specified pixel coordinates.
     * @param point The pixel coordinates `[x, y]` of the map's container to unproject.
     */
    unproject(point: number[]): number[];
    /**
     * Returns the view projection matrix associated with the current state of the map.
     * @deprecated
     */
    getProjectionMatrix(): number[];
    /**
     * Returns WebGLRenderingContext of the map canvas.
     */
    getWebGLContext(): GLContext;
    /**
     * Returns HTMLCanvasElement of the map.
     */
    getCanvas(): HTMLCanvasElement;
    /**
     * Returns HTML-container of the map.
     */
    getContainer(): HTMLElement;
    /**
     * Updates the map size. This method should be called after any change in the map container size.
     */
    invalidateSize(): this;
    /**
     * Shows the traffic layer on the map.
     */
    showTraffic(): this;
    /**
     * Hides the traffic layer from the map.
     */
    hideTraffic(): this;
    /**
     * Selects objects on the map by identifiers.
     * @param ids An array of identifiers of objects that should be selected.
     */
    setSelectedObjects(ids?: string[]): this;
    /**
     * Uploads styles object by its id and apply it to the map.
     * Returns a promise that contains param styleId.
     * @param styleId uuid of the style.
     */
    setStyleById(styleId: string): Promise<string>;
    /**
     * Sets the desired map language.
     * @param lang short string code 'en', 'ru', ...etc
     */
    setLanguage(lang: string): this;
    /**
     * Returns the desired map language.
     */
    getLanguage(): string;
    /**
     * Sets a floorLevel of the floorPlan.
     * @param floorPlanId id of the floor plan
     * @param floorLevelIndex floorLevelIndex in floorLevels list
     */
    setFloorPlanLevel(floorPlanId: string, floorLevelIndex: number): void;
    /**
     * Sets a bound to limit movings on map
     * @param bounds 2 lon-lat points to limit square
     */
    setMaxBounds(bounds: LngLatBounds): this;
    /**
     * Returns the current map padding.
     */
    getPadding(): Padding;
    /**
     * Returns the map default source.
     */
    getDefaultSource(): DefaultSource;
    /**
     * Sets the map padding.
     * The padding on each side has a clamp to a positive value no larger than the map canvas size for either side
     * @param padding Padding in pixels from the different sides of the map canvas
     * @param options Padding animation options.
     */
    setPadding(padding: Partial<Padding>, options?: AnimationOptions): this;
    /**
     * Adds a style layer to the current map style.
     * @param layer Style layer object.
     * @param beforeId The identifier of an existing layer to insert the new layer before, resulting in the new layer appearing visually beneath the existing layer. If this argument is not specified, the layer will be appended to the end of the layers array and appear visually above all other layers.
     *
     * Throws an error if:
     * - the layer with specified id already exists in the current map style;
     * - the layer with specified beforeId doesn't exist in the current map style;
     * - one group layer is inserted into another group layer.
     */
    addLayer(layer: Layer, beforeId?: string): this;
    /**
     * Adds a config of user icon that will be used in the current style.
     * If an icon with the same name already exists, it won't be added and applied to the current style.
     * @param name A user icon name.
     * @param config A config with parameters for user icon.
     */
    addIcon(name: string, config: StyleIconConfig): this;
    /**
     * Removes a specified icon from the current style.
     * @param name An icon name to remove.
     */
    removeIcon(name: string): this;
    /**
     * Removes the layer with the given identifier from the current map style.
     * @param layerId The identifier of the layer to remove.
     *
     * Throws an error if layer with specified id does not exist in the current map style.
     */
    removeLayer(layerId: string): this;
    /**
     * Pans and zooms the map to contain its visible area within the specified geographical bounds.
     * This method also resets the map pitch and rotation to 0.
     * But the map rotation can be saved by option considerRotation
     *
     * @param bounds The geographical bounds to fit in
     * @param options FitBounds options
     */
    fitBounds(bounds: LngLatBounds, options?: FitBoundsOptions): this;
    /**
     * Sets whole map style global variables at once, any previously set variables will be reset or overridden.
     *
     * @param styleState
     */
    setStyleState(styleState: StyleState): this;
    /**
     * Returns the current map style variables.
     *
     * Available global variables:
     * _activeFloorBuildingIds — an array of building IDs with active floor plans
     * _activeFloorIds — an array of active floor IDs from buildings with active floor plans
     * trafficOn - a flag which tells if traffic is enabled
     * parkingOn - a flag which tells if parking is enabled (used in native version of 2gis)
     * navigatorOn - a flag which tells if navigator is enabled (used in native version of 2gis)
     */
    getStyleState(): StyleState;
    /**
     * Sets options that affect the map style.
     * @param options The style options.
     *
     * @hidden
     */
    setStyleOptions(options: {
        traffic: boolean;
    }): this;
    /**
     * Sets a new value for the map option.
     * @param option Map option name. Only 'disableDragging', 'enableTrackResize' options are available
     * @param value New value of the map option.
     */
    setOption(option: SupportedSimpleOpts, value: any): this;
    /**
     * Gets a value of the map option.
     * @param option Map option name. Only 'disableDragging', 'enableTrackResize' options are available
     */
    getOption(option: SupportedSimpleOpts): boolean | undefined;
    /**
     * Patches map style global variables. Use this method if you want to change a particular variable and left other ones intact.
     *
     * @param styleState
     */
    patchStyleState(styleState: StyleState): this;
    /**
     * Destroys the map and frees all related resources.
     */
    destroy(): void;
    /**
     * Calls the map rerender.
     */
    triggerRerender(): void;
    /**
     * Sets padding for controls layout.
     * @param  {Partial<Padding>} padding. Unspecified values will be replaced with default values.
     */
    setControlsLayoutPadding(padding: Partial<Padding>): void;
    /**
     * Gets current padding of controls layout.
     */
    getControlsLayoutPadding(): Padding;
    private _emitMapEvent;
    private _emitMapPointerEvent;
    private _initControls;
}
