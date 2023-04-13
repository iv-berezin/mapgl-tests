import { MouseZoom } from '../handlers/mouseZoom';
import { Inertia } from '../handlers/inertia';
import { EventProxy } from '../handlers/eventProxy';
import { GestureZoomRotate } from '../handlers/gestureZoomRotate';
import { MapClass } from './index';
import { MapState, MapOptions } from '../types';
import { PerformanceChecker } from './perfomanceChecker';
import { MapModules } from './mapModules';
/**
 * Главный класс карты.
 * Обеспечивает связь всех компонентов карты, запускает обновление карты 60 раз в секунду.
 */
export declare class MapCore {
    static options: MapOptions;
    handlers: Array<MouseZoom | Inertia | EventProxy | GestureZoomRotate>;
    state: MapState;
    performanceChecker: PerformanceChecker;
    modules: MapModules;
    private stillnessUpdater;
    private requestedFrame;
    private isStyleUpdateInProgress;
    private isFirstStyleUpdate;
    private lastResizeTime;
    constructor(container: HTMLElement, userOptions: Partial<MapOptions> | undefined, map: MapClass);
    destroy(): void;
    isIdle(): boolean;
    isReady(): boolean;
    /**
     * Запускает перегенерацию и перерисовку всей карты.
     */
    redrawMap(): void;
    activateStyleUpdating(): void;
    getIsFirstStyleUpdate(): boolean;
    private renderLoop;
    private finishStyleUpdatingCheck;
    private onWindowUnload;
    /**
     * Здесь храним логику включения/отключения модуля рельефа.
     * Сейчас модуль включается если в стейте карты `terrainEnabled` == `true`
     */
    private checkDemEnabled;
    /**
     * Обновляет границу, в пределах которой карта будет запрашивать тайлы.
     */
    private updateTilesBounds;
    /**
     * Инкрементно обновляет высоту над уровнем моря в центре карты,
     * и записывает ее в стейт карты.
     */
    private updateElevation;
    /**
     * Если с последнего ресайза канваса прошло времени больше, чем  AUTO_RESIZE_INTERVAL,
     * ресайзим карту, если размеры rootContainer изменились
     */
    private autoResize;
}
