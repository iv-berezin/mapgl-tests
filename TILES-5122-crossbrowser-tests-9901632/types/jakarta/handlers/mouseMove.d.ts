import { MapModules } from '../map/mapModules';
export declare class MouseMove {
    private container;
    private prevGeo?;
    private skipIdentifyEvents;
    private modules;
    private isBlocked;
    /**
     * Необходимо исключить события mousemove, которые были вызваны после touchstart,
     * поскольку обработчик MouseMove отрабатывает данную ситуация некорректно: класс
     * mapgl-hover у контейнера карты не будет удаляться, в результате чего, при таче
     * контейнер карты будет выделяться
     */
    private isTouchStartEmitted;
    constructor(modules: MapModules);
    destroy(): void;
    update(): void;
    block(): void;
    unblock(): void;
    private onTouchStart;
    private onMouseOut;
    private onMouseMove;
}
