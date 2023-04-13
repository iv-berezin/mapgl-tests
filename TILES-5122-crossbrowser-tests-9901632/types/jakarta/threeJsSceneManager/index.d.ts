/// <reference types="@2gis/gl-matrix" />
import { MapModules } from '../map/mapModules';
import { MapState } from '../types';
import { ObjectAttributes } from '../utils/objectAttributes';
interface ThreeJsManager {
    isReady: () => boolean;
    render: () => void;
    update: (modelsAttributes: ModelAttributes[]) => void;
    hasDisplayedBuilding: (id: string) => boolean;
    getEventTarget: (e: MouseEvent | TouchEvent) => ReturnType<ThreeJsSceneManager['getEventTarget']> | undefined;
}
/**
 * Three.js весит очень много, поэтому загружаем его лениво.
 * Все вызовы методов проходят через прокси, он инициирует загрузку
 * скриптов, когда в тайловых объектах появляется объект с данными
 * для рендеринга gltf-модели. До инициализации ThreeJsSceneManager
 * прокси отправляет запросы в объект-пустышку ThreeJsSceneManagerEmpty
 */
export declare class ThreeJsSceneManagerProxy implements ThreeJsManager {
    private state;
    private modules;
    private impl;
    private scriptFetchState;
    constructor(state: MapState, modules: MapModules);
    getEventTarget(e: MouseEvent | TouchEvent): {
        target: import("three").Intersection<import("three").Object3D<import("three").Event>>;
        distance: number;
        symbol: "buildingModel";
        id: any;
    } | undefined;
    hasDisplayedBuilding(id: string): boolean;
    isReady(): boolean;
    render(): void;
    update(): void;
}
interface ModelAttributes extends ObjectAttributes {
    model: THREE.Object3D;
    name: string;
    modelSrc: string;
    buildingId: string;
    lngLat: Vec2;
    lngLatDirection: Vec2;
    layerId: number;
    styleId: number;
}
declare class ThreeJsSceneManager implements ThreeJsManager {
    private state;
    private modules;
    private three;
    private maxStyleZoom;
    private minStyleZoom;
    private isModelReady;
    private modelFetchState;
    private loader;
    private renderer;
    private pointer;
    private raycaster;
    private scene;
    private tmpMatrix;
    private camera;
    private modelDataMap;
    private modelIds;
    private displayedModelAttributes;
    private modelsVisibilityMap;
    private modelsMapPoints;
    constructor(state: MapState, modules: MapModules, three: typeof import('three'));
    render(): void;
    hasDisplayedBuilding(id: string): boolean;
    /**
     * Получение объекта, на котором произошло событие
     * Этот метод учитывает дополнительных отступы вьюпорта,
     * устанавливаемые с помощью метода карты `setViewport`
     * при выезжании дашборда в Онлайне
     */
    getEventTarget(e: MouseEvent | TouchEvent): {
        target: import("three").Intersection<import("three").Object3D<import("three").Event>>;
        distance: number;
        symbol: "buildingModel";
        id: any;
    } | undefined;
    isReady(): boolean;
    update(modelsAttributes: ModelAttributes[]): void;
    private getThreeJsViewportBounds;
    private updateMinAndMaxStyleZoom;
    private updateModelsVisibilityState;
    private appendHiddenObjectIds;
    private loadAndDisplayModels;
    private removeOldModels;
    /**
     * Сообщает THREE.js что ресурсы занимаемые объектом можно смело освобождать.
     * https://github.com/Marco-Sulla/my3/blob/master/my3.js#L125-L162
     */
    private disposeObject;
}
export {};
