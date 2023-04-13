import { MapModules } from '../map/mapModules';
/**
 * Хэндлер для простого проксирования эвентов с контейнера карты на саму карту
 */
export declare class EventProxy {
    private container;
    private modules;
    constructor(modules: MapModules);
    destroy(): void;
    update(): void;
    private emitMouseEvent;
    private emitTouchEvent;
    private emitEvent;
}
