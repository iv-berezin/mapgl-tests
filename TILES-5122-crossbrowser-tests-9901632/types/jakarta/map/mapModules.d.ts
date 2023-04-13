import { MouseMove } from '../handlers/mouseMove';
import { BuildingHeightAnimator } from '../handlers/buildingHeight';
import { GltfAnimator } from '../handlers/gltfAnimator';
import { Collector } from '../worker/collector';
import { Renderer } from './renderer';
import { Identifier } from './identifier';
import { AssetManager } from './assetManager';
import { BuildingModelLayer } from '../buildingModels/buildingModelLayer';
import { PersonalPoiManager } from './personalPoiManager';
import { Workers } from './workers';
import { MapClass } from './index';
import { MapLayers } from './layers';
import { DynamicStyle } from '../dynamicObjects/base/dynamicStyle';
import { MarkerIconManager } from './markerIconManager';
import { FloorManager } from '../floors/floorManager';
import { MapState } from '../types';
import { TileManager } from './tileManager';
import { Labeler } from './labeler';
import { Ruler } from '../ruler/ruler';
import { Handler } from '../handlers/handler';
import { TrafficTileLayer } from '../tiles/trafficTileLayer';
import { Layout } from './layout';
import { ImageManager } from './imageManager';
import { MasterStyleManager } from '../styleManager/master';
import { TileKeyInfo } from './tileKeyInfo';
import { SourceStorage } from './sourceStorage';
import { DefaultSource } from '../sources/defaultSource';
import { Camera } from './camera';
import { DemManager } from './demManager';
import { LabelsDebug } from './labelsDebug';
import { ThreeJsSceneManagerProxy } from '../threeJsSceneManager';
/**
 * Содержит в себе все компоненты карты главного потока.
 * Представляет собой некий аналог модульной системы.
 */
export declare class MapModules {
    map: MapClass;
    camera: Camera;
    layout: Layout;
    workers: Workers;
    renderer: Renderer;
    collector: Collector;
    identifier: Identifier;
    tileManager: TileManager;
    assetManager: AssetManager;
    imageManager: ImageManager;
    floorManager: FloorManager;
    modelLayer: BuildingModelLayer;
    sourceStorage: SourceStorage;
    personalPoiManager: PersonalPoiManager;
    dynamicStyle: DynamicStyle;
    imageCache: MarkerIconManager;
    layers: MapLayers;
    buildingHeightAnimator: BuildingHeightAnimator;
    gltfAnimator: GltfAnimator;
    labeler: Labeler;
    ruler: Ruler;
    trafficTileLayer: TrafficTileLayer;
    handler: Handler;
    tileKeyInfo: TileKeyInfo;
    demManager: DemManager;
    labelsDebug: LabelsDebug;
    threeJsSceneManager?: ThreeJsSceneManagerProxy;
    /**
     * Перенесен сюда из хэндлеров карты, т.к. до него
     * необходим доступ из draggable динамических объектов
     */
    mouseMoveHandler: MouseMove;
    styleManager: MasterStyleManager;
    /**
     * DefaultSource добавлен явно, т.к. другие модули вызывают его методы для ховеров.
     * Этот source также хранится в SourceStorage на общих основаниях с другими источниками данных.
     */
    defaultSource: DefaultSource;
    constructor(state: MapState, container: HTMLElement, map: MapClass);
    destroy(): void;
}
