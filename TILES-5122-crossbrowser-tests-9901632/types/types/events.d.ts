import { Style } from './styles';
import { Feature } from 'geojson';
import { GeoJsonSource } from '../index';
/**
 * The list of events that can be emitted by the map.
 */
export interface MapEventTable {
    /**
     * Emitted repeatedly during any movement of the map.
     */
    move: MapEvent;
    /**
     * Emitted before any movement of the map.
     */
    movestart: MapEvent;
    /**
     * Emitted after any movement of the map.
     */
    moveend: MapEvent;
    /**
     * Emitted repeatedly during any change in the map's center.
     */
    center: MapEvent;
    /**
     * Emitted before any change in the map's center.
     */
    centerstart: MapEvent;
    /**
     * Emitted after any change in the map's center.
     */
    centerend: MapEvent;
    /**
     * Emitted repeatedly during any change in zoom level.
     */
    zoom: MapEvent;
    /**
     * Emitted before any change in zoom level.
     */
    zoomstart: MapEvent;
    /**
     * Emitted after any change in zoom level.
     */
    zoomend: MapEvent;
    /**
     * Emitted repeatedly during any change in the map's pitch.
     */
    rotation: MapEvent;
    /**
     * Emitted before any change in the map's pitch.
     */
    rotationstart: MapEvent;
    /**
     * Emitted after any change in the map's pitch.
     */
    rotationend: MapEvent;
    /**
     * Emitted repeatedly during any change in the map's pitch.
     */
    pitch: MapEvent;
    /**
     * Emitted before any change in the map's pitch.
     */
    pitchstart: MapEvent;
    /**
     * Emitted after any change in the map's pitch.
     */
    pitchend: MapEvent;
    /**
     * Emitted when the map is clicked.
     */
    click: MapPointerEvent;
    /**
     * Emitted when the map is clicked by right button.
     */
    contextmenu: MapPointerEvent;
    /**
     * Emitted when the user moves the pointer over the map.
     */
    mousemove: MapPointerEvent;
    /**
     * Emitted when the user hovers over a map item.
     */
    mouseover: MapPointerEvent;
    /**
     * Emitted when the user moves the mouse away from the map item.
     */
    mouseout: MapPointerEvent;
    /**
     * Emitted when the user presses a mouse button over the map.
     */
    mousedown: MapPointerEvent;
    /**
     * Emitted when the user releases the mouse button over the map.
     */
    mouseup: MapPointerEvent;
    /**
     * Emitted when the user taps on the map.
     */
    touchstart: MapPointerEvent;
    /**
     * Emitted when the user lifts the finger off the map.
     */
    touchend: MapPointerEvent;
    /**
     * Emitted when the map becomes idle after some interaction (drag, zoom etc).
     * Idle means that the map is not interacting, all tiles are drawn and labeling is finished.
     * This event doesn't take into account any asset loading (for example, marker icons).
     */
    idle: MapEvent;
    /**
     * Emitted after any change in the map's size.
     */
    resize: MapEvent;
    /**
     * Emitted before the traffic layer showed on the map.
     */
    trafficshow: TrafficVisibilityEvent;
    /**
     * Emitted after the traffic layer hid from the map.
     */
    traffichide: TrafficVisibilityEvent;
    /**
     * Emitted after update current traffic score.
     */
    trafficscore: TrafficScoreEvent;
    /**
     * Emitted after the floor plan is shown on the map.
     */
    floorplanshow: FloorPlanShowEvent;
    /**
     * Emitted after the floor plan is disappeared from the map.
     */
    floorplanhide: FloorPlanHideEvent;
    /**
     * Emitted after the floor plan level is changed.
     */
    floorlevelchange: FloorLevelChangeEvent;
    /**
     * Emitted after the map style is loaded.
     */
    styleload: StyleLoadEvent;
    /**
     * Emitted after the map language is changed.
     */
    changeLanguage: ChangeLanguageEvent;
    /**
     * Emitted after the map is destroyed.
     */
    destroy: DestroyMapEvent;
}
/**
 * The list of events that can be emitted by markers.
 */
