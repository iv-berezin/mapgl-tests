import { TileCoords, Stats, GeoPoint, OnlinePerformanceMetrics } from '.';
import { FirmsToFloorIndexMap } from './floors';
import { Style } from './publicStyles';
import { Feature } from 'geojson';
import { GeoJsonSource, GeoJsonTileSource, ZenithSource } from '../index';
import { GeneratingLayerType } from './generatedSceneObjects';
import { BssAdsPriority } from '../../bss';
export interface MapEventTable {
    framestart: undefined;
    frameend: undefined;
    update: undefined;
    stats: Stats;
    gpuRenderTime: number;
    performancecaveat: undefined;
    idle: MapEvent;
    ready: MapEvent;
    resize: MapEvent;
    move: MapEvent;
    movestart: MapEvent;
    moveend: MapEvent;
    center: MapEvent;
    centerstart: MapEvent;
    centerend: MapEvent;
    zoom: MapEvent;
    zoomstart: MapEvent;
    zoomend: MapEvent;
    rotation: MapEvent;
    rotationstart: MapEvent;
    rotationend: MapEvent;
    pitch: MapEvent;
    pitchstart: MapEvent;
    pitchend: MapEvent;
    interactionstart: InteractionEvent;
    interactionend: InteractionEvent;
    click: MapPointerEvent;
    dblclick: MapPointerEvent;
    contextmenu: MapPointerEvent;
    mousemove: MapPointerEvent;
    mouseover: MapPointerEvent;
    mouseout: MapPointerEvent;
    mousedown: MapPointerEvent;
    mouseup: MapPointerEvent;
    touchstart: MapPointerEvent;
    touchend: MapPointerEvent;
    tileload: TileLoadEvent;
    invalidtilekey: undefined;
    floorcomplexhide: FloorComplexHideEvent;
    floorcomplexshow: FloorComplexShowEvent;
    floorcomplexlevelchange: FloorComplexLevelChange;
    rulerchange: RulerChangeEvent;
    trafficshow: undefined;
    traffichide: undefined;
    trafficscore: TrafficScoreEvent;
    styleload: StyleLoadEvent;
    commpoishow: CommPoiEvent;
    commmodelshow: CommModelEvent;
    commmodelhide: CommModelEvent;
    metrics: OnlinePerformanceMetrics;
}
export interface CommPoiEventCommPoi extends BssAdsPriority {
    id: string;
}
export interface CommPoiEvent {
    commPois: CommPoiEventCommPoi[];
}
export interface MapEvent {
    isUser: boolean;
}
export interface EventTarget {
    id: string;
    symbol: GeneratingLayerType;
    isText?: boolean;
    isCityCommercial?: boolean;
    isCommercial?: boolean;
    isPersonal?: boolean;
    sysCode?: string;
    center?: number[];
}
export interface GeoJsonSourceTargetData {
    type: 'geojson';
    id: string;
    source: GeoJsonSource;
    feature: Feature;
}
export interface GeoJsonTileSourceTargetData {
    type: 'geojsonTile';
    source: GeoJsonTileSource;
    getFeatureProperties: () => Promise<any>;
}
export interface ZenithSourceTargetData {
    type: 'zenith';
    id: string;
    source: ZenithSource;
}
export interface DefaultSourceTargetData {
    type: 'default';
    id: string;
    floorId?: string;
}
export interface PointerEvent {
    originalEvent: MouseEvent | TouchEvent;
    lngLat: number[];
    point: number[];
}
export interface MapPointerEvent extends PointerEvent {
    target?: EventTarget;
    targetData?: EventSourceTargetData;
}
export interface DynamicObjectPointerEvent<T = any> extends PointerEvent {
    /** Ссылка на динамический объект, который породил событие */
    targetData: T;
}
export interface DraggablePointerEvent<T = any> extends DynamicObjectPointerEvent<T> {
    /**
     * Свойство нужно, что бы определять над каким объектом находится таскаемый объект.
     * Используется онлайном в поиске проезда.
     */
    target?: EventTarget;
}
export interface TileLoadEvent {
    tileCoords: TileCoords;
    regionId: number;
}
export interface StyleLoadEvent {
    style: string | Style;
}
export interface FloorComplexHideEvent {
    id: string;
}
export interface FloorComplexShowEvent {
    id: string;
    currentFloor: number;
    floorNames: string[];
    firmsToFloorIndexMap: FirmsToFloorIndexMap;
}
export interface FloorComplexLevelChange {
    id: string;
    floorIndex: number;
    floorName: string;
}
export declare type InteractionTarget = 'pitch/zoom/rotation' | 'pitch/rotation' | 'zoom/rotation' | 'center';
export interface InteractionEvent {
    target: InteractionTarget;
}
export interface RulerChangeEvent {
    points: GeoPoint[];
    isUser: boolean;
}
export interface TrafficScoreEvent {
    score: number;
}
export interface HTMLMarkerShownEvent<T> {
    id: string;
    point: number[];
    object: T;
}
export interface TilesSetChangedEvent {
    tileIds: string[];
}
export interface DataTileLoadedEvent<T> {
    tileId: string;
    data: T | undefined;
}
export interface DataTileClearedEvent {
    tileId: string;
}
export declare type EventSourceTargetData = GeoJsonSourceTargetData | GeoJsonTileSourceTargetData | DefaultSourceTargetData | ZenithSourceTargetData;
export interface CommModelEvent {
    buildingId: string;
}
