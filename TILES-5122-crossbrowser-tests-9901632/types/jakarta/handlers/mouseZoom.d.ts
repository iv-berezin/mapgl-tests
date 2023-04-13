import { MapState } from '../types';
export declare class MouseZoom {
    private screenPoint;
    private eventCount;
    private deltaAccumulator;
    private container;
    private state;
    constructor(state: MapState, container: HTMLElement);
    destroy(): void;
    update(): void;
    /**
     * Событие на изменение позиции скролла
     */
    private onWheelScroll;
    private getDelta;
    private startZooming;
    private stop;
}