export interface DynamicObjectEventTable<T = any> {
    /**
     * Emitted when the marker is clicked.
     */
    click: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user moves the pointer over the marker.
     */
    mousemove: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user hovers over the marker.
     */
    mouseover: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user moves the mouse away from the marker.
     */
    mouseout: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user presses a mouse button over the marker.
     */
    mousedown: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user releases the mouse button over the marker.
     */
    mouseup: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user taps on the marker.
     */
    touchstart: DynamicObjectPointerEvent<T>;
    /**
     * Emitted when the user lifts the finger off the marker.
     */
    touchend: DynamicObjectPointerEvent<T>;
}
/**
 * The general event type for map events.
 */
export interface MapEvent {
    /**
     * True if event was emitted by user's interaction.
     */
    isUser: boolean;
}
/**
 * The basic event type for pointer-related events.
 */
export interface PointerEvent {
    /**
     * The original DOM event.
     */
    originalEvent: MouseEvent | TouchEvent;
    /**
     * Geographical coordinates of the event.
     */
    lngLat: number[];
    /**
     * Screen coordinates of the event.
     */
    point: number[];
}
/**
 * The event type for pointer-related map events.
 */
export interface MapPointerEvent extends PointerEvent {
    /**
     * Target (geographical object) of the event.
     */
    target?: EventTarget;
    /**
     * The source target data of a pointer event.
     */
    targetData?: EventTargetData;
}
/**
 * The target of a pointer event.
 */
export interface EventTarget {
    /**
     * ID of the target object.
     */
    id: string;
}
/**
 * The target data of a pointer event.
 */
export declare type EventTargetData = GeoJsonEventTargetData | DefaultEventTargetData;
/**
 * The GeoJson target data of a pointer event.
 */
export interface GeoJsonEventTargetData {
    /**
     * Type the geojson event data.
     */
    type: 'geojson';
    /**
     * GeoJson source.
     */
    source: GeoJsonSource;
    /**
     * GeoJson feature.
     */
    feature: Feature;
}
/**
 * The default targetData of a pointer event.
 */
export interface DefaultEventTargetData {
    /**
     * Type the default event data.
     */
    type: 'default';
    /**
     * ID of the target object.
     */
    id: string;
    /**
     * ID of the particular floor.
     * It's specified when the target object is a part of a floor plan object (e.g. the room in a building).
     */
    floorId?: string;
}
/**
 * The event type for pointer-related map object events.
 */
export interface DynamicObjectPointerEvent<T> extends PointerEvent {
    /**
     * The target map object of a pointer event.
     */
    targetData: T;
}
/**
 * Contains current traffic score.
 */
export interface TrafficScoreEvent {
    /**
     * Current traffic score
     */
    score: number;
}
/**
 * Emitted when traffic visibility state changes
 */
export interface TrafficVisibilityEvent {
}
/**
 * Contains a floor level data.
 */
export interface FloorLevel {
    /**
     * A floor level index
     */
    floorLevelIndex: number;
    /**
     * A floor level name
     */
    floorLevelName: string;
}
/**
 * Contains an appeared floor plan data.
 */
export interface FloorPlanShowEvent {
    /**
     * An id of an appeared floor plan.
     */
    floorPlanId: string;
    /**
     * An index of a current displayed floor level.
     */
    currentFloorLevelIndex: number;
    /**
     * All available floor plan levels.
     */
    floorLevels: FloorLevel[];
}
/**
 * Contains a disappeared floor plan data.
 */
export interface FloorPlanHideEvent {
    /**
     * An id of a disappeared floor plan.
     */
    floorPlanId: string;
}
/**
 * Contains a current floor level data.
 */
export interface FloorLevelChangeEvent {
    /**
     * An id of a floor plan.
     */
    floorPlanId: string;
    /**
     * A current level index of a floor plan.
     */
    floorLevelIndex: number;
    /**
     * A current level name of a floor plan.
     */
    floorLevelName: string;
}
/**
 * Contains currently loaded style response
 */
export interface StyleLoadEvent {
    /**
     * Style object, ID or URL. Depends on the way the style was set.
     */
    style: string | Style;
}
/**
 * Contains current map language
 */
export interface ChangeLanguageEvent {
    /**
     * Language short name.
     */
    lang: string;
}
/**
 * Destroy event.
 */
export interface DestroyMapEvent {
}
